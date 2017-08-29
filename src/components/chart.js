import React from 'react';
import Card from './card';
import PropTypes from 'prop-types';

const PreloaderBar = () => (
  <div className="chart-preloader-bar">
    <div className="chart-preloader-bar-body">
      <div className="chart-preloader-bar-items">
        {
          [
            58,
            66,
            58,
            72,
            40,
            83,
            105,
            141,
            72,
            83,
            58,
            37,
            50
          ].map((size, i) => (
            <div
              className="chart-preloader-bar-items-bar"
              key={ `chart-preloader-bar-items-bar-${i}` }
              style={ {
                height: `${size}px`
              } }
            />
          ))
        }
      </div>
    </div>
  </div>
);

PreloaderBar.displayName = 'ChartPreloaderBar';

const Preloader = (props) => (
  <div className="chart-preloader">
    <div className="chart-preloader-title" />
    <div className="chart-preloader-caption" />
    {
      (() => {
        switch (props.type) {
          case 'bar':
            return <PreloaderBar />;
        }
      })()
    }
  </div>
);

Preloader.displayName = 'ChartPreloader';

Preloader.propTypes = {
  type: PropTypes.string
};

class Chart extends React.Component {
  static displayName = 'Chart'

  static propTypes = {
    loading: PropTypes.bool,
    type: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.object),
    layout: PropTypes.object,
    title: PropTypes.string,
    titleCaption: PropTypes.string
  }

  componentDidMount() {

    this.Plotly = require('plotly.js/lib/core');

    this.Plotly.register([
      require('plotly.js/lib/scatter')
    ]);

    if (this.props.data) {
      this.initChart();
    }
  }

  componentWillReceiveProps(props) {
    if (props.data !== this.props.data) {
      this.initChart();
    }
  }

  initChart() {

    const el = document.getElementById('chart-container');
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
  }

  render() {
    return (
      <div className="chart">
        <Card
          title={ this.props.title }
          titleCaption={ this.props.titleCaption }
        >
          {
            this.props.loading ? <Preloader type={ this.props.type } /> : (
              <div id="chart-container" />
            )
          }
        </Card>
      </div>
    );
  }
}

export default Chart;
