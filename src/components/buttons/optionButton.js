import {Text, StyleSheet, Pressable} from 'react-native'
import {Foundation} from '@expo/vector-icons'

const OptionButton = (props) => {
	const {onPress, text, margin} = props
	const {button, textStyle} = styles
	return (
		<Pressable style={button} onPress={onPress} marginRight={margin}>
			<Text style={textStyle}>{text}</Text>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	button: {
		borderRadius: 25 / 2,
		borderWidth: 5,
		borderColor: '#D8FFDB'
	},
	textStyle: {
		fontWeight: 'bold',
		fontSize: 20,
		margin: 5,
        color: '#D8FFDB'
	}
})

export default OptionButton
