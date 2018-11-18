import axios from 'axios';
import Config from './config';
export default class ServiceBase{
    protected config: Config;
    constructor() {
        this.config = new Config;
    }

    protected get = async (requestUrl:string)=>{
        return await axios.get(`${requestUrl}`,
        {
            headers: this.config.headers
        });
    }
}