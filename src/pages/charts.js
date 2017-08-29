import React from 'react';
import DisplayText from '../components/display-text';
import Chart from '../components/chart';
import Card from '../components/card/';
import Row from '../components/row';
import Col from '../components/col';
import ChartTraceSummaryItem from '../components/chart-trace-summary-item';

class ChartsPage extends React.Component {
  displayName = 'ChartsPage'
  render() {
    return (
      <div className="charts-page">
        <DisplayText className="header">Charts</DisplayText>
        <Chart type="bar" loading={ true } />
        <Card>
          <Row>
            <Col span={ 2 }>
              <ChartTraceSummaryItem
                color="#FFB946"
                title="Intel"
                number="273"
                analytics="+ 23% (avg.)"
              />
            </Col>
            <Col span={ 2 }>
              <ChartTraceSummaryItem
                color="#00BEA9"
                title="Intellyo"
                number="1.7k"
                analytics="+ 423% (avg.)"
              />
            </Col>
            <Col span={ 2 }>
              <ChartTraceSummaryItem />
            </Col>
          </Row>
        </Card>
        <Chart
          title="Audience Growth"
          titleCaption="Likes gained by week"
          type="bar"
          layout={ {
            'margin': {
              'l': 50,
              'r': 15,
              't': 15,
              'b': 50
            },
            'hovermode': 'closest',
            'autosize': true,
            'showlegend': true,
            'xaxis': {
              'range': [
                '2017-07-01',
                '2017-08-02'
              ],
              'title': 'Date',
              'type': 'date',
              'autorange': true,
              'showgrid': false
            },
            'yaxis': {
              'range': [
                80,
                140
              ],
              'type': 'linear',
              'autorange': true,
              'title': 'Likes'
            }
          } }
          data={ [
            {
              'showlegend': false,
              'uid': '455353',
              'ysrc': 'ngaal:0:32bf30',
              'xsrc': 'ngaal:0:073c98',
              'mode': 'lines',
              'y': [
                '100',
                '105.1694655',
                '95.33527639',
                '95.26944593',
                '99.18510924',
                '108.3346396',
                '114.5994381',
                '111.9246476',
                '110.6662566',
                '112.0496634',
                '122.2386098',
                '112.5122571',
                '114.0964892',
                '105.2698299',
                '98.7998006',
                '107.527416',
                '100.0816141',
                '102.4976663',
                '99.72863062',
                '90.65937276',
                '95.86125117',
                '95.05507405',
                '102.4281638',
                '112.1893504',
                '119.8652957',
                '126.9878106',
                '127.1317388',
                '114.1255975',
                '117.158768',
                '111.1826084',
                '117.6807637',
                '112.913625',
                '118.7983804'
              ],
              'x': [
                '2017-07-01',
                '2017-07-02',
                '2017-07-03',
                '2017-07-04',
                '2017-07-05',
                '2017-07-06',
                '2017-07-07',
                '2017-07-08',
                '2017-07-09',
                '2017-07-10',
                '2017-07-11',
                '2017-07-12',
                '2017-07-13',
                '2017-07-14',
                '2017-07-15',
                '2017-07-16',
                '2017-07-17',
                '2017-07-18',
                '2017-07-19',
                '2017-07-20',
                '2017-07-21',
                '2017-07-22',
                '2017-07-23',
                '2017-07-24',
                '2017-07-25',
                '2017-07-26',
                '2017-07-27',
                '2017-07-28',
                '2017-07-29',
                '2017-07-30',
                '2017-07-31',
                '2017-08-01',
                '2017-08-02'
              ],
              'line': {
                'shape': 'spline'
              },
              'type': 'scatter',
              'name': 'B'
            },
            {
              'showlegend': false,
              'uid': '690e9d',
              'ysrc': 'ngaal:0:c73b3f',
              'connectgaps': false,
              'xsrc': 'ngaal:0:073c98',
              'mode': 'lines',
              'y': [
                '90',
                '94.67009572',
                '102.215961',
                '105.5978735',
                '104.5153394',
                '113.0140199',
                '123.8569581',
                '132.199465',
                '114.676343',
                '110.3236219',
                '113.2268945',
                '114.7838945',
                '110.2613785',
                '118.6171649',
                '111.6938798',
                '118.2467292',
                '110.4518382',
                '110.8783251',
                '115.1064821',
                '118.2574142',
                '137.7566769',
                '136.5105569',
                '129.1014611',
                '125.9088913',
                '118.7616458',
                '114.4506617',
                '111.0202329',
                '116.6725178',
                '119.7153591',
                '113.6960028',
                '104.251626',
                '97.04501338',
                '100.9417071'
              ],
              'x': [
                '2017-07-01',
                '2017-07-02',
                '2017-07-03',
                '2017-07-04',
                '2017-07-05',
                '2017-07-06',
                '2017-07-07',
                '2017-07-08',
                '2017-07-09',
                '2017-07-10',
                '2017-07-11',
                '2017-07-12',
                '2017-07-13',
                '2017-07-14',
                '2017-07-15',
                '2017-07-16',
                '2017-07-17',
                '2017-07-18',
                '2017-07-19',
                '2017-07-20',
                '2017-07-21',
                '2017-07-22',
                '2017-07-23',
                '2017-07-24',
                '2017-07-25',
                '2017-07-26',
                '2017-07-27',
                '2017-07-28',
                '2017-07-29',
                '2017-07-30',
                '2017-07-31',
                '2017-08-01',
                '2017-08-02'
              ],
              'line': {
                'color': 'rgb(255, 185, 70)',
                'shape': 'spline'
              },
              'type': 'scatter',
              'name': 'C'
            }
          ] }
        />
      </div>
    );
  }
}

export default ChartsPage;
