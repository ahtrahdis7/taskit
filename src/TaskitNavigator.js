import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Records from './Records/Records'
import Dock from './Dock/Dock'
import Current from './Current/Current'

const TabNavigator = createBottomTabNavigator()

// const options = {

// };

class Taskit extends React.Component{

    render() {
        return (
            <TabNavigator.Navigator 
            initialRouteName='DOCK' 
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === "DOCK") {
                        return <Icon name="dashboard" type='material' color={color} />;
                    } else if (route.name === 'CURRENT') {
                        return <Icon name="addchart" type='material' color={color} />;
                    } else {
                        return <Icon name="bookmarks" type='material' color={color}/>;
                    }
                }
            })}
            tabBarOptions={{
                activeTintColor: '#358e9d',
                inactiveTintColor: '#ffffff',
                inactiveBackgroundColor: '#358e9d',
                activeBackgroundColor: 'white',
                style: {
                    backgroundColor: '#358e9d',
                    
                },
            }}>
                <TabNavigator.Screen name="DOCK" component={Dock} />
                <TabNavigator.Screen name="CURRENT" component={Current} />
                <TabNavigator.Screen name="RECORDS" component={Records}  />
            </TabNavigator.Navigator>
        )
    }
}

export default Taskit