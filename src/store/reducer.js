export const initialState = {
  openBook: false,
  openListEdit: false,
  studentExist: null,
  studentUser:null,
};

export const actionTypes = {
  SET_OPEN_BOOK: "SET_OPEN_BOOK",
  SET_OPEN_LIST_EDIT: "SET_OPEN_LIST_EDIT",
  SET_STUDENT_EXIST: "SET_STUDENT_EXIST",
  SET_STUDENT_USER: "SET_STUDENT_USER",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_OPEN_BOOK:
      return { ...state, openBook: action.openBook };
    case actionTypes.SET_OPEN_LIST_EDIT:
      return { ...state, openListEdit: action.openListEdit };
    case actionTypes.SET_LIST_ID:
      return { ...state, listId: action.listId };
    case actionTypes.SET_STUDENT_EXIST:
      return { ...state, studentExist: action.studentExist };
      case actionTypes.SET_STUDENT_USER:
        return { ...state, studentUser: action.studentUser };
    default:
      return state;
  }
};

export default reducer;
