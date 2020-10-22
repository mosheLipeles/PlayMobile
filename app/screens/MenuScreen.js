import React from 'react';
import { TouchableWithoutFeedback,StyleSheet, Image, SafeAreaView, Text, View} from 'react-native';

class MenuScreen extends React.Component {
    render() {
        
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.viewTitle}>
                    <Text style={styles.textTitle}>Choose a game</Text>
                </View>
                <View style={styles.viewLogo}> 
                    <TouchableWithoutFeedback
                    onPress={() => 
                        this.props.navigation.navigate('RCP')
                        
                      }>
                        <Image
                            style={styles.bottunLogo}
                            source={require('../assets/RCPlogo.jpg')}>
                        </Image>
                    </TouchableWithoutFeedback>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bottunLogo:{
        width: 70 ,
        height: 70
    },
    textTitle: {
        fontSize: 40,
        
    },
    viewTitle:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    viewLogo:{
        flex: 9,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#80bfff'
    }
});

export default MenuScreen;