import {Project} from '../../Models';
import createAction from '../../Utils/createActionHelper';
import { ActionsUnion } from './../../Utils/actionsUnion';
import keys from './types';

export const actions = {
    getProjects:(projects:Project[])=> createAction(keys.GET_PROJECTS_SUCCESS,projects),
    getProjectsFailed: (error:string)=>createAction(keys.GET_PROJECTS_FAILURE,error),
    requestProjects:()=>createAction(keys.GET_PROJECTS_REQUEST,{}),    
    updateProject:(project:Project) => createAction(keys.SET_CURRENT_PROJECT,project)
};

export type Actions = ActionsUnion<typeof actions>;