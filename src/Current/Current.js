import React from 'react'
import { 
    Text, 
    View, 
    Image,
    StatusBar 
} from 'react-native';
import styles from './styles'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import { SearchBar } from 'react-native-elements';
import ItemCard from '../Components/Card'

const data = [
    {
       name: 'Cyra',
       avatar: require('../Dock/pics/1.jpg')
    },
    {
        name: 'Levosiz-M',
        avatar: require('../Dock/pics/2.jpg')
    },
    {
        name: 'Tess',
        avatar: require('../Dock/pics/3.jpg')
    },
    {
        name: 'Dolo-650',
        avatar: require('../Dock/pics/4.jpg')
    },
    {
        name: 'Cyra',
        avatar: require('../Dock/pics/1.jpg')
    },
    {
        name: 'Levosiz-M',
        avatar: require('../Dock/pics/2.jpg')
    },
    {
        name: 'Tess',
        avatar: require('../Dock/pics/3.jpg')
    },
    {
        name: 'Dolo-650',
        avatar: require('../Dock/pics/4.jpg')
    },
   ]

class Current extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }
    componentDidMount() {

    }

    updateSearch = (search) => {
        this.setState({ search });
    };

    render() {
        // const { search } = this.state;
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor='#358e9d' barStyle='light-content' />
                <ScrollView >
                <View style={{
                    marginBottom: 90
                }}>
                {
                    data.map((u, i) => {
                        return <ItemCard item={u} key={i} />
                        })
                }
                </View>
                </ScrollView>
                <View style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0
                }}>
                    <Icon 
                    onPress={() => this.props.navigation.navigate('RECORDS')} 
                    raised 
                    solid={true} name="arrow-right" type="font-awesome-5" color='#358e9d'  size={40}/>
                </View>
                <View style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0
                }}>
                    <Icon 
                    onPress={() => this.props.navigation.navigate('DOCK')} 
                    raised 
                    solid={true} name="arrow-left" type="font-awesome-5" color='#358e9d'  size={40}/>
                </View>
                
            </View>
        )
    }
}

export default Current