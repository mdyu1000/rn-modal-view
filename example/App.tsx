import React, { useState } from 'react'
import { Pressable, Text, View, StyleSheet, ViewStyle, TextInput, Keyboard } from 'react-native'
import { Animation } from 'react-native-animatable'
import ReactNativeModalView from 'rn-modal-view'

const App = () => {
  // Base Modal
  const [isVisible, setIsVisible] = useState(false)
  const [modalStyle, setModalStyle] = useState<ViewStyle | null>(null)
  const [animationIn, setAnimationIn] = useState<Animation>('fadeInUp')
  const [animationOut, setAnimationOut] = useState<Animation>('fadeOutDown')
  const [hasBackdrop, setHasBackdrop] = useState(true)
  // additional modal
  const [isVisible2, setIsVisible2] = useState(false)
  const [modalStyle2, setModalStyle2] = useState<ViewStyle | null>(null)
  // additional modal
  const [isVisible3, setIsVisible3] = useState(false)
  const [modalStyle3, setModalStyle3] = useState<ViewStyle | null>(null)

  const toggleVisible = () => {
    setIsVisible(!isVisible)
    setIsVisible2(false)
    setIsVisible3(false)
  }

  const initModal = () => {
    setModalStyle(null)
    setModalStyle2(null)
    setModalStyle3(null)
    setAnimationIn('fadeInUp')
    setAnimationOut('fadeOutDown')
    setHasBackdrop(true)
  }

  const handlePressBottom = () => {
    toggleVisible()
    setModalStyle({ marginTop: 'auto' })
  }

  const handlePressBottomNoBackdrop = () => {
    toggleVisible()
    setModalStyle({
      marginTop: 'auto',
      shadowColor: '#063255',
      shadowOpacity: 0.3,
      shadowOffset: { width: 0, height: 0 },
      shadowRadius: 15,
      elevation: 12,
    })
    setHasBackdrop(false)
  }

  const handlePressHorizontal = () => {
    toggleVisible()
    setAnimationIn('fadeInLeft')
    setAnimationOut('fadeOutRight')
  }

  const handlePressMultipleModal = () => {
    toggleVisible()
    setIsVisible2(true)
    setModalStyle2({ marginTop: 'auto' })
  }

  const handlePressKeyboardAvoidView = () => {
    setIsVisible3(true)
    setModalStyle3({ marginTop: 'auto' })
  }

  const closeModal3 = () => {
    setIsVisible3(false)
    Keyboard.dismiss()
  }

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Pressable style={[styles.button]} onPress={toggleVisible}>
          <Text>Default</Text>
        </Pressable>
        <Pressable style={[styles.button]} onPress={handlePressBottom}>
          <Text>Bottom</Text>
        </Pressable>
        <Pressable style={[styles.button]} onPress={handlePressHorizontal}>
          <Text>Horizontal</Text>
        </Pressable>
        <Pressable style={[styles.button]} onPress={handlePressBottomNoBackdrop}>
          <Text>Bottom no backdrop</Text>
        </Pressable>
        <Pressable style={[styles.button]} onPress={handlePressMultipleModal}>
          <Text>Multiple Modal</Text>
        </Pressable>
        <Pressable style={[styles.button]} onPress={handlePressKeyboardAvoidView}>
          <Text>Keyboard Avoid View</Text>
        </Pressable>
        <ReactNativeModalView
          isVisible={isVisible}
          style={modalStyle}
          animationIn={animationIn}
          animationOut={animationOut}
          hasBackdrop={hasBackdrop}
          onBackdropPress={toggleVisible}
          onBackButtonPress={toggleVisible}
          onModalHide={initModal}
        >
          <BaseChildren onPress={toggleVisible} />
        </ReactNativeModalView>
        <ReactNativeModalView
          isVisible={isVisible2}
          style={modalStyle2}
          hasBackdrop={false}
          onBackdropPress={toggleVisible}
          onBackButtonPress={toggleVisible}
          onModalHide={initModal}
        >
          <BaseChildren onPress={toggleVisible} />
        </ReactNativeModalView>
        <ReactNativeModalView
          isVisible={isVisible3}
          style={modalStyle3}
          animationIn={animationIn}
          animationOut={animationOut}
          hasBackdrop={hasBackdrop}
          onBackdropPress={closeModal3}
          onBackButtonPress={closeModal3}
          onModalHide={initModal}
        >
          <InputChildren onPress={closeModal3} />
        </ReactNativeModalView>
      </View>
    </View>
  )
}

interface IBaseChildren {
  onPress: () => void
}

function BaseChildren(props: IBaseChildren): React.ReactElement {
  const { onPress } = props
  return (
    <View style={[styles.modalView]}>
      <Text style={[styles.title]}>Title</Text>
      <Text style={[styles.content]}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </Text>
      <Pressable style={[styles.action]} onPress={onPress}>
        <Text style={[styles.actionText]}>Close</Text>
      </Pressable>
    </View>
  )
}

function InputChildren(props: IBaseChildren): React.ReactElement {
  const { onPress } = props
  return (
    <View style={[styles.modalView]}>
      <Text style={[styles.title]}>Title</Text>
      <TextInput style={[styles.textField]} placeholder="placeholder" />
      <Pressable style={[styles.action]} onPress={onPress}>
        <Text style={[styles.actionText]}>Close</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    marginTop: 8,
  },
  title: {
    fontSize: 24,
    lineHeight: 30,
  },
  content: {
    fontSize: 15,
    lineHeight: 22,
    marginTop: 8,
  },
  action: {
    marginTop: 24,
    paddingVertical: 16,
    backgroundColor: 'black',
    borderRadius: 2,
    alignItems: 'center',
  },
  actionText: {
    color: 'white',
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '500',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 2,
    padding: 24,
  },
  textField: {
    height: 56,
    backgroundColor: '#f2f6f9',
    paddingHorizontal: 16,
    fontSize: 17,
    lineHeight: 24,
    marginTop: 16,
  }
})

export default App
