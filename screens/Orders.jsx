import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { colors, defaultStyle, formHeading } from '../styles/styles'
import Header from '../components/Header'
import Loader from '../components/Loader'
import { Headline } from 'react-native-paper'
import OrderItem from '../components/OrderItem'

export const orders = [
    {
        _id: 'asdfgg',
        shippingInfo: {
            address: '200a Affluent Lane',
            city: 'Vancouva',
            country: 'Canada',
            pinCode: 202022
        },
        createdAt: '12-2-2022T2345',
        orderStatus: 'Processing',
        paymentMethod: 'ONLINE',
        totalAmount: 2000
    },
    {
        _id: 'werwer',
        shippingInfo: {
            address: 'Micheal Avenue',
            city: 'London',
            country: 'UK',
            pinCode: 202022
        },
        createdAt: '12-2-2022T2345',
        orderStatus: 'Processing',
        paymentMethod: 'COD',
        totalAmount: 2000
    },
    {
        _id: 'asdfggss',
        shippingInfo: {
            address: '200a Affluent Lane',
            city: 'Vancouva',
            country: 'Canada',
            pinCode: 202022
        },
        createdAt: '12-2-2022T2345',
        orderStatus: 'Processing',
        paymentMethod: 'ONLINE',
        totalAmount: 8000
    },
    {
        _id: 'qwerty',
        shippingInfo: {
            address: 'James Street',
            city: 'New York',
            country: 'USA',
            pinCode: 332211
        },
        createdAt: '12-2-2022T2345',
        orderStatus: 'Processing',
        paymentMethod: 'COD',
        totalAmount: 3000
    }
];

const Orders = () => {
    const loading = false;
  return (
    <View style={{
     ...defaultStyle,
     backgroundColor: colors.color5,
    }}
    >
      {/* Header */}
      <Header back={true}/>
      <View style={{
        marginBottom: 20,
        paddingTop: 70,
      }}>
        <Text style={formHeading}>Orders</Text>
      </View>

      {
        loading ? <Loader/> : (
         <View style={{
            padding: 10,
            flex: 1,

         }}>
          <ScrollView showsVerticalScrollIndicator={true}>
           {
            orders.length > 0 ? orders.map((item, index)=>(
                <OrderItem 
                key={item._id} 
                id={item._id} 
                i={item}
                price={item.totalAmount}
                status={item.orderStatus}
                paymentMethod={item.paymentMethod}
                orderedOn={item.createdAt.split('T')[0]}
                address={`${item.shippingInfo.address}, ${item.shippingInfo.city}, ${item.shippingInfo.country} ${item.shippingInfo.pinCode}`}
                admin={true}

                />
            )) : <Headline style={{textAlign: 'center'}}>No Orders Yet</Headline>
           }
          </ScrollView>
           
         </View>
        )
      }
     
    </View>
  )
}

export default Orders