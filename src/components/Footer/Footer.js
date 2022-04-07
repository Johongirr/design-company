import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const FooterSection = styled.footer`
  border-radius: 15px;
  background: #242424;
  margin: 100px 0;
  font-size: 15px;
`;
const FooterRow = styled.div`
  padding: 40px;
  padding-bottom: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 40px;
  @media (min-width: 768px) {
    gap: 10px;
    flex-direction: row;
    justify-content: space-between;
  }
`;
const FooterLogoBox = styled.div``;
const FooterText = styled.p`
  color: #666;
  margin-top: 20px;
  width: 70%;
`;

const FooterList = styled.ul``;
const FooterItem = styled.li`
  margin-bottom: 30px;
`;
const FooterBox = styled.div`
  @media (min-width: 768px) {
    padding-left: 20px;
    border-left: 1px solid #777;
  }
`;
const FooterAddress = styled.address`
  display: inline-block;
  font-style: normal;
  flex: 1;
  margin-bottom: 20px;
`;
const FooterSocial = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
`;
const FooterSocialItem = styled.li`
  border-right: 1px solid hsla(47, 100%, 91%, 0.2);
  padding: 0 15px;
  color: #ffe99c;
  font-size: 30px;
`;

function Footer() {
  return (
    <FooterSection>
      <FooterRow>
        <FooterLogoBox>
          <Link to="/">
            <svg
              style={{
                marginLeft: "20px",
                marginBottom: "10px",
              }}
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
            <p style={{ color: "#ffe99c" }}>luxury development company</p>
          </Link>
          <FooterText>
            sit amet consectetur adipisicing elit. Repellat,
          </FooterText>
        </FooterLogoBox>
        <FooterList style={{ flex: "1" }}>
          <FooterItem>
            <Link to="/gallery">Gallery</Link>
          </FooterItem>
          <FooterItem>
            <Link to="/partners">Partners</Link>
          </FooterItem>
          <FooterItem>
            <a href="#">Contact</a>
          </FooterItem>
          <FooterItem>
            <Link to="/about">About Us</Link>
          </FooterItem>
        </FooterList>
        <FooterList style={{ paddingRight: "10px", flex: "1" }}>
          <FooterItem>
            <Link to="/gallery">
              interior and exterior <br /> design
            </Link>
          </FooterItem>
          <FooterItem>
            <Link to="/partners">
              building and <br /> painting
            </Link>
          </FooterItem>
        </FooterList>
        <FooterBox>
          <span style={{ color: "#666", display: "block" }}>Address:</span>
          <FooterAddress>
            Tashkent City, Darhan <br /> Tamara Xonim 4a
          </FooterAddress>
          <span style={{ color: "#666", display: "block" }}>Phone Number:</span>
          <FooterAddress>
            95-004-80-90
            <br />
            95-004-80-90
          </FooterAddress>
        </FooterBox>
      </FooterRow>
      <FooterSocial>
        <FooterSocialItem>
          <FaTelegramPlane style={{ verticalAlign: "middle" }} />
        </FooterSocialItem>
        <FooterSocialItem>
          <FaInstagram style={{ verticalAlign: "middle" }} />
        </FooterSocialItem>
        <FooterSocialItem>
          <FaFacebookF style={{ verticalAlign: "middle" }} />
        </FooterSocialItem>
        <FooterSocialItem>
          <FaYoutube style={{ verticalAlign: "middle" }} />
        </FooterSocialItem>
        <FooterSocialItem>
          <FaWhatsapp style={{ verticalAlign: "middle" }} />
        </FooterSocialItem>
      </FooterSocial>
    </FooterSection>
  );
}

export default Footer;
