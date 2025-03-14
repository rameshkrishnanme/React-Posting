import styles from "./Modal.module.css";

function Model({ children, props }) {
  return (
    <>
      <div className={styles.backdrop}></div>
      <dialog open className={styles.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Model;
