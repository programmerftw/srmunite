import { View, Text, StyleSheet, TouchableOpacity, Dimensions, } from 'react-native'
import React, { useState } from 'react'
import OtpGradient from '../Components/OtpGradient'
import Colors from '../Utils/Colors'
import { OtpInput } from "react-native-otp-entry";
import CustomFonts from '../Components/CustomFonts';

const { width } = Dimensions.get('window');

export default function OTP({ email }) {
    const [otp, setOtp] = useState('');

    const handleOtpChange = (otp) => {
        setOtp(otp);
    };

    const handleSubmit = (otp) => {
        // Handle form submission here
        console.log('otp:', otp);
    };

    // Loading Fonts
    const fontloaded = CustomFonts()

    if (!fontloaded) {
        return null;
    }
    return (
        <View >
            <View>
                <OtpGradient/>
            </View>
            <View style={styles.box}>
                <Text style={[styles.text, styles.t1]}>We have sent a verification code to</Text>
                <Text style={styles.text}>{email}</Text>
                <OtpInput
                    numberOfDigits={4}
                    focusColor={Colors.BLUE}
                    focusStickBlinkingDuration={500}
                    onTextChange={handleOtpChange}
                    onFilled={handleSubmit}
                    theme={{
                        containerStyle: styles.container,
                        pinCodeContainerStyle: styles.pinCodeContainer,
                        pinCodeTextStyle: styles.pinCodeText,
                    }} />
                <View style={styles.footer}>
                    <Text style={styles.text}>Didn't get the OTP ? </Text>
                    <TouchableOpacity >
                        <Text style={{ color: Colors.BLUE ,fontFamily:"Poppins-Medium"}}>Resend Again</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        marginVertical: 45,
        marginHorizontal: 40
    },
    pinCodeText: {
        fontSize: 22,
    },
    pinCodeContainer: {
        height: 52,
        width: 52
    },
    box: {
        alignItems: 'center'
    },
    text: {
        color: Colors.DGREY,
        fontFamily:"Poppins-Regular"
    },
    t1: {
        marginTop: width * 0.15,
    },
    footer: {
        flexDirection: 'row',
    }
});
