import React from 'react';
import { TextInput, Button, Cancel, ControlGroup, Header, Container, ErrorMessage, Processing } from '../common';

class Template extends React.Component {

    render() {
        const { processing, email, errors, onSubmit, onEmailChange, embedded, returnUrl } = this.props;

        document.title = 'Reset your password | Linn';

        return (
            <Container embedded={embedded} >
                <Header caption="Password Reset" />
                <p>Enter your email address below, and we'll send you a link to reset your password.</p>
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
                    <ControlGroup padding="30px">
                        {processing
                            ? <Processing embedded={embedded} />
                            : <React.Fragment>
                                <Button caption="Submit" type="submit" disabled={processing} embedded={embedded} />
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