import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.producer}</li>
          <li>{this.props.hasWatermark}</li>
          <li>{this.props.color}</li>
          <li>{this.props.weight}</li>
        </ul>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
};

function weightValid(props, propName, componentName) {
  let value = props[propName];
  if (!value) {
    return new Error('Weight must exist.')
  }
  else if (typeof value !== 'number') {
    return new Error('Weight must be a number.')
  }
  else if (!(value >= 80 && value <= 100)) {
    return new Error('Weight is out of range.')
  }
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: weightValid
};

export default Product;
