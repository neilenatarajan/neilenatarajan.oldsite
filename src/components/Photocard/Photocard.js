import React from 'react';
import PropTypes from 'prop-types';

function Photocard({ src, }) {
  return (
    <div className="photocard pagecard">
      <p>{src}</p>
    </div>
  );
}

Photocard.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Photocard;
