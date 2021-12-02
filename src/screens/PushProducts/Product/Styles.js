import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  productNameTxt: {
    flex: 1,
    color: '#ABB3BB', 
    fontSize: 12,
    fontFamily: 'Montserrat-Medium'
  },
  productNameView: {
    marginTop: hp('1.5%'),
    height: hp('7%'), 
    width: wp('90%'),
    backgroundColor: '#fff', 
    borderRadius: 5, 
    paddingHorizontal: 15,
    borderColor: '#E1E4E8',
    borderWidth: 1
  },
  tagsView: {
    marginTop: hp('1.5%'),
    height: hp('15%'), 
    width: wp('90%'),
    backgroundColor: '#fff', 
    borderRadius: 5,
    borderColor: '#E1E4E8',
    borderWidth: 1,
  },
});

export default styles;