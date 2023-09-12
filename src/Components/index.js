import { Text } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import BackgroundImage from './BackgroundImage';
import colors, { lightColors, darkColors } from './colors';
// import spacing from './spacing';
// import ViewPropTypes from './ViewPropTypes';
import fonts, { sizes, lineHeights } from './fonts';
// import ThemeProvider, { ThemeConsumer } from './ThemeProvider';
// import withTheme from './withTheme';
import PropTypes from 'prop-types';

const TextPropTypes = Text.propTypes;
const nodeType = PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.object,
    PropTypes.bool,
    PropTypes.func,
]);
export {
    BackgroundImage,
    colors,
    lightColors,
    darkColors,
    nodeType,
    getStatusBarHeight,
    // ViewPropTypes,
    TextPropTypes,
    fonts,
    sizes,
    lineHeights,
    // ThemeProvider,
    // ThemeConsumer,
    // withTheme,
    // spacing,
};
