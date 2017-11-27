# Accordion

`<Accordion />`s are good for toggling contents on the web. `<Accordion />` is a stateless wrapper for `<AccordionItem />`s.

## Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| children | node | Accordion is the wrapper of `<AccordionItem />`s. |

## Example

Here is how to use the stateless `<Accordion />` wrapper.

```jsx
<Accordion>
  <AccordionItem
    title="Basic information"
    isOpen={ this.state.accordion.basic }
    onClick={ () => this.toggle('basic') }
  >
    Not much.
  </AccordionItem>
  <AccordionItem
    title="Not basic information"
    isOpen={ this.state.accordion.notBasic }
    onClick={ () => this.toggle('notBasic') }
  >
    Much.
  </AccordionItem>
</Accordion>
```

# MultiAccordion

Stateful component. It lets any number of `<AccordionItem />`s to be open at the same time.

## Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| children | node | Just like at `<Accordion />`, children should contain all the `<AccordionItem />`s. |

## Example

Here is how to use MultiAccordion:

```jsx
import { MultiAccordion } from '@pi/intellyo-components';

...

<MultiAccordion>
  <AccordionItem
    title="Basic information"
    isOpen={ this.state.accordion.basic }
    onClick={ () => this.toggle('basic') }
  >
    Not much.
  </AccordionItem>
  <AccordionItem
    title="Not basic information"
    isOpen={ this.state.accordion.notBasic }
    onClick={ () => this.toggle('notBasic') }
  >
    Much.
  </AccordionItem>
</MultiAccordion>
```

# SingleAccordion

`<SingleAccordion />` is an extension of `<MultiAccordion />`. The difference between them, as their name suggest, that `<SingleAccordion />` lets only one `<AccordionItem />` to be open at the same time.

## Props

Same as `<MultiAccordion />`'s.

## Example

```jsx
import { SingleAccordion } from '@pi/intellyo-components';

...

<SingleAccordion>
  <AccordionItem
    title="Basic information"
    isOpen={ this.state.accordion.basic }
    onClick={ () => this.toggle('basic') }
  >
    Not much.
  </AccordionItem>
  <AccordionItem
    title="Not basic information"
    isOpen={ this.state.accordion.notBasic }
    onClick={ () => this.toggle('notBasic') }
  >
    Much.
  </AccordionItem>
</SingleAccordion>
```

# AccordionItem

`<AccordionItem />` does the heavy-lifting.

## Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| children | node | You can put any element. |
| title | string | You can define the title of the AccordionItem. |
| icon | element | You can define the which `<Icon />` should get rendered. |
| isOpen | boolean | isOpen is responsible whether the item should be open or not. |
| onClick | function | onClick is invoked when AccordionItem is clicked. |

## Examples

```jsx
<AccordionItem
  title="Basic information"
  icon={ (<Icon icon="ion-information-circled" />) }
  isOpen={ this.state.accordion.basic }
  onClick={ () => this.toggle('basic') }
>
  Not much.
</AccordionItem>
```
