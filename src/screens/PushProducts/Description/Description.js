import React from 'react';
import { View, Image, TextInput, Touchable, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ButtonComp from '../../../components/Button/ButtonComp';
import styles from './Styles'
const Description = () => {
    return (
        <View style={styles.container}>
            <View style={styles.boxView}>
                <View style={{flex: 1}}>
                    <TextInput
                    placeholder = 'This Text is Bold'
                    style={{color:'#ABB3BB', fontSize: 12}}
                    multiline={true}
                    />
                </View>
                <View style={styles.bottomLine}/>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', bottom: 15}}>

                        <TouchableOpacity>
                            <Image 
                            source={require('../../../assets/images/boldIcon.png')}
                            style={{ height: 20, width: 20 }}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image 
                            source={require('../../../assets/images/italicIcon.png')}
                            style={{ height: 20, width: 20 }}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image 
                            source={require('../../../assets/images/underLineIcon.png')}
                            style={{ height: 20, width: 20 }}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image 
                            source={require('../../../assets/images/leftAlignIcon.png')}
                            style={{ height: 20, width: 20 }}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image 
                            source={require('../../../assets/images/alignCenterIcon.png')}
                            style={{ height: 20, width: 20 }}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image 
                            source={require('../../../assets/images/rightAlignIcon.png')}
                            style={{ height: 20, width: 20 }}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image 
                            source={require('../../../assets/images/topAlignIcon.png')}
                            style={{ height: 20, width: 20 }}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image 
                            source={require('../../../assets/images/topCenterAlignIcon.png')}
                            style={{ height: 20, width: 20 }}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image 
                            source={require('../../../assets/images/fullCenterIcon.png')}
                            style={{ height: 20, width: 20 }}
                            />
                        </TouchableOpacity>
                    </View>
            </View>
        </View>
    )
}

export default Description;
