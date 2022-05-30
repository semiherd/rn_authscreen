
export const authReducer = (prevState, action) => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...prevState,
        userToken: action.token,
        idToken: action,
        userData: action.userData,
        isLoading: false,
      };
      case 'SIGN_IN':
        return {
          ...prevState,
          isSignout: false,
          userToken: action.token,
          idToken: action,
          userData: action.userData,
        };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
            idToken: null,
            userData: null,
      };
    default:
      return prevState;
  }
};