import {Pressable, StyleSheet} from 'react-native'
import {Feather} from '@expo/vector-icons'

const AdjustButton = (props) => {
	const {imgName, imgSize, pressIn, pressOut} = props
	const {buttonStyle} = styles
	return (
		<Pressable
			style={buttonStyle}
			onPressIn={pressIn}
			onPressOut={pressOut}>
			<Feather name={imgName} size={imgSize} color={'#D8FFDB'} />
		</Pressable>
	)
}

const styles = StyleSheet.create({
	buttonStyle: {
		alignSelf: 'center',
		marginRight: 20,
		marginLeft: 20,
		width: 50,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center'
	}
})

export default AdjustButton
