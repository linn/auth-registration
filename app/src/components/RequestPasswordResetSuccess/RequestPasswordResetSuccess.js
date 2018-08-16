import React from 'react';
import Template from './Template';
import { getReturnUrl, isEmbedded } from '../../helpers';

class RequestPasswordResetSuccess extends React.Component {

    render() {
        const { location } = this.props;

        return <Template
            embedded={isEmbedded(location.search)}
            returnUrl={getReturnUrl(location.search)}
        />;
    }
}

export default RequestPasswordResetSuccess;