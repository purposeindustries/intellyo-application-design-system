# Chart

The `Chart` component is used to render out a custom chart based on the data you provide.

## Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| loading | `bool` | Whether the component is in its loading state or not. |
| bodyLoading | `bool` | Whether the component is in its reloading state or not. |
| header | `element` or `arrayOf(element)` | `this.props.header` will be rendered here. Use header if you don't want your element to disappear during reload. |
| body | `element` or `arrayOf(element)` | `this.props.children` will be rendered here. The inner content will be hidden by the `BodyPreloader`. |
| data | `arrayOf(object)` | The desired data to display. |
| layout | `object` | Use to set your component's layout. |
| title | `string` | Use to set the title of your chart. |
| titleCaption | `string` | Use to set the caption for your title. |

## Examples

```
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
      ],
      'x': [
        '2017-07-01',
        '2017-07-02',
        '2017-07-03',
        '2017-07-04',
        '2017-07-05',
        '2017-07-06',
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
      ],
      'x': [
        '2017-07-01',
        '2017-07-02',
        '2017-07-03',
        '2017-07-04',
        '2017-07-05',
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
```
