import styles from "./Modal.module.css";

function Model({ children, onClose }) {
  return (
    <>
      <div className={styles.backdrop} onClick={onClose}></div>
      <dialog open className={styles.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Model;
