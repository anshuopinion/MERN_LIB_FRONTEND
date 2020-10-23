import React from "react";
import { useAuth } from "../hooks/auth-hooks";

function Admin() {
  const { logout } = useAuth();
  return (
    <div>
      admin <button onClick={logout}>logout</button>
    </div>
  );
}

export default Admin;
