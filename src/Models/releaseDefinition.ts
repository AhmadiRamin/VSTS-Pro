import IBase from './base';
import IEnvironment from './environment';
export default interface IReleaseDefinition extends IBase{
    environments:IEnvironment[];
    currentEnvironment:IEnvironment;
}