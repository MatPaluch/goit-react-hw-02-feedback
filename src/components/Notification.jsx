import { Children, Component } from "react";
import PropTypes from "prop-types";

export default class Section extends Component {
  static propTypes = {
    message: PropTypes.string,
  };

  render() {
    return (
      <>
        <p>No feedback given.</p>
      </>
    );
  }
}
