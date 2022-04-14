import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ServiceSection = styled.article`
  max-width: 760px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 40px;
  margin-bottom: 100px;
`;
const ServiceImgBox = styled.figure``;
const ServiceImg = styled.img`
  width: 100%;
`;
const ServiceTextBox = styled.section`
  padding-top: 30px;
`;
const ServiceHeader = styled.header`
  margin-bottom: 20px;
`;
const ServiceTitle = styled.h2`
  color: #ffe99c;
  font-size: 1.8rem;
`;
const ServiceDescription = styled.p`
  font-weight: 400;
`;

function ServiceItem({ service }) {
  const title = useRef();
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
  return (
    <ServiceSection>
      <ServiceImgBox>
        <ServiceImg
          ref={title}
          className="gs_reveal"
          src={service?.img}
          alt={service?.title}
        />
      </ServiceImgBox>
      <ServiceTextBox>
        <ServiceHeader>
          <ServiceTitle>{service?.serviceTitle}</ServiceTitle>
        </ServiceHeader>
        <ServiceDescription>{service?.serviceDescription}</ServiceDescription>
      </ServiceTextBox>
    </ServiceSection>
  );
}

export default ServiceItem;
