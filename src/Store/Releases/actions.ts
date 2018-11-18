import { Action } from 'redux';
import {Environment,Project,ReleaseDefinition,WorkItem} from '../../Models';
import keys from './types';
export interface ISetCurrentReleaseDefinitionAction extends Action {
    readonly type: keys.SET_CURRENT_RELEASE_DEFINITION;
    readonly payload:{
        readonly releaseDefinition:ReleaseDefinition
    }
}

export interface IGetReleaseDefinitionRequestAction extends Action{
    readonly type: keys.GET_RELEASE_DEFINITIONS_REQUEST;
    readonly payload:{
        project:Project
    }
}

export interface IGetReleaseDefinitionsSuccessAction extends Action {
    readonly type: keys.GET_RELEASE_DEFINITIONS_SUCCESS;
    readonly payload:{
        readonly projects:ReadonlyArray<ReleaseDefinition>
    }
}

export interface IGetReleaseDefinitionFailureAction extends Action{
    readonly type: keys.GET_RELEASE_DEFINITIONS_FAILURE;
    readonly payload:{
        readonly error:string;
    }
}

export interface IGetReleasesRequestAction extends Action{
    readonly type: keys.GET_RELEASES_REQUEST;
    readonly payload:{
        projectName:string,
        definitionId:number,
        environmentId:number
    }
}

export interface IGetReleasesSuccessAction extends Action {
    readonly type: keys.GET_RELEASES_SUCCESS;
    readonly payload:{
        readonly environments:ReadonlyArray<Environment>
    }
}

export interface IGetReleasesFailureAction extends Action{
    readonly type: keys.GET_RELEASES_FAILURE;
    readonly payload:{
        readonly error:string;
    }
}

export interface IGetWorkItemsRequestAction extends Action{
    readonly type: keys.GET_WORKITEMS_REQUEST;
    readonly payload:{
        projectName:string,
        buildId:number
    }
}

export interface IGetWorkItemsSuccessAction extends Action {
    readonly type: keys.GET_WORKITEMS_SUCCESS;
    readonly payload:{
        readonly workItems:ReadonlyArray<WorkItem>
    }
}

export interface IGetWorkItemsFailureAction extends Action{
    readonly type: keys.GET_WORKITEMS_FAILURE;
    readonly payload:{
        readonly error:string;
    }
}

export interface ISetCurrentEnvironmentAction extends Action {
    readonly type: keys.SET_CURRENT_ENVIRONMENT;
    readonly payload:{
        readonly environment:Environment
    }
}

export type ReleaseActions = 
ISetCurrentReleaseDefinitionAction | 
IGetReleaseDefinitionsSuccessAction | 
IGetReleaseDefinitionFailureAction |
IGetReleasesRequestAction |
IGetReleasesSuccessAction |
IGetReleasesFailureAction |
ISetCurrentEnvironmentAction;