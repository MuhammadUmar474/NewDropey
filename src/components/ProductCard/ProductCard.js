import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, Image, Text, ImageBackground } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ImportListBtn from '../ImportListBtn/ImportListBtn';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';

const ProductCard = ({ post, isSelected, setSelectAll }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  useEffect(() => {
    setToggleCheckBox(isSelected)
  }, [isSelected])

  const handleSelect = (newValue) => {
    if(toggleCheckBox) {
       setSelectAll(false);
       setToggleCheckBox(newValue);
    }
    setToggleCheckBox(newValue);
  }

  return (
    <TouchableOpacity style={ !toggleCheckBox? styles.cardContainer : styles.cardContainerSelected} 
    onPress = {() => {setToggleCheckBox(!toggleCheckBox)}}>
      <View>
        <View>
          <ImageBackground
            source={require('../../assets/images/prodcut1.png')}
            style = {styles.productImg}
          >
            { toggleCheckBox ? (<View>
              <CheckBox
                boxType = 'circle'
                value={toggleCheckBox}
                onValueChange={handleSelect}
                tintColors = {{ true: '#7054D5' , false: '#FFFFFF' }}
                style={styles.checkboxStyle}
              />
            </View>) : null}
            
            <View style={{ flexDirection: 'row', top: hp('19%'), position: 'absolute'}}>
            <Image
              source={post?.mime_type}
              style = {styles.premiumIcon}
            />

            <Image
              source={post?.fire}
              style = {styles.fireIcon}
            />
          </View>
          </ImageBackground>
          
      </View>
      <Text style={styles.productNameTxt} >{post.name}</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.productNameTxt} >By</Text>
        <Text style={styles.storeNameTxt} >{post?.item_detials?.ownername}</Text>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.priceTxt}>{post.sale_price_formatted}</Text>
        <View style={{flexDirection: 'row', marginTop: hp('0.5%')}}>
            <View style={styles.diamondView}>
            <Image
              source={require('../../assets/images/diamond.png')}
              style = {styles.diamondIcon}
            />
            <Text style={styles.supplierTxt} >Supplier</Text>
            </View>
            <Image
              source={post.countryImageUri}
              style = {styles.countryIcon}
            />
        </View>
      </View>
      <View style={{marginTop: hp('1%'), alignSelf: 'center'}}>
        <ImportListBtn />
      </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;