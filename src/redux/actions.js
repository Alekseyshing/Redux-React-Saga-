import { CREATE_POST, SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT, REQUEST_POSTS } from "./types";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post
  }
}

export function showLoader() {
  return {
    type: SHOW_LOADER
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  }
}

export function showAlert(text) {
  return dispatch => {
    dispatch({
      type: SHOW_ALERT,
      payload: text
    })

    setTimeout(() => {
      dispatch(hideAlert())
    }, 2500)
  }
}

export function hideAlert() {
  return {
    type: HIDE_ALERT
  }
}

export function fetchPosts() {
  return {
    type: REQUEST_POSTS
  }
  //REDUX:
  // return async dispatch => {
  //   try {
  //     dispatch(showLoader())
  //     const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
  //     const json = await response.json()
  //     setTimeout(() => {
  //       dispatch({ type: FETCH_POSTS, payload: json })
  //       dispatch(hideLoader())
  //     }, 500)
  //   } catch (error) {
  //     dispatch(showAlert('Что-то пошло не так'))
  //     dispatch(hideLoader())
  //   }
  // }
}