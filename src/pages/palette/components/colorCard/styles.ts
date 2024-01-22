import { createUseStyles } from 'react-jss'
import { ColorCardClasses } from './index.type'
import { JsStyles } from '../../../../utils/types'

type colorCardClassType = JsStyles<keyof ColorCardClasses>

const styles: colorCardClassType = {
  colorCard: {
    width: 'auto',
    minWidth: '360px',
    lineHeight: '1.5',
  },
  card: {},
  cardHeader: {
    padding: '12px 20px',
    color: '#fff',
    borderRadius: '4px 4px 0 0',
    transition: 'all .2s',
    '&:hover': {
      transform: 'scale(1.05)',
      borderRadius: '4px',
      boxShadow: '0 12px 16px rgba(0,0,0,.15)',
    }
  },
  cardHeaderTitle: {
    fontWeight: 600,
    marginBottom: '30px'
  },
  cardHeaderValue: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardBody: {}
}

export default createUseStyles(styles)