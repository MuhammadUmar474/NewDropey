import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#F5F5F5',
    marginHorizontal: wp('5%'),
  },
  selectAllTxt: { 
    fontSize: 12, 
    color: '#2D3D52', 
    marginLeft: wp('1%'), 
    marginTop: hp('1.3%'),
    fontFamily: 'Montserrat-Medium'
  },
  shippingPriceBtn: {
    marginTop: hp('2.5%')
  },
  shippingPriceTxt: { 
    fontSize: 12, 
    color: '#7054D5', 
    fontFamily: 'Montserrat-SemiBold',
  },
});

export default styles;