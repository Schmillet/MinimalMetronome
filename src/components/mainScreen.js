import React, {useState, useEffect} from 'react'
import {View, SafeAreaView, Text, StyleSheet, Pressable} from 'react-native'
import AdjustButton from './buttons/adjustButton'
import OptionButton from './buttons/optionButton'
import {Feather} from '@expo/vector-icons'

var adjustTimer
var metroTimer

const MainScreen = () => {
	const [tempo, setTempo] = useState(75)
	const [isOn, setIsOn] = useState(false)
	//const [sound, setSound] = useState()

	useEffect(() => {
		console.log(tempo)
		console.log(isOn)
	}, [tempo, isOn])

	const {
		container,
		tempoText,
		titleStyle,
		tempoView,
		tempoWrapper,
		playWrapper,
		playButton,
		optionsWrapper
	} = styles

	const minusTimer = () => {
		minusTempo()
		adjustTimer = setInterval(minusTempo, 500)
	}
	const minusTempo = () => {
		if (tempo > 0) {
			setTempo((prev) => prev - 1)
		}
	}
	const plusTimer = () => {
		plusTempo()
		adjustTimer = setInterval(plusTempo, 350)
	}
	const plusTempo = () => {
		if (tempo < 500) {
			setTempo((prev) => prev + 1)
		}
	}
	let timeObj = {
		stopAdjust: function () {
			clearInterval(adjustTimer)
		},
		stopMetro: function () {
			clearInterval(metroTimer)
		}
	}
	const metroStart = () => {
		metroTimer = setInterval(metroSound, 60000 / tempo)
	}
	const metroSound = () =>{
		console.log('Beep')
	}

	return (
		<SafeAreaView style={container}>
			<Text style={titleStyle}>Metronome</Text>
			<View style={tempoWrapper}>
				<AdjustButton
					imgName={'minus-circle'}
					imgSize={50}
					pressIn={minusTimer}
					pressOut={timeObj.stopAdjust}
				/>
				<View style={tempoView}>
					<Text style={tempoText}>{tempo}</Text>
				</View>
				<AdjustButton
					imgName={'plus-circle'}
					imgSize={50}
					pressIn={plusTimer}
					pressOut={timeObj.stopAdjust}
				/>
			</View>
			<View style={playWrapper}>
				<Pressable
					style={playButton}
					onPress={() => {
						isOn
							? (setIsOn(false), timeObj.stopMetro())
							: (setIsOn(true), metroStart())
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
		flex: 0.3
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
		flex: 0.1,
		marginBottom: 30
	},
	playButton: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	optionsWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		flex: 0.5,
		alignItems: 'center',
		width: '100%'
	}
})

export default MainScreen
