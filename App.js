import {View, StyleSheet} from 'react-native'
import React from 'react'
import MainScreen from './src/components/mainScreen'

const App = () => {
	const {container} = styles
	return (
		<View style={container}>
			<MainScreen />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		flex: 1
	}
})

export default App
