import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Provider } from "react-redux";

import "./App.css";

import HeaderComponent from "./components/HeaderComponent";
import HomePage from "../src/pages/HomePage";
import PersonalListPage from "../src/pages/PersonalListPage";
import NavbarComponent from "../src/components/NavbarComponent";
import DailyAttendancePage from "../src/pages/DailyAttendancePage";
import store from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <HeaderComponent />
          <Row>
            <Col sm={2}>
              <NavbarComponent />
            </Col>
            <Col sm={10}>
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route path="/personal-list">
                  <PersonalListPage />
                </Route>
                <Route path="/daily">
                  <DailyAttendancePage />
                </Route>
              </Switch>
            </Col>
          </Row>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
