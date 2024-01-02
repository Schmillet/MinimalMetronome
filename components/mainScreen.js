import React, {useState} from 'react'
import {View, SafeAreaView, Text, StyleSheet} from 'react-native'

const MainScreen = () => {
    const [tempo, setTempo] = useState(75)

    const {container, wrapper, tempoText, titleStyle, body} = styles
    return (
        <SafeAreaView style={container}>
            <View style={wrapper}>
                <Text style={titleStyle}>Metronome</Text>
                <View style={body}>
                    <Text style={tempoText}>{tempo}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7fffd4',
        flex: 1
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
        fontSize: 50
    },
    tempoText: {
        fontSize: 20,
        marginTop: 7
    },
    body:{
        borderWidth: 5,
        borderColor: 'green',
        height: 50,
        width: 50,
        alignItems: 'center',
    }
})

export default MainScreen
