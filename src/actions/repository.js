import axios from 'axios'
import { 
    GET_REPOSITORIES_SUCCESS, 
    GET_REPOSITORIES_FAIL, 
    BOOKMARKED_SUCCESS,
    BOOKMARKED_FAIL,
    GET_BOOKMARKS_SUCCESS,
    GET_BOOKMARKS_FAIL 
} from './types'




export const getRepositories = (reposName, history) => async dispatch => {
    try {
        const res = await axios.get(`https://api.github.com/search/repositories?q=${reposName}`)
        console.log(res);
        dispatch({
            type: GET_REPOSITORIES_SUCCESS,
            payload: res.data.items
        })
        history.push('/repositories')
    } catch (error) {
        dispatch({
            type: GET_REPOSITORIES_FAIL,
            payload: error.response.data
        })
    }
}

export const bookmark = (repoId, repoAvatar, repoName) => async dispatch => {
    const data = {
        id: repoId,
        name: repoName,
        avatar: repoAvatar
    }
    try {
        const res = await axios.post('http://localhost:5000/api/repository/bookmark', data)
        console.log(res);
        dispatch({
            type: BOOKMARKED_SUCCESS,
            
        })
    } catch (error) {
        dispatch({
            type: BOOKMARKED_FAIL,
            payload: error
        })
    }
} 

export const getBookmarks = () => async dispatch => {
    try {
        const res = await axios.get('http://localhost:5000/api/repository/bookmarks')
        console.log(res);
        dispatch({
            type: GET_BOOKMARKS_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}