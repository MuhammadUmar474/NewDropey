import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#F5F5F5',
    marginHorizontal: wp('5%'),
  },
  boxView: {
    marginTop: hp('1.5%'),
    height: hp('35%'), 
    width: wp('90%'),
    backgroundColor: '#fff', 
    borderRadius: 5, 
    paddingHorizontal: 15,
    elevation: 5
  },
  bottomLine: { 
    bottom: 30,
    borderBottomColor: '#756D86', 
    borderBottomWidth: 0.19, 
    width: wp('80%'),
    alignSelf: 'center'
    },
});

export default styles;