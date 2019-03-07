import React from 'react';
import {ProgressBar, Form, Container} from 'react-bootstrap';
import './style.css';

import {strengthIndicator, strengthColor, getVariant,getpasswordStrength} from './strength-password';

export default function PasswordInput(props) {

    const strength = strengthIndicator(props.value);
    const color = strengthColor(strength);
    const variant = getVariant(strength);
	const passwordStrength= getpasswordStrength(strength);

    return (
   
        <Container> 
          <marquee>Know your password strength</marquee>		
            <Form>
                <Form.Group controlId="formBasicPassword">
                
                <label class="labelText">Password</label>
                <input  class='pwd' type='password'
                    value={props.value}
                    className='password-input'
                    placeholder={props.placeholder}
                    onChange={props.handleChanges}  
                    style={{
                        borderColor: color
                    }}
					onFocus={props.onFocus}
                />
				{
					props.showPasswordStrength &&
					<span class="spanText" style={{color}}>{passwordStrength}</span>
				}				
                </Form.Group>
                <ProgressBar min={0} max="4" variant={variant} now={strength} /> 
            </Form>          
        </Container>
                    
    )
}