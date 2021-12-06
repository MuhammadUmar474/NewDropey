import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF', 
    width: wp('90%'), 
    height: hp('13%'),
    flexDirection: 'row',
    borderRadius: 5,
    elevation: 5,
    shadowColor: 'transparent',
    justifyContent: 'space-between',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  cardContainerSelected: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: '#FFFFFF', 
    width: wp('90%'), 
    height: hp('13%'),
    flexDirection: 'row',
    elevation: 5,
    shadowColor: 'transparent',
    justifyContent: 'space-between',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#7054D5',
  },
  dataContainer: { 
    marginHorizontal: wp('4%'),
    marginVertical: hp('1%'), 
    justifyContent: 'space-between',
  },
  headingsTxt: {
    color: '#756D86',
    fontSize: 10,
    fontFamily: 'Montserrat-Medium'
  },
  dataTxt: {
    marginTop: hp('0.5%'),
    color: '#756D86',
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold'
  },
  viewMoreTxt: {
    fontSize: 9, 
    color: '#7054D5', 
    fontFamily: 'Montserrat-SemiBold',
  },
});

export default styles;