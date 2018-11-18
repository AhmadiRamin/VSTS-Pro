import { put } from 'redux-saga/effects';
import ReleaseService from '../../Services/releaseService';
import WorkItemService from '../../Services/workItemService';
import {IGetReleaseDefinitionRequestAction,IGetReleasesRequestAction,IGetWorkItemsRequestAction} from './actions';
import types from './types';
// worker Saga: will be fired on GET_PROJECTS_REQUESTED actions
export function* fetchReleaseDefinitions(action:IGetReleaseDefinitionRequestAction) {
    const Api = new ReleaseService();    
   try {
      const releaseDefinitions = yield Api.getReleaseDefinitions(action.payload.project);      
      yield put({type: types.GET_RELEASE_DEFINITIONS_SUCCESS, payload:releaseDefinitions});
   } catch (e) {
      yield put({type: types.GET_RELEASE_DEFINITIONS_FAILURE, message: e.message});
   }
}

export function* fetchReleases(action:IGetReleasesRequestAction) {
    const Api = new ReleaseService();    
   try {
       const {projectName:project,definitionId:release,environmentId:environment}=action.payload;
      const releases = yield Api.getReleases(project,release,environment);      
      yield put({type: types.GET_RELEASES_SUCCESS, payload:releases});
   } catch (e) {
      yield put({type: types.GET_RELEASES_FAILURE, message: e.message});
   }
}

export function* fetchWorkItems(action: IGetWorkItemsRequestAction) {

   const Api = new WorkItemService();    
   try {
      const {projectName:project,buildId:build}=action.payload;
      const workItems = yield Api.getWorkItems(project,build);      
      yield put({type: types.GET_WORKITEMS_SUCCESS, payload:workItems});
   } catch (e) {
      yield put({type: types.GET_WORKITEMS_FAILURE, message: e.message});
   }
}