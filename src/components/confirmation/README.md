# Confirmation

The `Confirmation` component is used in case of components where you need an additional confirmation step before performing a dangerous and permanent action like removing an item from the database.

## Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| children | function | The component implements the render function pattern. |
| onConfirm | function | The actual function of the original element which need to be confirmed |

## Props of the render functions

| Props | Type | Description |
| ----- | ---- | ----------- |
| confirming | boolean (read only) | The status of the confirmation (practically the visibility of the confirm popup) |
| setConfirm | function | Call this function to set the `confirming` to `true` |
| handleCancel | function | Call this function to set the `confirming` to `false` |
| handleConfirm | function | Call this to triggerd the original action (e.g.: delete) |


## Examples

```
<Confirmation onConfirm={ () => someService.delete() }>
  {({ confirming, setConfirm, handleCancel, handleConfirm }) => {
    return (
      <div>

        <Button onClick={ setConfirm }>
          Delete
        </Button>

        <Modal
          visible={ confirming }
          onClose={ handleCancel }
          title="Delete confirmation"
        >
          <div>Are you sure you wanna delete?</div>
          <div className="modal-button-wrap">
            <Button neutral={ true } onClick={ handleCancel }>Cancel</Button>
            <Button onClick={ handleConfirm }>Yes, delete</Button>
          </div>
        </Modal>
        
      </div>
    );
  }}
</Confirmation>
```
