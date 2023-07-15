import {ViewStyle, ImageStyle, StyleSheet, TextStyle} from 'react-native';

interface Style {
  container: ViewStyle;
  imageStyle: ImageStyle;
}

export const _buttonStyle = (
  height: number,
  width: number,
  backgroundColor: string,
  activeBackgroundColor: string,
  isActive: boolean,
): ViewStyle => ({
  height,
  width,
  borderRadius: 40,
  margin: 10,
  alignItems: 'center',
  justifyContent: 'space-around',
  backgroundColor: isActive ? activeBackgroundColor : backgroundColor,
});

export const _innerContainerStyle = (
  height: number,
  width: number,
  backgroundColor: string,
): ViewStyle => ({
  height,
  width,
  borderRadius: 22,
  backgroundColor,
  justifyContent: 'center',
  alignItems: 'center',
});

export const _textStyle = (
  inActiveTextColor: string,
  activeTextColor: string,
  isActive: boolean,
): TextStyle => ({
  fontSize: 10,
  color: isActive ? activeTextColor : inActiveTextColor,
  fontWeight: 'bold',
  marginBottom: 10,
});

export const _innerTextStyle = (
  innerActiveTextColor: string,
  innerInActiveTextColor: string,
  isActive: boolean,
): TextStyle => ({
  fontSize: 23,
  color: isActive ? innerActiveTextColor : innerInActiveTextColor,
  fontWeight: 'bold',
});

export default StyleSheet.create<Style>({
  container: {
    flexDirection: 'column',
    borderWidth: 2,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 22,
  },
});
