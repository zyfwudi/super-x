import { createUseStyles } from 'react-jss'
import { ColorCardBodyClasses } from './index.type'
import { JsStyles } from '../../../../utils/types'

type colorCardBodyClassType = JsStyles<keyof ColorCardBodyClasses>

const styles: colorCardBodyClassType = {
  colorCardBody: {},
  colorCardItem: {
    fontWeight: 400,
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    height: '46px',
    lineHeight: '46px',
    padding: '0 20px',
    boxSizing: 'border-box',
    cursor: 'pointer',
    transition: 'all .2s',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 12px 16px rgba(0,0,0,.15)',
      borderRadius: '2px !important',
    },
    outline: 'none !important',
  },
  showItem: {
    fontWeight: 'bold'
  },
  colorCardItemKey: {},
  colorCardItemTitle: {
    transition: 'all .2s',
    '$colorCardBody:hover &': {
      height: '23px',
      lineHeight: '23px',
      fontSize: '12px',
      opacity: 1
    }
  },
  colorCardItemContrast: {
    opacity: 0,
    transition: 'all .2s',
    '$colorCardBody:hover &': {
      height: '23px',
      lineHeight: '23px',
      fontSize: '12px',
      opacity: 1
    }
  },
  colorCardItemValue: {
    transition: 'all .2s',
    opacity: 0,
    '$colorCardBody:hover &': {
      opacity: 1
    }
  }
}

export default createUseStyles(styles)