import { createUseStyles } from 'react-jss'
import { paletteClasses } from './index.type'
import { JsStyles } from '../../utils/types'

type paletteClassType = JsStyles<keyof paletteClasses>

const styles: paletteClassType = {
  main: {
    display: 'flex',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
  paletteOptions: {
    width: '20vw',
    height: '100%',
    borderRight: '1px solid #e1e4e8',
  },
  paletteMain: {
    flex: 1,
    overflowY: 'auto',
    display: 'grid',
    gap: '16px',
    justifyItems: 'stretch',
    padding: '20px 48px',
    gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
  },
  
}

export default createUseStyles(styles)