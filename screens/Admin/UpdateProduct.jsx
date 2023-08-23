import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, formHeading, inputOptions, inputStyling } from '../../styles/styles'
import Header from '../../components/Header'
import Loader from '../../components/Loader'
import { Button, TextInput } from 'react-native-paper'
import SelectComponent from '../../components/SelectComponent'

const UpdateProduct = ({navigation, route}) => {
    const loading = false;
    const loadingOther = false;
    const images = [
        {
        url: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        _id: 'asasass',
        },
        {
            url: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            _id: 'asasassddd',
        },
        {
            url: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            _id: 'asasasshyt',
        },

    ];

    const [id] = useState(route.params.id);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [category, setCategory] = useState('laptop');
    const [categoryID, setCategoryID] = useState('');
    const [categories, setCategories] = useState([
        {_id: 'asasfe', category: 'Laptop'},
        {_id: 'awaeas', category: 'Machine'},
        {_id: 'djdjfd', category: 'Wears'},
    ]);
    const [visible, setVisible] = useState(false);
    
    // function for submit handler
    const submitHandler = () => {
     console.log(name, description, price, stock, categoryID);
     
    }
  return (
    <>
    <View
    style={{
        ...defaultStyle,
        backgroundColor: colors.color5,
    }}
    >

    <Header back={true}/>
    {/* heading */}
    <View style={{marginBottom: 20, paddingTop: 70}}>
    <Text style={formHeading}>Update Product</Text>
    </View>
     {
        loading ? <Loader/> : (
        <ScrollView style={{
            padding: 20,
            elevation: 10,
            borderRadius: 10,
            backgroundColor: colors.color3,
        }}>
        <View style={{
            justifyContent: 'center',
            height: 650,
        }}>
        <Button onPress={()=>navigation.navigate('productimages',{id, images:images,})} textColor={colors.color1}>Manage Images</Button>
        <TextInput
         {...inputOptions}
         placeholder='Name'
         value={name}
         onChangeText={setName}
        />
         <TextInput
         {...inputOptions}
         placeholder='Description'
         value={description}
         onChangeText={setDescription}
        />
         <TextInput
         {...inputOptions}
         placeholder='Price'
         keyboardType='number-pad'
         value={price}
         onChangeText={setPrice}
        />
         <TextInput
         {...inputOptions}
         placeholder='Stock'
         keyboardType='number-pad'
         value={stock}
         onChangeText={setStock}
        />
        <Text style={{
            ...inputStyling,
            textAlign: 'center',
            textAlignVertical: 'center',
            borderRadius: 3
        }}
        onPress={()=>setVisible(true)}
        >{category}</Text>
        <Button
         textColor={colors.color2}
         style={{
            backgroundColor: colors.color1,
            margin: 20,
            padding: 6,
         }}
         onPress={submitHandler}
         loading={loadingOther}
         disabled={loadingOther}
        >Update</Button>
        </View>
        </ScrollView>
        )
     }
    </View>
    <SelectComponent
    categories={categories}
    setCategoryID={setCategoryID}
    setCategory={setCategory}
     visible={visible}
     setVisible={setVisible}

    />
    </>
  )
}

export default UpdateProduct