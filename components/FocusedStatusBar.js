import { StatusBar, Text } from 'react-native'
import { useIsFocused } from '@react-navigation/native'

const FocusedStatusBar = (props) => {
    const isFocused = useIsFocused()
    console.log(isFocused)
    return isFocused ? <StatusBar animated={true} {...props} /> : null

}

export default FocusedStatusBar