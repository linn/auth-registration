import React, { Component } from 'react';
import { TextInput, Button, ControlGroup, Header, Container, ErrorMessage, Processing } from '../common';

class RequestPasswordReset extends Component {

    render() {
        document.title = 'Reset your password | Linn';

        const { processing, email, errors, onSubmit, onEmailChange, } = this.props;

        return (
            <Container>
                <Header caption="Password Reset" />
                <p>Enter your email address below, and we'll send you a link to reset your password.</p>
                <form onSubmit={onSubmit}>
                    {errors.passwordReset && <ErrorMessage message={errors.passwordReset} />}
                    <ControlGroup>
                        <TextInput
                            autofocus={true}
                            type="email"
                            name="username"
                            caption="Email Address"
                            placeholder="Your email address"
                            value={email}
                            onChange={onEmailChange}
                            error={errors.email}
                            disabled={processing} />
                    </ControlGroup>
                    <ControlGroup padding="30px">
                        {processing
                            ? <Processing />
                            : <Button caption="Submit" type="submit" disabled={processing} />
                        }
                    </ControlGroup>
                </form>
            </Container>
        );
    }
}

export default RequestPasswordReset;