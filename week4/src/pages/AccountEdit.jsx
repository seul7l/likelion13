import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import UserInfo from "../UserInfo";

function AccountEdit() {
  const [edit, setEdit] = useState({
    name: UserInfo.name,
    age: UserInfo.age,
    email: UserInfo.email,
  });

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/account");
    
  }

  function handleChange(e) {
    const {name, value} = e.target;
    setEdit(prev => ({
      ...prev, [name]: value,}));
  }

  return (
    <EditPage onSubmit={handleSubmit}>
      <h1>정보 수정</h1>
      <EditContent>
        <input
          type="text"
          name="name"
          value={edit.name}
          onChange={handleChange}
          placeholder="이름"
        />
        <br />
        <input
          type="number"
          name="age"
          value={edit.age}
          onChange={handleChange}
          placeholder="나이"
        />
        <br />
        <input
          type="email"
          name="email"
          value={edit.email}
          onChange={handleChange}
          placeholder="이메일"
        />
        <br />
      </EditContent>
      <SaveButton to="/account" type="submit">저장</SaveButton>
    </EditPage>
  );
}

const EditPage = styled.form`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

const EditContent = styled.p`
  display: block;
`;

const SaveButton = styled.button`
  background: skyblue;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 4px;
  display: inline-block;
  margin: 20px;
`;


export default AccountEdit;
