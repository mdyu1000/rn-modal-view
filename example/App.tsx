import React, { useState } from 'react'
import { Pressable, Text, View, StyleSheet } from 'react-native'
import { Animation } from 'react-native-animatable'
import ReactNativeModalView from './ReactNativeModalView'
// modals
import DefaultModal from './src/component/DefaultModal'
import BottomModal from './src/component/BottomModal'
import HorizontalModal from './src/component/HorizontalModal'
import BottomNoBackdropModal from './src/component/BottomNoBackdropModal'
import MultipleModal from './src/component/MultipleModal'
import KeyboardAvoidModal from './src/component/KeyboardAvoidModal'
import FullModal from './src/component/FullModal'

const App = () => {
  const [isDefaultVisible, setIsDefaultVisible] = useState(false)
  const [isBottomVisible, setIsBottomVisible] = useState(false)
  const [isHorizontalVisible, setIsHorizontalVisible] = useState(false)
  const [isBottomNoBackdropVisible, setIsBottomNoBackdropVisible] = useState(false)
  const [isMultipleVisible, setIsMultipleVisible] = useState(false)
  const [isKeyboardAvoidVisible, setIsKeyboardAvoidVisible] = useState(false)
  const [isFullVisible, setIsFullVisible] = useState(false)

  return (
    <View style={[styles.view]}>
      <Pressable style={[styles.button]} onPress={() => setIsDefaultVisible(true)}>
        <Text>Default</Text>
      </Pressable>
      <Pressable style={[styles.button]} onPress={() => setIsBottomVisible(true)}>
        <Text>Bottom</Text>
      </Pressable>
      <Pressable style={[styles.button]} onPress={() => setIsHorizontalVisible(true)}>
        <Text>Horizontal</Text>
      </Pressable>
      <Pressable style={[styles.button]} onPress={() => setIsBottomNoBackdropVisible(true)}>
        <Text>Bottom no backdrop</Text>
      </Pressable>
      <Pressable style={[styles.button]} onPress={() => setIsMultipleVisible(true)}>
        <Text>Multiple Modal</Text>
      </Pressable>
      <Pressable style={[styles.button]} onPress={() => setIsKeyboardAvoidVisible(true)}>
        <Text>Keyboard Avoid View</Text>
      </Pressable>
      <Pressable style={[styles.button]} onPress={() => setIsFullVisible(true)}>
        <Text>Full Modal</Text>
      </Pressable>
      <DefaultModal isVisible={isDefaultVisible} toggleVisible={() => setIsDefaultVisible(false)} />
      <BottomModal isVisible={isBottomVisible} toggleVisible={() => setIsBottomVisible(false)} />
      <HorizontalModal isVisible={isHorizontalVisible} toggleVisible={() => setIsHorizontalVisible(false)} />
      <BottomNoBackdropModal
        isVisible={isBottomNoBackdropVisible}
        toggleVisible={() => setIsBottomNoBackdropVisible(false)}
      />
      <MultipleModal isVisible={isMultipleVisible} toggleVisible={() => setIsMultipleVisible(false)} />
      <KeyboardAvoidModal
        isVisible={isKeyboardAvoidVisible}
        toggleVisible={() => setIsKeyboardAvoidVisible(false)}
      />
      <FullModal isVisible={isFullVisible} toggleVisible={() => setIsFullVisible(false)} />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 8,
    marginTop: 8,
  },
})

export default App
