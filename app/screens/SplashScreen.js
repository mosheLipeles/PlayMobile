import React from 'react';
import { ImageBackground,StyleSheet } from 'react-native';

function SplashScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/welcome.jpg')}>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1
    }
})

export default SplashScreen;