import { StyleSheet, } from 'react-native';

const Styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff'
    },
    left: {
        padding: 5,
    },
    txt: {
        fontSize: 30,
        fontFamily: 'Cochin'
    },
    control: {
        padding: 8,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    ctrl5: {
        flex: 10,
    },
    ctrl: {
        flex: 1,
        padding: 5,
        alignItems: 'flex-end'
    },
    ctrl2: {
        flex: 1,
        padding: 5,
        alignItems: 'flex-end'
    },
    scroll: {
        backgroundColor: '#fff',
    },
    que: {
        paddingLeft: 10,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    head: {
        paddingLeft: 10,
        padding: 10,
    },
    headsm: {
        fontSize: 15,
        color: '#000',
    },
    head1: {
        color: '#000',
        fontSize: 20,
        textAlign: 'center',
    },
    item: {
        width: '50%',
        padding: 10,
    },
    checkb: {
        padding: 15,
        backgroundColor: '#fff',
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    question: {
        fontSize: 20,
        padding: 10,
        backgroundColor: '#fff',
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    btnc: {
        flex: 1,
        flexDirection: 'row',
    },
    btnp: {
        flex: 1,
        padding: 15,
        backgroundColor: '#18ce0f',
        color: '#fff',
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        textAlign: 'center',
    },
    btns: {
        flex: 1,
        textAlign: 'center',
        color: '#fff',
        padding: 15,
        backgroundColor: '#18ce0f',
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    btnn: {
        flex: 1,
        padding: 15,
        color: '#fff',
        backgroundColor: '#18ce0f',
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        textAlign: 'center',
    },
    numb: {
        flexDirection: 'row',
        padding: 10,
        flexWrap: 'wrap'
    },
    numbs: {
        textAlign: 'center',
        borderWidth: 1,
        padding: 10,
        width: '14%',
        margin: 5,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#eeeeee8f'
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#18ce0f",
        borderRadius: 5,
        padding: 10,
        elevation: 2
    },
    display: {
        justifyContent: 'flex-end',
        backgroundColor: '#eee',
        flexDirection: 'row',
        padding: 10,
        width: '60%',
    },
    num: {
        flexDirection: 'row',
        width: '60%',
        flexWrap: 'wrap',
    },
    num2: {
        width: '23%',
        textAlign: 'center',
        padding: 10,
        margin: 10,
        backgroundColor: '#eee',
    },
});

export default Styles;