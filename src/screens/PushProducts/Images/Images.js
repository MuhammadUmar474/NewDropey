import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import ButtonComp from '../../../components/Button/ButtonComp';
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

            <View style={{marginHorizontal: wp('5%')}}>

                <ButtonComp btnName = "Save" styleBtn ={{marginTop: hp('1.5%')}}/>

                <ButtonComp btnName = "Push To Store" styleBtn ={{marginTop: hp('1.5%'), backgroundColor: '#61C064'}}/>

                <ButtonComp btnName = "Remove" styleBtn ={{marginTop: hp('1.5%'), backgroundColor: '#FFFFFF', borderColor: '#E1E4E8'}} styleTxt={{color: '#756D86'}}/>

            </View>
        </View>
    )
}

export default Images;
