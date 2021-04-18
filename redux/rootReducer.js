import { combineReducers } from 'redux';
import BookReducer from './BookShopping/book-reducer';
const RootReducer = combineReducers({
book :BookReducer,
});

export default RootReducer;
