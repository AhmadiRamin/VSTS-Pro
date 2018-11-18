import * as React from 'react';
import { isFunction } from './utils';
const initialState = {open:false};
type State = Readonly<typeof initialState>;

type Props = Partial<
{
    children:RenderCallback
    render:RenderCallback
}>;

type RenderCallback = (args:ToggleableComponentProps)=>JSX.Element;
type ToggleableComponentProps = {open:State["open"],toggle:Toggleable["toggle"]};

export default class Toggleable extends React.Component<Props,State>{
    public readonly state : State = initialState;
    public render(){
        const {children,render} = this.props;
        const renderProps = {open:this.state.open,toggle:this.toggle};
        if(render){
            return render(renderProps);
        }
        return isFunction(children)?children(renderProps):null;
    }
    private toggle = () => this.setState(updateOpenState);
}

const updateOpenState = (prevState:State) => ({open:!prevState.open});