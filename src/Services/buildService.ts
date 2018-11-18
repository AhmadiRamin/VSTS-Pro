import ServiceBase from './serviceBase';
export default class BuildService extends ServiceBase{
    private urlSuffix: string= "_apis/build";
    public getBuildWorkItemIds = async (buildId:number,projectName:string):Promise<number[]> =>{
        const operation=`/builds/${buildId}/workitems`;
        const response = await this.get(`${this.config.genericEndpoint}${projectName}/${this.urlSuffix}${operation}`);
        const workItemIds: number[] = response.data.value.map((p: any) => p.id);
        return Promise.resolve(workItemIds);
    }
}