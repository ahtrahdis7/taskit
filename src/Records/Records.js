import React from 'react'
import { Text, View } from 'react-native';
import styles from './styles'

class Records extends React.Component{

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {

    }

    render() {

        return(
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center'
            }}>
                <Text style={{
                    fontSize: 30,
                    fontFamily: 'ComicNeue-Regular'
                }}>Records Screen</Text>
            </View>
        )
    }
}

export default Records;