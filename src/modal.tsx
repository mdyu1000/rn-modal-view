import React, { useRef, useState, useEffect } from 'react'
import { StyleSheet, View, TouchableWithoutFeedback, StatusBar } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { IBackdropAnimation, IReactNativeModalView } from './types'
import { useAndroidBack } from './lib'

// issue: https://github.com/osdnk/react-native-reanimated-bottom-sheet/issues/282
const COVER_REACT_NATIVE_REANIMATED_BOTTOM_SHEET_ZINDEX = 101

const backdropAnimation: IBackdropAnimation = {
  fadeIn: {
    0: { backgroundColor: 'rgba(0, 0, 0, 0)' },
    0.3: { backgroundColor: 'rgba(0, 0, 0, .4)' },
    1: { backgroundColor: 'rgba(0, 0, 0, .6)' },
  },
  fadeOut: {
    0: { backgroundColor: 'rgba(0, 0, 0, .6)' },
    1: { backgroundColor: 'rgba(0, 0, 0, 0)' },
  },
}

function ReactNativeModalView(props: IReactNativeModalView): React.ReactElement {
  const {
    animationIn,
    animationInTiming,
    animationOut,
    animationOutTiming,
    backdropStyle,
    backdropTransitionInTiming,
    backdropTransitionOutTiming,
    children,
    hasBackdrop,
    isVisible,
    style,
    zIndex,
    onBackdropPress,
    onBackButtonPress,
    onModalShow,
    onModalWillShow,
    onModalHide,
    onModalWillHide,
  } = props
  const animatedViewRef = useRef<any>(null)
  const backdropRef = useRef<any>(null)
  const [isShow, setIsShow] = useState(isVisible)

  const animateOut = () => {
    const animations = []
    if (animatedViewRef.current) {
      animations.push(animatedViewRef.current.animate(animationOut, animationOutTiming))
    }
    if (backdropRef.current && hasBackdrop) {
      animations.push(backdropRef.current.animate(backdropAnimation.fadeOut, backdropTransitionOutTiming))
    }
    Promise.all(animations).then(() => {
      onModalHide?.()
      setIsShow(false)
    })
  }

  const handleAnimationEnd = () => {
    if (isVisible) onModalShow?.()
  }

  useAndroidBack(() => {
    onBackButtonPress?.()
  })

  useEffect(() => {
    if (isVisible) {
      onModalWillShow?.()
      setIsShow(true)
    } else {
      onModalWillHide?.()
      animateOut()
    }
  }, [isVisible])

  if (!isShow) return <View />

  return (
    <TouchableWithoutFeedback onPress={onBackdropPress}>
      <View style={[styles.absoluteTop, { zIndex, elevation: zIndex }]}>
        <Animatable.View
          ref={backdropRef}
          animation={hasBackdrop ? backdropAnimation.fadeIn : undefined}
          duration={backdropTransitionInTiming}
          style={
            hasBackdrop ? [backdropStyle || styles.backdrop] : [styles.backdrop, styles.backdropTransparent]
          }
        >
          <StatusBar barStyle={hasBackdrop ? 'light-content' : 'dark-content'} />
          <TouchableWithoutFeedback>
            <View style={[style || styles.modal]}>
              <Animatable.View
                ref={animatedViewRef}
                animation={animationIn}
                duration={animationInTiming}
                onAnimationEnd={handleAnimationEnd}
              >
                {children}
              </Animatable.View>
            </View>
          </TouchableWithoutFeedback>
        </Animatable.View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  absoluteTop: {
    ...StyleSheet.absoluteFillObject,
    zIndex: COVER_REACT_NATIVE_REANIMATED_BOTTOM_SHEET_ZINDEX,
    elevation: COVER_REACT_NATIVE_REANIMATED_BOTTOM_SHEET_ZINDEX,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
  },
  backdropTransparent: {
    backgroundColor: 'rgba(0,0,0,0)',
  },
  modal: {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 24,
    marginRight: 24,
  },
})

ReactNativeModalView.defaultProps = {
  animationIn: 'fadeInUp',
  animationInTiming: 500,
  animationOut: 'fadeOutDown',
  animationOutTiming: 500,
  backdropTransitionInTiming: 300,
  backdropTransitionOutTiming: 300,
  hasBackdrop: true,
  zIndex: COVER_REACT_NATIVE_REANIMATED_BOTTOM_SHEET_ZINDEX,
}

export default ReactNativeModalView
