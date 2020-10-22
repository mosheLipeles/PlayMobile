import React, { Component } from 'react';
import RCPPlayerView from '../components/RCP/RCPPlayerView';
import RCPTitle from '../components/RCP/RCPTitle';
import RCPComputerView from '../components/RCP/RCPComputerView';

import { Alert, SafeAreaView, StyleSheet} from 'react-native';

class RCPScreen extends Component {
    state = {
        logos : [
            {
                id : 1,
                src: require('../assets/rock.jpg')
            },
            {
                id : 2,
                src: require('../assets/paper.jpg')
            },
            {
                id : 3,
                src: require('../assets/scissors.jpg')
            },
        ],
        srcComputer: [require('../assets/questionMark.jpg')]
    }

    onItemHandle = (logoId) =>{
        //Alert.alert(null,logoId === 1 ? "Rock" : logoId === 2 ? "Papar" : "Scissors")
        var rnd = Math.floor(Math.random() * 3) + 1 ;
        //Alert.alert(String(rnd));
        const srcComputer=[...this.state.srcComputer];
        srcComputer[0]=this.state.logos[rnd-1].src;
        
        this.setState({srcComputer});
        setTimeout(() => {
            Alert.alert(this.whoWin(logoId,rnd))
            }, 1000);
    }

    whoWin = (logoId,rnd) =>{
        return logoId===rnd ? "Draw" :
        (logoId===1 && rnd===3) || (logoId===2 && rnd===1) || (logoId===3 && rnd===2) ? "You win" :
        "You lose"
    }

    render(){
        const route = this.props.route;
        return (
            <SafeAreaView style={styles.container}>
                <RCPTitle route={this.props} />
                <RCPComputerView logo={this.state.srcComputer[0]}/>
                <RCPPlayerView 
                    logos={this.state.logos}
                    onItemHandle={this.onItemHandle}
                   />
                
            </SafeAreaView>
        );
    }
}

export default RCPScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})