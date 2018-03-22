import React, { Component } from 'react';
import { TextInput, Button, ControlGroup, Header, Container, ErrorMessage, Processing } from '../common';

class SubmitPasswordReset extends Component {

    render() {
        document.title = 'Reset your password | Linn';

        const { processing, password, password2, errors, onSubmit, onPasswordChange, onPassword2Change, embedded } = this.props;

        return (
            <Container embedded={embedded} >
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
                            disabled={processing}
                            embedded={embedded} />
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
                            disabled={processing}
                            embedded={embedded} />
                    </ControlGroup>
                    <ControlGroup padding="30px">
                        {processing
                            ? <Processing embedded={embedded} />
                            : <Button caption="Submit" type="submit" disabled={processing} embedded={embedded} />
                        }
                    </ControlGroup>
                </form>
            </Container>
        );
    }
}

export default SubmitPasswordReset;