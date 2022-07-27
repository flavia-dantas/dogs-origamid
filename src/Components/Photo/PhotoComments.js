import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../UserContext";
import { PhotoCommentsForm } from "./PhotoCommentsForm";
import styles from "./PhotoComments.module.css";

export const PhotoComments = (props) => {
  const [comments, setComments] = useState(() => props.comments);
  const commentSection = useRef(null);
  const { login } = useContext(UserContext);

  useEffect(() => {
    commentSection.current.scrollTop = commentSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul ref={commentSection} className={styles.comments}>
        {comments.map((comment) => (
          <li key={comment.commnent_ID}>
            <b>{comment.comment_author}:</b>
            <span>{comment.comment_content}</span>
          </li>))}
      </ul>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </>
  );
};
