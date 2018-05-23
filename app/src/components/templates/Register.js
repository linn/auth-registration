import React, { Component } from 'react';
import { TextInput, Button, Cancel, ControlGroup, Header, Container, ErrorMessage, Processing } from '../common';

class Register extends Component {

    render() {
        document.title = 'Register for a Linn account | Linn';

        const { processing, email, password, password2, errors, onSubmit, onEmailChange, onPasswordChange, onPassword2Change, embedded, returnUrl } = this.props;

        return (
            <Container embedded={embedded} >
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
                            disabled={processing}
                            embedded={embedded} />
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
                            disabled={processing}
                            embedded={embedded} />
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
                            disabled={processing}
                            embedded={embedded} />
                    </ControlGroup>
                    <ControlGroup>
                        <p>By clicking “Register” below, you confirm that you understand and agree to our <a href="/privacy" target="_blank">privacy policy</a>.</p>
                    </ControlGroup>
                    <ControlGroup>
                        {processing
                            ? <Processing embedded={embedded} />
                            : <React.Fragment>
                                <Button caption="Register" type="submit" disabled={processing} embedded={embedded} />
                                {embedded && returnUrl && <Cancel href={returnUrl} />}
                            </React.Fragment>
                        }
                    </ControlGroup>
                </form>
            </Container>
        );
    }
}

export default Register;