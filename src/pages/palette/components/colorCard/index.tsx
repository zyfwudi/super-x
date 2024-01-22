import React from "react";
import type { ColorCardProps } from "./index.type";
import colorCardClassType from "./styles";
import ColorCardBody from "../colorCardBody";

const ColorCard: React.FC<ColorCardProps> = (props: ColorCardProps) => {
  const {
    title,
    keygen,
    value,
  } = props

  const styles = colorCardClassType()

  return (
    <div className={styles.colorCard}>
      <div className={styles.card}>
        <div className={styles.cardHeader} style={{ backgroundColor: value }}>
          <div className={styles.cardHeaderTitle}>
            {title}
          </div>
          <div className={styles.cardHeaderValue}>
            <span>{keygen}</span>
            <span>{value}</span>
          </div>
        </div>
        <div className={styles.cardBody}>
          <ColorCardBody />
        </div>
      </div>
    </div>
  );
};

export default ColorCard;