import React from "react";
import classNames from "classnames";
import type { ColorCardItemProps } from "./index.type";
import colorCardBodyClassType from "./styles";

const ColorCardItem: React.FC<ColorCardItemProps> = (props: ColorCardItemProps) => {
  const {
    contrast,
    keygen,
    index,
    value,
  } = props

  const styles = colorCardBodyClassType()

  const colorCardItemClassName = classNames(styles.colorCardItem, {
    [styles.showItem]: index === 6,
  })

  return (
    <div className={colorCardItemClassName} style={{ backgroundColor: value, color: index > 6 ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }}>
      <div className={styles.colorCardItemKey}>
        <div className={styles.colorCardItemTitle}>{keygen}</div>
        <div className={styles.colorCardItemContrast}>{contrast}</div>
      </div>
      <span className={styles.colorCardItemValue}>
        {value}
      </span>
    </div>
  )

}

export default ColorCardItem


