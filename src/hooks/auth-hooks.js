import { useCallback, useEffect } from "react";
import { actionTypes, useStateValue } from "../store";
import cookie from "js-cookie";
export const useAuth = () => {
  const [, dispatch] = useStateValue();

  const setCookieLogin = useCallback(() => {
    const jwt = cookie.get("user");
    if (jwt) {
      const { role, token, userId } = JSON.parse(
        jwt.split(":").splice(1, 4).join(":")
      );
      if (role && token && userId) {
        login(role, userId, token);
      }
    }
  }, []);

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
  }, [dispatch]);
  return { login, logout, setCookieLogin };
};
