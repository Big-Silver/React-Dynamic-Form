import React from 'react';
import ReactJson from 'react-json-view';

const JsonView = ({ src, theme = 'monokai' }) => {
  return <ReactJson theme={theme} src={src} />;
};

export default JsonView;
