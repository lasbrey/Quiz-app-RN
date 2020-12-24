/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    mtitle: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    icon: {
        padding: 10,
        justifyContent: 'center',
    },
    title: {
        fontFamily: 'arial',
        fontSize: 25,
        padding: 10,
    },
    activate: {
        fontSize: 20,
        padding: 10,
        color: '#fff',
        backgroundColor: 'green',
        borderRadius: 10,
    },
    bh: {
        flex: 12,
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    scroll:{
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    item: {
        width: '100%',
        padding: 10,
    },
    itemstyle: {
        justifyContent: 'center',
        textAlign: 'center',
        padding: 20,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
        fontSize: 16,
        fontWeight: '300',
    },
    info:{
        fontSize: 12,
        color: 'grey',
    },
    head:{
        fontSize: 30,
        padding: 10,
    }
});

export default Styles;
