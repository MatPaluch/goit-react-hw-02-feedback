import { Children, Component } from "react";
import PropTypes from "prop-types";

export default class Section extends Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
  };

  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        {this.props.children}
      </>
    );
  }
}
