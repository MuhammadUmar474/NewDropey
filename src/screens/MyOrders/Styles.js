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
  topViewApi: {
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
  viewCotainers: { 
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  searchProductTxt: {
    flex: 1,
    marginLeft: wp('4%'), 
    color: '#ABB3BB', 
    fontSize: 12,
    fontFamily: 'Montserrat-Medium'
  },
  filterIconView: {
    height: hp('6%'),
    width: wp('11%'),
    backgroundColor: '#fff', 
    alignItems: 'center', 
    borderRadius: 5, 
    paddingHorizontal: 5,
    overflow: 'hidden'
  },
  filterIcon: { 
    height:40, 
    width: 40, 
    backgroundColor: 'transparent',
  },
  searchBarView: { 
    height: hp('6%'), 
    width: wp('77%'),
    backgroundColor: '#fff', 
    flexDirection: 'row', 
    alignItems: 'center', 
    borderRadius: 5, 
    paddingHorizontal: 10,
  },
  importBtn: {
    marginTop: hp('2%'),
    flexDirection: 'row',
    alignSelf: 'flex-end',
    height: hp('4%'), 
    width: wp('30%'), 
    backgroundColor: '#61C064',
    justifyContent: 'space-around',
    paddingHorizontal: wp('2%'),
    alignItems: 'center' ,
    borderRadius: 30, 
  },
  importTxt: { 
    fontSize: 11, 
    color: '#FFFFFF', 
    fontFamily: 'Montserrat-SemiBold',
  },
  importIcon: { 
    height:12, 
    width: 12, 
    backgroundColor: 'transparent',
  },
  bulkBtn: {
    marginTop: hp('2%'),
    flexDirection: 'row',
    alignSelf: 'flex-end',
    height: hp('4%'), 
    width: wp('30%'), 
    backgroundColor: '#7054D5',
    justifyContent: 'space-around',
    paddingHorizontal: wp('2%'),
    alignItems: 'center' ,
    borderRadius: 30, 
  },
  bulkTxt: { 
    fontSize: 11, 
    color: '#FFFFFF', 
    fontFamily: 'Montserrat-SemiBold',
  },
  downloadBtn: {
    marginTop: hp('2%'),
    flexDirection: 'row',
    alignSelf: 'flex-end',
    height: hp('4%'), 
    width: wp('35%'), 
    backgroundColor: '#ABB3BB',
    justifyContent: 'space-around',
    paddingHorizontal: wp('2%'),
    alignItems: 'center' ,
    borderRadius: 30, 
  },
  downloadTxt: { 
    fontSize: 11, 
    color: '#000000D8', 
    fontFamily: 'Montserrat-SemiBold',
  },
  downloadIcon: { 
    height:14, 
    width: 14, 
    backgroundColor: 'transparent',
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
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    // marginTop: 22
  },
  modalView: {
    height: hp('40%'),
    width: wp('100%'),
    backgroundColor: "white",
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    shadowColor: "#707070",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5
  },
  filterTxt: {
    marginTop: hp('1%'),
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: '#2C2C2C',
  },
  filterLineTxt: {
    marginTop: hp('1%'),
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: '#777777',
  },
  swipeDown: {
    borderRadius: 2,
    marginTop: hp('1.5%'), 
    borderBottomColor: '#7054D5', 
    borderBottomWidth: 5,
    width: wp('12%'),
    alignSelf: 'center',
  },
  selectAllTxt: { 
    fontSize: 12, 
    color: '#2D3D52', 
    marginLeft: wp('1%'), 
    marginTop: hp('1.3%'),
    fontFamily: 'Montserrat-Medium'
  },
});

export default styles;