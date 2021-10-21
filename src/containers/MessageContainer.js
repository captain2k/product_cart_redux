import { Component } from "react";
import { connect } from "react-redux";
import Message from "../Components/Message";
import PropTypes from 'prop-types';


class MessageContainer extends Component {
    render() {
        var { message } = this.props
        return (
            <Message message={message} />
        );
    }
}

MessageContainer.propType = {
    message: PropTypes.string.isRequired
}

const mapStateToProps = state => {
    return {
        message: state.message
    }
}

export default connect(mapStateToProps, null)(MessageContainer);