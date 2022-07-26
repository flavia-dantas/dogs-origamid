import { useState } from "react";
import { FeedModal } from "./FeedModal";
import { FeedPhotos } from "./FeedPhotos";

export const Feed = () => {
  const [modalPhoto, setModalPhoto] = useState(null);
  return (
    <div>
      {modalPhoto && <FeedModal />}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </div>
  );
};
