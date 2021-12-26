import classnames from 'classnames';
import { ReactNode } from 'react';
import TopNav from 'components/Navbar/TopNav';
import styles from 'styles/ViewContainer.module.scss';

type ViewContainerProps = {
  children: ReactNode;
  klassName?: string;
};

export default function ViewContainer({
  children,
  klassName = '',
}: ViewContainerProps) {
  return (
    <>
      <TopNav />
      <div
        className={classnames(styles.ViewContainer, {
          [klassName]: klassName,
        })}
      >
        <div className={styles.ViewContainer__background} />
        {children}
      </div>
    </>
  );
}
