import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, Image, Text, ImageBackground, Pressable } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const PushProductVariationCard = () => {

  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const navigation = useNavigation(); 

  // const handleSelect = (newValue) => {
  //   // console.log("object", isSelectAll, isCheckAll)
  //   if(toggleCheckBox) {
  //     // console.log("Toggle ", toggleCheckBox)
  //      setSelectAll(false);
  //      setToggleCheckBox(newValue);
  //   }
  //   if(!toggleCheckBox && isCheckAll && !isSelectAll){
  //     setCheckAll(true)
  //     // console.log("Console")
  //   }
  //   setToggleCheckBox(newValue);
  // }
  return (
    <Pressable style={ !toggleCheckBox? styles.cardContainer : styles.cardContainerSelected}
    onLongPress={() => setToggleCheckBox(!toggleCheckBox)}>
    <View style={styles.dataContainer}>
      <View>
        <Text style={styles.headingsTxt}>SKU</Text>
        <Text style={styles.dataTxt}>SO-18908</Text>
      </View>

      <View>
          <Text style={styles.headingsTxt}>Inventory</Text>
          <Text style={styles.dataTxt}>02</Text>
      </View>

    </View>

    <View style={styles.dataContainer}>
      <View>
        <Text style={styles.headingsTxt}>Size</Text>
        <Text style={styles.dataTxt}>XS</Text>
      </View>

        <View>
          <Text style={styles.headingsTxt}>Price You Pay</Text>
          <Text style={styles.dataTxt}>$33.37</Text>
        </View>
    </View>

    <View style={styles.dataContainer}>
      <View>
          <Text style={styles.viewMoreTxt}>Sales Price</Text>
          <View style={{height: 22, width: 55, borderWidth: 1, borderColor: '#0A16460F', borderRadius: 5, marginTop: hp('0.5%')}}>
            <Text style={{color: '#0A16460F'}}>$ 203</Text>
          </View>
      </View>
    </View>
    </Pressable>
  );
};

export default PushProductVariationCard;