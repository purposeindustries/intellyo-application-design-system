import React from 'react';
import Card from '../card';
import Caption from '../caption';
import PropTypes from 'prop-types';

const Preloader = () => (
  <div className="chart-preloader">
    <div className="chart-preloader-title" />
    <div className="chart-preloader-caption" />
    <div className="chart-preloader-body" />
  </div>
);

Preloader.displayName = 'ChartPreloader';

const BodyPreloader = () => (
  <div className="chart-preloader">
    <div className="chart-preloader-body" />
  </div>
);

BodyPreloader.displayName = 'ChartReloader';

const EmptyChart = () => (
  <div className="chart--empty">
    <p className="chart--empty-figure">¯\_(ツ)_/¯</p>
    <Caption>
      There is nothing to show.
    </Caption>
  </div>
);

EmptyChart.displayName = 'EmptyChart';

class Chart extends React.Component {
  static displayName = 'Chart'

  static propTypes = {
    loading: PropTypes.bool,
    bodyLoading: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.object),
    layout: PropTypes.object,
    title: PropTypes.string,
    titleCaption: PropTypes.string,
    children: PropTypes.node,
    renderPreloader: PropTypes.func,
    renderBodyPreloader: PropTypes.func,
    onPointHover: PropTypes.func,
    onPointUnhover: PropTypes.func,
    header: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)]),
    body: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)])
  }

  static defaultProps = {
    onPointHover: () => {},
    onPointUnhover: () => {}
  }

  handleResize = () => {
    this.Plotly.Plots.resize(this.chartEl);
  }

  componentDidMount() {

    if (this.props.data) {
      this.initChart();
    }
  }

  componentDidUpdate(props) {
    if (props.data !== this.props.data) {
      this.initChart();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    if (this.Plotly && this.chartEl) {
      this.Plotly.purge(this.chartEl);
    }
  }

  initChart() {

    const el = this.chartEl;

    if (!el) {
      return;
    }

    if (!this.Plotly) {
      this.Plotly = require('plotly.js/lib/core');
      this.Plotly.register([
        require('plotly.js/lib/scatter')
      ]);
    } else {
      this.Plotly.purge(this.chartEl);
    }

    this.Plotly.newPlot(el, this.props.data, Object.assign({}, (this.props.layout || {}), {
      displaylogo: false,
    }), {
      displayModeBar: false,
      modeBarButtonsToRemove: [
        'toImage',
        'sendDataToCloud',
        'zoom2d',
        'pan2d',
        'select2d',
        'lasso2d',
        'zoomIn2d',
        'zoomOut2d',
        'autoScale2d',
        'resetScale2d',
        'hoverClosestCartesian',
        'hoverCompareCartesian',
        'zoom3d',
        'pan3d',
        'orbitRotation',
        'tableRotation',
        'resetCameraDefault3d',
        'resetCameraLastSave3d',
        'hoverClosest3d',
        'zoomInGeo',
        'zoomOutGeo',
        'resetGeo',
        'hoverClosestGeo',
        'hoverClosestGl2d',
        'hoverClosestPie',
        'toggleHover',
        'resetViews',
        'toggleSpikelines'
      ]
    });

    window.addEventListener('resize', this.handleResize);
    this.Plotly.Plots.resize(this.chartEl);

    this.chartEl.on('plotly_hover', (data) => {
      if (data.points && data.points.length) {
        const point = data.points[0];
        const y = point.y;
        const x = point.x;
        this.props.onPointHover({ x, y, point });
      }
    });

    this.chartEl.on('plotly_unhover', () => {
      this.props.onPointUnhover();
    });
  }

  renderChildren() {
    let body;
    if (this.props.bodyLoading) {
      if (typeof this.props.renderBodyPreloader === 'function') {
        body = this.props.renderBodyPreloader();
      } else {
        body = <BodyPreloader />;
      }
    } else if (!this.props.bodyLoading &&
       (!this.props.data || this.props.data.length === 0)) {
      body = <EmptyChart />;
    } else {
      body = (
        <div className="chart-body">
          { this.props.children }
          <div
            className="chart-container"
            ref={ el => {
              this.chartEl = el;
            } }
          />
        </div>
      );
    }
    return (
      <div className="chart-wrapper">
        { this.props.header && (
          <div className="chart-header">
            { this.props.header }
          </div>
        ) }
        { body }
      </div>
    );
  }

  render() {
    let body;
    if (this.props.loading) {
      if (typeof this.props.renderPreloader === 'function') {
        body = (
          <Card>
            { this.props.renderPreloader() }
          </Card>
        );
      } else {
        body = (
          <Card>
            <Preloader />
          </Card>
        );
      }
    } else {
      body = (
        <Card
          title={ this.props.title }
          titleCaption={ this.props.titleCaption }
        >
          { this.renderChildren() }
        </Card>
      );
    }
    return (
      <div className="chart">{ body }</div>
    );
  }
}

export default Chart;
