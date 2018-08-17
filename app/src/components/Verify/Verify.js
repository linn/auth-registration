import React from 'react';
import PendingTemplate from './PendingTemplate';
import SuccessTemplate from './SuccessTemplate';
import FailureTemplate from './FailureTemplate';
import { verify } from '../../actions';
import { getSuccess, getSuccessPath } from '../../helpers';

class Verify extends React.Component {

    state = {
        error: '',
        pending: true
    };

    render() {
        document.title = 'Verify your email | Linn';

        return this.state.pending
            ? <PendingTemplate />
            : getSuccess(this.props.location.search)
                ? <SuccessTemplate />
                : <FailureTemplate error={this.state.error} />;
    }

    componentDidMount() {
        const { location, match, history } = this.props;

        setTimeout(() => verify(match.params.id).then(result => {
            if (result.success) {
                history.push(getSuccessPath(location));
                this.setState({ pending: false });
            }
            else {
                const error = result.error.message || 'Sorry, we were unable to process your request.';
                this.setState({ pending: false, error });
            }
        }), 1000);
    }
}

export default Verify;