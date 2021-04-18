
import React from "react";
import { ListItem ,Avatar ,Button ,Icon ,Badge} from 'react-native-elements';
import { connect } from "react-redux";
import { removeFromCart } from "../redux/BookShopping/book-action";
const CartItem = ({item ,removeFromCart}) => {
    return(
     <ListItem bottomDivider  >
    <Avatar size="large" title={item.name} source={item.imgUrl && { uri: item.imgUrl }}/>
    <ListItem.Content>
      <ListItem.Title  style={{  fontWeight: 'bold' }}>{item.name}</ListItem.Title>
      <ListItem.Subtitle>{item.author}</ListItem.Subtitle>
    </ListItem.Content>
  <Button 
 title="Remove"
 onPress ={()=> removeFromCart(item.id)}
 buttonStyle={{
         backgroundColor: "#6600cc"
      }}  
/>
  </ListItem>
)
    };
    
     const mapDispatchToProps = (dispatch) =>{
      return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),

      };
  }
export default connect(null,mapDispatchToProps)(CartItem);