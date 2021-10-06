import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { useHistory } from 'react-router-dom';
import { ContentState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import uuid from 'react-uuid';
import draftToHtml from 'draftjs-to-html';

import './index.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import AddTags from './circular-tags/CircularTags';
import { CircularConfig, RouteUrls } from '../../config';
import CircularService from '../../circular/service';

const CircularEditor = ({
  allTags = [
    { _id: '1', tagName: 'Job' },
    { _id: '2', tagName: 'Admission' },
    { _id: '3', tagName: 'House rent' },
    { _id: '4', tagName: 'Govt Job' },
    { _id: '5', tagName: 'X' },
    { _id: '6', tagName: 'y' },
    { _id: '7', tagName: 'z' },
  ]
}) => {
  const [title, setTitle] = useState(CircularConfig.initialTitile);
  const [tagList, setTagList] = useState(allTags || []);
  const [selectedTags, setSelectedTags] = useState([]);
  let _contentState = ContentState.createFromText(CircularConfig.initialText);
  const raw = convertToRaw(_contentState);
  const [contentState, setContentState] = useState(raw);

  const alert = useAlert();
  const history = useHistory();

  useEffect(() => {
  }, [contentState, raw]);

  const onTagChange = (e) => {
    const newTag = e.target.value;
    const newTagId = tagList.find((tag) => tag.tagName === newTag)?._id;
    setSelectedTags([...selectedTags, tagList.find((tag) => tag._id === newTagId)]);
    setTagList(tagList.filter((tag) => tag._id !== newTagId));
  };

  const onRemoveTag = (tagName) => {
    const tagToRemove = allTags.find((tag) => tag.tagName === tagName);
    if (!tagToRemove) {
      return;
    }
    setSelectedTags(selectedTags.filter((tag) => tag._id !== tagToRemove._id));
    if (!tagList.find((tag) => tag._id === tagToRemove._id)) {
      setTagList([...tagList, tagToRemove]);
    }
  };

  const onSubmit = () => {
    CircularService.createOrUpdateCircular({
      guid: uuid(),
      title,
      body: draftToHtml(contentState).toString(),
      tags: selectedTags.map((tag) => tag.tagName),
    }).then(() => {
      alert.success('Circulat has been posted successfully!');
    }).finally(() => {
      history.push(RouteUrls.myCirculars);
    });
  };

  return (
    <div className='ce-container'>
      <div className='ce-title'>
        <input
          className='ce-title-in'
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <AddTags
        tagList={tagList}
        selectedTags={selectedTags}
        onTagChange={onTagChange}
        onRemoveTag={onRemoveTag}
      />
      <Editor
        defaultContentState={contentState}
        onContentStateChange={setContentState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
      <div className='ce-pub'>
        <button
          className='ce-pub-btn'
          onClick={onSubmit}
        >
          <strong>Publish</strong>
        </button>
      </div>
    </div>
  );
};

export default CircularEditor;
