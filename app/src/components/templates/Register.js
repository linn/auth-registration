import React, { Component } from 'react';
import { TextInput, Button, ControlGroup, Header, Container, ErrorMessage, Processing } from '../common';

class Register extends Component {

    render() {
        document.title = 'Register for a Linn account | Linn';

        const { processing, email, password, password2, errors, onSubmit, onEmailChange, onPasswordChange, onPassword2Change } = this.props;

        return (
            <Container>
                <Header caption="Register" />
                <form onSubmit={onSubmit}>
                    {errors.registration && <ErrorMessage message={errors.registration} />}
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
                    <ControlGroup>
                        <TextInput
                            type="password"
                            name="password"
                            caption="Password"
                            placeholder="Your password"
                            value={password}
                            onChange={onPasswordChange}
                            error={errors.password}
                            disabled={processing} />
                    </ControlGroup>
                    <ControlGroup>
                        <TextInput
                            type="password"
                            name="password2"
                            caption="Repeat Password"
                            placeholder="Repeat your password"
                            value={password2}
                            onChange={onPassword2Change}
                            error={errors.password2}
                            disabled={processing} />
                    </ControlGroup>
                    <ControlGroup padding="30px">
                        {processing
                            ? <Processing />
                            : <Button caption="Register" type="submit" disabled={processing} />
                        }
                    </ControlGroup>
                </form>
            </Container>
        );
    }
}

export default Register;