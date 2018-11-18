import {Environment,Project,Release,ReleaseDefinition,WorkItem} from '../../Models';
import createAction from '../../Utils/createActionHelper';
import { ActionsUnion } from './../../Utils/actionsUnion';
import { Actions } from './actionCreators';
import keys from './types';

export const actions = {
    getReleaseDefinitions:(releaseDefinitions:ReleaseDefinition[])=> createAction(keys.GET_RELEASE_DEFINITIONS_SUCCESS,releaseDefinitions),
    getReleaseDefinitionsFailed: (error:string)=>createAction(keys.GET_RELEASE_DEFINITIONS_FAILURE,error),
    getReleaseEnvironemtnsFailed:(error:string)=>createAction(keys.GET_RELEASES_FAILURE,error),
    getReleases:(releases:Release[])=> createAction(keys.GET_RELEASES_SUCCESS,releases),    
    getWorkItems:(workItems:WorkItem[]) => createAction(keys.GET_WORKITEMS_SUCCESS,workItems),
    getWorkItemsFailed:(error:string) => createAction(keys.GET_WORKITEMS_FAILURE,error),    
    requestReleaseDefinitions:(project:Project)=>createAction(keys.GET_RELEASE_DEFINITIONS_REQUEST,{project}),    
    requestReleases:(projectName:string,definitionId:number,environmentId:number) => createAction(keys.GET_RELEASES_REQUEST,{projectName,definitionId,environmentId}),
    requestWorkItems:(projectName:string,buildId:number) => createAction(keys.GET_WORKITEMS_REQUEST,{projectName,buildId}),
    updateEnvironment:(environment:Environment) => createAction(keys.SET_CURRENT_ENVIRONMENT,environment),
    updateRelease:(release:Release) => createAction(keys.SET_CURRENT_RELEASE,release),
    updateReleaseDefinition:(releaseDefinition:ReleaseDefinition) => createAction(keys.SET_CURRENT_RELEASE_DEFINITION,releaseDefinition),
};
export type Actions = ActionsUnion<typeof actions>;