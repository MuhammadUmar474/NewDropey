import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  buttonLogin: {
    width: wp('90%'),
    height: hp('7%'),
    backgroundColor: '#7054D5',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('3%'),
    borderColor: 'transparent',
    borderWidth: 1
},
logInTxt: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#fff', 
    fontSize: 12,
},

});

export default styles;