import {combineReducers} from "redux";
import reducerOne from './reducerOne';
import reducerTwo from './reducerTwo';
import reducerTopics from './reducerTopics'
import startReducer from './startReducer'
// import functionReducer from './functionReducer'

const allReducers = combineReducers({
   // functionReducer: functionReducer,
    start: startReducer,
    topics: reducerTopics,
    quest1: reducerOne,
    quest2: reducerTwo,
});
export default allReducers;
