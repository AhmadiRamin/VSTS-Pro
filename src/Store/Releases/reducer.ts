import { Reducer } from 'redux';
import defaultState from '../defaultState';
import * as fromActions from './actionCreators';
import IReleaseState from './IReleaseState';
import ActionTypeKeys from './types';

const ProjectReducer:Reducer<IReleaseState> = 
(state:IReleaseState=defaultState.releases,
  action:fromActions.Actions)=>{
  switch (action.type) {
        case ActionTypeKeys.GET_RELEASE_DEFINITIONS_SUCCESS:
        {
          const {payload:releaseDefinitions} = action;
          return { ...state, releaseDefinitions };
        }         
        case ActionTypeKeys.SET_CURRENT_RELEASE_DEFINITION:{
          const {payload:currentReleaseDefinition} = action;
          return { ...state, currentReleaseDefinition};
        }
        case ActionTypeKeys.SET_CURRENT_ENVIRONMENT:{
          const {payload:currentEnvironment} = action;
          return { ...state,currentReleaseDefinition:{
            ...state.currentReleaseDefinition,
            currentEnvironment
          }};
        }
        case ActionTypeKeys.GET_RELEASES_SUCCESS:
        {
          const {payload:releases} = action;
          return { ...state, releases };
        }
        case ActionTypeKeys.SET_CURRENT_RELEASE:{
          const {payload:currentRelease} = action;
          return { ...state, currentRelease};
        }
        case ActionTypeKeys.GET_WORKITEMS_SUCCESS:
        {
          const {payload:workItems} = action;
          return { ...state,currentRelease:{
            ...state.currentRelease,
            workItems
          } };
        }
        case ActionTypeKeys.GET_RELEASE_DEFINITIONS_FAILURE:
          console.log(action.payload);
        case ActionTypeKeys.GET_RELEASES_FAILURE:
          console.log(action.payload);
        default:
          return state;
      }
};

export default ProjectReducer;