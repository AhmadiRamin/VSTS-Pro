import IProject from '../../Models/project';
interface IProjectState{
    projects:ReadonlyArray<IProject>;
    currentProject:Partial<IProject>;
}
export default IProjectState;