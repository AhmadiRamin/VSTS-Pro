import {RouterState} from 'react-router-redux';
import IProjectState from './Projects/IProjectState';
import IReleaseState from './Releases/IReleaseState';
export default interface IStoreState{
    readonly projects: IProjectState;
    readonly releases: IReleaseState;
    readonly router?: RouterState;
}