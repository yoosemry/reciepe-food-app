export const myState = {
    bookmark : [],
    search : ''

}

const foodReducuer = (state , action)=>{

    const {type , payload} = action;

    switch (type) {

        case 'SEARCH':
            return{
                ...state,
                search: payload
            }


        case 'ADD_BOOKMARK':
            return{
                ...state,
                bookmark : payload.bookmark

            }

            case 'REMOVE_BOOKMARK':
                return {
                    ...state,
                    bookmark: payload.bookmark
                }
               
   
        default:
            throw new Error("Invalid action type: ", type)
    }


}

export default foodReducuer;