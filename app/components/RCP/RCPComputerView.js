import React, { Component } from 'react';
import { View,Text,Image,StyleSheet } from 'react-native';

class RCPComputerView extends Component {
    render() { 
        //const logo=require('../../assets/questionMark.jpg');
        return (
            <View style={styles.viewComputer}>
                <Text style={{top:-15,fontSize:30}} >The computer choise</Text>
                <Image
                style={styles.imageComputer} 
                source={this.props.logo}/>
            </View>
          );
    }
}
 
export default RCPComputerView;

const styles = StyleSheet.create({
    viewComputer: {
        flex: 4.5,
        backgroundColor: '#ffb3b3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageComputer:{
        width:200,
        height:200,
        top:15
    }
})