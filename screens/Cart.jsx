import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { colors, defaultStyle } from '../styles/styles'
import Header from '../components/Header'
import Heading from '../components/Heading';
import { Button } from 'react-native-paper';
import CartItem from '../components/CartItem';
import { useNavigation } from '@react-navigation/native';

// cart items
export const cartItems = [
{
name: 'Macbook',
image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
product: 'asddada',
stock: 3,
price: 4900,
quantity: 2,
},
{
    name: 'Samsung Camera',
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    product: 'asddSSS',
    stock: 5,
    price: 5600,
    quantity: 2,
    },
{
    name: 'HeadPhone',
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    product: 'asdadss',
    stock: 5,
    price: 4500,
    quantity: 2,
},
{
    name: 'HeadPhone',
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    product: 'asdaddsddss',
    stock: 5,
    price: 4500,
    quantity: 2,
},
{
    name: 'HeadPhone',
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    product: 'asdadsthhhs',
    stock: 5,
    price: 4500,
    quantity: 2,
},
{
    name: 'Television',
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    product: 'asdadsffgs',
    stock: 5,
    price: 4500,
    quantity: 2,
},
];

const Cart = () => {
    // navigate component
    const navigate = useNavigation();
    // function for decrementHandler
    const incrementHandler = (id, qty, stock) =>{
     console.log('increment', id, qty, stock);
    }
    // function for incrementHandler
    const decrementHandler = (id, qty) =>{

    }
  return (
    <View 
    style={{
        ...defaultStyle,
        padding:0,
    }}
    >
    {/* Header */}
     <Header back={true} emptyCart={true}/>
     {/* Heading */}
     <Heading text1='Shopping' text2='Cart' containerStyle={{paddingTop: 70, marginLeft: 35}}/>
     <View style={{
        paddingVertical: 20,
        flex: 1,
     }}>
        <ScrollView showsVerticalScrollIndicator={false}>
            {
                cartItems.map((i, index)=>(
                    <CartItem
                    key={i.product}
                    id={i.product}
                    name={i.name}
                    amount={i.price}
                    imgSrc={i.image}
                    stock={i.stock}
                    index={index}
                    qty={i.quantity}
                    incrementHandler={incrementHandler}
                    decrementHandler={decrementHandler}
                    navigate={navigate}
                    />
                ))
            }
        </ScrollView>
     </View>
     <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 35,
     }}>
      <Text>5 Items</Text>
      <Text>$ 5</Text>
     </View>
    <TouchableOpacity onPress={cartItems.length > 0 ? ()=>navigate.navigate('confirmorder'): null}>
     <Button
     style={{
        backgroundColor: colors.color3,
        borderRadius: 100,
        padding: 5,
        margin: 30,

     }}
     icon={'cart'}
     textColor={colors.color2}
    >Checkout</Button>
    </TouchableOpacity>
    </View>
  )
};


export default Cart