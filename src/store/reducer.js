export const initialState = {
  openBook: false,
  openListEdit: false,
  userId: null,
  token: null,
  role: null,
  logout: () => {
    initialState.userId = null;
    initialState.token = null;
    initialState.role = null;
  },
  login: (userId, token, role) => {
    initialState.userId = userId;
    initialState.token = role;
    initialState.role = token;
  },
};

export const actionTypes = {
  SET_OPEN_BOOK: "SET_OPEN_BOOK",
  SET_OPEN_LIST_EDIT: "SET_OPEN_LIST_EDIT",
  SET_USER_ID: "SET_USER_ID",
  SET_TOKEN: "SET_TOKEN",
  SET_ROLE: "SET_ROLE",
  SET_LOGIN: "SET_LOGIN",
  SET_LOGOUT: "SET_LOGOUT",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_OPEN_BOOK:
      return { ...state, openBook: action.openBook };
    case actionTypes.SET_OPEN_LIST_EDIT:
      return { ...state, openListEdit: action.openListEdit };
    case actionTypes.SET_USER_ID:
      return { ...state, userId: action.userId };
    case actionTypes.SET_TOKEN:
      return { ...state, token: action.token };
    case actionTypes.SET_ROLE:
      return { ...state, role: action.role };
    case actionTypes.SET_LOGOUT:
      return { ...state, logout: action.logout };
    case actionTypes.SET_LOGIN:
      return { ...state, login: action.login };
    default:
      return state;
  }
};

export default reducer;
