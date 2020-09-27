import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
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
} from "./ImageTabBar.style";

export interface TabBar {
  id: number;
  text: string;
  number: number;
  image: any;
}

interface IProps {
  tabs: Array<TabBar>;
  textStyle: any;
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
  imageStyle: any;
  textIsActive: boolean;
  innerActiveTextColor: string;
  innerInActiveTextColor: string;
  innerTextStyle: any;
  activeBackgroundColor: string;
  activeInnerContainerBackgroundColor: string;
  onPress: (item: TabBar) => void;
  onChange: (item: TabBar) => void;
}

interface IState {
  selected: number;
}

export default class ImageTabBar extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      selected: props.firstSelectedItem || 0,
    };
  }

  // ? Lifecycle
  componentDidMount() {}

  handleOnPress = (item: TabBar) => {
    const { onPress, onChange } = this.props;
    this.setState({ selected: item.id });
    onPress && onPress(item);
    onChange && onChange(item);
  };

  renderImageTabs = () => {
    const {
      tabs,
      textStyle,
      height = 120,
      width = 75,
      borderRadius = 36,
      borderColor = "#E8E8E8",
      shadowColor = "#757575",
      innerContainerHeight = 50,
      innerContainerWeight = 50,
      innerContainerBorderRadius = 25,
      inActiveBackgroundColor = "#fff",
      inActiveTextColor = "#3A3A3A",
      activeTextColor = "#fff",
      ImageComponent = Image,
      imageStyle,
      textIsActive = false,
      innerActiveTextColor = "#F5C812",
      innerInActiveTextColor = "#F5C812",
      innerTextStyle,
      activeBackgroundColor = "#F5C812",
      activeInnerContainerBackgroundColor = "#fff",
    } = this.props;

    return tabs.map((item: TabBar) => {
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
              {item.image ? (
                <ImageComponent
                  source={item.image}
                  style={imageStyle || styles.imageStyle}
                />
              ) : textIsActive && item.number ? (
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
              ) : null}
            </View>
            <Text
              style={[
                _textStyle(inActiveTextColor, activeTextColor, isActive),
                textStyle,
              ]}
            >
              {item.text}
            </Text>
          </TouchableOpacity>
        </Androw>
      );
    });
  };

  render() {
    return <ScrollView horizontal={true}>{this.renderImageTabs()}</ScrollView>;
  }
}
