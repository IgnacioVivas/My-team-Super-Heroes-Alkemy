import './App.css'
import './assets/styles/App.scss'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import HeroContextProvider from './context/HeroContext'
import LoginContextProvider from './context/LoginContext'
import MyTeam from './components/MyTeam'


function App() {


  return (
    <LoginContextProvider>
      <HeroContextProvider>
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route exact path='/login' path='/'>
                <Login></Login>
              </Route>
              <Route exact path='/home'>
                <Home></Home>
              </Route>
              <Route exact path='/my-team'>
                <MyTeam></MyTeam>
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </HeroContextProvider>
    </LoginContextProvider>
  )
}

export default App
