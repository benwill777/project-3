import React, { Component } from 'react';
import styled from 'styled-components'


const Button = styled.button`
  border-radius: 5px;
  padding: 15px 25px;
  font-size: 22px;
  text-decoration: none;
  margin: 20px;
  color: #fff;
  position: relative;
  display: inline-block;
  background-color: #55acee;
  box-shadow: 0px 5px 0px 0px #3C93D5;
  &:hover{
    background-color: #6FC6FF
  }
  &:active{
    transform: translate(0px, 5px);
    box-shadow: 0px 1px 0px 0px;
  }
`;
export default Button