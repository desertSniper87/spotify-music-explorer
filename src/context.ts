import {createContext, Dispatch} from "react";

interface IAppStateContext {
    token: string,
    setToken: Dispatch<string>
}

export const AppStateContext = createContext({} as IAppStateContext);