import { transitions, positions } from 'react-alert';

const alertOptions = {
  position: positions.TOP_CENTER,
  timeout: 2000,
  offset: '30px',
  transition: transitions.SCALE,
  containerStyle: {
    zIndex: 100,
  },
}

export default alertOptions;
