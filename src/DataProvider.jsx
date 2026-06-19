import React, { createContext } from 'react';

const Context = createContext();

const DataProvider = ({ children }) => {

    return (
    <Context.Provider value={{}}>
            { children }
        </Context.Provider>
    );
};

export default DataProvider

export const useData = () => useContext(Context);