import { useState, useCallback } from "react";
import axios from "../axios";
export const useHttpClient = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async (url, method, data = null, headers = {}) => {
      try {
        setLoading(true);
        const responseData = await axios({
          method,
          url,
          data,
          headers,
        });
        setLoading(false);
        return responseData;
      } catch (err) {
        setLoading(false);
        if (err.response) {
          setError(err.response.data.message || "some thing went wrong");
          throw err;
        } else {
          setError("some thing went wrong");
          throw err;
        }
      }
    },
    []
  );

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return { loading, error, sendRequest, clearError };
};
