
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Form } from 'react-bootstrap';

import './index.css';

import UserPreferedTags from './user-prefered-tags/UserPreferedTags';
import { PreferenceConfig } from '../../config';

const Preference = ({
  circularTagList,
}) => {
  const [userPreferedTagsList, setUserPreferedTagsList] = useState([
    'Job',
  ]);
  const [selectedTag, setSelectedTag] = useState('');

  useEffect(() => {
    if (selectedTag !== '') {
      const tagSet = new Set(userPreferedTagsList);
      tagSet.add(selectedTag);
      setUserPreferedTagsList([...tagSet]);
      setSelectedTag('');
    }
  }, [selectedTag]);

  const handlePreferenceSelection = (e) => {
    e.preventDefault();
    setSelectedTag(e.target.value);
  };

  const handleRemovePreference = (tagName) => {
    if (tagName === '' || tagName === PreferenceConfig.default) {
      return;
    }
    const tagSet = new Set(userPreferedTagsList);
    tagSet.delete(tagName);
    setUserPreferedTagsList([...tagSet]);
  };

  const renderCircularTagOptions = () => {
    return (
      <Form.Select
        size='sm'
        value={selectedTag}
        onChange={handlePreferenceSelection}
      >
        <option>{PreferenceConfig.default}</option>
        {
          circularTagList
            .filter((circularTag) => !userPreferedTagsList.includes(circularTag.tagName))
            .map((circularTag) => (
              <option key={circularTag._id}>{circularTag.tagName}</option>
            ))
        }
      </Form.Select>
    );
  };

  return (
    <Container className='pref-container'>
      {renderCircularTagOptions()}
      <UserPreferedTags
        userPreferedTagsList={userPreferedTagsList}
        handleRemovePreference={handleRemovePreference}
      />
    </Container>
  );
};

Preference.propTypes = {
  circularTagList: PropTypes.array.isRequired,
};

export default Preference;