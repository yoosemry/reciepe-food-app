import { createContext, useReducer } from "react";
import foodReducuer, { myState } from "../reducer/ReducerApp";

export const contentApp = createContext();

const GlobalProvider = ({children})=>{
    const [state, dispatch] =  useReducer(foodReducuer,myState)

    const addNewItem = ()=>{
        return console.log('asc walalka')
    }

    let value = {
        addNewItem,
        state
    }

    return (
        <contentApp.Provider value={value}>{children}</contentApp.Provider>
    );

}

export default GlobalProvider