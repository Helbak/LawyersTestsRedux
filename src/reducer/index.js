import {combineReducers} from "redux";
import reducerTopics from './reducerAllTopics'
import selectTopicReducer from './selectTopicReducer'
import selectQuestionReducer from './selectQuestionReducer'
import pageReducer from './pageReducer'
import reducerAllQuestion from './reducerAllQuestion'


const allReducers = combineReducers({
    selectQuestion: selectQuestionReducer,
    allQuestion: reducerAllQuestion,
    pageReducer: pageReducer,
    selectTopicReducer: selectTopicReducer,
    topics: reducerTopics,
});
export default allReducers;
