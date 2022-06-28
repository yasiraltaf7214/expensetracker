export default (state, action)=>{
    switch(action.type){
        case 'DELETE_TRANSACTION':
            console.log("these are state.transcations  ::  ",state.transcations)

            return {
                ...state,
                transcations: state.transcations.filter(transaction=>transaction.id!== action.payload)
            }

        case 'ADD_TRANSACTION':
            return {
                ...state,
                transcations: [action.payload, ...state.transcations]
            }
        default:
            return state;
    }
}