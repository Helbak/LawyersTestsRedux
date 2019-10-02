import {combineReducers} from "redux";
import reducer_1 from './reducer_0';
import reducer_2 from './reducer_1';
import reducerTopics from './reducerAllTopics'
import selectTopicReducer from './selectTopicReducer'
import pageReducer from './pageReducer'
import reducerAllQuestion from './reducerAllQuestion'

const allReducers = combineReducers({
    allQuestion: reducerAllQuestion,
    pageReducer: pageReducer,
    selectTopicReducer: selectTopicReducer,
    topics: reducerTopics,
    quest1: reducer_1,
    quest2: reducer_2,
});
export default allReducers;
