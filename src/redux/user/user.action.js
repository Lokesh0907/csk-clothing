const userActions = {
    SET_CURRENT_USER:'SET_CURRENT_USER',

}

export const setCurrentUser = user => {
    return {type:userActions.SET_CURRENT_USER, payload:user};
}

export default userActions;