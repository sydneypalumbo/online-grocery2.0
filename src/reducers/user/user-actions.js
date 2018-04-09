export const userActionTypes = {
    SET_USER: `SET_USER`
}

function setUser(sessionID) {
    return {
        type: userActionTypes.SET_USER,
        value: value
    }
}

export const userActionCreators = {
    setUser
}
