import React from 'react';

class PrivacyLink extends React.Component {
    render() {
        const { embedded } = this.props;

        return embedded
            ? <a href={`/privacy?embedded=true`}>privacy policy</a>
            : <a href="/privacy" target="_blank">privacy policy</a>;
    }
}

export default PrivacyLink;