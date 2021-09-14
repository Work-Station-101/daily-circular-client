import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row } from 'react-bootstrap';

import TopNavbar from './top-navbar/TopNavbar';
import SidebarLeft from './sidebar-left/SidebarLeft';
import ContentColumn from './content-column/ContentColumn';
import SidebarRight from './sidebar-right/SidebarRight';

function App() {
  return (
    <div className="App">
      <Container fluid className='main-container'>
        <Row className='top-navbar-row'>
          <TopNavbar />
        </Row>
        <Row className='main-content-row'>
          <SidebarLeft />
          <ContentColumn />
          <SidebarRight />
        </Row>
      </Container>
    </div>
  );
}

export default App;