import _withStyles from 'isomorphic-style-loader/withStyles';
import { isDevelopment } from '../utils/mode';

const withStyles = (styles) => Component => isDevelopment ? _withStyles(styles)(Component) : Component;

export default withStyles;
