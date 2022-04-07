import React, { useState } from "react";
import ReactDOM from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Video from "../../assets/production ID_3770033.mp4";
import styled from "styled-components";
import { ImCancelCircle } from "react-icons/im";

const VideoBox = styled.figure`
  max-width: 900px;

  padding: 20px;
`;
const VideoPlayer = styled.video`
  display: inline-block;
  width: 100%;
  height: 100%;
`;
const closeIcon = <ImCancelCircle />;

const VideoModal = ({ open, closeModal }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={closeModal}
        center
        classNames={{
          modal: "customModal",
          closeButton: "customCloseButton",
          modalContainer: "customModalContainer",
        }}
        closeIcon={closeIcon}
      >
        <VideoBox>
          <VideoPlayer src={Video} autoPlay loop />
        </VideoBox>
      </Modal>
    </div>
  );
};
export default VideoModal;
