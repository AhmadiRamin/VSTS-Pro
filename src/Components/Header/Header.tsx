import {SFC} from 'react';
import * as React from 'react';
import IEnvironment from '../../Models/environment';
import IProject from '../../Models/project';
import IReleaseDefinition from '../../Models/releaseDefinition';
import CCDropDown from '../DropDown/CCDropdown';

type Props={
  projects:IProject[],
  currentProject:IProject,
  releaseDefinitions:IReleaseDefinition[],
  currentRelease:IReleaseDefinition,
  onProjectChange:(project:IProject)=>void,
  onReleaseChange:(release:IReleaseDefinition)=>void,
  onEnvironmentChange:(environment:IEnvironment)=>void
}

const Header:SFC<Props>=(props:Props)=>{
   return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow navCustom">      
        <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/">Cielo Costa</a>        
        <div className="w-100">
          <div className="dropdown-left">
            <CCDropDown size="sm" 
            onItemClick={props.onProjectChange} 
            buttonTitle={props.currentProject.name || "Projects"} 
            color="warning" 
            items={props.projects}/>
          </div>
          {
            props.releaseDefinitions.length>0 &&
              <div className="dropdown-left">
                <CCDropDown size="sm" 
                  onItemClick={props.onReleaseChange} 
                  buttonTitle={props.currentRelease.name || "Releases"} 
                  color="info" 
                  items={props.releaseDefinitions}/>
            </div>
          }
          {            
            props.currentRelease.environments &&
              <div className="dropdown-left">
                <CCDropDown size="sm" 
                  onItemClick={props.onEnvironmentChange} 
                  buttonTitle={props.currentRelease.currentEnvironment.name || "Environments"} 
                  color="success" 
                  items={props.currentRelease.environments}/>
            </div>
          }
        </div>
      </nav>
    );
  }
export default Header;
