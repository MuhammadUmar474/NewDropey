import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F5F5F5',
  },
  topViewApi: {
    height: hp('11%'),
    backgroundColor: '#7054D5'
  },
  topView: {
    height: hp('11%'),
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
  orderListTxt: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    color: '#423B50',
  },
  instructionTxt: {
    marginTop: hp('15%'),
    color: '#777777',
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    alignSelf: 'flex-start'
  },
  btnStyle: {
    width: wp('44%'),
    height: hp('7%'),
    backgroundColor: '#E1E4E8',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('3%'),
  },
  btnTxt: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#756D86', 
    fontSize: 12,
  },
  btnSearchStyle: {
    width: wp('44%'),
    height: hp('7%'),
    backgroundColor: '#7054D5',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('3%'),
  },
  btnSearchTxt: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#fff', 
    fontSize: 12,
  },
  searchProductTxt: {
    flex: 1,
    marginLeft: wp('4%'), 
    color: '#ABB3BB', 
    fontSize: 12,
    fontFamily: 'Montserrat-Medium'
  },
  searchBarView: {
    marginHorizontal: wp('5%'),
    height: hp('6%'), 
    width: wp('90%'),
    backgroundColor: '#fff', 
    flexDirection: 'row', 
    alignItems: 'center', 
    borderRadius: 5, 
    paddingHorizontal: 10,
  },
  removeBtn: {
    marginTop: hp('2%'),
    flexDirection: 'row',
    alignSelf: 'flex-end',
    height: hp('4%'), 
    width: wp('40%'), 
    backgroundColor: '#ABB3BB',
    justifyContent: 'space-around',
    paddingHorizontal: wp('2%'),
    alignItems: 'center' ,
    borderRadius: 30, 
  },
  removeTxt: { 
    fontSize: 11, 
    color: '#000000D8', 
    fontFamily: 'Montserrat-SemiBold',
  },
  pushBtn: {
    marginTop: hp('2%'),
    flexDirection: 'row',
    alignSelf: 'flex-end',
    height: hp('4%'), 
    width: wp('40%'), 
    backgroundColor: '#61C064',
    justifyContent: 'space-around',
    paddingHorizontal: wp('2%'),
    alignItems: 'center' ,
    borderRadius: 30, 
  },
  pushTxt: { 
    fontSize: 11, 
    color: '#FFFFFF', 
    fontFamily: 'Montserrat-SemiBold',
  },
});

export default styles;