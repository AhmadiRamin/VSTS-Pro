import {Environment, Release, ReleaseDefinition} from '../../Models';
interface IReleaseState{
    releaseDefinitions:ReadonlyArray<ReleaseDefinition>;
    currentReleaseDefinition:Partial<ReleaseDefinition>;
    currentEnvironment:Partial<Environment>;
    releases:ReadonlyArray<Release>;
    currentRelease:Partial<Release>;
}
export default IReleaseState;