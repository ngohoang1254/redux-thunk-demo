const initialState = {
    movieList : [],
    loading : false,
    err : null
}
const movieReducer = (state = initialState,action) =>{
    switch(action.type){
        default:
            return {...state}
    }
}
export default movieReducer;