
const initialState = {
    isLoggedIn: false,
    isInitialized: false
}
type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        // case 'authMe/SET-ISINITIALIZED':
        //     return { ...state, isInitialized: action.value }
        default:
            return state
    }
}
// actions
// export const setIsInitializedAC = (value: boolean) =>
//     ({ type: 'authMe/SET-ISINITIALIZED', value } as const)

// thunks
// export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch<ActionsType>) => {
//     dispatch(setAppStatusAC('loading'))
//     authAPI.login(data)
//         .then(res => {
//             console.log(res);
//             if (res.data.resultCode === 0) {
//                 dispatch(setIsLoggedInAC(true))
//                 dispatch(setAppStatusAC('succeeded'))
//             }
//             else {
//                 handleServerAppError(res.data, dispatch);
//             }
//         })
//         .catch((error) => {
//             handleServerNetworkError(error, dispatch)
//         })
// }



// types
// type ActionsType =
//     ReturnType<typeof 123>
