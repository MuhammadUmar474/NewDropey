import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F5F5F5',
  },
  topView: {
    height: hp('11%'),
    width: wp('100%'),
    backgroundColor: '#7054D5'
  },
  backBtn: {
    zIndex:1,
    marginTop: hp('6%'),
    marginLeft: wp('4%'),
  },
  headerTxt: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFFFFF',
    bottom: 18
  },
  backArrow: {
    height: 16,
    width: 10
  },
  buttonPay: {
    width: wp('90%'),
    height: hp('6%'),
    backgroundColor: '#7054D5',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: hp('30%'),
},
  payTxt: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#fff', 
    fontSize: 12,
},
});

export default styles;