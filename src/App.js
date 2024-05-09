import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import Header from "./component/Header/Header";
import MainPage from "./component/Pages/MainPage";
import UserPage from "./component/Pages/UserPage";
import { Fragment } from "react";

const App = () => {
  const [items, setitems] = useState([]); //Array of items get from api
  const [user, setuser] = useState({}); //Arraye of user

  useEffect(() => {
    //get all of users from api
    const getItems = async (items) => {
      await axios.get("https://api.github.com/users").then((res) => {
        setitems(res.data);
      });
    };
    getItems();
  }, []);

  const getUser = async (username) => {
    //get info of user
    const res = await axios.get(`https://api.github.com/users/${username}`);
    setuser(res.data);
  };

  return (
    <Router>
      <div>
        {/* Header of page */}
        <Header />

        {/* all of users */}
        <Route
          exact
          path="/"
          render={() => (
            <Fragment>
              <MainPage items={items} />
            </Fragment>
          )}
        />

        {/* user page */}
        <Route
          exact
          path="/user/:login"
          render={(props) => (
            <UserPage {...props} getUser={getUser} user={user} />
          )}
        />
      </div>
    </Router>
  );
};

export default App;
