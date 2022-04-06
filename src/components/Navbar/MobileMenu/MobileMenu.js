import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";

const Hamburger = styled.div`
  cursor: pointer;
  z-index: 999;
`;
const HamburgerLine = styled.div`
  width: 30px;
  height: 3px;
  background: #fff;
  z-index: 0;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
const Nav = styled.nav`
  position: absolute;
  top: 0;
  right: -400px;
  width: 400px;
  height: 100vh;
  background: #121212;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-out;
`;
const NavOverlay = styled.div`
  position: absolute;
  min-height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: -1;
  overflow: hidden;
  transition: all 0.5s ease-out;
  opacity: 0;
  &.active {
    opacity: 1;
    z-index: 99;
  }
  &.active > * {
    right: 0;
  }
`;

const NavList = styled.ul``;
const NavItem = styled.li`
  position: relative;
  margin-bottom: 30px;
  font-size: 30px;
  &:not(:last-child) *::before {
    position: absolute;
    content: "";
    bottom: -5px;
    width: 0;
    left: 50%;
    height: 3px;
    transition: all 0.3s ease-out;
  }
  & *:hover::before {
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

function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    window.addEventListener("resize", (e) => {
      if (document.documentElement.clientWidth < 800) {
        document.body.style = "overflow: visible;";
      }
    });
    if (isMenuOpen) {
      document.body.style = "overflow: hidden;";
    } else {
      document.body.style = "overflow: visible;";
    }
  }, []);

  return (
    <>
      <Hamburger onClick={toggleMenu}>
        <HamburgerLine></HamburgerLine>
        <HamburgerLine></HamburgerLine>
        <HamburgerLine></HamburgerLine>
      </Hamburger>
      <NavOverlay className={isMenuOpen ? "active" : ""}>
        <Nav>
          <NavList>
            <NavItem onClick={toggleMenu}>
              <Link className="link" to="/services">
                Services
              </Link>
            </NavItem>
            <NavItem onClick={toggleMenu}>
              <Link className="link" to="/gallery">
                Gallery
              </Link>
            </NavItem>
            <NavItem onClick={toggleMenu}>
              <Link className="link" to="/about">
                About
              </Link>
            </NavItem>
            <NavItem onClick={toggleMenu}>
              <Link className="link" to="/partners">
                Partners
              </Link>
            </NavItem>
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
          </NavList>
        </Nav>
      </NavOverlay>
    </>
  );
}

export default MobileMenu;
