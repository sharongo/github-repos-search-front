import { 
    GET_REPOSITORIES_SUCCESS, 
    GET_REPOSITORIES_FAIL, 
    BOOKMARKED_FAIL, 
    BOOKMARKED_SUCCESS 
} from '../actions/types'

const initialState = {
    repos: [],
    loading: null,
    error: null,
    bookmarks: []
}

export default function(state = initialState, action){

    const {type, payload} = action;

    switch (type) {
        case GET_REPOSITORIES_SUCCESS:
            return{
                ...state,
                repos: payload,
                loading: false
            }
        case GET_REPOSITORIES_FAIL:
            return{
                ...state,
                error : payload,
                loading: false
            }
        case BOOKMARKED_SUCCESS: 
            return{
                ...state,
                loading: false
            }
        case BOOKMARKED_FAIL:
            return{
                ...state,
                error: payload,
                loading: false
            }
        default:
            return state;
    }

}