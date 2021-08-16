import React, {useState} from "react";
import styled from "styled-components";

const LoginJH = () => {

  const [id, setId] = useState('')
  const [pw, setPw] = useState('')

  const handleInput = ({target}) => {
    const{name,value}=target
    if(name === 'id'){
      setId(value)
    }
    if(name === 'pw') {
      setPw(value)
    }
  }

  const login = (e) => {
    e.preventDefalut();
    console.log('id :', id, 'pw :', pw)
  }

  return <Wrapper>
    <InputContainer onSubmit={(e)=>{e.preventDefalut()}}>
      <Input name="id" type="text" placeholder="id를 입력하세요" onChange={handleInput}></Input>
      <Input name="pw" type="password" placeholder="비밀번호를 입력하세요" onChange={handleInput}></Input>
      <Button type="primary" onClick={login}>로그인</Button>
    </InputContainer>
  </Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`
const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  margin-top: 100px;
  border: 1px solid lightgray;
  padding: 50px;
`
const Input = styled.input`
  width: 300px;
  height: 30px;
  margin-bottom: 20px;
`

const Button = styled.button`
  width: 300px;
  height: 30px;
  color: white;
  font-weight: bold;
  background-color: #1790ff;
  border: none;
  outline: none;

`
export default LoginJH;
