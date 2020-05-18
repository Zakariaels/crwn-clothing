import React from 'react';

//components
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

//firebase
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

//styles
import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
  } from './sign-in.styles';

//----------------------SignIn Class------------------------------------
class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
//----------------------------FUNCTIONS---------------------------------
    //handleSubmit function --------------------------------------------
    handleSubmit = async(event) => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            // This will clear the inputs
            this.setState( { email: '', password: '' } )
        } catch(error) {
            console.log(error.message);
            alert(error.message);
        }
    }

    //handleChange function -------------------------------------------
    handleChange = event => {
        const { value, name } = event.target;
        this.setState( { [ name ]: value } )
    }
//------------------------RENDERING--------------------------------
    render() {
        return(
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>
                <form onSubmit = { this.handleSubmit } > 
                    <FormInput 
                            name = 'email' 
                            type = 'email' 
                            value = {this.state.email} 
                            label = 'Email'
                            handleChange = { this.handleChange }
                            required/>
                    <FormInput 
                            name = 'password' 
                            type = 'password' 
                            value = {this.state.password} 
                            label = 'Password'
                            handleChange = { this.handleChange }
                            required/>
                    <ButtonsBarContainer>
                        <CustomButton type = 'submit'> Sign In </CustomButton>
                        <CustomButton onClick = { signInWithGoogle }  isGoogleSignin > Sign in with Google </CustomButton>
                    </ButtonsBarContainer>
                
                </form>
            </SignInContainer>
            
        )
    }
}

export default SignIn;