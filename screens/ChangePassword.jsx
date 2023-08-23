import { View, Text} from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, formHeading, inputOptions, inputStyling, formStyles as styles } from '../styles/styles';
import { Button, TextInput } from 'react-native-paper';
import Header from '../components/Header';



const ChangePassword = ({navigation}) => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
   
    // function to handle submit
    const submitHandler = () => {
      alert('Working')
     
    }
    // function to handle loading
    const loading = false;

  return (
    
    <View style={defaultStyle}>
      <Header back={true}/>
      {/* Heading */}
      <View style={{marginBottom: 20, paddingTop: 70}}>
      <Text style={formHeading}>Change Password</Text>
      </View>
     <View style={styles.container}>
      <TextInput 
       {...inputOptions}
       placeholder='Old Password'
       value={oldPassword}
       secureTextEntry={true}
       onChangeText={setOldPassword}
      />
      <TextInput 
       {...inputOptions}
       placeholder='New Password'
       value={newPassword}
       secureTextEntry={true}
       onChangeText={setNewPassword}
      />
      <Button 
      loading={loading}
      textColor={colors.color2} 
      disabled={oldPassword === '' || newPassword === ''} 
      style={styles.btn}
      onPress={submitHandler}
      >Update Password</Button>
     </View>
    </View>

  );
};

export default ChangePassword