import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';


// To-do add your ui if you want..

export default function Receipt({navigation}) {
    console.log(navigation.state.params);
    const data = navigation.state.params;
    return (
        <View style={styles.contianer}>
            <View style={styles.header}>
                <View style={styles.sec}>
                    <AntDesign 
                    onPress={()=>navigation.goBack()}
                    name="left" size={24} color="white" />
                    <Text style={styles.receipt}>Receipt</Text>
                    <View />
                </View>
            </View>
            <View style={styles.mainCOntianere}>
                <View style={styles.indder}>
                    <Text style={styles.invoice}>invoice</Text>
                    <View style={styles.info}>
                        <Text style={styles.head}>Ground</Text>
                        <Text>{data.Ground}</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.head}>Area</Text>
                        <Text>{data.Area}</Text>
                    </View>
                    <View style={styles.price}>
                        <Text style={styles.priceText}>Price</Text>
                        <Text style={styles.prieTexrt}>0</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.brnCOnrtianer}>
                <Text style={styles.btnText}>Pay now</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    contianer: {
        flex: 1
    },
    header: {
        backgroundColor: '#5b77ca',
        flex: 0.3,

    },
    sec: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 20
    },
    receipt: {
        color: 'white',
        fontSize: 18,
    },
    mainCOntianere: {
        backgroundColor: 'white',
        flex: 0.5,
        width: '80%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
        alignSelf: 'center',
        marginTop: -50,
        borderRadius: 3

    },
    indder: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 10,
        justifyContent: 'space-between',
        flex: 1
    },
    invoice: {
        backgroundColor: '#f0f3f7',
        alignSelf: 'center',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 15

    },
    info:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
    },
    head:{
        fontWeight: 'bold'
    },
    price: {
        flex: 0.4,
        alignSelf: 'center'
    },
    prieTexrt:{
        fontSize: 32,
        fontWeight: 'bold',
    },
    priceText:{
        color: 'grey',
        marginLeft: -4
    },
    brnCOnrtianer:{
        alignSelf: 'center',
        backgroundColor: 'green',
        width: '30%',
        height: '7%',
        marginTop: -10,
        zIndex: 100,
        elevation: 10,
        alignItems: 'center',
        borderRadius: 4,
        justifyContent: 'center'
    },
    btnText:{
        color: 'white',
        fontWeight: 'bold'
    }
})