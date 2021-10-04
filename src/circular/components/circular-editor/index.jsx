import React, { useEffect, useState } from 'react';
import { ContentState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

import './index.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { CircularConfig } from '../../../config';

const CircularEditor = ({

}) => {
  const [title, setTitle] = useState(CircularConfig.initialTitile);
  let _contentState = ContentState.createFromText(CircularConfig.initialText);
  const raw = convertToRaw(_contentState);
  const [contentState, setContentState] = useState(raw);

  useEffect(() => {
  }, [contentState, raw]);

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
