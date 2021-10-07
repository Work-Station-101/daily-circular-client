import PropTypes from 'prop-types';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import CircularModal from '../circular-modal/CircularModal';
import CircularPreviewCardFooter from './CircularPreviewCardFooter';
import CircularPreviewCardHeader from './CircularPreviewCardHeader';

import './index.css';

const CircularPreviewCard = ({
  circular,
}) => {
  const [showCircularModel, setShowCircularModel] = useState(false);

  return (
    <div className='cpc-div'>
      <Card>
        <Card.Header className='cpc-header'>
          <CircularPreviewCardHeader
            title={circular.title}
            createdBy={circular.createdBy}
            postedOn={circular.createdAt}
          />
        </Card.Header>
        <Card.Body>
          <div dangerouslySetInnerHTML={{ __html: circular.body }} />
        </Card.Body>
        <Card.Footer className='cpc-footer'>
          <CircularPreviewCardFooter
            meta={circular.meta}
            commentCount={circular.comments.length}
            onClickViewButton={() => { }}
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
  circular: PropTypes.object.isRequired,
};

export default CircularPreviewCard;
