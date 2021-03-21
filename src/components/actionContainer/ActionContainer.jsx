import styles from './ActionContainer.module.scss';

export const ActionContainer = (props) => {

  const handleClick = () => {
    console.log("click some action");
  }

  return (
    <>
      <div className={styles.actionContainer}>
        <button type="button" onClick={handleClick}> Some Action Here </button>
      </div>
    </>
  );
};
