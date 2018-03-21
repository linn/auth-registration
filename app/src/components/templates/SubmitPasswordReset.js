import React, { Component } from 'react';
import { TextInput, Button, ControlGroup, Header, Container, ErrorMessage, Processing } from '../common';

class SubmitPasswordReset extends Component {

    render() {
        document.title = 'Reset your password | Linn';

        const { processing, password, password2, errors, onSubmit, onPasswordChange, onPassword2Change } = this.props;

        return (
            <Container>
                <Header caption="Password Reset" />
                <form onSubmit={onSubmit}>
                    {errors.passwordReset && <ErrorMessage message={errors.passwordReset} />}
                    <ControlGroup>
                        <TextInput
                            autofocus={true}
                            type="password"
                            name="password"
                            caption="New Password"
                            placeholder="Your new password"
                            value={password}
                            onChange={onPasswordChange}
                            error={errors.password}
                            disabled={processing} />
                    </ControlGroup>
                    <ControlGroup>
                        <TextInput
                            type="password"
                            name="password2"
                            caption="Repeat New Password"
                            placeholder="Repeat your new password"
                            value={password2}
                            onChange={onPassword2Change}
                            error={errors.password2}
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

export default SubmitPasswordReset;