import { createContext } from "react";

export const data = {
    header: {
        title: 'hola'
    },
    intro: {
        text: 'adad'
    },
};

export const GlobalContext = createContext(data);

export const Provider = ({children}) => {
    return 
        <GlobalContext.Provider>
            { children }
        </GlobalContext.Provider>
    
}