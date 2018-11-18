import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import IStoreState from './IStoreState';
import ProjectReducer from './Projects/reducer';
import ReleaseReducer from './Releases/reducer';
const rootReducer = combineReducers<IStoreState>({
    projects:ProjectReducer,
    releases:ReleaseReducer,
    router:routerReducer
});
  
export default rootReducer;