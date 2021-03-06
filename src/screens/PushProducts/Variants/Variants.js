import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView , Modal, Pressable} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CheckBox from '@react-native-community/checkbox';
import ButtonComp from '../../../components/Button/ButtonComp'
import styles from './Styles';
import PushProductVariationCard from '../../../components/PushProductVariationCard/PushProductVariationCard';

const Variants = () => {

    const [isSelectAll, setIsSelectAll] = useState(false);

    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{ flexDirection: 'row', marginTop: hp('1.2%') }}>
                        <CheckBox
                        // boxType = 'circle'
                        name="SelectAll"
                        value={isSelectAll}
                        onValueChange={(newValue) => {
                            setIsSelectAll(newValue);
                        }}
                        tintColors={{ true: '#7054D5', false: '#777777' }}
                        />
                        <Text style={styles.selectAllTxt} >Select All</Text>
                    </View>

                    <TouchableOpacity style={styles.shippingPriceBtn}>
                        <Text style={styles.shippingPriceTxt} >Show Shipping Prices</Text>
                    </TouchableOpacity>

                </View>
                <View style={{height: hp('15%'), marginTop: hp('1%')}}>
                    <PushProductVariationCard />
                </View>
                <View>

                    <ButtonComp btnName = "Save" styleBtn ={{marginTop: hp('1.5%')}}/>

                    <ButtonComp btnName = "Push To Store" styleBtn ={{marginTop: hp('1.5%'), backgroundColor: '#61C064'}}/>

                    <ButtonComp btnName = "Remove" styleBtn ={{marginTop: hp('1.5%'), backgroundColor: '#FFFFFF', borderColor: '#E1E4E8'}} styleTxt={{color: '#756D86'}}/>

                </View>
        </View>
    )
}

export default Variants;