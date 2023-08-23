import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, formHeading, inputOptions, inputStyling, formStyles as styles } from '../styles/styles';
import { Button, TextInput } from 'react-native-paper';
import Footer from '../components/Footer';



const Login = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  // style options for input style
   
    // function to handle submit
    const submitHandler = () => {
      alert('Working')
     
    }
    // function to handle loading
    const loading = false;

  return (
    <>
    <View style={{...defaultStyle, backgroundColor: colors.color2}}>
      {/* Heading */}
      <View style={{marginBottom: 20}}>
      <Text style={formHeading}>Login</Text>
      </View>
     <View style={styles.container}>
      <TextInput 
       {...inputOptions}
       placeholder='Email'
       value={email}
       keyboardType='email-address'
       onChangeText={setEmail}
      />
      <TextInput 
       {...inputOptions}
       placeholder='Password'
       value={password}
       secureTextEntry={true}
       onChangeText={setPassword}
      />
      <TouchableOpacity
      activeOpacity={0.8}
      onPress={()=> navigation.navigate('forgetpassword')}
      >
        <Text style={styles.forget}>Forget Password</Text>
      </TouchableOpacity>
      <Button 
      loading={loading}
      textColor={colors.color2} 
      disabled={email === '' || password === ''} 
      style={styles.btn}
      onPress={submitHandler}
      >Login</Button>
      <Text style={styles.or}>OR</Text>
      <TouchableOpacity
       activeOpacity={0.8}
       onPress={()=>navigation.navigate('signup')}
      >
        <Text style={styles.link}>Sign Up</Text>
      </TouchableOpacity>
     </View>
    </View>
    <Footer activeRoute='profile'/>
    </>
  );
};




export default Login