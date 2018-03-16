import React, { Component } from 'react';
import { TextInput, Button, ControlGroup, Header, Container, ErrorMessage, Processing } from './common';
import isEmail from 'validator/lib/isEmail';
import { register } from '../actions';

class Register extends Component {

    state = {
        email: '',
        password: '',
        password2: '',
        errors: {
            email: '',
            password: '',
            password2: '',
            registration: ''
        },
        processing: false
    }

    render() {
        document.title = 'Register for a Linn account | Linn';

        const { processing, email, password, password2, errors } = this.state;

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
                            onChange={val => this.setState({ email: val })}
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
                            onChange={val => this.setState({ password: val })}
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
                            onChange={val => this.setState({ password2: val })}
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
        const {history} = this.props;

        if (this.validate()) {
            this.setState({ processing: true });

            register(this.state.email, this.state.password).then(result => {
                if (result.success) {
                    history.push('/register/success' + history.location.search);
                }
                else {
                    const message = result.error.hasMessage
                        ? result.error.message
                        : 'Sorry! Something\'s gone wrong.  Please try again later.';

                    this.setState((prev) => ({ ...prev, processing: false, errors: { ...prev.errors, registration: message } }));
                }
            });
        }
    }

    validate() {
        let valid = true;

        const errors = {
            email: '',
            password: '',
            password2: '',
            registration: ''
        }

        if (!this.state.email) {
            errors.email = 'You must specify your email address';
            valid = false;
        }
        else if (!isEmail(this.state.email)) {
            errors.email = 'This doesn\'t seem to be a valid email address';
            valid = false;
        }

        if (!this.state.password) {
            errors.password = 'You must specify a password';
            valid = false;
        }
        else if (this.state.password.length < 8) {
            errors.password = 'Your password must have at least 8 characters';
            valid = false;
        }

        if (!this.state.password2) {
            errors.password2 = 'You must repeat your password';
            valid = false;
        }
        else if (this.state.password && this.state.password !== this.state.password2) {
            errors.password2 = 'The passwords entered don\'t match';
            valid = false;
        }

        this.setState({ errors });

        return valid;
    }
}

export default Register;