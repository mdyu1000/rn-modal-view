# rn-modal-view

Inspired by [react-native-modal](https://github.com/react-native-modal/react-native-modal).

This module is base on **View** component rather than Modal, Modal component still has many [issue](https://github.com/facebook/react-native/issues) in current react native version.

## Fix Native Modal Issue

* Can't show multiple modals one after another.
* Can't show multiple modals at the same time.
* Can't show [react-native-loading-spinner-overlay](https://www.npmjs.com/package/react-native-loading-spinner-overlay) at the same time.
* The StatusBar style changes (or not changes) when the modal shows up.
* Screen changes when modal visible, component will remain some android device, that cause UI can't be touched.


## Demo
<p align="center">
<img src="/.github/images/example-modal.gif" height="500" />
</p>

## Setup
```bash
# Using npm:
$ npm install rn-modal-view

# Using yarn:
$ yarn add rn-modal-view
```

## Usage

1. Import rn-modal-view 
```JSX
import Modal from 'rn-modal-view'
```

2. Create a modal and nest its content inside of it:
   
```JSX
return (
  <Modal isVisible={isVisible}>
    <View style={{ backgroundColor: 'white' }}>
      <Text>I am the modal content!</Text>
    </View>
  </Modal>
)
```

The `isVisible` prop is the only prop you'll really need to make the modal work: you should control this prop value by saving it in your wrapper component state and setting it to `true` or `false` when needed.


3. A complete example
```JSX


function App() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Pressable onPress={() => setIsVisible(true)}>
        <Text>Default</Text>
      </Pressable>
      <DefaultModal isVisible={isVisible} toggleVisible={() => setIsVisible(false)} />
    </View>
  )
}

function DefaultModal(props) {
  const { isVisible, toggleVisible } = props

  return (
    <Modal isVisible={isVisible} onBackdropPress={toggleVisible}>
      <TouchableWithoutFeedback>
        <View style={{ backgroundColor: 'white' }}>
          <Text>I am the modal content!</Text>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}
```

## Available props

| Name                           | Type             | Default                        | Description                                                                                                                                |
| ------------------------------ | ---------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| animationIn                    | string or object | 'slideInUp'                    | Modal show animation                                                                                                                       |
| animationInTiming              | number           | 500                            | Timing for the modal show animation (in ms)                                                                                                |
| animationOut                   | string or object | 'slideOutDown'                 | Modal hide animation                                                                                                                       |
| animationOutTiming             | number           | 500                            | Timing for the modal hide animation (in ms)                                                                                                |
| hasBackdrop                    | bool             | true                           | Render the backdrop                                                                                                                        |
| backdropTransitionInTiming     | number           | 300                            | The backdrop show timing (in ms)                                                                                                           |
| backdropTransitionOutTiming    | number           | 300                            | The backdrop hide timing (in ms)                                                                                                           |
| children                       | node             | **REQUIRED**                   | The modal content                                                                                                                          |
| isVisible                      | bool             | **REQUIRED**                   | Show the modal?                                                                                                                            |
| onBackButtonPress              | func             | () => null                     | Called when the Android back button is pressed                                                                                             |
| onBackdropPress                | func             | () => null                     | Called when the backdrop is pressed                                                                                                        |
| onModalWillHide                | func             | () => null                     | Called before the modal hide animation begins                                                                                              |
| onModalHide                    | func             | () => null                     | Called when the modal is completely hidden                                                                                                 |
| onModalWillShow                | func             | () => null                     | Called before the modal show animation begins                                                                                              |
| onModalShow                    | func             | () => null                     | Called when the modal is completely visible                                                                                                |
| style                          | any              | null                           | Style applied to the modal                                         
| zIndex                          | number              | 101                           | The property specifies the stack order of an element, An element with greater stack order is always in front of an element with a lower stack order.


