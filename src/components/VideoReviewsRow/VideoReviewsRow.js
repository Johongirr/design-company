import React, { useState } from "react";
import styled from "styled-components";
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
  // const [open, setOpen] = useState(false);
  // const closeModal = () => setOpen(false);
  // const onOpenModal = () => setOpen(true);

  return (
    <VideoReviewsGrid>
      <VideoReviewsBox>
        <VideoReviewImg src={VideoReview1} alt="video review guy img" />
        <VideoReviewOverlay>
          <VideoReviewPlayBtn onClick={onOpenModal}>
            <FaPlay />
          </VideoReviewPlayBtn>
        </VideoReviewOverlay>
      </VideoReviewsBox>
      <VideoReviewsBox>
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
