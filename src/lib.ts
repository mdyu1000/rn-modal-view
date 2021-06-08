import { useEffect } from 'react'
import { BackHandler } from 'react-native'

export const useAndroidBack = (callback: () => void) => {
  useEffect(() => {
    const unsubscribe = BackHandler.addEventListener('hardwareBackPress', () => {
      callback()
      return true
    })
    return () => unsubscribe.remove()
  }, [callback])
}

/**
 * Custom slide-in animation
 * reference /node_modules/react-native-animatable/definition/sliding-entrances.js
 */
export function makeSlideInTranslation(translationType: string, fromValue: number) {
  return {
    from: {
      [translationType]: fromValue,
    },
    to: {
      [translationType]: 0,
    },
  }
}

/**
 * Custom slide-out animation
 * reference /node_modules/react-native-animatable/definition/sliding-exits.js
 */
export function makeSlideOutTranslation(translationType: string, fromValue: number) {
  return {
    from: {
      [translationType]: 0,
    },
    to: {
      [translationType]: fromValue,
    },
  }
}
