import { useCallback } from "react";
import { actionTypes, useStateValue } from "../Store";
import cookie from "js-cookie";
import { useHistory } from "react-router-dom";
export const useAuth = () => {
  const [, dispatch] = useStateValue();
  const history = useHistory();
  const login = useCallback(
    (role, userId, token) => {
      dispatch({
        type: actionTypes.SET_ROLE,
        role,
      });
      dispatch({
        type: actionTypes.SET_USER_ID,
        userId,
      });
      dispatch({
        type: actionTypes.SET_TOKEN,
        token,
      });
    },
    [dispatch]
  );
  const logout = useCallback(() => {
    dispatch({
      type: actionTypes.SET_ROLE,
      role: null,
    });
    dispatch({
      type: actionTypes.SET_USER_ID,
      userId: null,
    });
    dispatch({
      type: actionTypes.SET_TOKEN,
      token: null,
    });
    cookie.remove("jwt");
    history.replace("/");
  }, [dispatch, history]);
  const setCookieLogin = useCallback(() => {
    const jwt = cookie.get("jwt");
    if (jwt) {
      const { role, token, userId } = JSON.parse(
        jwt.split(":").splice(1, 4).join(":")
      );
      if (role && token && userId) {
        login(role, userId, token);
      }
    }
  }, [login]);
  return { login, logout, setCookieLogin };
};
