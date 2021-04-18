import * as React from 'react'
import { NavigationContainer ,useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { ListItem ,Avatar ,Button ,Icon } from 'react-native-elements';
import BookList from "../Screens/BookList"
import Cart from '../Screens/Cart'

const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
    <Stack.Navigator 
    initialRouteName='BookList'
     screenOptions={{
        gestureEnabled: true,
         headerStyle: {
            backgroundColor: 'grey'
           },
           headerTitleStyle: {
             fontWeight: 'bold'
           },
           headerTintColor: '#ffd700',
           headerBackTitleVisible: false
         }}
    >
      <Stack.Screen name="Book-Shop" component={BookList} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

// function MainStackNavigator(props,route) {
// const navigation = useNavigation();
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName='BookList'
//         screenOptions={{
//           gestureEnabled: true,
//           headerStyle: {
//             backgroundColor: 'grey'
//           },
//           headerTitleStyle: {
//             fontWeight: 'bold'
//           },
//           headerTintColor: '#ffd700',
//           headerBackTitleVisible: false
//         }}
//         headerMode='float'>
//         <Stack.Screen
//           name='BookList'
//           component={BookList}
//            options={{
//         headerTitle:  'BookList' ,
//           headerRight: () => (
//             <Button
//                buttonStyle={{
//                  marginRight: 10,
//                  marginBottom:5,
//          backgroundColor: "#6600cc"
//       }}  
//               onPress={() => navigation.navigate('Cart', { screen: 'Cart' })
// }
//               title="Cart"
//             />
//           ),
//         }}
//         />
//         <Stack.Screen
//           name='Cart'
//           component={Cart}
//           options={({ route }) => ({
//             title: "Cart"
//           })}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

export default MainStackNavigator