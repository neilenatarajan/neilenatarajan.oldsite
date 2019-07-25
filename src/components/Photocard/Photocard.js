import React from 'react';
import PropTypes from 'prop-types';

function Photocard({ src, }) {
  return (
    <div className="pagecard photocard">
      <div className="photogallery"><p>{src}</p></div>
    </div>
  );
}

Photocard.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Photocard;
