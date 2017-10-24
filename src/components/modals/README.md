# Modals

Modals are widely used throughout the web. They can be used for displaying pop-up windows and dialogs in general. Our modal depends on [Rodal](https://github.com/chenjiahan/rodal). Our `<Modal />`'s props utilises `Rodal`'s features.

## Props

| Prop | Type | Description | isRequired |
| ---- | ---- | ----------- | ---------- |
| header | node | The content to display inside your Modal's header. | no |
| title | string | This is the title of your Modal.to display inside your Modal's header. | no |
| children | node | The content to display inside your Modal's body. | no |
| footer | node | The content to display inside your Modal's footer. | no |
| measure | string | It can either be `"em"`, `"px"`, `"%"` or any other valid CSS metric. It is used for specifying in what measure you'd like to define the Modal's dimensions. | yes |
| width | number | You can specify the width of the modal. **NOTE**: Specify the width depending on what measure you chose to use! | yes |
| height | number | You can specify the height of the modal. **NOTE**: Specify the height depending on what measure you chose to use! | yes |
| className | string | You can add customised className of the modal. | no |
| visible | boolean | `visible` is used for open and closing the modal. | yes |
| onClose | function | onClose's callback is called, whenever the modal is closed. | yes |
| onAnimationEnd | function | onAnimationEnd's callback is invoked, whenever the modal is done with animating. | no |
| showCloseButton | boolean | You can hide the close button of the modal. The default value is true. | no |
| animation | string | You are able to specify different kinds of animations, which `Rodal` provides. You can checkout the animations [here](http://chenjiahan.github.io/rodal/). **NOTE**: In order to use animations, you need to set the `isAnimated` prop to `true`. | no |
| isAnimated | boolean | This is a custom prop, not a default feature of `Rodal`. You can turn off animation with this props. When it's set to false, then the duration of the animation is set to false. | no |
| duration | number | You can specify the duration of the animation. **NOTE**: In order to use animations, you need to set the `isAnimated` prop to `true`. | no |

## Examples

```jsx
<Modal
  visible={ this.state.modals.notAnimated }
  onClose={ () => this.handleModalClose('notAnimated') }
  measure="%"
  width={ 80 }
  height={ 60 }
  isAnimated={ false }
  title="Modal without animation"
>
  <div>hello</div>
</Modal>
```

See more examples [here](src/pages/modals.js).
