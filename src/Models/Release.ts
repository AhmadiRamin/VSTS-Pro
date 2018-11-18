import IBase from './base';
import IBuild from './build';
import IWorkItem from './workitem';
export default interface IRelease extends IBase{
    build:IBuild;
    createdOn:Date;
    workItems?:IWorkItem[]
}