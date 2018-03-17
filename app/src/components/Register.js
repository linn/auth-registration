import React, { Component } from 'react';
import { TextInput, Button, ControlGroup, Header, Container, ErrorMessage, Processing } from './common';
import isEmail from 'validator/lib/isEmail';

class Register extends Component {

    render() {
        document.title = 'Register for a Linn account | Linn';

        const { processing, email, password, password2, errors, onEmailChange, onPasswordChange, onPassword2Change } = this.props;

        return (
            <Container>
                <Header caption="Register" />
                <form onSubmit={e => this.handleSubmit(e)}>
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

    handleSubmit(e) {
        e.preventDefault();

        if (this.validate()) {
            this.props.onSubmit();
        }
    }

    validate() {
        const { email, password, password2, onValidate } = this.props;

        let valid = true;

        const errors = {
            email: '',
            password: '',
            password2: '',
            registration: ''
        }

        if (!email) {
            errors.email = 'You must specify your email address';
            valid = false;
        }
        else if (!isEmail(email)) {
            errors.email = 'This doesn\'t seem to be a valid email address';
            valid = false;
        }

        if (!password) {
            errors.password = 'You must specify a password';
            valid = false;
        }
        else if (password.length < 8) {
            errors.password = 'Your password must have at least 8 characters';
            valid = false;
        }

        if (!password2) {
            errors.password2 = 'You must repeat your password';
            valid = false;
        }
        else if (password && password !== password2) {
            errors.password2 = 'The passwords entered don\'t match';
            valid = false;
        }

        onValidate(errors);

        return valid;
    }

}

export default Register;