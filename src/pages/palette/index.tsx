import React, { useRef } from "react";
import ColorCard from "./components/colorCard";
import paletteClassType from './styles'

const Palette: React.FC = () => {
  const styles = paletteClassType()
  return (
    <div className={styles.main}>
      <div className={styles.paletteOptions}>

      </div>
      <div className={styles.paletteMain}>
        <ColorCard title="Red / 浪漫红" keygen="red-7" value="#F04428" />
        <ColorCard title="Red / 浪漫红" keygen="red-7" value="#F04428" />
        <ColorCard title="Red / 浪漫红" keygen="red-7" value="#F04428" />
        <ColorCard title="Red / 浪漫红" keygen="red-7" value="#F04428" />
        <ColorCard title="Red / 浪漫红" keygen="red-7" value="#F04428" />
        <ColorCard title="Red / 浪漫红" keygen="red-7" value="#F04428" />
      </div>
    </div>
  );
};

export default Palette;