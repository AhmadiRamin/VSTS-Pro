import * as React from 'react';
import { SFC } from 'react';
import IRelease from '../../Models/Release';

type Props = {
  releases:IRelease[],
  onReleaseChange:(release:IRelease)=>any
}

const LeftNavigation : SFC<Props> = (props)=>{
  return(
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
    <div className="sidebar-sticky">
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            <span data-feather="home"/>
            Updates <span className="sr-only">(current)</span>
          </a>
        </li>
        {
          props.releases.length>0?
          
            props.releases.map((release) =>{
              // tslint:disable:jsx-no-lambda
              return (
                <li className="nav-item" key={release.id} onClick={(e)=>props.onReleaseChange(release)}>
                  <a className="nav-link" href="#">
                    <span data-feather="file"/>
                    {release.name}
                  </a>
                </li>
              )
            }): <li className="nav-item nav-link">No updates yet!</li>
        }
        
      </ul>
    </div>
  </nav>
  );
}
export default LeftNavigation;