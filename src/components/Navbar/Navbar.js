import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu/MobileMenu";

const NavHeader = styled.header`
  padding: 50px 0;
  z-index: 9999;
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
`;
const NavLogoBox = styled.div`
  z-index: 99;
`;
const NavMenu = styled.ul`
  display: flex;
  align-items: center;
`;
const NavItem = styled.li`
  position: relative
  z-index: 999;
  margin-right: 40px;
  &:last-child {
    margin-right: 0;
  }
  &:not(:last-child)::before {
    position: absolute;
    content: "";
    bottom: -5px;
    width: 0;
    left: 50%;
    height: 3px;
    transition: all 0.3s ease-out;
  }
  &:not(:last-child):hover::before {
    background: #fff;
    left: 0;
    width: 100%;
  }
`;

const NavContact = styled.div`
  display: flex;
  align-items: center;
`;
const NavIconBox = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffe99c;
  border: 1px solid #ffe99c;
  margin-right: 10px;
`;
const NavContactNumber = styled.address`
  font-style: normal;
`;

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (document.documentElement.clientWidth < 800) {
      setIsMobile(true);
    }
    window.addEventListener("resize", (e) => {
      if (document.documentElement.clientWidth < 800) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
  }, []);

  return (
    <NavHeader>
      <Nav>
        <NavLogoBox>
          <Link
            to="/"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <svg
              width="52"
              height="50"
              viewBox="0 0 52 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.63288 46.6777H23.3901L8.81266 34.5236V16.7399L14.9643 11.9304L37.0728 28.8939V17.7838L15.188 0L0.0512695 12.6388V38.14L9.63288 46.6777Z"
                fill="#FFE99C"
              />
              <path
                d="M27.7149 2.46069H41.1738L51.5757 10.7001V36.2759L36.5508 49.0266L14.2559 30.9073V20.3563L36.2525 37.5808L42.6651 32.585L42.5906 14.7639L27.7149 2.46069Z"
                fill="#FFE99C"
              />
            </svg>
            <p>NURAN GROUP</p>
          </Link>
        </NavLogoBox>
        {isMobile ? (
          <MobileMenu />
        ) : (
          <NavMenu>
            <NavItem>
              <Link to="/services">services</Link>
            </NavItem>
            <NavItem>
              <Link to="/gallery">gallery</Link>
            </NavItem>
            <NavItem>
              <Link to="/about">about</Link>
            </NavItem>
            <NavItem>
              <Link to="/partners">partners</Link>
            </NavItem>
            <NavItem>
              <NavContact>
                <NavIconBox>
                  <BsTelephone />
                </NavIconBox>
                <NavContactNumber>
                  95-004-80-90
                  <br />
                  94-641-40-00
                </NavContactNumber>
              </NavContact>
            </NavItem>
          </NavMenu>
        )}
      </Nav>
    </NavHeader>
  );
}

export default Navbar;
