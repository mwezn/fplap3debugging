const initState = { location: "London", result: { sunrise: "", sunset: "" }, loading: false };
//Tried to initialise search location to London above but its not working??

const searchReducer = (state=initState, action) => {
    switch(action.type){
        case 'LOADING':
            return { ...state, location: action.payload, loading: true };
        case 'LOAD_RESULT':
            return { ...state, result: action.payload, loading: false, error: false };
        case 'SET_ERROR':
            return { ...state, error: action.payload, loading: false }
    };
};

export default searchReducer;