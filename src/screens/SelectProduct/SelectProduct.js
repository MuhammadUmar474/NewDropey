import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { onChange } from 'react-native-reanimated';
import { SliderBox } from "react-native-image-slider-box";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import styles from './Styles';
import ButtonComp from '../../components/Button/ButtonComp';
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
          <View>
            <SliderBox
              // autoplay={true}
              // circleLoop={true}
              images={images}
              resizeMethod={'resize'}
              resizeMode={'cover'}
              sliderBoxHeight={250}
              inactiveDotColor= "white"
              dotColor="#7054D5"
              dotStyle = {{padding: 0, bottom: wp('6.5%')}}
            />
            <TouchableOpacity style={styles.backBtn} onPress={() => navigation.navigate('HomeProduct')}>
            <Image
              source={require('../../assets/images/arrowback.png')}
              style={styles.backArrow}    
            />
            </TouchableOpacity>

            <View style={styles.premiumIconView}>
              <Image
                source={require('../../assets/images/premium.png')}
                style = {styles.premiumIcon}
              />

              <Image
                source={require('../../assets/images/fire.png')}
                style = {styles.fireIcon}
              />
            </View>
          </View>

          <ScrollView style={styles.contentMainView} showsVerticalScrollIndicator={false}>
            <View style={{marginHorizontal: wp('5%'), bottom: 20, marginTop: hp('5%')}}>
              <Text style={styles.titleTxt}>Women's Sleeveless Ruffle Front {'\n'}Slit Bodycon Dress</Text>
              <View style={{flexDirection: 'row', marginTop: hp('1%'),}}>
                <Text style={styles.countryTxt}>From United State By</Text>
                <Text style={styles.sellerTxt}> Ivory Felix</Text>
              </View>

              <Image
                source={require('../../assets/images/sellingProduct.png')}
                style = {styles.sellProductIcon}
              />

              <View style={{flexDirection: 'row', marginTop: hp('2%')}}>
                  <View>
                    <Text style={styles.priceHeadingTxt}>Listing Price</Text>
                    <Text style={styles.priceTxt}>$ 9.75</Text>
                  </View>

                  <View style={{marginLeft: wp('35%')}}>
                    <Text style={styles.priceHeadingTxt}>Retail Price</Text>
                    <Text style={styles.priceTxt}>$ 14.58</Text>
                  </View>
              </View>

              <Text style={styles.descriptionHeadingTxt}>Product Description:</Text>

              <Text style={styles.descriptionTxt}>This stylist sleeveless dress features a ruffle detail and side slit and is perfect for a party!</Text>

              <View style={styles.row}>
                  <Text style={{color: '#777777', fontSize: 30}}>{'\u2022' + " "}</Text>
                  <Text style={{alignSelf: 'center'}}>Model is wearing a size Small</Text>
              </View>

              <View style={styles.bottomLine}/>

              <View style={{flexDirection: 'row', marginTop: hp('1%'), justifyContent: 'space-between'}}>
                <Text style={styles.descriptionHeadingTxt}>Processing Time :</Text>
                <Text style={styles.pTimeTxt}>2-3 business days</Text>
              </View>

              <Text style={styles.descriptionHeadingTxt}>Shipping Time :</Text>

              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.businessTxt}>United States{'\n'}(4-7 business days)</Text>
                <Text style={styles.amountTxt}>$3.50 /$3.50 USD</Text>
              </View>

              <ButtonComp btnName="Add To Import List" styleBtn={{backgroundColor: '#61C064'}}/>

              <ButtonComp btnName="Open Variations" styleBtn={{backgroundColor: '#fff', borderWidth: 0.2,}} styleTxt={{color: '#756D86', }}/>

              <ButtonComp btnName="Order Sample" styleBtn={{backgroundColor: '#fff', borderWidth: 0.2,}} styleTxt={{color: '#756D86', }}/>

            </View>
          </ScrollView>
        </SafeAreaView>
    )
}

export default SelectProduct;
