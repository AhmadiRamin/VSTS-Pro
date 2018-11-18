import {SFC} from 'react';
import * as React from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import Toggleable from '../../Utils/toggleable';
type Props = {
    size:string,
    onItemClick:(p:object)=>void,
    buttonTitle:string,
    color:string,
    items:any[]
}

const CCDropDown:SFC<Partial<Props>> = (props:Props) => {
    // tslint:disable-next-line:jsx-no-lambda
    return (<Toggleable render={({open,toggle})=>(
        <Dropdown size={props.size} isOpen={open} toggle={toggle}>
          <DropdownToggle caret={true} color={props.color} >
            {
              props.buttonTitle
            }
            </DropdownToggle>
          <DropdownMenu>
          {
              props.items.length>0 &&
              props.items.map((item) => {
                return <DropdownItem onClick={(e)=>props.onItemClick(item)} key={item.id} href="#">
                        {item.name}
                    </DropdownItem>
              })
            }
          </DropdownMenu>
        </Dropdown>
    )}/>);
}
export default CCDropDown;