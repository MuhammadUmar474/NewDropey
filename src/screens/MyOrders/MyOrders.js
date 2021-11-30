import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView , Modal, Pressable} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from './Styles';
import GestureRecognizer from 'react-native-swipe-gestures';
import SelectableChips from 'react-native-chip/SelectableChips';
import ButtonComp from '../../components/Button/ButtonComp';

const MyOrders = ({navigation}) => {

  const [orderNumber, setorderNumber] = useState();
  const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
        
        <GestureRecognizer
            style={{flex: 1}}
            onSwipeDown={ () => setModalVisible(false) }
        >
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <View style={styles.swipeDown}/>
            <View style={{marginHorizontal: wp('5%')}}>
                <Text style={styles.filterTxt}>Filter</Text>
                <Text style={styles.filterLineTxt}>Filter By Spocket Status</Text>

                <View style={{ marginTop: hp('1%')}}>
                <SelectableChips 
                    initialChips={["Paid", "Unpaid","Processing","Shipped"]} 
                    onChangeChips={(chips) => console.log(chips)} 
                    alertRequired={false}
                    valueStyle={{color: '#2D3D52', fontSize:12, fontFamily: 'Cairo-Bold'}}
                    chipStyle={{borderColor: '#E3E3E3', width:wp('27%'), borderRadius: 5, borderWidth:2}}
                    valueStyleSelected={{color: '#2D3D52',fontSize:12}}
                    chipStyleSelected={{backgroundColor: '#FFFFFF', borderColor: '#7054D5', borderWidth:2}}
                />
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: hp('2%'), bottom: 15}}>
                    <TouchableOpacity style={styles.btnStyle} onPress={() => setModalVisible(false)}>
                        <Text style={styles.btnTxt}>Cancel</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnSearchStyle}>
                        <Text style={styles.btnSearchTxt}>Apply</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
            </View>
        </Modal>
        </GestureRecognizer>
            <View style={styles.topView}>
            <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                <Image
                    source={require('../../assets/images/arrowback.png')}
                    style={styles.backArrow}    
                />
            </TouchableOpacity>
                <Text style={styles.headerTxt}>My Orders</Text>
            </View>

            <ScrollView style={{marginHorizontal: wp('5%'), marginTop: hp('4%')}} showsVerticalScrollIndicator={false}>
                <View style={styles.viewCotainers}>
                    <View style={styles.searchBarView}>
                    <Image
                        source={require('../../assets/images/searchicon.png')}
                        style={{ height: 15, width: 15 }}
                    />
                    <TextInput
                        style={styles.searchProductTxt}
                        placeholder="Order Number"
                        onChangeText={setorderNumber}
                        value={orderNumber}
                    />
                    </View>

                    <TouchableOpacity style={styles.filterIconView} onPress={() => setModalVisible(true)}>
                    <Image
                        source={require('../../assets/images/filtericon.png')}
                        style={styles.filterIcon}
                    />
                    </TouchableOpacity>
                </View>
            

                <TouchableOpacity style={styles.importBtn}>
                    <Image
                    source={require('../../assets/images/materialsync.png')}
                    style={styles.importIcon}
                    />
                    <Text style={styles.importTxt} >Sync Orders</Text>
                </TouchableOpacity>

                <View style={{alignItems: 'center', justifyContent: 'center', marginTop: hp('15%')}}>
                    <Text style={styles.orderListTxt}>Your orders list is empty!</Text>
                    <Image source={require('../../assets/images/emptycart.png')} style={{height: hp('20%'),width: wp('44%'), marginTop: hp('3%')}}/>
                    <Text style={styles.instructionTxt}>You can manage and process your orders here. Head over to the search page to start adding products to your import list.</Text>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: hp('2%'), bottom: 15}}>
                    <TouchableOpacity style={styles.btnStyle}>
                        <Text style={styles.btnTxt}>How To</Text>
                        <Text style={styles.btnTxt}>Process Orders</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnSearchStyle}>
                        <Text style={styles.btnSearchTxt}>Search Products</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default MyOrders;
