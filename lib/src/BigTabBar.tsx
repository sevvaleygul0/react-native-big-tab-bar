import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleProp,
  TextStyle,
  ImageStyle,
} from "react-native";
import Androw from "react-native-androw";
/**
 * ? Local Imports
 */
import styles, {
  _buttonStyle,
  _shadowStyle,
  _innerContainerStyle,
  _textStyle,
  _innerTextStyle,
} from "./BigTabBar.style";
/**
 * ? Types
 */
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;
type CustomImageStyleProp =
  | StyleProp<ImageStyle>
  | Array<StyleProp<ImageStyle>>;

export type ITabBar = {
  id: number;
  text: string;
  number?: number;
  image?: any;
};

interface IProps {
  tabs: Array<ITabBar>;
  textStyle: CustomTextStyleProp;
  firstSelectedItem: number;
  height: number;
  width: number;
  borderRadius: number;
  borderColor: string;
  shadowColor: string;
  innerContainerHeight: number;
  innerContainerWeight: number;
  innerContainerBorderRadius: number;
  inActiveBackgroundColor: string;
  inActiveTextColor: string;
  activeTextColor: string;
  ImageComponent: any;
  imageStyle: CustomImageStyleProp;
  textIsActive: boolean;
  innerActiveTextColor: string;
  innerInActiveTextColor: string;
  innerTextStyle: CustomTextStyleProp;
  activeBackgroundColor: string;
  activeInnerContainerBackgroundColor: string;
  onPress: (item: ITabBar) => void;
  onChange: (item: ITabBar) => void;
}

interface IState {
  selected: number;
}

export default class BigTabBar extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      selected: props.firstSelectedItem || 0,
    };
  }

  handleOnPress = (item: ITabBar) => {
    const { onPress, onChange } = this.props;
    this.setState({ selected: item.id });
    onPress && onPress(item);
    onChange && onChange(item);
  };

  renderTextContainer = (text: string, isActive: boolean) => {
    const {
      textStyle,
      inActiveTextColor = "#3A3A3A",
      activeTextColor = "#fff",
    } = this.props;
    return (
      <Text
        style={[
          _textStyle(inActiveTextColor, activeTextColor, isActive),
          textStyle,
        ]}
      >
        {text}
      </Text>
    );
  };

  renderContentContainer = (item: ITabBar, isActive: boolean) => {
    const {
      borderColor = "#E8E8E8",
      innerContainerHeight = 50,
      innerContainerWeight = 46,
      innerContainerBorderRadius = 22,
      inActiveBackgroundColor = "#fff",
      ImageComponent = Image,
      imageStyle,
      textIsActive = false,
      innerActiveTextColor = "#F5C812",
      innerInActiveTextColor = "#F5C812",
      innerTextStyle,
      activeInnerContainerBackgroundColor = "#fff",
    } = this.props;

    return (
      <View
        style={_innerContainerStyle(
          innerContainerHeight,
          innerContainerWeight,
          innerContainerBorderRadius,
          borderColor,
          inActiveBackgroundColor,
          activeInnerContainerBackgroundColor,
          isActive,
        )}
      >
        {item.image && ImageComponent ? (
          <ImageComponent
            source={item.image}
            style={imageStyle || styles.imageStyle}
          />
        ) : (
          textIsActive &&
          item.number && (
            <Text
              style={[
                _innerTextStyle(
                  innerActiveTextColor,
                  innerInActiveTextColor,
                  isActive,
                ),
                innerTextStyle,
              ]}
            >
              {item.number}
            </Text>
          )
        )}
      </View>
    );
  };

  renderImageTabs = () => {
    const {
      tabs,
      height = 120,
      width = 75,
      borderRadius = 36,
      borderColor = "#E8E8E8",
      shadowColor = "#757575",
      inActiveBackgroundColor = "#fff",
      activeBackgroundColor = "#F5C812",
    } = this.props;

    return tabs.map((item: ITabBar) => {
      let isActive;
      if (item.id === this.state.selected) isActive = !isActive;
      return (
        <Androw style={_shadowStyle(shadowColor)} key={item.id}>
          <TouchableOpacity
            style={_buttonStyle(
              width,
              height,
              borderRadius,
              borderColor,
              inActiveBackgroundColor,
              activeBackgroundColor,
              isActive,
            )}
            onPress={() => this.handleOnPress(item)}
          >
            {this.renderContentContainer(item, isActive)}
            {this.renderTextContainer(item.text, isActive)}
          </TouchableOpacity>
        </Androw>
      );
    });
  };

  render() {
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {this.renderImageTabs()}
      </ScrollView>
    );
  }
}
