import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, formHeading, inputOptions, inputStyling, formStyles as styles} from '../styles/styles';
import { Button, TextInput } from 'react-native-paper';
import Footer from '../components/Footer';

const Verify = ({navigation}) => {
    const [otp, setOtp] = useState("");
    const [password, setPassword] = useState("");


    // function to handle submit
    const submitHandler = () => {
      alert('Working');
       // will remove this in future
       navigation.navigate('login');
    }
    // function to handle loading
    const loading = false;

  return (
    <>
    <View style={{...defaultStyle, backgroundColor: colors.color2}}>
      {/* Heading */}
      <View style={{marginBottom: 20}}>
      <Text style={formHeading}>Reset Password</Text>
      </View>
     <View style={styles.container}>
      <TextInput 
       {...inputOptions}
       placeholder='OTP'
       value={otp}
       keyboardType='number-pad'
       onChangeText={setOtp}
      />
       <TextInput 
       {...inputOptions}
       placeholder='New Password'
       value={password}
       secureTextEntry={true}
       onChangeText={setPassword}
      />
      
      <Button 
      loading={loading}
      textColor={colors.color2} 
      disabled={otp === '' || password === ''} 
      style={styles.btn}
      onPress={submitHandler}
      >Reset Password</Button>
      <Text style={styles.or}>OR</Text>
      <TouchableOpacity
       activeOpacity={0.8}
       onPress={()=>navigation.navigate('forgetpassword')}
      >
        <Text style={styles.link}>Resend OTP</Text>
      </TouchableOpacity>
     </View>
    </View>
    <Footer activeRoute='profile'/>
    </>
  );
};

export default Verify