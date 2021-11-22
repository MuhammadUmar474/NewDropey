import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    height: hp('16%'),
    width: wp('90%'),
    backgroundColor: '#fff',
    borderRadius: 5,
    alignSelf: 'center',
    elevation: 5,
    marginVertical: hp('0.7%')
  },
  productImg: {
    height: 85,
    width: 85,
    marginLeft: wp('2%'),
    marginVertical: hp('0.8%'),
    borderRadius: 5,
  },
  productInfoHeading: {
    color: '#756D86',
    fontSize: 10,
    fontFamily: 'Montserrat-Medium'
  },
  productInfo: {
    color: '#756D86',
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold'
  }
});

export default styles;