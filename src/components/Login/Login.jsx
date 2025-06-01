import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

import { auth } from "../../fairbase/fairbase.init";

import { useState } from "react";

const Login = () => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);

  const handleSingIn = () => {
    // console.log("ok");
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleLogout = () => {
    signOut(auth)
      .then((auth) => {
        console.log(auth);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(user);
  return (
    <div>
      {/* <button onClick={handleSingIn}>Sing In With Goggle</button>
      <button onClick={handleLogout}>Logout </button> */}
      {user ? (
        <button onClick={handleLogout}>Logout </button>
      ) : (
        <button onClick={handleSingIn}>Sing In With Goggle</button>
      )}
      {user && (
        <div>
          <h1>{user?.name}</h1>
          <p>{user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
