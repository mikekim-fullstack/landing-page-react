import React from 'react'
import { Container, FormContent, FormWrap, Form, FormH1, Icon, FormLabel, FormInput, FormButton, Text } from './SigninElements'

const Signin = () => {
    return (

        <Container>
            <FormWrap>
                <Icon to='/'>LaLaSol</Icon>
                <FormContent>
                    <Form action='#'>
                        <FormH1>Sign in your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Forgot password </Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>

    )
}

export default Signin