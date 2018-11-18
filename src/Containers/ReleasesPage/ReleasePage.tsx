import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import Header from '../../Components/Header/Header';
import Main from '../../Components/MainContent/Main';
import LeftNavigation from '../../Components/Navigation/LeftNavigation';
import {Environment,Project,Release,ReleaseDefinition} from '../../Models';
import IStoreState from '../../Store/IStoreState';
import * as projectCreators from '../../Store/Projects/actionCreators';
import * as releaseCreators from '../../Store/Releases/actionCreators';
import './ReleasePage.css';

interface IAppProps{
  projects:{
    projects:Project[],
    currentProject:Project
  },
  releases:{
    currentReleaseDefinition:ReleaseDefinition,
    currentEnvironment:Environment,
    releaseDefinitions:ReleaseDefinition[],
    releases:Release[],
    currentRelease:Release
  }
}

const initialState = { title: "Release Page"}
type State = Readonly <typeof initialState>;

class ReleasePage extends React.Component<IAppProps & DispatchProp<projectCreators.Actions | releaseCreators.Actions>,State> {

  public readonly state:State = initialState;
  public componentWillMount(){
    this.props.dispatch(projectCreators.actions.requestProjects());
  }
  public render() {
    return (
      <div>
       <Header projects={this.props.projects.projects}
        currentProject={this.props.projects.currentProject}
        onProjectChange={this.onProjectChange}
        currentRelease={this.props.releases.currentReleaseDefinition}
        releaseDefinitions={this.props.releases.releaseDefinitions}
        onReleaseChange={this.onReleaseDefinitionChange}
        onEnvironmentChange={this.onEnvironmentChange}/>
       <div className="container-fluid">
        <div className="row">
          <LeftNavigation releases={this.props.releases.releases} onReleaseChange={this.onReleaseChange}/>
          <Main release={this.props.releases.currentRelease}/>
        </div>
      </div>
      </div>
    );
  }

  private onReleaseChange = (release:Release)=>{
    this.props.dispatch(releaseCreators.actions.updateRelease(release));
    this.props.dispatch(releaseCreators.actions.requestWorkItems(this.props.projects.currentProject.name,release.build.version));
  }

  private onProjectChange = (project:Project) => {
    this.props.dispatch(projectCreators.actions.updateProject(project)); 
    this.props.dispatch(releaseCreators.actions.requestReleaseDefinitions(project));
  }
  private onReleaseDefinitionChange = (release:ReleaseDefinition) => {
    
    this.props.dispatch(releaseCreators.actions.updateReleaseDefinition(release));    
    this.props.dispatch(releaseCreators.actions.requestReleases(this.props.projects.currentProject.name,
      release.id,release.currentEnvironment.id));
  }
  private onEnvironmentChange = (env:Environment) => {
    
    this.props.dispatch(releaseCreators.actions.updateEnvironment(env));
    this.props.dispatch(releaseCreators.actions.requestReleases(this.props.projects.currentProject.name,
    this.props.releases.currentReleaseDefinition.id,env.id));
  }
}
const mapStateToProps = (state:IStoreState) => state;
export default connect(mapStateToProps)(ReleasePage);