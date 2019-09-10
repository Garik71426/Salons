import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyCE723-OL8hsSGdbwe7yEn8FJG9fMYt3ic',
    authDomain: 'beautysalon-32253.firebaseapp.com',
    databaseURL: 'https://beautysalon-32253.firebaseio.com',
    projectId: 'beautysalon-32253',
    storageBucket: 'beautysalon-32253.appspot.com',
    messagingSenderId: '36265934266',
    appId: '1:36265934266:web:ce2a9cab4fcb45cef03183'
    // ...
  };
  firebase.initializeApp(config);
   
  class SignIn extends React.Component {
   
    // The component's Local state.
    state = {
      isSignedIn: false // Local signed-in state.
    };
   
    // Configure FirebaseUI.
    uiConfig = {
      // Popup signin flow rather than redirect flow.
      signInFlow: 'popup',
      // We will display Google and Facebook as auth providers.
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: () => false
      }
    };
   
    // Listen to the Firebase Auth state and set the local state.
    componentDidMount() {
      this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
          (user) => this.setState({isSignedIn: !!user})
      );
    }
    
    // Make sure we un-register Firebase observers when the component unmounts.
    componentWillUnmount() {
      this.unregisterAuthObserver();
    }
    deleteAllCookies = () => {
        const cookies = document.cookie.split(";");
    
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i];
            let eqPos = cookie.indexOf("=");
            let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    }
   
    render() {
      if (!this.state.isSignedIn) {
        return (
          <div>
            <h1>My App</h1>
            <p>Please sign-in:</p>
            <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
          </div>
        );
      }
      return (
        <div>
          <h1>My App</h1>
          <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
          <a onClick={() => {
              firebase.auth().signOut();
              this.deleteAllCookies();
              localStorage.clear();
              this.setState({isSignedIn:false})
            }}>Sign-out</a>
        </div>
      );
    }
  }

  export default SignIn;