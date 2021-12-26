import styles from './BrushedText.module.scss';
import Image from 'next/image';

type BrushedTextProps = {
  text: string;
};

export default function BrushedText({ text }: BrushedTextProps) {
  return (
    <span className={styles.BrushedText}>
      <Image src="/tilt/purple_brush.png" alt="" layout="fill" />
      <strong className={styles.BrushedText__text}>{text}</strong>
    </span>
  );
}
