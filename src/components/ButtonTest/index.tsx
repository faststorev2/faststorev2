import styles from './styles.module.scss'

export function ButtonTest(props: any) {
  console.log("ButtonTest props", props);
  return (
    <>
      <button className={styles.button}>
        Comprar
      </button>
    </>
  );
}