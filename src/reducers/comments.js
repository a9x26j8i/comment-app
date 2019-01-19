//action types
const INIT_COMMENTS = "INIT_COMMENTS"
const ADD_COMMENTS = "ADD_COMMENTS"
const DELETE_COMMENT = "DELETE_COMMENT"

//reducer
export default function (state, action) {
    if (!state) {
        state = { comments:[] } // return {comments:[]}?
    }

    switch (action.type) {
        case INIT_COMMENTS:
            return { comments: action.comments }
        case ADD_COMMENTS:
            return { comments:[...state.comments, action.comment]}
        case DELETE_COMMENT:
            return {
                comments:[
                    ...state.comments.splice(action.commentIndex, 1)
                ]
            }
        default:
            return state
    }
}

//reducer
//ADD_COMMENT DELETE_COMMENT INIT_COMMENT
export default function (state, action) {
    if (!state) {
        
    }
}

//action creators
export const initComments = (comments) => {
    return {type: INIT_COMMENTS, comments}
}
export const addComment = (comment) => {
    return {type: ADD_COMMENTS, comment}
}
export const deleteComment = (commentIndex) => {
    return {type: DELETE_COMMENT, commentIndex}
}