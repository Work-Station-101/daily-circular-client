import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

import Login from './layout/pages/login/Login';
import Register from './layout/pages/register/Register';
import TopNavbar from './layout/components/top-navbar/TopNavbar';
import SidebarLeft from './layout/components/sidebar-left/SidebarLeft';
import ContentColumn from './content-column/ContentColumn';
import SidebarRight from './layout/components/sidebar-right/SidebarRight';
import { RouteUrls } from './config';
import React from 'react';

function App() {
  return (
    <div className='App'>
      <Container fluid className='main-container'>
        <BrowserRouter>
        <Switch>
          <Route exact path={RouteUrls.login} component={Login} />
          <Route exact path={RouteUrls.registration} component={Register} />
          <Route
            path={RouteUrls.base}
            render={() => (
              <React.Fragment>
                <Row className='top-navbar-row'>
                  <TopNavbar />
                </Row>
                <Row className='main-content-row'>
                  <SidebarLeft />
                  <ContentColumn />
                  <SidebarRight />
                </Row>
              </React.Fragment>
            )}
          />
          </Switch>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;