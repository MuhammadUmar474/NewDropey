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
    marginTop: hp('2%'),
  },
});

export default styles;