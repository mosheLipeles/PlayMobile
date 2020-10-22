import React, { Component } from 'react';
import { Alert , View, StyleSheet,Text } from 'react-native';
import RCPImagePlayer from './RCPImagePlayer';

class RCPImagesPlayer extends Component {
    
    render() { 
        return (
            <View style={styles.container}>
                <View style={styles.viewTextPlayer}>
                    <Text style={{top:30,fontSize:30}}>Press your choise</Text>
                </View>
                <View style={styles.viewPlayer}>
                    {this.props.logos.map((logo) => (
                        <RCPImagePlayer
                            key={logo.id}
                            logo={logo}
                            onItemHandle={this.props.onItemHandle}
                            
                            />
                    ))}
                    
                </View>
            </View>
          );
    }
}
 
export default RCPImagesPlayer;

const styles = StyleSheet.create({
    container: {
        flex : 4.5
    },
    viewTextPlayer: {
        flex: 1.5,
        backgroundColor: '#ff8080',
        alignItems: 'center',
    },
    viewPlayer: {
        flex: 3,
        backgroundColor: '#ff8080',
        flexDirection: 'row',
        justifyContent: 'space-around',
        
    }
})