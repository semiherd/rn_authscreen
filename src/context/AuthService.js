import { Auth } from 'aws-amplify';

// When you integrate your own Amplify credentials from https://docs.amplify.aws/cli/start/install/
// Remove commented rows below

const signIn = async (email, password) => {
  try {
    const response = await Auth.signIn(email, password);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

const signUp = async (username, password) => {
  try {
    const response = '' // await Auth.signUp({ username, password }); 
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

const confirmSignUp = async (email, code) => {
  try {
    const response = '' /* await Auth.confirmSignUp(email, code, {
      forceAliasCreation: true
    });*/
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

const signOut = async () => {
  try {
    const response = '' // await Auth.signOut();
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

const checkAuth = async () => {
  try {
    const response = '' // await Auth.currentAuthenticatedUser();
    const { attributes, signInUserSession } = response;
    return { attributes,idToken:signInUserSession,jwtToken: signInUserSession.accessToken.jwtToken };
  } catch (error) {
    throw new Error(error.message);
  }
};

export { signIn, signOut, checkAuth, signUp, confirmSignUp };