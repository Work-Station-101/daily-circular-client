import PropTypes from 'prop-types';
import TagBadge from '../../../common/components/tag-badge/TagBadge';

const UserPreferedTags = ({
  userPreferedTagsList,
  handleRemovePreference,
}) => {
  return (
    <div className='pref-user-prefered-tags-div'>
      {
        userPreferedTagsList.map((tagName) => (
          <TagBadge
            key={tagName}
            tagName={tagName}
            onDeleteTag={handleRemovePreference}
          />
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
