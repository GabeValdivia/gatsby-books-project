import { Link, navigate } from "gatsby";
import PropTypes from "prop-types";
import React, {useContext} from "react";
import {FirebaseContext} from "./Firebase";
import styled from "styled-components";

const LogoutLink = styled.span `
  color: #fff;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const HeaderWrapper = styled.header `
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`;

const HeaderContent = styled.div `
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  display: flex;
  justify-content: space-between;

  > h1 {
    margin: 0;
    flexGrow: 1;

    >a {
      color: white;
      text-decoration: none;
    }

    
  }
  align-items: center;
`;

const UserInfo = styled.div `
  color: white;
  text-align: right;
`;

const LoginLink = styled.div `
  a { color: white;}
`;

const Divider = styled.span `
  margin: 0 8px;
  padding-right: 1px;
  background: #ddd;
`;

const Header = ({ siteTitle }) => {
  const {firebase, user} = useContext(FirebaseContext);
  console.log(user);

  function handleLogoutClick() {
    firebase.logout().then(() => navigate('/login'));
  }
  
    return (
    <HeaderWrapper>
      <HeaderContent >
        <h1>
          <Link
            to="/"
          >
            {siteTitle}
          </Link>
        </h1>
        <div>
          {!!user && !!user.email && 
            <UserInfo>
              Hello, {user.username || user.email}
                <div>
                  <LogoutLink onClick={handleLogoutClick}>
                    Logout
                  </LogoutLink>
                </div>
            </UserInfo>
          }
          {(!user || !user.email) &&
          <LoginLink>
            <Link to="/login">
              Login
            </Link>
            <Divider />
              <Link to="/register">
                Register
            </Link>
          </LoginLink>
          }
        </div>
      </HeaderContent>
    </HeaderWrapper>
  )
}

export default Header