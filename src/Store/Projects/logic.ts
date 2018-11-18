import { Action } from 'redux';
import { put } from 'redux-saga/effects';
import ProjectService from '../../Services/projectService';
import types from './types';
// worker Saga: will be fired on GET_PROJECTS_REQUESTED actions
export function* fetchProjects(action: Action) {
    const Api = new ProjectService();
   try {
      const projects = yield Api.getAllProjects();      
      yield put({type: types.GET_PROJECTS_SUCCESS, payload:projects});
   } catch (e) {
      yield put({type: types.GET_PROJECTS_FAILURE, message: e.message});
   }
}