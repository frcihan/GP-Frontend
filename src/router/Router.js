import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Main from "../pages/Main";

import Navbar from "../components/Navbar";

function AppRouter() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/login" component={Login} />
        {/* <Route exact path="/forgot-password" component={ForgotPassword} /> */}
        {/* <Route
          exact
          path="/user/:id"
          component={currentUser ? UserDetail : Signin}
        />
        <Route
          exact
          path="/user/:id/post"
          component={currentUser ? UserPost : Signin}
        /> */}
        <Route path="/" component={Main} />
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default AppRouter;