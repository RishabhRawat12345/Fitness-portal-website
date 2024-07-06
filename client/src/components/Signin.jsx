import React, { useState } from 'react'
import {Button } from "style-components"
import { styled } from 'styled-components';
import {useDispatch} from "react-redux"
import {UserSignIn} from '../api/index.js';
import TextInput from '../components/TextInput';
const Container = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
`;
const Span = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 90};
`;
const Signin = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateInput = () => {
    if (!email || !password) {
      alert("Please fill in all field");
      return false;
    }
    return true;
  };

  const handleSignIn = async () => {
    setLoading(true);
    setButtonDisabled(true);

    if (validateInput()) {
      await UserSignIn({ email, password })
        .then((res) => {
          dispatch(loginSuccess(res.data));
          alert("login successfully");
          setLoading(false);
          setButtonDisabled(false);
        })
        .catch((err) => {
          alert(err.response.data.message);
          setLoading(false);
          setButtonDisabled(false);
        })
    }
  }

  return (
    <Container>
      <div>
        <Title>
          Welcome to fitness tracker
        </Title>
        <Span>
          please login with your details here
        </Span>
      </div>
      <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
        <TextInput label="Email Address" placeholder="enter your email address" value={email} handleChange={(e) => setEmail(e.target.value)} />
        <TextInput label="Password" placeholder="enter the password" type="password" value={password} handleChange={(e) => setPassword(e.target.value)} />
        <Button text="SignIn" onClick={handleSignIn} isLoading={loading} isDisabled={buttonDisabled}>
          {loading ? 'Loading...' : 'Sign In'}
        </Button>
      </div>
    </Container>
  );
};

export default Signin;