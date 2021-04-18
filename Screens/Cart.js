import React, { Component } from "react";
import { View, Text, FlatList,  SafeAreaView,
  StyleSheet,List } from "react-native";
import { ListItem ,Badge ,Button ,Icon } from 'react-native-elements';
import { connect } from "react-redux";
import CartItem from '../components/cartItem'

const Cart = ({ cartData }) => { 
    return (
      <View >
        <View style={styles.headerFooterStyle}>
          <Badge
    value={cartData.length}
    containerStyle={{ position: 'absolute',
    marginLeft:25,
    marginTop:14
     }}
  />

  <Text style={styles.textStyle}>Added</Text>
        </View>
  <FlatList data={cartData}
     keyExtractor={item=>
      item.id} 
renderItem={itemData => <CartItem item={itemData.item}/>}  ></FlatList> 
      </View>     
    
    );
}


const styles = StyleSheet.create({
  headerFooterStyle: {
    width: '100%',
    height: 45,
    backgroundColor: '#606070',
  },
  textStyle: {
     textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    padding: 7,
    margin:5
  },
});

const mapStateToProps = state =>{
  return{
    cartData : state.book.cart,
  };
};
export default connect(mapStateToProps)(Cart);