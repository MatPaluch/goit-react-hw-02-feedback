import { Children, Component } from "react";
import PropTypes from "prop-types";

export default class Section extends Component {
  static propTypes = {
    options: PropTypes.object,
  };

  render() {
    return (
      <>
        <button onClick={this.props.options.cGood}>Good</button>
        <button onClick={this.props.options.cNeutral}>Neutral</button>
        <button onClick={this.props.options.cBad}>Baaaad</button>
      </>
    );
  }
}
