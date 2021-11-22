import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import VariationCard from '../../components/VariationCard/VariationCard';
import styles from './Styles'
const productVariation = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.topView}>
            <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                <Image
                    source={require('../../assets/images/arrowback.png')}
                    style={styles.backArrow}    
                />
            </TouchableOpacity>
                <Text style={styles.headerTxt}>Product Variations</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{marginTop: hp('2%')}}>
                    <VariationCard />
                    <VariationCard />
                    <VariationCard />

                </View>
                <TouchableOpacity style={styles.importBtn}
                    onPress={() => { console.log("object") }}>
                    <Image
                    source={require('../../assets/images/import.png')}
                    style={styles.importIcon}
                    />
                    <Text style={styles.importTxt} >Download</Text>
                </TouchableOpacity>

                <View style={{marginTop: hp('2%'), marginHorizontal: wp('5%')}}>
                    <Text style={styles.styleHeading}>Women's clothing size chart</Text>
                    <View style={{marginTop: hp('3%'), flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.chartHeading}>Size</Text>
                        <Text style={styles.chartHeading}>Bust(in)</Text>
                        <Text style={styles.chartHeading}>Waist(in)</Text>                    
                        <Text style={styles.chartHeading}>Hip(in)</Text>
                    </View>
                    <View style={styles.bottomLine}/>

                    <View style={{marginTop: hp('3%'), flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp('1%')}}>
                        <Text style={styles.chartValue}>XS</Text>
                        <Text style={styles.chartValue}>33</Text>
                        <Text style={styles.chartValue}>25</Text>                    
                        <Text style={styles.chartValue}>30.5</Text>
                    </View>
                    <View style={styles.bottomLine}/>
                    
                    <View style={{marginTop: hp('3%'), flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp('1%')}}>
                        <Text style={styles.chartValue}>XS</Text>
                        <Text style={styles.chartValue}>33</Text>
                        <Text style={styles.chartValue}>25</Text>                    
                        <Text style={styles.chartValue}>30.5</Text>
                    </View>
                    <View style={styles.bottomLine}/>

                </View>
              </ScrollView>
        </View>
    )
}

export default productVariation;
