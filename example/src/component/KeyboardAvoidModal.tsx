import React, { useState } from 'react'
import { Pressable, Text, TextInput, View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Modal from '../../ReactNativeModalView'
import { IDefaultModal } from '../constant/types'

function KeyboardAvoidModal(props: IDefaultModal): React.ReactElement {
  const { isVisible, toggleVisible } = props

  return (
    <Modal
      isVisible={isVisible}
      style={{ justifyContent: 'flex-end' }}
      onBackdropPress={toggleVisible}
      onBackButtonPress={toggleVisible}
    >
      <TouchableWithoutFeedback>
        <View style={[styles.modalView]}>
          <Text style={[styles.title]}>Title</Text>
          <TextInput style={[styles.textField]} placeholder="placeholder" />
          <Pressable style={[styles.action]} onPress={toggleVisible}>
            <Text style={[styles.actionText]}>Close</Text>
          </Pressable>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: 'white',
    borderRadius: 2,
    padding: 24,
  },
  title: {
    fontSize: 24,
    lineHeight: 30,
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
  textField: {
    height: 56,
    backgroundColor: '#f2f6f9',
    paddingHorizontal: 16,
    fontSize: 17,
    lineHeight: 24,
    marginTop: 16,
  },
})

export default KeyboardAvoidModal
