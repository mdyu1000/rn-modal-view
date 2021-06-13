import React, { useState } from 'react'
import {
  Pressable,
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native'
import Modal from 'rn-modal-view'
import { makeSlideInTranslation, makeSlideOutTranslation } from '../lib/animation'
import { IDefaultModal } from '../constant/types'

const windowHeight = Dimensions.get('window').height
const customSlideInUp = makeSlideInTranslation('translateY', windowHeight)
const customSlideOutDown = makeSlideOutTranslation('translateY', windowHeight)

function FullModal(props: IDefaultModal): React.ReactElement {
  const { isVisible, toggleVisible } = props

  return (
    <Modal
      isVisible={isVisible}
      style={{ justifyContent: 'flex-end' }}
      animationIn={customSlideInUp}
      animationOut={customSlideOutDown}
      onBackdropPress={toggleVisible}
      onBackButtonPress={toggleVisible}
    >
      <TouchableWithoutFeedback>
        <KeyboardAvoidingView
          style={[styles.modalViewFull]}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <View style={{ flex: 1 }}>
            <Text style={[styles.title]}>Title</Text>
            <Text style={[styles.content]}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </Text>
          </View>
          <Pressable style={[styles.action, { marginBottom: 24 }]} onPress={toggleVisible}>
            <Text style={[styles.actionText]}>Close</Text>
          </Pressable>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalViewFull: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 2,
    padding: 24,
    marginTop: 40,
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
})

export default FullModal
