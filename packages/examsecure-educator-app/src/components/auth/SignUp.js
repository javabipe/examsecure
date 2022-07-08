import React, { useState } from 'react';
import styled from 'styled-components';
import backgroundImg from '../../assets/authbg1.jpg';
import { Title, TextInput, Button, WhiteCard } from '@examsecure/design-system';
import colors from '@examsecure/design-system/src/colors';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { signUp } from '../../redux/action-creators/auth.js';

const AuthContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${backgroundImg}) center bottom;
  background-size: cover;
  display: flex;
  align-content: center;
`;

const InputsContainer = styled.div`
  padding: 25px 10px;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

const TextInputContainer = styled.div`
  padding: 15px 0;
`;

const StyledWhiteCard = styled(WhiteCard)`
  display: flex;
  flex-wrap: wrap;
  @media only screen and (max-width: 768px) {
    width: 95%;
  }
`;

const FlexRight = styled.div`
  padding: 10px;
  margin: auto;
  flex: 1;
`;

const FlexLeft = styled.div`
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HelperText = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 15px;
  color: ${colors.grayText};
  padding: 15px 0;
`;

const SignUp = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');

  const onBlur = () => {};

  const handleSignUp = (e) => {
    e.preventDefault();
    if (pwd !== confirmPwd) {
      alert('As senhas não coincidem');
    }
    props.signUp({ name, email, pwd });
  };

  const { authError, auth } = props;
  if (auth.uid) return <Redirect to="/" />;

  return (
    <>
      <AuthContainer>
        <StyledWhiteCard>
          <FlexLeft>
            <Title value={'Inscreva-se como Professor'} />
            <HelperText>
              <div>
                {authError ? (
                  <div style={{ color: 'red' }}>
                    Error: {authError.error.message}
                  </div>
                ) : (
                  <>
                    Inscreva-se para obter uma conta gratuita de Professor para continuar.
                  </>
                )}
              </div>
            </HelperText>
            <HelperText>
              <div>
                Já tem uma conta? <Link to="/sign-in"> Entrar.</Link>
              </div>
            </HelperText>
          </FlexLeft>
          <FlexRight>
            <form onSubmit={handleSignUp}>
              <InputsContainer>
                <TextInputContainer>
                  <TextInput
                    label={'Nome'}
                    onBlur={onBlur}
                    onChange={(name) => {
                      setName(name);
                    }}
                    iconLeft={'User'}
                    value={name}
                    type={'text'}
                    name={'name'}
                    required={true}
                  />
                </TextInputContainer>
                <TextInputContainer>
                  <TextInput
                    label={'Email'}
                    onBlur={onBlur}
                    onChange={(email) => {
                      setEmail(email);
                    }}
                    iconLeft={'Mail'}
                    value={email}
                    type={'email'}
                    name={'email'}
                    required={true}
                  />
                </TextInputContainer>
                <TextInputContainer>
                  <TextInput
                    label={'Senha'}
                    onBlur={onBlur}
                    onChange={(pwd) => {
                      setPwd(pwd);
                    }}
                    iconLeft={'Lock'}
                    value={pwd}
                    type={'password'}
                    name={'password'}
                    required={true}
                  />
                </TextInputContainer>
                <TextInputContainer>
                  <TextInput
                    label={'Confirme a Senha'}
                    onBlur={onBlur}
                    onChange={(pwd) => {
                      setConfirmPwd(pwd);
                    }}
                    iconLeft={'Lock'}
                    value={confirmPwd}
                    type={'password'}
                    name={'confirmPassword'}
                    required={true}
                  />
                </TextInputContainer>
              </InputsContainer>
              <ButtonContainer>
                <Button
                  variant={'primary'}
                  label={'Inscrever'}
                  type={'submit'}
                  width={'150px'}
                />
              </ButtonContainer>
            </form>
          </FlexRight>
        </StyledWhiteCard>
      </AuthContainer>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
