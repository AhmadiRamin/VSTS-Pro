import { Action } from 'redux';
import {Project} from '../../Models';
import keys from './types';
export interface ISetCurrentProjectAction extends Action {
    readonly type: keys.SET_CURRENT_PROJECT;
    readonly payload:{
        readonly project:Project
    }
}

export interface IGetProjectsRequestAction extends Action{
    readonly type: keys.GET_PROJECTS_REQUEST;    
    readonly payload:{}
}

export interface IGetProjectsSuccessAction extends Action {
    readonly type: keys.GET_PROJECTS_SUCCESS;
    readonly payload:{
        readonly projects:ReadonlyArray<Project>
    }
}

export interface IGetProjectsFailureAction extends Action{
    readonly type: keys.GET_PROJECTS_FAILURE;
    readonly payload:{
        readonly error:string;
    }
}

export type ProjectActions = ISetCurrentProjectAction | IGetProjectsSuccessAction;