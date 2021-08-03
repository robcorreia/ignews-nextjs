import styles from './styles.module.scss'

interface ISubscribeButtonprops {
  priceId: string;
}

export function SubscribeButton( { priceId }: ISubscribeButtonprops ) {
  return (
    <button type="button"
    className={styles.subscribeButton}>
      Subscribe now
    </button>
  )
}