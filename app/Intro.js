
import React from 'react';
import SplashScreen from './screens/SplashScreen';
import Menu from "./screens/MenuScreen";
export default class Intro extends React.Component {

    componentWillMount() {
        this.state = {
            view: <SplashScreen />
        };


        setTimeout(() => {
            //IF FALSE NAVIGATE TO ERROR
            if (true) {
                this.setState({
                    view: <Menu />
                });
            }
        }, 4000); //TIME OF WAITING


    }

    render() {
        return (
            this.state.view
        );
    }
}