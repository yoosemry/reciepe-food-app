export const myState = {
    posts : [],

    name : 'yoose'

}

const foodReducuer = (state , action)=>{

    const {type , payload} = action;

    switch (type) {
        case 'ADD_NEW_ITEM' :
            return{
                ...state,
                name : payload.name

            }
               
   
        default:
            throw new Error("Invalid action type: ", type)
    }


}

export default foodReducuer;