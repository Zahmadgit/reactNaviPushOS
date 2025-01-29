import React, {Component } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {hasError: false, error: null, errorInfo:null};
    }
    static getDerivedStateFromError(error){
        return {hasError: true, error};

    }

    componentDidCatch(error, errorInfo){
        this.setState({errorInfo})
    }


    render(){
        if(this.state.hasError){
            return(
                <View style={styles.container}>
                    <Text style={styles.title}>Something went wrong</Text>
                    <Text style={styles.errorText}>{this.state.error && this.state.error.toString()}</Text>
                    <Text style={styles.efforInfo}>{this.state.errorInfo && this.state.errorInfo.componentStack}</Text>
                    <Image
                        style={styles.errorLogo}
                        source={require('../../assets/error.png')}
                    />
                </View>
            )
        }
        return this.props.children;
    }


}


const styles = StyleSheet.create({
    container: {
        flex:1,

    },
    title:{
        fontSize: 25,
        fontWeight: 'bold'
    },
    errorText:{
        fontsize: 20,
        color:'red'
    },
    errorInfo:{
        fontSize: 15,
        color: 'gray'
    },
    errorLogo:{
        width:100,
        height: 100,
        alignSelf: 'center'

    }

    
})

export default ErrorBoundary;