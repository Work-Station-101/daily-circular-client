import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import TagBadge from '../../../common/components/tag-badge/TagBadge';

const CircularTags = ({
  tagList,
  selectedTags,
  onTagChange,
  onRemoveTag,
}) => {
  return (
    <div className='ce-tags'>
      <Form.Select
        className='ce-tag-selector'
        onChange={onTagChange}
      >
        <option>Add tags</option>
        {
          tagList.map((tag) => (
            <option key={tag._id}>{tag.tagName}</option>
          ))
        }
      </Form.Select>
      <div className='ce-seleted-tags'>
        {
          selectedTags.map((tag) => (
            <TagBadge
              key={tag._id}
              tagName={tag.tagName}
              onDeleteTag={onRemoveTag}
            />
          ))
        }
      </div>
    </div>
  );
};

CircularTags.propTypes = {
  tagList: PropTypes.array.isRequired,
  selectedTags: PropTypes.array.isRequired,
  onTagChange: PropTypes.func.isRequired,
  onRemoveTag: PropTypes.func.isRequired,
};

export default CircularTags;
