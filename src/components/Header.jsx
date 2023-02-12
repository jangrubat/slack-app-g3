import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function Header() {

    const [username, setUsername] = useState('Bernard')

    const handleLogout = () => {

        localStorage.clear('user-info')

    }

  return (
    <div>
        <Container>
            <SearchContainer>
                <AccessTimeIcon />
                <input type='text' placeholder='Search'/>    
            </SearchContainer>
            <UserContainer>
                <img src='https://i.imgur.com/6VBx3io.png' />
                {username}
            </UserContainer>
            <Logout>
                <HelpOutlineIcon />
                <Link to='/login' onClick={handleLogout}>Logout</Link>
            </Logout>
        </Container>
    </div>
  )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    background: #454545;
    color: #D0CFD2;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 360px;
`

const UserContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: end;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    padding-left: 20px;
    gap: 15px;

    img {
        width: 32px;
        height: 32px
    }
`

const Logout = styled.div`
    position: absolute;
    right: 0;
    width: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 20px

`

export default Header