import React, { Component } from 'react';
import { View, Text , Button, StyleSheet } from 'react-native';

class RCPTitle extends Component {
    
    render() { 
        
        return (
            <View style={styles.viewTitle}>
                <Button
                title="Exit"
                onPress={() =>
                    this.props.onExit(this.props.route)
                    } />
                <Text style={styles.textTitle}> Rock, paper, scissors</Text>
            </View>
          );
    }
}
 
export default RCPTitle;

const styles = StyleSheet.create({
    viewTitle:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        flexDirection: 'row'
    },
    textTitle:{
        left: 10,
        fontSize:25,
    }
})