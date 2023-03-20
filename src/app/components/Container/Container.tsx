import styles from './styles.module.css'
import React, {ReactNode} from "react";

interface AuxProps {
    children: ReactNode;
}
const Container = ({children}:AuxProps) => {
  return (
      <div className={styles.container}>
          {children}
      </div>
  )
}
export default Container