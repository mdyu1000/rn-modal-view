import { useEffect } from 'react'
import { BackHandler } from 'react-native'

// eslint-disable-next-line import/prefer-default-export
export const useAndroidBack = (callback: () => void) => {
  useEffect(() => {
    const unsubscribe = BackHandler.addEventListener('hardwareBackPress', () => {
      callback()
      return true
    })
    return () => unsubscribe.remove()
  }, [callback])
}
