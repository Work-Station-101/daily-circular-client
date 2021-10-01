import PropTypes from 'prop-types';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import CircularModal from '../circular-modal/CircularModal';
import CircularPreviewCardFooter from './CircularPreviewCardFooter';
import CircularPreviewCardHeader from './CircularPreviewCardHeader';

import './index.css';

const CircularPreviewCard = ({
  circularId,
}) => {
  const [circular, setCircular] = useState(null);
  const [showCircularModel, setShowCircularModel] = useState(false);

  return (
    <div className='cpc-div'>
      <Card>
        <Card.Header className='cpc-header'>
          <CircularPreviewCardHeader />
        </Card.Header>
        <Card.Body>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
            With supporting text below as a natural lead-in to additional content.
            With supporting text below as a natural lead-in to additional content.
            With supporting text below as a natural lead-in to additional content.
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
        </Card.Body>
        <Card.Footer className='cpc-footer'>
          <CircularPreviewCardFooter 
            onClickViewButton={() => setShowCircularModel(true)}
          />
        </Card.Footer>
      </Card>
      <CircularModal 
        showModal={showCircularModel}
        handleClose={() => setShowCircularModel(false)}
        circular={circular}
      />
    </div>
  );
};

CircularPreviewCard.propTypes = {
  circularId: PropTypes.string,
};

export default CircularPreviewCard;
