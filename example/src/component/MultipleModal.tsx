import React, { useState } from 'react'
import { Pressable, Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Modal from '../../ReactNativeModalView'
import { IDefaultModal } from '../constant/types'

function MultipleModal(props: IDefaultModal): React.ReactElement {
  const { isVisible, toggleVisible } = props

  return (
    <>
      <Modal isVisible={isVisible} onBackdropPress={toggleVisible} onBackButtonPress={toggleVisible}>
        <TouchableWithoutFeedback>
          <View style={[styles.modalView]}>
            <Text style={[styles.title]}>Title</Text>
            <Text style={[styles.content]}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </Text>
            <Pressable style={[styles.action]} onPress={toggleVisible}>
              <Text style={[styles.actionText]}>Close</Text>
            </Pressable>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <Modal
        isVisible={isVisible}
        style={{ justifyContent: 'flex-end' }}
        hasBackdrop={false}
        onBackdropPress={toggleVisible}
        onBackButtonPress={toggleVisible}
      >
        <TouchableWithoutFeedback>
          <View style={[styles.modalView]}>
            <Text style={[styles.title]}>Title</Text>
            <Text style={[styles.content]}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </Text>
            <Pressable style={[styles.action]} onPress={toggleVisible}>
              <Text style={[styles.actionText]}>Close</Text>
            </Pressable>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
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

export default MultipleModal
