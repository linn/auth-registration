import React, { Component } from 'react';
import { TextInput, Button, Cancel, ControlGroup, Header, Container, ErrorMessage, Processing } from '../common';

class RegisterSuccess extends Component {

    render() {
        document.title = 'Register for a Linn account | Linn';

        const { processing, activationCode, errors, onSubmit, onActivationCodeChange, embedded, returnUrl } = this.props;

        return (
            <Container embedded={embedded} >
                <Header caption="Thanks!" />

                <p>We've created your account.</p>

                <p>Before you can login, you need to verify your email address.</p>

                <p>You should shortly receive a email from us containing a six-character activation code.</p>

                <p>Enter the code below to activate your account.</p>

                <form onSubmit={onSubmit}>
                    {errors.registration && <ErrorMessage message={errors.registration} />}
                    <ControlGroup>
                        <TextInput
                            autofocus={true}
                            type="text"
                            name="activationCode"
                            caption="Activation Code"
                            placeholder="Six-character activation code"
                            value={activationCode}
                            onChange={onActivationCodeChange}
                            error={errors.activationCode}
                            disabled={processing}
                            embedded={embedded} />
                    </ControlGroup>
                    <ControlGroup padding="30px">
                        {processing
                            ? <Processing embedded={embedded} />
                            : <React.Fragment>
                                <Button caption="Submit" type="submit" disabled={processing} embedded={embedded} />
                                {returnUrl && <span style={{marginTop:'30px', display: 'block'}}>Or return to the <a href={returnUrl}>login page</a>.</span>}
                            </React.Fragment>
                        }
                    </ControlGroup>
                </form>
            </Container>
        );
    }
}

export default RegisterSuccess;