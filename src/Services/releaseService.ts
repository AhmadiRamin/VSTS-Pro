import {Environment} from '../Models';
import IProject from '../Models/project';
import Release from '../Models/Release';
import ReleaseDefinition from './../Models/releaseDefinition';
import ServiceBase from './serviceBase';

export default class ReleaseService extends ServiceBase {
    private urlSuffix: string = "_apis/release";
    public getReleaseEnvironments = async (projectName:string,releaseId:number): Promise<Environment[]> =>{
        const operation=`/definitions?definitionId=${releaseId}&$expand=Environments`;
        const response = await this.get(`${this.config.vsrmEndpoint}${projectName}/${this.urlSuffix}${operation}`);
        const environments: Environment[] = response.data.value.environments.map((environment: any) => environment as Environment);
        return Promise.resolve(environments);
    }

    public getReleaseDefinitions = async (project:IProject):Promise<ReleaseDefinition[]> =>{
        const operation = `/definitions?project=${project.id}&$expand=Environments`;
        const response = await this.get(`${this.config.vsrmEndpoint}${project.name}/${this.urlSuffix}${operation}`);
        
        const projects: ReleaseDefinition[] = response.data.value.map((p: any) => {
            return {
                currentEnvironment:{
                 id:p.environments[0].id,
                 name:p.environments[0].name,
                 rank:p.environments[0].rank   
                },
                description: p.description,
                environments:p.environments.map((env:any)=>{
                    return{
                        id:env.id,
                        name:env.name,
                        rank:env.rank
                    }
                }),                
                id: p.id,
                name: p.name,
            };
        });
        return Promise.resolve(projects);
    }

    public getReleases = async(projectName:string,releaseId:number,environmentId:number):Promise<Release[]> =>{
        const operation = `/releases?$expand=artifacts&definitionId=${releaseId}&definitionEnvironmentId=${environmentId}&api-version=5.0-preview.3`;
        const response = await this.get(`${this.config.vsrmEndpoint}${projectName}/${this.urlSuffix}${operation}`);
        const projects: Release[] = response.data.value.map((item: any) => {
            return {
                build:{
                    id:item.artifacts[0].definitionReference.definition.id,
                    name:item.artifacts[0].definitionReference.definition.name,
                    version:item.artifacts[0].definitionReference.version.id
                },
                createdOn: item.createdOn,
                id: item.id,
                name: item.name
                
            };
        });
        return Promise.resolve(projects);
    }
}