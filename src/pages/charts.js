import React from 'react';
import DisplayText from '../components/display-text/';
import Chart, {
  types,
  color,
  layouts
} from '../components/chart/';
import Card from '../components/card/';
import Row from '../components/row/';
import ButtonGroup from '../components/button-group/';
import Button from '../components/button/';
import HorizontallyScrollableRow from '../components/horizontally-scrollable-row/';
import Col from '../components/col/';
import ChartTraceSummaryItem from '../components/chart-trace-summary-item/';
import data from '../utils/dummy-chart-data';
import { layout } from '../utils/dummy-chart-layout';

const colors = ['#00BEAC', '#9575CD'];

class ChartsPage extends React.Component {
  displayName = 'ChartsPage'
  render() {
    return (
      <div className="charts-page">
        <DisplayText className="header">Charts</DisplayText>
        <Row>
          <Col span={ 6 }>
            <Chart
              data={ color(
                types.bar(data),
                colors,
              ) }
              layout={ layout }
              title="Basic bar chart"
            />
            <Chart
              data={ color(
                types.scatter(data),
                colors
              ) }
              layout={ layout }
              title="Scatter chart"
            />
          </Col>
          <Col span={ 6 }>
            <Chart
              layout={ layout }
              data={ color(
                types.spline(data),
                colors
              ) }
              title="Basic line chart"
            />
            <Chart
              data={ color(
                types.bar(data),
                colors
              ) }
              layout={ layouts.stackedBar(layout) }
              title="Stacked bar chart"
            />
          </Col>
        </Row>

        <Row>
          <Col span={ 6 }>
            <DisplayText>Custom Preloader</DisplayText>
            <Chart
              renderPreloader={ () => (
                <p style={ {'text-align': 'center'} }>
                  ⛅️☁️☁️<br />
                  ☁️👴🏻☁️<br />
                  ☁️👇🏻☁️<br />
                  ☁️👆🏻☁️<br />
                  ☁️👼🏻☁️<br />
                  ☁️☁️☁️<br />
                  The creation of Adam by Michelangelo
                </p>
              ) }
              loading={ true }
              title="Audience Growth"
              titleCaption="Likes gained by week"
              data={ data }
            />
            <DisplayText>Chart summaries</DisplayText>
            <Card>
              <HorizontallyScrollableRow>
                <ChartTraceSummaryItem
                  color="#FFB946"
                  title="Intel"
                  value="273"
                  data={ 0.23 }
                />
                <ChartTraceSummaryItem
                  color="#00BEA9"
                  title="Intellyo"
                  value="1.7k"
                  data={ 4.23 }
                />
                <ChartTraceSummaryItem
                  title="Italiano"
                  value="666"
                  data={ -0.5 }
                />
              </HorizontallyScrollableRow>
            </Card>
            <DisplayText>Empty Chart</DisplayText>
            <Chart
              type="bar"
              title="Audience Growth"
              titleCaption="Likes gained by week"
            />
          </Col>
          <Col span={ 6 }>
            <DisplayText>Body loading</DisplayText>
            <Chart
              bodyLoading={ true }
              title="Audience Growth"
              titleCaption="Likes gained by week"
              type="bar"
              header={
                <ButtonGroup>
                  <Button
                    neutral={ true }
                  >
                    7-DAY
                  </Button>
                  <Button
                    neutral={ true }
                  >
                    30-DAY
                  </Button>
                  <Button
                    neutral={ true }
                  >
                    90-DAY
                  </Button>
                </ButtonGroup>
              }
              layout={ layout }
              data={ data }
            >
              <HorizontallyScrollableRow>
                <ChartTraceSummaryItem
                  color="#FFB946"
                  title="Intel"
                  value="273"
                  data="+ 23% (avg.)"
                />
                <ChartTraceSummaryItem
                  color="#00BEA9"
                  title="Intellyo"
                  value="1.7k"
                  data="+ 423% (avg.)"
                />
                <ChartTraceSummaryItem />
              </HorizontallyScrollableRow>
            </Chart>
            <DisplayText>Custom BodyPreloader</DisplayText>
            <Chart
              bodyLoading={ true }
              renderBodyPreloader={ () => (
                <p style={ {'text-align': 'center'} }>
                  ⛅️☁️☁️<br />
                  ☁️👴🏻☁️<br />
                  ☁️👇🏻☁️<br />
                  ☁️👆🏻☁️<br />
                  ☁️👼🏻☁️<br />
                  ☁️☁️☁️<br />
                  The creation of Adam by Michelangelo
                </p>)
              }
              title="Audience Growth"
              titleCaption="Likes gained by week"
              type="bar"
              header={
                <ButtonGroup>
                  <Button
                    neutral={ true }
                  >
                    7-DAY
                  </Button>
                  <Button
                    neutral={ true }
                  >
                    30-DAY
                  </Button>
                  <Button
                    neutral={ true }
                  >
                    90-DAY
                  </Button>
                </ButtonGroup>
              }
              layout={ layout }
              data={ data }
            >
              <HorizontallyScrollableRow>
                <ChartTraceSummaryItem
                  color="#FFB946"
                  title="Intel"
                  value="273"
                  data="+ 23% (avg.)"
                />
                <ChartTraceSummaryItem
                  color="#00BEA9"
                  title="Intellyo"
                  value="1.7k"
                  data="+ 423% (avg.)"
                />
                <ChartTraceSummaryItem />
              </HorizontallyScrollableRow>
            </Chart>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ChartsPage;
