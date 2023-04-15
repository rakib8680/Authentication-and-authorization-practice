
import './App.css'
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut } from "firebase/auth";
import app from './firebase.config';
import { useState } from 'react';



const googleProvider = new GoogleAuthProvider();

const githubProvider = new GithubAuthProvider();

const auth = getAuth(app)

function App() {

  const [user, setUser] = useState(null)

  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const loggedUser = result.user
        setUser(loggedUser)
        console.log(loggedUser)
      })
      .catch(error => {
        console.log(error)
      })
  };

  const githubSignIn = () => {
    signInWithPopup(auth, githubProvider)
    .then(result =>{
      const loggedUser = result.user
      console.log(loggedUser)
      setUser(loggedUser)
    })
    .catch(err =>{ 
      console.log(err);
    })
  }


  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null)
      })
      .catch(error => {
        console.log(error)
      })

  }

  return (
    <div className="App">

      <div>
        <h3>{user?.displayName}</h3>
        <p>{user?.email}</p>
        <img src={user?.photoURL} />
      </div>

      {
        user ?
          <button onClick={handleSignOut}> Sign Out</button> :

          <>
            <button onClick={googleSignIn}>Google</button>
            <button onClick={githubSignIn}>GitHub</button>
          </>
      }

    </div >
  )
}

export default App
