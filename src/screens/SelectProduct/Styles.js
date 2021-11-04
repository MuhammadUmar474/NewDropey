import { StyleSheet, Dimensions } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: 'white'
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.35,
  },
  wrapDot: {
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
  },
  dot: {
    color: 'white',
    fontSize: hp('5%'),
  },
  activeDot: {
    color: '#7E4FD0',
    fontSize: hp('5%'),
  },
});

export default styles;