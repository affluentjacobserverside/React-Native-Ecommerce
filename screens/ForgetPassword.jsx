import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, formHeading, inputOptions, inputStyling, formStyles as styles} from '../styles/styles';
import { Button, TextInput } from 'react-native-paper';
import Footer from '../components/Footer';



const ForgetPassword = ({navigation}) => {
    const [email, setEmail] = useState("");
    // function to handle submit
    const submitHandler = () => {
      alert('Working');
       // will remove this in future
       navigation.navigate('verify');
    }
    // function to handle loading
    const loading = false;

  return (
    <>
    <View style={{...defaultStyle, backgroundColor: colors.color2}}>
      {/* Heading */}
      <View style={{marginBottom: 20}}>
      <Text style={formHeading}>Forget Password</Text>
      </View>
     <View style={styles.container}>
      <TextInput 
       {...inputOptions}
       placeholder='Email'
       value={email}
       keyboardType='email-address'
       onChangeText={setEmail}
      />
      
      <Button 
      loading={loading}
      textColor={colors.color2} 
      disabled={email === ''} 
      style={styles.btn}
      onPress={submitHandler}
      >Send OTP</Button>
      <Text style={styles.or}>OR</Text>
      <TouchableOpacity
       activeOpacity={0.8}
       onPress={()=>navigation.navigate('login')}
      >
        <Text style={styles.link}>Login</Text>
      </TouchableOpacity>
     </View>
    </View>
    <Footer activeRoute='profile'/>
    </>
  );
};



export default ForgetPassword