return [
  {
    children: [],
    componentImport: 'react-bootstrap/Navbar',
    componentProps: [
      {
        description: 'Set a custom element for this component.',
        title: 'as',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'An href, when provided the Brand will render as an <a> element (unless as is provided).',
        title: 'href',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'default: \'navbar\'\n\t\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Navbar.Brand',
    isDefault: true,
    isActive: true,
    isPublic: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Navbar__Brand',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    closeTag: false,
    componentImport: '-',
    componentProps: [
      {
        description: 'backgroundColor',
        title: 'backgroundColor',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'An ID which is used to associate this InputAccessoryView to specified TextInput(s).',
        title: 'nativeID',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'style',
        title: 'style',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'A component which enables customization of the keyboard input accessory view on iOS. The input accessory view is displayed above the keyboard whenever a TextInput has focus. This component can be used to create custom toolbars.\n\nTo use this component wrap your custom toolbar with the InputAccessoryView component, and set a nativeID. Then, pass that nativeID as the inputAccessoryViewID of whatever TextInput you desire. A simple example:\n\nimport React, { Component } from \'react\';\nimport { View, ScrollView, AppRegistry, TextInput, InputAccessoryView, Button } from \'react-native\';\n\nexport default class UselessTextInput extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {text: \'Placeholder Text\'};\n  }\n\n  render() {\n    const inputAccessoryViewID = "uniqueID";\n    return (\n      <View>\n        <ScrollView keyboardDismissMode="interactive">\n          <TextInput\n            style={{\n              padding: 10,\n              paddingTop: 50,\n            }}\n            inputAccessoryViewID={inputAccessoryViewID}\n            onChangeText={text => this.setState({text})}\n            value={this.state.text}\n          />\n        </ScrollView>\n        <InputAccessoryView nativeID={inputAccessoryViewID}>\n          <Button\n            onPress={() => this.setState({text: \'Placeholder Text\'})}\n            name="Reset Text"\n          />\n        </InputAccessoryView>\n      </View>\n    );\n  }\n}\n\n// skip this line if using Create React Native App\nAppRegistry.registerComponent(\'AwesomeProject\', () => UselessTextInput);\n\nThis component can also be used to create sticky text inputs (text inputs which are anchored to the top of the keyboard). To do this, wrap a TextInput with the InputAccessoryView component, and don\'t set a nativeID. For an example, look at InputAccessoryViewExample.js.',
    isDefault: true,
    isActive: true,
    isPublic: true,
    provider: 'ReactNative',
    techno: 'React Native',
    title: 'InputAccessoryView',
    subtitle: 'ReactNative'
  },
];