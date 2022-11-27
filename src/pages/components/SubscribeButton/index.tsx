import styles from "./styes.module.scss";

interface SubscribeButtonProps {
  priceId: string;
}

export const SubscribeButton = ({ priceId }: SubscribeButtonProps) => {
  return <button className={styles.subscribeButton}>Subscribe now</button>;
};
