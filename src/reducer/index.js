import {combineReducers} from "redux";
import reducerTopics from './reducerAllTopics'
import selectTopicReducer from './selectTopicReducer'
import selectQuestionReducer from './selectQuestionReducer'
import pageReducer from './pageReducer'
import reducerAllQuestion from './reducerAllQuestion'
import colorFirstOption from './colorFirstOptionReducer'
import colorSecondOption from './colorSecondOptionReducer'
import colorThirdOption from './colorThirdOptionReducer'
import colorFourthOption from './colorFourthOptionReducer'

const allReducers = combineReducers({
    colorFourthOption: colorFourthOption,
    colorThirdOption: colorThirdOption,
    colorSecondOption: colorSecondOption,
    colorFirstOption: colorFirstOption,
    selectQuestion: selectQuestionReducer,
    allQuestion: reducerAllQuestion,
    pageReducer: pageReducer,
    selectTopicReducer: selectTopicReducer,
    topics: reducerTopics,
});
export default allReducers;
