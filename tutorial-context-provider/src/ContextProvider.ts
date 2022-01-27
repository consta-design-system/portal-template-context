import {createContext} from 'react';

type Context = {
    name?: string;
};

const ContextProvider = createContext<Context>({name: 'unknown'});

export {ContextProvider};
