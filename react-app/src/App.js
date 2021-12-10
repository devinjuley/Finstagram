import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavigationBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import Discover from './components/DiscoverPage/DiscoverPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import Splash from './components/SplashPage/Splash';
import MainFeed from './components/MainFeed/MainFeed';
import { authenticate } from './store/session';


function App() {
  const history = useHistory();
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user)

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }
  if (sessionUser?.id) {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          {/* <Route path='/login' exact={true}>
            <LoginForm />
          </Route>
          <Route path='/signup' exact={true}>
            <SignUpForm />
          </Route> */}
          <Route path='/posts/discover' exact={true}>
            <Discover />
          </Route>
          <ProtectedRoute path='/users' exact={true} >
            <UsersList />
          </ProtectedRoute>
          <ProtectedRoute path='/users/:userId' exact={true} >
            <ProfilePage />
          </ProtectedRoute>
          <Route path='/'>
            <MainFeed />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  } else {
    history.push('/');
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/signup' exact={true}>
            <SignUpForm />
          </Route>
          <Route path='/'>
            <Splash />
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }

}

export default App;
