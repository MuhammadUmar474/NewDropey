import * as React from 'react';
import { Text, View, Image } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import styles from './styles';

const VariationCard = (props) => {
  return (
    <View style={styles.container}>
        <View style={{flexDirection:'row'}}>
            <View>
                <Image style={styles.productImg} source= {require('../../assets//images/prodcut2.png')}/>
            </View>
            <View>
                <View style={{marginHorizontal: wp('5%'), marginVertical: hp('1%'), flexDirection: 'row'}}>
                    <View>
                        <Text style={styles.productInfoHeading}>Size</Text>
                        <Text style={styles.productInfo}>XS</Text>
                    </View>

                    <View style={{marginLeft: wp('25%')}}>
                        <Text style={styles.productInfoHeading}>Color</Text>
                        <Text style={styles.productInfo}>Red</Text>
                    </View>
                </View>

                <View style={{marginHorizontal: wp('5%'), marginVertical: hp('1%'), flexDirection: 'row'}}>
                    <View>
                        <Text style={styles.productInfoHeading}>Inventory</Text>
                        <Text style={styles.productInfo}>02</Text>
                    </View>

                    <View style={{marginLeft: wp('17%')}}>
                        <Text style={styles.productInfoHeading}>Price</Text>
                        <Text style={styles.productInfo}>$33.27</Text>
                    </View>
                </View>
            </View>
        </View>
        
    </View>
  );
};

export default VariationCard;