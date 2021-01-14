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
import ItemCard from '../Components/Card';

const data = [
    {
       name: 'Cyra',
       avatar: require('./pics/1.jpg')
    },
    {
        name: 'Levosiz-M',
        avatar: require('./pics/2.jpg')
    },
    {
        name: 'Tess',
        avatar: require('./pics/3.jpg')
    },
    {
        name: 'Dolo-650',
        avatar: require('./pics/4.jpg')
    },
    {
        name: 'Cyra',
        avatar: require('./pics/1.jpg')
    },
    {
        name: 'Levosiz-M',
        avatar: require('./pics/2.jpg')
    },
    {
        name: 'Tess',
        avatar: require('./pics/3.jpg')
    },
    {
        name: 'Dolo-650',
        avatar: require('./pics/4.jpg')
    },
   ]

class Dock extends React.Component{

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
        const { search } = this.state;
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor='#358e9d' barStyle='light-content' />
                <SearchBar
                    selectionColor="#358e9d"
                    placeholderTextColor="#358e9d"
                    placeholder="Search Here..."
                    onChangeText={this.updateSearch}
                    value={search}
                    lightTheme={true}
                    inputStyle={{
                        color: '#358e9d'
                    }}
                />
                <ScrollView >
                <View style={{
                    marginBottom: 170
                }}>
                {
                    data.map((u, i) => {
                        console.log(i)
                        return (
                            <ItemCard item={u} key={i} />
                            );
                        })
                }
                </View>
                </ScrollView>
                <View style={{
                    position: 'absolute',
                    bottom: 70
                }} 
                onPress={() => this.props.navigation.navigate('CURRENT')}
                >
                    <Icon raised
                    solid={true} name="camera" type="font-awesome-5" color='#358e9d' underlayColor="#358e9d"  size={40}/>
                </View>
                <View style={{
                    position: 'absolute',
                    bottom: 70,
                    right: 0
                }}
                >
                    <Icon
                    raised 
                    onPress={() => this.props.navigation.navigate('CURRENT')}
                    solid={true} name="arrow-right" type="font-awesome-5" color='#358e9d' underlayColor="#358e9d"  size={40}/>
                </View>
                
            </View>
        )
    }
}

export default Dock