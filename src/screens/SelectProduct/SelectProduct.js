import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { onChange } from 'react-native-reanimated';
import { SliderBox } from "react-native-image-slider-box";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import styles from './Styles';
const SelectProduct = ({ navigation }) => {

    const width = wp('100%');
    const height = hp('40%');

    const images = [
        require('../../assets/images/bgforslider1.jpg'),
        require('../../assets/images/prodcut1.png'),
        require('../../assets/images/prodcut3.png'),

    ];
    return (
        <SafeAreaView style={styles.container}>
              <SliderBox
                ImageComponentStyle= {{resizeMode: 'cover', overFLow: 'hidden'}}
                autoplay={true}
                circleLoop={true}
                images={images}
                resizeMethod={'resize'}
                resizeMode={'cover'}
                sliderBoxHeight={250}
                inactiveDotColor= "white"
                dotColor="#7054D5"
                dotStyle = {{padding: 0}}
              />
              <TouchableOpacity style={styles.backBtn} onPress={() => navigation.navigate('HomeProduct')}>
                <FontAwesome name={"long-arrow-left"} size={20} color={"white"} />
              </TouchableOpacity>
        </SafeAreaView>
    )
}

export default SelectProduct;
