import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, Image, Text, ImageBackground, Pressable } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const MyOrderCard = () => {

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
        <Text style={styles.headingsTxt}>Order</Text>
        <Text style={styles.dataTxt}>SO-18908</Text>
      </View>

      <View>
          <Text style={styles.headingsTxt}>Tracking</Text>
          <Text style={styles.dataTxt}>12048534532</Text>
      </View>

    </View>

    <View style={styles.dataContainer}>
      <View>
        <Text style={styles.headingsTxt}>Date</Text>
        <Text style={styles.dataTxt}>6 March 2021</Text>
      </View>

        <View>
          <Text style={styles.headingsTxt}>Total</Text>
          <Text style={styles.dataTxt}>$33.37</Text>
        </View>
    </View>

    <View style={styles.dataContainer}>

      <View>
        <Image 
          source={require('../../assets/images/payBtn.png')}
          style={{height: 22, width: 46, marginTop: hp('1%')}}
        />
      </View>
      
      <View>
        <TouchableOpacity onPress = {() => {navigation.navigate('Order Details')}}>
          <Text style={styles.viewMoreTxt}>View More {'>'}</Text>
        </TouchableOpacity>
      </View>
    </View>
    </Pressable>
  );
};

export default MyOrderCard;