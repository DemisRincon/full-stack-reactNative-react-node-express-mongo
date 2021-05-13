import Home from "../../index";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

export default connect(
  ({}) => ({}),
  (dispatch) => bindActionCreators({}, dispatch)
)(Home);
