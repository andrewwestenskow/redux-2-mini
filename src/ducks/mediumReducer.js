import axios from 'axios'

const initialState = {
  loading: false,
  articles: []
}

const REQUEST_ARTICLES = 'REQUEST_ARTICLES'
export const requestArticles = () => {
  let articles = axios.get('/api/medium');
  return {
    type: REQUEST_ARTICLES,
    payload: articles
  }
}

function mediumReducer (state = initialState, action){
  switch(action.type){
    case `${REQUEST_ARTICLES}_PENDING`:
      return {...state, loading: true};
    case `${REQUEST_ARTICLES}_FULFILLED`:
      return {...state, loading: false, articles: action.payload.data};
    case `${REQUEST_ARTICLES}_REJECTED`:
      return {...state, loading: false}
    default:
      return state
  }
}

export default mediumReducer;