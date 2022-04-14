import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VideoReview1 from "../../assets/video-review.png";
import VideoReview2 from "../../assets/video-review-2.png";
import { ServiceOverlay as VideoReviewOverlay } from "../../pages/Services/Services";
import { FaPlay } from "react-icons/fa";
import VideoModal from "../Modal/Modal";
import { useVideoPlayer } from "../../customHooks/videoPlayer";

const VideoReviewsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  align-items: center;
  margin: 60px 0;
`;
const VideoReviewsBox = styled.div`
  position: relative;
  line-height: 0;
  flex: 1 0 100%;
  @media (min-width: 668px) {
    flex: 1;
  }
`;
const VideoReviewImg = styled.img`
  width: 100%;
`;
const VideoReviewPlayBtn = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  background: #111;
  color: #ffe99c;
  border: 4px solid #ffe99c;
  box-shadow: 0 0 5px 3px #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function VideoReviewsRow() {
  const { open, closeModal, onOpenModal } = useVideoPlayer();
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
    <VideoReviewsGrid>
      <VideoReviewsBox ref={title} className="gs_reveal gs_reveal_fromLeft">
        <VideoReviewImg src={VideoReview1} alt="video review guy img" />
        <VideoReviewOverlay>
          <VideoReviewPlayBtn onClick={onOpenModal}>
            <FaPlay />
          </VideoReviewPlayBtn>
        </VideoReviewOverlay>
      </VideoReviewsBox>
      <VideoReviewsBox ref={title} className="gs_reveal gs_reveal_fromRight">
        <VideoReviewImg src={VideoReview2} alt="video review guy img" />
        <VideoReviewOverlay>
          <VideoReviewPlayBtn onClick={onOpenModal}>
            <FaPlay />
          </VideoReviewPlayBtn>
        </VideoReviewOverlay>
      </VideoReviewsBox>
      <VideoModal closeModal={closeModal} open={open} />
    </VideoReviewsGrid>
  );
}

export default VideoReviewsRow;
