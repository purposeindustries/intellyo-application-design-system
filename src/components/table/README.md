# Table

HTML table is one of the first elements on the Web. They are used for displaying complex data structures and information. It used to be used for layout as well. (Thank god we are over those times! 🙏  Now `display: grid;` comes to replace it. 🤓)

At Intellyo we created our Table as a stateless, controlled component. We use 3 (+ 1) main components to display Tables. Let's get familiar with them:
- `<Table />` - it makes sense that's the main wrapper component for our table.
- `<Column />` - they are responsible for creating the columns of the table and rendering the table headers.
- `<Expander />` - It's an optional component. You should use this component, when the rows of your table need expandability.
- `<InfiniteTable />` - It makes `<Table />` an infinite loading table.

Let's take a look at a basic `<Table />`, before we dive into each component:

```jsx
<Table data={ ...your data comes here }>
  <Column name="id" label="ID" />
  <Column name="title" label="Title" />
</Table>
```

## `<Table />`

> Let's decompose `<Table />` first.

### Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| children | node | The content to display inside the Table. |
| sticky | boolean | Set it to true, if you'd like to make the table headers sticky. |
| data | array | This is the data, which the table displays in each cell. It's an array of objects preferably. |

### Example of `<Table />`

Baisc example of using `<Table /> `.

```jsx
<Table data={ this.props.data }>
  <Column name="id" label="ID" />
  <Column name="title" label="Title" />
</Table>
```

## `<Column />`

> `<Column />` is responsible for rendering the table header cells and rendering each cell in a `<Row />`.

```jsx
<Column name="id" label="ID" />
```

### Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| name | string | Name of the given column. |
| label | string | Give a value of string here, that you'd like to have shown as a table header. |
| complex | boolean | `complex` has only some styling purpose. You can set whether it's a complex value or not. There'll be a secondary blob rendered in the loading animation if you set it to true. Take a look at the [Table with loader](https://ux.intellyo.com/tables) as an example! |
| renderCell | function | You have the ability to overwrite the default cell rendering. It takes 4 arguments: (prop, item, column, instance). |
| sortable | boolean | You can set whether the Table's rows' order is changeable or not. |
| order | string | The defined order of the rows. Preferably it's a string. |
| onSort | function | A callback, which handles the sorting of the rows. |

### Examples of `<Column />`

Overwriting `renderCell`:

```jsx
<Column name="tags" label="Tags" renderCell={ tags => tags.join(', ') } />
```

Creating a sortable `<Column />`

```jsx
<Table data={ sortedData }>
  <Column
    name="id"
    label="ID"
    sortable
    order={ this.state.idOrder } // 'asc'
    onSort={ sort } // this.setState({idOrder: this.state.idOrder === 'asc' ? 'desc' : 'asc'})
  />
</Table>
```

## `<Expander />`

> It's an optional component, you only need to import it, if you need expandable rows within the table.

### Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| render | function | You can overwrite the render of the expander. |

### Example of using `<Expander />`

```jsx
const toggleExpander = (prop, item, column, instance) => (
  <Icon
    icon="ion-arrow-right-b" className={ c('table--expander-button', {
      'table--expander-button--expanded': instance.state.expanded,
    }) } onClick={ () => instance.toggleExpand() }
  />
);

const renderExpander = item => item.description;

...

<Table data={ data.slice() } sticky>
  <Column name="expander" label="" renderCell={ toggleExpander } /> // Note that you need to create a seperate Column for it.
  <Column name="id" label="ID" />
  <Column name="title" label="Title" />
  <Expander render={ renderExpander } />
</Table>
```

## `<InfiniteTable />`

> It stands out from the previous components. It's like a wrapper around `<Table />`, but you can use it as a `<Table />` component.

### Props

| Prop | Type | Description | Default value |
| ---- | ---- | ----------- | ------------- |
| rowPerPage | number | You can overwrite how many rows needs to be rendered within a page. | `20` |
| data | array | Here you can put your data that's going to be rendered, it needs to be an array of objects. | `[]` |
| onPaginate | function | This is callback where you can specify, what can happen, when the user would like to view a new page of the table. | `() => {}` |
| children | node | Here you can define what `<Column />`s the table should have. | none |

### Examples of `<InfiniteTable />`

```jsx
<InfiniteTable
  onPaginate={ this.fetchArticles() }
  data={ this.state.articles }
>
  <Column name="id" label="ID" />
  <Column name="title" label="Title" complex />
</InfiniteTable>
```
