<img alt="react native big tab bar logo" src="assets/big-tab-bar-logo.png" width="1050"/>

## Demo

<table>
<tr>
    <td align="center">
  <img alt="React Native Typescript Library Starter"
        src="assets/Screenshots/screenshot-number-example.png"
         />
  </td>
    <td align="center">
  <img alt="React Native Typescript Library Starter"
        src="assets/Screenshots/screenshot-image-example.png" />
</td>
  </tr>
  <tr>
  <img alt="React Native Typescript Library Starter"
        src="assets/Gif/big-tab-bar.gif" />
  </tr>
</table>

# Installation

Add the dependency:

```ruby
npm i react-native-big-tab-bar
```

## Peer Dependencies

###### IMPORTANT! You need install them

```js
"react": ">= 16.x.x",
"react-native": ">= 0.55.x",
"react-native-androw": "0.0.34"
```

# Usage

## Import

```jsx
import BigTabBar from "react-native-big-tab-bar";
```

## Fundamental Usage

```jsx
<BigTabBar tabs={tabs} />
```

# Configuration - Props

| Property                            |   Type   |  Default  | Description                                                                               |
| ----------------------------------- | :------: | :-------: | ----------------------------------------------------------------------------------------- |
| tabs                                |  array   |           | Set your tab bar items                                                                    |
| textStyle                           |  style   |     -     | set your custom text style                                                                |
| firstSelectedItem                   |  number  |     0     | set your initial item                                                                     |
| height                              |  number  |    120    | change the button's height                                                                |
| width                               |  number  |    75     | change the button's width                                                                 |
| borderRadius                        |  number  |    36     | change the button's border radius                                                         |
| borderColor                         |  string  | "#E8E8E8" | change the button's border color                                                          |
| shadowColor                         |  string  | "#757575" | change the button's shadow color                                                          |
| innerContainerHeight                |  number  |    50     | set the height of the inner container                                                     |
| innerContainerWeight                |  number  |    50     | set the width of the inner container                                                      |
| innerContainerBorderRadius          |  number  |    25     | set the border radius of the inner container                                              |
| inActiveBackgroundColor             |  string  |  "#fff"   | set the background color when it is inactive                                              |
| inActiveTextColor                   |  string  | "#3A3A3A" | set the text color when it is inactive                                                    |
| activeTextColor                     |  string  |  "#fff"   | set the text color when it is active                                                      |
| ImageComponent                      |          |           |                                                                                           |
| imageStyle                          |  style   |     -     | set your custom image style                                                               |
| textIsActive                        | boolean  |   false   | the number can be displayed on the inner container (instead of image)                     |
| innerActiveTextColor                |  string  | "#F5C812" | if there are numbers in the inner container, you can change the color when it is active   |
| innerInActiveTextColor              |  string  | "#F5C812" | if there are numbers in the inner container, you can change the color when it is inactive |
| activeTextColor                     |  string  |  "#fff"   | set the text color when it is active                                                      |
| innerTextStyle                      |  style   |           | set your custom text style                                                                |
| activeBackgroundColor               |  string  | "#F5C812" | set your active background color                                                          |
| activeInnerContainerBackgroundColor |  style   |  "#fff"   | set the color of the inner container when it is active                                    |
| innerActiveTextColor                |  string  | "#F5C812" | if there are numbers in the inner container, you can change the color when it is active   |
| onPress                             | function |    ()     | set your own function when onPress                                                        |
| onChange                            | function |    ()     | set your own function when onChange                                                       |

## Future Plans

- [x] ~~LICENSE~~

# Change Log

Change log will be here !

## Author

Sevval Eygul, sevvalleygull@gmail.com

## License

React Native Big Tab Bar is available under the MIT license. See the LICENSE file for more info.
