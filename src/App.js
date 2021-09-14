import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

import Login from './authentication/components/login/Login';
import TopNavbar from './layout/components/top-navbar/TopNavbar';
import SidebarLeft from './layout/components/sidebar-left/SidebarLeft';
import ContentColumn from './content-column/ContentColumn';
import SidebarRight from './layout/components/sidebar-right/SidebarRight';
import { RouteUrls } from './config';

function App() {
  return (
    <div className='App'>
      <Container fluid className='main-container'>
        <BrowserRouter>
          <Route exact path={RouteUrls.login} component={Login} />
          <Route
            path={RouteUrls.base}
            render={() => (
              <>
                <Row className='top-navbar-row'>
                  <TopNavbar />
                </Row>
                <Row className='main-content-row'>
                  <SidebarLeft />
                  <ContentColumn />
                  <SidebarRight />
                </Row>
              </>
            )}
          />
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;