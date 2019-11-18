import React, { useContext, useReducer, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import TestWord from "./screens/TestWord";
import TestPhrase from "./screens/TestPhrase";
import Login from "./screens/Login";
import Add from './screens/Add';
import AddPhrases from './screens/AddPhrases';

import AppContext from "./context/context";
import AppReducer from "./context/reducer";

import firebase from "./firebase/firebase";

const App = () => {
  const initState = useContext(AppContext);
  const [state, dispatch] = useReducer(AppReducer, initState);

  const history = useHistory();

  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        dispatch({ type: "LOGIN", payload: user });
        history.push("/");
      } else {
        dispatch({ type: "LOGOUT" });
      }
    });
    return () => unsubscribe();
  }, [])

  useEffect(() => {
    firebase.db
      .collection("words")
      .orderBy("created", "desc")
      .get()
      .then(querySnapshot => {
        const words = [];
        // console.log(querySnapshot);
        querySnapshot.forEach(doc => {
          const { created, english, polish, point } = doc.data();
          words.push({
            id: doc.id,
            created,
            english,
            polish,
            point
          });
        });
        //add to context
        dispatch({ type: "SET_WORDS", payload: words });
      })
      .catch(err => {
        console.log(err);
      });
  }, [])

  useEffect(() => {
    firebase.db
      .collection("phrases")
      .orderBy("created", "desc")
      .get()
      .then(querySnapshot => {
        const phrases = [];
        querySnapshot.forEach(doc => {
          const { created, english, polish, point } = doc.data();
          phrases.push({
            id: doc.id,
            created,
            english,
            polish,
            point
          });
        });
        //add to context
        dispatch({ type: "SET_PHRASES", payload: phrases });
      })
      .catch(err => {
        console.log(err);
      });
  }, [])


  return (
    <>
      <AppContext.Provider value={{ state, dispatch }}>
        <Header>Fiszki - nauka słówek i zwrotów</Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/testWord/:method" component={TestWord} />
          <Route path="/testPhrase/:method" component={TestPhrase} />
          <Route path="/login" component={Login} />
          <Route path="/add" component={Add} />
          <Route path="/addphrases" component={AddPhrases} />
        </Switch>
        <Footer />
      </AppContext.Provider>
    </>
  );
};

export default App;
