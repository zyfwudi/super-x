import React from "react";
import type { ColorCardBodyProps } from "./index.type";
import colorCardBodyClassType from "./styles";
import ColorCardItem from "./colorCardItem";

const colors = [
  {
    keygen: 'Red-1',
    contrast: 'AA 6.40',
    value: '#FFFAF9',
  }, 
  {
    keygen: 'Red-2',
    contrast: 'AA 6.05',
    value: '#FEF3F2',
  }, 
  {
    keygen: 'Red-3',
    contrast: 'AA 5.45',
    value: '#FFE5E3',
  }, 
  {
    keygen: 'Red-4',
    contrast: 'AA 4.63',
    value: '#FFC7C2',
  }, 
  {
    keygen: 'Red-5',
    contrast: '1.94',
    value: '#FDA29B',
  }, 
  {
    keygen: 'Red-6',
    contrast: '2.79',
    value: '#F97066',
  }, 
  {
    keygen: 'Red-7',
    contrast: '3.76',
    value: '#F04438',
  }, 
  {
    keygen: 'Red-8',
    contrast: 'AA 4.83',
    value: '#D92D20',
  }, 
  {
    keygen: 'Red-9',
    contrast: 'AA 6.57',
    value: '#B42318',
  }, 
  {
    keygen: 'Red-10',
    contrast: 'AAA 8.66',
    value: '#912018',
  }, 
  {
    keygen: 'Red-11',
    contrast: 'AAA 9.85',
    value: '#7A271A',
  }, 
]

const ColorCardBody: React.FC<ColorCardBodyProps> = (props: ColorCardBodyProps) => {
  const {
  } = props

  const styles = colorCardBodyClassType()

  return (
    <div className={styles.colorCardBody}>
      {
        colors.map((color, index) =>
          <div key={color.keygen}>
            <ColorCardItem index={index} contrast={color.contrast} keygen={color.keygen} value={color.value} />
          </div>
        )
      }
    </div>
  )

}

export default ColorCardBody


