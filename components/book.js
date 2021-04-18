
import React from "react";
import { ListItem ,Avatar ,Button ,Icon ,Badge} from 'react-native-elements';
import { connect } from "react-redux";
import { addToCart } from "../redux/BookShopping/book-action";
const Book = ({item ,addToCart}) => {
    return(
     <ListItem bottomDivider  >
    <Avatar size="large" title={item.name} source={item.imgUrl && { uri: item.imgUrl }}/>
    <ListItem.Content>
      <ListItem.Title  style={{  fontWeight: 'bold' }}>{item.name}</ListItem.Title>
      <ListItem.Subtitle>{item.author}</ListItem.Subtitle>
    </ListItem.Content>
  <Button 
 title="Add"
 onPress ={()=> addToCart(item.id)}
 buttonStyle={{
         backgroundColor: "#6600cc"
      }}  
/>
  </ListItem>
)
    };
    
     const mapDispatchToProps = (dispatch) =>{
      return {
        addToCart : (id) => dispatch(addToCart(id))

      };
  }
export default connect(null,mapDispatchToProps)(Book);