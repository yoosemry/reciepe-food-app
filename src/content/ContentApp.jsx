import { createContext, useReducer } from "react";
import foodReducuer, { myState } from "../reducer/ReducerApp";

export const contentApp = createContext();

const GlobalProvider = ({children})=>{
    const [state, dispatch] =  useReducer(foodReducuer,myState)

    const addNewItem = ()=>{
        return console.log('addNewItem')
    }

    const searchFun = (input)=>{
      

            dispatch({type :'SEARCH' , payload: input})
           
    }

    let value = {
        addNewItem,
        state,
        searchFun
    }

    return (
        <contentApp.Provider value={value}>{children}</contentApp.Provider>
    );

}

export default GlobalProvider