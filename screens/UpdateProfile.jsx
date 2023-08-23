import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, formHeading, inputOptions, inputStyling, formStyles as styles, defaultImg} from '../styles/styles';
import { Button, TextInput } from 'react-native-paper';
import Header from '../components/Header';


const UpdateProfile = ({navigation}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [pinCode, setPinCode] = useState('');

   
    const disableBtn = !name || !email || !address || !city || !country || !pinCode; 
    // function to handle submit
    const submitHandler = () => {
      alert('Working');
       // will remove this in future
      
    }
    // function to handle loading
    const loading = false;

  return (
    
    <View style={defaultStyle}>
      <Header back={true}/>
      {/* Heading */}
      <View style={{marginBottom: 20, paddingTop: 70}}>
      <Text style={formHeading}>Edit Profile</Text>
      </View>
       <ScrollView showsVerticalScrollIndicator={false}
       style={{
        padding: 20,
        elevation: 10,
        borderRadius: 10,
        backgroundColor: colors.color3,
       }}
       >
       <View>
        <TouchableOpacity onPress={()=>navigation.navigate('camera')}>
            <Button textColor={colors.color2}>Change Photo</Button>
        </TouchableOpacity>
      <TextInput 
       {...inputOptions}
       placeholder='Name'
       value={name}
       onChangeText={setName}
      />
      <TextInput 
       {...inputOptions}
       placeholder='Email'
       value={email}
       keyboardType='email-address'
       onChangeText={setEmail}
      />
      <TextInput 
       {...inputOptions}
       placeholder='Address'
       value={address}
       onChangeText={setAddress}
      />
      <TextInput 
       {...inputOptions}
       placeholder='City'
       value={city}
       onChangeText={setCity}
      />
      <TextInput 
       {...inputOptions}
       placeholder='Country'
       value={country}
       onChangeText={setCountry}
      />
      <TextInput 
       {...inputOptions}
       placeholder='Pin Code'
       value={pinCode}
       onChangeText={setPinCode}
      />
      
      <Button 
      loading={loading}
      textColor={colors.color2} 
      disabled={disableBtn} 
      style={styles.btn}
      onPress={submitHandler}
      >Update</Button>
      
     </View>
       </ScrollView>
    </View>
    
  );
};



export default UpdateProfile