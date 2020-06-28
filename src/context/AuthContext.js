import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signout':
      return {token: null, email: ''};
    case 'signin':
    case 'signup':
      return {
        token: action.payload.token,
        email: action.payload.email,
      };
    default:
      return state;
  }
};

const signup = dispatch => {
  return ({email, password}) => {
    console.log('Signup');
  };
};

const signin = dispatch => {
  return ({email, password}) => {
    // Do some API Request here
    console.log('Signin');
    dispatch({
      type: 'signin',
      payload: {
        token: 'some access token here',
        email,
      },
    });
  };
};

const signout = dispatch => {
  return () => {
    dispatch({type: 'signout'});
  };
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signin, signout, signup},
  {token: null, email: ''},
);
