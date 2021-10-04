import React, { useEffect, useState } from 'react';
import { ContentState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

import './index.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import AddTags from './circular-tags/CircularTags';
import { CircularConfig } from '../../config';

const CircularEditor = ({
  allTags=[
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
  const [selectedTagIds, setSelectedTagIds] = useState([]);
  let _contentState = ContentState.createFromText(CircularConfig.initialText);
  const raw = convertToRaw(_contentState);
  const [contentState, setContentState] = useState(raw);

  useEffect(() => {
  }, [contentState, raw]);

  const onTagChange = (e) => {
    const newTag = e.target.value;
    const newTagId = tagList.find((tag) => tag.tagName === newTag)?._id;
    const tagIds = new Set(selectedTagIds);
    tagIds.add(newTagId);
    setSelectedTagIds([...tagIds]);
    setTagList(tagList.filter((tag) => tag._id !== newTagId));
  };

  const onRemoveTag = (tagName) => {
    const tagToRemove = allTags.find((tag) => tag.tagName === tagName);
    if (!tagToRemove) {
      return;
    }
    setSelectedTagIds(selectedTagIds.filter((tagId) => tagId !== tagToRemove._id));
    if (!tagList.find((tag) => tag._id === tagToRemove._id)) {
      setTagList([...tagList, tagToRemove]);
    }
  };

  const onSubmit = () => {
    console.log(title, raw);
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
        selectedTags={allTags.filter((tag) => selectedTagIds.includes(tag._id))}
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
