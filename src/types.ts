import { ReactNode } from 'react'
import {
  GestureResponderEvent,
  ViewStyle,
  BackHandlerStatic
} from 'react-native'
import { Animation, CustomAnimation } from 'react-native-animatable'
export interface IBackdropAnimation {
  fadeIn: CustomAnimation
  fadeOut: CustomAnimation
}

export interface IReactNativeModalView {
  animationIn?: Animation
  animationInTiming?: number
  animationOut?: Animation
  animationOutTiming?: number
  backdropStyle?: ViewStyle
  backdropTransitionInTiming?: number
  backdropTransitionOutTiming?: number
  children: ReactNode
  hasBackdrop?: boolean,
  isVisible: boolean
  modalStyle?: ViewStyle | null
  zIndex?: number,
  onBackdropPress?: (event: GestureResponderEvent) => void
  onBackButtonPress?: () => void
  onModalShow?: () => void
  onModalWillShow?: () => void
  onModalHide?: () => void
  onModalWillHide?: () => void
}