import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { Container } from 'react-bootstrap';

import Login from './layout/pages/login/Login';
import Register from './layout/pages/register/Register';
import TopNavbar from './layout/components/top-navbar/TopNavbar';
import SidebarLeft from './layout/components/sidebar-left';
import ContentColumn from './layout/components/content-column/ContentColumn';
import SidebarRight from './layout/components/sidebar-right/SidebarRight';
import { alertOptions, RouteUrls } from './config';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <AlertProvider template={AlertTemplate} {...alertOptions}>
      <div className='App'>
        <BrowserRouter>
          <Switch>
            <Route exact path={RouteUrls.login} component={Login} />
            <Route exact path={RouteUrls.registration} component={Register} />
            <Route
              path={RouteUrls.base}
              render={() => (
                <React.Fragment>
                  <div className='top-navbar-row'>
                    <TopNavbar />
                  </div>
                  <Container fluid className='main-content-row'>
                    <SidebarLeft />
                    <ContentColumn />
                    <SidebarRight />
                  </Container>
                </React.Fragment>
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    </AlertProvider>
  );
}

export default App;