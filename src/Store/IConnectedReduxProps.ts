import { Action, Dispatch } from "redux";
interface IConnectedReduxProps<T extends Action> {
    // Correct types for the `dispatch` prop passed by `react-redux`.
    // Additional type information is given through generics.
    dispatch: Dispatch<T>;
}
export default IConnectedReduxProps;