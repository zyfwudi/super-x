import { createUseStyles } from 'react-jss'
import { whiteBoardClasses } from './index.type'
import { JsStyles } from '../../utils/types'

type whiteBoardClassType = JsStyles<keyof whiteBoardClasses>

const styles: whiteBoardClassType = {
  header: {},
  canvas: {}
}

export default createUseStyles(styles)