import {ViewStyle, ImageStyle, StyleSheet} from 'react-native';

/**
 * ? Local Imports
 */

interface Style {
  container: ViewStyle;
  imageStyle: ImageStyle;
}

export const _buttonStyle = (
  width: number,
  height: number,
  borderRadius: number,
  borderColor: string,
  backgroundColor: string,
  activeBackgroundColor: string,
  isActive: boolean,
) => ({
  width,
  height,
  borderRadius,
  borderColor,
  margin: 10,
  borderWidth: 1.4,
  alignItems: 'center',
  justifyContent: 'space-around',
  backgroundColor: isActive ? activeBackgroundColor : backgroundColor,
});

export const _shadowStyle = (shadowColor: string) => ({
  shadowColor,
  shadowRadius: 8,
  shadowOpacity: 0.2,
  shadowOffset: {
    width: 0,
    height: 3,
  },
});

export const _innerContainerStyle = (
  height: number,
  width: number,
  borderRadius: number,
  borderColor: string,
  backgroundColor: string,
  activeInnerContainerBackgroundColor: string,
  isActive: boolean,
) => ({
  height,
  width,
  borderRadius,
  borderColor: isActive ? '#F3C099' : borderColor,
  backgroundColor: isActive
    ? activeInnerContainerBackgroundColor
    : backgroundColor,
  borderWidth: 1.4,
  justifyContent: 'center',
  alignItems: 'center',
});

export const _textStyle = (
  inActiveTextColor: string,
  activeTextColor: string,
  isActive: boolean,
) => ({
  fontSize: 10,
  color: isActive ? activeTextColor : inActiveTextColor,
  fontWeight: 'bold',
  marginBottom: 10,
});

export const _innerTextStyle = (
  innerActiveTextColor: string,
  innerInActiveTextColor: string,
  isActive: boolean,
) => ({
  fontSize: 20,
  color: isActive ? innerActiveTextColor : innerInActiveTextColor,
  fontWeight: 'bold',
});

export default StyleSheet.create<Style>({
  container: {
    flexDirection: 'column',
    borderWidth: 2,
  },
  imageStyle: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});
