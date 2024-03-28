import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const COLORS = {
  // base colors
  primary: '#DF3A26',
  secondary: '#EE4D9C',
  success: '#A8DD1F',
  danger: '#ED1C24',

  // colors
  black: '#1E1E1E',
  lightGray: '#F2F5FB',
  white: '#FFFFFF',
  gray: '#8F92A1',
};

export const SIZES = {
  // global styles
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,

  // app dimensions
  windowWidth,
  windowHeight,
};

export const FONTS = {
  // font styling
  h1: {fontFamily: 'TisaSansPro-Black', fontSize: SIZES.h1, lineHeight: 30},
  h2: {fontFamily: 'TisaSansPro-Bold', fontSize: SIZES.h2, lineHeight: 22},
  h3: {fontFamily: 'TisaSansPro-Bold', fontSize: SIZES.h3, lineHeight: 16},
  h4: {fontFamily: 'TisaSansPro-Bold', fontSize: SIZES.h4, lineHeight: 14},
  body1: {
    fontFamily: 'TisaSansPro-Medium',
    fontSize: SIZES.body1,
    lineHeight: 30,
  },
  body2: {
    fontFamily: 'TisaSansPro-Medium',
    fontSize: SIZES.body2,
    lineHeight: 22,
  },
  body3: {
    fontFamily: 'TisaSansPro-Medium',
    fontSize: SIZES.body3,
    lineHeight: 16,
  },
  body4: {
    fontFamily: 'TisaSansPro-Light',
    fontSize: SIZES.body4,
    lineHeight: 14,
  },
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
