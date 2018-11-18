export interface IAction<T extends string>{
    readonly type:T;
}
export interface IActionWithPayload<T extends string,P> extends IAction<T>{
    readonly payload:P;
}
export default function createAction<T extends string,P>(type:T,payload:P):IActionWithPayload<T,P>
{return {type,payload}}