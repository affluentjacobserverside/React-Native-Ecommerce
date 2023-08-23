import { Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import {defaultStyle, colors} from '../styles/styles';
import Header from '../components/Header';
import { Avatar, Button } from 'react-native-paper';
import SearchModal from '../components/SearchModal';
import ProductCard from '../components/ProductCard';
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/Footer';
import Heading from '../components/Heading';

// categories array
const categories = [
  {category: 'Nice1', _id: 'adjdnck'},
  {category: 'Nice2', _id: 'afjhjj'},
  {category: 'Nice3', _id: 'afjhadd'},
  {category: 'Nice4', _id: 'afjhacjsdd'},
  {category: 'Nice5', _id: 'afjhasudd'}
];
// Products Array
export const products = [
{
  price: 2322,
  category: 'affluentcategory',
  stock: 25,
  name: 'Sample',
  _id: 'adjfkfjdd',
  images: [
    {
    url: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
  },
],
},
{
  price: 1000,
  category: 'jacobcategory',
  stock: 25,
  name: 'AI Tool',
  _id: 'adjfkfjaaa',
  images: [
    {
    url: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MX472?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1686764364078"
  },
],
},
{
  price: 40000,
  category: 'michealcategory',
  stock: 25,
  name: 'Hack',
  _id: 'adjfkfjrr',
  images: [
    {
    url: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
  },
],
},

];

const Home = ()=> {
const [category, setCategory] = useState("");
const [activeSearch, setActiveSearch] = useState(false);
const [searchQuery, setSearchQuery] = useState();
const navigate = useNavigation();

const categoryButtonHandler = (id)=> {
  setCategory(id)
}
// addToCartHandler function
const addToCartHandler = (id)=>{
console.log('Add to Cart');
}
    return (
      <>
      {
        activeSearch && (
          <SearchModal 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
          setActiveSearch={setActiveSearch}
          products={products}
          />
        )
      }
      <View style={defaultStyle}>
        <Header/>
        {/* Heading  Row */}
        <View style={{
          paddingTop: 70,
          flexDirection: "row",
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
        
          {/* Heading */}
         <Heading text1='Our' text2='Product'/>
        {/* Search Bar */}
        <View>
          <TouchableOpacity onPress={()=>setActiveSearch((prev) => !prev)}>
            <Avatar.Icon
             size={50}
             icon={'magnify'} 
             color={'gray'}
            style={{
              backgroundColor: colors.color2, 
              elevation: 12
            }}
            />
          </TouchableOpacity>
          </View>
        </View>
        
        {/* Categories */}
        <View style={{
          flexDirection: "row",
          height: 80,

        }}>
        <ScrollView horizontal contentContainerStyle={{
          alignItems: "center",
        }} showsHorizontalScrollIndicator={false}>
        {
          categories.map((item, index)=>(
            <Button
            key={item._id}
            style={{
            backgroundColor:category===item._id ? colors.color1 : colors.color5,
            borderRadius: 100,
            margin: 5
            }}
            onPress={()=>categoryButtonHandler(item._id)}
            >
               <Text style={{
                fontSize: 12,
                color: category === item._id?colors.color2: 'gray',
              }}>{item.category}</Text>
            </Button>
          ))
         }
         
        </ScrollView>
        </View>
        {/* Products */}
        <View style={{flex: 1}}>
         <ScrollView 
         horizontal
         showsHorizontalScrollIndicator={false}
         >
          {
            products.map((item, index)=>(
             <ProductCard
             stock={item.stock}
             name={item.name}
             price={item.price}
             image={item.images[0]?.url}
             addToCartHandler={addToCartHandler}
              id={item._id}
              key={item._id}
              i={index}
              navigate={navigate}
             />
            ))
          }
         </ScrollView>
        </View>
        </View>
        <Footer activeRoute={'home'}/>
        </>
    );
  
    }
export default Home;