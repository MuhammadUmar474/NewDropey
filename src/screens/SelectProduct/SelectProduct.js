import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { onChange } from 'react-native-reanimated';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import styles from './Styles';
const SelectProduct = ({ navigation }) => {

    const width = wp('100%');
    const height = hp('40%');

    const [active, setActive] = useState(0);
    const images = [
        'https://images.pexels.com/photos/4346353/pexels-photo-4346353.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/6077783/pexels-photo-6077783.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/5117800/pexels-photo-5117800.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        'https://images.pexels.com/photos/4131522/pexels-photo-4131522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/6102477/pexels-photo-6102477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        // require('../../assets/images/prodcut1.png'),
    ];

    const onChange = ({ layoutMeasurement, contentOffset, contentSize}) => {
        const paddingToBottom = 20;
        const slide = layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;
        if (slide !== active) {
          setActive(slide);
        }
      };
      const change = ({event}) => {
        const slide = Math.ceil(
          event.nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
        );
        if (slide !== active) {
          setActive(slide);
        }
      };
    //   const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    //     const paddingToBottom = 20;
    //     const slide = layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;
    //     if (slide !== active) {
    //         setActive(slide);
    //       }
    //     // return slide
    //   };
    return (
        <SafeAreaView style={styles.container}>
            <View style ={styles.wrap}>
                <ScrollView
                onScroll={({nativeEvent}) => {
                    onChange(nativeEvent)
                  }}
                pagingEnabled
                horizontal
                scrollEventThrottle={24}
                showsHorizontalScrollIndicator={false}
                style={styles.wrap}>
                    {
                        images.map((e, index) =>
                        <Image 
                        key = {e}
                        resizeMode='stretch'
                        style={styles.wrap}
                        source = {{uri: e}}
                        /> 
                        )
                    }
                </ScrollView>
                <View style={styles.wrapDot}>
                    {images.map((i, k) => (
                    <Text key={k} style={k === active ? styles.activeDot : styles.dot}>
                        •
                    </Text>
                    ))}
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SelectProduct;
