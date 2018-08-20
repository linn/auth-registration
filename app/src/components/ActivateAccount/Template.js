import React from 'react';
import { TextInput, Button, Cancel, ControlGroup, Header, Container, ErrorMessage, Processing } from '../common';

class Template extends React.Component {

    render() {
        const { processing, activationCode, errors, onSubmit, onActivationCodeChange, embedded, returnUrl } = this.props;

        document.title = 'Register for a Linn account | Linn';

        return (
            <Container embedded={embedded} >
                <Header caption="Activate your account" />

                <p>Before you can log in, we need to verify your email address.</p>

                <p>You should shortly receive a email from us containing a six-character activation code.</p>

                <p>Enter the code below to activate your account.</p>

                <form onSubmit={onSubmit}>
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
                    {errors.server && <ErrorMessage message={errors.server} />}
                    <ControlGroup padding="30px">
                        {processing
                            ? <Processing embedded={embedded} />
                            : <React.Fragment>
                                <Button caption="Submit" type="submit" disabled={processing} embedded={embedded} />
                                {returnUrl && <span style={{ marginTop: '30px', display: 'block' }}>Or return to the <a href={returnUrl}>login page</a>.</span>}
                            </React.Fragment>
                        }
                    </ControlGroup>
                </form>
            </Container>
        );
    }
}

export default Template;