import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView , Modal, Pressable} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import OrderCardDetails from '../../components/OrderCardDetails/OrderCardDetails';
import styles from './Styles';

const OrderDetails = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.topView}>
            <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                <Image
                    source={require('../../assets/images/arrowback.png')}
                    style={styles.backArrow}    
                />
            </TouchableOpacity>
                <Text style={styles.headerTxt}>My Orders</Text>
            </View>

            <View style={{marginHorizontal: wp('5%')}}>
                <Text style={{alignSelf: 'center', color: '#423B50', fontFamily: 'Montserrat-SemiBold', fontSize: 14, marginTop: hp('2%')}}>Order Details</Text>
                <View style={{marginTop: hp('2%')}}>
                    <OrderCardDetails />
                </View>

                <TouchableOpacity style={styles.buttonPay}>
                    <Image 
                    source ={require('../../assets/images/creditcard.png')}
                    style={{height: 14, width: 18, marginHorizontal: 5}}
                    />
                    <Text style={styles.payTxt}>Pay</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OrderDetails;
