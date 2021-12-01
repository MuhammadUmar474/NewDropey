import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, Image, Text, ImageBackground } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const OrderCardDetails = () => {

  return (
    <View style={styles.cardContainer}>
    <View style={styles.dataContainer}>
      <View>
        <Text style={styles.headingsTxt}>Order</Text>
        <Text style={styles.dataTxt}>SO-18908</Text>
      </View>

      <View>
          <Text style={styles.headingsTxt}>Tracking</Text>
          <Text style={styles.dataTxt}>12048534532</Text>
      </View>

      <View>
          <Text style={styles.headingsTxt}>External ID</Text>
          <Text style={styles.dataTxt}>12048534532</Text>
      </View>

      <View>
          <Text style={styles.headingsTxt}>Invoice</Text>
          <Text style={styles.dataTxt}>Unpaid</Text>
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

      <View>
        <Text style={styles.headingsTxt}>Shipment Date</Text>
        <Text style={styles.dataTxt}>6 March 2021</Text>
      </View>

      <View>
        <Text style={styles.headingsTxt}>Fulfillment</Text>
        <Text style={styles.dataTxt}>Pending</Text>
      </View>
    </View>
    </View>
  );
};

export default OrderCardDetails;