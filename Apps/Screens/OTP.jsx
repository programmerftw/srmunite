import { View, Text, StyleSheet,TouchableOpacity, Dimensions, } from 'react-native'
import React, { useState} from 'react'
import Ellipse1 from '../Components/Ellipse1'
import Colors from '../Utils/Colors'
import { OtpInput } from "react-native-otp-entry";

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

    return (
        <View >
            <View>
                <Ellipse1 text={"OTP VERIFICATION"} />
            </View>
            <View style={styles.box}>
                <Text style={[styles.text, styles.t1]}>We have sent a verification code to</Text>
                <Text style={styles.text}>11020210069@stu.srmuniversity.ac.in</Text>
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
                        <Text style={{color:Colors.BLUE}}>Resend Again</Text>
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
        color: Colors.DGREY
    },
    t1: {
        marginTop: width * 0.15,
    },
    footer: {
        flexDirection: 'row',
    }
});
