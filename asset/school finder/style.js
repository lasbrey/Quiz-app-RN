import { StyleSheet, } from 'react-native';

const Styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    mtitle: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#eee',
        shadowColor: "#000",
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
    scroll: {
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
    itemstyle: {
        justifyContent: 'center',
        textAlign: 'center',
        padding: 20,
        backgroundColor: '#eee',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
        fontSize: 16,
        fontWeight: '300'
    },
    website: {
        width: '95%',
        marginTop: 10,
    }
});

export default Styles;