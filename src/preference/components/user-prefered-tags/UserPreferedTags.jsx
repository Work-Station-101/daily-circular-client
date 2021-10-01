import PropTypes from 'prop-types';
import { FaTrashAlt } from 'react-icons/fa';

const UserPreferedTags = ({
  userPreferedTagsList,
  handleRemovePreference,
}) => {
  return (
    <div className='pref-user-prefered-tags-div'>
      {
        userPreferedTagsList.map((tagName) => (
          <div key={tagName} className='pref-user-prefered-tag'>
            <div>{tagName}</div>
            <div>
              <button
                className='pref-user-prefered-tag-delete-btn'
                onClick={() => handleRemovePreference(tagName)}
              >
                <FaTrashAlt size='10pt' />
              </button>
            </div>
          </div>
        ))
      }
    </div>
  );
};

UserPreferedTags.propTypes = {
  userPreferedTagsList: PropTypes.array.isRequired,
  handleRemovePreference: PropTypes.func.isRequired,
};

export default UserPreferedTags;
