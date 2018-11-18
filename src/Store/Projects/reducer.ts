import { Reducer } from 'redux';
import * as fromActions from '../../Store/Projects/actionCreators';
import defaultState from '../defaultState';
import IProjectState from './IProjectState';
import ActionTypeKeys from './types';

const ProjectReducer:Reducer<IProjectState> = 
(state:IProjectState=defaultState.projects,
  action:fromActions.Actions)=>{
  switch (action.type) {
        case ActionTypeKeys.GET_PROJECTS_SUCCESS:
        {
          const {payload:projects} = action;
          return { ...state, projects };
        }         
        case ActionTypeKeys.SET_CURRENT_PROJECT:{
          const {payload:currentProject} = action;
          return { ...state, currentProject};
        }
        case ActionTypeKeys.GET_PROJECTS_FAILURE:
          console.log(action.payload);
        default:
          return state;
      }
};

export default ProjectReducer;