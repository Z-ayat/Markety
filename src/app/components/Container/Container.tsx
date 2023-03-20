import styles from "./styles.module.css";
import React, { ReactNode } from "react";

interface AuxProps {
  children: ReactNode;
  withBorder?: boolean;
}
const Container = ({ children, withBorder = false }: AuxProps) => {
  return withBorder ? (
    <div className={styles.withBorder}>
      <div className={styles.container}>{children}</div>
    </div>
  ) : (
    <div className={styles.container}>{children}</div>
  );
};
export default Container;
