import React, { useState,useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { ListItem ,Avatar ,Button ,Icon ,Badge} from 'react-native-elements';
import { connect } from "react-redux";

import Book from '../components/book'

const BookList= ({navigation,books,carts}) => { 
    
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View>
        <Button 
         buttonStyle={{
                 marginRight: 10,
                  marginBottom:5,
          backgroundColor: "#6600cc"
       }}  
       
         onPress={() => navigation.navigate('Cart', { screen: 'Cart' })} title="Cart" />
          <Badge
    status="warning"
    value={carts.length}
    containerStyle={{ position: 'absolute', top: -4, right: -4,
  marginRight: 10,
  marginBottom:5, }}
  />
  </View>
      ),
    });
  }, [carts,navigation]);
    return (
      <FlatList data={books}
     keyExtractor={item=>
      item.id}  
     renderItem={itemData => <Book item={itemData.item}/>} 
 ></FlatList>
    );
}


 const mapStateToProps = state =>{
return {
  books : state.book.books,
  carts : state.book.cart
}
 }
 
export default connect(mapStateToProps)(BookList);