import {WorkItem} from '../Models';
import BuildService from './buildService';
import ServiceBase from './serviceBase';

export default class WorkItemService extends ServiceBase{
    private urlSuffix: string = "_apis/wit";
    public getWorkItems= async (projectName:string,buildId:number):Promise<WorkItem[]> =>{
       
        const buildService = new BuildService();
        const workItemIds = await buildService.getBuildWorkItemIds(buildId,projectName);
        const operation=`/workitems?ids=${workItemIds.join(',')}`;
        const response = await this.get(`${this.config.genericEndpoint}${projectName}/${this.urlSuffix}${operation}`);        
        const workItems: WorkItem[] = response.data.value.map((w: any) => {
            const {id,fields}=w;
            return {
                id,
                name:fields['System.Title'],
                type:fields['System.WorkItemType']
            };
        });
        return Promise.resolve(workItems);
    }
}