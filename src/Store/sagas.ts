import { fork, takeEvery } from 'redux-saga/effects';
import {fetchProjects} from './Projects/logic';
import projectTypes from './Projects/types';
import {fetchReleaseDefinitions,fetchReleases,fetchWorkItems} from './Releases/logic';
import releaseTypes from './Releases/types';
// add here all your watchers

  function* watchFetchProjects() {
    yield takeEvery(projectTypes.GET_PROJECTS_REQUEST, fetchProjects);
  }

  function* watchFetchReleaseDefinitions(){
    yield takeEvery(releaseTypes.GET_RELEASE_DEFINITIONS_REQUEST, fetchReleaseDefinitions);
  }

  function* watchFetchReleases(){
    yield takeEvery(releaseTypes.GET_RELEASES_REQUEST, fetchReleases);
  }

  function* watchFetchWorkItems(){
    yield takeEvery(releaseTypes.GET_WORKITEMS_REQUEST, fetchWorkItems);
  }
  // Register all your watchers
  export default function* root() {
    yield [
      fork(watchFetchProjects),
      fork(watchFetchReleaseDefinitions),
      fork(watchFetchReleases),
      fork(watchFetchWorkItems)
    ]
  }