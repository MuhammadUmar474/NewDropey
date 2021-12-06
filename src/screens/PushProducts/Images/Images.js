import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import styles from './Styles';
const Images = () => {

    const images = [
        require('../../../assets/images/bgforslider1.jpg'),
        require('../../../assets/images/prodcut1.png'),
        require('../../../assets/images/prodcut3.png'),
      ];
    return (
        <View style={styles.container}>
            <View style={{marginTop: hp('1%')}}>
                <SliderBox
                // autoplay={true}
                circleLoop={true}
                images={images}
                resizeMethod={'resize'}
                resizeMode={'cover'}
                sliderBoxHeight={250}
                inactiveDotColor= "white"
                dotColor="#7054D5"
                dotStyle = {{padding: 0, bottom: wp('3.5%')}}
                />
            </View>
        </View>
    )
}

export default Images;
