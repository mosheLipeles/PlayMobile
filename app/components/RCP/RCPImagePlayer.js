import React, { Component } from 'react';
import { Image,StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class RCPImagePlayer extends Component {
    onItemHandle = this.props.onItemHandle
    render() { 
        const logo = this.props.logo;
        return (
            <TouchableOpacity
                onPress={() => this.props.onItemHandle(logo.id)}>
                <Image style={styles.imageRPS} source={logo.src}/>
            </TouchableOpacity>
          );
    }
}
 
export default RCPImagePlayer;

const styles = StyleSheet.create({
    imageRPS: {
        width:100,
        height:105,
    }
})

