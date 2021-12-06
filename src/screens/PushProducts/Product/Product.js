import React, { useState } from 'react';
import { View, Image, ScrollView, Text, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DropDownPicker from 'react-native-dropdown-picker';
import RemovableChips from 'react-native-chip/RemovableChips'
import styles from './Styles'
import ButtonComp from '../../../components/Button/ButtonComp';
const Product = () => {

    const [productName, setProductName] = useState();
    const [openProductType, setOpenProductType] = useState(false);
    const [productValue, setproductValue] = useState(null);
    const [productItems, setproductItems] = useState([
        {label: 'Apple', value: 'apple'},
        {label: 'Banana', value: 'banana'}
    ]);
    const [openCollection, setOpenCollection] = useState(false);
    const [collectionValue, setcollectionValue] = useState(null);
    const [collectionItems, setcollectionItems] = useState([
        {label: 'collect 1', value: 'collect 1'},
        {label: 'collect 2', value: 'collect 2'}
    ]);

    return (
        <ScrollView style={styles.container}>
            <Image 
                source={require('../../../assets/images/prodcut2.png')}
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

                <View style ={styles.tagsView}>
                    <RemovableChips
                        label = "Enter Tags"
                        onChangeChips={(chips) => console.log(chips)} 
                        valueStyle={{color: '#423B50', fontSize:12,}}
                        chipStyle={{borderColor: '#B6C9DB', width: wp('18%'), height: hp('4.5%'), borderRadius: 5, borderWidth:1, backgroundColor: '#B6C9DB'}}
                        chipCloseStyle={{bottom: 1, color: '#423B50', fontSize: 15}}
                        />
                </View>

                <View>
                    <DropDownPicker
                        placeholder = {'Product Type'}
                        open={openProductType}
                        value={productValue}
                        items={productItems}
                        setOpen={setOpenProductType}
                        setValue={setproductValue}
                        style={styles.productNameView}
                        containerStyle={{ width: wp('90%') }}
                        textStyle={{ color: '#777777' }}
                    />

                    <DropDownPicker
                        placeholder = {'Collection'}
                        open={openCollection}
                        value={collectionValue}
                        items={collectionItems}
                        setOpen={setOpenCollection}
                        setValue={setcollectionValue}
                        style={styles.productNameView}
                        containerStyle={{ width: wp('90%') }}
                        textStyle={{ color: '#777777' }}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default Product;
