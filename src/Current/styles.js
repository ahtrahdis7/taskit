import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        paddingBottom: 10,
		backgroundColor: '#fff'
    },
    image: {
        height: 150,
        width: 150,
    },
    cardView: {
        flexDirection: 'row'
    },
    cardRight:{
        marginLeft: 10,
        
    }
});

export default styles;
