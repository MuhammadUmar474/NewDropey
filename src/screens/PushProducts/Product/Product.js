import React, { useState } from 'react';
import { View, Image, ScrollView, Text, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from './Styles'
const Product = () => {

    const [productName, setProductName] = useState();
    return (
        <ScrollView style={styles.container}>
            <Image 
                source={require('../../../assets/images/prodcut1.png')}
                style={{height: hp('40%'), marginTop: hp('1%')}}
                width = {'100%'}
            />
            <View style={{marginHorizontal: wp('5%')}}>
                <Text style={{fontSize: 16, fontFamily: 'Montserrat-Regular', color: '#383A3F', marginTop: hp('1%')}}>Women's Sleeveless Ruffle Front Slit Bodycon Dress</Text>
                <View style={styles.productNameView}>
                    <TextInput
                        style={styles.productNameTxt}
                        placeholder="Product Name"
                        onChangeText={setProductName}
                        value={productName}
                    />
                </View>

                <View style={styles.tagsView}>
                    
                </View>
            </View>
        </ScrollView>
    )
}

export default Product;
