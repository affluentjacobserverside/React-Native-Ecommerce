import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, formHeading, inputStyling } from '../../styles/styles'
import Header from '../../components/Header'
import { Avatar, Button, TextInput } from 'react-native-paper';

const categories = [
    {
        name: 'HP Laptop',
        _id: 'asdfgg'
    },
    {
        name: 'Samsung Laptop',
        _id: 'asdfggaa'
    },
    {
        name: 'iphone 14',
        _id: 'adfress'
    },
];

const Categories = () => {
    const loading = false;
    const [category, setCategory] = useState('');
    // function deleteHandler
    const deleteHandler = (id) => {
     console.log('deleting category');
    }
    // function submitHandler
    const submitHandler = () => {

    }

    
  return (
    <View style={{...defaultStyle, backgroundColor:colors.color5}}>
    <Header back={true}/>
    {/* heading */}
    <View style={{marginBottom: 20, paddingTop: 70}}>
    <Text style={formHeading}>Categories</Text>
    </View>
    <ScrollView style={{
        marginBottom: 20,

    }}>
    <View style={{
        backgroundColor: colors.color2,
        padding: 20,
        minHeight: 400,
    }}>
     {
        categories.map((i)=>(
         <CategoryCard name={i.name} id={i._id} key={i._id} deleteHandler={deleteHandler}/>
        ))
     }
    </View>
    </ScrollView>
    <View style={styles.container}>
    <TextInput
     {...inputStyling}
     placeholder='Category'
     value={category}
     onChangeText={setCategory}
    />
    <Button textColor={colors.color2}
    style={{
        backgroundColor: colors.color1,
        margin: 20,
        padding: 6,
    }}
    loading={loading}
    disabled={!category}
    onPress={submitHandler}
    >Add Category</Button>
    </View>
    </View>
  )
}
const CategoryCard = ({name, id, deleteHandler}) => (
    <View style={styles.cardContainer}>
    <Text style={styles.cardText}>{name}</Text>
    <TouchableOpacity
    onPress={()=>deleteHandler(id)}
    >
    <Avatar.Icon icon={'delete'} size={30} style={{
        backgroundColor: colors.color1,

    }}/>
    </TouchableOpacity>
    </View>
)
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.color2,
    elevation: 5,
    margin: 10,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
  },
  container: {
    padding: 20,
    elevation: 10,
    borderRadius: 10,
    backgroundColor: colors.color3,

  },
  cardText: {
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
  }
});

export default Categories