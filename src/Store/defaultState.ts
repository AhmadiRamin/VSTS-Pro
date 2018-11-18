import IStoreState from './IStoreState';
const defaultState:IStoreState={
    projects:{
        currentProject:{},
        projects:[]        
    },
    releases:{
        currentEnvironment:{},
        currentRelease:{},
        currentReleaseDefinition:{},
        releaseDefinitions:[],
        releases:[]
    },
    router:{
        location:null
    }
}

export default defaultState;