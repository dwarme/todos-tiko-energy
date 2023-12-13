import { createContext } from "react";

interface AppContextValue {
    userLogged?: boolean;
}

const AppContext = createContext<AppContextValue>({});
export default AppContext;
