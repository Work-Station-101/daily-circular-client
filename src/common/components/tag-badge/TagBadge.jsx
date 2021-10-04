import PropTypes from 'prop-types';
import { FaTrashAlt } from 'react-icons/fa';

const TagBadge = ({
  tagName,
  tagClassName,
  deleteBtnClassName,
  onDeleteTag,
  deleteIconSize,
}) => {
  return (
    <div className={tagClassName || 'pref-user-prefered-tag'}>
      <div>{tagName}</div>
      <div>
        <button
          className={deleteBtnClassName || 'pref-user-prefered-tag-delete-btn'}
          onClick={() => onDeleteTag(tagName)}
        >
          <FaTrashAlt size={deleteIconSize || '10pt'} />
        </button>
      </div>
    </div>
  );
};

TagBadge.propTypes = {
  tagName: PropTypes.string.isRequired,
  tagClassName: PropTypes.string,
  deleteBtnClassName: PropTypes.string,
  onDeleteTag: PropTypes.func.isRequired,
  deleteIconSize: PropTypes.string,
};

export default TagBadge;
