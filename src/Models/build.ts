import IBase from './base';
import WorkItem from './workitem';
export default interface IBuild extends IBase{
    workitems:WorkItem[];
    version:number;
}