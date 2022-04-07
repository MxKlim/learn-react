import styles from './Button.module.scss';

function Button({children, control, handleClick}) {
  return (
    <button 
      className={styles.btn} 
      disabled={control}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
export default Button