import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleProp,
  TextStyle,
  ImageStyle,
  ViewStyle,
} from 'react-native';
/**
 * ? Local Imports
 */
import styles, {
  _buttonStyle,
  _innerContainerStyle,
  _textStyle,
  _innerTextStyle,
} from './BigTabBar.style';

/**
 * ? Types
 */
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;
type CustomImageStyleProp =
  | StyleProp<ImageStyle>
  | Array<StyleProp<ImageStyle>>;

export type ITabBar = {
  id: number;
  bottomText: string;
  innerText?: string;
  image?: any;
};

interface IProps {
  tabs: Array<ITabBar>;
  itemStyle?: ViewStyle;
  height: number;
  width: number;
  bottomTextStyle?: CustomTextStyleProp;
  selectedItem?: number;
  innerContainerHeight?: number;
  innerContainerWeight?: number;
  activeBackgroundColor?: string;
  inActiveBackgroundColor?: string;
  inActiveTextColor?: string;
  activeTextColor?: string;
  ImageComponent?: any;
  imageStyle?: CustomImageStyleProp;
  innerActiveTextColor?: string;
  innerInActiveTextColor?: string;
  innerTextStyle?: CustomTextStyleProp;
  onPress?: (item: ITabBar) => void;
  onChange?: (item: ITabBar) => void;
}

interface IState {
  selected: number;
}

export default class BigTabBar extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      selected: props.selectedItem || 0,
    };
  }

  handleOnPress = (item: ITabBar) => {
    const {onPress, onChange} = this.props;
    this.setState({selected: item.id});
    onPress && onPress(item);
    onChange && onChange(item);
  };

  renderBottomTextContainer = (text: string, isActive: boolean) => {
    const {
      bottomTextStyle,
      inActiveTextColor = '#6e685f',
      activeTextColor = '#fff',
    } = this.props;
    return (
      <Text
        style={[
          _textStyle(inActiveTextColor, activeTextColor, isActive),
          bottomTextStyle,
        ]}>
        {text}
      </Text>
    );
  };

  renderContentContainer = (item: ITabBar, isActive: boolean) => {
    const {
      innerContainerHeight = 50,
      innerContainerWeight = 46,
      ImageComponent = Image,
      imageStyle,
      innerActiveTextColor = '#F5C812',
      innerInActiveTextColor = '#F5C812',
      inActiveBackgroundColor = '#faeed9',
      innerTextStyle,
    } = this.props;

    return (
      <View
        style={_innerContainerStyle(
          innerContainerHeight,
          innerContainerWeight,
          inActiveBackgroundColor,
        )}>
        {item.image && ImageComponent ? (
          <ImageComponent
            source={item.image}
            style={styles.imageStyle || imageStyle}
          />
        ) : (
          item.innerText && (
            <Text
              style={[
                _innerTextStyle(
                  innerActiveTextColor,
                  innerInActiveTextColor,
                  isActive,
                ),
                innerTextStyle,
              ]}>
              {item.innerText}
            </Text>
          )
        )}
      </View>
    );
  };

  renderTabs = () => {
    const {
      tabs,
      inActiveBackgroundColor = '#faeed9',
      activeBackgroundColor = '#F5C812',
      itemStyle,
      height = 120,
      width = 72,
    } = this.props;

    return tabs.map((item: ITabBar) => {
      let isActive = false;
      if (item.id === this.state.selected) {
        isActive = !isActive;
      }
      return (
        <TouchableOpacity
          style={[
            _buttonStyle(
              height,
              width,
              inActiveBackgroundColor,
              activeBackgroundColor,
              isActive,
            ),
            itemStyle,
          ]}
          onPress={() => this.handleOnPress(item)}>
          {this.renderContentContainer(item, isActive)}
          {this.renderBottomTextContainer(item.bottomText, isActive)}
        </TouchableOpacity>
      );
    });
  };

  render() {
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {this.renderTabs()}
      </ScrollView>
    );
  }
}
