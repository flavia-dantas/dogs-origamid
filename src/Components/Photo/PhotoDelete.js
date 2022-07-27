import { PHOTO_DELETE } from "../../api";
import { useFetch } from "../../Hooks/useFetch";
import styles from "./PhotoDelete.module.css";

export const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick() {
    const { url, options } = PHOTO_DELETE(id);
    const { response } = await request(url, options);
    if (response.ok) window.location.reload();
  }

  return (
    <>
      {loading ? <button disabled style={styles.delete}>Delete</button> :
        <button onClick={handleClick} style={styles.delete}>Delete</button>}

    </>
  );
};
