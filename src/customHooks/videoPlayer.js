import React, { useState } from "react";

function useVideoPlayer() {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const onOpenModal = () => setOpen(true);
  return { open, closeModal, onOpenModal };
}

export { useVideoPlayer };
