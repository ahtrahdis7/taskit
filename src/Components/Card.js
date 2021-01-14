import React from 'react'
import { 
    Text, 
    View, 
    Image,
} from 'react-native';
import styles from './styles'
import { Card, Icon } from 'react-native-elements'

export default function ItemCard(props) {
    return(
        <Card containerStyle={{
            borderColor: '#358e9d',
            borderWidth: 1
        }}>
            <View style={styles.cardView}>
                <View>
                    <Image
                        style={styles.image}
                        source={props.item.avatar}
                    />
                </View>
                <View style={styles.cardRight}>
                   <Text style={{
                       textAlign: 'center',
                       fontSize: 25,
                       fontFamily: 'ComicNeue-Regular'
                   }}>{props.item.name}</Text>
                   <View style={{
                       flexDirection: 'row',
                       justifyContent: 'space-around'
                   }}>
                        <Icon raised name="add" type="material" size={30}/>
                        <Text style={{fontSize: 30, alignSelf: 'center', fontFamily: 'ComicNeue-Regular'}}>{5}</Text>
                        <Icon raised name="remove" type="material" size={30}/>
                   </View>
                </View>
            </View>
        </Card>
    )
}