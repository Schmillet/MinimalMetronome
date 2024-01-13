import React, {useState, useEffect} from 'react'
import {View, SafeAreaView, Text, StyleSheet, Pressable} from 'react-native'
import AdjustButton from './adjustButton'

const MainScreen = () => {
    const [tempo, setTempo] = useState(75)
    const [isOn, setIsOn] = useState(false)

    useEffect(() => {
        console.log(tempo)
    }, [tempo])

    const {container, wrapper, tempoText, titleStyle, tempoView, tempoWrapper, playWrapper, playButton, playText} =
        styles
    return (
        <SafeAreaView style={container}>
            <View style={wrapper}>
                <Text style={titleStyle}>Metronome</Text>
                <View style={tempoWrapper}>
                    <AdjustButton
                        onPress={() => setTempo(tempo - 1)}
                        imgName={'minus-circle'}
                        imgSize={50}
                    />
                    <View style={tempoView}>
                        <Text style={tempoText}>{tempo}</Text>
                    </View>
                    <AdjustButton
                        onPress={() => setTempo(tempo + 1)}
                        imgName={'plus-circle'}
                        imgSize={50}
                    />
                </View>
                <View style={playWrapper}>
                    <Pressable style={playButton}>
                        <Text style={playText}>Play</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7fffd4',
        flex: 1,
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderWidth: 5,
        borderColor: 'red'
    },
    titleStyle: {
        color: 'black',
        fontSize: 50,
        fontWeight: 'bold'
    },
    tempoWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 25,
    },
    tempoText: {
        fontSize: 60,
        fontWeight: 'bold'
    },
    tempoView: {
        borderColor: 'black',
        height: 125,
        width: 125,
        borderRadius: 125 / 2,
        borderWidth: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    playWrapper:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25
    },
    playButton:{
        borderColor: 'pink',
        borderWidth: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    playText:{
        fontSize: 50,
        fontWeight: 'bold'
    }
})

export default MainScreen
