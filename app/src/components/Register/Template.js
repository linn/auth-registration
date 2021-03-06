import React from 'react';
import { TextInput, Button, Cancel, ControlGroup, Header, Container, ErrorMessage, Processing } from '../common';
import PrivacyLink from './PrivacyLink';
class Template extends React.Component {

    render() {
        const { processing, email, password, password2, errors, onSubmit, onEmailChange, onPasswordChange, onPassword2Change, embedded, returnUrl } = this.props;

        document.title = 'Register for a Linn account | Linn';

        return (
            <Container embedded={embedded} >
                <Header caption="Register" />
                <form onSubmit={onSubmit}>
                    {errors.server && <ErrorMessage message={errors.server} />}
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
                    <p>By clicking “Register” below, you confirm that you understand and agree to our <PrivacyLink embedded={embedded} />.</p>
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

export default Template;