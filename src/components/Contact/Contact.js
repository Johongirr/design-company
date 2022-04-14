import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactPhoto from "../../assets/woman-with-headset 2.png";

const ContactSection = styled.section`
  position: relative;
  border-radius: 15px;
  background: rgba(63, 63, 63, 0.2);
  padding: 40px;
`;
const ContactHeader = styled.header`
  display: flex;
  align-items: center;
`;
const ContactTitle = styled.h2`
  margin-left: 30px;
  font-size: clamp(1.5rem, calc(4vw + 1rem), 2.5rem);
`;
const ContactIconBox = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ffe99c;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContactForm = styled.form`
  margin-top: 40px;
  max-width: 400px;
  margin-bottom: 50px;
  ${(props) =>
    props.isMobile &&
    css`
      max-width: 100%;
    `}
`;
const ContactFormControl = styled.div`
  margin-bottom: 35px;
`;
const ContactLabel = styled.label`
  display: block;
  color: #555;
  padding-bottom: 10px;
  font-size: 15px;
`;
const ContactInput = styled.input`
  background: transparent;
  border: 0;
  border-bottom: 2px solid #fff;
  outline: transparent;
  color: #fff;
  padding-bottom: 10px;
  width: 100%;
  font-size: 20px;
`;
const ContactBtn = styled.button`
  background: #fff;
  color: #111;
  width: 100%;
  padding: 13px;
  margin-top: 30px;
  font-weight: bold;
  border-radius: 5px;
  transition: all 0.3s ease-out;
  &:hover {
    background-color: #ffe99c;
    color: #111;
  }
  cursor: pointer;
`;

const ContactImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 40px;
`;
const ContactCircle = styled.div`
  position: absolute;
  top: 30%;
  right: 40px;
  width: 270px;
  height: 270px;
  border-radius: 50%;
  background: #ffe99c;
`;

function Contact() {
  const title = useRef();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (title.current) {
      function animateFrom(elem, direction) {
        direction = direction || 1;
        var x = 0,
          y = direction * 100;
        if (elem.classList.contains("gs_reveal_fromLeft")) {
          x = -100;
          y = 0;
        } else if (elem.classList.contains("gs_reveal_fromRight")) {
          x = 100;
          y = 0;
        }
        elem.style.transform = "translate(" + x + "px, " + y + "px)";
        elem.style.opacity = "0";
        gsap.fromTo(
          elem,
          { x: x, y: y, autoAlpha: 0 },
          {
            duration: 1.25,
            x: 0,
            y: 0,
            autoAlpha: 1,
            ease: "expo",
            overwrite: "auto",
          }
        );
      }

      function hide(elem) {
        gsap.set(elem, { autoAlpha: 0 });
      }

      document.addEventListener("DOMContentLoaded", function () {
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
          console.log(elem);

          hide(elem); // assure that the element is hidden when scrolled into view

          ScrollTrigger.create({
            trigger: elem,
            onEnter: function () {
              animateFrom(elem);
            },
            onEnterBack: function () {
              animateFrom(elem, -1);
            },
            onLeave: function () {
              hide(elem);
            }, // assure that the element is hidden when scrolled into view
          });
        });
      });
    }
  }, []);
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
    <ContactSection ref={title} className="gs_reveal">
      <ContactHeader>
        <ContactIconBox>
          <svg
            width="24"
            height="22"
            viewBox="0 0 24 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.5602 6.16001C22.4879 6.10892 22.404 6.07332 22.3147 6.05581C22.2254 6.0383 22.133 6.03932 22.0442 6.05881L19.7426 6.60001C18.893 6.55601 16.1834 5.60121 14.6402 4.99401L14.609 4.98301C12.5594 4.30761 10.7858 4.45941 9.3026 5.42301C7.3298 4.80481 4.8026 6.10941 4.0226 6.55601L1.949 6.06761C1.8604 6.04636 1.76765 6.04407 1.67793 6.06091C1.5882 6.07775 1.5039 6.11327 1.43153 6.16473C1.35917 6.21618 1.30067 6.28219 1.26056 6.35767C1.22045 6.43314 1.1998 6.51605 1.2002 6.60001V14.3C1.2002 14.4459 1.26342 14.5858 1.37594 14.6889C1.48846 14.7921 1.64107 14.85 1.8002 14.85H3.0746L8.5298 18.7924C8.73917 18.977 8.99419 19.1125 9.27307 19.1871C9.55195 19.2618 9.8464 19.2735 10.1313 19.2212C10.4161 19.1688 10.683 19.0541 10.909 18.8867C11.1349 18.7194 11.3134 18.5043 11.429 18.26C11.7009 18.4028 12.0085 18.4786 12.3218 18.48C12.6735 18.4801 13.0175 18.3858 13.3114 18.2087C13.6053 18.0316 13.8361 17.7794 13.9754 17.4834C14.2468 17.6273 14.5547 17.7032 14.8682 17.7034C15.2195 17.7031 15.563 17.6086 15.8564 17.4315C16.1498 17.2544 16.3803 17.0025 16.5194 16.7068C16.7965 16.851 17.1104 16.925 17.429 16.9213C17.7476 16.9175 18.0594 16.8361 18.3323 16.6853C18.6052 16.5346 18.8294 16.32 18.9819 16.0636C19.1345 15.8072 19.2098 15.5181 19.2002 15.2262L20.4842 14.85H22.2002C22.3593 14.85 22.5119 14.7921 22.6245 14.6889C22.737 14.5858 22.8002 14.4459 22.8002 14.3V6.60001C22.8006 6.51456 22.779 6.43023 22.7374 6.3538C22.6957 6.27738 22.635 6.211 22.5602 6.16001ZM2.4002 7.30401L3.473 7.55701L3.0434 11.22L2.7458 13.75H2.4002V7.30401ZM17.837 15.6552C17.7229 15.756 17.5707 15.8124 17.4122 15.8124C17.2537 15.8124 17.1015 15.756 16.9874 15.6552L16.1402 14.8786L12.7466 11.7656C12.6326 11.6716 12.4836 11.6212 12.3304 11.6248C12.1771 11.6283 12.0311 11.6855 11.9224 11.7846C11.8136 11.8837 11.7504 12.0172 11.7457 12.1577C11.741 12.2981 11.7951 12.435 11.897 12.54L15.293 15.6574C15.4021 15.7613 15.4624 15.9003 15.4608 16.0445C15.4592 16.1887 15.3959 16.3266 15.2845 16.4284C15.1731 16.5303 15.0225 16.5879 14.8652 16.5889C14.7079 16.59 14.5564 16.5343 14.4434 16.434L13.5938 15.6552L11.0402 13.321C10.9844 13.2699 10.9182 13.2293 10.8453 13.2016C10.7724 13.174 10.6943 13.1597 10.6154 13.1597C10.5365 13.1597 10.4584 13.174 10.3855 13.2016C10.3126 13.2293 10.2464 13.2699 10.1906 13.321C10.1348 13.3721 10.0906 13.4328 10.0604 13.4997C10.0302 13.5665 10.0146 13.6381 10.0146 13.7104C10.0146 13.7827 10.0302 13.8543 10.0604 13.9211C10.0906 13.988 10.1348 14.0487 10.1906 14.0998L12.7466 16.434C12.8038 16.4848 12.8494 16.5456 12.8808 16.6127C12.9121 16.6798 12.9285 16.752 12.9291 16.8251C12.9297 16.8981 12.9144 16.9705 12.8841 17.038C12.8539 17.1056 12.8092 17.1669 12.7528 17.2185C12.6964 17.2701 12.6293 17.3108 12.5556 17.3384C12.4818 17.3659 12.4028 17.3798 12.3231 17.379C12.2434 17.3783 12.1647 17.363 12.0916 17.3341C12.0184 17.3052 11.9523 17.2632 11.897 17.2106L9.3602 14.8786C9.30467 14.8275 9.23866 14.7869 9.16597 14.7592C9.09327 14.7315 9.01532 14.7172 8.9366 14.7172C8.85787 14.7172 8.77993 14.7315 8.70723 14.7592C8.63454 14.7869 8.56853 14.8275 8.513 14.8786C8.45707 14.9291 8.41274 14.9894 8.38265 15.056C8.35256 15.1225 8.33731 15.1938 8.3378 15.2658C8.33753 15.3381 8.35287 15.4097 8.38294 15.4766C8.41301 15.5434 8.45721 15.6041 8.513 15.6552L10.2098 17.2106C10.3221 17.3141 10.3851 17.4541 10.3851 17.6C10.3851 17.7459 10.3221 17.8859 10.2098 17.9894C10.0952 18.0892 9.9431 18.1449 9.785 18.1449C9.62689 18.1449 9.47483 18.0892 9.3602 17.9894C9.34376 17.9736 9.32611 17.9589 9.3074 17.9454L3.9146 14.0558L4.517 8.95401L4.6922 7.46681C5.4554 7.02681 6.9458 6.34701 8.1818 6.36681C7.81447 6.75558 7.48596 7.17379 7.2002 7.61641C6.9355 8.02986 6.85122 8.51981 6.96429 8.98786C7.07737 9.45592 7.37942 9.86745 7.8098 10.1398C8.6594 10.6722 10.2098 11.1672 12.1298 9.647L17.837 14.8764C17.9487 14.9802 18.0113 15.12 18.0113 15.2658C18.0113 15.4116 17.9487 15.5515 17.837 15.6552ZM18.7802 14.1966C18.751 14.1628 18.7197 14.1305 18.6866 14.0998L12.9746 8.86381C13.2146 8.61301 13.4546 8.33361 13.6946 8.01681C13.7492 7.95878 13.7899 7.89096 13.8142 7.81767C13.8385 7.74439 13.8458 7.66725 13.8357 7.59122C13.8256 7.51518 13.7983 7.44192 13.7555 7.37613C13.7127 7.31033 13.6554 7.25345 13.5873 7.20914C13.5191 7.16482 13.4416 7.13404 13.3597 7.11877C13.2778 7.1035 13.1934 7.10408 13.1117 7.12047C13.0301 7.13685 12.9531 7.16869 12.8857 7.21393C12.8183 7.25918 12.7619 7.31683 12.7202 7.38321C11.6546 8.76701 10.061 10.2102 8.4962 9.2312C8.31852 9.11521 8.19511 8.94204 8.15062 8.74628C8.10613 8.55053 8.14384 8.34659 8.2562 8.17521C8.64515 7.53823 9.15376 6.96922 9.7586 6.49441C9.77805 6.48168 9.7965 6.46772 9.8138 6.45261C11.0138 5.57261 12.4538 5.43841 14.201 6.01261C14.6546 6.18861 17.6762 7.36121 19.2602 7.64061L19.7882 13.9084L18.7802 14.1966ZM21.6002 13.75H20.957L20.4362 7.57021L21.6002 7.30401V13.75Z"
              fill="black"
            />
          </svg>
        </ContactIconBox>
        <ContactTitle>CONTACT US</ContactTitle>
      </ContactHeader>
      <ContactForm isMobile={isMobile ? true : false}>
        <ContactFormControl>
          <ContactLabel htmlFor="phoneNumber">PHONE NUMBER</ContactLabel>
          <ContactInput
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="+998( ) __ - __ - __"
          />
        </ContactFormControl>
        <ContactFormControl>
          <ContactLabel htmlFor="name">YOUR NAME</ContactLabel>
          <ContactInput
            type="text"
            name="name"
            id="name"
            placeholder="ZIYODBEK"
          />
        </ContactFormControl>
        <ContactBtn>SEND</ContactBtn>
      </ContactForm>
      {!isMobile && (
        <>
          <ContactCircle />
          <ContactImg src={ContactPhoto} alt="" />
        </>
      )}
    </ContactSection>
  );
}

export default Contact;
