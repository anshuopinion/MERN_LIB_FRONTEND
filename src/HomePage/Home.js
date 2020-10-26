import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../store";

function Home() {
  const history = useHistory();
  const [{ token, role }] = useStateValue();

  useEffect(() => {
    const redirector = () => {
      role === "student" && token && history.replace("/student");
      role === "teacher" && token && history.replace("/teacher");
      role === "admin" && token && history.replace("/admin");
      role === null && token === null && history.replace("/");
    };
    redirector();
  }, [history, role, token]);

  return (
    <div>
      Home
      <Link to="/admin-login"> Admin Login</Link>
      <Link to="/teacher-login"> Teacher Login</Link>
      <Link to="/student-login"> Student Login</Link>
    </div>
  );
}

export default Home;
