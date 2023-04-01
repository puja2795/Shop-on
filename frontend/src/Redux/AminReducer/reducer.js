import { GET_FAILURE_ADMIN_SIDE, GET_REQUEST_ADMIN_SIDE, GET_SUCCESS_ADMIN_SIDE_MEN } from "../actionType"



const initialState = {
    isLoading: false,
    isError: false,
    mensData: [],
}

export const reducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case GET_REQUEST_ADMIN_SIDE: {
            return { ...state, isLoading: true, isError: false }
        }

        case GET_SUCCESS_ADMIN_SIDE_MEN: {
            return { ...state, isLoading: false, isError: false, mensData: payload }
        }

        case GET_FAILURE_ADMIN_SIDE: {
            return { ...state, isLoading: false, isError: true, }
        }
        default: return state
    }

}