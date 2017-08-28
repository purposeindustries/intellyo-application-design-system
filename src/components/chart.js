import React from 'react';
import Card from './card';

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

const Preloader = (props) => (
  <div className="chart-preloader">
    <div className="chart-preloader-title" />
    <div className="chart-preloader-caption" />
    {
      (() => {
        switch (props.type) {
          case 'bar':
            return <PreloaderBar />
        }
      })()
    }
  </div>
);

Preloader.displayName = 'ChartPreloader';

export { Preloader };

class Chart extends React.Component {
  displayName = 'Chart';
  render() {
    return (
      <div className="chart">
        <Card>
          {
            this.props.loading ? <Preloader type={ this.props.type} /> : 'Hello, Chart!'
          }
        </Card>
      </div>
    );
  }
}

export default Chart;
