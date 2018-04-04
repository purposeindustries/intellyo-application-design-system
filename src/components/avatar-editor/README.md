# AvatarEditor

This is our avatar editor component. You can use it to change your profiles', or organisations' picture.

## Props

| Prop | Type | Description | Default value |
| ---- | ---- | ----------- | ------------- |
| src | string | The url of the src attribute on the image tag. | `none` |
| onChange | function | It's responsible for creating a valid url for the img tag by converting a blob to a valid url string. | `none` |
| buttonLabel | node | You can specify the label of the Button. | `'Upload picture'` |
| borderRadius | `string` || `number` | You can specify the border-radius of the div, which contains the image. | `'4px'` |
| placeholder | `node` | You can customise the placeholder, when the component is empty. | `none` |

## Examples

Use to present an avatar for a user.

```jsx
class Exmaple extends React.Component {
  state = {
    imageSrc: ''
  }

  handleImageChange = (file) => {
    /*
      If there is no selected file, it should escape the method.
    */
    if (!file) {
      return;
    }
    const src = window.URL.createObjectURL(file);

    this.setState({ imageSrc: src });
  }

  render() {
    return (
      <AvatarEditor
        src={ this.state.imageSrc }
        onChange={ this.handleImageChange }
      />  
    );
  }
}
```
