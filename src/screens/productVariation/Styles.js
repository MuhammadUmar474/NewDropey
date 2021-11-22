import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  topView: {
    height: hp('11%'),
    backgroundColor: '#7054D5'
    },
  backBtn: {
    // flex: 1,
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
  importBtn: {
    marginTop: hp('1%'),
    flexDirection: 'row',
    alignSelf: 'flex-end',
    height: hp('5%'), 
    width: wp('30%'), 
    backgroundColor: '#7054D5',
    justifyContent: 'space-around',
    paddingHorizontal: wp('3%'),
    marginHorizontal: wp('5%'),
    alignItems: 'center' ,
    borderRadius: 30, 
  },
  importTxt: { 
      fontSize: 11, 
      color: '#FFFFFF', 
      fontFamily: 'Montserrat-SemiBold',
  },
  importIcon: { 
      height:15, 
      width: 15, 
      backgroundColor: 'transparent',
  },
  styleHeading: {
    color: '#777777',
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold'
  },
  chartHeading: {
    color: '#756D86',
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold'
  },
  chartValue: {
    color: '#777777',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium'
  },
  bottomLine: { 
    marginTop: hp('2%'), 
    borderBottomColor: '#756D86', 
    borderBottomWidth: 0.19, 
    width: wp('90%'),
    alignSelf: 'center'
    },
});

export default styles;