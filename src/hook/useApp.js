import { useContext } from "react"
import { contentApp } from "../content/ContentApp"


const useApp = () =>{
   return useContext(contentApp);

}

export default useApp;