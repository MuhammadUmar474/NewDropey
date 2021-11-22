import { StyleSheet, Dimensions } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: 'white'
  },
  backBtn: { 
    position: 'absolute', 
    padding: '2%', 
    marginLeft: wp('5%'),
    marginTop: hp('5%'),
  },
  backArrow: {
    height: 16,
    width: 10
  },
  premiumIcon: {
    height: hp('8%'),
    width: wp('27%'),
    marginLeft: wp('2%')
  },
  fireIcon: {
    height: hp('8%'),
    width: wp('8%'),
    marginLeft: wp('60%')
  },
  premiumIconView: {
    flexDirection: 'row', 
    top: hp('28%'), 
    position: 'absolute',
  },
  contentMainView: {
    bottom: 10,
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderColor: '#fff',
  },
  titleTxt: {
    color: '#383A3F',
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
  },
  countryTxt: {
    color: '#383A3F',
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
  },
  sellerTxt: {
    color: '#7E4FD0',
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
  },
  priceHeadingTxt: {
    color: '#756D86',
    fontSize: 13,
    fontFamily: 'Montserrat-Medium',
  },
  priceTxt: {
    color: '#756D86',
    fontSize: 17,
    fontFamily: 'Montserrat-SemiBold',
  },
  sellProductIcon: {
    marginTop: hp('2%'),
    height: hp('5%'),
    width: wp('50%'),
  },
  descriptionHeadingTxt: {
    marginTop: hp('2%'),
    color: '#423B50',
    fontSize: 13,
    fontFamily: 'Montserrat-Bold',
  },
  descriptionTxt: {
    marginTop: hp('1%'),
    color: '#777777',
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
  },
  row: {
    flexDirection: 'row',
  },
  bottomLine: { 
    marginTop: hp('3%'), 
    borderBottomColor: '#756D86', 
    borderBottomWidth: 0.29,
    width: wp('90%'),
    alignSelf: 'center'
    },
  pTimeTxt: {
    color: '#777777',
    fontSize: 13,
    fontFamily: 'Montserrat-Regular',
    marginTop: hp('2%')
  },
  businessTxt: {
    color: '#777777',
    fontSize: 13,
    fontFamily: 'Montserrat-Regular',
    marginTop: hp('1%')
  },
  amountTxt: {
    color: '#777777',
    fontSize: 13,
    fontFamily: 'Montserrat-Regular',
    marginTop: hp('3%')
  }
});

export default styles;