import { ADD_PROD_SUCCESS_ADMIN_SIDE, DELETE_PROD_SUCCESS_ADMIN_SIDE, EDIT_PROD_SUCCESS_ADMIN_SIDE, GET_FAILURE_ADMIN_SIDE, GET_REQUEST_ADMIN_SIDE, GET_SUCCESS_ADMIN_SIDE, GET_SUCCESS_USER_DATA } from "../actionType"



const initialState = {
    isLoading: false,
    isError: false,
    mensData: [],
    user: []
}

export const reducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case GET_REQUEST_ADMIN_SIDE: {
            return { ...state, isLoading: true, isError: false }
        }

        case GET_SUCCESS_ADMIN_SIDE: {
            return { ...state, isLoading: false, isError: false, mensData: payload }
        }

        case GET_FAILURE_ADMIN_SIDE: {
            return { ...state, isLoading: false, isError: true, }
        }

        case ADD_PROD_SUCCESS_ADMIN_SIDE: {
            return { ...state, isLoading: false, isError: false, }
        }

        case EDIT_PROD_SUCCESS_ADMIN_SIDE: {
            return { ...state, isLoading: false, isError: false, }
        }

        case DELETE_PROD_SUCCESS_ADMIN_SIDE: {
            return { ...state, isLoading: false, isError: false, }
        }

        case GET_SUCCESS_USER_DATA: {
            return { ...state, isLoading: false, isError: false, user: payload }
        }

        default: return state
    }

}