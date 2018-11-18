
import {Project} from '../Models';
import ServiceBase from './serviceBase';

export default class ProjectService extends ServiceBase {
    private urlSuffix: string= "_apis/projects";
    public async getAllProjects(): Promise<Project[]> {
        const response = await this.get(`${this.config.genericEndpoint}${this.urlSuffix}`);
        const projects: Project[] = response.data.value.map((p: Project) => ({id:p.id,name:p.name,description:p.description}));
        return Promise.resolve(projects);
    }
}