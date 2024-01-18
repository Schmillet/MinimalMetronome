import React, {useState, useEffect} from 'react'
import {View, SafeAreaView, Text, StyleSheet, Pressable} from 'react-native'
import AdjustButton from './buttons/adjustButton'
import OptionButton from './buttons/optionButton'
import {Feather} from '@expo/vector-icons'
import {Audio} from 'expo-av'

const MainScreen = () => {
	const [tempo, setTempo] = useState(75)
	const [isOn, setIsOn] = useState(false)
	const [sound, setSound] = useState()

	useEffect(() => {
		console.log(tempo)
		console.log(isOn)
	}, [tempo, isOn])

	const {
		container,
		wrapper,
		tempoText,
		titleStyle,
		tempoView,
		tempoWrapper,
		playWrapper,
		playButton,
		optionsWrapper
	} = styles

	const minusTempo = () => {
		if (tempo > 0) {
			setTempo(tempo - 1)
		}
	}

	const plusTempo = () => {
		if (tempo < 500) {
			setTempo(tempo + 1)
		}
	}

	return (
		<SafeAreaView style={container}>
			<Text style={titleStyle}>Metronome</Text>
			<View style={tempoWrapper}>
				<AdjustButton
					onPress={minusTempo}
					imgName={'minus-circle'}
					imgSize={50}
				/>
				<View style={tempoView}>
					<Text style={tempoText}>{tempo}</Text>
				</View>
				<AdjustButton
					onPress={plusTempo}
					imgName={'plus-circle'}
					imgSize={50}
				/>
			</View>
			<View style={playWrapper}>
				<Pressable
					style={playButton}
					onPress={() => {
						isOn ? setIsOn(false) : setIsOn(true)
					}}>
					{isOn ? (
						<Feather
							name="pause-circle"
							size={60}
							color={'#D8FFDB'}
						/>
					) : (
						<Feather
							name="play-circle"
							size={60}
							color={'#D8FFDB'}
						/>
					)}
				</Pressable>
			</View>
			<View style={optionsWrapper}>
				<OptionButton
					text={'quarter'}
					onPress={() => console.log('pressed')}
				/>
				<OptionButton
					text={'eighth'}
					onPress={() => console.log('pressed')}
				/>
				<OptionButton
					text={'sixteenth'}
					onPress={() => console.log('pressed')}
				/>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		backgroundColor: '#015958',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	titleStyle: {
		color: '#D8FFDB',
		fontSize: 50,
		fontWeight: 'bold'
	},
	tempoWrapper: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		flex: .3
	},
	tempoText: {
		fontSize: 60,
		fontWeight: 'bold',
		color: '#D8FFDB'
	},
	tempoView: {
		borderColor: '#D8FFDB',
		height: 125,
		width: 125,
		borderRadius: 125 / 2,
		borderWidth: 5,
		justifyContent: 'center',
		alignItems: 'center'
	},
	playWrapper: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: .1,
		marginBottom: 30
	},
	playButton: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	optionsWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		flex: .5,
		alignItems: 'center',
		width: '100%'
	}
})

export default MainScreen
