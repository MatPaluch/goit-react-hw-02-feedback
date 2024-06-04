import { Children, Component } from "react";
import PropTypes from "prop-types";

export default class Section extends Component {
  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
  };

  render() {
    return (
      <>
        <h1>Statistics</h1>
        <p>
          Good <span>{this.props.good}</span>
        </p>
        <p>
          Neutral <span>{this.props.neutral}</span>
        </p>
        <p>
          Bad <span>{this.props.bad}</span>
        </p>
        <p>
          Total <span>{this.props.total}</span>
        </p>
        <p>
          Positive feedback <span>{this.props.positivePercentage}</span>%
        </p>
      </>
    );
  }
}
