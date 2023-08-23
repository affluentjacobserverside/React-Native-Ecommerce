import { View, Text, Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { colors, defaultStyle } from '../styles/styles';
import Header from '../components/Header';
import Carousel from 'react-native-snap-carousel';
import { Avatar, Button } from 'react-native-paper';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH;

export const iconOptions = {
size: 20,
style: {
  borderRadius: 5,
  backgroundColor: colors.color5,
  height: 25,
  width: 25
}
}

const images = [
{
 id: 'sdddddscrfr',
 url: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
},
{
 id: 'sasadscrfr',
 url: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MX472?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1686764364078'
},
{
 id: 'sdddddsc',
 url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
},


];

const ProductDetails = ({route: {params}}) => {
  const isCarousel = useRef(null);
  const [quantity, setQuantity] = useState(1);
  const name = 'Samsung Camera';
  const price = 30000;
  const description = 'Clear, concise, and executable requirements help development teams build high quality products that do what they are supposed to do. The best way to create, organize, and share requirements is a Software Requirements Specification (SRS). But what is an SRS, and how do you write one?';
  const stock = 6;
  // function for incrementing 
  const incrementQty = () => {
    if(stock <= quantity) return 
    setQuantity((prev) => prev + 1);
  }
  // function for decrementing
  const decrementQty = () => {
    if(quantity <= 1) return
    setQuantity((prev)=> prev - 1);
  }
  // add to cart function
  const addToCartHandler = ()=> {
    if(stock === 0) return Toast.show({
     type: 'error',
     text1: 'Product Out of Stock',
    });
    Toast.show({
    type: 'success',
    text1: 'Product added to Cart'
    });
  }

  return (
    <View
    style={{
    ...defaultStyle,
    padding: 0,
    backgroundColor: colors.color1,

    }}
    >
      <Header back={true}/>
       {/* Carousel */}
    <Carousel 
     layout='stack'
     sliderWidth={SLIDER_WIDTH}
     itemWidth={ITEM_WIDTH}
     ref={isCarousel}
     data={images}
     renderItem={CarouselCardItem}
     />
     <View 
      style={{
        backgroundColor: colors.color2,
        padding: 35,
        flex: 1,
        marginTop: -380,
        borderTopLeftRadius: 55,
        borderTopRightRadius: 55

      }}
     >
     <Text
     numberOfLines={2}
      style={{
        fontSize: 25
      }}
     >{name}</Text>
      <Text
      style={{
        fontSize: 18,
        fontWeight: '900'

      }}
     >{price}</Text>
      <Text
      numberOfLines={8}
      style={{
        letterSpacing: 1,
        lineHeight: 20,
        marginVertical: 15,
      }}
     >{description}</Text>
     <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 5
     }}>
     <Text
     style={{
      color: colors.color3,
      fontWeight: '100'
     }}
     >Quantity</Text>
     <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
     >
      <TouchableOpacity onPress={decrementQty}>
        <Avatar.Icon icon={'minus'}
        {...iconOptions}
        
        />
      </TouchableOpacity>
      <Text
      style={style.quantityStyle}
      >{quantity}</Text>
      <TouchableOpacity onPress={incrementQty}>
        <Avatar.Icon icon={'plus'}
        {...iconOptions}
        />
      </TouchableOpacity>
     </View>
     </View>
     <TouchableOpacity activeOpacity={0.9} onPress={addToCartHandler}>
      <Button style={style.btn}
      textColor={colors.color2}
      icon={'cart'}
      >Add To Cart</Button>
     </TouchableOpacity>
     </View>
    </View>
  )
}
const CarouselCardItem = ({item, index})=> (
<View style={style.container} key={index}>
    <Image source={{uri: item.url}}
     style={style.image}
    />
</View>
);
const style = StyleSheet.create({
    container: {
        backgroundColor: colors.color1,
        width: ITEM_WIDTH,
        paddingVertical: 40,
        height: 380
    },
    image: {
        width: ITEM_WIDTH,
        resizeMode: 'contain',
        height: 250,
    },
    quantityStyle: {
      backgroundColor: colors.color4,
      height: 25,
      width: 25,
      textAlignVertical: 'center',
      textAlign: 'center',
      borderWidth: 1,
      borderRadius: 5,
      backgroundColor: colors.color5,
    },
    btn: {
      backgroundColor: colors.color3,
      borderRadius: 100,
      padding: 5,
      marginVertical: 35
    }
})
export default ProductDetails