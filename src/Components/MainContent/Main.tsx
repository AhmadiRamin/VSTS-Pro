import {SFC} from 'react';
import * as React from 'react';
import IRelease from '../../Models/Release';
type Props={
    release:IRelease
}

const Main : SFC<Props> = (props)=>{
    
    return(
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">
            {
                props.release && props.release.name
            }
            </h1>
            <div className="btn-toolbar mb-2 mb-md-0">
                {
                    props.release.createdOn &&
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                            <th className="info">Release Date</th>
                            <th>{
                                new Date(props.release.createdOn).toLocaleDateString("uk").replace('.','/').replace('.','/')
                            }</th>
                            </tr>
                            
                        </tbody>
                    </table>
                }
            </div>
        </div>
            {
                props.release.workItems &&
                <>
                    <h3>Summary</h3>
                        Bug fixing release to address the following bugs and improvements.<br/><br/>
                    <h3>All Updates for this release</h3>
                </>
            }
            {
                props.release.workItems &&
                props.release.workItems.map((w)=>(
                    <li key={w.id}>{w.type} {w.id} {w.name}</li>
                ))
            }
        </main>
    );
}

export default Main;