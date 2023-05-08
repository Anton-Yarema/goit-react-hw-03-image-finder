import React, { Component } from 'react';
import css from './Button.module.css'
import PropTypes from 'prop-types';

class Button extends Component {
  handleClick = () => {
    this.props.onClick();
  };

  render() {
    return (
      <button className={css.Button} onClick={this.handleClick} type="button">
        Load More
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
}

export default Button;
