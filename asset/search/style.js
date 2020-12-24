/* eslint-disable prettier/prettier */
import { StyleSheet, } from 'react-native';

const Styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    website: {
        width: '95%',
        flex: 1,
        flexDirection: 'row'
    },
    sch:{
        padding: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 2,
        fontSize: 16,
        fontWeight: '300'
    }
});

export default Styles;