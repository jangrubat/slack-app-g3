import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';

export default function UserProfileUI({setLoginWindow,setOpenMainBank,setCurrentUser,    setCurrentUBal,setRegister,accounts}){

    const navigate = useNavigate()

    return(
        <div className=" w-full flex flex-col">

            <Container>
                <Header />
                <Main>
                    <Sidebar />
                    <Chat />
                </Main>
            </Container>
            
        </div>

    );

}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 40px auto
`

const Main = styled.div`
  display: grid;
  grid-template-columns: 350px auto;
`