import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView , Dimensions} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Description from './Description/Description';
import Variants from './Variants/Variants';
import Images from './Images/Images';
import styles from './Styles';
import Product from './Product/Product';

const PushProducts = ({navigation}) => {

    const Tab = createMaterialTopTabNavigator();
    const [ApiCheck, setApiCheck] = useState(true);
    const [orderNumber, setorderNumber] = useState();

    return (
        <View style={styles.container}>
            {ApiCheck ? <View style={styles.container}>
            <View style={styles.topViewApi}>
                <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../../assets/images/arrowback.png')}
                        style={styles.backArrow}    
                    />
                </TouchableOpacity>
                <Text style={styles.headerTxt}>Push Products</Text>
            </View>
            <ScrollView style={{ marginTop: hp('4%')}} showsVerticalScrollIndicator={false}>
            <View style={styles.searchBarView}>
                <Image
                    source={require('../../assets/images/searchicon.png')}
                    style={{ height: 15, width: 15 }}
                />
                <TextInput
                    style={styles.searchProductTxt}
                    placeholder="Search Product"
                    onChangeText={setorderNumber}
                    value={orderNumber}
                />
            </View>
            <View style={{flexDirection: 'row', marginHorizontal: wp('5%'), justifyContent: 'space-between'}}>
                <TouchableOpacity style={styles.removeBtn}>
                    <Text style={styles.removeTxt} >Remove Current Page</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.pushBtn}>
                    <Text style={styles.pushTxt} >Push Current Page</Text>
                </TouchableOpacity>
            </View>

            <View style={{marginTop: hp('1%'), height: hp('122%')}}>
                <Tab.Navigator
                    tabBarOptions={{
                    activeTintColor: "#7054D5",
                    indicatorStyle:{ backgroundColor: "#7054D5"},
                    style:{backgroundColor: 'transparent'}
                    }}
                    screenOptions={{
                        tabBarLabelStyle: {fontSize: 9, fontFamily: 'Montserrat-SemiBold'},
                    }}
                    
                    >
                    <Tab.Screen
                        name="Product" 
                        component={Product}
                    />
                    <Tab.Screen 
                        name="Description" 
                        component={Description} 
                    />
                    <Tab.Screen 
                        name="Variants" 
                        component={Variants} 
                    />
                    <Tab.Screen 
                        name="Images" 
                        component={Images} 
                    />
                </Tab.Navigator>
            </View>
            
            </ScrollView>
            </View> 
            :
            <View style={styles.container}>
                <View style={styles.topView}>
                <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../../assets/images/arrowback.png')}
                        style={styles.backArrow}    
                    />
                </TouchableOpacity>
                    <Text style={styles.headerTxt}>Push Products</Text>
                </View>

                <ScrollView style={{marginHorizontal: wp('5%'), marginTop: hp('4%')}} showsVerticalScrollIndicator={false}>
                    <View style={{alignItems: 'center', justifyContent: 'center', marginTop: hp('25%')}}>
                        <Text style={styles.orderListTxt}>Your import list is empty!</Text>
                        <Image source={require('../../assets/images/emptycart.png')} style={{height: hp('20%'),width: wp('44%'), marginTop: hp('3%')}}/>
                        <Text style={styles.instructionTxt}>Head over to the find products page to start adding products to your import list.</Text>
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: hp('2%'), bottom: 25}}>
                        <TouchableOpacity style={styles.btnStyle}>
                            <Text style={styles.btnTxt}>How To</Text>
                            <Text style={styles.btnTxt}>Customize Products</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnSearchStyle}>
                            <Text style={styles.btnSearchTxt}>Search Products</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>}
            
        </View>
    )
}

export default PushProducts;
