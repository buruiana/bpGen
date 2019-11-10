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
    id: '07jxlV9GKFbAGGcMFwi9',
    isDefault: true,
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
    id: '0UxXr3VZ3Veb2IucQ868',
    isDefault: true,
    provider: 'ReactNative',
    techno: 'React Native',
    title: 'InputAccessoryView',
    subtitle: 'ReactNative'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/Carousel',
    componentProps: [
      {
        description: 'default: 0\t\n\ncontrolled by: onSelect, initial prop: defaultActiveindex\nControls the current visible slide',
        title: 'activeIndex',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'default: true\t\n\nShow the Carousel previous and next arrows for changing the current slide',
        title: 'controls',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: false\t\n\nCross fade slides instead of the default slide animation',
        title: 'fade',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: true\t\n\nShow a set of slide position indicators',
        title: 'indicators',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: 5000\t\n\nThe amount of time to delay between automatically cycling an item. If null, carousel will not automatically cycle.',
        title: 'interval',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'default: true\t\n\nEnable keyboard navigation via the Arrow keys for changing slides',
        title: 'keyboard',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'type: node\ndefault: <span aria-hidden="true" className="carousel-control-next-icon" />\t\n\nOverride the default button icon for the "next" control',
        title: 'nextIcon',
        propType: 'PropTypes.node',
        propTypeIsrequired: false
      },
      {
        description: 'default: \'Next\'\t\n\nLabel shown to screen readers only, can be used to show the next element in the carousel. Set to null to deactivate.',
        title: 'nextLabel',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'controls activeIndex\nCallback fired when the active item changes.\n\n(eventKey: any, direction: \'prev\' | \'next\', ?event: Object) => any',
        title: 'onSelect',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'A callback fired after a slide transitions in',
        title: 'onSlideEnd',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'default: true\t\n\nTemporarily puase the slide interval when the mouse hovers over a slide.',
        title: 'pauseOnHover',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: <span aria-hidden="true" className="carousel-control-prev-icon" />\t\n\nOverride the default button icon for the "previous" control',
        title: 'prevIcon',
        propType: 'PropTypes.node',
        propTypeIsrequired: false
      },
      {
        description: 'default: \'Previous\'\t\n\nLabel shown to screen readers only, can be used to show the previous element in the carousel. Set to null to deactivate.',
        title: 'prevLabel',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'default: true\n\t\nEnables animation on the Carousel as it transitions between slides.',
        title: 'slide',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: true\t\n\nSlides will loop to the start when the last one transitions',
        title: 'wrap',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: \'carousel\'\t\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Carousels\nA slideshow component for cycling through elements—images or slides of text—like a carousel.\n\nExample#\nCarousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content. While carousels support previous/next controls and indicators, they’re not explicitly required. Add and customize as you see fit.\n\n<Carousel>\n  <Carousel.Item>\n    <img\n      className="d-block w-100"\n      src="holder.js/800x400?text=First slide&bg=373940"\n      alt="First slide"\n    />\n    <Carousel.Caption>\n      <h3>First slide label</h3>\n      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n    </Carousel.Caption>\n  </Carousel.Item>\n  <Carousel.Item>\n    <img\n      className="d-block w-100"\n      src="holder.js/800x400?text=Second slide&bg=282c34"\n      alt="Third slide"\n    />\n\n    <Carousel.Caption>\n      <h3>Second slide label</h3>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n    </Carousel.Caption>\n  </Carousel.Item>\n  <Carousel.Item>\n    <img\n      className="d-block w-100"\n      src="holder.js/800x400?text=Third slide&bg=20232a"\n      alt="Third slide"\n    />\n\n    <Carousel.Caption>\n      <h3>Third slide label</h3>\n      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n    </Carousel.Caption>\n  </Carousel.Item>\n</Carousel>;\n\nControlled#\nYou can can also control the Carousel state, via the activeIndex prop and onSelect handler.\n\nclass ControlledCarousel extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleSelect = this.handleSelect.bind(this);\n\n    this.state = {\n      index: 0,\n      direction: null,\n    };\n  }\n\n  handleSelect(selectedIndex, e) {\n    this.setState({\n      index: selectedIndex,\n      direction: e.direction,\n    });\n  }\n\n  render() {\n    const { index, direction } = this.state;\n\n    return (\n      <Carousel\n        activeIndex={index}\n        direction={direction}\n        onSelect={this.handleSelect}\n      >\n        <Carousel.Item>\n          <img\n            className="d-block w-100"\n            src="holder.js/800x400?text=First slide&bg=373940"\n            alt="First slide"\n          />\n          <Carousel.Caption>\n            <h3>First slide label</h3>\n            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n          </Carousel.Caption>\n        </Carousel.Item>\n        <Carousel.Item>\n          <img\n            className="d-block w-100"\n            src="holder.js/800x400?text=Second slide&bg=282c34"\n            alt="Third slide"\n          />\n\n          <Carousel.Caption>\n            <h3>Second slide label</h3>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n          </Carousel.Caption>\n        </Carousel.Item>\n        <Carousel.Item>\n          <img\n            className="d-block w-100"\n            src="holder.js/800x400?text=Third slide&bg=20232a"\n            alt="Third slide"\n          />\n\n          <Carousel.Caption>\n            <h3>Third slide label</h3>\n            <p>\n              Praesent commodo cursus magna, vel scelerisque nisl consectetur.\n            </p>\n          </Carousel.Caption>\n        </Carousel.Item>\n      </Carousel>\n    );\n  }\n}\n\nrender(<ControlledCarousel />);',
    id: '0W0tWTKic5qZOeM8ga1Z',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Carousel',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    closeTag: false,
    componentImport: '-',
    componentProps: [
      {
        description: 'The actual data to render, akin to the data prop in FlatList.\n\nType: array of Sections',
        title: 'sections',
        propType: 'PropTypes.array',
        propTypeIsrequired: false
      },
      {
        description: 'How many items to render in the initial batch. This should be enough to fill the screen but not much more. Note these items will never be unmounted as part of the windowed rendering in order to improve perceived performance of scroll-to-top actions.',
        title: 'initialNumToRender',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'Used to extract a unique key for a given item at the specified index. Key is used for caching and as the react key to track item re-ordering. The default extractor checks item.key, then falls back to using the index, like react does. Note that this sets keys for each item, but each overall section still needs its own key.\n\nType: (item: Item, index: number) => string',
        title: 'keyExtractor',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Default renderer for every item in every section. Can be over-ridden on a per-section basis. Should return a React element.\n\nThe render function will be passed an object with the following keys:\n\n\'item\' (object) - the item object as specified in this section\'s data key\n\'index\' (number) - Item\'s index within the section.\n\'section\' (object) - The full section object as specified in sections.\n\'separators\' (object) - An object with the following keys:\n\'highlight\' (function) - () => void\n\'unhighlight\' (function) - () => void\n\'updateProps\' (function) - (select, newProps) => void\n\'select\' (enum) - possible values are \'leading\', \'trailing\'\n\'newProps\' (object)\n',
        title: 'renderItem',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Called once when the scroll position gets within onEndReachedThreshold of the rendered content.\n\nType: [(info: {distanceFromEnd: number}) => void]',
        title: 'onEndReached',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'A marker property for telling the list to re-render (since it implements PureComponent). If any of your renderItem, Header, Footer, etc. functions depend on anything outside of the data prop, stick it here and treat it immutably.',
        title: 'extraData',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Rendered in between each item, but not at the top or bottom. By default, highlighted, section, and [leading/trailing][Item/Separator] props are provided. renderItem provides separators.highlight/unhighlight which will update the highlighted prop, but you can also add custom props with separators.updateProps.\n\nType: [component, function, element]',
        title: 'ItemSeparatorComponent',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Reverses the direction of scroll. Uses scale transforms of -1.',
        title: 'inverted',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Rendered at the very end of the list. Can be a React Component Class, a render function, or a rendered element.\n\nType: [component, function, element]',
        title: 'ListFooterComponent',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'legacyImplementation',
        title: 'legacyImplementation',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Rendered when the list is empty. Can be a React Component Class, a render function, or a rendered element.\n\nType: [component, function, element]',
        title: 'ListEmptyComponent',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'How far from the end (in units of visible length of the list) the bottom edge of the list must be from the end of the content to trigger the onEndReached callback. Thus a value of 0.5 will trigger onEndReached when the end of the content is within half the visible length of the list.',
        title: 'onEndReachedThreshold',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly.\n\nType: [() => void]',
        title: 'onRefresh',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Called when the viewability of rows changes, as defined by the viewabilityConfig prop.\n\nThe function will be passed an object with the following keys:\n\n\'viewableItems\' (array of ViewTokens)\n\'changed\' (array of ViewTokens)\nThe ViewToken type is exported by ViewabilityHelper.js:',
        title: 'onViewableItemsChanged',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Set this true while waiting for new data from a refresh.',
        title: 'refreshing',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Note: may have bugs (missing content) in some circumstances - use at your own risk.\n\nThis may improve scroll performance for large lists.',
        title: 'removeClippedSubviews',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Rendered at the very beginning of the list. Can be a React Component Class, a render function, or a rendered element.\n\nType: component, function, element',
        title: 'ListHeaderComponent',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Rendered at the bottom of each section.\n\nType: [(info: {section: SectionT}) => ?React.Element]',
        title: 'renderSectionFooter',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'Rendered at the top of each section. These stick to the top of the ScrollView by default on iOS. See stickySectionHeadersEnabled.\n\nType: [(info: {section: SectionT}) => ?React.Element]',
        title: 'renderSectionHeader',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'Rendered at the top and bottom of each section (note this is different from ItemSeparatorComponent which is only rendered between items). These are intended to separate sections from the headers above and below and typically have the same highlight response as ItemSeparatorComponent. Also receives highlighted, [leading/trailing][Item/Separator], and any custom props from separators.updateProps.',
        title: 'SectionSeparatorComponent',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Makes section headers stick to the top of the screen until the next one pushes it off. Only enabled by default on iOS because that is the platform standard there.',
        title: 'stickySectionHeadersEnabled',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      }
    ],
    description: 'A performant interface for rendering sectioned lists, supporting the most handy features:\n\nFully cross-platform.\nConfigurable viewability callbacks.\nList header support.\nList footer support.\nItem separator support.\nSection header support.\nSection separator support.\nHeterogeneous data and item rendering support.\nPull to Refresh.\nScroll loading.\nIf you don\'t need section support and want a simpler interface, use <FlatList>.\n\nSimple Examples:\n\n// Example 1 (Homogeneous Rendering)\n<SectionList\n  renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}\n  renderSectionHeader={({section: {name}}) => (\n    <Text style={{fontWeight: \'bold\'}}>{name}</Text>\n  )}\n  sections={[\n    {title: \'name1\', data: [\'item1\', \'item2\']},\n    {title: \'name2\', data: [\'item3\', \'item4\']},\n    {title: \'name3\', data: [\'item5\', \'item6\']},\n  ]}\n  keyExtractor={(item, index) => item + index}\n/>\n// Example 2 (Heterogeneous Rendering / No Section Headers)\nconst overrideRenderItem = ({ item, index, section: { name, data } }) => <Text key={index}>Override{item}</Text>\n\n<SectionList\n  renderItem={({ item, index, section }) => <Text key={index}>{item}</Text>}\n  sections={[\n    { title: \'name1\', data: [\'item1\', \'item2\'], renderItem: overrideRenderItem },\n    { title: \'name2\', data: [\'item3\', \'item4\'] },\n    { title: \'name3\', data: [\'item5\', \'item6\'] },\n  ]}\n/>\n\nThis is a convenience wrapper around <VirtualizedList>, and thus inherits its props (as well as those of <ScrollView> that aren\'t explicitly listed here, along with the following caveats:\n\nInternal state is not preserved when content scrolls out of the render window. Make sure all your data is captured in the item data or external stores like Flux, Redux, or Relay.\nThis is a PureComponent which means that it will not re-render if props remain shallow- equal. Make sure that everything your renderItem function depends on is passed as a prop (e.g. extraData) that is not === after updates, otherwise your UI may not update on changes. This includes the data prop and parent component state.\nIn order to constrain memory and enable smooth scrolling, content is rendered asynchronously offscreen. This means it\'s possible to scroll faster than the fill rate and momentarily see blank content. This is a tradeoff that can be adjusted to suit the needs of each application, and we are working on improving it behind the scenes.\nBy default, the list looks for a key prop on each item and uses that for the React key. Alternatively, you can provide a custom keyExtractor prop.',
    id: '0edsmGABQyCcxvjxEeFe',
    isDefault: true,
    provider: 'ReactNative',
    techno: 'React Native',
    title: 'SectionList',
    subtitle: 'ReactNative'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/Container',
    componentProps: [
      {
        description: 'default: <div>\t\n\nYou can use a custom element for this component',
        title: 'as',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'default: false\t\n\nAllow the Container to fill all of it\'s availble horizontal space.',
        title: 'fluid',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: \'container\'\t\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Grid system#\nBootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with flexbox and is fully responsive. Below is an example and an in-depth look at how the grid comes together.\n\nNew to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background, terminology, guidelines, and code snippets.\n\nAuto-layout columns#\nWhen no column widths are specified the Col component will render equal width columns\n\n<Container>\n  <Row>\n    <Col>1 of 2</Col>\n    <Col>2 of 2</Col>\n  </Row>\n  <Row>\n    <Col>1 of 3</Col>\n    <Col>2 of 3</Col>\n    <Col>3 of 3</Col>\n  </Row>\n</Container>;\n\nSetting one column width#\nAuto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column.\n\n<Container>\n  <Row>\n    <Col>1 of 3</Col>\n    <Col xs={6}>2 of 3 (wider)</Col>\n    <Col>3 of 3</Col>\n  </Row>\n  <Row>\n    <Col>1 of 3</Col>\n    <Col xs={5}>2 of 3 (wider)</Col>\n    <Col>3 of 3</Col>\n  </Row>\n</Container>;\n\nVariable width content#\nSet the column value (for any breakpoint size) to "auto" to size columns based on the natural width of their content.\n\n<Container>\n  <Row className="justify-content-md-center">\n    <Col xs lg="2">\n      1 of 3\n    </Col>\n    <Col md="auto">Variable width content</Col>\n    <Col xs lg="2">\n      3 of 3\n    </Col>\n  </Row>\n  <Row>\n    <Col>1 of 3</Col>\n    <Col md="auto">Variable width content</Col>\n    <Col xs lg="2">\n      3 of 3\n    </Col>\n  </Row>\n</Container>;\n\nResponsive grids#\nThe Col lets you specify column widths across 5 breakpoint sizes (xs, sm, md, large, and xl). For every breakpoint, you can specify the amount of columns to span, or set the prop to <Col lg={true} /> for auto layout widths.\n\n<Container>\n  <Row>\n    <Col sm={8}>sm=8</Col>\n    <Col sm={4}>sm=4</Col>\n  </Row>\n  <Row>\n    <Col sm>sm=true</Col>\n    <Col sm>sm=true</Col>\n    <Col sm>sm=true</Col>\n  </Row>\n</Container>;\n\nYou can also mix and match breakpoints to create different grids depending on the screen size.\n\n<Container>\n  {/* Stack the columns on mobile by making one full-width and the other half-width */}\n  <Row>\n    <Col xs={12} md={8}>\n      xs=12 md=8\n    </Col>\n    <Col xs={6} md={4}>\n      xl=6 md=4\n    </Col>\n  </Row>\n\n  {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}\n  <Row>\n    <Col xs={6} md={4}>\n      xs=6 md=4\n    </Col>\n    <Col xs={6} md={4}>\n      xs=6 md=4\n    </Col>\n    <Col xs={6} md={4}>\n      xs=6 md=4\n    </Col>\n  </Row>\n\n  {/* Columns are always 50% wide, on mobile and desktop */}\n  <Row>\n    <Col xs={6}>xs=6</Col>\n    <Col xs={6}>xs=6</Col>\n  </Row>\n</Container>;\n\nThe Col breakpoint props also have a more complicated object prop form: {span: number, order: number, offset: number} for specifying offsets and ordering affects.\n\nYou can use the `order` property to control the visual order of your content.\n\n<Container>\n  <Row>\n    <Col xs>First, but unordered</Col>\n    <Col xs={{ order: 12 }}>Second, but last</Col>\n    <Col xs={{ order: 1 }}>Third, but second</Col>\n  </Row>\n</Container>;\n\nFor offsetting grid columns you can set an `offset` value, or, for more general layout, use the margin class utilities.\n\n<Container>\n  <Row>\n    <Col md={4}>md=4</Col>\n    <Col md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col>\n  </Row>\n  <Row>\n    <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>\n    <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>\n  </Row>\n  <Row>\n    <Col md={{ span: 6, offset: 3 }}>{`md={{ span: 6, offset: 3 }}`}</Col>\n  </Row>\n</Container>;',
    id: '1Lr6DNskjxqvYJY4ksx9',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Container',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/ListGroup',
    componentProps: [
      {
        description: 'default: <div>\t\n\nYou can use a custom element type for this component.',
        title: 'as',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'type: \'flush\'\ndefault: null\t\nAdds a variant to the list-group',
        title: 'variant',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'required\t\ndefault: \'list-group\'\t\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: true
      }
    ],
    description: 'List groups\nList groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.\n\nBasic Example#\n\n<ListGroup>\n  <ListGroup.Item>Cras justo odio</ListGroup.Item>\n  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>\n  <ListGroup.Item>Morbi leo risus</ListGroup.Item>\n  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>\n  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>\n</ListGroup>;\n\nActive items#\nSet the active prop to indicate the list groups current active selection.\n\n<ListGroup as="ul">\n  <ListGroup.Item as="li" active>\n    Cras justo odio\n  </ListGroup.Item>\n  <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>\n  <ListGroup.Item as="li" disabled>\n    Morbi leo risus\n  </ListGroup.Item>\n  <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>\n</ListGroup>;\n\nDisabled items#\nSet the disabled prop to prevent actions on a <List.Item>. For elements that aren\'t naturally disable-able (like anchors) onClick handlers are added that call preventDefault to mimick disabled behavior.\n\n<ListGroup>\n  <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>\n  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>\n  <ListGroup.Item>Morbi leo risus</ListGroup.Item>\n  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>\n</ListGroup>;\n\nActionable items#\nToggle the action prop to create actionable list group items, with disabled, hover and active styles. List item actions will render a <button> or <a> (depending on the presence of an href) by default but can be overriden by setting the as prop as usual.\n\nList items actions are distinct from plain items to ensure that click or tap affordances aren\'t applied to non-interactive items.\n\nfunction alertClicked() {\n  alert(\'You clicked the third ListGroupItem\');\n}\n\nrender(\n  <ListGroup defaultActiveKey="#link1">\n    <ListGroup.Item action href="#link1">\n      Link 1\n    </ListGroup.Item>\n    <ListGroup.Item action href="#link2" disabled>\n      Link 2\n    </ListGroup.Item>\n    <ListGroup.Item action>This one is a button</ListGroup.Item>\n  </ListGroup>,\n);\n\nFlush#\nAdd the flush variant to remove outer borders and rounded corners to render list group items edge-to-edge in a parent container such as a Card.\n\n<ListGroup variant="flush">\n  <ListGroup.Item>Cras justo odio</ListGroup.Item>\n  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>\n  <ListGroup.Item>Morbi leo risus</ListGroup.Item>\n  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>\n</ListGroup>;\n\nContextual classes#\nUse contextual variants on <List.Item>s to style them with a stateful background and color.\n\n<ListGroup>\n  <ListGroup.Item>No style</ListGroup.Item>\n  <ListGroup.Item variant="primary">Primary</ListGroup.Item>\n  <ListGroup.Item variant="secondary">Secondary</ListGroup.Item>\n  <ListGroup.Item variant="success">Success</ListGroup.Item>\n  <ListGroup.Item variant="danger">Danger</ListGroup.Item>\n  <ListGroup.Item variant="warning">Warning</ListGroup.Item>\n  <ListGroup.Item variant="info">Info</ListGroup.Item>\n  <ListGroup.Item variant="light">Light</ListGroup.Item>\n  <ListGroup.Item variant="dark">Dark</ListGroup.Item>\n</ListGroup>;\n\nWhen paired with actions, additional hover and active styles apply.\n\n<ListGroup>\n  <ListGroup.Item>No style</ListGroup.Item>\n  <ListGroup.Item variant="primary">Primary</ListGroup.Item>\n  <ListGroup.Item action variant="secondary">\n    Secondary\n  </ListGroup.Item>\n  <ListGroup.Item action variant="success">\n    Success\n  </ListGroup.Item>\n  <ListGroup.Item action variant="danger">\n    Danger\n  </ListGroup.Item>\n  <ListGroup.Item action variant="warning">\n    Warning\n  </ListGroup.Item>\n  <ListGroup.Item action variant="info">\n    Info\n  </ListGroup.Item>\n  <ListGroup.Item action variant="light">\n    Light\n  </ListGroup.Item>\n  <ListGroup.Item action variant="dark">\n    Dark\n  </ListGroup.Item>\n</ListGroup>;\n\nTabbed Interfaces#\nYou can also use the Tab components to create ARIA compliant tabbable interfaces with the <ListGroup> component. Swap out the <Nav> component for the list group and you are good to go.\n\n<Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">\n  <Row>\n    <Col sm={4}>\n      <ListGroup>\n        <ListGroup.Item action href="#link1">\n          Link 1\n        </ListGroup.Item>\n        <ListGroup.Item action href="#link2">\n          Link 2\n        </ListGroup.Item>\n      </ListGroup>\n    </Col>\n    <Col sm={8}>\n      <Tab.Content>\n        <Tab.Pane eventKey="#link1">\n          <Sonnet />\n        </Tab.Pane>\n        <Tab.Pane eventKey="#link2">\n          <Sonnet />\n        </Tab.Pane>\n      </Tab.Content>\n    </Col>\n  </Row>\n</Tab.Container>;\n\n',
    id: '1dQZMf8j5DvgF82nG8UH',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'ListGroup',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    closeTag: false,
    componentImport: '-',
    componentProps: [
      {
        description: 'The progress value (between 0 and 1).',
        title: 'progress',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'A stretchable image to display as the progress bar.\n\nType: Image.propTypes.source',
        title: 'progressImage',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'The tint color of the progress bar itself.',
        title: 'progressTintColor',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'The progress bar style.\n\nType: enum(\'default\', \'bar\')',
        title: 'progressViewStyle',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'A stretchable image to display behind the progress bar.\n\nType: Image.propTypes.source',
        title: 'trackImage',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'The tint color of the progress bar track.',
        title: 'trackTintColor',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Use ProgressViewIOS to render a UIProgressView on iOS.',
    id: '1mSuGdq4MPT7XZAyQ22P',
    isDefault: true,
    provider: 'ReactNative',
    techno: 'React Native',
    title: 'ProgressViewIOS',
    subtitle: 'ReactNative'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/lib/ListGroupItem',
    componentProps: [
      {
        description: 'active',
        title: 'active',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'disabled',
        title: 'disabled',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'header',
        title: 'header',
        propType: 'PropTypes.node',
        propTypeIsrequired: false
      },
      {
        description: 'listItem',
        title: 'listItem',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'onClick',
        title: 'onClick',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'href',
        title: 'href',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'type',
        title: 'type',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Component visual or contextual style variants.',
        title: 'bsStyle',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'list-group-item\'',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'ListGroupItem',
    id: '1yVUJyS4Bii1zh44buOF',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'ListGroupItem'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/Card',
    componentProps: [
      {
        description: 'type: elementType\ndefault <div>\t\n\nYou can use a custom element type for this component.',
        title: 'as',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'type: \'primary\' | \'secondary\' | \'success\' | \'danger\' | \'warning\' | \'info\' | \'dark\' | \'light\'\n\nSets card background',
        title: 'bg',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'default: false\t\n\nWhen this prop is set, it creates a Card with a Card.Body inside passing the children directly to it',
        title: 'body',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'type: \'primary\' | \'secondary\' | \'success\' | \'danger\' | \'warning\' | \'info\' | \'dark\' | \'light\'\n\nSets card border color',
        title: 'border',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'type: \'primary\' | \'secondary\' | \'success\' | \'danger\' | \'warning\' | \'info\' | \'dark\' | \'light\' | \'white\' | \'muted\'\n\nSets card text color',
        title: 'text',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'required\t\ndefault: \'card\'\t\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: true
      }
    ],
    description: 'Cards\nBootstrap’s cards provide a flexible and extensible content container with multiple variants and options.\n\nBasic Example#\n\nCard style={{ width: \'18rem\' }}>\n  <Card.Img variant="top" src="holder.js/100px180" />\n  <Card.Body>\n    <Card.name>Card name</Card.name>\n    <Card.Text>\n      Some quick example text to build on the card name and make up the bulk of\n      the card\'s content.\n    </Card.Text>\n    <Button variant="primary">Go somewhere</Button>\n  </Card.Body>\n</Card>;\n\nContent types#\nBody#\nUse <Card.Body> to pad content inside a <Card>.\n\n<Card>\n  <Card.Body>This is some text within a card body.</Card.Body>\n</Card>;\n\nAlernatively, you can use this shorthand version for Cards with body only, and no other children\n\n<Card body>This is some text within a card body.</Card>;\n\nname, text, and links#\nUsing <Card.name>, <Card.Subname>, and <Card.Text> inside the <Card.Body> will line them up nicely. <Card.Link>s are used to line up links next to each other.\n\n<Card style={{ width: \'18rem\' }}>\n  <Card.Body>\n    <Card.name>Card name</Card.name>\n    <Card.Subname className="mb-2 text-muted">Card Subname</Card.Subname>\n    <Card.Text>\n      Some quick example text to build on the card name and make up the bulk of\n      the card\'s content.\n    </Card.Text>\n    <Card.Link href="#">Card Link</Card.Link>\n    <Card.Link href="#">Another Link</Card.Link>\n  </Card.Body>\n</Card>;\n\nList Groups#\nCreate lists of content in a card with a flush list group.\n\n<Card style={{ width: \'18rem\' }}>\n  <ListGroup variant="flush">\n    <ListGroup.Item>Cras justo odio</ListGroup.Item>\n    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>\n    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>\n  </ListGroup>\n</Card>;\n\n<Card style={{ width: \'18rem\' }}>\n  <Card.Header>Featured</Card.Header>\n  <ListGroup variant="flush">\n    <ListGroup.Item>Cras justo odio</ListGroup.Item>\n    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>\n    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>\n  </ListGroup>\n</Card>;\n\nKitchen Sink#\n\n<Card style={{ width: \'18rem\' }}>\n  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />\n  <Card.Body>\n    <Card.name>Card name</Card.name>\n    <Card.Text>\n      Some quick example text to build on the card name and make up the bulk of\n      the card\'s content.\n    </Card.Text>\n  </Card.Body>\n  <ListGroup className="list-group-flush">\n    <ListGroupItem>Cras justo odio</ListGroupItem>\n    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>\n    <ListGroupItem>Vestibulum at eros</ListGroupItem>\n  </ListGroup>\n  <Card.Body>\n    <Card.Link href="#">Card Link</Card.Link>\n    <Card.Link href="#">Another Link</Card.Link>\n  </Card.Body>\n</Card>;\n\nHeader and Footer#\nYou may add a header by adding a <Card.Header> component.\n\n<Card>\n  <Card.Header>Featured</Card.Header>\n  <Card.Body>\n    <Card.name>Special name treatment</Card.name>\n    <Card.Text>\n      With supporting text below as a natural lead-in to additional content.\n    </Card.Text>\n    <Button variant="primary">Go somewhere</Button>\n  </Card.Body>\n</Card>;\n\nA <CardHeader> can be styled by passing a heading element through the <as> prop\n\n<Card>\n  <Card.Header as="h5">Featured</Card.Header>\n  <Card.Body>\n    <Card.name>Special name treatment</Card.name>\n    <Card.Text>\n      With supporting text below as a natural lead-in to additional content.\n    </Card.Text>\n    <Button variant="primary">Go somewhere</Button>\n  </Card.Body>\n</Card>;\n\n<Card>\n  <Card.Header>Quote</Card.Header>\n  <Card.Body>\n    <blockquote className="blockquote mb-0">\n      <p>\n        {\' \'}\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere\n        erat a ante.{\' \'}\n      </p>\n      <footer className="blockquote-footer">\n        Someone famous in <cite name="Source name">Source name</cite>\n      </footer>\n    </blockquote>\n  </Card.Body>\n</Card>;\n\n<Card className="text-center">\n  <Card.Header>Featured</Card.Header>\n  <Card.Body>\n    <Card.name>Special name treatment</Card.name>\n    <Card.Text>\n      With supporting text below as a natural lead-in to additional content.\n    </Card.Text>\n    <Button variant="primary">Go somewhere</Button>\n  </Card.Body>\n  <Card.Footer className="text-muted">2 days ago</Card.Footer>\n</Card>;\n\nImages#\nCards include a few options for working with images. Choose from appending “image caps” at either end of a card, overlaying images with card content, or simply embedding the image in a card.\n\nImage caps#\nSimilar to headers and footers, cards can include top and bottom “image caps”—images at the top or bottom of a card.\n\n<>\n  <Card>\n    <Card.Img variant="top" src="holder.js/100px180" />\n    <Card.Body>\n      <Card.Text>\n        Some quick example text to build on the card name and make up the bulk\n        of the card\'s content.\n      </Card.Text>\n    </Card.Body>\n  </Card>\n  <br />\n  <Card>\n    <Card.Body>\n      <Card.Text>\n        Some quick example text to build on the card name and make up the bulk\n        of the card\'s content.\n      </Card.Text>\n    </Card.Body>\n    <Card.Img variant="bottom" src="holder.js/100px180" />\n  </Card>\n</>;\n\nImage Overlays#\nTurn an image into a card background and overlay your card’s text. Depending on the image, you may or may not need additional styles or utilities.\n\n<Card className="bg-dark text-white">\n  <Card.Img src="holder.js/100px270" alt="Card image" />\n  <Card.ImgOverlay>\n    <Card.name>Card name</Card.name>\n    <Card.Text>\n      This is a wider card with supporting text below as a natural lead-in to\n      additional content. This content is a little bit longer.\n    </Card.Text>\n    <Card.Text>Last updated 3 mins ago</Card.Text>\n  </Card.ImgOverlay>\n</Card>;\n\nNavigation#\nAdd some navigation to a card’s header (or block) with React Bootstrap’s Nav components.\n\n<Card>\n  <Card.Header>\n    <Nav variant="tabs" defaultActiveKey="#first">\n      <Nav.Item>\n        <Nav.Link href="#first">Active</Nav.Link>\n      </Nav.Item>\n      <Nav.Item>\n        <Nav.Link href="#link">Link</Nav.Link>\n      </Nav.Item>\n      <Nav.Item>\n        <Nav.Link href="#disabled" disabled>\n          Disabled\n        </Nav.Link>\n      </Nav.Item>\n    </Nav>\n  </Card.Header>\n  <Card.Body>\n    <Card.name>Special name treatment</Card.name>\n    <Card.Text>\n      With supporting text below as a natural lead-in to additional content.\n    </Card.Text>\n    <Button variant="primary">Go somewhere</Button>\n  </Card.Body>\n</Card>;\n\n<Card>\n  <Card.Header>\n    <Nav variant="pills" defaultActiveKey="#first">\n      <Nav.Item>\n        <Nav.Link href="#first">Active</Nav.Link>\n      </Nav.Item>\n      <Nav.Item>\n        <Nav.Link href="#link">Link</Nav.Link>\n      </Nav.Item>\n      <Nav.Item>\n        <Nav.Link href="#disabled" disabled>\n          Disabled\n        </Nav.Link>\n      </Nav.Item>\n    </Nav>\n  </Card.Header>\n  <Card.Body>\n    <Card.name>Special name treatment</Card.name>\n    <Card.Text>\n      With supporting text below as a natural lead-in to additional content.\n    </Card.Text>\n    <Button variant="primary">Go somewhere</Button>\n  </Card.Body>\n</Card>;\n\nCard Styles#\nBackground Color#\nYou can change a card\'s appearance by changing their <bg>, and <text> props.\n\n<>\n  <Card bg="primary" text="white" style={{ width: \'18rem\' }}>\n    <Card.Header>Header</Card.Header>\n    <Card.Body>\n      <Card.name>Primary Card name</Card.name>\n      <Card.Text>\n        Some quick example text to build on the card name and make up the bulk\n        of the card\'s content.\n      </Card.Text>\n    </Card.Body>\n  </Card>\n  <br />\n\n  <Card bg="secondary" text="white" style={{ width: \'18rem\' }}>\n    <Card.Header>Header</Card.Header>\n    <Card.Body>\n      <Card.name>Secondary Card name</Card.name>\n      <Card.Text>\n        Some quick example text to build on the card name and make up the bulk\n        of the card\'s content.\n      </Card.Text>\n    </Card.Body>\n  </Card>\n  <br />\n\n  <Card bg="success" text="white" style={{ width: \'18rem\' }}>\n    <Card.Header>Header</Card.Header>\n    <Card.Body>\n      <Card.name>Success Card name</Card.name>\n      <Card.Text>\n        Some quick example text to build on the card name and make up the bulk\n        of the card\'s content.\n      </Card.Text>\n    </Card.Body>\n  </Card>\n  <br />\n\n  <Card bg="danger" text="white" style={{ width: \'18rem\' }}>\n    <Card.Header>Header</Card.Header>\n    <Card.Body>\n      <Card.name>Danger Card name</Card.name>\n      <Card.Text>\n        Some quick example text to build on the card name and make up the bulk\n        of the card\'s content.\n      </Card.Text>\n    </Card.Body>\n  </Card>\n  <br />\n\n  <Card bg="warning" text="white" style={{ width: \'18rem\' }}>\n    <Card.Header>Header</Card.Header>\n    <Card.Body>\n      <Card.name>Warning Card name</Card.name>\n      <Card.Text>\n        Some quick example text to build on the card name and make up the bulk\n        of the card\'s content.\n      </Card.Text>\n    </Card.Body>\n  </Card>\n  <br />\n\n  <Card bg="info" text="white" style={{ width: \'18rem\' }}>\n    <Card.Header>Header</Card.Header>\n    <Card.Body>\n      <Card.name>Info Card name</Card.name>\n      <Card.Text>\n        Some quick example text to build on the card name and make up the bulk\n        of the card\'s content.\n      </Card.Text>\n    </Card.Body>\n  </Card>\n  <br />\n\n  <Card bg="dark" text="white" style={{ width: \'18rem\' }}>\n    <Card.Header>Header</Card.Header>\n    <Card.Body>\n      <Card.name>Dark Card name</Card.name>\n      <Card.Text>\n        Some quick example text to build on the card name and make up the bulk\n        of the card\'s content.\n      </Card.Text>\n    </Card.Body>\n  </Card>\n  <br />\n\n  <Card bg="light" style={{ width: \'18rem\' }}>\n    <Card.Header>Header</Card.Header>\n    <Card.Body>\n      <Card.name>Light Card name</Card.name>\n      <Card.Text>\n        Some quick example text to build on the card name and make up the bulk\n        of the card\'s content.\n      </Card.Text>\n    </Card.Body>\n  </Card>\n  <br />\n</>;\n\nBorder Color#\n\n<>\n  <Card border="primary" style={{ width: \'18rem\' }}>\n    <Card.Header>Header</Card.Header>\n    <Card.Body>\n      <Card.name>Primary Card name</Card.name>\n      <Card.Text>\n        Some quick example text to build on the card name and make up the bulk\n        of the card\'s content.\n      </Card.Text>\n    </Card.Body>\n  </Card>\n  <br />\n\n  <Card border="secondary" style={{ width: \'18rem\' }}>\n    <Card.Header>Header</Card.Header>\n    <Card.Body>\n      <Card.name>Secondary Card name</Card.name>\n      <Card.Text>\n        Some quick example text to build on the card name and make up the bulk\n        of the card\'s content.\n      </Card.Text>\n    </Card.Body>\n  </Card>\n  <br />\n\n  <Card border="success" style={{ width: \'18rem\' }}>\n    <Card.Header>Header</Card.Header>\n    <Card.Body>\n      <Card.name>Success Card name</Card.name>\n      <Card.Text>\n        Some quick example text to build on the card name and make up the bulk\n        of the card\'s content.\n      </Card.Text>\n    </Card.Body>\n  </Card>\n  <br />\n\n  <Card border="danger" style={{ width: \'18rem\' }}>\n    <Card.Header>Header</Card.Header>\n    <Card.Body>\n      <Card.name>Danger Card name</Card.name>\n      <Card.Text>\n        Some quick example text to build on the card name and make up the bulk\n        of the card\'s content.\n      </Card.Text>\n    </Card.Body>\n  </Card>\n  <br />\n\n  <Card border="warning" style={{ width: \'18rem\' }}>\n    <Card.Header>Header</Card.Header>\n    <Card.Body>\n      <Card.name>Warning Card name</Card.name>\n      <Card.Text>\n        Some quick example text to build on the card name and make up the bulk\n        of the card\'s content.\n      </Card.Text>\n    </Card.Body>\n  </Card>\n  <br />\n\n  <Card border="info" style={{ width: \'18rem\' }}>\n    <Card.Header>Header</Card.Header>\n    <Card.Body>\n      <Card.name>Info Card name</Card.name>\n      <Card.Text>\n        Some quick example text to build on the card name and make up the bulk\n        of the card\'s content.\n      </Card.Text>\n    </Card.Body>\n  </Card>\n  <br />\n\n  <Card border="dark" style={{ width: \'18rem\' }}>\n    <Card.Header>Header</Card.Header>\n    <Card.Body>\n      <Card.name>Dark Card name</Card.name>\n      <Card.Text>\n        Some quick example text to build on the card name and make up the bulk\n        of the card\'s content.\n      </Card.Text>\n    </Card.Body>\n  </Card>\n  <br />\n\n  <Card border="light" style={{ width: \'18rem\' }}>\n    <Card.Header>Header</Card.Header>\n    <Card.Body>\n      <Card.name>Light Card name</Card.name>\n      <Card.Text>\n        Some quick example text to build on the card name and make up the bulk\n        of the card\'s content.\n      </Card.Text>\n    </Card.Body>\n  </Card>\n  <br />\n</>;\n\nCard layout#\nCard Groups#\n\n<CardGroup>\n  <Card>\n    <Card.Img variant="top" src="holder.js/100px160" />\n    <Card.Body>\n      <Card.name>Card name</Card.name>\n      <Card.Text>\n        This is a wider card with supporting text below as a natural lead-in to\n        additional content. This content is a little bit longer.\n      </Card.Text>\n    </Card.Body>\n    <Card.Footer>\n      <small className="text-muted">Last updated 3 mins ago</small>\n    </Card.Footer>\n  </Card>\n  <Card>\n    <Card.Img variant="top" src="holder.js/100px160" />\n    <Card.Body>\n      <Card.name>Card name</Card.name>\n      <Card.Text>\n        This card has supporting text below as a natural lead-in to additional\n        content.{\' \'}\n      </Card.Text>\n    </Card.Body>\n    <Card.Footer>\n      <small className="text-muted">Last updated 3 mins ago</small>\n    </Card.Footer>\n  </Card>\n  <Card>\n    <Card.Img variant="top" src="holder.js/100px160" />\n    <Card.Body>\n      <Card.name>Card name</Card.name>\n      <Card.Text>\n        This is a wider card with supporting text below as a natural lead-in to\n        additional content. This card has even longer content than the first to\n        show that equal height action.\n      </Card.Text>\n    </Card.Body>\n    <Card.Footer>\n      <small className="text-muted">Last updated 3 mins ago</small>\n    </Card.Footer>\n  </Card>\n</CardGroup>;\n\nCard Deck#\n\n<CardDeck>\n  <Card>\n    <Card.Img variant="top" src="holder.js/100px160" />\n    <Card.Body>\n      <Card.name>Card name</Card.name>\n      <Card.Text>\n        This is a wider card with supporting text below as a natural lead-in to\n        additional content. This content is a little bit longer.\n      </Card.Text>\n    </Card.Body>\n    <Card.Footer>\n      <small className="text-muted">Last updated 3 mins ago</small>\n    </Card.Footer>\n  </Card>\n  <Card>\n    <Card.Img variant="top" src="holder.js/100px160" />\n    <Card.Body>\n      <Card.name>Card name</Card.name>\n      <Card.Text>\n        This card has supporting text below as a natural lead-in to additional\n        content.{\' \'}\n      </Card.Text>\n    </Card.Body>\n    <Card.Footer>\n      <small className="text-muted">Last updated 3 mins ago</small>\n    </Card.Footer>\n  </Card>\n  <Card>\n    <Card.Img variant="top" src="holder.js/100px160" />\n    <Card.Body>\n      <Card.name>Card name</Card.name>\n      <Card.Text>\n        This is a wider card with supporting text below as a natural lead-in to\n        additional content. This card has even longer content than the first to\n        show that equal height action.\n      </Card.Text>\n    </Card.Body>\n    <Card.Footer>\n      <small className="text-muted">Last updated 3 mins ago</small>\n    </Card.Footer>\n  </Card>\n</CardDeck>;\n\nCard Columns#\n\n<CardColumns>\n  <Card>\n    <Card.Img variant="top" src="holder.js/100px160" />\n    <Card.Body>\n      <Card.name>Card name that wraps to a new line</Card.name>\n      <Card.Text>\n        This is a longer card with supporting text below as a natural lead-in to\n        additional content. This content is a little bit longer.\n      </Card.Text>\n    </Card.Body>\n  </Card>\n  <Card className="p-3">\n    <blockquote className="blockquote mb-0 card-body">\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere\n        erat a ante.\n      </p>\n      <footer className="blockquote-footer">\n        <small className="text-muted">\n          Someone famous in <cite name="Source name">Source name</cite>\n        </small>\n      </footer>\n    </blockquote>\n  </Card>\n  <Card>\n    <Card.Img variant="top" src="holder.js/100px160" />\n    <Card.Body>\n      <Card.name>Card name</Card.name>\n      <Card.Text>\n        This card has supporting text below as a natural lead-in to additional\n        content.{\' \'}\n      </Card.Text>\n    </Card.Body>\n    <Card.Footer>\n      <small className="text-muted">Last updated 3 mins ago</small>\n    </Card.Footer>\n  </Card>\n  <Card bg="primary" text="white" className="text-center p-3">\n    <blockquote className="blockquote mb-0 card-body">\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere\n        erat a ante.\n      </p>\n      <footer className="blockquote-footer">\n        <small className="text-muted">\n          Someone famous in <cite name="Source name">Source name</cite>\n        </small>\n      </footer>\n    </blockquote>\n  </Card>\n  <Card className="text-center">\n    <Card.Body>\n      <Card.name>Card name</Card.name>\n      <Card.Text>\n        This card has supporting text below as a natural lead-in to additional\n        content.{\' \'}\n      </Card.Text>\n      <Card.Text>\n        <small className="text-muted">Last updated 3 mins ago</small>\n      </Card.Text>\n    </Card.Body>\n  </Card>\n  <Card>\n    <Card.Img src="holder.js/100px160" />\n  </Card>\n  <Card className="text-right">\n    <blockquote className="blockquote mb-0 card-body">\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere\n        erat a ante.\n      </p>\n      <footer className="blockquote-footer">\n        <small className="text-muted">\n          Someone famous in <cite name="Source name">Source name</cite>\n        </small>\n      </footer>\n    </blockquote>\n  </Card>\n  <Card>\n    <Card.Body>\n      <Card.name>Card name</Card.name>\n      <Card.Text>\n        This is a wider card with supporting text below as a natural lead-in to\n        additional content. This card has even longer content than the first to\n        show that equal height action.\n      </Card.Text>\n      <Card.Text>\n        <small className="text-muted">Last updated 3 mins ago</small>\n      </Card.Text>\n    </Card.Body>\n  </Card>\n</CardColumns>;',
    id: '2BeFPCXrDt2xOjsapxEx',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    subtitle: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Card'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/Image',
    componentProps: [
      {
        description: 'default: false\n\t\nSets image as fluid image.',
        title: 'fluid',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: false\t\n\nSets image shape as rounded.',
        title: 'rounded',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: false\n\t\nSets image shape as circle.',
        title: 'roundedCircle',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: false\t\n\nSets image shape as thumbnail.',
        title: 'thumbnail',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: \'img\'\t\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Images#\nShape#\nUse the rounded, roundedCircle and thumbnail props to customise the image.\n\n<Container>\n  <Row>\n    <Col xs={6} md={4}>\n      <Image src="holder.js/171x180" rounded />\n    </Col>\n    <Col xs={6} md={4}>\n      <Image src="holder.js/171x180" roundedCircle />\n    </Col>\n    <Col xs={6} md={4}>\n      <Image src="holder.js/171x180" thumbnail />\n    </Col>\n  </Row>\n</Container>;\n\nFluid#\nUse the fluid to scale image nicely to the parent element.\n\n<Image src="holder.js/100px250" fluid />;',
    id: '2beDhFmimoEiIIpZGIw5',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Image',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    closeTag: false,
    componentImport: '-',
    componentProps: [
      {
        description: 'maskElement',
        title: 'maskElement',
        propType: 'PropTypes.element',
        propTypeIsrequired: true
      }
    ],
    description: 'Renders the child view with a mask specified in the maskElement prop.\n\nExample\nimport React from \'react\';\nimport { MaskedViewIOS, Text, View } from \'react-native\';\n\nclass MyMaskedView extends React.Component {\n  render() {\n    return (\n      // Determines shape of the mask\n      <MaskedViewIOS\n        style={{ flex: 1, flexDirection: \'row\', height: \'100%\' }}\n        maskElement={\n          <View style={{\n            // Transparent background because mask is based off alpha channel.\n            backgroundColor: \'transparent\',\n            flex: 1,\n            justifyContent: \'center\',\n            alignItems: \'center\',\n          }}>\n            <Text style={{\n              fontSize: 60,\n              color: \'black\',\n              fontWeight: \'bold\',\n            }}>\n              Basic Mask\n            </Text>\n          </View>\n        }\n      >\n        { /* Shows behind the mask, you can put anything here, such as an image */ }\n        <View style={{ flex: 1, height: \'100%\', backgroundColor: \'#324376\' }} />\n        <View style={{ flex: 1, height: \'100%\', backgroundColor: \'#F5DD90\' }} />\n        <View style={{ flex: 1, height: \'100%\', backgroundColor: \'#F76C5E\' }} />\n      </MaskedViewIOS>\n    );\n  }\n}\nThe following image demonstrates that you can put almost anything behind the mask. The three examples shown are masked <View>, <Text>, and <Image>.\n\nThe alpha channel of the view rendered by the maskElement prop determines how much of the view\'s content and background shows through. Fully or partially opaque pixels allow the underlying content to show through but fully transparent pixels block that content.',
    id: '2cyb6tJMxyeKvRhIqHqf',
    isDefault: true,
    provider: 'ReactNative',
    techno: 'React Native',
    title: 'MaskedViewIOS',
    subtitle: 'ReactNative'
  },
  {
    children: [],
    closeTag: false,
    componentImport: '-',
    componentProps: [
      {
        description: 'It specifies whether the children are visible or not. If you see a blank content, you probably forgot to add a selected one.',
        title: 'selected',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Little red bubble that sits at the top right of the icon.\n\nstring, number',
        title: 'badge',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'A custom icon for the tab. It is ignored when a system icon is defined.\n\nImage.propTypes.source',
        title: 'icon',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Callback when this tab is being selected, you should change the state of your component to set selected={true}.',
        title: 'onPress',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'If set to true it renders the image as original, it defaults to being displayed as a template',
        title: 'renderAsOriginal',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Background color for the badge. Available since iOS 10.',
        title: 'badgeColor',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'A custom icon when the tab is selected. It is ignored when a system icon is defined. If left empty, the icon will be tinted in blue.\n\nImage.propTypes.source',
        title: 'selectedIcon',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'React style object.',
        title: 'style',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Items comes with a few predefined system icons. Note that if you are using them, the name and selectedIcon will be overridden with the system ones.\n\nenum(\'bookmarks\', \'contacts\', \'downloads\', \'favorites\', \'featured\', \'history\', \'more\', \'most-recent\', \'most-viewed\', \'recents\', \'search\', \'top-rated\')',
        title: 'systemIcon',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Text that appears under the icon. It is ignored when a system icon is defined.',
        title: 'name',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: '(Apple TV only)* When set to true, this view will be focusable and navigable using the Apple TV remote.',
        title: 'isTVSelectable',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      }
    ],
    description: 'TabBarIOS.Item',
    id: '2poVTlL3U0SPlT8WgC0B',
    isDefault: true,
    provider: 'ReactNative',
    techno: 'React Native',
    title: 'TabBarIOS__Item',
    subtitle: 'ReactNative'
  },
  {
    children: [],
    closeTag: false,
    componentImport: '-',
    componentProps: [
      {
        description: 'renderItem({ item: Object, index: number, separators: { highlight: Function, unhighlight: Function, updateProps: Function(select: string, newProps: Object) } }) => ?React.Element\n\nTakes an item from data and renders it into the list.\n\nProvides additional metadata like index if you need it, as well as a more generic separators.updateProps function which let you set whatever props you want to change the rendering of either the leading separator or trailing separator in case the more common highlight and unhighlight (which set the highlighted: boolean prop) are insufficient for your use case.',
        title: 'renderItem',
        propType: 'PropTypes.func',
        propTypeIsrequired: true
      },
      {
        description: 'For simplicity, data is just a plain array. If you want to use something else, like an immutable list, use the underlying VirtualizedList directly.',
        title: 'data',
        propType: 'PropTypes.array',
        propTypeIsrequired: true
      },
      {
        description: 'Rendered in between each item, but not at the top or bottom. By default, highlighted and leadingItem props are provided. renderItem provides separators.highlight/unhighlight which will update the highlighted prop, but you can also add custom props with separators.updateProps.',
        title: 'ItemSeparatorComponent',
        propType: 'PropTypes.instanceOf()',
        propTypeIsrequired: false
      },
      {
        description: 'Rendered when the list is empty. Can be a React Component Class, a render function, or a rendered element.',
        title: 'ListEmptyComponent',
        propType: 'PropTypes.instanceOf()',
        propTypeIsrequired: false
      },
      {
        description: 'Rendered at the bottom of all the items. Can be a React Component Class, a render function, or a rendered element.\n\n',
        title: 'ListFooterComponent',
        propType: 'PropTypes.instanceOf()',
        propTypeIsrequired: false
      },
      {
        description: 'Rendered at the top of all the items. Can be a React Component Class, a render function, or a rendered element.',
        title: 'ListHeaderComponent',
        propType: 'PropTypes.instanceOf()',
        propTypeIsrequired: false
      },
      {
        description: 'Optional custom style for multi-item rows generated when numColumns > 1.',
        title: 'columnWrapperStyle',
        propType: 'PropTypes.object',
        propTypeIsrequired: false
      },
      {
        description: 'A marker property for telling the list to re-render (since it implements PureComponent). If any of your renderItem, Header, Footer, etc. functions depend on anything outside of the data prop, stick it here and treat it immutably.',
        title: 'extraData',
        propType: 'PropTypes.object',
        propTypeIsrequired: false
      },
      {
        description: '(data, index) => {length: number, offset: number, index: number}\ngetItemLayout is an optional optimization that let us skip the measurement of dynamic content if you know the height of items ahead of time. getItemLayout is both efficient and easy to use if you have fixed height items, for example:\n\n  getItemLayout={(data, index) => (\n    {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}\n  )}\nAdding getItemLayout can be a great performance boost for lists of several hundred items. Remember to include separator length (height or width) in your offset calculation if you specify ItemSeparatorComponent.',
        title: 'getItemLayout',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'If true, renders items next to each other horizontally instead of stacked vertically.',
        title: 'horizontal',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'How many items to render in the initial batch. This should be enough to fill the screen but not much more. Note these items will never be unmounted as part of the windowed rendering in order to improve perceived performance of scroll-to-top actions.',
        title: 'initialNumToRender',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'Instead of starting at the top with the first item, start at initialScrollIndex. This disables the "scroll to top" optimization that keeps the first initialNumToRender items always rendered and immediately renders the items starting at this initial index. Requires getItemLayout to be implemented.',
        title: 'initialScrollIndex',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'Reverses the direction of scroll. Uses scale transforms of -1.',
        title: 'inverted',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: '(item: object, index: number) => string;\nUsed to extract a unique key for a given item at the specified index. Key is used for caching and as the react key to track item re-ordering. The default extractor checks item.key, then falls back to using the index, like React does.',
        title: 'keyExtractor',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Multiple columns can only be rendered with horizontal={false} and will zig-zag like a flexWrap layout. Items should all be the same height - masonry layouts are not supported.',
        title: 'numColumns',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: '(info: {distanceFromEnd: number}) => void\nCalled once when the scroll position gets within onEndReachedThreshold of the rendered content.',
        title: 'onEndReached',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'How far from the end (in units of visible length of the list) the bottom edge of the list must be from the end of the content to trigger the onEndReached callback. Thus a value of 0.5 will trigger onEndReached when the end of the content is within half the visible length of the list.',
        title: 'onEndReachedThreshold',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: '() => void\nIf provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly.',
        title: 'onRefresh',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: '(info: {\n    viewableItems: array,\n    changed: array,\n  }) => void\nCalled when the viewability of rows changes, as defined by the viewabilityConfig prop.',
        title: 'onViewableItemsChanged',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Set this when offset is needed for the loading indicator to show correctly.',
        title: 'progressViewOffset',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'May not have full feature parity and is meant for debugging and performance comparison.',
        title: 'legacyImplementation',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Set this true while waiting for new data from a refresh.',
        title: 'refreshing',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'This may improve scroll performance for large lists.\n\nNote: May have bugs (missing content) in some circumstances - use at your own risk.',
        title: 'removeClippedSubviews',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'See ViewabilityHelper.js for flow type and further documentation.\n\nAt least one of the viewAreaCoveragePercentThreshold or itemVisiblePercentThreshold is required. This needs to be done in the constructor to avoid following error (ref):\n\n  Error: Changing viewabilityConfig on the fly is not supported`\nconstructor (props) {\n  super(props)\n\n  this.viewabilityConfig = {\n      waitForInteraction: true,\n      viewAreaCoveragePercentThreshold: 95\n  }\n}\n<FlatList\n    viewabilityConfig={this.viewabilityConfig}\n  ...\nminimumViewTime\nMinimum amount of time (in milliseconds) that an item must be physically viewable before the viewability callback will be fired. A high number means that scrolling through content without stopping will not mark the content as viewable.\n\nviewAreaCoveragePercentThreshold\nPercent of viewport that must be covered for a partially occluded item to count as "viewable", 0-100. Fully visible items are always considered viewable. A value of 0 means that a single pixel in the viewport makes the item viewable, and a value of 100 means that an item must be either entirely visible or cover the entire viewport to count as viewable.\n\nitemVisiblePercentThreshold\nSimilar to viewAreaPercentThreshold, but considers the percent of the item that is visible, rather than the fraction of the viewable area it covers.\n\nwaitForInteraction\nNothing is considered viewable until the user scrolls or recordInteraction is called after render.',
        title: 'viewabilityConfig',
        propType: 'PropTypes.object',
        propTypeIsrequired: false
      },
      {
        description: 'List of ViewabilityConfig/onViewableItemsChanged pairs. A specific onViewableItemsChanged will be called when its corresponding ViewabilityConfig\'s conditions are met. See ViewabilityHelper.js for flow type and further documentation.',
        title: 'viewabilityConfigCallbackPairs',
        propType: 'PropTypes.array',
        propTypeIsrequired: false
      }
    ],
    description: 'A performant interface for rendering simple, flat lists, supporting the most handy features:\n\nFully cross-platform.\nOptional horizontal mode.\nConfigurable viewability callbacks.\nHeader support.\nFooter support.\nSeparator support.\nPull to Refresh.\nScroll loading.\nScrollToIndex support.\nIf you need section support, use <SectionList>.\n\nMinimal Example:\n\n<FlatList\n  data={[{key: \'a\'}, {key: \'b\'}]}\n  renderItem={({item}) => <Text>{item.key}</Text>}\n/>\nMore complex, multi-select example demonstrating PureComponent usage for perf optimization and avoiding bugs.\n\nBy binding the onPressItem handler, the props will remain === and PureComponent will prevent wasteful re-renders unless the actual id, selected, or name props change, even if the components rendered in MyListItem did not have such optimizations.\nBy passing extraData={this.state} to FlatList we make sure FlatList itself will re-render when the state.selected changes. Without setting this prop, FlatList would not know it needs to re-render any items because it is also a PureComponent and the prop comparison will not show any changes.\nkeyExtractor tells the list to use the ids for the react keys instead of the default key property.\nclass MyListItem extends React.PureComponent {\n  _onPress = () => {\n    this.props.onPressItem(this.props.id);\n  };\n\n  render() {\n    const textColor = this.props.selected ? "red" : "black";\n    return (\n      <TouchableOpacity onPress={this._onPress}>\n        <View>\n          <Text style={{ color: textColor }}>\n            {this.props.name}\n          </Text>\n        </View>\n      </TouchableOpacity>\n    );\n  }\n}\n\nclass MultiSelectList extends React.PureComponent {\n  state = {selected: (new Map(): Map<string, boolean>)};\n\n  _keyExtractor = (item, index) => item.id;\n\n  _onPressItem = (id: string) => {\n    // updater functions are preferred for transactional updates\n    this.setState((state) => {\n      // copy the map rather than modifying state.\n      const selected = new Map(state.selected);\n      selected.set(id, !selected.get(id)); // toggle\n      return {selected};\n    });\n  };\n\n  _renderItem = ({item}) => (\n    <MyListItem\n      id={item.id}\n      onPressItem={this._onPressItem}\n      selected={!!this.state.selected.get(item.id)}\n      name={item.name}\n    />\n  );\n\n  render() {\n    return (\n      <FlatList\n        data={this.props.data}\n        extraData={this.state}\n        keyExtractor={this._keyExtractor}\n        renderItem={this._renderItem}\n      />\n    );\n  }\n}\nThis is a convenience wrapper around <VirtualizedList>, and thus inherits its props (as well as those of <ScrollView>) that aren\'t explicitly listed here, along with the following caveats:\n\nInternal state is not preserved when content scrolls out of the render window. Make sure all your data is captured in the item data or external stores like Flux, Redux, or Relay.\nThis is a PureComponent which means that it will not re-render if props remain shallow- equal. Make sure that everything your renderItem function depends on is passed as a prop (e.g. extraData) that is not === after updates, otherwise your UI may not update on changes. This includes the data prop and parent component state.\nIn order to constrain memory and enable smooth scrolling, content is rendered asynchronously offscreen. This means it\'s possible to scroll faster than the fill rate and momentarily see blank content. This is a tradeoff that can be adjusted to suit the needs of each application, and we are working on improving it behind the scenes.\nBy default, the list looks for a key prop on each item and uses that for the React key. Alternatively, you can provide a custom keyExtractor prop.\nAlso inherits ScrollView Props, unless it is nested in another FlatList of same orientation.',
    id: '3DaBXIAYkHu0K2vmN6UG',
    isDefault: true,
    provider: 'ReactNative',
    techno: 'React Native',
    title: 'FlatList',
    subtitle: 'ReactNative'
  },
  {
    children: [],
    closeTag: false,
    componentImport: '-',
    componentProps: [
      {
        description: 'Handler to be called when the user taps the button',
        title: 'onPress',
        propType: 'PropTypes.func',
        propTypeIsrequired: true
      },
      {
        description: 'Text to display inside the button',
        title: 'name',
        propType: 'PropTypes.string',
        propTypeIsrequired: true
      },
      {
        description: 'Text to display for blindness accessibility features',
        title: 'accessibilityLabel',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'If true, disable all interactions for this component.',
        title: 'disabled',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Used to locate this view in end-to-end tests.',
        title: 'testID',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: '(Apple TV only) TV preferred focus (see documentation for the View component).',
        title: 'hasTVPreferredFocus',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      }
    ],
    description: 'A basic button component that should render nicely on any platform. Supports a minimal level of customization.\nIf this button doesn\'t look right for your app, you can build your own button using TouchableOpacity or TouchableNativeFeedback. For inspiration, look at the source code for this button component. Or, take a look at the wide variety of button components built by the community.\n\nExample usage:\n\nimport { Button } from \'react-native\';\n...\n\n<Button\n  onPress={onPressLearnMore}\n  name="Learn More"\n  color="#841584"\n  accessibilityLabel="Learn more about this purple button"\n/>',
    id: '42IlYcOkmgSD3mybsCNc',
    isDefault: true,
    provider: 'ReactNative',
    techno: 'React Native',
    title: 'Button',
    subtitle: 'ReactNative'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/FigureImage',
    componentProps: [
      {
        description: 'default: true\t\nSets image as fluid image.',
        title: 'fluid',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Sets image shape as rounded.',
        title: 'rounded',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Sets image shape as circle.',
        title: 'roundedCircle',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Sets image shape as thumbnail.',
        title: 'thumbnail',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: \'img\'\t\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'FigureImage',
    id: '45hoGiq9kpzmQu1lzcwZ',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'FigureImage',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/Alert',
    componentProps: [
      {
        description: 'Type: elementType\t\nDefault: <DivStyledAsH4>\n\nYou can use a custom element type for this component.',
        title: 'as',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'default: \'alert-heading\'\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: true
      }
    ],
    description: 'Alert.Heading',
    id: '48Jey3qC5n46EvcP7Ab6',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    subtitle: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Alert__Heading'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/lib/Navbar',
    componentProps: [
      {
        description: 'Create a fixed navbar along the top of the screen, that scrolls with the page\n\ndefault: false',
        title: 'fixedTop',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Create a fixed navbar along the bottom of the screen, that scrolls with the page\n\ndefault: false',
        title: 'fixedBottom',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Create a full-width navbar that scrolls away with the page\n\ndefault: false',
        title: 'staticTop',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'An alternative dark visual style for the Navbar\n\ndefault: false',
        title: 'inverse',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Allow the Navbar to fluidly adjust to the page or container width, instead of at the predefined screen breakpoints\n\ndefault: false',
        title: 'fluid',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Set a custom element for this component.\n\ndefault: \'nav\'',
        title: 'componentClass',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'A callback fired when the <Navbar> body collapses or expands. Fired when a <Navbar.Toggle> is clicked and called with the new expanded boolean value.',
        title: 'onToggle',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'A callback fired when a descendant of a child <Nav> is selected. Should be used to execute complex closing or other miscellaneous actions desired after selecting a descendant of <Nav>. Does nothing if no <Nav> or <Nav> descendants exist. The callback is called with an eventKey, which is a prop from the selected <Nav> descendant, and an event.\n\nfunction (\n Any eventKey,\n SyntheticEvent event?\n)\nFor basic closing behavior after all <Nav> descendant onSelect events in mobile viewports, try using collapseOnSelect.\n\nNote: If you are manually closing the navbar using this OnSelect prop, ensure that you are setting expanded to false and not toggling between true and false.',
        title: 'onSelect',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Sets expanded to false after the onSelect event of a descendant of a child <Nav>. Does nothing if no <Nav> or <Nav> descendants exist.\n\nThe onSelect callback should be used instead for more complex operations that need to be executed after the select event of <Nav> descendants.\n\ndefault: false',
        title: 'collapseOnSelect',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Explicitly set the visiblity of the navbar body\n\ndefault: false',
        title: 'expanded',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Component visual or contextual style variants.\n\ndefault: false',
        title: 'bsStyle',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      }
    ],
    description: '#Navbars Navbar\nNavbars are responsive meta components that serve as navigation headers for your application or site.\n\nThey also support all the different Bootstrap classes as properties. Just camelCase the css class and remove navbar from it.\n\nFor example navbar-fixed-top becomes the property fixedTop. The different properties are fixedTop, fixedBottom, staticTop, inverse, and fluid.\n\nYou can also align elements to the right by specifying the pullRight prop on the Nav, and other sub-components.\n\n#Navbar Basic Example\n\n<Navbar>\n  <Navbar.Header>\n    <Navbar.Brand>\n      <a href="#home">React-Bootstrap</a>\n    </Navbar.Brand>\n  </Navbar.Header>\n  <Nav>\n    <NavItem eventKey={1} href="#">\n      Link\n    </NavItem>\n    <NavItem eventKey={2} href="#">\n      Link\n    </NavItem>\n    <NavDropdown eventKey={3} name="Dropdown" id="basic-nav-dropdown">\n      <MenuItem eventKey={3.1}>Action</MenuItem>\n      <MenuItem eventKey={3.2}>Another action</MenuItem>\n      <MenuItem eventKey={3.3}>Something else here</MenuItem>\n      <MenuItem divider />\n      <MenuItem eventKey={3.4}>Separated link</MenuItem>\n    </NavDropdown>\n  </Nav>\n</Navbar>;\n\nAdditional Import Options\nThe Navbar Header, Toggle, Brand, and Collapse components are available as static properties on the <Navbar/> component but you can also import them directly from the /lib directory like: require("react-bootstrap/lib/NavbarHeader").\n\n#Responsive Navbars\nTo have a mobile friendly Navbar, Add a Navbar.Toggle to your Header and wrap your Navs in a Navbar.Collapse component. The Navbar will automatically wire the toggle and collapse together!\n\nSet the defaultExpanded prop to make the Navbar start expanded. Set collapseOnSelect to make the Navbar collapse automatically when the user selects an item. You can also finely control the collapsing behavior by using the expanded and onToggle props.\n\n<Navbar inverse collapseOnSelect>\n  <Navbar.Header>\n    <Navbar.Brand>\n      <a href="#brand">React-Bootstrap</a>\n    </Navbar.Brand>\n    <Navbar.Toggle />\n  </Navbar.Header>\n  <Navbar.Collapse>\n    <Nav>\n      <NavItem eventKey={1} href="#">\n        Link\n      </NavItem>\n      <NavItem eventKey={2} href="#">\n        Link\n      </NavItem>\n      <NavDropdown eventKey={3} name="Dropdown" id="basic-nav-dropdown">\n        <MenuItem eventKey={3.1}>Action</MenuItem>\n        <MenuItem eventKey={3.2}>Another action</MenuItem>\n        <MenuItem eventKey={3.3}>Something else here</MenuItem>\n        <MenuItem divider />\n        <MenuItem eventKey={3.3}>Separated link</MenuItem>\n      </NavDropdown>\n    </Nav>\n    <Nav pullRight>\n      <NavItem eventKey={1} href="#">\n        Link Right\n      </NavItem>\n      <NavItem eventKey={2} href="#">\n        Link Right\n      </NavItem>\n    </Nav>\n  </Navbar.Collapse>\n</Navbar>;\n\n#Forms\nUse the Navbar.Form convenience component to apply proper margins and alignment to form components.\n\n<Navbar>\n  <Navbar.Header>\n    <Navbar.Brand>\n      <a href="#home">Brand</a>\n    </Navbar.Brand>\n    <Navbar.Toggle />\n  </Navbar.Header>\n  <Navbar.Collapse>\n    <Navbar.Form pullLeft>\n      <FormGroup>\n        <FormControl type="text" placeholder="Search" />\n      </FormGroup>{\' \'}\n      <Button type="submit">Submit</Button>\n    </Navbar.Form>\n  </Navbar.Collapse>\n</Navbar>;\n\n#Text and Non-nav links\nLoose text and links can be wraped in the convenience components: Navbar.Link and Navbar.Text\n\n<Navbar>\n  <Navbar.Header>\n    <Navbar.Brand>\n      <a href="#home">Brand</a>\n    </Navbar.Brand>\n    <Navbar.Toggle />\n  </Navbar.Header>\n  <Navbar.Collapse>\n    <Navbar.Text>\n      Signed in as: <Navbar.Link href="#">Mark Otto</Navbar.Link>\n    </Navbar.Text>\n    <Navbar.Text pullRight>Have a great day!</Navbar.Text>\n  </Navbar.Collapse>\n</Navbar>;\n\n',
    id: '4BC4wpcUo5PAPYvLYi0x',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'Navbar'
  },
  {
    children: [],
    closeTag: false,
    componentImport: '-',
    componentProps: [
      {
        description: 'Loads static HTML or a URI (with optional headers) in the WebView. Note that static HTML will require setting originWhitelist to ["*"].\n\nThe object passed to source can have either of the following shapes:\n\nLoad uri\n\nuri (string) - The URI to load in the WebView. Can be a local or remote file.\nmethod (string) - The HTTP Method to use. Defaults to GET if not specified. On Android, the only supported methods are GET and POST.\nheaders (object) - Additional HTTP headers to send with the request. On Android, this can only be used with GET requests.\nbody (string) - The HTTP body to send with the request. This must be a valid UTF-8 string, and will be sent exactly as specified, with no additional encoding (e.g. URL-escaping or base64) applied. On Android, this can only be used with POST requests.\nStatic HTML\n\nhtml (string) - A static HTML page to display in the WebView.\nbaseUrl (string) - The base URL to be used for any relative links in the HTML.',
        title: 'source',
        propType: 'PropTypes.object',
        propTypeIsrequired: false
      },
      {
        description: 'Controls whether to adjust the content inset for web views that are placed behind a navigation bar, tab bar, or toolbar. The default value is true.',
        title: 'automaticallyAdjustContentInsets',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Function that accepts a string that will be passed to the WebView and executed immediately as JavaScript.',
        title: 'injectJavaScript',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Set this to provide JavaScript that will be injected into the web page when the view loads.',
        title: 'injectedJavaScript',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Boolean that determines whether HTML5 audio and video requires the user to tap them before they start playing. The default value is true.',
        title: 'mediaPlaybackRequiresUserAction',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Override the native component used to render the WebView. Enables a custom native WebView which uses the same JavaScript as the original WebView.\n\nThe nativeConfig prop expects an object with the following keys:\n\ncomponent (any)\nprops (object)\nviewManager (object)',
        title: 'nativeConfig',
        propType: 'PropTypes.object',
        propTypeIsrequired: false
      },
      {
        description: 'Function that is invoked when the WebView load fails.',
        title: 'onError',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Function that is invoked when the WebView has finished loading.',
        title: 'onLoad',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Function that is invoked when the WebView load succeeds or fails.',
        title: 'onLoadEnd',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Function that is invoked when the WebView starts loading.',
        title: 'onLoadStart',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'A function that is invoked when the webview calls window.postMessage. Setting this property will inject a postMessage global into your webview, but will still call pre-existing values of postMessage.\n\nwindow.postMessage accepts one argument, data, which will be available on the event object, event.nativeEvent.data. data must be a string.',
        title: 'onMessage',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Function that is invoked when the WebView loading starts or ends.',
        title: 'onNavigationStateChange',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'List of origin strings to allow being navigated to. The strings allow wildcards and get matched against just the origin (not the full URL). If the user taps to navigate to a new page but the new page is not in this whitelist, the URL will be handled by the OS. The default whitelisted origins are "http://" and "https://".',
        title: 'originWhitelist',
        propType: 'PropTypes.array',
        propTypeIsrequired: false
      },
      {
        description: 'Function that returns a view to show if there\'s an error.',
        title: 'renderError',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Function that returns a loading indicator. The startInLoadingState prop must be set to true in order to use this prop.',
        title: 'renderLoading',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Boolean that controls whether the web content is scaled to fit the view and enables the user to change the scale. The default value is true.\n\nOn iOS, when useWebKit=true, this prop will not work.',
        title: 'scalesPageToFit',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Function that allows custom handling of any web view requests. Return true from the function to continue loading the request and false to stop loading.',
        title: 'onShouldStartLoadWithRequest',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Boolean value that forces the WebView to show the loading view on the first load. This prop must be set to true in order for the renderLoading prop to work.',
        title: 'startInLoadingState',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'A floating-point number that determines how quickly the scroll view decelerates after the user lifts their finger. You may also use the string shortcuts "normal" and "fast" which match the underlying iOS settings for UIScrollViewDecelerationRateNormal and UIScrollViewDecelerationRateFast respectively:\n\nnormal: 0.998\nfast: 0.99 (the default for iOS web view)',
        title: 'decelerationRate',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'Boolean value to control whether DOM Storage is enabled. Used only in Android.',
        title: 'domStorageEnabled',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Boolean value to enable JavaScript in the WebView. Used on Android only as JavaScript is enabled by default on iOS. The default value is true.',
        title: 'javaScriptEnabled',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Specifies the mixed content mode. i.e WebView will allow a secure origin to load content from any other origin.\n\nPossible values for mixedContentMode are:\n\nnever (default) - WebView will not allow a secure origin to load content from an insecure origin.\nalways - WebView will allow a secure origin to load content from any other origin, even if that origin is insecure.\ncompatibility - WebView will attempt to be compatible with the approach of a modern web browser with regard to mixed content.',
        title: 'mixedContentMode',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Boolean value to enable third party cookies in the WebView. Used on Android Lollipop and above only as third party cookies are enabled by default on Android Kitkat and below and on iOS. The default value is true.',
        title: 'thirdPartyCookiesEnabled',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Sets the user-agent for the WebView.',
        title: 'userAgent',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Boolean that determines whether HTML5 videos play inline or use the native full-screen controller. The default value is false.\n\nNOTE\n\nIn order for video to play inline, not only does this property need to be set to true, but the video element in the HTML document must also include the webkit-playsinline attribute.',
        title: 'allowsInlineMediaPlayback',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Boolean value that determines whether the web view bounces when it reaches the edge of the content. The default value is true.',
        title: 'bounces',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'The amount by which the web view content is inset from the edges of the scroll view. Defaults to {top: 0, left: 0, bottom: 0, right: 0}.\n\nobject: {top: number, left: number, bottom: number, right: number}',
        title: 'contentInset',
        propType: 'PropTypes.object',
        propTypeIsrequired: false
      },
      {
        description: 'Determines the types of data converted to clickable URLs in the web view\'s content. By default only phone numbers are detected.\n\nYou can provide one type or an array of many types.\n\nPossible values for dataDetectorTypes are:\n\nphoneNumber\nlink\naddress\ncalendarEvent\nnone\nall\nWith the new WebKit implementation, we have three new values:\n\ntrackingNumber\nflightNumber\nlookupSuggestion\n',
        title: 'dataDetectorTypes',
        propType: 'PropTypes.array',
        propTypeIsrequired: false
      },
      {
        description: 'Boolean value that determines whether scrolling is enabled in the WebView. The default value is true.',
        title: 'scrollEnabled',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Set whether Geolocation is enabled in the WebView. The default value is false. Used only in Android.',
        title: 'geolocationEnabled',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Boolean that sets whether JavaScript running in the context of a file scheme URL should be allowed to access content from any origin. Including accessing content from other file scheme URLs. The default value is false.',
        title: 'allowUniversalAccessFromFileURLs',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'If true, use WKWebView instead of UIWebView.',
        title: 'useWebKit',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      }
    ],
    description: 'Warning Please use the react-native-community/react-native-webview fork of this component instead. To reduce the surface area of React Native, <WebView/> is going to be removed from the React Native core. For more information, please read The Slimmening proposal.\n\nWebView renders web content in a native view.\n\nimport React, { Component } from \'react\';\nimport { WebView } from \'react-native\';\n\nclass MyWeb extends Component {\n  render() {\n    return (\n      <WebView\n        source={{uri: \'https://github.com/facebook/react-native\'}}\n        style={{marginTop: 20}}\n      />\n    );\n  }\n}\nMinimal example with inline HTML:\n\nimport React, { Component } from \'react\';\nimport { WebView } from \'react-native\';\n\nclass MyInlineWeb extends Component {\n  render() {\n    return (\n      <WebView\n        originWhitelist={[\'*\']}\n        source={{ html: \'<h1>Hello world</h1>\' }}\n      />\n    );\n  }\n}\nYou can use this component to navigate back and forth in the web view\'s history and configure various properties for the web content.\n\nOn iOS, the useWebKit prop can be used to opt into a WKWebView-backed implementation.\n\nSecurity Warning: Currently, onMessage and postMessage do not allow specifying an origin. This can lead to cross-site scripting attacks if an unexpected document is loaded within a WebView instance. Please refer to the MDN documentation for Window.postMessage() for more details on the security implications of this.',
    id: '4SQJmZm1rgUgxVhFK3My',
    isDefault: true,
    provider: 'ReactNative',
    techno: 'React Native',
    title: 'WebView',
    subtitle: 'ReactNative'
  },
  {
    children: [],
    closeTag: false,
    componentImport: '-',
    componentProps: [
      {
        description: 'NavigatorIOS uses route objects to identify child views, their props, and navigation bar configuration. Navigation operations such as push operations expect routes to look like this the initialRoute.',
        title: 'initialRoute',
        propType: 'PropTypes.object',
        propTypeIsrequired: true
      },
      {
        description: 'The style of the navigation bar. Supported values are \'default\', \'black\'. Use \'black\' instead of setting barTintColor to black. This produces a navigation bar with the native iOS style with higher translucency.\n\nType: enum(\'default\', \'black\')',
        title: 'barStyle',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'The default background color of the navigation bar.',
        title: 'barTintColor',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Boolean value that indicates whether the interactive pop gesture is enabled. This is useful for enabling/disabling the back swipe navigation gesture.\n\nIf this prop is not provided, the default behavior is for the back swipe gesture to be enabled when the navigation bar is shown and disabled when the navigation bar is hidden. Once you\'ve provided the interactivePopGestureEnabled prop, you can never restore the default behavior.',
        title: 'interactivePopGestureEnabled',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'The default wrapper style for components in the navigator. A common use case is to set the backgroundColor for every scene.',
        title: 'itemWrapperStyle',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Boolean value that indicates whether the navigation bar is hidden by default.',
        title: 'navigationBarHidden',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Boolean value that indicates whether to hide the 1px hairline shadow by default.',
        title: 'shadowHidden',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'The default color used for the buttons in the navigation bar.',
        title: 'tintColor',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'The default text color of the navigation bar name.',
        title: 'nameTextColor',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Boolean value that indicates whether the navigation bar is translucent by default. When true any screens loaded within the navigator will sit below the status bar and underneath the navigation bar. To have screens render below the navigation bar set to false.',
        title: 'translucent',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      }
    ],
    description: 'NavigatorIOS is a wrapper around UINavigationController, enabling you to implement a navigation stack. It works exactly the same as it would on a native app using UINavigationController, providing the same animations and behavior from UIKit.\n\nAs the name implies, it is only available on iOS. Take a look at React Navigation for a cross-platform solution in JavaScript, or check out either of these components for native solutions: native-navigation, react-native-navigation.\n\nTo set up the navigator, provide the initialRoute prop with a route object. A route object is used to describe each scene that your app navigates to. initialRoute represents the first route in your navigator.\n\nimport PropTypes from \'prop-types\';\nimport React, { Component } from \'react\';\nimport { NavigatorIOS, Text, TouchableHighlight, View } from \'react-native\';\n\nexport default class NavigatorIOSApp extends Component {\n  render() {\n    return (\n      <NavigatorIOS\n        initialRoute={{\n          component: MyScene,\n          title: \'My Initial Scene\',\n        }}\n        style={{flex: 1}}\n      />\n    );\n  }\n}\n\nclass MyScene extends Component {\n  static propTypes = {\n    title: PropTypes.string.isRequired,\n    navigator: PropTypes.object.isRequired,\n  }\n\n  _onForward = () => {\n    this.props.navigator.push({\n      title: \'Scene\',\n    });\n  }\n\n  render() {\n    return (\n      <View>\n        <Text>Current Scene: { this.props.name }</Text>\n        <TouchableHighlight onPress={this._onForward}>\n          <Text>Tap me to load the next scene</Text>\n        </TouchableHighlight>\n      </View>\n    )\n  }\n}\nIn this code, the navigator renders the component specified in initialRoute, which in this case is MyScene. This component will receive a route prop and a navigator prop representing the navigator. The navigator\'s navigation bar will render the name for the current scene, "My Initial Scene".\n\nYou can optionally pass in a passProps property to your initialRoute. NavigatorIOS passes this in as props to the rendered component:\n\ninitialRoute={{\n  component: MyScene,\n  title: \'My Initial Scene\',\n  passProps: { myProp: \'foo\' }\n}}\nYou can then access the props passed in via {this.props.myProp}.\n\nHandling Navigation\nTo trigger navigation functionality such as pushing or popping a view, you have access to a navigator object. The object is passed in as a prop to any component that is rendered by NavigatorIOS. You can then call the relevant methods to perform the navigation action you need:\n\nclass MyView extends Component {\n  _handleBackPress() {\n    this.props.navigator.pop();\n  }\n\n  _handleNextPress(nextRoute) {\n    this.props.navigator.push(nextRoute);\n  }\n\n  render() {\n    const nextRoute = {\n      component: MyView,\n      title: \'Bar That\',\n      passProps: { myProp: \'bar\' }\n    };\n    return(\n      <TouchableHighlight onPress={() => this._handleNextPress(nextRoute)}>\n        <Text style={{marginTop: 200, alignSelf: \'center\'}}>\n          See you on the other nav {this.props.myProp}!\n        </Text>\n      </TouchableHighlight>\n    );\n  }\n}\nYou can also trigger navigator functionality from the NavigatorIOS component:\n\nclass NavvyIOS extends Component {\n  _handleNavigationRequest() {\n    this.refs.nav.push({\n      component: MyView,\n      title: \'Genius\',\n      passProps: { myProp: \'genius\' },\n    });\n  }\n\n  render() {\n    return (\n      <NavigatorIOS\n        ref=\'nav\'\n        initialRoute={{\n          component: MyView,\n          title: \'Foo This\',\n          passProps: { myProp: \'foo\' },\n          rightButtontitle: \'Add\',\n          onRightButtonPress: () => this._handleNavigationRequest(),\n        }}\n        style={{flex: 1}}\n      />\n    );\n  }\n}\nThe code above adds a _handleNavigationRequest private method that is invoked from the NavigatorIOS component when the right navigation bar item is pressed. To get access to the navigator functionality, a reference to it is saved in the ref prop and later referenced to push a new scene into the navigation stack.\n\nNavigation Bar Configuration\nProps passed to NavigatorIOS will set the default configuration for the navigation bar. Props passed as properties to a route object will set the configuration for that route\'s navigation bar, overriding any props passed to the NavigatorIOS component.\n\n_handleNavigationRequest() {\n  this.refs.nav.push({\n    //...\n    passProps: { myProp: \'genius\' },\n    barTintColor: \'#996699\',\n  });\n}\n\nrender() {\n  return (\n    <NavigatorIOS\n      //...\n      style={{flex: 1}}\n      barTintColor=\'#ffffcc\'\n    />\n  );\n}\nIn the example above the navigation bar color is changed when the new route is pushed.',
    id: '5MYx13I9F6HqlPRmgXlY',
    isDefault: true,
    provider: 'ReactNative',
    techno: 'React Native',
    title: 'NavigatorIOS',
    subtitle: 'ReactNative'
  },
  {
    children: [],
    closeTag: false,
    componentImport: 'react-bootstrap/lib/Image',
    componentProps: [
      {
        description: 'Sets image as responsive image',
        title: 'responsive',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Sets image shape as rounded',
        title: 'rounded',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Sets image shape as circle',
        title: 'circle',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Sets image shape as thumbnail',
        title: 'thumbnail',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'img\'',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Shape\nUse the rounded, circle and thumbnail props to customise the image.\n\n<Grid>\n  <Row>\n    <Col xs={6} md={4}>\n      <Image src="/thumbnail.png" rounded />\n    </Col>\n    <Col xs={6} md={4}>\n      <Image src="/thumbnail.png" circle />\n    </Col>\n    <Col xs={6} md={4}>\n      <Image src="/thumbnail.png" thumbnail />\n    </Col>\n  </Row>\n</Grid>;\n\nResponsive\nUse the responsive to scale image nicely to the parent element.\n\n<Image src="/thumbnail.png" responsive />;',
    id: '5u6VzfLgqFVKbcqEtwxK',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'Image'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/Tabs',
    componentProps: [
      {
        description: 'type: any\n\ncontrolled by: onSelect, initial prop: defaultActivekey\nMark the Tab with a matching eventKey as active.',
        title: 'activeKey',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'HTML id attribute, required if no generateChildId prop is specified.',
        title: 'id',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'default: false\t\n\nWait until the first "enter" transition to mount tabs (add them to the DOM)',
        title: 'mountOnEnter',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'controls activeKey\nCallback fired when a Tab is selected.\n\nfunction (\n  Any eventKey,\n  SyntheticEvent event?\n)',
        title: 'onSelect',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'type: Transition | false\ndefault: {Fade}\t\n\nSets a default animation strategy for all children <TabPane>s. Use false to disable, true to enable the default <Fade> animation or a react-transition-group v2 <Transition/> component.',
        title: 'transition',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: false\t\n\nUnmount tabs (remove it from the DOM) when it is no longer visible',
        title: 'unmountOnExit',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'type: \'tabs\' | \'pills\'\ndefault: \'tabs\'\t\n\nNavigation style',
        title: 'variant',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Tabbed components#\nDynamic tabbed interfaces\n\nExamples#\nCreate dynamic tabbed interfaces, as described in the WAI ARIA Authoring Practices. Tabs is a higher-level component for quickly creating a Nav matched with a set of TabPanes.\n\n<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">\n  <Tab eventKey="home" name="Home">\n    <Sonnet />\n  </Tab>\n  <Tab eventKey="profile" name="Profile">\n    <Sonnet />\n  </Tab>\n  <Tab eventKey="contact" name="Contact" disabled>\n    <Sonnet />\n  </Tab>\n</Tabs>;\n\nControlled#\nTabs can be controlled directly when you want to handle the selection logic personally.\n\nclass ControlledTabs extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n    this.state = {\n      key: \'home\',\n    };\n  }\n\n  render() {\n    return (\n      <Tabs\n        id="controlled-tab-example"\n        activeKey={this.state.key}\n        onSelect={key => this.setState({ key })}\n      >\n        <Tab eventKey="home" name="Home">\n          <Sonnet />\n        </Tab>\n        <Tab eventKey="profile" name="Profile">\n          <Sonnet />\n        </Tab>\n        <Tab eventKey="contact" name="Contact" disabled>\n          <Sonnet />\n        </Tab>\n      </Tabs>\n    );\n  }\n}\n\nrender(<ControlledTabs />);\n\nNo animation#\nSet the transition prop to false\n\n<Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">\n  <Tab eventKey="home" name="Home">\n    <Sonnet />\n  </Tab>\n  <Tab eventKey="profile" name="Profile">\n    <Sonnet />\n  </Tab>\n  <Tab eventKey="contact" name="Contact" disabled>\n    <Sonnet />\n  </Tab>\n</Tabs>;\n\nDropdowns?#\nDynamic tabbed interfaces should not contain dropdown menus, as this causes both usability and accessibility issues. From a usability perspective, the fact that the currently displayed tab’s trigger element is not immediately visible (as it’s inside the closed dropdown menu) can cause confusion. From an accessibility point of view, there is currently no sensible way to map this sort of construct to a standard WAI ARIA pattern, meaning that it cannot be easily made understandable to users of assistive technologies.\n\nThat said, it Dropdowns do work technically (sans focus management), but we don\'t make any claims about support.\n\nCustom Tab Layout#\nFor more complex layouts the flexible TabContainer, TabContent, and TabPane components along with any style of Nav allow you to quickly piece together your own Tabs component with additional markup needed.\n\nCreate a set of NavItems each with an eventKey corresponding to the eventKey of a TabPane. Wrap the whole thing in a TabContainer and you have fully functioning custom tabs component. Check out the below example making use of the grid system and pills.\n\n<Tab.Container id="left-tabs-example" defaultActiveKey="first">\n  <Row>\n    <Col sm={3}>\n      <Nav variant="pills" className="flex-column">\n        <Nav.Item>\n          <Nav.Link eventKey="first">Tab 1</Nav.Link>\n        </Nav.Item>\n        <Nav.Item>\n          <Nav.Link eventKey="second">Tab 2</Nav.Link>\n        </Nav.Item>\n      </Nav>\n    </Col>\n    <Col sm={9}>\n      <Tab.Content>\n        <Tab.Pane eventKey="first">\n          <Sonnet />\n        </Tab.Pane>\n        <Tab.Pane eventKey="second">\n          <Sonnet />\n        </Tab.Pane>\n      </Tab.Content>\n    </Col>\n  </Row>\n</Tab.Container>;\n\n',
    id: '6EHU0ngjhXztAqd6oU7n',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Tabs',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    closeTag: false,
    componentImport: 'react-bootstrap/lib/MenuItem',
    componentProps: [
      {
        description: 'Highlight the menu item as active.',
        title: 'active',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Disable the menu item, making it unselectable.\n\ndefault: false',
        title: 'disabled',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Styles the menu item as a horizontal rule, providing visual separation between groups of menu items.\n\nall( PropTypes.bool, ({ divider, children }) => divider && children ? new Error(\'Children will not be rendered for dividers\') : null )',
        title: 'divider',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Value passed to the onSelect handler, useful for identifying the selected menu item.',
        title: 'eventKey',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Styles the menu item as a header label, useful for describing a group of menu items.\n\ndefault: false',
        title: 'header',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'HTML href attribute corresponding to a.href.',
        title: 'href',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired when the menu item is clicked.',
        title: 'onClick',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired when the menu item is selected.\n\n(eventKey: any, event: Object) => any',
        title: 'onSelect',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'dropdown\'',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'MenuItem',
    id: '6UA414CFnDO9Zhtfg1iv',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'MenuItem'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/Carousel',
    componentProps: [
      {
        description: 'default: \'carousel-item\'\t\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Carousel.Item',
    id: '7HyNo9DvoQFNARLJIP88',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Carousel__Item',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    closeTag: true,
    componentImport: '-',
    componentProps: [
      {
        description: 'className',
        title: 'className',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Division — a generic container for a block of HTML. Lending no additional meaning, it is typically used as scaffolding to hang CSS on or for JavaScript to reach out to.',
    id: '8eawiS1gwWNjnw6Fz1PS',
    isDefault: false,
    provider: 'HTML',
    subtitle: 'HTML',
    techno: 'React',
    title: 'div'
  },
  {
    children: [],
    closeTag: true,
    componentImport: '-',
    componentProps: [
      {
        description: 'className',
        title: 'className',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Ranked headings, h1 being the top-level heading, and h6 being the lowest level heading.',
    id: '8kCGigpk1zw3lGtMjxGF',
    isDefault: false,
    provider: 'HTML',
    techno: 'React',
    title: 'h1',
    subtitle: 'HTML'
  },
  {
    children: [],
    closeTag: false,
    componentImport: 'react-bootstrap/lib/ModalDialog',
    componentProps: [
      {
        description: 'A css class to apply to the Modal dialog DOM node.',
        title: 'dialogClassName',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Component size variations.\n\none of: "lg", "large", "sm", "small"',
        title: 'bsSize',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'modal\'',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Modal.Dialog',
    id: '93uClSQcwyGJ0cq2C5cy',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'Modal__Dialog'
  },
  {
    children: [],
    closeTag: false,
    componentImport: 'react-bootstrap/lib/NavbarCollapse',
    componentProps: [],
    description: 'Navbar.Collapse',
    id: '93xY4uCAZjNNlXPKIJSP',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'Navbar__Collapse'
  },
  {
    children: [],
    closeTag: true,
    componentImport: 'react-bootstrap/lib/Jumbotron',
    componentProps: [
      {
        description: 'You can use a custom element type for this component.',
        title: 'componentClass',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'jumbotron\'',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'A lightweight, flexible component that can optionally extend the entire viewport to showcase key content on your site.\n\n<Jumbotron>\n  <h1>Hello, world!</h1>\n  <p>\n    This is a simple hero unit, a simple jumbotron-style component for calling\n    extra attention to featured content or information.\n  </p>\n  <p>\n    <Button bsStyle="primary">Learn more</Button>\n  </p>\n</Jumbotron>;',
    id: '9MzVGIFczDORixkdTalz',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'Jumbotron'
  },
  {
    children: [],
    closeTag: false,
    componentImport: 'react-bootstrap/lib/InputGroupAddon',
    componentProps: [
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'input-group-addon\'',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'InputGroup.Addon',
    id: '9QvbCynRko82uMUS1rQf',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'InputGroup__Addon'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/Collapse',
    componentProps: [
      {
        description: 'default: false\t\n\nRun the expand animation when the component mounts, if it is initially shown',
        title: 'appear',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'type: \'height\' | \'width\' | function\ndefault: \'height\'\t\n\nThe dimension used when collapsing, or a function that returns the dimension\n\nNote: Bootstrap only partially supports \'width\'! You will need to supply your own CSS animation for the .width CSS class.',
        title: 'dimension',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'default: element.offsetWidth | element.offsetHeight\t\n\nFunction that returns the height or width of the animating DOM node\n\nAllows for providing some custom logic for how much the Collapse component should animate in its specified dimension. Called with the current dimension prop value and the DOM node.',
        title: 'getDimensionValue',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'default: false\t\n\nShow the component; triggers the expand or collapse animation',
        title: 'in',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: false\t\n\nWait until the first "enter" transition to mount the component (add it to the DOM)',
        title: 'mountOnEnter',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired before the component expands',
        title: 'onEnter',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired after the component has expanded',
        title: 'onEntered',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired after the component starts to expand',
        title: 'onEntering',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired before the component collapses',
        title: 'onExit',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired after the component has collapsed',
        title: 'onExited',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired after the component starts to collapse',
        title: 'onExiting',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'ARIA role of collapsible element',
        title: 'role',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'default: 300\t\n\nDuration of the collapse animation in milliseconds, to ensure that finishing callbacks are fired even if the original browser transition end events are canceled',
        title: 'timeout',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'default: false\t\n\nUnmount the component (remove it from the DOM) when it is collapsed',
        title: 'unmountOnExit',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      }
    ],
    description: 'Transitions\nBootstrap includes a few general use CSS transitions that can be applied to a number of components. React Bootstrap, bundles them up into a a few composable <Transition> components from react-transition-group, a commonly used animation wrapper for React.\n\nEncapsulating animations into components has the added benefit of making them more broadly useful, as well as portable for using in other libraries. All React-bootstrap components that can be animated, support pluggable <Transition> components.\n\nCollapse#\nAdd a collapse toggle animation to an element or component.\n\nclass Example extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.state = {\n      open: false,\n    };\n  }\n\n  render() {\n    const { open } = this.state;\n    return (\n      <>\n        <Button\n          onClick={() => this.setState({ open: !open })}\n          aria-controls="example-collapse-text"\n          aria-expanded={open}\n        >\n          click\n        </Button>\n        <Collapse in={this.state.open}>\n          <div id="example-collapse-text">\n            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus\n            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer\n            labore wes anderson cred nesciunt sapiente ea proident.\n          </div>\n        </Collapse>\n      </>\n    );\n  }\n}\n\nrender(<Example />);\n\n',
    id: 'ATISoCEt89kLkoYCZ4jG',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Collapse',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/FigureCaption',
    componentProps: [
      {
        description: 'default: <figcaption>\t\n\nYou can use a custom element type for this component.',
        title: 'as',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'default: \'figure-caption\'\t\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'FigureCaption',
    id: 'Aw23xRugSeVZw3p5OIO7',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'FigureCaption',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/lib/NavbarToggle',
    componentProps: [
      {
        description: 'onClick',
        title: 'onClick',
        propType: 'PropTypes.func',
        propTypeIsrequired: true
      },
      {
        description: 'The toggle content, if left empty it will render the default toggle (seen above).',
        title: 'children',
        propType: 'PropTypes.node',
        propTypeIsrequired: false
      }
    ],
    description: 'NavbarToggle',
    id: 'Ayh0HhHwjxvDQJaPwjKd',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'NavbarToggle'
  },
  {
    children: [],
    closeTag: true,
    componentImport: 'react-bootstrap/lib/ListGroup',
    componentProps: [
      {
        description: 'You can use a custom element type for this component.\n\nIf not specified, it will be treated as \'li\' if every child is a non-actionable <ListGroupItem>, and \'div\' otherwise.',
        title: 'componentClass',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'list-group\'',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'List group ListGroup, ListGroupItem\nList groups are a flexible and powerful component for displaying not only simple lists of elements, but complex ones with custom content.\n\n<ListGroup>\n  <ListGroupItem>Item 1</ListGroupItem>\n  <ListGroupItem>Item 2</ListGroupItem>\n  <ListGroupItem>...</ListGroupItem>\n</ListGroup>;\n\nLinked\nSet the href or onClick prop on ListGroupItem, to create a linked or clickable element.\n\nfunction alertClicked() {\n  alert(\'You clicked the third ListGroupItem\');\n}\n\nrender(\n  <ListGroup>\n    <ListGroupItem href="#link1">Link 1</ListGroupItem>\n    <ListGroupItem href="#link2">Link 2</ListGroupItem>\n    <ListGroupItem onClick={alertClicked}>Trigger an alert</ListGroupItem>\n  </ListGroup>\n);\n\nStyling by state\nSet the active or disabled prop to true to mark or disable the item.\n\n<ListGroup>\n  <ListGroupItem href="#" active>\n    Link 1\n  </ListGroupItem>\n  <ListGroupItem href="#">Link 2</ListGroupItem>\n  <ListGroupItem href="#" disabled>\n    Link 3\n  </ListGroupItem>\n</ListGroup>;\n\nStyling by color\nSet the bsStyle prop to style the item\n\n<ListGroup>\n  <ListGroupItem bsStyle="success">Success</ListGroupItem>\n  <ListGroupItem bsStyle="info">Info</ListGroupItem>\n  <ListGroupItem bsStyle="warning">Warning</ListGroupItem>\n  <ListGroupItem bsStyle="danger">Danger</ListGroupItem>\n</ListGroup>;\n\nWith header\nSet the header prop to create a structured item, with a heading and a body area.\n\n<ListGroup>\n  <ListGroupItem header="Heading 1">Some body text</ListGroupItem>\n  <ListGroupItem header="Heading 2" href="#">\n    Linked item\n  </ListGroupItem>\n  <ListGroupItem header="Heading 3" bsStyle="danger">\n    Danger styling\n  </ListGroupItem>\n</ListGroup>;\n\nWith custom component children\nWhen using ListGroupItems directly, ListGroup looks at whether the items have href or onClick props to determine which DOM elements to emit. However, with custom item components as children to ListGroup, set thecomponentClass prop to specify which element ListGroup should output.\n\nfunction CustomComponent({ children }) {\n  return (\n    <li className="list-group-item" onClick={() => {}}>\n      {children}\n    </li>\n  );\n}\n\nrender(\n  <ListGroup componentClass="ul">\n    <CustomComponent>Custom Child 1</CustomComponent>\n    <CustomComponent>Custom Child 2</CustomComponent>\n    <CustomComponent>Custom Child 3</CustomComponent>\n  </ListGroup>\n);',
    id: 'BNT8eDsR7dkxZUz7gW6n',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'ListGroup'
  },
  {
    children: [],
    closeTag: false,
    componentImport: 'react-bootstrap/lib/Badge',
    componentProps: [
      {
        description: 'default: false',
        title: 'pullRight',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'badge\'',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: '<p>\n  Badges <Badge>42</Badge>\n</p>;\n\nCross-browser compatibility\nUnlike in regular Bootstrap, badges self collapse even in Internet Explorer 8.',
    id: 'BOZJPz9Zqzla0fgjhdgB',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'Badge'
  },
  {
    children: [],
    closeTag: false,
    componentImport: '-',
    componentProps: [
      {
        description: 'If false the user won\'t be able to interact with the control. Default value is true.',
        title: 'enabled',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'If true, then selecting a segment won\'t persist visually. The onValueChange callback will still work as expected.',
        title: 'momentary',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Callback that is called when the user taps a segment; passes the event as an argument',
        title: 'onChange',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback that is called when the user taps a segment; passes the segment\'s value as an argument',
        title: 'onValueChange',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'The index in props.values of the segment to be (pre)selected.',
        title: 'selectedIndex',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'Accent color of the control.',
        title: 'tintColor',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'The labels for the control\'s segment buttons, in order.',
        title: 'values',
        propType: 'PropTypes.array',
        propTypeIsrequired: false
      }
    ],
    description: 'Use SegmentedControlIOS to render a UISegmentedControl iOS.\n\nProgrammatically changing selected index\nThe selected index can be changed on the fly by assigning the selectedIndex prop to a state variable, then changing that variable. Note that the state variable would need to be updated as the user selects a value and changes the index, as shown in the example below.\n\nExample\n<SegmentedControlIOS\n  values={[\'One\', \'Two\']}\n  selectedIndex={this.state.selectedIndex}\n  onChange={(event) => {\n    this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});\n  }}\n/>',
    id: 'BPAMkgpvSqAj3CB8OvyL',
    isDefault: true,
    provider: 'ReactNative',
    techno: 'React Native',
    title: 'SegmentedControlIOS',
    subtitle: 'ReactNative'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/lib/Tab',
    componentProps: [
      {
        description: 'disabled',
        title: 'disabled',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'name',
        title: 'name',
        propType: 'PropTypes.node',
        propTypeIsrequired: false
      },
      {
        description: 'tabClassName is used as className for the associated NavItem',
        title: 'tabClassName',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Tab',
    id: 'BfK0wZ85SXuyp5hvfJjW',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'Tab'
  },
  {
    children: [],
    closeTag: false,
    componentImport: '-',
    componentProps: [
      {
        description: 'Type: optionalImageSource',
        title: 'overflowIcon',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Sets possible actions on the toolbar as part of the action menu. These are displayed as icons or text on the right side of the widget. If they don\'t fit they are placed in an \'overflow\' menu.\n\nThis property takes an array of objects, where each object has the following keys:\n\ntitle: required, the name of this action\nicon: the icon for this action, e.g. require(\'./some_icon.png\')\nshow: when to show this action as an icon or hide it in the overflow menu: always, ifRoom or never\nshowWithText: boolean, whether to show text alongside the icon or not\n\narray of object: {title: string,icon: optionalImageSource,show: enum(\'always\', \'ifRoom\', \'never\'),showWithText: bool}',
        title: 'actions',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Sets the content inset for the toolbar starting edge.\n\nThe content inset affects the valid area for Toolbar content other than the navigation button and menu. Insets define the minimum margin for these components and can be used to effectively align Toolbar content along well-known gridlines.',
        title: 'contentInsetStart',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'Sets the toolbar logo.\n\nType: optionalImageSource',
        title: 'logo',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Sets the navigation icon.\n\nType: optionalImageSource',
        title: 'navIcon',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Callback that is called when an action is selected. The only argument that is passed to the callback is the position of the action in the actions array.',
        title: 'onActionSelected',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback called when the icon is selected.',
        title: 'onIconClicked',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Sets the content inset for the toolbar ending edge.\n\nThe content inset affects the valid area for Toolbar content other than the navigation button and menu. Insets define the minimum margin for these components and can be used to effectively align Toolbar content along well-known gridlines.\n\n',
        title: 'contentInsetEnd',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'Used to set the toolbar direction to RTL. In addition to this property you need to add\n\nandroid:supportsRtl="true"\n\nto your application AndroidManifest.xml and then call setLayoutDirection(LayoutDirection.RTL) in your MainActivity onCreate method.',
        title: 'rtl',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Sets the toolbar subname.',
        title: 'subname',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Sets the toolbar subname color.',
        title: 'subnameColor',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Used to locate this view in end-to-end tests.',
        title: 'testID',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Sets the toolbar name.',
        title: 'name',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Sets the toolbar name color.',
        title: 'nameColor',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'React component that wraps the Android-only Toolbar widget. A Toolbar can display a logo, navigation icon (e.g. hamburger menu), a name & subname and a list of actions. The name and subname are expanded so the logo and navigation icons are displayed on the left, name and subname in the middle and the actions on the right.\n\nIf the toolbar has an only child, it will be displayed between the name and actions.\n\nAlthough the Toolbar supports remote images for the logo, navigation and action icons, this should only be used in DEV mode where require(\'./some_icon.png\') translates into a packager URL. In release mode you should always use a drawable resource for these icons. Using require(\'./some_icon.png\') will do this automatically for you, so as long as you don\'t explicitly use e.g. {uri: \'http://...\'}, you will be good.\n\nExample:\n\nrender: function() {\n  return (\n    <ToolbarAndroid\n      logo={require(\'./app_logo.png\')}\n      name="AwesomeApp"\n      actions={[{title: \'Settings\', icon: require(\'./icon_settings.png\'), show: \'always\'}]}\n      onActionSelected={this.onActionSelected} />\n  )\n},\nonActionSelected: function(position) {\n  if (position === 0) { // index of \'Settings\'\n    showSettings();\n  }\n}',
    id: 'C4eG0qzWuQqjmV7yKefr',
    isDefault: true,
    provider: 'ReactNative',
    techno: 'React Native',
    title: 'ToolbarAndroid',
    subtitle: 'ReactNative'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/Dropdown',
    componentProps: [
      {
        description: 'default: false\t\n\nAligns the Dropdown menu to the right of it\'s container.',
        title: 'alignRight',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'type: elementType\ndefault: <div>\t\n\n\nControl the rendering of the DropdownMenu. All non-menu props (listed here) are passed through to the as Component.\n\nIf providing a custom, non DOM, component. the show, close and alignRight props are also injected and should be handled appropriately.',
        title: 'as',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'default: true\n\t\nHave the dropdown switch to it\'s opposite placement when necessary to stay on screen.',
        title: 'flip',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'onSelect',
        title: 'onSelect',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'type: \'click\' | \'mousedown\'\n\nWhich event when fired outside the component will cause it to be closed\n\nNote: For custom dropdown components, you will have to pass the rootCloseEvent to <RootCloseWrapper> in your custom dropdown menu component (similarly to how it is implemented in <Dropdown.Menu>).',
        title: 'rootCloseEvent',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: '\t\nControls the visibility of the Dropdown menu',
        title: 'show',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: \'dropdown-menu\'\t\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Dropdown.Menu',
    id: 'CQdocJ39wT8oT573OW8o',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Dropdown__Menu',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/ButtonGroup',
    componentProps: [
      {
        description: 'type: elementType\ndefault <div>\t\nYou can use a custom element type for this component.',
        title: 'as',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'default: \'group\'\t\n\nAn ARIA role describing the button group. Usually the default "group" role is fine. An aria-label or aria-labelledby prop is also recommended.',
        title: 'role',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'type: \'sm\' | \'lg\'\n\nSets the size for all Buttons in the group.',
        title: 'size',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'default: false\t\nDisplay as a button toggle group.\n\n(Generally it\'s better to use ToggleButtonGroup directly)',
        title: 'toggle',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: false\t\n\nMake the set of Buttons appear vertically stacked.',
        title: 'vertical',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: \'btn-group\'\t\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Button groups\nGroup a series of buttons together on a single line with the button group.\n\nBasic example#\nWrap a series of <Button>s in a <ButtonGroup>.\n\n<ButtonGroup aria-label="Basic example">\n  <Button variant="secondary">Left</Button>\n  <Button variant="secondary">Middle</Button>\n  <Button variant="secondary">Right</Button>\n</ButtonGroup>;\n\nButton toolbar#\nCombine sets of <ButtonGroup>s into a <ButtonToolbar> for more complex components.\n\n<ButtonToolbar aria-label="Toolbar with button groups">\n  <ButtonGroup className="mr-2" aria-label="First group">\n    <Button>1</Button>\n    <Button>2</Button>\n    <Button>3</Button>\n    <Button>4</Button>\n  </ButtonGroup>\n\n  <ButtonGroup className="mr-2" aria-label="Second group">\n    <Button>5</Button>\n    <Button>6</Button>\n    <Button>7</Button>\n  </ButtonGroup>\n\n  <ButtonGroup aria-label="Third group">\n    <Button>8</Button>\n  </ButtonGroup>\n</ButtonToolbar>;\n\nFeel free to mix input groups with button groups in your toolbars. Similar to the example above, you’ll likely need some utilities though to space things properly.\n\n<div>\n  <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">\n    <ButtonGroup className="mr-2" aria-label="First group">\n      <Button variant="secondary">1</Button>\n      <Button variant="secondary">2</Button>\n      <Button variant="secondary">3</Button>\n      <Button variant="secondary">4</Button>\n    </ButtonGroup>\n    <InputGroup>\n      <InputGroup.Prepend>\n        <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>\n      </InputGroup.Prepend>\n      <FormControl\n        type="text"\n        placeholder="Input group example"\n        aria-label="Input group example"\n        aria-describedby="btnGroupAddon"\n      />\n    </InputGroup>\n  </ButtonToolbar>\n\n  <ButtonToolbar\n    className="justify-content-between"\n    aria-label="Toolbar with Button groups"\n  >\n    <ButtonGroup aria-label="First group">\n      <Button variant="secondary">1</Button>\n      <Button variant="secondary">2</Button>\n      <Button variant="secondary">3</Button>\n      <Button variant="secondary">4</Button>\n    </ButtonGroup>\n    <InputGroup>\n      <InputGroup.Prepend>\n        <InputGroup.Text id="btnGroupAddon2">@</InputGroup.Text>\n      </InputGroup.Prepend>\n      <FormControl\n        type="text"\n        placeholder="Input group example"\n        aria-label="Input group example"\n        aria-describedby="btnGroupAddon2"\n      />\n    </InputGroup>\n  </ButtonToolbar>\n</div>;\n\nSizing#\nInstead of applying button sizing props to every button in a group, just add size prop to the <ButtonGroup>.\n\n<div className="d-flex flex-column">\n  <ButtonGroup size="lg">\n    <Button>Left</Button>\n    <Button>Middle</Button>\n    <Button>Right</Button>\n  </ButtonGroup>\n\n  <ButtonGroup className="mt-3">\n    <Button>Left</Button>\n    <Button>Middle</Button>\n    <Button>Right</Button>\n  </ButtonGroup>\n  <ButtonGroup size="sm" className="mt-3">\n    <Button>Left</Button>\n    <Button>Middle</Button>\n    <Button>Right</Button>\n  </ButtonGroup>\n</div>;\n\nNesting#\nYou can place other button types within the <ButtonGroup> like <DropdownButton>s.\n\n<ButtonGroup>\n  <Button>1</Button>\n  <Button>2</Button>\n  <DropdownButton as={ButtonGroup} name="Dropdown" id="bg-nested-dropdown">\n    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>\n    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>\n  </DropdownButton>\n</ButtonGroup>;\n\nVertical variation#\nMake a set of buttons appear vertically stacked rather than horizontally, by adding vertical to the <ButtonGroup>. Split button dropdowns are not supported here.\n\n<ButtonGroup vertical>\n  <Button>Button</Button>\n  <Button>Button</Button>\n  <DropdownButton as={ButtonGroup} name="Dropdown" id="bg-vertical-dropdown-1">\n    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>\n    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>\n  </DropdownButton>\n  <Button>Button</Button>\n  <Button>Button</Button>\n  <DropdownButton as={ButtonGroup} name="Dropdown" id="bg-vertical-dropdown-2">\n    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>\n    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>\n  </DropdownButton>\n  <DropdownButton as={ButtonGroup} name="Dropdown" id="bg-vertical-dropdown-3">\n    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>\n    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>\n  </DropdownButton>\n</ButtonGroup>;\n\n',
    id: 'CddqFS1UntsYYuZo6ZLd',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'ButtonGroup',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    closeTag: true,
    componentImport: '-',
    componentProps: [
      {
        description: 'onClick',
        title: 'onClick',
        propType: 'PropTypes.func',
        propTypeIsrequired: true
      },
      {
        description: 'className',
        title: 'className',
        propType: 'PropTypes.string',
        propTypeIsrequired: true
      },
      {
        description: 'html buttonSpecifies that a button should automatically get focus when the page loads',
        title: 'autofocus',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Specifies that a button should be disabled',
        title: 'disabled',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Specifies one or more forms the button belongs to',
        title: 'form',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Specifies the type of button',
        title: 'type',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Specifies an initial value for the button',
        title: 'value',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Specifies a name for the button',
        title: 'name',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'html button',
    id: 'CoY3UqtmbKer38qUKZ1z',
    isDefault: false,
    provider: 'HTML',
    techno: 'React',
    title: 'button',
    subtitle: 'HTML'
  },
  {
    children: [],
    closeTag: false,
    componentImport: '-',
    componentProps: [
      {
        description: 'Determines the type of background drawable that\'s going to be used to display feedback. It takes an object with type property and extra data depending on the type. It\'s recommended to use one of the static methods to generate that dictionary.\n\nType: backgroundPropType',
        title: 'background',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Set to true to add the ripple effect to the foreground of the view, instead of the background. This is useful if one of your child views has a background of its own, or you\'re e.g. displaying images, and you don\'t want the ripple to be covered by them.\n\nCheck TouchableNativeFeedback.canUseNativeForeground() first, as this is only available on Android 6.0 and above. If you try to use this on older versions you will get a warning and fallback to background.',
        title: 'useForeground',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      }
    ],
    description: 'A wrapper for making views respond properly to touches (Android only). On Android this component uses native state drawable to display touch feedback.\n\nAt the moment it only supports having a single View instance as a child node, as it\'s implemented by replacing that View with another instance of RCTView node with some additional properties set.\n\nBackground drawable of native feedback touchable can be customized with background property.\n\nExample:\n\nrenderButton: function() {\n  return (\n    <TouchableNativeFeedback\n        onPress={this._onPressButton}\n        background={TouchableNativeFeedback.SelectableBackground()}>\n      <View style={{width: 150, height: 100, backgroundColor: \'red\'}}>\n        <Text style={{margin: 30}}>Button</Text>\n      </View>\n    </TouchableNativeFeedback>\n  );\n},',
    id: 'DWPTOdlJy7wp3eFgpxdJ',
    isDefault: true,
    provider: 'ReactNative',
    techno: 'React Native',
    title: 'TouchableNativeFeedback',
    subtitle: 'ReactNative'
  },
  {
    children: [],
    closeTag: false,
    componentImport: 'react-bootstrap/lib/PanelCollapse',
    componentProps: [
      {
        description: 'Callback fired before the component expands',
        title: 'onEnter',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired after the component starts to expand',
        title: 'onEntering',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired after the component has expanded',
        title: 'onEntered',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired before the component collapses',
        title: 'onExit',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired after the component starts to collapse',
        title: 'onExiting',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired after the component has collapsed',
        title: 'onExited',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'panel\'',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Panel.Collapse',
    id: 'DhRlqan3PUDwdQ4lspH6',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'Panel__Collapse'
  },
  {
    children: [],
    closeTag: false,
    componentImport: '-',
    componentProps: [
      {
        description: 'Does this view want to become responder on the start of a touch?\n\nView.props.onStartShouldSetResponder: (event) => [true | false], where event is a synthetic touch event as described above.',
        title: 'onStartShouldSetResponder',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label.',
        title: 'accessibilityHint',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Overrides the text that\'s read by the screen reader when the user interacts with the element. By default, the label is constructed by traversing all the children and accumulating all the Text nodes separated by space.',
        title: 'accessibilityLabel',
        propType: 'PropTypes.node',
        propTypeIsrequired: false
      },
      {
        description: 'This defines how far a touch event can start away from the view. Typical interface guidelines recommend touch targets that are at least 30 - 40 points/density-independent pixels.\n\nFor example, if a touchable view has a height of 20 the touchable height can be extended to 40 with hitSlop={{top: 10, bottom: 10, left: 0, right: 0}}\n\nThe touch area never extends past the parent view bounds and the Z-index of sibling views always takes precedence if a touch hits two overlapping views.\n\nobject: {top: number, left: number, bottom: number, right: number}',
        title: 'hitSlop',
        propType: 'PropTypes.object',
        propTypeIsrequired: false
      },
      {
        description: 'Used to locate this view from native classes.\n\nThis disables the \'layout-only view removal\' optimization for this view!',
        title: 'nativeID',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'When accessible is true, the system will try to invoke this function when the user performs accessibility tap gesture.\n\n',
        title: 'onAccessibilityTap',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Invoked on mount and layout changes with:\n\n{nativeEvent: { layout: {x, y, width, height}}}\n\nThis event is fired immediately once the layout has been calculated, but the new layout may not yet be reflected on the screen at the time the event is received, especially if a layout animation is in progress.',
        title: 'onLayout',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'When accessible is true, the system will invoke this function when the user performs the magic tap gesture.',
        title: 'onMagicTap',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Does this view want to "claim" touch responsiveness? This is called for every touch move on the View when it is not the responder.\n\nView.props.onMoveShouldSetResponder: (event) => [true | false], where event is a synthetic touch event as described above.',
        title: 'onMoveShouldSetResponder',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'If a parent View wants to prevent a child View from becoming responder on a move, it should have this handler which returns true.\n\nView.props.onMoveShouldSetResponderCapture: (event) => [true | false], where event is a synthetic touch event as described above.',
        title: 'onMoveShouldSetResponderCapture',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'The View is now responding for touch events. This is the time to highlight and show the user what is happening.\n\nView.props.onResponderGrant: (event) => {}, where event is a synthetic touch event as described above.',
        title: 'onResponderGrant',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'The user is moving their finger.\n\nView.props.onResponderMove: (event) => {}, where event is a synthetic touch event as described above.',
        title: 'onResponderMove',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Another responder is already active and will not release it to that View asking to be the responder.\n\nView.props.onResponderReject: (event) => {}, where event is a synthetic touch event as described above.',
        title: 'onResponderReject',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Fired at the end of the touch.\n\nView.props.onResponderRelease: (event) => {}, where event is a synthetic touch event as described above.',
        title: 'onResponderRelease',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'The responder has been taken from the View. Might be taken by other views after a call to onResponderTerminationRequest, or might be taken by the OS without asking (e.g., happens with control center/ notification center on iOS)\n\nView.props.onResponderTerminate: (event) => {}, where event is a synthetic touch event as described above.',
        title: 'onResponderTerminate',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Some other View wants to become responder and is asking this View to release its responder. Returning true allows its release.\n\nView.props.onResponderTerminationRequest: (event) => {}, where event is a synthetic touch event as described above.',
        title: 'onResponderTerminationRequest',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'When true, indicates that the view is an accessibility element. By default, all the touchable elements are accessible.',
        title: 'accessible',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'If a parent View wants to prevent a child View from becoming responder on a touch start, it should have this handler which returns true.\n\nView.props.onStartShouldSetResponderCapture: (event) => [true | false], where event is a synthetic touch event as described above.',
        title: 'onStartShouldSetResponderCapture',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Controls whether the View can be the target of touch events.\n\n\'auto\': The View can be the target of touch events.\n\'none\': The View is never the target of touch events.\n\'box-none\': The View is never the target of touch events but it\'s subviews can be. It behaves like if the view had the following classes in CSS:\n.box-none {\n     pointer-events: none;\n}\n.box-none * {\n     pointer-events: all;\n}\n\'box-only\': The view can be the target of touch events but it\'s subviews cannot be. It behaves like if the view had the following classes in CSS:\n.box-only {\n     pointer-events: all;\n}\n.box-only * {\n     pointer-events: none;\n}\nSince pointerEvents does not affect layout/appearance, and we are already deviating from the spec by adding additional modes, we opt to not include pointerEvents on style. On some platforms, we would need to implement it as a className anyways. Using style or not is an implementation detail of the platform.\n\nenum(\'box-none\', \'none\', \'box-only\', \'auto\')',
        title: 'pointerEvents',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'This is a special performance property exposed by RCTView and is useful for scrolling content when there are many subviews, most of which are offscreen. For this property to be effective, it must be applied to a view that contains many subviews that extend outside its bound. The subviews must also have overflow: hidden, as should the containing view (or one of its superviews).',
        title: 'removeClippedSubviews',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'style',
        title: 'style',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Used to locate this view in end-to-end tests.\n\nThis disables the \'layout-only view removal\' optimization for this view!',
        title: 'testID',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: '> Note: accessibilityComponentTypewill soon be deprecated. When possible, use accessibilityRole and accessibilityStates instead.\n\nIndicates to accessibility services to treat UI component like a native one. Works for Android only.\n\nPossible values are one of:\n\n\'none\'\n\'button\'\n\'radiobutton_checked\'\n\'radiobutton_unchecked\'\n\n',
        title: 'accessibilityComponentType',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Indicates to accessibility services whether the user should be notified when this view changes. Works for Android API >= 19 only. Possible values:\n\n\'none\' - Accessibility services should not announce changes to this view.\n\'polite\'- Accessibility services should announce changes to this view.\n\'assertive\' - Accessibility services should interrupt ongoing speech to immediately announce changes to this view.\nSee the Android View docs for reference.\n\nenum(\'none\', \'polite\', \'assertive\')',
        title: 'accessibilityLiveRegion',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Views that are only used to layout their children or otherwise don\'t draw anything may be automatically removed from the native hierarchy as an optimization. Set this property to false to disable this optimization and ensure that this View exists in the native view hierarchy.',
        title: 'collapsable',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Controls how view is important for accessibility which is if it fires accessibility events and if it is reported to accessibility services that query the screen. Works for Android only.\n\nPossible values:\n\n\'auto\' - The system determines whether the view is important for accessibility - default (recommended).\n\'yes\' - The view is important for accessibility.\n\'no\' - The view is not important for accessibility.\n\'no-hide-descendants\' - The view is not important for accessibility, nor are any of its descendant views.\nSee the Android importantForAccessibility docs for reference.\n\nenum(\'auto\', \'yes\', \'no\', \'no-hide-descendants\')',
        title: 'importantForAccessibility',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Whether this View needs to rendered offscreen and composited with an alpha in order to preserve 100% correct colors and blending behavior. The default (false) falls back to drawing the component and its children with an alpha applied to the paint used to draw each element instead of rendering the full component offscreen and compositing it back with an alpha value. This default may be noticeable and undesired in the case where the View you are setting an opacity on has multiple overlapping elements (e.g. multiple overlapping Views, or text and a background).\n\nRendering offscreen to preserve correct alpha behavior is extremely expensive and hard to debug for non-native developers, which is why it is not turned on by default. If you do need to enable this property for an animation, consider combining it with renderToHardwareTextureAndroid if the view contents are static (i.e. it doesn\'t need to be redrawn each frame). If that property is enabled, this View will be rendered off-screen once, saved in a hardware texture, and then composited onto the screen with an alpha each frame without having to switch rendering targets on the GPU.',
        title: 'needsOffscreenAlphaCompositing',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Whether this View should render itself (and all of its children) into a single hardware texture on the GPU.\n\nOn Android, this is useful for animations and interactions that only modify opacity, rotation, translation, and/or scale: in those cases, the view doesn\'t have to be redrawn and display lists don\'t need to be re-executed. The texture can just be re-used and re-composited with different parameters. The downside is that this can use up limited video memory, so this prop should be set back to false at the end of the interaction/animation.',
        title: 'renderToHardwareTextureAndroid',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: '> Note: AccessibilityRole and AccessibilityStates are meant to be a cross-platform solution to replace accessibilityTraits and accessibilityComponentType, which will soon be deprecated. When possible, use accessibilityRole and accessibilityStates instead of accessibilityTraits and accessibilityComponentType.\n\nTells the screen reader to treat the currently focused on element as having a specific role.\n\nPossible values for AccessibilityRole is one of:\n\n\'none\' - The element has no role.\n\'button\' - The element should be treated as a button.\n\'link\' - The element should be treated as a link.\n\'header\' - The element is a header that divides content into sections.\n\'search\' - The element should be treated as a search field.\n\'image\' - The element should be treated as an image.\n\'key\' - The element should be treated like a keyboard key.\n\'text\' - The element should be treated as text.\n\'summary\' - The element provides app summary information.\n\'imagebutton\' - The element has the role of both an image and also a button.\n\'adjustable\' - The element allows adjustment over a range of values.\nOn iOS, these roles map to corresponding Accessibility Traits. Image button has the same functionality as if the trait was set to both \'image\' and \'button\'. See the Accessibility guide for more information.\n\nOn Android, these roles have similar functionality on TalkBack as adding Accessibility Traits does on Voiceover in iOS',
        title: 'accessibilityRole',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: '> Note: AccessibilityRole and AccessibilityStates are meant to be a cross-platform solution to replace accessibilityTraits and accessibilityComponentType, which will soon be deprecated. When possible, use accessibilityRole and accessibilityStates instead of accessibilityTraits and accessibilityComponentType.\n\nTells the screen reader to treat the currently focused on element as being in a specific state.\n\nYou can provide one state, no state, or both states. The states must be passed in through an array. Ex: [\'selected\'] or [\'selected\', \'disabled\']\n\nPossible values for AccessibilityStates are:\n\n\'selected\' - The element is in a selcted state.\n\'disabled\' - The element is in a disabled state.',
        title: 'accessibilityStates',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: '> Note: accessibilityTraits will soon be deprecated. When possible, use accessibilityRole and accessibilityStates instead.\n\nProvides additional traits to screen reader. By default no traits are provided unless specified otherwise in element.\n\nYou can provide one trait or an array of many traits.\n\nPossible values for AccessibilityTraits are:\n\n\'none\' - The element has no traits.\n\'button\' - The element should be treated as a button.\n\'link\' - The element should be treated as a link.\n\'header\' - The element is a header that divides content into sections.\n\'search\' - The element should be treated as a search field.\n\'image\' - The element should be treated as an image.\n\'selected\' - The element is selected.\n\'plays\' - The element plays sound.\n\'key\' - The element should be treated like a keyboard key.\n\'text\' - The element should be treated as text.\n\'summary\' - The element provides app summary information.\n\'disabled\' - The element is disabled.\n\'frequentUpdates\' - The element frequently changes its value.\n\'startsMedia\' - The element starts a media session.\n\'adjustable\' - The element allows adjustment over a range of values.\n\'allowsDirectInteraction\' - The element allows direct touch interaction for VoiceOver users.\n\'pageTurn\' - Informs VoiceOver that it should scroll to the next page when it finishes reading the contents of the element.\nSee the Accessibility guide for more information.',
        title: 'accessibilityTraits',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'A value indicating whether VoiceOver should ignore the elements within views that are siblings of the receiver. Default is false.\n\nSee the Accessibility guide for more information.',
        title: 'accessibilityViewIsModal',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'A value indicating whether the accessibility elements contained within this accessibility element are hidden. Default is false.\n\nSee the Accessibility guide for more information.',
        title: 'accessibilityElementsHidden',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'A value indicating this view should or should not be inverted when color inversion is turned on. A value of true will tell the view to not be inverted even if color inversion is turned on.\n\nSee the Accessibility guide for more information.',
        title: 'accessibilityIgnoresInvertColors',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Whether this View should be rendered as a bitmap before compositing.\n\nOn iOS, this is useful for animations and interactions that do not modify this component\'s dimensions nor its children; for example, when translating the position of a static view, rasterization allows the renderer to reuse a cached bitmap of a static view and quickly composite it during each frame.\n\nRasterization incurs an off-screen drawing pass and the bitmap consumes memory. Test and measure when using this property.\n\n',
        title: 'shouldRasterizeIOS',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      }
    ],
    description: 'The most fundamental component for building a UI, View is a container that supports layout with flexbox, style, some touch handling, and accessibility controls. View maps directly to the native view equivalent on whatever platform React Native is running on, whether that is a UIView, <div>, android.view, etc.\n\nView is designed to be nested inside other views and can have 0 to many children of any type.\n\nThis example creates a View that wraps two colored boxes and a text component in a row with padding.\n\nclass ViewColoredBoxesWithText extends Component {\n  render() {\n    return (\n      <View\n        style={{\n          flexDirection: \'row\',\n          height: 100,\n          padding: 20,\n        }}>\n        <View style={{backgroundColor: \'blue\', flex: 0.3}} />\n        <View style={{backgroundColor: \'red\', flex: 0.5}} />\n        <Text>Hello World!</Text>\n      </View>\n    );\n  }\n}\nViews are designed to be used with StyleSheet for clarity and performance, although inline styles are also supported.\n\nSynthetic Touch Events\nFor View responder props (e.g., onResponderMove), the synthetic touch event passed to them are of the following form:\n\nnativeEvent\nchangedTouches - Array of all touch events that have changed since the last event.\nidentifier - The ID of the touch.\nlocationX - The X position of the touch, relative to the element.\nlocationY - The Y position of the touch, relative to the element.\npageX - The X position of the touch, relative to the root element.\npageY - The Y position of the touch, relative to the root element.\ntarget - The node id of the element receiving the touch event.\ntimestamp - A time identifier for the touch, useful for velocity calculation.\ntouches - Array of all current touches on the screen.',
    id: 'DonxQSjWJ1a8zKvX4mfU',
    isDefault: true,
    provider: 'ReactNative',
    techno: 'React Native',
    title: 'View',
    subtitle: 'ReactNative'
  },
  {
    children: [],
    closeTag: true,
    componentImport: 'react-bootstrap/lib/Carousel',
    componentProps: [
      {
        description: 'default: true',
        title: 'slide',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: true',
        title: 'indicators',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'The amount of time to delay between automatically cycling an item. If null, carousel will not automatically cycle.\ndefault: 5000',
        title: 'interval',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'default: true',
        title: 'controls',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: true',
        title: 'pauseOnHover',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: true',
        title: 'wrap',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired when the active item changes.\n\n(eventKey: any, ?event: Object) => any\nIf this callback takes two or more arguments, the second argument will be a persisted event object with direction set to the direction of the transition.',
        title: 'onSelect',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'onSlideEnd',
        title: 'onSlideEnd',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'activeIndex',
        title: 'activeIndex',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'defaultActiveIndex',
        title: 'defaultActiveIndex',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'direction',
        title: 'direction',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: '<Glyphicon glyph="chevron-left" />',
        title: 'prevIcon',
        propType: 'PropTypes.node',
        propTypeIsrequired: false
      },
      {
        description: 'Label shown to screen readers only, can be used to show the previous element in the carousel. Set to null to deactivate.\n\ndefault: \'Previous\'',
        title: 'prevLabel',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: '<Glyphicon glyph="chevron-right" />',
        title: 'nextIcon',
        propType: 'PropTypes.node',
        propTypeIsrequired: false
      },
      {
        description: '\t\nLabel shown to screen readers only, can be used to show the next element in the carousel. Set to null to deactivate.\n\ndefault: \'Next\'',
        title: 'nextLabel',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'carousel\'',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Carousels Carousel, Carousel.Item, Carousel.Caption',
    id: 'DzmkCU24ug4FovPJfAwD',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'Carousel'
  },
  {
    children: [],
    closeTag: false,
    componentImport: 'react-bootstrap/lib/BreadcrumbItem',
    componentProps: [
      {
        description: 'If set to true, renders span instead of a\n\ndefault: false',
        title: 'active',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'href attribute for the inner a element',
        title: 'href',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'name attribute for the inner a element',
        title: 'name',
        propType: 'PropTypes.node',
        propTypeIsrequired: false
      },
      {
        description: 'target attribute for the inner a element',
        title: 'target',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Breadcrumb Item',
    id: 'EePm08YwomzPQPlJCUcB',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'Breadcrumb__Item'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/ModalHeader',
    componentProps: [
      {
        description: 'default: false\t\n\nSpecify whether the Component should contain a close button',
        title: 'closeButton',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: \'Close\'\t\n\nProvides an accessible label for the close button. It is used for Assistive Technology when the label text is not readable.',
        title: 'closeLabel',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'A Callback fired when the close button is clicked. If used directly inside a Modal component, the onHide will automatically be propagated up to the parent Modal onHide.',
        title: 'onHide',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Change the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'ModalHeader',
    id: 'G4ASaKtaqHMSGxu061OV',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'ModalHeader',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/InputGroup',
    componentProps: [
      {
        description: 'default: <div>\t\n\nYou can use a custom element type for this component.',
        title: 'as',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'type: \'sm\' | \'lg\'\n\nControl the size of buttons and form elements from the top-level .',
        title: 'size',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'required\t\ndefault: \'input-group\'\t\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: true
      }
    ],
    description: 'Place one add-on or button on either side of an input. You may also place one on both sides of an input. Remember to place <label>s outside the input group.\n\n<div>\n  <InputGroup className="mb-3">\n    <InputGroup.Prepend>\n      <InputGroup.Text id="basic-addon1">@</InputGroup.Text>\n    </InputGroup.Prepend>\n    <FormControl\n      placeholder="Username"\n      aria-label="Username"\n      aria-describedby="basic-addon1"\n    />\n  </InputGroup>\n\n  <InputGroup className="mb-3">\n    <FormControl\n      placeholder="Recipient\'s username"\n      aria-label="Recipient\'s username"\n      aria-describedby="basic-addon2"\n    />\n    <InputGroup.Append>\n      <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>\n    </InputGroup.Append>\n  </InputGroup>\n\n  <label htmlFor="basic-url">Your vanity URL</label>\n  <InputGroup className="mb-3">\n    <InputGroup.Prepend>\n      <InputGroup.Text id="basic-addon3">\n        https://example.com/users/\n      </InputGroup.Text>\n    </InputGroup.Prepend>\n    <FormControl id="basic-url" aria-describedby="basic-addon3" />\n  </InputGroup>\n\n  <InputGroup className="mb-3">\n    <InputGroup.Prepend>\n      <InputGroup.Text>$</InputGroup.Text>\n    </InputGroup.Prepend>\n    <FormControl aria-label="Amount (to the nearest dollar)" />\n    <InputGroup.Append>\n      <InputGroup.Text>.00</InputGroup.Text>\n    </InputGroup.Append>\n  </InputGroup>\n\n  <InputGroup>\n    <InputGroup.Prepend>\n      <InputGroup.Text>With textarea</InputGroup.Text>\n    </InputGroup.Prepend>\n    <FormControl as="textarea" aria-label="With textarea" />\n  </InputGroup>\n</div>;\n\nSizing#\nAdd the relative form sizing classes to the InputGroup and contents within will automatically resize—no need for repeating the form control size classes on each element.\n\n<div>\n  <InputGroup size="sm" className="mb-3">\n    <InputGroup.Prepend>\n      <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>\n    </InputGroup.Prepend>\n    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />\n  </InputGroup>\n  <br />\n  <InputGroup className="mb-3">\n    <InputGroup.Prepend>\n      <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text>\n    </InputGroup.Prepend>\n    <FormControl\n      aria-label="Default"\n      aria-describedby="inputGroup-sizing-default"\n    />\n  </InputGroup>\n  <br />\n  <InputGroup size="lg">\n    <InputGroup.Prepend>\n      <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>\n    </InputGroup.Prepend>\n    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />\n  </InputGroup>\n</div>;\n\nCheckboxes and radios#\nUse the InputGroup.Radio or InputGroup.Checkbox to add options to an input group.\n\n<div>\n  <InputGroup className="mb-3">\n    <InputGroup.Prepend>\n      <InputGroup.Checkbox aria-label="Checkbox for following text input" />\n    </InputGroup.Prepend>\n    <FormControl aria-label="Text input with checkbox" />\n  </InputGroup>\n  <InputGroup>\n    <InputGroup.Prepend>\n      <InputGroup.Radio aria-label="Radio button for following text input" />\n    </InputGroup.Prepend>\n    <FormControl aria-label="Text input with radio button" />\n  </InputGroup>\n</div>;\n\nMultiple inputs#\nWhile multiple inputss are supported visually, validation styles are only available for input groups with a single input.\n\n<InputGroup className="mb-3">\n  <InputGroup.Prepend>\n    <InputGroup.Text>First and last name</InputGroup.Text>\n  </InputGroup.Prepend>\n  <FormControl />\n  <FormControl />\n</InputGroup>;\n\nMultiple addons#\nMultiple add-ons are supported and can be mixed\n\n<div>\n  <InputGroup className="mb-3">\n    <InputGroup.Prepend>\n      <InputGroup.Text>$</InputGroup.Text>\n      <InputGroup.Text>0.00</InputGroup.Text>\n    </InputGroup.Prepend>\n    <FormControl\n      placeholder="Recipient\'s username"\n      aria-label="Amount (to the nearest dollar)"\n    />\n  </InputGroup>\n  <InputGroup className="mb-3">\n    <FormControl\n      placeholder="Recipient\'s username"\n      aria-label="Amount (to the nearest dollar)"\n    />\n    <InputGroup.Append>\n      <InputGroup.Text>$</InputGroup.Text>\n      <InputGroup.Text>0.00</InputGroup.Text>\n    </InputGroup.Append>\n  </InputGroup>\n</div>;\n\nButton addons#\n\n<div>\n  <InputGroup className="mb-3">\n    <InputGroup.Prepend>\n      <Button variant="outline-secondary">Button</Button>\n    </InputGroup.Prepend>\n    <FormControl aria-describedby="basic-addon1" />\n  </InputGroup>\n\n  <InputGroup className="mb-3">\n    <FormControl\n      placeholder="Recipient\'s username"\n      aria-label="Recipient\'s username"\n      aria-describedby="basic-addon2"\n    />\n    <InputGroup.Append>\n      <Button variant="outline-secondary">Button</Button>\n    </InputGroup.Append>\n  </InputGroup>\n\n  <InputGroup className="mb-3">\n    <InputGroup.Prepend>\n      <Button variant="outline-secondary">Button</Button>\n      <Button variant="outline-secondary">Button</Button>\n    </InputGroup.Prepend>\n    <FormControl aria-describedby="basic-addon1" />\n  </InputGroup>\n\n  <InputGroup>\n    <FormControl\n      placeholder="Recipient\'s username"\n      aria-label="Recipient\'s username"\n      aria-describedby="basic-addon2"\n    />\n    <InputGroup.Append>\n      <Button variant="outline-secondary">Button</Button>\n      <Button variant="outline-secondary">Button</Button>\n    </InputGroup.Append>\n  </InputGroup>\n</div>;\n\nButtons with Dropdowns#\n\n<>\n  <InputGroup className="mb-3">\n    <DropdownButton\n      as={InputGroup.Prepend}\n      variant="outline-secondary"\n      name="Dropdown"\n      id="input-group-dropdown-1"\n    >\n      <Dropdown.Item href="#">Action</Dropdown.Item>\n      <Dropdown.Item href="#">Another action</Dropdown.Item>\n      <Dropdown.Item href="#">Something else here</Dropdown.Item>\n      <Dropdown.Divider />\n      <Dropdown.Item href="#">Separated link</Dropdown.Item>\n    </DropdownButton>\n    <FormControl aria-describedby="basic-addon1" />\n  </InputGroup>\n\n  <InputGroup>\n    <FormControl\n      placeholder="Recipient\'s username"\n      aria-label="Recipient\'s username"\n      aria-describedby="basic-addon2"\n    />\n\n    <DropdownButton\n      as={InputGroup.Append}\n      variant="outline-secondary"\n      name="Dropdown"\n      id="input-group-dropdown-2"\n    >\n      <Dropdown.Item href="#">Action</Dropdown.Item>\n      <Dropdown.Item href="#">Another action</Dropdown.Item>\n      <Dropdown.Item href="#">Something else here</Dropdown.Item>\n      <Dropdown.Divider />\n      <Dropdown.Item href="#">Separated link</Dropdown.Item>\n    </DropdownButton>\n  </InputGroup>\n</>;\n\n',
    id: 'G8mNjq0GzL9UoEnm9GW9',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'InputGroup',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/ModalDialog',
    componentProps: [
      {
        description: 'Specify whether the Component should be vertically centered',
        title: 'centered',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'type: \'sm\' | \'lg\'\n\nSpecifies a large or small modal.',
        title: 'size',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Change the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'ModalDialog',
    id: 'GXNLnmgjUOko7Pok0OrD',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'ModalDialog',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    closeTag: false,
    componentImport: 'react-bootstrap/lib/NavbarHeader',
    componentProps: [],
    description: 'Navbar.Header',
    id: 'HAI627meuoN0YhJzEzS5',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'Navbar__Header'
  },
  {
    children: [],
    closeTag: false,
    componentImport: '-',
    componentProps: [
      {
        description: 'The visible prop determines whether your modal is visible.',
        title: 'visible',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'The supportedOrientations prop allows the modal to be rotated to any of the specified orientations. On iOS, the modal is still restricted by what\'s specified in your app\'s Info.plist\'s UISupportedInterfaceOrientations field. When using presentationStyle of pageSheet or formSheet, this property will be ignored by iOS.\n\nType: array of enum(\'portrait\', \'portrait-upside-down\', \'landscape\', \'landscape-left\', \'landscape-right\')',
        title: 'supportedOrientations',
        propType: 'PropTypes.array',
        propTypeIsrequired: false
      },
      {
        description: 'The onRequestClose callback is called when the user taps the hardware back button on Android or the menu button on Apple TV. Because of this required prop, be aware that BackHandler events will not be emitted as long as the modal is open.',
        title: 'onRequestClose',
        propType: 'PropTypes.func',
        propTypeIsrequired: true
      },
      {
        description: 'The onShow prop allows passing a function that will be called once the modal has been shown.',
        title: 'onShow',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'The transparent prop determines whether your modal will fill the entire view. Setting this to true will render the modal over a transparent background.',
        title: 'transparent',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'The animationType prop controls how the modal animates.\n\nslide slides in from the bottom\nfade fades into view\nnone appears without an animation\nDefault is set to none.\n\nType: enum(\'none\', \'slide\', \'fade\')',
        title: 'animationType',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'The hardwareAccelerated prop controls whether to force hardware acceleration for the underlying window.',
        title: 'hardwareAccelerated',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'The onDismiss prop allows passing a function that will be called once the modal has been dismissed.',
        title: 'onDismiss',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'The onOrientationChange callback is called when the orientation changes while the modal is being displayed. The orientation provided is only \'portrait\' or \'landscape\'. This callback is also called on initial render, regardless of the current orientation.',
        title: 'onOrientationChange',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'The presentationStyle prop controls how the modal appears (generally on larger devices such as iPad or plus-sized iPhones). See https://developer.apple.com/reference/uikit/uimodalpresentationstyle for details.\n\nfullScreen covers the screen completely\npageSheet covers portrait-width view centered (only on larger devices)\nformSheet covers narrow-width view centered (only on larger devices)\noverFullScreen covers the screen completely, but allows transparency\nDefault is set to overFullScreen or fullScreen depending on transparent property.\n\nType: enum(\'fullScreen\', \'pageSheet\', \'formSheet\', \'overFullScreen\')',
        title: 'presentationStyle',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Deprecated. Use the animationType prop instead.',
        title: 'animated',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      }
    ],
    description: 'The Modal component is a simple way to present content above an enclosing view.\n\nNote: If you need more control over how to present modals over the rest of your app, then consider using a top-level Navigator.\n\nimport React, {Component} from \'react\';\nimport {Modal, Text, TouchableHighlight, View, Alert} from \'react-native\';\n\nclass ModalExample extends Component {\n  state = {\n    modalVisible: false,\n  };\n\n  setModalVisible(visible) {\n    this.setState({modalVisible: visible});\n  }\n\n  render() {\n    return (\n      <View style={{marginTop: 22}}>\n        <Modal\n          animationType="slide"\n          transparent={false}\n          visible={this.state.modalVisible}\n          onRequestClose={() => {\n            Alert.alert(\'Modal has been closed.\');\n          }}>\n          <View style={{marginTop: 22}}>\n            <View>\n              <Text>Hello World!</Text>\n\n              <TouchableHighlight\n                onPress={() => {\n                  this.setModalVisible(!this.state.modalVisible);\n                }}>\n                <Text>Hide Modal</Text>\n              </TouchableHighlight>\n            </View>\n          </View>\n        </Modal>\n\n        <TouchableHighlight\n          onPress={() => {\n            this.setModalVisible(true);\n          }}>\n          <Text>Show Modal</Text>\n        </TouchableHighlight>\n      </View>\n    );\n  }\n}',
    id: 'HCCjl7fwouBebFdsxMY8',
    isDefault: true,
    provider: 'ReactNative',
    techno: 'React Native',
    title: 'Modal',
    subtitle: 'ReactNative'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/Card',
    componentProps: [
      {
        description: 'type: elementType\ndefault: <div>\t\n\nYou can use a custom element type for this component.',
        title: 'as',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'required\t\ndefault: \'card-img-overlay\'\t\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: true
      }
    ],
    description: 'Card.ImgOverlay',
    id: 'HPEAmL1sgGHAWhGfCXPD',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Card__ImgOverlay',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/lib/OverlayTrigger',
    componentProps: [
      {
        description: 'Specify which action or actions trigger Overlay visibility\n\ndefault: [\'hover\', \'focus\']',
        title: 'trigger',
        propType: ' PropTypes.arrayOf()',
        propTypeIsrequired: false
      },
      {
        description: 'A millisecond delay amount to show and hide the Overlay once triggered',
        title: 'delay',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'A millisecond delay amount before showing the Overlay once triggered.',
        title: 'delayShow',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'A millisecond delay amount before hiding the Overlay once triggered.',
        title: 'delayHide',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'The initial visibility state of the Overlay. For more nuanced visibility control, consider using the Overlay component directly.\n\ndefault: false',
        title: 'defaultOverlayShown',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'An element or text to overlay next to the target.',
        title: 'overlay',
        propType: 'PropTypes.node',
        propTypeIsrequired: false
      }
    ],
    description: 'OverlayTrigger',
    id: 'I8AOaJGuZCPHw5erNh3c',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'OverlayTrigger'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/Tooltip',
    componentProps: [
      {
        description: 'type: { ref: ReactRef, style: Object }\n\nAn Overlay injected set of props for positioning the tooltip arrow.\n\nThis is generally provided by the Overlay component positioning the tooltip',
        title: 'arrowProps',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'required\t\ntype: string|number\n\nAn html id attribute, necessary for accessibility',
        title: 'id',
        propType: 'PropTypes.string',
        propTypeIsrequired: true
      },
      {
        description: 'type: \'auto-start\' | \'auto\' | \'auto-end\' | \'top-start\' | \'top\' | \'top-end\' | \'right-start\' | \'right\' | \'right-end\' | \'bottom-end\' | \'bottom\' | \'bottom-start\' | \'left-end\' | \'left\' | \'left-start\'\ndefault: \'right\'\t\n\nSets the direction the Tooltip is positioned towards.\n\nThis is generally provided by the Overlay component positioning the tooltip',
        title: 'placement',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'default: \'tooltip\'\n\t\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Tooltip',
    id: 'Ih2FNBfPydojVe2hrOsU',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Tooltip',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    closeTag: true,
    componentImport: 'react-bootstrap/lib/Nav',
    componentProps: [
      {
        description: 'Marks the NavItem with a matching eventKey as active. Has a higher precedence over activeHref.',
        title: 'activeKey',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Marks the child NavItem with a matching href prop as active.',
        title: 'activeHref',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'NavItems are be positioned vertically.\n\ndefault: false',
        title: 'stacked',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'all( PropTypes.bool, ({ justified, navbar }) => justified && navbar ? Error(\'justified navbar `Nav`s are not supported\') : null )\n\n\ndefault: false',
        title: 'justified',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'A callback fired when a NavItem is selected.\n\nfunction (\n Any eventKey,\n SyntheticEvent event?\n)',
        title: 'onSelect',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'ARIA role for the Nav, in the context of a TabContainer, the default will be set to "tablist", but can be overridden by the Nav when set explicitly.\n\nWhen the role is set to "tablist" NavItem focus is managed according to the ARIA authoring practices for tabs: https://www.w3.org/TR/2013/WD-wai-aria-practices-20130307/#tabpanel',
        title: 'role',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Apply styling an alignment for use in a Navbar. This prop will be set automatically when the Nav is used inside a Navbar.',
        title: 'navbar',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Float the Nav to the right. When navbar is true the appropriate contextual classes are added as well.\n\ndefault: false',
        title: 'pullRight',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Float the Nav to the left. When navbar is true the appropriate contextual classes are added as well.\n\ndefault: false',
        title: 'pullLeft',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Component visual or contextual style variants.\n\none of: "lg", "large", "sm", "small"',
        title: 'bsStyle',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'nav\'',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: '#Navs Nav, NavItem\nNavs come in two styles, pills and tabs. Disable a tab by adding disabled.\n\nfunction handleSelect(selectedKey) {\n  alert(`selected ${selectedKey}`);\n}\n\nconst navInstance = (\n  <Nav bsStyle="pills" activeKey={1} onSelect={handleSelect}>\n    <NavItem eventKey={1} href="/home">\n      NavItem 1 content\n    </NavItem>\n    <NavItem eventKey={2} name="Item">\n      NavItem 2 content\n    </NavItem>\n    <NavItem eventKey={3} disabled>\n      NavItem 3 content\n    </NavItem>\n  </Nav>\n);\n\nrender(navInstance);\n\n#Dropdown\nAdd dropdowns using the NavDropdown component.\n\nclass NavDropdownExample extends React.Component {\n  handleSelect(eventKey, event) {\n    event.preventDefault();\n    alert(`selected ${eventKey}`);\n  }\n\n  render() {\n    return (\n      <Nav bsStyle="tabs" activeKey="1" onSelect={k => this.handleSelect(k)}>\n        <NavItem eventKey="1" href="/home">\n          NavItem 1 content\n        </NavItem>\n        <NavItem eventKey="2" name="Item">\n          NavItem 2 content\n        </NavItem>\n        <NavItem eventKey="3" disabled>\n          NavItem 3 content\n        </NavItem>\n        <NavDropdown eventKey="4" name="Dropdown" id="nav-dropdown">\n          <MenuItem eventKey="4.1">Action</MenuItem>\n          <MenuItem eventKey="4.2">Another action</MenuItem>\n          <MenuItem eventKey="4.3">Something else here</MenuItem>\n          <MenuItem divider />\n          <MenuItem eventKey="4.4">Separated link</MenuItem>\n        </NavDropdown>\n      </Nav>\n    );\n  }\n}\n\nrender(<NavDropdownExample />);\n\n#Stacked\nThey can also be stacked vertically.\n\nfunction handleSelect(selectedKey) {\n  alert(`selected ${selectedKey}`);\n}\n\nconst navInstance = (\n  <Nav bsStyle="pills" stacked activeKey={1} onSelect={handleSelect}>\n    <NavItem eventKey={1} href="/home">\n      NavItem 1 content\n    </NavItem>\n    <NavItem eventKey={2} name="Item">\n      NavItem 2 content\n    </NavItem>\n    <NavItem eventKey={3} disabled>\n      NavItem 3 content\n    </NavItem>\n  </Nav>\n);\n\nrender(navInstance);\n\n#Justified\nThey can be justified to take the full width of their parent.\n\nclass NavJustified extends React.Component {\n  handleSelect(selectedKey) {\n    alert(`selected ${selectedKey}`);\n  }\n\n  render() {\n    return (\n      <div>\n        <Nav\n          bsStyle="tabs"\n          justified\n          activeKey={1}\n          onSelect={key => this.handleSelect(key)}\n        >\n          <NavItem eventKey={1} href="/home">\n            NavItem 1 content\n          </NavItem>\n          <NavItem eventKey={2} name="Item">\n            NavItem 2 content\n          </NavItem>\n          <NavItem eventKey={3} disabled>\n            NavItem 3 content\n          </NavItem>\n        </Nav>\n        <br />\n        <Nav\n          bsStyle="pills"\n          justified\n          activeKey={1}\n          onSelect={key => this.handleSelect(key)}\n        >\n          <NavItem eventKey={1} href="/home">\n            NavItem 1 content\n          </NavItem>\n          <NavItem eventKey={2} name="Item">\n            NavItem 2 content\n          </NavItem>\n          <NavItem eventKey={3} disabled>\n            NavItem 3 content\n          </NavItem>\n        </Nav>\n      </div>\n    );\n  }\n}\n\nrender(<NavJustified />);',
    id: 'IlKlRNyOS53lT71Apga2',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'Nav'
  },
  {
    children: [],
    closeTag: false,
    componentImport: 'react-bootstrap/lib/ControlLabel',
    componentProps: [
      {
        description: 'Uses controlId from <FormGroup> if not explicitly specified.',
        title: 'htmlFor',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'default: false',
        title: 'srOnly',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'control-label\'',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'ControlLabel',
    id: 'JQEwGlfPfWqUG7wO2Afy',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'ControlLabel'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/Badge',
    componentProps: [
      {
        description: 'default: false\n\nAdd the pill modifier to make badges more rounded with some additional horizontal padding',
        title: 'pill',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'type: \'primary\' | \'secondary\' | \'success\' | \'danger\' | \'warning\' | \'info\' | \'light\' | \'dark\'\n\nThe visual style of the badge',
        title: 'variant',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'default: \'badge\'\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: true
      }
    ],
    description: 'Badges scale to match the size of the immediate parent element by using relative font sizing and em units.\n\n<div>\n  <h1>\n    Example heading <Badge variant="secondary">New</Badge>\n  </h1>\n  <h2>\n    Example heading <Badge variant="secondary">New</Badge>\n  </h2>\n  <h3>\n    Example heading <Badge variant="secondary">New</Badge>\n  </h3>\n  <h4>\n    Example heading <Badge variant="secondary">New</Badge>\n  </h4>\n  <h5>\n    Example heading <Badge variant="secondary">New</Badge>\n  </h5>\n  <h6>\n    Example heading <Badge variant="secondary">New</Badge>\n  </h6>\n</div>;\n\nBadges can be used as part of links or buttons to provide a counter.\n\n<Button variant="primary">\n  Profile <Badge variant="light">9</Badge>\n  <span className="sr-only">unread messages</span>\n</Button>;\n\nNote that depending on how they are used, badges may be confusing for users of screen readers and similar assistive technologies. While the styling of badges provides a visual cue as to their purpose, these users will simply be presented with the content of the badge. Depending on the specific situation, these badges may seem like random additional words or numbers at the end of a sentence, link, or button. Unless the context is clear, consider including additional context with a visually hidden piece of additional text. ## Contextual variations Add any of the below mentioned modifier classes to change the appearance of a badge.\n\n<div>\n  <Badge variant="primary">Primary</Badge>\n  <Badge variant="secondary">Secondary</Badge>\n  <Badge variant="success">Success</Badge>\n  <Badge variant="danger">Danger</Badge>\n  <Badge variant="warning">Warning</Badge>\n  <Badge variant="info">Info</Badge>\n  <Badge variant="light">Light</Badge>\n  <Badge variant="dark">Dark</Badge>\n</div>;\n\nPill#\nbadges Use the pill modifier class to make badges more rounded (with a larger border-radius and additional horizontal padding). Useful if you miss the badges from v3.\n\n<div>\n  <Badge pill variant="primary">\n    Primary\n  </Badge>\n  <Badge pill variant="secondary">\n    Secondary\n  </Badge>\n  <Badge pill variant="success">\n    Success\n  </Badge>\n  <Badge pill variant="danger">\n    Danger\n  </Badge>\n  <Badge pill variant="warning">\n    Warning\n  </Badge>\n  <Badge pill variant="info">\n    Info\n  </Badge>\n  <Badge pill variant="light">\n    Light\n  </Badge>\n  <Badge pill variant="dark">\n    Dark\n  </Badge>\n</div>;',
    id: 'K0wElJ8ogaXQzBaOkJSO',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Badge',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/Navbar',
    componentProps: [
      {
        description: 'default: \'navbar-collapse\'\t\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Navbar.Collapse',
    id: 'KWbHjvFUR1xK4AfvxGn6',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Navbar__Collapse',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    closeTag: false,
    componentImport: '-',
    componentProps: [
      {
        description: 'ImageResizeMode is an Enum for different image resizing modes, set via the resizeMode style property on Image components. The values are contain, cover, stretch, center, repeat.',
        title: 'style',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'blurRadius: the blur radius of the blur filter added to the image',
        title: 'blurRadius',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'Invoked on mount and layout changes with {nativeEvent: {layout: {x, y, width, height}}}.',
        title: 'onLayout',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Invoked when load completes successfully.',
        title: 'onLoad',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Invoked when load either succeeds or fails.',
        title: 'onLoadEnd',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Invoked on load start.\n\ne.g., onLoadStart={(e) => this.setState({loading: true})}',
        title: 'onLoadStart',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Determines how to resize the image when the frame doesn\'t match the raw image dimensions.\n\ncover: Scale the image uniformly (maintain the image\'s aspect ratio) so that both dimensions (width and height) of the image will be equal to or larger than the corresponding dimension of the view (minus padding).\n\ncontain: Scale the image uniformly (maintain the image\'s aspect ratio) so that both dimensions (width and height) of the image will be equal to or less than the corresponding dimension of the view (minus padding).\n\nstretch: Scale width and height independently, This may change the aspect ratio of the src.\n\nrepeat: Repeat the image to cover the frame of the view. The image will keep its size and aspect ratio, unless it is larger than the view, in which case it will be scaled down uniformly so that it is contained in the view.\n\ncenter: Center the image in the view along both dimensions. If the image is larger than the view, scale it down uniformly so that it is contained in the view.\n\nType: enum(\'cover\', \'contain\', \'stretch\', \'repeat\', \'center\')',
        title: 'resizeMode',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'The image source (either a remote URL or a local file resource).\n\nThis prop can also contain several remote URLs, specified together with their width and height and potentially with scale/other URI arguments. The native side will then choose the best uri to display based on the measured size of the image container. A cache property can be added to control how networked request interacts with the local cache.\n\nThe currently supported formats are png, jpg, jpeg, bmp, gif, webp (Android only), psd (iOS only).',
        title: 'source',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Similarly to source, this property represents the resource used to render the loading indicator for the image, displayed until image is ready to be displayed, typically after when it got downloaded from network.',
        title: 'loadingIndicatorSource',
        propType: 'PropTypes.array',
        propTypeIsrequired: false
      },
      {
        description: 'Invoked on load error with {nativeEvent: {error}}.',
        title: 'onError',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'A unique identifier for this element to be used in UI Automation testing scripts.',
        title: 'testID',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'The mechanism that should be used to resize the image when the image\'s dimensions differ from the image view\'s dimensions. Defaults to auto.\n\nauto: Use heuristics to pick between resize and scale.\n\nresize: A software operation which changes the encoded image in memory before it gets decoded. This should be used instead of scale when the image is much larger than the view.\n\nscale: The image gets drawn downscaled or upscaled. Compared to resize, scale is faster (usually hardware accelerated) and produces higher quality images. This should be used if the image is smaller than the view. It should also be used if the image is slightly bigger than the view.\n\nMore details about resize and scale can be found at http://frescolib.org/docs/resizing.html.\n\nType: enum(\'auto\', \'resize\', \'scale\')',
        title: 'resizeMethod',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'The text that\'s read by the screen reader when the user interacts with the image.',
        title: 'accessibilityLabel',
        propType: 'PropTypes.node',
        propTypeIsrequired: false
      },
      {
        description: 'When true, indicates the image is an accessibility element.',
        title: 'accessible',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'When the image is resized, the corners of the size specified by capInsets will stay a fixed size, but the center content and borders of the image will be stretched. This is useful for creating resizable rounded buttons, shadows, and other resizable assets. More info in the official Apple documentation.\n\nType: object: {top: number, left: number, bottom: number, right: number}',
        title: 'capInsets',
        propType: 'PropTypes.object',
        propTypeIsrequired: false
      },
      {
        description: 'A static image to display while loading the image source.\nIf passing an object, the general shape is {uri: string, width: number, height: number, scale: number}:\n\nuri - a string representing the resource identifier for the image, which should be either a local file path or the name of a static image resource (which should be wrapped in the require(\'./path/to/image.png\') function).\nwidth, height - can be specified if known at build time, in which case these will be used to set the default <Image/> component dimensions.\nscale - used to indicate the scale factor of the image. Defaults to 1.0 if unspecified, meaning that one image pixel equates to one display point / DIP.\nIf passing a number:\n\nnumber - Opaque type returned by something like require(\'./image.jpg\').\nNote: On Android, the default source prop is ignored on debug builds.',
        title: 'defaultSource',
        propType: 'PropTypes.object',
        propTypeIsrequired: false
      },
      {
        description: 'Invoked when a partial load of the image is complete. The definition of what constitutes a "partial load" is loader specific though this is meant for progressive JPEG loads.',
        title: 'onPartialLoad',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Invoked on download progress with {nativeEvent: {loaded, total}}.',
        title: 'onProgress',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'Android only. By default, it is 300ms.',
        title: 'fadeDuration',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      }
    ],
    description: 'A React component for displaying different types of images, including network images, static resources, temporary local images, and images from local disk, such as the camera roll.\n\nThis example shows fetching and displaying an image from local storage as well as one from network and even from data provided in the \'data:\' uri scheme.\n\nNote that for network and data images, you will need to manually specify the dimensions of your image!\n\nimport React, { Component } from \'react\';\nimport { AppRegistry, View, Image } from \'react-native\';\n\nexport default class DisplayAnImage extends Component {\n  render() {\n    return (\n      <View>\n        <Image\n          source={require(\'/react-native/img/favicon.png\')}\n        />\n        <Image\n          style={{width: 50, height: 50}}\n          source={{uri: \'https://facebook.github.io/react-native/docs/assets/favicon.png\'}}\n        />\n        <Image\n          style={{width: 66, height: 58}}\n          source={{uri: \'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==\'}}\n        />\n      </View>\n    );\n  }\n}\n\n// skip this line if using Create React Native App\nAppRegistry.registerComponent(\'DisplayAnImage\', () => DisplayAnImage);\n\n\nYou can also add style to an image:\n\nimport React, { Component } from \'react\';\nimport { AppRegistry, View, Image, StyleSheet } from \'react-native\';\n\nconst styles = StyleSheet.create({\n  stretch: {\n    width: 50,\n    height: 200\n  }\n});\n\nexport default class DisplayAnImageWithStyle extends Component {\n  render() {\n    return (\n      <View>\n        <Image\n          style={styles.stretch}\n          source={require(\'/react-native/img/favicon.png\')}\n        />\n      </View>\n    );\n  }\n}\n\n// skip these lines if using Create React Native App\nAppRegistry.registerComponent(\n  \'DisplayAnImageWithStyle\',\n  () => DisplayAnImageWithStyle\n);\n\nGIF and WebP support on Android\nWhen building your own native code, GIF and WebP are not supported by default on Android.\n\nYou will need to add some optional modules in android/app/build.gradle, depending on the needs of your app.\n\ndependencies {\n  // If your app supports Android versions before Ice Cream Sandwich (API level 14)\n  compile \'com.facebook.fresco:animated-base-support:1.10.0\'\n\n  // For animated GIF support\n  compile \'com.facebook.fresco:animated-gif:1.10.0\'\n\n  // For WebP support, including animated WebP\n  compile \'com.facebook.fresco:animated-webp:1.10.0\'\n  compile \'com.facebook.fresco:webpsupport:1.10.0\'\n\n  // For WebP support, without animations\n  compile \'com.facebook.fresco:webpsupport:1.10.0\'\n}',
    id: 'KkOEyDJ2Nny1kFXydDJf',
    isDefault: true,
    provider: 'ReactNative',
    techno: 'React Native',
    title: 'Image',
    subtitle: 'ReactNative'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/Nav',
    componentProps: [
      {
        description: 'The active state of the NavItem item.',
        title: 'active',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: <a>\t\n\nYou can use a custom element type for this component.',
        title: 'as',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'default: false\t\n\nThe disabled state of the NavItem item.',
        title: 'disabled',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Uniquely idenifies the NavItem amoungst its siblings, used to determine and control the active state ofthe parent Nav',
        title: 'eventKey',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'The HTML href attribute for the NavLink',
        title: 'href',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'A callback fired when the NavLink is selected.\n\nfunction (eventKey: any, event: SyntheticEvent) {}',
        title: 'onSelect',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'The ARIA role for the NavLink, In the context of a \'tablist\' parent Nav, the role defaults to \'tab\'',
        title: 'role',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'default: \'nav-link\'\t\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Nav.Link',
    id: 'LSQ5A8yJk7F5j6hCGqpk',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Nav__Link',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    closeTag: false,
    componentImport: 'react-bootstrap/lib/Tooltip',
    componentProps: [
      {
        description: 'An html id attribute, necessary for accessibility',
        title: 'id',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Sets the direction the Tooltip is positioned towards.\n\ndefault: right',
        title: 'placement',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'The "top" position value for the Tooltip.',
        title: 'positionTop',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: '\t\nThe "left" position value for the Tooltip.',
        title: 'positionLeft',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'The "top" position value for the Tooltip arrow.',
        title: 'arrowOffsetTop',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'The "left" position value for the Tooltip arrow.',
        title: 'arrowOffsetLeft',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'tooltip\'',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: '#Tooltips Tooltip\nTooltip component for a more stylish alternative to that anchor tag name attribute.\n\n<div>\n  <Tooltip placement="right" className="in" id="tooltip-right">\n    Tooltip right\n  </Tooltip>\n\n  <Tooltip placement="top" className="in" id="tooltip-top">\n    Tooltip top\n  </Tooltip>\n\n  <Tooltip placement="left" className="in" id="tooltip-left">\n    Tooltip left\n  </Tooltip>\n\n  <Tooltip placement="bottom" className="in" id="tooltip-bottom">\n    Tooltip bottom\n  </Tooltip>\n</div>;\n\n#With OverlayTrigger\nAttach and position tooltips with OverlayTrigger.\n\nconst tooltip = (\n  <Tooltip id="tooltip">\n    <strong>Holy guacamole!</strong> Check this info.\n  </Tooltip>\n);\n\nconst positionerInstance = (\n  <ButtonToolbar>\n    <OverlayTrigger placement="left" overlay={tooltip}>\n      <Button bsStyle="default">Holy guacamole!</Button>\n    </OverlayTrigger>\n\n    <OverlayTrigger placement="top" overlay={tooltip}>\n      <Button bsStyle="default">Holy guacamole!</Button>\n    </OverlayTrigger>\n\n    <OverlayTrigger placement="bottom" overlay={tooltip}>\n      <Button bsStyle="default">Holy guacamole!</Button>\n    </OverlayTrigger>\n\n    <OverlayTrigger placement="right" overlay={tooltip}>\n      <Button bsStyle="default">Holy guacamole!</Button>\n    </OverlayTrigger>\n  </ButtonToolbar>\n);\n\nrender(positionerInstance);\n\n#In text copy\nPositioned tooltip in text copy.\n\nfunction LinkWithTooltip({ id, children, href, tooltip }) {\n  return (\n    <OverlayTrigger\n      overlay={<Tooltip id={id}>{tooltip}</Tooltip>}\n      placement="top"\n      delayShow={300}\n      delayHide={150}\n    >\n      <a href={href}>{children}</a>\n    </OverlayTrigger>\n  );\n}\n\nrender(\n  <p className="muted" style={{ marginBottom: 0 }}>\n    Tight pants next level keffiyeh{\' \'}\n    <LinkWithTooltip tooltip="Default tooltip" href="#" id="tooltip-1">\n      you probably\n    </LinkWithTooltip>{\' \'}\n    haven\'t heard of them. Photo booth beard raw denim letterpress vegan\n    messenger bag stumptown. Farm-to-table seitan, mcsweeney\'s fixie sustainable\n    quinoa 8-bit american apparel{\' \'}\n    <LinkWithTooltip\n      tooltip={\n        <span>\n          Another <strong>tooltip</strong>\n        </span>\n      }\n      href="#"\n      id="tooltip-2"\n    >\n      have a\n    </LinkWithTooltip>\n    terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo\n    thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney\'s\n    cleanse vegan chambray. A really ironic artisan{\' \'}\n    <LinkWithTooltip tooltip="Another one here too" href="#" id="tooltip-3">\n      whatever keytar\n    </LinkWithTooltip>\n    , scenester farm-to-table banksy Austin{\' \'}\n    <LinkWithTooltip tooltip="The last tip!" href="#" id="tooltip-4">\n      twitter handle\n    </LinkWithTooltip>{\' \'}\n    freegan cred raw denim single-origin coffee viral.\n  </p>\n);',
    id: 'Lh543WD0KaNFUI1Gi6wq',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'Tooltip'
  },
  {
    children: [],
    closeTag: false,
    componentImport: 'react-bootstrap/lib/InputGroupButton',
    componentProps: [
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'input-group-btn\'',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'InputGroup.Button',
    id: 'LvuttVoKjsvQ8LfdAhNs',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'InputGroup__Button'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/TabContainer',
    componentProps: [
      {
        description: 'type: any\n\ncontrolled by: onSelect, initial prop: defaultActivekey\nThe eventKey of the currently active tab.',
        title: 'activeKey',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: '(eventKey, type) => `${this.props.id}-${type}-${eventKey}`\t\nA function that takes an eventKey and type and returns a unique id for child tab <NavItem>s and <TabPane>s. The function must be a pure function, meaning it should always return the same id for the same set of inputs. The default value requires that an id to be set for the <TabContainer>.\n\nThe type argument will either be "tab" or "pane".',
        title: 'generateChildId',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'HTML id attribute, required if no generateChildId prop is specified.',
        title: 'id',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Wait until the first "enter" transition to mount tabs (add them to the DOM)',
        title: 'mountOnEnter',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'controls activeKey\nA callback fired when a tab is selected.',
        title: 'onSelect',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'type: {Transition | false}\ndefault: {Fade}\t\n\nSets a default animation strategy for all children <TabPane>s. Use false to disable, true to enable the default <Fade> animation or a react-transition-group v2 <Transition/> component.',
        title: 'transition',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Unmount tabs (remove it from the DOM) when they are no longer visible',
        title: 'unmountOnExit',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      }
    ],
    description: 'TabContainer',
    id: 'N2PKBjY8DCCtygYhM4sv',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'TabContainer',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    closeTag: false,
    componentImport: 'react-bootstrap/lib/Radio',
    componentProps: [
      {
        description: 'default: false',
        title: 'Radio',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: false',
        title: 'disabled',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Only valid if inline is not set.\n\none of: \'success\', \'warning\', \'error\', null',
        title: 'validationState',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Attaches a ref to the <input> element. Only functions can be used here.\n\n<Radio inputRef={ref => { this.input = ref; }} />',
        title: 'inputRef',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'radio\'',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Radio',
    id: 'NTp1U4FBxbM70vsT1mGD',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'Radio'
  },
  {
    children: [],
    closeTag: false,
    componentImport: '-',
    componentProps: [
      {
        description: 'onSnapshotReady',
        title: 'onSnapshotReady',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'testIdentifier',
        title: 'testIdentifier',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'SnapshotViewIOS',
    id: 'Ns7VKzTkDIIgaH7oEilO',
    isDefault: true,
    provider: 'ReactNative',
    techno: 'React Native',
    title: 'SnapshotViewIOS',
    subtitle: 'ReactNative'
  },
  {
    children: [],
    closeTag: true,
    componentImport: 'react-bootstrap/lib/Form',
    componentProps: [
      {
        description: 'default: false',
        title: 'horizontal',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: false',
        title: 'inline',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'You can use a custom element type for this component.\n\ndefault: \'form\'',
        title: 'componentClass',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'form\'',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: '#Form layout Form\n#Inline forms\nUse <Form inline> instead of <form>. JSX strips whitespace between lines, so you will need to manually add spaces. Additionally, Bootstrap assigns inline form controls width: auto by default, so you may need to set custom widths.\n\n<Form inline>\n  <FormGroup controlId="formInlineName">\n    <ControlLabel>Name</ControlLabel>{\' \'}\n    <FormControl type="text" placeholder="Jane Doe" />\n  </FormGroup>{\' \'}\n  <FormGroup controlId="formInlineEmail">\n    <ControlLabel>Email</ControlLabel>{\' \'}\n    <FormControl type="email" placeholder="jane.doe@example.com" />\n  </FormGroup>{\' \'}\n  <Button type="submit">Send invitation</Button>\n</Form>;\n\nHorizontal forms\nUse <Form horizontal> instead of <form>, then use <Col>s to align labels and controls. Do not use <Row> here, as <FormGroup> will already serve as a grid row in a horizontal form.\n\n<Form horizontal>\n  <FormGroup controlId="formHorizontalEmail">\n    <Col componentClass={ControlLabel} sm={2}>\n      Email\n    </Col>\n    <Col sm={10}>\n      <FormControl type="email" placeholder="Email" />\n    </Col>\n  </FormGroup>\n\n  <FormGroup controlId="formHorizontalPassword">\n    <Col componentClass={ControlLabel} sm={2}>\n      Password\n    </Col>\n    <Col sm={10}>\n      <FormControl type="password" placeholder="Password" />\n    </Col>\n  </FormGroup>\n\n  <FormGroup>\n    <Col smOffset={2} sm={10}>\n      <Checkbox>Remember me</Checkbox>\n    </Col>\n  </FormGroup>\n\n  <FormGroup>\n    <Col smOffset={2} sm={10}>\n      <Button type="submit">Sign in</Button>\n    </Col>\n  </FormGroup>\n</Form>;',
    id: 'NuJPzIvE9BK3v5G0h16U',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'Form'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/Figure',
    componentProps: [
      {
        description: 'default: <figure>\t\n\nYou can use a custom element type for this component.',
        title: 'as',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'default: \'figure\'\n\t\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Figures#\nAnytime you need to display a piece of content, like an image with an optional caption, consider using a Figure.\n\nFigure#\nDisplaying related images and text with the Figure component.\n\n  <Figure.Image\n    width={171}\n    height={180}\n    alt="171x180"\n    src="holder.js/171x180"\n  />\n  <Figure.Caption>\n    Nulla vitae elit libero, a pharetra augue mollis interdum.\n  </Figure.Caption>\n</Figure>;',
    id: 'NxDyj8OFoNbX3cezXpgl',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Figure',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/ListGroup',
    componentProps: [
      {
        description: 'Marks a ListGroupItem as actionable, applying additional hover, active and disabled styles for links and buttons.',
        title: 'action',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: false\n\t\nSets list item as active',
        title: 'active',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: <{div | a | button}>\t\n\nYou can use a custom element type for this component. For none action items, items render as li. For actions the default is an achor or button element depending on whether a href is provided.',
        title: 'as',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'default: false\t\n\nSets list item state as disabled',
        title: 'disabled',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'type: \'primary\' | \'secondary\' | \'success\' | \'danger\' | \'warning\' | \'info\' | \'dark\' | \'light\'\ndefault: null\t\n\nSets contextual classes for list item',
        title: 'variant',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'required\t\ndefault: \'list-group-item\'\t\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: true
      }
    ],
    description: 'ListGroup.Item',
    id: 'OI5lcQgn30b495kypnol',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'ListGroup__Item',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/Breadcrumb',
    componentProps: [
      {
        description: 'default false\n\nAdds a visual "active" state to a Breadcrumb Item and disables the link.',
        title: 'active',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'type: elementType\ndefault: <li>\n\nYou can use a custom element type for this component.',
        title: 'as',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'href attribute for the inner a element',
        title: 'href',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'target attribute for the inner a element',
        title: 'target',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'name attribute for the inner a element',
        title: 'name',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'default: \'breadcrumb-item\'\t\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Breadcrumb.Item',
    id: 'Ohy25sdoxqdGfq1UpDqk',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    subtitle: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Breadcrumb__Item'
  },
  {
    children: [],
    closeTag: false,
    componentImport: 'react-bootstrap/lib/Checkbox',
    componentProps: [
      {
        description: 'default: false',
        title: 'inline',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: false',
        title: 'disabled',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: \'\'',
        title: 'name',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Only valid if inline is not set.\n\none of: \'success\', \'warning\', \'error\', null',
        title: 'validationState',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Attaches a ref to the <input> element. Only functions can be used here.\n\n<Checkbox inputRef={ref => { this.input = ref; }} />',
        title: 'inputRef',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'checkbox\'\t\n',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Checkbox',
    id: 'OjYh7UUqGjJ9511mtPlT',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'Checkbox'
  },
  {
    children: [],
    closeTag: false,
    componentImport: 'react-bootstrap/lib/Glyphicon',
    componentProps: [
      {
        description: 'An icon name without "glyphicon-" prefix. See e.g. http://getbootstrap.com/components/#glyphicons',
        title: 'glyph',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'glyphicon\'',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Use them in buttons, button groups for a toolbar, navigation, or prepended form inputs.\n\n<div>\n  <ButtonToolbar>\n    <ButtonGroup>\n      <Button>\n        <Glyphicon glyph="align-left" />\n      </Button>\n      <Button>\n        <Glyphicon glyph="align-center" />\n      </Button>\n      <Button>\n        <Glyphicon glyph="align-right" />\n      </Button>\n      <Button>\n        <Glyphicon glyph="align-justify" />\n      </Button>\n    </ButtonGroup>\n  </ButtonToolbar>\n  <ButtonToolbar>\n    <ButtonGroup>\n      <Button bsSize="large">\n        <Glyphicon glyph="star" /> Star\n      </Button>\n      <Button>\n        <Glyphicon glyph="star" /> Star\n      </Button>\n      <Button bsSize="small">\n        <Glyphicon glyph="star" /> Star\n      </Button>\n      <Button bsSize="xsmall">\n        <Glyphicon glyph="star" /> Star\n      </Button>\n    </ButtonGroup>\n  </ButtonToolbar>\n</div>;',
    id: 'Om1IYPloEtjfdQlgLJBC',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'Glyphicon'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/Modal',
    componentProps: [
      {
        description: 'default: true\t\n\nOpen and close the Modal with a slide and fade animation.',
        title: 'animation',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: true\n\t\nWhen true The modal will automatically shift focus to itself when it opens, and replace it to the last focused element when it closes. Generally this should never be set to false as it makes the Modal less accessible to assistive technologies, like screen-readers.',
        title: 'autoFocus',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'type: \'static\' | true | false\ndefault: true\t\n\nInclude a backdrop component. Specify \'static\' for a backdrop that doesn\'t trigger an "onHide" when clicked.',
        title: 'backdrop',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Add an optional extra class name to .modal-backdrop It could end up looking like class="modal-backdrop foo-modal-backdrop in".',
        title: 'backdropClassName',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'vertically center the Dialog in the window',
        title: 'centered',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: <ModalDialog>\t\n\nA Component type that provides the modal content Markup. This is a useful prop when you want to use your own styles and markup to create a custom modal component.',
        title: 'dialogAs',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'A css class to apply to the Modal dialog DOM node.',
        title: 'dialogClassName',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'default: true\t\n\nWhen true The modal will prevent focus from leaving the Modal while open. Consider leaving the default value here, as it is necessary to make the Modal work well with assistive technologies, such as screen readers.',
        title: 'enforceFocus',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: true\t\n\nClose the modal when escape key is pressed',
        title: 'keyboard',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired before the Modal transitions in',
        title: 'onEnter',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired after the Modal finishes transitioning in',
        title: 'onEntered',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired as the Modal begins to transition in',
        title: 'onEntering',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired right before the Modal transitions out',
        title: 'onExit',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired after the Modal finishes transitioning out',
        title: 'onExited',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired as the Modal begins to transition out',
        title: 'onExiting',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'A callback fired when the header closeButton or non-static backdrop is clicked. Required if either are specified.',
        title: 'onHide',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'default: true\t\n\nWhen true The modal will restore focus to previously focused element once modal is hidden',
        title: 'restoreFocus',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: false\t\n\nWhen true The modal will show itself.',
        title: 'show',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'type: \'sm\' | \'lg\'\n\nRender a large or small modal.',
        title: 'size',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      }
    ],
    description: 'Modals#\nAdd dialogs to your site for lightboxes, user notifications, or completely custom content.\n\nOverview#\nModals are positioned over everything else in the document and remove scroll from the <body> so that modal content scrolls instead.\nModals are unmounted when closed.\nBootstrap only supports one modal window at a time. Nested modals aren’t supported, but if you really need them the underlying react-overlays can support them if you\'re willing.\nModal\'s "trap" focus in them, ensuring the keyboard navigation cycles through the modal, and not the rest of the page.\nUnlike vanilla Bootstrap, autoFocus works in Modals because React handles the implementation.\nExamples#\nStatic Markup#\nBelow is a static modal dialog (without the positioning) to demostrate the look and feel of the Modal.\n\n<Modal.Dialog>\n  <Modal.Header closeButton>\n    <Modal.name>Modal name</Modal.name>\n  </Modal.Header>\n\n  <Modal.Body>\n    <p>Modal body text goes here.</p>\n  </Modal.Body>\n\n  <Modal.Footer>\n    <Button variant="secondary">Close</Button>\n    <Button variant="primary">Save changes</Button>\n  </Modal.Footer>\n</Modal.Dialog>;\n\nLive demo#\nA modal with header, body, and set of actions in the footer. Use <Modal/> in combination with other components to show or hide your Modal. The <Modal/> Component comes with a few convenient "sub components": <Modal.Header/>, <Modal.name/>, <Modal.Body/>, and <Modal.Footer/>, which you can use to build the Modal content.\n\nclass Example extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleShow = this.handleShow.bind(this);\n    this.handleClose = this.handleClose.bind(this);\n\n    this.state = {\n      show: false,\n    };\n  }\n\n  handleClose() {\n    this.setState({ show: false });\n  }\n\n  handleShow() {\n    this.setState({ show: true });\n  }\n\n  render() {\n    return (\n      <>\n        <Button variant="primary" onClick={this.handleShow}>\n          Launch demo modal\n        </Button>\n\n        <Modal show={this.state.show} onHide={this.handleClose}>\n          <Modal.Header closeButton>\n            <Modal.name>Modal heading</Modal.name>\n          </Modal.Header>\n          <Modal.Body>Woohoo, you\'re reading this text in a modal!</Modal.Body>\n          <Modal.Footer>\n            <Button variant="secondary" onClick={this.handleClose}>\n              Close\n            </Button>\n            <Button variant="primary" onClick={this.handleClose}>\n              Save Changes\n            </Button>\n          </Modal.Footer>\n        </Modal>\n      </>\n    );\n  }\n}\n\nrender(<Example />);\n\nAdditional Import Options\nThe Modal Header, name, Body, and Footer components are available as static properties the <Modal/> component, but you can also, import them directly like: require("react-bootstrap/ModalHeader").\n\nVertically centered#\nYou can vertically center a modal by passing the "verticallyCenter" prop.\n\nclass MyVerticallyCenteredModal extends React.Component {\n  render() {\n    return (\n      <Modal\n        {...this.props}\n        size="lg"\n        aria-labelledby="contained-modal-name-vcenter"\n        centered\n      >\n        <Modal.Header closeButton>\n          <Modal.name id="contained-modal-name-vcenter">\n            Modal heading\n          </Modal.name>\n        </Modal.Header>\n        <Modal.Body>\n          <h4>Centered Modal</h4>\n          <p>\n            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\n            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta\n            ac consectetur ac, vestibulum at eros.\n          </p>\n        </Modal.Body>\n        <Modal.Footer>\n          <Button onClick={this.props.onHide}>Close</Button>\n        </Modal.Footer>\n      </Modal>\n    );\n  }\n}\n\nclass App extends React.Component {\n  constructor(...args) {\n    super(...args);\n\n    this.state = { modalShow: false };\n  }\n\n  render() {\n    let modalClose = () => this.setState({ modalShow: false });\n\n    return (\n      <ButtonToolbar>\n        <Button\n          variant="primary"\n          onClick={() => this.setState({ modalShow: true })}\n        >\n          Launch vertically centered modal\n        </Button>\n\n        <MyVerticallyCenteredModal\n          show={this.state.modalShow}\n          onHide={modalClose}\n        />\n      </ButtonToolbar>\n    );\n  }\n}\n\nrender(<App />);\n\nUsing the grid#\nYou can use grid layouts within a model using regular grid components inside the modal content.\n\nclass MydModalWithGrid extends React.Component {\n  render() {\n    return (\n      <Modal {...this.props} aria-labelledby="contained-modal-name-vcenter">\n        <Modal.Header closeButton>\n          <Modal.name id="contained-modal-name-vcenter">\n            Using Grid in Modal\n          </Modal.name>\n        </Modal.Header>\n        <Modal.Body>\n          <Container>\n            <Row className="show-grid">\n              <Col xs={12} md={8}>\n                <code>.col-xs-12 .col-md-8</code>\n              </Col>\n              <Col xs={6} md={4}>\n                <code>.col-xs-6 .col-md-4</code>\n              </Col>\n            </Row>\n\n            <Row className="show-grid">\n              <Col xs={6} md={4}>\n                <code>.col-xs-6 .col-md-4</code>\n              </Col>\n              <Col xs={6} md={4}>\n                <code>.col-xs-6 .col-md-4</code>\n              </Col>\n              <Col xs={6} md={4}>\n                <code>.col-xs-6 .col-md-4</code>\n              </Col>\n            </Row>\n          </Container>\n        </Modal.Body>\n        <Modal.Footer>\n          <Button onClick={this.props.onHide}>Close</Button>\n        </Modal.Footer>\n      </Modal>\n    );\n  }\n}\n\nclass App extends React.Component {\n  constructor(...args) {\n    super(...args);\n\n    this.state = { modalShow: false };\n  }\n\n  render() {\n    let modalClose = () => this.setState({ modalShow: false });\n\n    return (\n      <ButtonToolbar>\n        <Button\n          variant="primary"\n          onClick={() => this.setState({ modalShow: true })}\n        >\n          Launch modal with grid\n        </Button>\n\n        <MydModalWithGrid show={this.state.modalShow} onHide={modalClose} />\n      </ButtonToolbar>\n    );\n  }\n}\n\nrender(<App />);\n\nOptional Sizes#\nYou can specify a bootstrap large or small modal by using the "size" prop.\n\nclass Example extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.state = {\n      smShow: false,\n      lgShow: false,\n    };\n  }\n\n  render() {\n    let smClose = () => this.setState({ smShow: false });\n    let lgClose = () => this.setState({ lgShow: false });\n\n    return (\n      <ButtonToolbar>\n        <Button onClick={() => this.setState({ smShow: true })}>\n          Small modal\n        </Button>\n        <Button onClick={() => this.setState({ lgShow: true })}>\n          Large modal\n        </Button>\n\n        <Modal\n          size="sm"\n          show={this.state.smShow}\n          onHide={smClose}\n          aria-labelledby="example-modal-sizes-name-sm"\n        >\n          <Modal.Header closeButton>\n            <Modal.name id="example-modal-sizes-name-sm">\n              Small Modal\n            </Modal.name>\n          </Modal.Header>\n          <Modal.Body>...</Modal.Body>\n        </Modal>\n\n        <Modal\n          size="lg"\n          show={this.state.lgShow}\n          onHide={lgClose}\n          aria-labelledby="example-modal-sizes-name-lg"\n        >\n          <Modal.Header closeButton>\n            <Modal.name id="example-modal-sizes-name-lg">\n              Large Modal\n            </Modal.name>\n          </Modal.Header>\n          <Modal.Body>...</Modal.Body>\n        </Modal>\n      </ButtonToolbar>\n    );\n  }\n}\n\nrender(<Example />);\n\nSizing modals using custom CSS#\nYou can apply custom css to the modal dialog div using the "dialogClassName" prop. Example is using a custom css class with width set to 90%.\n\nclass Example extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.state = {\n      show: false,\n    };\n\n    this.handleShow = () => {\n      this.setState({ show: true });\n    };\n\n    this.handleHide = () => {\n      this.setState({ show: false });\n    };\n  }\n\n  render() {\n    return (\n      <>\n        <Button variant="primary" onClick={this.handleShow}>\n          Custom Width Modal\n        </Button>\n\n        <Modal\n          show={this.state.show}\n          onHide={this.handleHide}\n          dialogClassName="modal-90w"\n          aria-labelledby="example-custom-modal-styling-name"\n        >\n          <Modal.Header closeButton>\n            <Modal.name id="example-custom-modal-styling-name">\n              Custom Modal Styling\n            </Modal.name>\n          </Modal.Header>\n          <Modal.Body>\n            <p>\n              Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae\n              unde commodi aspernatur enim, consectetur. Cumque deleniti\n              temporibus ipsam atque a dolores quisquam quisquam adipisci\n              possimus laboriosam. Quibusdam facilis doloribus debitis! Sit\n              quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem!\n              Mollitia reiciendis porro quo magni incidunt dolore amet atque\n              facilis ipsum deleniti rem!\n            </p>\n          </Modal.Body>\n        </Modal>\n      </>\n    );\n  }\n}\n\nrender(<Example />);',
    id: 'P5dyQTUyV0lVrR1ovU0E',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Modal',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    closeTag: false,
    componentImport: 'react-bootstrap/lib/TabContainer',
    componentProps: [
      {
        description: 'HTML id attribute, required if no generateChildId prop is specified.\n\nfunction(props, ...args) { let error = null; if (!props.generateChildId) { error = idPropType(props, ...args); if (!error && !props.id) { error = new Error( \'In order to properly initialize Tabs in a way that is accessible \' + \'to assistive technologies (such as screen readers) an `id` or a \' + \'`generateChildId` prop to TabContainer is required\' ); } } return error;',
        title: 'id',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'A function that takes an eventKey and type and returns a unique id for child tab <NavItem>s and <TabPane>s. The function must be a pure function, meaning it should always return the same id for the same set of inputs. The default value requires that an id to be set for the <TabContainer>.\n\nThe type argument will either be "tab" or "pane".\n\ndefault: (eventKey, type) => `${this.props.id}-${type}-${key}`',
        title: 'generateChildId',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'he eventKey of the currently active tab.',
        title: 'onSelect',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'The eventKey of the currently active tab.',
        title: 'activeKey',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'TabContainer',
    id: 'QCAx3D1RBvmWiyjoRkjn',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'TabContainer'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/Row',
    componentProps: [
      {
        description: 'default: <div>\t\n\nYou can use a custom element type for this component.',
        title: 'as',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'default: false\t\n\nRemoves the gutter spacing between Cols as well as any added negative margins.',
        title: 'noGutters',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'required\t\ndefault: \'row\'\t\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Row',
    id: 'QEnkeH50ZbCXpSTk5BCG',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Row',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    closeTag: false,
    componentImport: '-',
    componentProps: [
      {
        description: 'This defines how far your touch can start away from the button. This is added to pressRetentionOffset when moving off of the button. ** NOTE ** The touch area never extends past the parent view bounds and the Z-index of sibling views always takes precedence if a touch hits two overlapping views.\n\nobject: {top: number, left: number, bottom: number, right: number}',
        title: 'hitSlop',
        propType: 'PropTypes.object',
        propTypeIsrequired: false
      },
      {
        description: '> Note: accessibilityComponentTypewill soon be deprecated. When possible, use accessibilityRole and accessibilityStates instead.\n\nType: AccessibilityComponentTypes',
        title: 'accessibilityComponentType',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label.',
        title: 'accessibilityHint',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Overrides the text that\'s read by the screen reader when the user interacts with the element. By default, the label is constructed by traversing all the children and accumulating all the Text nodes separated by space.',
        title: 'accessibilityLabel',
        propType: 'PropTypes.node',
        propTypeIsrequired: false
      },
      {
        description: 'accessibilityRole\n\nType: AccessibilityRoles',
        title: 'accessibilityRole',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'array of AccessibilityStates',
        title: 'accessibilityStates',
        propType: 'PropTypes.array',
        propTypeIsrequired: false
      },
      {
        description: '> Note: accessibilityTraitswill soon be deprecated. When possible, use accessibilityRole and accessibilityStates instead.\n\nType: AccessibilityTraits, ,array of AccessibilityTraits',
        title: 'accessibilityTraits',
        propType: 'PropTypes.array',
        propTypeIsrequired: false
      },
      {
        description: 'accessible',
        title: 'accessible',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Delay in ms, from onPressIn, before onLongPress is called.',
        title: 'delayLongPress',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'Delay in ms, from the start of the touch, before onPressIn is called.',
        title: 'delayPressIn',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'Delay in ms, from the release of the touch, before onPressOut is called.',
        title: 'delayPressOut',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'If true, disable all interactions for this component.',
        title: 'disabled',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Invoked when the item loses focus.',
        title: 'onBlur',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Invoked when the item receives focus.',
        title: 'onFocus',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Invoked on mount and layout changes with\n\n{nativeEvent: {layout: {x, y, width, height}}}',
        title: 'onLayout',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'onLongPress',
        title: 'onLongPress',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Called when the touch is released, but not if cancelled (e.g. by a scroll that steals the responder lock).',
        title: 'onPress',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Called as soon as the touchable element is pressed and invoked even before onPress. This can be useful when making network requests.',
        title: 'onPressIn',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Called as soon as the touch is released even before onPress.',
        title: 'onPressOut',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'When the scroll view is disabled, this defines how far your touch may move off of the button, before deactivating the button. Once deactivated, try moving it back and you\'ll see that the button is once again reactivated! Move it back and forth several times while the scroll view is disabled. Ensure you pass in a constant to reduce memory allocations.\n\nobject: {top: number, left: number, bottom: number, right: number}',
        title: 'pressRetentionOffset',
        propType: 'PropTypes.object',
        propTypeIsrequired: false
      }
    ],
    description: 'Do not use unless you have a very good reason. All elements that respond to press should have a visual feedback when touched.\n\nTouchableWithoutFeedback supports only one child. If you wish to have several child components, wrap them in a View.',
    id: 'QzbzZhhnXD6MVsUqsz57',
    isDefault: true,
    provider: 'ReactNative',
    techno: 'React Native',
    title: 'TouchableWithoutFeedback',
    subtitle: 'ReactNative'
  },
  {
    children: [],
    closeTag: true,
    componentImport: 'react-bootstrap/lib/Overlay',
    componentProps: [
      {
        description: 'Set the visibility of the Overlay\n\ndefault: false',
        title: 'show',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Specify whether the overlay should trigger onHide when the user clicks outside the overlay\n\ndefault: false',
        title: 'rootClose',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'A callback invoked by the overlay when it wishes to be hidden. Required if rootClose is specified.',
        title: 'onHide',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Use animation. default: Fade',
        title: 'animation',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired before the Overlay transitions in',
        title: 'onEnter',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired as the Overlay begins to transition in',
        title: 'onEntering',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired after the Overlay finishes transitioning in',
        title: 'onEntered',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired right before the Overlay transitions out',
        title: 'onExit',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired as the Overlay begins to transition out',
        title: 'onExiting',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired after the Overlay finishes transitioning out',
        title: 'onExited',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Sets the direction of the Overlay.\n\ndefault: right',
        title: 'placement',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      }
    ],
    description: '#Custom overlays Overlay\nThe OverlayTrigger component is great for most use cases, but as a higher level abstraction it can lack the flexibility needed to build more nuanced or custom behaviors into your Overlay components. For these cases it can be helpful to forgo the trigger and use the Overlay component directly.\n\n\nclass Example extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.getTarget = this.getTarget.bind(this);\n    this.handleToggle = this.handleToggle.bind(this);\n\n    this.state = {\n      show: true\n    };\n  }\n\n  getTarget() {\n    return ReactDOM.findDOMNode(this.target);\n  }\n\n  handleToggle() {\n    this.setState({ show: !this.state.show });\n  }\n\n  render() {\n    const sharedProps = {\n      container: this,\n      target: this.getTarget,\n      show: this.state.show\n    };\n\n    return (\n      <div style={{ height: 100, paddingLeft: 150, position: \'relative\' }}>\n        <Button\n          ref={button => {\n            this.target = button;\n          }}\n          onClick={this.handleToggle}\n        >\n          Click me!\n        </Button>\n\n        <Overlay {...sharedProps} placement="left">\n          <Tooltip id="overload-left">Tooltip overload!</Tooltip>\n        </Overlay>\n        <Overlay {...sharedProps} placement="top">\n          <Tooltip id="overload-top">Tooltip overload!</Tooltip>\n        </Overlay>\n        <Overlay {...sharedProps} placement="right">\n          <Tooltip id="overload-right">Tooltip overload!</Tooltip>\n        </Overlay>\n        <Overlay {...sharedProps} placement="bottom">\n          <Tooltip id="overload-bottom">Tooltip overload!</Tooltip>\n        </Overlay>\n      </div>\n    );\n  }\n}\n\nrender(<Example />);\n\n#Use Overlay instead of Tooltip and Popover\nYou don\'t need to use the provided Tooltip or Popover components. Creating custom overlays is as easy as wrapping some markup in an Overlay component. Make sure to pass down the className and style props to the wrapped element to make positioning and transitions work.\n\nfunction CustomPopover({ className, style }) {\n  return (\n    <div\n      className={className}\n      style={{\n        ...style,\n        position: \'absolute\',\n        backgroundColor: \'#EEE\',\n        boxShadow: \'0 5px 10px rgba(0, 0, 0, 0.2)\',\n        border: \'1px solid #CCC\',\n        borderRadius: 3,\n        marginLeft: -5,\n        marginTop: 5,\n        padding: 10\n      }}\n    >\n      <strong>Holy guacamole!</strong> Check this info.\n    </div>\n  );\n}\n\nclass Example extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleToggle = this.handleToggle.bind(this);\n\n    this.state = {\n      show: true\n    };\n  }\n\n  handleToggle() {\n    this.setState({ show: !this.state.show });\n  }\n\n  render() {\n    return (\n      <div style={{ height: 100, position: \'relative\' }}>\n        <Button\n          ref={button => {\n            this.target = button;\n          }}\n          onClick={this.handleToggle}\n        >\n          I am an Overlay target\n        </Button>\n\n        <Overlay\n          show={this.state.show}\n          onHide={() => this.setState({ show: false })}\n          placement="right"\n          container={this}\n          target={() => ReactDOM.findDOMNode(this.target)}\n        >\n          <CustomPopover />\n        </Overlay>\n      </div>\n    );\n  }\n}\n\nrender(<Example />);',
    id: 'RKFCAcMYt9GJLluWaMGb',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'Overlay'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/Dropdow',
    componentProps: [
      {
        description: 'Highlight the menu item as active.',
        title: 'active',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: <SafeAnchor>\t\n\nYou can use a custom element type for this component.',
        title: 'as',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'default: false\t\n\nDisable the menu item, making it unselectable.',
        title: 'disabled',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'type: any\n\nValue passed to the onSelect handler, useful for identifying the selected menu item.',
        title: 'eventKey',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'HTML href attribute corresponding to a.href.',
        title: 'href',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired when the menu item is clicked.',
        title: 'onClick',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired when the menu item is selected.\n\n(eventKey: any, event: Object) => any',
        title: 'onSelect',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'required\t\ndefault: \'dropdown\'\t\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Dropdown.Item',
    id: 'RMNMUuy21kYBA2231dv4',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Dropdown__Item',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    closeTag: false,
    componentImport: 'react-bootstrap/lib/FormControlFeedback',
    componentProps: [
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'form-control-feedback\'',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'FormControl.Feedback',
    id: 'RNTGYdkkm8osSehwVxKl',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'FormControl__Feedback'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/Dropdown',
    componentProps: [
      {
        description: 'default: <div>\t\n\nYou can use a custom element type for this component.',
        title: 'as',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'required\t\ndefault: \'dropdown-header\'\t\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: true
      }
    ],
    description: 'Dropdown.Header',
    id: 'RnD8CufkJPdGVmJ6tJGy',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Dropdown__Header',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/TabPane',
    componentProps: [
      {
        description: 'Toggles the active state of the TabPane, this is generally controlled by a TabContainer.',
        title: 'active',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'You can use a custom element type for this component.',
        title: 'as',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'default: \'tab-pane\'\t\n',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'type: any\n\nA key that associates the TabPane with it\'s controlling NavLink.',
        title: 'eventKey',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Wait until the first "enter" transition to mount the tab (add it to the DOM)',
        title: 'mountOnEnter',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Transition onEnter callback when animation is not false',
        title: 'onEnter',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Transition onEntered callback when animation is not false',
        title: 'onEntered',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Transition onEntering callback when animation is not false',
        title: 'onEntering',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Transition onExit callback when animation is not false',
        title: 'onExit',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Transition onExited callback when animation is not false',
        title: 'onExited',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Transition onExiting callback when animation is not false',
        title: 'onExiting',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'type: boolean | elementType\n\nUse animation when showing or hiding <TabPane>s. Use false to disable, true to enable the default <Fade> animation or a react-transition-group v2 <Transition/> component.',
        title: 'transition',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Unmount the tab (remove it from the DOM) when it is no longer visible',
        title: 'unmountOnExit',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: \'tab-pane\'\t\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'TabPane',
    id: 'RppBAjoxsjTJl6Fz08a5',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'TabPane',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    closeTag: true,
    componentImport: 'react-bootstrap/lib/Tabs',
    componentProps: [
      {
        description: 'Mark the Tab with a matching eventKey as active.',
        title: 'activeKey',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Navigation style\n\none of: \'tabs\', \'pills\'',
        title: 'bsStyle',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Sets a default animation strategy. Use false to disable, true to enable the default <Fade> animation, or a react-transition-group v2 <Transition/> component.\n\ndefault: true\n\n',
        title: 'animation',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'requiredForA11y( PropTypes.oneOfType([PropTypes.string, PropTypes.number]) )',
        title: 'id',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired when a Tab is selected.\n\nfunction (\n  Any eventKey,\n  SyntheticEvent event?\n)',
        title: 'onSelect',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Wait until the first "enter" transition to mount tabs (add them to the DOM)\n\ndefault: false',
        title: 'mountOnEnter',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Unmount tabs (remove it from the DOM) when it is no longer visible\n\ndefault: false',
        title: 'unmountOnExit',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      }
    ],
    description: '#Togglable tabs Tabs, Tab, TabContainer, TabContent, TabPane\nAdd quick, dynamic tab functionality to transition through panes of local content.\n\n#Uncontrolled\nAllow the component to control its own state.\n\n<Tabs defaultActiveKey={2} id="uncontrolled-tab-example">\n  <Tab eventKey={1} name="Tab 1">\n    Tab 1 content\n  </Tab>\n  <Tab eventKey={2} name="Tab 2">\n    Tab 2 content\n  </Tab>\n  <Tab eventKey={3} name="Tab 3" disabled>\n    Tab 3 content\n  </Tab>\n</Tabs>;\n\n#Controlled\nPass down the active state on render via props.\n\nclass ControlledTabs extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleSelect = this.handleSelect.bind(this);\n\n    this.state = {\n      key: 1\n    };\n  }\n\n  handleSelect(key) {\n    alert(`selected ${key}`);\n    this.setState({ key });\n  }\n\n  render() {\n    return (\n      <Tabs\n        activeKey={this.state.key}\n        onSelect={this.handleSelect}\n        id="controlled-tab-example"\n      >\n        <Tab eventKey={1} name="Tab 1">\n          Tab 1 content\n        </Tab>\n        <Tab eventKey={2} name="Tab 2">\n          Tab 2 content\n        </Tab>\n        <Tab eventKey={3} name="Tab 3" disabled>\n          Tab 3 content\n        </Tab>\n      </Tabs>\n    );\n  }\n}\n\nrender(<ControlledTabs />);\n\n#No animation\nSet the animation prop to false\n\n<Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">\n  <Tab eventKey={1} name="Tab 1">\n    Tab 1 content\n  </Tab>\n  <Tab eventKey={2} name="Tab 2">\n    Tab 2 content\n  </Tab>\n  <Tab eventKey={3} name="Tab 3" disabled>\n    Tab 3 content\n  </Tab>\n</Tabs>;\n\n#Tabs with Dropdown\n\n<Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">\n  <Row className="clearfix">\n    <Col sm={12}>\n      <Nav bsStyle="tabs">\n        <NavItem eventKey="first">Tab 1</NavItem>\n        <NavItem eventKey="second">Tab 2</NavItem>\n        <NavDropdown eventKey="3" name="Dropdown" id="nav-dropdown-within-tab">\n          <MenuItem eventKey="3.1">Action</MenuItem>\n          <MenuItem eventKey="3.2">Another action</MenuItem>\n          <MenuItem eventKey="3.3">Something else here</MenuItem>\n          <MenuItem divider />\n          <MenuItem eventKey="3.4">Separated link</MenuItem>\n        </NavDropdown>\n      </Nav>\n    </Col>\n    <Col sm={12}>\n      <Tab.Content animation>\n        <Tab.Pane eventKey="first">Tab 1 content</Tab.Pane>\n        <Tab.Pane eventKey="second">Tab 2 content</Tab.Pane>\n        <Tab.Pane eventKey="3.1">Tab 3.1 content</Tab.Pane>\n        <Tab.Pane eventKey="3.2">Tab 3.2 content</Tab.Pane>\n        <Tab.Pane eventKey="3.3">Tab 3.3 content</Tab.Pane>\n        <Tab.Pane eventKey="3.4">Tab 3.4 content</Tab.Pane>\n      </Tab.Content>\n    </Col>\n  </Row>\n</Tab.Container>;\n\n#Custom Tab Layout\nFor more complex layouts the flexible TabContainer, TabContent, andTabPane components along with any style of Nav allow you to quickly piece together your own Tabs component with additional markup needed.\n\nJust create a set of NavItems each with an eventKey corresponding to the eventKey of a TabPane. Wrap the whole thing in a TabContainer and you have fully functioning custom tabs component. Check out the below example making use of the grid system and pills.\n\n<Tab.Container id="left-tabs-example" defaultActiveKey="first">\n  <Row className="clearfix">\n    <Col sm={4}>\n      <Nav bsStyle="pills" stacked>\n        <NavItem eventKey="first">Tab 1</NavItem>\n        <NavItem eventKey="second">Tab 2</NavItem>\n      </Nav>\n    </Col>\n    <Col sm={8}>\n      <Tab.Content animation>\n        <Tab.Pane eventKey="first">Tab 1 content</Tab.Pane>\n        <Tab.Pane eventKey="second">Tab 2 content</Tab.Pane>\n      </Tab.Content>\n    </Col>\n  </Row>\n</Tab.Container>;',
    id: 'RqM89P3LXDoEh09oR4oa',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'Tabs'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/Media',
    componentProps: [
      {
        description: 'default: <div>\t\n\nYou can use a custom element type for this component.',
        title: 'as',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'required\t\ndefault: \'media\'\t\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Media objects#\nThe media object helps build complex and repetitive components (e.g. blog comments, tweets, the like and more) where some media is positioned alongside content that doesn’t wrap around said media. Plus, it does this with only two required classes thanks to flexbox. Below is an example of a single media object. Only two classes are required—the wrapping Media and the Media.Body around your content. Optional padding and margin can be controlled through spacing utilities.\n\n<Media>\n  <img\n    width={64}\n    height={64}\n    className="mr-3"\n    src="holder.js/64x64"\n    alt="Generic placeholder"\n  />\n  <Media.Body>\n    <h5>Media Heading</h5>\n    <p>\n      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque\n      ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,\n      tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.\n      Donec lacinia congue felis in faucibus.\n    </p>\n  </Media.Body>\n</Media>;\n\nMedia Nesting#\nMedia objects can be infinitely nested, though we suggest you stop at some point. Place nested Media within the Media.Body of a parent media object.\n\n<Media>\n  <img\n    width={64}\n    height={64}\n    className="mr-3"\n    src="holder.js/64x64"\n    alt="Generic placeholder"\n  />\n  <Media.Body>\n    <h5>Media Heading</h5>\n    <p>\n      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque\n      ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,\n      tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.\n      Donec lacinia congue felis in faucibus.\n    </p>\n\n    <Media>\n      <img\n        width={64}\n        height={64}\n        className="mr-3"\n        src="holder.js/64x64"\n        alt="Generic placeholder"\n      />\n      <Media.Body>\n        <h5>Media Heading</h5>\n        <p>\n          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus\n          scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in\n          vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi\n          vulputate fringilla. Donec lacinia congue felis in faucibus.\n        </p>\n      </Media.Body>\n    </Media>\n  </Media.Body>\n</Media>;\n\nMedia Alignment#\nMedia in a media object can be aligned with flexbox utilities to the top (default), middle, or end of your Media.Body content.\n\n<>\n  <Media>\n    <img\n      width={64}\n      height={64}\n      className="align-self-start mr-3"\n      src="holder.js/64x64"\n      alt="Generic placeholder"\n    />\n    <Media.Body>\n      <h5>Media Heading</h5>\n      <p>\n        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque\n        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,\n        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate\n        fringilla. Donec lacinia congue felis in faucibus.\n      </p>\n\n      <p>\n        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu\n        leo. Cum sociis natoque penatibus et magnis dis parturient montes,\n        nascetur ridiculus mus.\n      </p>\n    </Media.Body>\n  </Media>\n\n  <Media>\n    <img\n      width={64}\n      height={64}\n      className="align-self-center mr-3"\n      src="holder.js/64x64"\n      alt="Generic placeholder"\n    />\n    <Media.Body>\n      <h5>Media Heading</h5>\n      <p>\n        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque\n        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,\n        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate\n        fringilla. Donec lacinia congue felis in faucibus.\n      </p>\n\n      <p>\n        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu\n        leo. Cum sociis natoque penatibus et magnis dis parturient montes,\n        nascetur ridiculus mus.\n      </p>\n    </Media.Body>\n  </Media>\n\n  <Media>\n    <img\n      width={64}\n      height={64}\n      className="align-self-end mr-3"\n      src="holder.js/64x64"\n      alt="Generic placeholder"\n    />\n    <Media.Body>\n      <h5>Media Heading</h5>\n      <p>\n        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque\n        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,\n        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate\n        fringilla. Donec lacinia congue felis in faucibus.\n      </p>\n\n      <p className="mb-0">\n        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu\n        leo. Cum sociis natoque penatibus et magnis dis parturient montes,\n        nascetur ridiculus mus.\n      </p>\n    </Media.Body>\n  </Media>\n</>;\n\nMedia Order#\nChange the order of content in media objects by modifying the HTML itself, or by adding some custom flexbox CSS to set the order property (to an integer of your choosing).\n\n<Media>\n  <Media.Body>\n    <h5>Media Heading</h5>\n    <p>\n      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque\n      ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,\n      tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.\n      Donec lacinia congue felis in faucibus.\n    </p>\n  </Media.Body>\n  <img\n    width={64}\n    height={64}\n    className="ml-3"\n    src="holder.js/64x64"\n    alt="Generic placeholder"\n  />\n</Media>;\n\nMedia list#\nBecause the media object has so few structural requirements, you can also use these classes on list HTML elements. On your ul or ol , add the .list-unstyled to remove any browser default list styles, use <Media as="li"> to render as a list item. As always, use spacing utilities wherever needed to fine tune.\n\n<ul className="list-unstyled">\n  <Media as="li">\n    <img\n      width={64}\n      height={64}\n      className="mr-3"\n      src="holder.js/64x64"\n      alt="Generic placeholder"\n    />\n    <Media.Body>\n      <h5>List-based media object</h5>\n      <p>\n        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque\n        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,\n        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate\n        fringilla. Donec lacinia congue felis in faucibus.\n      </p>\n    </Media.Body>\n  </Media>\n\n  <Media as="li">\n    <img\n      width={64}\n      height={64}\n      className="mr-3"\n      src="holder.js/64x64"\n      alt="Generic placeholder"\n    />\n    <Media.Body>\n      <h5>List-based media object</h5>\n      <p>\n        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque\n        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,\n        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate\n        fringilla. Donec lacinia congue felis in faucibus.\n      </p>\n    </Media.Body>\n  </Media>\n\n  <Media as="li">\n    <img\n      width={64}\n      height={64}\n      className="mr-3"\n      src="holder.js/64x64"\n      alt="Generic placeholder"\n    />\n    <Media.Body>\n      <h5>List-based media object</h5>\n      <p>\n        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque\n        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,\n        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate\n        fringilla. Donec lacinia congue felis in faucibus.\n      </p>\n    </Media.Body>\n  </Media>\n</ul>;\n\n',
    id: 'SG5qhWUVVzbOSd82mdug',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Media',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/Tab',
    componentProps: [
      {
        description: 'required',
        title: 'name',
        propType: 'PropTypes.node',
        propTypeIsrequired: true
      }
    ],
    description: 'Tab',
    id: 'SXebJOqI82f3Yg2XsdB4',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    subtitle: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Tab'
  },
  {
    children: [],
    closeTag: false,
    componentImport: '-',
    componentProps: [
      {
        description: 'When true, the scroll view bounces vertically when it reaches the end even if the content is smaller than the scroll view itself. The default value is false when horizontal={true} and true otherwise.',
        title: 'alwaysBounceVertical',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'These styles will be applied to the scroll view content container which wraps all of the child views. Example:\n\nreturn (\n  <ScrollView contentContainerStyle={styles.contentContainer}>\n  </ScrollView>\n);\n...\nconst styles = StyleSheet.create({\n  contentContainer: {\n    paddingVertical: 20\n  }\n});\n\nType: StyleSheetPropType(View Style props)',
        title: 'contentContainerStyle',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Determines whether the keyboard gets dismissed in response to a drag.\n\nCross platform\n\n\'none\' (the default), drags do not dismiss the keyboard.\n\'on-drag\', the keyboard is dismissed when a drag begins.\niOS Only\n\n\'interactive\', the keyboard is dismissed interactively with the drag and moves in synchrony with the touch; dragging upwards cancels the dismissal. On android this is not supported and it will have the same behavior as \'none\'.\n\nType: enum(\'none\', \'on-drag\', \'interactive\')',
        title: 'keyboardDismissMode',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Determines when the keyboard should stay visible after a tap.\n\n\'never\' (the default), tapping outside of the focused text input when the keyboard is up dismisses the keyboard. When this happens, children won\'t receive the tap.\n\'always\', the keyboard will not dismiss automatically, and the scroll view will not catch taps, but children of the scroll view can catch taps.\n\'handled\', the keyboard will not dismiss automatically when the tap was handled by a children, (or captured by an ancestor).\nfalse, deprecated, use \'never\' instead\ntrue, deprecated, use \'always\' instead\n\nType: enum(\'always\', \'never\', \'handled\', false, true)',
        title: 'keyboardShouldPersistTaps',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Called when scrollable content view of the ScrollView changes.\n\nHandler function is passed the content width and content height as parameters: (contentWidth, contentHeight)\n\nIt\'s implemented using onLayout handler attached to the content container which this ScrollView renders.',
        title: 'onContentSizeChange',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Called when the momentum scroll starts (scroll which occurs as the ScrollView glides to a stop).',
        title: 'onMomentumScrollBegin',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Called when the momentum scroll ends (scroll which occurs as the ScrollView glides to a stop).',
        title: 'onMomentumScrollEnd',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Fires at most once per frame during scrolling. The frequency of the events can be controlled using the scrollEventThrottle prop.',
        title: 'onScroll',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Called when the user begins to drag the scroll view.',
        title: 'onScrollBeginDrag',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Called when the user stops dragging the scroll view and it either stops or begins to glide.',
        title: 'onScrollEndDrag',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'When true, the scroll view stops on multiples of the scroll view\'s size when scrolling. This can be used for horizontal pagination. The default value is false.\n\nNote: Vertical pagination is not supported on Android.',
        title: 'pagingEnabled',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'A RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView. Only works for vertical ScrollViews (horizontal prop must be false).',
        title: 'refreshControl',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'Experimental: When true, offscreen child views (whose overflow value is hidden) are removed from their native backing superview when offscreen. This can improve scrolling performance on long lists. The default value is true.',
        title: 'removeClippedSubviews',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'When false, the view cannot be scrolled via touch interaction. The default value is true.\n\nNote that the view can always be scrolled by calling scrollTo.\n',
        title: 'scrollEnabled',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'When true, shows a horizontal scroll indicator. The default value is true.',
        title: 'showsHorizontalScrollIndicator',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'When true, shows a vertical scroll indicator. The default value is true.',
        title: 'showsVerticalScrollIndicator',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'An array of child indices determining which children get docked to the top of the screen when scrolling. For example, passing stickyHeaderIndices={[0]} will cause the first child to be fixed to the top of the scroll view. This property is not supported in conjunction with horizontal={true}',
        title: 'stickyHeaderIndices',
        propType: 'PropTypes.array',
        propTypeIsrequired: false
      },
      {
        description: 'Sometimes a scrollview takes up more space than its content fills. When this is the case, this prop will fill the rest of the scrollview with a color to avoid setting a background and creating unnecessary overdraw. This is an advanced optimization that is not needed in the general case.',
        title: 'endFillColor',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Used to override default value of overScroll mode.\n\nPossible values:\n\n\'auto\' - Default value, allow a user to over-scroll this view only if the content is large enough to meaningfully scroll.\n\'always\' - Always allow a user to over-scroll this view.\n\'never\' - Never allow a user to over-scroll this view.\n\n\nType: enum(\'auto\', \'always\', \'never\')',
        title: 'overScrollMode',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Tag used to log scroll performance on this scroll view. Will force momentum events to be turned on (see sendMomentumEvents). This doesn\'t do anything out of the box and you need to implement a custom native FpsListener for it to be useful.',
        title: 'scrollPerfTag',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'When true, the scroll view bounces horizontally when it reaches the end even if the content is smaller than the scroll view itself. The default value is true when horizontal={true} and false otherwise.',
        title: 'alwaysBounceHorizontal',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'When true, the scroll view\'s children are arranged horizontally in a row instead of vertically in a column. The default value is false.',
        title: 'horizontal',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Controls whether iOS should automatically adjust the content inset for scroll views that are placed behind a navigation bar or tab bar/ toolbar. The default value is true.',
        title: 'automaticallyAdjustContentInsets',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'When true, the scroll view bounces when it reaches the end of the content if the content is larger then the scroll view along the axis of the scroll direction. When false, it disables all bouncing even if the alwaysBounce* props are true. The default value is true.',
        title: 'bounces',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'When true, gestures can drive zoom past min/max and the zoom will animate to the min/max value at gesture end, otherwise the zoom will not exceed the limits.',
        title: 'bouncesZoom',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'When false, once tracking starts, won\'t try to drag if the touch moves. The default value is true.',
        title: 'canCancelContentTouches',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'When true, the scroll view automatically centers the content when the content is smaller than the scroll view bounds; when the content is larger than the scroll view, this property has no effect. The default value is false.',
        title: 'centerContent',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'The amount by which the scroll view content is inset from the edges of the scroll view. Defaults to {top: 0, left: 0, bottom: 0, right: 0}.\n\nType: object: {top: number, left: number, bottom: number, right: number}',
        title: 'contentInset',
        propType: 'PropTypes.object',
        propTypeIsrequired: false
      },
      {
        description: 'This property specifies how the safe area insets are used to modify the content area of the scroll view. The default value of this property is "never". Available on iOS 11 and later.\n\nType: enum(\'automatic\', \'scrollableAxes\', \'never\', \'always\')',
        title: 'contentInsetAdjustmentBehavior',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Used to manually set the starting scroll offset. The default value is {x: 0, y: 0}.',
        title: 'contentOffset',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'A floating-point number that determines how quickly the scroll view decelerates after the user lifts their finger. You may also use string shortcuts "normal" and "fast" which match the underlying iOS settings for UIScrollViewDecelerationRateNormal and UIScrollViewDecelerationRateFast respectively.\n\n\'normal\': 0.998 (the default)\n\'fast\': 0.99\n\nType: enum(\'fast\', \'normal\'), ,number',
        title: 'decelerationRate',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'When true, the ScrollView will try to lock to only vertical or horizontal scrolling while dragging. The default value is false.',
        title: 'directionalLockEnabled',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'The style of the scroll indicators.\n\n\'default\' (the default), same as black.\n\'black\', scroll indicator is black. This style is good against a light background.\n\'white\', scroll indicator is white. This style is good against a dark background.\n\nType: enum(\'default\', \'black\', \'white\')',
        title: 'indicatorStyle',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'The maximum allowed zoom scale. The default value is 1.0.',
        title: 'maximumZoomScale',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'The minimum allowed zoom scale. The default value is 1.0.',
        title: 'minimumZoomScale',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'When true, ScrollView allows use of pinch gestures to zoom in and out. The default value is true.',
        title: 'pinchGestureEnabled',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'This controls how often the scroll event will be fired while scrolling (as a time interval in ms). A lower number yields better accuracy for code that is tracking the scroll position, but can lead to scroll performance problems due to the volume of information being send over the bridge. You will not notice a difference between values set between 1-16 as the JS run loop is synced to the screen refresh rate. If you do not need precise scroll position tracking, set this value higher to limit the information being sent across the bridge. The default value is zero, which results in the scroll event being sent only once each time the view is scrolled.',
        title: 'scrollEventThrottle',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'The amount by which the scroll view indicators are inset from the edges of the scroll view. This should normally be set to the same value as the contentInset. Defaults to {0, 0, 0, 0}.\n\nType: object: {top: number, left: number, bottom: number, right: number}',
        title: 'scrollIndicatorInsets',
        propType: 'PropTypes.object',
        propTypeIsrequired: false
      },
      {
        description: 'When true, the scroll view scrolls to top when the status bar is tapped. The default value is true.',
        title: 'scrollsToTop',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'When snapToInterval is set, snapToAlignment will define the relationship of the snapping to the scroll view.\n\n\'start\' (the default) will align the snap at the left (horizontal) or top (vertical)\n\'center\' will align the snap in the center\n\'end\' will align the snap at the right (horizontal) or bottom (vertical)\n\nType: enum(\'start\', \'center\', \'end\')',
        title: 'snapToAlignment',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'When set, causes the scroll view to stop at multiples of the value of snapToInterval. This can be used for paginating through children that have lengths smaller than the scroll view. Typically used in combination with snapToAlignment and decelerationRate="fast". Overrides less configurable pagingEnabled prop.\n\nNote: Vertical snapToInterval is not supported on Android.',
        title: 'snapToInterval',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'The current scale of the scroll view content. The default value is 1.0.',
        title: 'zoomScale',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'Enables nested scrolling for Android API level 21+. Nested scrolling is supported by default on iOS.',
        title: 'nestedScrollEnabled',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      }
    ],
    description: 'Component that wraps platform ScrollView while providing integration with touch locking "responder" system.\n\nKeep in mind that ScrollViews must have a bounded height in order to work, since they contain unbounded-height children into a bounded container (via a scroll interaction). In order to bound the height of a ScrollView, either set the height of the view directly (discouraged) or make sure all parent views have bounded height. Forgetting to transfer {flex: 1} down the view stack can lead to errors here, which the element inspector makes easy to debug.\n\nDoesn\'t yet support other contained responders from blocking this scroll view from becoming the responder.\n\n<ScrollView> vs <FlatList> - which one to use?\n\nScrollView simply renders all its react child components at once. That makes it very easy to understand and use.\n\nOn the other hand, this has a performance downside. Imagine you have a very long list of items you want to display, maybe several screens worth of content. Creating JS components and native views for everything all at once, much of which may not even be shown, will contribute to slow rendering and increased memory usage.\n\nThis is where FlatList comes into play. FlatList renders items lazily, just when they are about to appear, and removes items that scroll way off screen to save memory and processing time.\n\nFlatList is also handy if you want to render separators between your items, multiple columns, infinite scroll loading, or any number of other features it supports out of the box.',
    id: 'Sa5gnvuwj44k5pt9Tglp',
    isDefault: true,
    provider: 'ReactNative',
    techno: 'React Native',
    title: 'ScrollView',
    subtitle: 'ReactNative'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/ProgressBar',
    componentProps: [
      {
        description: 'default: false\t\n\nAnimate\'s the stripes from right to left',
        title: 'animated',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'type: onlyProgressBar\n\nChild elements (only allows elements of type )',
        title: 'children',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Show label that represents visual percentage. EG. 60%',
        title: 'label',
        propType: 'PropTypes.node',
        propTypeIsrequired: false
      },
      {
        description: 'default: 100\n\nMaximum value progress can reach',
        title: 'max',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'default: 0\t\n\nMinimum value progress can begin from',
        title: 'min',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'Current value of progress',
        title: 'now',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'default: false\t\n\nHide\'s the label visually.',
        title: 'srOnly',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: false\t\n\nUses a gradient to create a striped effect.',
        title: 'striped',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: \'success\' | \'danger\' | \'warning\' | \'info\'\n\nSets the background class of the progress bar.',
        title: 'variant',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      }
    ],
    description: 'Progress bars#\nProvide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars.\n\nExample#\nDefault progress bar.\n\n<ProgressBar now={60} />;\n\nWith label#\nAdd a label prop to show a visible percentage. For low percentages, consider adding a min-width to ensure the label\'s text is fully visible.\n\nconst now = 60;\n\nconst progressInstance = <ProgressBar now={now} label={`${now}%`} />;\n\nrender(progressInstance);\n\nScreenreader only label#\nAdd a srOnly prop to hide the label visually.\n\nconst now = 60;\n\nconst progressInstance = <ProgressBar now={now} label={`${now}%`} srOnly />;\n\nrender(progressInstance);\n\nContextual alternatives#\nProgress bars use some of the same button and alert classes for consistent styles.\n\n<div>\n  <ProgressBar variant="success" now={40} />\n  <ProgressBar variant="info" now={20} />\n  <ProgressBar variant="warning" now={60} />\n  <ProgressBar variant="danger" now={80} />\n</div>;\n\nStriped#\nUses a gradient to create a striped effect. Not available in IE8.\n\n<div>\n  <ProgressBar striped variant="success" now={40} />\n  <ProgressBar striped variant="info" now={20} />\n  <ProgressBar striped variant="warning" now={60} />\n  <ProgressBar striped variant="danger" now={80} />\n</div>;\n\nAnimated#\nAdd active prop to animate the stripes right to left. Not available in IE9 and below.\n\n<ProgressBar animated now={45} />;\n\nStacked#\nNest <ProgressBar />s to stack them.\n\n<ProgressBar>\n  <ProgressBar striped variant="success" now={35} key={1} />\n  <ProgressBar variant="warning" now={20} key={2} />\n  <ProgressBar striped variant="danger" now={10} key={3} />\n</ProgressBar>;',
    id: 'Sfm4I0k2yUQtBkPbFJsA',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'ProgressBar',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/Jumbotron',
    componentProps: [
      {
        description: 'default: <div>\t\n\nYou can use a custom element type for this component.',
        title: 'as',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'default: false\n\t\nMake the jumbotron full width, and without rounded corners',
        title: 'fluid',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: \'jumbotron\'\t\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Jumbotron#\nA lightweight, flexible component that can optionally extend the entire viewport to showcase key content on your site.\n\n<Jumbotron>\n  <h1>Hello, world!</h1>\n  <p>\n    This is a simple hero unit, a simple jumbotron-style component for calling\n    extra attention to featured content or information.\n  </p>\n  <p>\n    <Button variant="primary">Learn more</Button>\n  </p>\n</Jumbotron>;\n\n<Jumbotron fluid>\n  <Container>\n    <h1>Fluid jumbotron</h1>\n    <p>\n      This is a modified jumbotron that occupies the entire horizontal space of\n      its parent.\n    </p>\n  </Container>\n</Jumbotron>;',
    id: 'TlwKaou20n4H7NsrIVjy',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Jumbotron',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    closeTag: false,
    componentImport: 'react-bootstrap/lib/ProgressBar',
    componentProps: [
      {
        description: 'min\n\ndefault: 0',
        title: 'min',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'now',
        title: 'now',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'max\n\ndefault: 100',
        title: 'max',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'label',
        title: 'label',
        propType: 'PropTypes.node',
        propTypeIsrequired: false
      },
      {
        description: 'default: false',
        title: 'srOnly',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: false',
        title: 'striped',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: false',
        title: 'active',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'type: onlyProgressBar',
        title: 'children',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Component visual or contextual style variants.\n\none of: "success", "warning", "danger", "info"',
        title: 'bsStyle',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'progress-bar\'',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: '#Progress bars ProgressBar\nProvide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars.\n\n#Basic example\nDefault progress bar.\n\n<ProgressBar now={60} />;\n\n#With label\nAdd a label prop to show a visible percentage. For low percentages, consider adding a min-width to ensure the label\'s text is fully visible.\n\nconst now = 60;\n\nconst progressInstance = <ProgressBar now={now} label={`${now}%`} />;\n\nrender(progressInstance);\n\n#Screenreader only label\nAdd a srOnly prop to hide the label visually.\n\nconst now = 60;\n\nconst progressInstance = <ProgressBar now={now} label={`${now}%`} srOnly />;\n\nrender(progressInstance);\n\n#Contextual alternatives\nProgress bars use some of the same button and alert classes for consistent styles.\n\n<div>\n  <ProgressBar bsStyle="success" now={40} />\n  <ProgressBar bsStyle="info" now={20} />\n  <ProgressBar bsStyle="warning" now={60} />\n  <ProgressBar bsStyle="danger" now={80} />\n</div>;\n\n#Striped\nUses a gradient to create a striped effect. Not available in IE8.\n\n<div>\n  <ProgressBar striped bsStyle="success" now={40} />\n  <ProgressBar striped bsStyle="info" now={20} />\n  <ProgressBar striped bsStyle="warning" now={60} />\n  <ProgressBar striped bsStyle="danger" now={80} />\n</div>;\n\n#Animated\nAdd active prop to animate the stripes right to left. Not available in IE9 and below.\n\n<ProgressBar active now={45} />;\n\n#Stacked\nNest <ProgressBar />s to stack them.\n\n<ProgressBar>\n  <ProgressBar striped bsStyle="success" now={35} key={1} />\n  <ProgressBar bsStyle="warning" now={20} key={2} />\n  <ProgressBar active bsStyle="danger" now={10} key={3} />\n</ProgressBar>;\n\n',
    id: 'TwRratbcLFFMiBnWdkXR',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'ProgressBar'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/Dropdown',
    componentProps: [
      {
        description: 'default: <div>\t\n\nYou can use a custom element type for this component.',
        title: 'as',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'required\t\ndefault: \'dropdown-divider\'\t\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: true
      }
    ],
    description: 'Dropdown.Divider',
    id: 'U8QRHVGnBYyDVkDTSMZR',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Dropdown__Divider',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    closeTag: false,
    componentImport: 'react-bootstrap/lib/Alert',
    componentProps: [
      {
        description: 'Closeable alerts: just pass in a onDismiss function.',
        title: 'onDismiss',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Default: \'Close alert\'',
        title: 'closeLabel',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Component visual or contextual style variants. Deafult: \'info\'',
        title: 'bsStyle',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\nDefault: \'alert\'',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'class AlertDismissable extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleDismiss = this.handleDismiss.bind(this);\n    this.handleShow = this.handleShow.bind(this);\n\n    this.state = {\n      show: true\n    };\n  }\n\n  handleDismiss() {\n    this.setState({ show: false });\n  }\n\n  handleShow() {\n    this.setState({ show: true });\n  }\n\n  render() {\n    if (this.state.show) {\n      return (\n        <Alert bsStyle="danger" onDismiss={this.handleDismiss}>\n          <h4>Oh snap! You got an error!</h4>\n          <p>\n            Change this and that and try again. Duis mollis, est non commodo\n            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.\n            Cras mattis consectetur purus sit amet fermentum.\n          </p>\n          <p>\n            <Button bsStyle="danger">Take this action</Button>\n            <span> or </span>\n            <Button onClick={this.handleDismiss}>Hide Alert</Button>\n          </p>\n        </Alert>\n      );\n    }\n\n    return <Button onClick={this.handleShow}>Show Alert</Button>;\n  }\n}\n\nrender(<AlertDismissable />);',
    id: 'UiDOCcR8GgBTsegJY1tj',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'Alert'
  },
  {
    children: [],
    closeTag: false,
    componentImport: '-',
    componentProps: [
      {
        description: 'The style of the tab bar. Supported values are \'default\', \'black\'. Use \'black\' instead of setting barTintColor to black. This produces a tab bar with the native iOS style with higher translucency.\n\nenum(\'default\', \'black\')',
        title: 'barStyle',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Background color of the tab bar',
        title: 'barTintColor',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Specifies tab bar item positioning. Available values are:\n\nfill - distributes items across the entire width of the tab bar\ncenter - centers item in the available tab bar space\nauto (default) - distributes items dynamically according to the user interface idiom. In a horizontally compact environment (e.g. iPhone 5) this value defaults to fill, in a horizontally regular one (e.g. iPad) it defaults to center.\n\nenum(\'fill\', \'center\', \'auto\')',
        title: 'itemPositioning',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'style',
        title: 'style',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Color of the currently selected tab icon',
        title: 'tintColor',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'A Boolean value that indicates whether the tab bar is translucent',
        title: 'translucent',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Color of unselected tab icons. Available since iOS 10.',
        title: 'unselectedItemTintColor',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Color of text on unselected tabs',
        title: 'unselectedTintColor',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'TabBarIOS',
    id: 'VQhJW0TkVxGjFKx5BBuZ',
    isDefault: true,
    provider: 'ReactNative',
    techno: 'React Native',
    title: 'TabBarIOS',
    subtitle: 'ReactNative'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/CardGroup',
    componentProps: [
      {
        description: 'type: elementType\ndefault: <div>\t\n\nYou can use a custom element type for this component.',
        title: 'as',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'required\t\ndefault: \'card-group\'\t\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: true
      }
    ],
    description: 'CardGroup',
    id: 'WJ5027EqM7PtXdzqthIo',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'CardGroup',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    closeTag: false,
    componentImport: 'react-bootstrap/lib/FormControl',
    componentProps: [
      {
        description: 'You can use a custom element type for this component.\n\ndefault: \'input\'',
        title: 'componentClass',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'Only relevant if componentClass is \'input\'.',
        title: 'type',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Uses controlId from <FormGroup> if not explicitly specified.',
        title: 'id',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Attaches a ref to the <input> element. Only functions can be used here.\n\n<FormControl inputRef={ref => { this.input = ref; }} />',
        title: 'inputRef',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Component size variations.\n\none of: "sm", "small", "lg", "large"',
        title: 'bsSize',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'form-control\'',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'FormControl',
    id: 'WiJxosR2Zj1CrxwrAl21',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'FormControl'
  },
  {
    children: [],
    closeTag: false,
    componentImport: 'react-bootstrap/lib/DropdownButton',
    componentProps: [
      {
        description: 'Component visual or contextual style variants.',
        title: 'bsStyle',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Component size variations.',
        title: 'bsSize',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'name',
        title: 'name',
        propType: 'PropTypes.node',
        propTypeIsrequired: false
      },
      {
        description: 'noCaret',
        title: 'noCaret',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      }
    ],
    description: 'DropdownButton',
    id: 'WwzmVnngTfupuvp5A0ke',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'DropdownButton'
  },
  {
    children: [],
    closeTag: false,
    componentImport: 'react-bootstrap/lib/ToggleButton',
    componentProps: [
      {
        description: 'The <input> type',
        title: 'type',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'The HTML input name, used to group like checkboxes or radio buttons together semantically',
        title: 'name',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'The checked state of the input, managed by ` automatically',
        title: 'checked',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'The disabled state of both the label and input',
        title: 'disabled',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'onChange',
        title: 'onChange',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'The value of the input, and unique identifier in the ToggleButtonGroup',
        title: 'value',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'ToggleButton',
    id: 'XR8wRXtjvEMBCwZoQoj9',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'ToggleButton'
  },
  {
    children: [],
    closeTag: true,
    componentImport: 'react-bootstrap/lib/Modal',
    componentProps: [
      {
        description: 'Include a backdrop component. Specify \'static\' for a backdrop that doesn\'t trigger an "onHide" when clicked.\n\none of: \'static\', true, false',
        title: 'backdrop',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Add an optional extra class name to .modal-backdrop It could end up looking like class="modal-backdrop foo-modal-backdrop in".',
        title: 'backdropClassName',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Close the modal when escape key is pressed',
        title: 'keyboard',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Open and close the Modal with a slide and fade animation.\n\ndefault: true',
        title: 'animation',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'A Component type that provides the modal content Markup. This is a useful prop when you want to use your own styles and markup to create a custom modal component.\n\ndefault: ModalDialog',
        title: 'dialogComponentClass',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'When true The modal will automatically shift focus to itself when it opens, and replace it to the last focused element when it closes. Generally this should never be set to false as it makes the Modal less accessible to assistive technologies, like screen-readers.',
        title: 'autoFocus',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'When true The modal will prevent focus from leaving the Modal while open. Consider leaving the default value here, as it is necessary to make the Modal work well with assistive technologies, such as screen readers.',
        title: 'enforceFocus',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'When true The modal will restore focus to previously focused element once modal is hidden',
        title: 'restoreFocus',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'When true The modal will show itself.',
        title: 'show',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: '\t\nA callback fired when the header closeButton or non-static backdrop is clicked. Required if either are specified.',
        title: 'onHide',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired before the Modal transitions in',
        title: 'onEnter',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired as the Modal begins to transition in',
        title: 'onEntering',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired after the Modal finishes transitioning in',
        title: 'onEntered',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired right before the Modal transitions out',
        title: 'onExit',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired as the Modal begins to transition out',
        title: 'onExiting',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired after the Modal finishes transitioning out',
        title: 'onExited',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Component size variations.\n\none of: "lg", "large", "sm", "small"',
        title: 'bsSize',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'modal\'',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: '#Modals Modal\n#Static Markup\nA modal dialog component\n\n<div className="static-modal">\n  <Modal.Dialog>\n    <Modal.Header>\n      <Modal.name>Modal name</Modal.name>\n    </Modal.Header>\n\n    <Modal.Body>One fine body...</Modal.Body>\n\n    <Modal.Footer>\n      <Button>Close</Button>\n      <Button bsStyle="primary">Save changes</Button>\n    </Modal.Footer>\n  </Modal.Dialog>\n</div>;\n\n#Basic example\nA modal with header, body, and set of actions in the footer. Use <Modal/> in combination with other components to show or hide your Modal. The <Modal/> Component comes with a few convenient "sub components": <Modal.Header/>, <Modal.name/>, <Modal.Body/>, and <Modal.Footer/>, which you can use to build the Modal content.\n\nclass Example extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleShow = this.handleShow.bind(this);\n    this.handleClose = this.handleClose.bind(this);\n\n    this.state = {\n      show: false\n    };\n  }\n\n  handleClose() {\n    this.setState({ show: false });\n  }\n\n  handleShow() {\n    this.setState({ show: true });\n  }\n\n  render() {\n    const popover = (\n      <Popover id="modal-popover" name="popover">\n        very popover. such engagement\n      </Popover>\n    );\n    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;\n\n    return (\n      <div>\n        <p>Click to get the full Modal experience!</p>\n\n        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>\n          Launch demo modal\n        </Button>\n\n        <Modal show={this.state.show} onHide={this.handleClose}>\n          <Modal.Header closeButton>\n            <Modal.name>Modal heading</Modal.name>\n          </Modal.Header>\n          <Modal.Body>\n            <h4>Text in a modal</h4>\n            <p>\n              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.\n            </p>\n\n            <h4>Popover in a modal</h4>\n            <p>\n              there is a{\' \'}\n              <OverlayTrigger overlay={popover}>\n                <a href="#popover">popover</a>\n              </OverlayTrigger>{\' \'}\n              here\n            </p>\n\n            <h4>Tooltips in a modal</h4>\n            <p>\n              there is a{\' \'}\n              <OverlayTrigger overlay={tooltip}>\n                <a href="#tooltip">tooltip</a>\n              </OverlayTrigger>{\' \'}\n              here\n            </p>\n\n            <hr />\n\n            <h4>Overflowing text to show scroll behavior</h4>\n            <p>\n              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\n              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta\n              ac consectetur ac, vestibulum at eros.\n            </p>\n            <p>\n              Praesent commodo cursus magna, vel scelerisque nisl consectetur\n              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor\n              auctor.\n            </p>\n            <p>\n              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo\n              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio\n              dui. Donec ullamcorper nulla non metus auctor fringilla.\n            </p>\n            <p>\n              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\n              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta\n              ac consectetur ac, vestibulum at eros.\n            </p>\n            <p>\n              Praesent commodo cursus magna, vel scelerisque nisl consectetur\n              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor\n              auctor.\n            </p>\n            <p>\n              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo\n              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio\n              dui. Donec ullamcorper nulla non metus auctor fringilla.\n            </p>\n            <p>\n              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\n              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta\n              ac consectetur ac, vestibulum at eros.\n            </p>\n            <p>\n              Praesent commodo cursus magna, vel scelerisque nisl consectetur\n              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor\n              auctor.\n            </p>\n            <p>\n              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo\n              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio\n              dui. Donec ullamcorper nulla non metus auctor fringilla.\n            </p>\n          </Modal.Body>\n          <Modal.Footer>\n            <Button onClick={this.handleClose}>Close</Button>\n          </Modal.Footer>\n        </Modal>\n      </div>\n    );\n  }\n}\n\nrender(<Example />);\n\nAdditional Import Options\nThe Modal Header, name, Body, and Footer components are available as static properties the <Modal/> component, but you can also, import them directly from the /lib directory like: require("react-bootstrap/lib/ModalHeader").\n\n#Contained Modal\nYou will need to add the following css to your project and ensure that your container has the modal-container class.\n\n.modal-container {\n  position: relative;\n}\n.modal-container .modal, .modal-container .modal-backdrop {\n  position: absolute;\n}\n\n/**\n * You will want to include this bit of css\n *\n * .modal-container {\n *   position: relative;\n * }\n * .modal-container .modal, .modal-container .modal-backdrop {\n *   position: absolute;\n * }\n */\n\nclass Trigger extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleHide = this.handleHide.bind(this);\n\n    this.state = {\n      show: false\n    };\n  }\n\n  handleHide() {\n    this.setState({ show: false });\n  }\n  render() {\n    return (\n      <div className="modal-container" style={{ height: 200 }}>\n        <Button\n          bsStyle="primary"\n          bsSize="large"\n          onClick={() => this.setState({ show: true })}\n        >\n          Launch contained modal\n        </Button>\n\n        <Modal\n          show={this.state.show}\n          onHide={this.handleHide}\n          container={this}\n          aria-labelledby="contained-modal-name"\n        >\n          <Modal.Header closeButton>\n            <Modal.name id="contained-modal-name">\n              Contained Modal\n            </Modal.name>\n          </Modal.Header>\n          <Modal.Body>\n            Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id\n            ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.\n          </Modal.Body>\n          <Modal.Footer>\n            <Button onClick={this.handleHide}>Close</Button>\n          </Modal.Footer>\n        </Modal>\n      </div>\n    );\n  }\n}\n\nrender(<Trigger />);\n\n#Sizing modals using standard Bootstrap props\nYou can specify a bootstrap large or small modal by using the "bsSize" prop.\n\nclass MySmallModal extends React.Component {\n  render() {\n    return (\n      <Modal\n        {...this.props}\n        bsSize="small"\n        aria-labelledby="contained-modal-name-sm"\n      >\n        <Modal.Header closeButton>\n          <Modal.name id="contained-modal-name-sm">Modal heading</Modal.name>\n        </Modal.Header>\n        <Modal.Body>\n          <h4>Wrapped Text</h4>\n          <p>\n            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\n            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta\n            ac consectetur ac, vestibulum at eros.\n          </p>\n          <p>\n            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\n            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor\n            auctor.\n          </p>\n          <p>\n            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo\n            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio\n            dui. Donec ullamcorper nulla non metus auctor fringilla.\n          </p>\n          <p>\n            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\n            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta\n            ac consectetur ac, vestibulum at eros.\n          </p>\n          <p>\n            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\n            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor\n            auctor.\n          </p>\n          <p>\n            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo\n            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio\n            dui. Donec ullamcorper nulla non metus auctor fringilla.\n          </p>\n          <p>\n            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\n            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta\n            ac consectetur ac, vestibulum at eros.\n          </p>\n          <p>\n            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\n            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor\n            auctor.\n          </p>\n          <p>\n            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo\n            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio\n            dui. Donec ullamcorper nulla non metus auctor fringilla.\n          </p>\n        </Modal.Body>\n        <Modal.Footer>\n          <Button onClick={this.props.onHide}>Close</Button>\n        </Modal.Footer>\n      </Modal>\n    );\n  }\n}\n\nclass MyLargeModal extends React.Component {\n  render() {\n    return (\n      <Modal\n        {...this.props}\n        bsSize="large"\n        aria-labelledby="contained-modal-name-lg"\n      >\n        <Modal.Header closeButton>\n          <Modal.name id="contained-modal-name-lg">Modal heading</Modal.name>\n        </Modal.Header>\n        <Modal.Body>\n          <h4>Wrapped Text</h4>\n          <p>\n            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\n            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta\n            ac consectetur ac, vestibulum at eros.\n          </p>\n          <p>\n            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\n            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor\n            auctor.\n          </p>\n          <p>\n            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo\n            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio\n            dui. Donec ullamcorper nulla non metus auctor fringilla.\n          </p>\n          <p>\n            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\n            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta\n            ac consectetur ac, vestibulum at eros.\n          </p>\n          <p>\n            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\n            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor\n            auctor.\n          </p>\n          <p>\n            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo\n            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio\n            dui. Donec ullamcorper nulla non metus auctor fringilla.\n          </p>\n          <p>\n            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\n            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta\n            ac consectetur ac, vestibulum at eros.\n          </p>\n          <p>\n            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\n            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor\n            auctor.\n          </p>\n          <p>\n            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo\n            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio\n            dui. Donec ullamcorper nulla non metus auctor fringilla.\n          </p>\n        </Modal.Body>\n        <Modal.Footer>\n          <Button onClick={this.props.onHide}>Close</Button>\n        </Modal.Footer>\n      </Modal>\n    );\n  }\n}\n\nclass App extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.state = {\n      smShow: false,\n      lgShow: false\n    };\n  }\n  render() {\n    let smClose = () => this.setState({ smShow: false });\n    let lgClose = () => this.setState({ lgShow: false });\n\n    return (\n      <ButtonToolbar>\n        <Button\n          bsStyle="primary"\n          onClick={() => this.setState({ smShow: true })}\n        >\n          Launch small demo modal\n        </Button>\n        <Button\n          bsStyle="primary"\n          onClick={() => this.setState({ lgShow: true })}\n        >\n          Launch large demo modal\n        </Button>\n\n        <MySmallModal show={this.state.smShow} onHide={smClose} />\n        <MyLargeModal show={this.state.lgShow} onHide={lgClose} />\n      </ButtonToolbar>\n    );\n  }\n}\n\nrender(<App />);\n\n#Sizing modals using custom CSS\nYou can apply custom css to the modal dialog div using the "dialogClassName" prop. Example is using a custom css class with width set to 90%.\n\nclass Example extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleShow = this.handleShow.bind(this);\n    this.handleHide = this.handleHide.bind(this);\n\n    this.state = {\n      show: false\n    };\n  }\n\n  handleShow() {\n    this.setState({ show: true });\n  }\n\n  handleHide() {\n    this.setState({ show: false });\n  }\n\n  render() {\n    return (\n      <ButtonToolbar>\n        <Button bsStyle="primary" onClick={this.handleShow}>\n          Launch demo modal\n        </Button>\n\n        <Modal\n          {...this.props}\n          show={this.state.show}\n          onHide={this.handleHide}\n          dialogClassName="custom-modal"\n        >\n          <Modal.Header closeButton>\n            <Modal.name id="contained-modal-name-lg">\n              Modal heading\n            </Modal.name>\n          </Modal.Header>\n          <Modal.Body>\n            <h4>Wrapped Text</h4>\n            <p>\n              Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae\n              unde commodi aspernatur enim, consectetur. Cumque deleniti\n              temporibus ipsam atque a dolores quisquam quisquam adipisci\n              possimus laboriosam. Quibusdam facilis doloribus debitis! Sit\n              quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem!\n              Mollitia reiciendis porro quo magni incidunt dolore amet atque\n              facilis ipsum deleniti rem! Dolores debitis voluptatibus ipsum\n              dicta. Dolor quod amet ab sint esse distinctio tenetur. Veritatis\n              laudantium quibusdam quidem corporis architecto veritatis. Ex\n              facilis minima beatae sunt perspiciatis placeat. Quasi corporis\n              odio eaque voluptatibus ratione magnam nulla? Amet cum maiores\n              consequuntur totam dicta! Inventore adipisicing vel vero odio modi\n              doloremque? Vitae porro impedit ea minima laboriosam quisquam\n              neque. Perspiciatis omnis obcaecati consequatur sunt deleniti\n              similique facilis sequi. Ipsum harum vitae modi reiciendis\n              officiis. Quas laudantium laudantium modi corporis nihil provident\n              consectetur omnis, natus nulla distinctio illum corporis. Sit ex\n              earum odio ratione consequatur odit minus laborum? Eos? Sit ipsum\n              illum architecto aspernatur perspiciatis error fuga illum, tempora\n              harum earum, a dolores. Animi facilis inventore harum dolore\n              accusamus fuga provident molestiae eum! Odit dicta error dolorem\n              sunt reprehenderit. Sit similique iure quae obcaecati harum. Eum\n              saepe fugit magnam dicta aliquam? Sapiente possimus aliquam fugiat\n              officia culpa sint! Beatae voluptates voluptatem excepturi\n              molestiae alias in tenetur beatae placeat architecto. Sit possimus\n              rerum fugiat sapiente aspernatur. Necessitatibus tempora animi\n              dicta perspiciatis tempora a velit in! Doloribus perspiciatis\n              doloribus suscipit nam earum. Deleniti veritatis eaque totam\n              assumenda fuga sapiente! Id recusandae. Consectetur necessitatibus\n              eaque velit nobis aliquid? Fugit illum qui suscipit aspernatur\n              alias ipsum repudiandae! Quia omnis quisquam dignissimos a\n              mollitia. Suscipit aspernatur eum maiores repellendus ipsum\n              doloribus alias voluptatum consequatur. Consectetur quibusdam\n              veniam quas tenetur necessitatibus repudiandae? Rem optio vel\n              alias neque optio sapiente quidem similique reiciendis tempore.\n              Illum accusamus officia cum enim minima eligendi consectetur nemo\n              veritatis nam nisi! Adipisicing nobis perspiciatis dolorum\n              adipisci soluta architecto doloremque voluptatibus omnis debitis\n              quas repellendus. Consequuntur assumenda illum commodi mollitia\n              asperiores? Quis aspernatur consequatur modi veritatis aliquid at?\n              Atque vel iure quos. Amet provident voluptatem amet aliquam\n              deserunt sint, elit dolorem ipsa, voluptas? Quos esse facilis\n              neque nihil sequi non? Voluptates rem ab quae dicta culpa dolorum\n              sed atque molestias debitis omnis! Sit sint repellendus deleniti\n              officiis distinctio. Impedit vel quos harum doloribus corporis.\n              Laborum ullam nemo quaerat reiciendis recusandae minima dicta\n              molestias rerum. Voluptas et ut omnis est ipsum accusamus harum.\n              Amet exercitationem quasi velit inventore neque doloremque!\n              Consequatur neque dolorem vel impedit sunt voluptate. Amet quo\n              amet magni exercitationem libero recusandae possimus pariatur.\n              Cumque eum blanditiis vel vitae distinctio! Tempora! Consectetur\n              sit eligendi neque sunt soluta laudantium natus qui aperiam\n              quisquam consectetur consequatur sit sint a unde et. At voluptas\n              ut officiis esse totam quasi dolorem! Hic deserunt doloribus\n              repudiandae! Lorem quod ab nostrum asperiores aliquam ab id\n              consequatur, expedita? Tempora quaerat ex ea temporibus in tempore\n              voluptates cumque. Quidem nam dolor reiciendis qui dolor assumenda\n              ipsam veritatis quasi. Esse! Sit consectetur hic et sunt iste!\n              Accusantium atque elit voluptate asperiores corrupti temporibus\n              mollitia! Placeat soluta odio ad blanditiis nisi. Eius reiciendis\n              id quos dolorum eaque suscipit magni delectus maxime. Sit odit\n              provident vel magnam quod. Possimus eligendi non corrupti tenetur\n              culpa accusantium quod quis. Voluptatum quaerat animi dolore\n              maiores molestias voluptate? Necessitatibus illo omnis laborum hic\n              enim minima! Similique. Dolor voluptatum reprehenderit nihil\n              adipisci aperiam voluptatem soluta magnam accusamus iste incidunt\n              tempore consequatur illo illo odit. Asperiores nesciunt iusto nemo\n              animi ratione. Sunt odit similique doloribus temporibus\n              reiciendis! Ullam. Dolor dolores veniam animi sequi dolores\n              molestias voluptatem iure velit. Elit dolore quaerat incidunt enim\n              aut distinctio. Ratione molestiae laboriosam similique laboriosam\n              eum et nemo expedita. Consequuntur perspiciatis cumque dolorem.\n            </p>\n          </Modal.Body>\n          <Modal.Footer>\n            <Button onClick={this.handleHide}>Close</Button>\n          </Modal.Footer>\n        </Modal>\n      </ButtonToolbar>\n    );\n  }\n}\n\nrender(<Example />);\n\n#Multiple Modals\nNot supported\nReact-Bootstrap modals are not designed to support rendering multiple modals simultaneously. You will have to add react-overlays as a dependency and build your own modal component using its <ModalManager/> component, which supports multiple modals.\n\n',
    id: 'XnY6X0Of1vqpbt4pNF06',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'Modal'
  },
  {
    children: [],
    closeTag: false,
    componentImport: '-',
    componentProps: [
      {
        description: 'Does this view want to become responder on the start of a touch?\n\nView.props.onStartShouldSetResponder: (event) => [true | false], where event is a synthetic touch event as described above.',
        title: 'onStartShouldSetResponder',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label.',
        title: 'accessibilityHint',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Overrides the text that\'s read by the screen reader when the user interacts with the element. By default, the label is constructed by traversing all the children and accumulating all the Text nodes separated by space.',
        title: 'accessibilityLabel',
        propType: 'PropTypes.node',
        propTypeIsrequired: false
      },
      {
        description: 'This defines how far a touch event can start away from the view. Typical interface guidelines recommend touch targets that are at least 30 - 40 points/density-independent pixels.\n\nFor example, if a touchable view has a height of 20 the touchable height can be extended to 40 with hitSlop={{top: 10, bottom: 10, left: 0, right: 0}}\n\nThe touch area never extends past the parent view bounds and the Z-index of sibling views always takes precedence if a touch hits two overlapping views.\n\nType: object: {top: number, left: number, bottom: number, right: number}',
        title: 'hitSlop',
        propType: 'PropTypes.object',
        propTypeIsrequired: false
      },
      {
        description: 'Used to locate this view from native classes.\n\nThis disables the \'layout-only view removal\' optimization for this view!',
        title: 'nativeID',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'When accessible is true, the system will try to invoke this function when the user performs accessibility tap gesture.',
        title: 'onAccessibilityTap',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Invoked on mount and layout changes with:\n\n{nativeEvent: { layout: {x, y, width, height}}}\n\nThis event is fired immediately once the layout has been calculated, but the new layout may not yet be reflected on the screen at the time the event is received, especially if a layout animation is in progress.',
        title: 'onLayout',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'When accessible is true, the system will invoke this function when the user performs the magic tap gesture.',
        title: 'onMagicTap',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Does this view want to "claim" touch responsiveness? This is called for every touch move on the View when it is not the responder.\n\nView.props.onMoveShouldSetResponder: (event) => [true | false], where event is a synthetic touch event as described above.',
        title: 'onMoveShouldSetResponder',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'If a parent View wants to prevent a child View from becoming responder on a move, it should have this handler which returns true.\n\nView.props.onMoveShouldSetResponderCapture: (event) => [true | false], where event is a synthetic touch event as described above.',
        title: 'onMoveShouldSetResponderCapture',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'The View is now responding for touch events. This is the time to highlight and show the user what is happening.\n\nView.props.onResponderGrant: (event) => {}, where event is a synthetic touch event as described above.',
        title: 'onResponderGrant',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'The user is moving their finger.\n\nView.props.onResponderMove: (event) => {}, where event is a synthetic touch event as described above.',
        title: 'onResponderMove',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Another responder is already active and will not release it to that View asking to be the responder.\n\nView.props.onResponderReject: (event) => {}, where event is a synthetic touch event as described above.',
        title: 'onResponderReject',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Fired at the end of the touch.\n\nView.props.onResponderRelease: (event) => {}, where event is a synthetic touch event as described above.',
        title: 'onResponderRelease',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'The responder has been taken from the View. Might be taken by other views after a call to onResponderTerminationRequest, or might be taken by the OS without asking (e.g., happens with control center/ notification center on iOS)\n\nView.props.onResponderTerminate: (event) => {}, where event is a synthetic touch event as described above.',
        title: 'onResponderTerminate',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Some other View wants to become responder and is asking this View to release its responder. Returning true allows its release.\n\nView.props.onResponderTerminationRequest: (event) => {}, where event is a synthetic touch event as described above.',
        title: 'onResponderTerminationRequest',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'When true, indicates that the view is an accessibility element. By default, all the touchable elements are accessible.',
        title: 'accessible',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'If a parent View wants to prevent a child View from becoming responder on a touch start, it should have this handler which returns true.\n\nView.props.onStartShouldSetResponderCapture: (event) => [true | false], where event is a synthetic touch event as described above.',
        title: 'onStartShouldSetResponderCapture',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Controls whether the View can be the target of touch events.\n\n\'auto\': The View can be the target of touch events.\n\'none\': The View is never the target of touch events.\n\'box-none\': The View is never the target of touch events but it\'s subviews can be. It behaves like if the view had the following classes in CSS:\n.box-none {\n     pointer-events: none;\n}\n.box-none * {\n     pointer-events: all;\n}\n\'box-only\': The view can be the target of touch events but it\'s subviews cannot be. It behaves like if the view had the following classes in CSS:\n.box-only {\n     pointer-events: all;\n}\n.box-only * {\n     pointer-events: none;\n}\nSince pointerEvents does not affect layout/appearance, and we are already deviating from the spec by adding additional modes, we opt to not include pointerEvents on style. On some platforms, we would need to implement it as a className anyways. Using style or not is an implementation detail of the platform.\n\nType: enum(\'box-none\', \'none\', \'box-only\', \'auto\')',
        title: 'pointerEvents',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'This is a special performance property exposed by RCTView and is useful for scrolling content when there are many subviews, most of which are offscreen. For this property to be effective, it must be applied to a view that contains many subviews that extend outside its bound. The subviews must also have overflow: hidden, as should the containing view (or one of its superviews).',
        title: 'removeClippedSubviews',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'style',
        title: 'style',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Used to locate this view in end-to-end tests.\n\nThis disables the \'layout-only view removal\' optimization for this view!',
        title: 'testID',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: '> Note: accessibilityComponentTypewill soon be deprecated. When possible, use accessibilityRole and accessibilityStates instead.\n\nIndicates to accessibility services to treat UI component like a native one. Works for Android only.\n\nPossible values are one of:\n\n\'none\'\n\'button\'\n\'radiobutton_checked\'\n\'radiobutton_unchecked\'\n\n',
        title: 'accessibilityComponentType',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Indicates to accessibility services whether the user should be notified when this view changes. Works for Android API >= 19 only. Possible values:\n\n\'none\' - Accessibility services should not announce changes to this view.\n\'polite\'- Accessibility services should announce changes to this view.\n\'assertive\' - Accessibility services should interrupt ongoing speech to immediately announce changes to this view.\n\nType: enum(\'none\', \'polite\', \'assertive\')',
        title: 'accessibilityLiveRegion',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Views that are only used to layout their children or otherwise don\'t draw anything may be automatically removed from the native hierarchy as an optimization. Set this property to false to disable this optimization and ensure that this View exists in the native view hierarchy.',
        title: 'collapsable',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Controls how view is important for accessibility which is if it fires accessibility events and if it is reported to accessibility services that query the screen. Works for Android only.\n\nPossible values:\n\n\'auto\' - The system determines whether the view is important for accessibility - default (recommended).\n\'yes\' - The view is important for accessibility.\n\'no\' - The view is not important for accessibility.\n\'no-hide-descendants\' - The view is not important for accessibility, nor are any of its descendant views.\n\nType: enum(\'auto\', \'yes\', \'no\', \'no-hide-descendants\')',
        title: 'importantForAccessibility',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Whether this View needs to rendered offscreen and composited with an alpha in order to preserve 100% correct colors and blending behavior. The default (false) falls back to drawing the component and its children with an alpha applied to the paint used to draw each element instead of rendering the full component offscreen and compositing it back with an alpha value. This default may be noticeable and undesired in the case where the View you are setting an opacity on has multiple overlapping elements (e.g. multiple overlapping Views, or text and a background).\n\nRendering offscreen to preserve correct alpha behavior is extremely expensive and hard to debug for non-native developers, which is why it is not turned on by default. If you do need to enable this property for an animation, consider combining it with renderToHardwareTextureAndroid if the view contents are static (i.e. it doesn\'t need to be redrawn each frame). If that property is enabled, this View will be rendered off-screen once, saved in a hardware texture, and then composited onto the screen with an alpha each frame without having to switch rendering targets on the GPU.',
        title: 'needsOffscreenAlphaCompositing',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Whether this View should render itself (and all of its children) into a single hardware texture on the GPU.\n\nOn Android, this is useful for animations and interactions that only modify opacity, rotation, translation, and/or scale: in those cases, the view doesn\'t have to be redrawn and display lists don\'t need to be re-executed. The texture can just be re-used and re-composited with different parameters. The downside is that this can use up limited video memory, so this prop should be set back to false at the end of the interaction/animation.',
        title: 'renderToHardwareTextureAndroid',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: '> Note: AccessibilityRole and AccessibilityStates are meant to be a cross-platform solution to replace accessibilityTraits and accessibilityComponentType, which will soon be deprecated. When possible, use accessibilityRole and accessibilityStates instead of accessibilityTraits and accessibilityComponentType.\n\nTells the screen reader to treat the currently focused on element as having a specific role.\n\nPossible values for AccessibilityRole is one of:\n\n\'none\' - The element has no role.\n\'button\' - The element should be treated as a button.\n\'link\' - The element should be treated as a link.\n\'header\' - The element is a header that divides content into sections.\n\'search\' - The element should be treated as a search field.\n\'image\' - The element should be treated as an image.\n\'key\' - The element should be treated like a keyboard key.\n\'text\' - The element should be treated as text.\n\'summary\' - The element provides app summary information.\n\'imagebutton\' - The element has the role of both an image and also a button.\n\'adjustable\' - The element allows adjustment over a range of values.\nOn iOS, these roles map to corresponding Accessibility Traits. Image button has the same functionality as if the trait was set to both \'image\' and \'button\'. See the Accessibility guide for more information.\n\nOn Android, these roles have similar functionality on TalkBack as adding Accessibility Traits does on Voiceover in iOS',
        title: 'accessibilityRole',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: '> Note: AccessibilityRole and AccessibilityStates are meant to be a cross-platform solution to replace accessibilityTraits and accessibilityComponentType, which will soon be deprecated. When possible, use accessibilityRole and accessibilityStates instead of accessibilityTraits and accessibilityComponentType.\n\nTells the screen reader to treat the currently focused on element as being in a specific state.\n\nYou can provide one state, no state, or both states. The states must be passed in through an array. Ex: [\'selected\'] or [\'selected\', \'disabled\']\n\nPossible values for AccessibilityStates are:\n\n\'selected\' - The element is in a selcted state.\n\'disabled\' - The element is in a disabled state.',
        title: 'accessibilityStates',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: '> Note: accessibilityTraits will soon be deprecated. When possible, use accessibilityRole and accessibilityStates instead.\n\nProvides additional traits to screen reader. By default no traits are provided unless specified otherwise in element.\n\nYou can provide one trait or an array of many traits.\n\nPossible values for AccessibilityTraits are:\n\n\'none\' - The element has no traits.\n\'button\' - The element should be treated as a button.\n\'link\' - The element should be treated as a link.\n\'header\' - The element is a header that divides content into sections.\n\'search\' - The element should be treated as a search field.\n\'image\' - The element should be treated as an image.\n\'selected\' - The element is selected.\n\'plays\' - The element plays sound.\n\'key\' - The element should be treated like a keyboard key.\n\'text\' - The element should be treated as text.\n\'summary\' - The element provides app summary information.\n\'disabled\' - The element is disabled.\n\'frequentUpdates\' - The element frequently changes its value.\n\'startsMedia\' - The element starts a media session.\n\'adjustable\' - The element allows adjustment over a range of values.\n\'allowsDirectInteraction\' - The element allows direct touch interaction for VoiceOver users.\n\'pageTurn\' - Informs VoiceOver that it should scroll to the next page when it finishes reading the contents of the element.',
        title: 'accessibilityTraits',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'A value indicating whether VoiceOver should ignore the elements within views that are siblings of the receiver. Default is false.',
        title: 'accessibilityViewIsModal',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'A value indicating whether the accessibility elements contained within this accessibility element are hidden. Default is false.',
        title: 'accessibilityElementsHidden',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'A value indicating this view should or should not be inverted when color inversion is turned on. A value of true will tell the view to not be inverted even if color inversion is turned on.',
        title: 'accessibilityIgnoresInvertColors',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Whether this View should be rendered as a bitmap before compositing.\n\nOn iOS, this is useful for animations and interactions that do not modify this component\'s dimensions nor its children; for example, when translating the position of a static view, rasterization allows the renderer to reuse a cached bitmap of a static view and quickly composite it during each frame.\n\nRasterization incurs an off-screen drawing pass and the bitmap consumes memory. Test and measure when using this property.',
        title: 'shouldRasterizeIOS',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      }
    ],
    description: 'Displays a circular loading indicator.\n\nimport React, { Component } from \'react\'\nimport {\n  ActivityIndicator,\n  AppRegistry,\n  StyleSheet,\n  Text,\n  View,\n} from \'react-native\'\n\nexport default class App extends Component {\n  render() {\n    return (\n      <View style={[styles.container, styles.horizontal]}>\n        <ActivityIndicator size="large" color="#0000ff" />\n        <ActivityIndicator size="small" color="#00ff00" />\n        <ActivityIndicator size="large" color="#0000ff" />\n        <ActivityIndicator size="small" color="#00ff00" />\n      </View>\n    )\n  }\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: \'center\'\n  },\n  horizontal: {\n    flexDirection: \'row\',\n    justifyContent: \'space-around\',\n    padding: 10\n  }\n})\n\nAppRegistry.registerComponent(\'App\', () => App)',
    id: 'XyXEaauLRTECjJrUodQt',
    isDefault: true,
    provider: 'ReactNative',
    techno: 'React Native',
    title: 'ActivityIndicator',
    subtitle: 'ReactNative'
  },
  {
    children: [],
    closeTag: false,
    componentImport: '-',
    componentProps: [
      {
        description: 'Specifies whether fonts should scale to respect Text Size accessibility settings. The default is true.',
        title: 'allowFontScaling',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Can tell TextInput to automatically capitalize certain characters. This property is not supported by some keyboard types such as name-phone-pad.\n\ncharacters: all characters.\nwords: first letter of each word.\nsentences: first letter of each sentence (default).\nnone: don\'t auto capitalize anything.\n\nenum(\'none\', \'sentences\', \'words\', \'characters\')',
        title: 'autoCapitalize',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'If false, disables auto-correct. The default value is true.',
        title: 'autoCorrect',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'If true, focuses the input on componentDidMount. The default value is false.',
        title: 'autoFocus',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'If true, the text field will blur when submitted. The default value is true for single-line fields and false for multiline fields. Note that for multiline fields, setting blurOnSubmit to true means that pressing return will blur the field and trigger the onSubmitEditing event instead of inserting a newline into the field.',
        title: 'blurOnSubmit',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'If true, caret is hidden. The default value is false.',
        title: 'caretHidden',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'When the clear button should appear on the right side of the text view. This property is supported only for single-line TextInput component. The default value is never.\n\nenum(\'never\', \'while-editing\', \'unless-editing\', \'always\')',
        title: 'clearButtonMode',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'If true, clears the text field automatically when editing begins.',
        title: 'clearTextOnFocus',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'If true, context menu is hidden. The default value is false.',
        title: 'contextMenuHidden',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Determines the types of data converted to clickable URLs in the text input. Only valid if multiline={true} and editable={false}. By default no data types are detected.\n\nYou can provide one type or an array of many types.\n\nPossible values for dataDetectorTypes are:\n\n\'phoneNumber\'\n\'link\'\n\'address\'\n\'calendarEvent\'\n\'none\'\n\'all\'\n\nenum(\'phoneNumber\', \'link\', \'address\', \'calendarEvent\', \'none\', \'all\'), ,array of enum(\'phoneNumber\', \'link\', \'address\', \'calendarEvent\', \'none\', \'all\')\n',
        title: 'dataDetectorTypes',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Provides an initial value that will change when the user starts typing. Useful for simple use-cases where you do not want to deal with listening to events and updating the value prop to keep the controlled state in sync.',
        title: 'defaultValue',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'When false, if there is a small amount of space available around a text input (e.g. landscape orientation on a phone), the OS may choose to have the user edit the text inside of a full screen text input mode. When true, this feature is disabled and users will always edit the text directly inside of the text input. Defaults to false.',
        title: 'disableFullscreenUI',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'If false, text is not editable. The default value is true.',
        title: 'editable',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'If true, the keyboard disables the return key when there is no text and automatically enables it when there is text. The default value is false.',
        title: 'enablesReturnKeyAutomatically',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'If defined, the provided image resource will be rendered on the left. The image resource must be inside /android/app/src/main/res/drawable and referenced like\n\n<TextInput\n inlineImageLeft=\'search_icon\'\n/>',
        title: 'inlineImageLeft',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Padding between the inline image, if any, and the text input itself.',
        title: 'inlineImagePadding',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'Determines the color of the keyboard.\n\nenum(\'default\', \'light\', \'dark\')',
        title: 'keyboardAppearance',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Determines which keyboard to open, e.g.numeric.\n\nThe following values work across platforms:\n\ndefault\nnumber-pad\ndecimal-pad\nnumeric\nemail-address\nphone-pad\niOS Only\n\nThe following values work on iOS only:\n\nascii-capable\nnumbers-and-punctuation\nurl\nname-phone-pad\ntwitter\nweb-search\nAndroid Only\n\nThe following values work on Android only:\n\nvisible-password\n\nenum(\'default\', \'email-address\', \'numeric\', \'phone-pad\', \'ascii-capable\', \'numbers-and-punctuation\', \'url\', \'number-pad\', \'name-phone-pad\', \'decimal-pad\', \'twitter\', \'web-search\', \'visible-password\')',
        title: 'keyboardType',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Limits the maximum number of characters that can be entered. Use this instead of implementing the logic in JS to avoid flicker.',
        title: 'maxLength',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'If true, the text input can be multiple lines. The default value is false.',
        title: 'multiline',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Sets the number of lines for a TextInput. Use it with multiline set to true to be able to fill the lines.',
        title: 'numberOfLines',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'Callback that is called when the text input is blurred.',
        title: 'onBlur',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback that is called when the text input\'s text changes.',
        title: 'onChange',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback that is called when the text input\'s text changes. Changed text is passed as an argument to the callback handler.',
        title: 'onChangeText',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback that is called when the text input\'s content size changes. This will be called with { nativeEvent: { contentSize: { width, height } } }.\n\nOnly called for multiline text inputs.',
        title: 'onContentSizeChange',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback that is called when text input ends.',
        title: 'onEndEditing',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback that is called when the text input is focused.',
        title: 'onFocus',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback that is called when a key is pressed. This will be called with { nativeEvent: { key: keyValue } } where keyValue is \'Enter\' or \'Backspace\' for respective keys and the typed-in character otherwise including \' \' for space. Fires before onChange callbacks. Note: on Android only the inputs from soft keyboard are handled, not the hardware keyboard inputs.',
        title: 'onKeyPress',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Invoked on mount and layout changes with {x, y, width, height}.',
        title: 'onLayout',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Invoked on content scroll with { nativeEvent: { contentOffset: { x, y } } }. May also contain other properties from ScrollEvent but on Android contentSize is not provided for performance reasons.',
        title: 'onScroll',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback that is called when the text input selection is changed. This will be called with { nativeEvent: { selection: { start, end } } }.',
        title: 'onSelectionChange',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback that is called when the text input\'s submit button is pressed. Invalid if multiline={true} is specified.',
        title: 'onSubmitEditing',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'The string that will be rendered before text input has been entered.',
        title: 'placeholder',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'The text color of the placeholder string.',
        title: 'placeholderTextColor',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Sets the return key to the label. Use it instead of returnKeyType.',
        title: 'returnKeyLabel',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Determines how the return key should look. On Android you can also use returnKeyLabel.\n\nCross platform\n\nThe following values work across platforms:\n\ndone\ngo\nnext\nsearch\nsend\nAndroid Only\n\nThe following values work on Android only:\n\nnone\nprevious\niOS Only\n\nThe following values work on iOS only:\n\ndefault\nemergency-call\ngoogle\njoin\nroute\nyahoo\n\nenum(\'done\', \'go\', \'next\', \'search\', \'send\', \'none\', \'previous\', \'default\', \'emergency-call\', \'google\', \'join\', \'route\', \'yahoo\')',
        title: 'returnKeyType',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'If false, scrolling of the text view will be disabled. The default value is true. Only works with multiline={true}.',
        title: 'scrollEnabled',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'If true, the text input obscures the text entered so that sensitive text like passwords stay secure. The default value is false. Does not work with multiline={true}.',
        title: 'secureTextEntry',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'The start and end of the text input\'s selection. Set start and end to the same value to position the cursor.\n\nobject: {start: number,end: number}',
        title: 'selection',
        propType: 'PropTypes.object',
        propTypeIsrequired: false
      },
      {
        description: 'The highlight and cursor color of the text input.',
        title: 'selectionColor',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'An instance of DocumentSelectionState, this is some state that is responsible for maintaining selection information for a document.\n\nSome functionality that can be performed with this instance is:\n\nblur()\nfocus()\nupdate()\nYou can reference DocumentSelectionState in vendor/document/selection/DocumentSelectionState.js\n\nDocumentSelectionState',
        title: 'selectionState',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'If true, all text will automatically be selected on focus.',
        title: 'selectTextOnFocus',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'If false, disables spell-check style (i.e. red underlines). The default value is inherited from autoCorrect.',
        title: 'spellCheck',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Give the keyboard and the system information about the expected semantic meaning for the content that users enter.\n\nFor iOS 11+ you can set textContentType to username or password to enable autofill of login details from the device keychain.\n\nTo disable autofill, set textContentType to none.\n\nPossible values for textContentType are:\n\nnone\nURL\naddressCity\naddressCityAndState\naddressState\ncountryName\ncreditCardNumber\nemailAddress\nfamilyName\nfullStreetAddress\ngivenName\njobname\nlocation\nmiddleName\nname\nnamePrefix\nnameSuffix\nnickname\norganizationName\npostalCode\nstreetAddressLine1\nstreetAddressLine2\nsublocality\ntelephoneNumber\nusername\npassword\n\n\nenum(\'none\', \'URL\', \'addressCity\', \'addressCityAndState\', \'addressState\', \'countryName\', \'creditCardNumber\', \'emailAddress\', \'familyName\', \'fullStreetAddress\', \'givenName\', \'jobname\', \'location\', \'middleName\', \'name\', \'namePrefix\', \'nameSuffix\', \'nickname\', \'organizationName\', \'postalCode\', \'streetAddressLine1\', \'streetAddressLine2\', \'sublocality\', \'telephoneNumber\', \'username\', \'password\')',
        title: 'textContentType',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Note that not all Text styles are supported, an incomplete list of what is not supported includes:\n\nborderLeftWidth\nborderTopWidth\nborderRightWidth\nborderBottomWidth\nborderTopLeftRadius\nborderTopRightRadius\nborderBottomRightRadius\nborderBottomLeftRadius\nsee Issue#7070 for more detail.',
        title: 'style',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Set text break strategy on Android API Level 23+, possible values are simple, highQuality, balanced The default value is simple.\n\nenum(\'simple\', \'highQuality\', \'balanced\')',
        title: 'textBreakStrategy',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'The color of the TextInput underline.',
        title: 'underlineColorAndroid',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'The value to show for the text input. TextInput is a controlled component, which means the native value will be forced to match this value prop if provided. For most uses, this works great, but in some cases this may cause flickering - one common cause is preventing edits by keeping value the same. In addition to simply setting the same value, either set editable={false}, or set/update maxLength to prevent unwanted edits without flicker.',
        title: 'value',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'A foundational component for inputting text into the app via a keyboard. Props provide configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different keyboard types, such as a numeric keypad.\n\nThe simplest use case is to plop down a TextInput and subscribe to the onChangeText events to read the user input. There are also other events, such as onSubmitEditing and onFocus that can be subscribed to. \n\nA simple example:\n\nimport React, { Component } from \'react\';\nimport { AppRegistry, TextInput } from \'react-native\';\n\nexport default class UselessTextInput extends Component {\n  constructor(props) {\n    super(props);\n    this.state = { text: \'Useless Placeholder\' };\n  }\n\n  render() {\n    return (\n      <TextInput\n        style={{height: 40, borderColor: \'gray\', borderWidth: 1}}\n        onChangeText={(text) => this.setState({text})}\n        value={this.state.text}\n      />\n    );\n  }\n}\n\n// skip this line if using Create React Native App\nAppRegistry.registerComponent(\'AwesomeProject\', () => UselessTextInput);\n\nTwo methods exposed via the native element are .focus() and .blur() that will focus or blur the TextInput programmatically.\n\nNote that some props are only available with multiline={true/false}. Additionally, border styles that apply to only one side of the element (e.g., borderBottomColor, borderLeftWidth, etc.) will not be applied if multiline=false. To achieve the same effect, you can wrap your TextInput in a View:\n\nimport React, { Component } from \'react\';\nimport { AppRegistry, View, TextInput } from \'react-native\';\n\nclass UselessTextInput extends Component {\n  render() {\n    return (\n      <TextInput\n        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below\n        editable = {true}\n        maxLength = {40}\n      />\n    );\n  }\n}\n\nexport default class UselessTextInputMultiline extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      text: \'Useless Multiline Placeholder\',\n    };\n  }\n\n  // If you type something in the text box that is a color, the background will change to that\n  // color.\n  render() {\n    return (\n     <View style={{\n       backgroundColor: this.state.text,\n       borderBottomColor: \'#000000\',\n       borderBottomWidth: 1 }}\n     >\n       <UselessTextInput\n         multiline = {true}\n         numberOfLines = {4}\n         onChangeText={(text) => this.setState({text})}\n         value={this.state.text}\n       />\n     </View>\n    );\n  }\n}\n\n// skip these lines if using Create React Native App\nAppRegistry.registerComponent(\n \'AwesomeProject\',\n () => UselessTextInputMultiline\n);\n\nTextInput has by default a border at the bottom of its view. This border has its padding set by the background image provided by the system, and it cannot be changed. Solutions to avoid this is to either not set height explicitly, case in which the system will take care of displaying the border in the correct position, or to not display the border by setting underlineColorAndroid to transparent.\n\nNote that on Android performing text selection in input can change app\'s activity windowSoftInputMode param to adjustResize. This may cause issues with components that have position: \'absolute\' while keyboard is active. To avoid this behavior either specify windowSoftInputMode in AndroidManifest.xml ( https://developer.android.com/guide/topics/manifest/activity-element.html ) or control this param programmatically with native code.\n',
    id: 'YDrqxb1xtoege8w4EbL8',
    isDefault: true,
    provider: 'ReactNative',
    techno: 'React Native',
    title: 'TextInput',
    subtitle: 'ReactNative'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/Table',
    componentProps: [
      {
        description: 'Adds borders on all sides of the table and cells.',
        title: 'bordered',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Enable a hover state on table rows within a <tbody>.',
        title: 'hover',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'type: boolean | string\n\nResponsive tables allow tables to be scrolled horizontally with ease. Across every breakpoint, use responsive for horizontally scrolling tables. Responsive tables are wrapped automatically in a div. Use responsive="sm", responsive="md", responsive="lg", or responsive="xl" as needed to create responsive tables up to a particular breakpoint. From that breakpoint and up, the table will behave normally and not scroll horizontally.',
        title: 'responsive',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Make tables more compact by cutting cell padding in half by setting size as sm.',
        title: 'size',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Adds zebra-striping to any table row within the <tbody>.',
        title: 'striped',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Invert the colors of the table — with light text on dark backgrounds by setting variant as dark.',
        title: 'variant',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'default: \'table\'\t\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Tables#\nUse the striped, bordered and hover props to customize the table.\n\n<Table striped bordered hover>\n  <thead>\n    <tr>\n      <th>#</th>\n      <th>First Name</th>\n      <th>Last Name</th>\n      <th>Username</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>1</td>\n      <td>Mark</td>\n      <td>Otto</td>\n      <td>@mdo</td>\n    </tr>\n    <tr>\n      <td>2</td>\n      <td>Jacob</td>\n      <td>Thornton</td>\n      <td>@fat</td>\n    </tr>\n    <tr>\n      <td>3</td>\n      <td colSpan="2">Larry the Bird</td>\n      <td>@twitter</td>\n    </tr>\n  </tbody>\n</Table>;\n\nSmall Table#\nUse size="sm" to make tables compact by cutting cell padding in half.\n\n<Table striped bordered hover size="sm">\n  <thead>\n    <tr>\n      <th>#</th>\n      <th>First Name</th>\n      <th>Last Name</th>\n      <th>Username</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>1</td>\n      <td>Mark</td>\n      <td>Otto</td>\n      <td>@mdo</td>\n    </tr>\n    <tr>\n      <td>2</td>\n      <td>Jacob</td>\n      <td>Thornton</td>\n      <td>@fat</td>\n    </tr>\n    <tr>\n      <td>3</td>\n      <td colSpan="2">Larry the Bird</td>\n      <td>@twitter</td>\n    </tr>\n  </tbody>\n</Table>;\n\nDark Table#\nUse variant="dark" to invert the colors of the table and get light text on a dark background.\n\n<Table striped bordered hover variant="dark">\n  <thead>\n    <tr>\n      <th>#</th>\n      <th>First Name</th>\n      <th>Last Name</th>\n      <th>Username</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>1</td>\n      <td>Mark</td>\n      <td>Otto</td>\n      <td>@mdo</td>\n    </tr>\n    <tr>\n      <td>2</td>\n      <td>Jacob</td>\n      <td>Thornton</td>\n      <td>@fat</td>\n    </tr>\n    <tr>\n      <td>3</td>\n      <td colSpan="2">Larry the Bird</td>\n      <td>@twitter</td>\n    </tr>\n  </tbody>\n</Table>;\n\nResponsive#\nResponsive tables allow tables to be scrolled horizontally with ease.\n\nAlways Responsive#\nAcross every breakpoint, use responsive for horizontally scrolling tables. Responsive tables are wrapped automatically in a div.\n\n<Table responsive>\n  <thead>\n    <tr>\n      <th>#</th>\n      <th>Table heading</th>\n      <th>Table heading</th>\n      <th>Table heading</th>\n      <th>Table heading</th>\n      <th>Table heading</th>\n      <th>Table heading</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>1</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n    </tr>\n    <tr>\n      <td>2</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n    </tr>\n    <tr>\n      <td>3</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n    </tr>\n  </tbody>\n</Table>;\n\nBreakpoint specific#\nUse responsive="sm", responsive="md", responsive="lg", or responsive="xl" as needed to create responsive tables up to a particular breakpoint. From that breakpoint and up, the table will behave normally and not scroll horizontally.\n\n\n',
    id: 'YLSB1d7KTM5VvA3Xlmrj',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Table',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    closeTag: false,
    componentImport: '-',
    componentProps: [
      {
        description: 'Index of initial page that should be selected. Use setPage method to update the page, and onPageSelected to monitor page changes',
        title: 'initialPage',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'Determines whether the keyboard gets dismissed in response to a drag.\n\n\'none\' (the default), drags do not dismiss the keyboard.\n\'on-drag\', the keyboard is dismissed when a drag begins.\n\nenum(\'none\', \'on-drag\')',
        title: 'keyboardDismissMode',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Executed when transitioning between pages (either because of animation for the requested page change or when user is swiping/dragging between pages) The event.nativeEvent object for this callback will carry following data:\n\nposition - index of first page from the left that is currently visible\noffset - value from range [0, 1] describing stage between page transitions. Value x means that (1 - x) fraction of the page at "position" index is visible, and x fraction of the next page is visible.',
        title: 'onPageScroll',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Function called when the page scrolling state has changed. The page scrolling state can be in 3 states:\n\nidle, meaning there is no interaction with the page scroller happening at the time\ndragging, meaning there is currently an interaction with the page scroller\nsettling, meaning that there was an interaction with the page scroller, and the page scroller is now finishing its closing or opening animation',
        title: 'onPageScrollStateChanged',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'This callback will be called once ViewPager finish navigating to selected page (when user swipes between pages). The event.nativeEvent object passed to this callback will have following fields:\n\nposition - index of page that has been selected',
        title: 'onPageSelected',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Blank space to show between pages. This is only visible while scrolling, pages are still edge-to-edge.',
        title: 'pageMargin',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'Whether enable showing peekFraction or not. If this is true, the preview of last and next page will show in current screen. Defaults to false.',
        title: 'peekEnabled',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'When false, the content does not scroll. The default value is true.',
        title: 'scrollEnabled',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'A helper function to scroll to a specific page in the ViewPager. The transition between pages will be animated.\n\nposition - index of page that will be selected',
        title: 'setPage',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'A helper function to scroll to a specific page in the ViewPager. The transition between pages will not be animated.\n\nposition - index of page that will be selected',
        title: 'setPageWithoutAnimation',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      }
    ],
    description: 'Container that allows to flip left and right between child views. Each child view of the ViewPagerAndroid will be treated as a separate page and will be stretched to fill the ViewPagerAndroid.\n\nIt is important all children are <View>s and not composite components. You can set style properties like padding or backgroundColor for each child. It is also important that each child have a key prop.\n\nExample:\n\nrender: function() {\n  return (\n    <ViewPagerAndroid\n      style={styles.viewPager}\n      initialPage={0}>\n      <View style={styles.pageStyle} key="1">\n        <Text>First page</Text>\n      </View>\n      <View style={styles.pageStyle} key="2">\n        <Text>Second page</Text>\n      </View>\n    </ViewPagerAndroid>\n  );\n}\n\n...\n\nvar styles = {\n  ...\n  viewPager: {\n    flex: 1\n  },\n  pageStyle: {\n    alignItems: \'center\',\n    padding: 20,\n  }\n}',
    id: 'YMYpix4S3rGoMnHvTw3n',
    isDefault: true,
    provider: 'ReactNative',
    techno: 'React Native',
    title: 'ViewPagerAndroid',
    subtitle: 'ReactNative'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/ResponsiveEmbed',
    componentProps: [
      {
        description: 'type: \'21by9\' | \'16by9\' | \'4by3\' | \'1by1\'\ndefault: \'1by1\'\t\n\nSet the aspect ration of the embed',
        title: 'aspectRatio',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'required\t\n\nThis component requires a single child element',
        title: 'children',
        propType: 'PropTypes.element',
        propTypeIsrequired: true
      },
      {
        description: 'default: \'embed-responsive\'\t\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Responsive embed#\nAllow browsers to determine video or slideshow dimensions based on the width of their containing block by creating an intrinsic ratio that will properly scale on any device.\n\nYou don\'t need to include frameborder="0" in your iframes.\n\nThe aspect ratio is controlled via the aspectRatio prop.\n\n<div style={{ width: 660, height: \'auto\' }}>\n  <ResponsiveEmbed aspect="a16by9">\n    <embed type="image/svg+xml" src="/TheresaKnott_castle.svg" />\n  </ResponsiveEmbed>\n</div>;\n\n',
    id: 'ZRYit8eSZhEq6Tl1MZ7m',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'ResponsiveEmbed',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/PageItem',
    componentProps: [
      {
        description: 'default: false\t\n\nStyles PageItem as active, and renders a <span> instead of an <a>.',
        title: 'active',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: \'(current)\'\t\n\nAn accessible label indicating the active state..',
        title: 'activeLabel',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'default: false\t\n\nDisables the PageItem',
        title: 'disabled',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      }
    ],
    description: 'PageItem',
    id: 'Zd3nCwimNbQLmEj1T3pv',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'PageItem',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    closeTag: false,
    componentImport: 'react-bootstrap/lib/PanelHeading',
    componentProps: [
      {
        description: 'You can use a custom element type for this component.\n\ndefault: \'div\'',
        title: 'componentClass',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault" \'panel\'',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Panel.Heading',
    id: 'a7bZesFogd0zTHkyXOUG',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'Panel__Heading'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/lib/NavItem',
    componentProps: [
      {
        description: 'default: false',
        title: 'active',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: false',
        title: 'disabled',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'role',
        title: 'role',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'href',
        title: 'href',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'onClick',
        title: 'onClick',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'onSelect',
        title: 'onSelect',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'A unique identifier for the Component, the eventKey makes it distinguishable from others in a set. Similar to React\'s key prop, in that it only needs to be unique amoungst the Components siblings, not globally.',
        title: 'eventKey',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'NavItem',
    id: 'awtslcjjjb049j68O2la',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'NavItem'
  },
  {
    children: [],
    closeTag: false,
    componentImport: '-',
    componentProps: [
      {
        description: 'itemStyle',
        title: 'itemStyle',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'onValueChange',
        title: 'onValueChange',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'selectedValue',
        title: 'selectedValue',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'PickerIOS',
    id: 'b10AGRkK1Oa8HvZdiLjO',
    isDefault: true,
    provider: 'ReactNative',
    techno: 'React Native',
    title: 'PickerIOS',
    subtitle: 'ReactNative'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/ToggleButton',
    componentProps: [
      {
        description: 'The checked state of the input, managed by <ToggleButtonGroup> automatically',
        title: 'checked',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'The disabled state of both the label and input',
        title: 'disabled',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'type: ReactRef\n\nA ref attached to the <input> element',
        title: 'inputRef',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'The HTML input name, used to group like checkboxes or radio buttons together semantically',
        title: 'name',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'A callback fired when the underlying input element changes. This is passed directly to the <input> so shares the same signature as a native onChange event.',
        title: 'onChange',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'type\t: \'checkbox\' | \'radio\'\n\nThe <input> element type',
        title: 'type',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'type: any\n\nThe value of the input, should be unique amoungst it\'s siblings when nested in a ToggleButtonGroup.',
        title: 'value',
        propType: 'PropTypes.string',
        propTypeIsrequired: true
      }
    ],
    description: 'ToggleButton',
    id: 'cMSXhnmrmZh1dthlNOVp',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'ToggleButton',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    closeTag: false,
    componentImport: '-',
    componentProps: [
      {
        description: 'Determines what the opacity of the wrapped view should be when touch is active.',
        title: 'activeOpacity',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'Called immediately after the underlay is hidden',
        title: 'onHideUnderlay',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Called immediately after the underlay is shown',
        title: 'onShowUnderlay',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'style',
        title: 'style',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'The color of the underlay that will show through when the touch is active.',
        title: 'underlayColor',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: '(Apple TV only) TV preferred focus (see documentation for the View component).',
        title: 'hasTVPreferredFocus',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: '(Apple TV only) Object with properties to control Apple TV parallax effects.\n\nenabled: If true, parallax effects are enabled. Defaults to true. shiftDistanceX: Defaults to 2.0. shiftDistanceY: Defaults to 2.0. tiltAngle: Defaults to 0.05. magnification: Defaults to 1.0. pressMagnification: Defaults to 1.0. pressDuration: Defaults to 0.3. pressDelay: Defaults to 0.0.',
        title: 'tvParallaxProperties',
        propType: 'PropTypes.object',
        propTypeIsrequired: false
      }
    ],
    description: 'A wrapper for making views respond properly to touches. On press down, the opacity of the wrapped view is decreased, which allows the underlay color to show through, darkening or tinting the view.\n\nThe underlay comes from wrapping the child in a new View, which can affect layout, and sometimes cause unwanted visual artifacts if not used correctly, for example if the backgroundColor of the wrapped view isn\'t explicitly set to an opaque color.\n\nTouchableHighlight must have one child (not zero or more than one). If you wish to have several child components, wrap them in a View.\n\nExample:\n\nrenderButton: function() {\n  return (\n    <TouchableHighlight onPress={this._onPressButton}>\n      <Image\n        style={styles.button}\n        source={require(\'./myButton.png\')}\n      />\n    </TouchableHighlight>\n  );\n},\n\nExample:\n\nimport React, { Component } from \'react\'\nimport {\n  AppRegistry,\n  StyleSheet,\n  TouchableHighlight,\n  Text,\n  View,\n} from \'react-native\'\n\nclass App extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { count: 0 }\n  }\n\n  onPress = () => {\n    this.setState({\n      count: this.state.count+1\n    })\n  }\n\n render() {\n    return (\n      <View style={styles.container}>\n        <TouchableHighlight\n         style={styles.button}\n         onPress={this.onPress}\n        >\n         <Text> Touch Here </Text>\n        </TouchableHighlight>\n        <View style={[styles.countContainer]}>\n          <Text style={[styles.countText]}>\n            { this.state.count !== 0 ? this.state.count: null}\n          </Text>\n        </View>\n      </View>\n    )\n  }\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: \'center\',\n    paddingHorizontal: 10\n  },\n  button: {\n    alignItems: \'center\',\n    backgroundColor: \'#DDDDDD\',\n    padding: 10\n  },\n  countContainer: {\n    alignItems: \'center\',\n    padding: 10\n  },\n  countText: {\n    color: \'#FF00FF\'\n  }\n})\n\nAppRegistry.registerComponent(\'App\', () => App)',
    id: 'cXPwQfDg20VaLvOyRu55',
    isDefault: true,
    provider: 'ReactNative',
    techno: 'React Native',
    title: 'TouchableHighlight',
    subtitle: 'ReactNative'
  },
  {
    children: [],
    closeTag: false,
    componentImport: 'react-bootstrap/lib/HelpBlock',
    componentProps: [
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'help-block\'',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'HelpBlock',
    id: 'coNeMqBYSd6QhN301bCt',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'HelpBlock'
  },
  {
    children: [],
    closeTag: false,
    componentImport: 'react-bootstrap/lib/FormControlStatic',
    componentProps: [
      {
        description: 'You can use a custom element type for this component.\n\ndefault: \'p\'',
        title: 'componentClass',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'form-control-static\'',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'FormControl.Static',
    id: 'cyBBSi3l2Fs18XXcBFud',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'FormControl__Static'
  },
  {
    children: [],
    closeTag: false,
    componentImport: 'react-jsonschema-form',
    componentProps: [
      {
        description: 'Form id',
        title: 'id',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'className',
        title: 'className',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Form name',
        title: 'name',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'method="post"',
        title: 'method',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'target="_blank"',
        title: 'target',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'action="/users/list"',
        title: 'action',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'autocomplete="off"',
        title: 'autocomplete',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'enctype="multipart/form-data"',
        title: 'enctype',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'acceptcharset="ISO-8859-1"',
        title: 'acceptcharset',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'schema',
        title: 'schema',
        propType: 'PropTypes.array',
        propTypeIsrequired: false
      },
      {
        description: 'onSubmit',
        title: 'onSubmit',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'onBlur',
        title: 'onBlur',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'onFocus',
        title: 'onFocus',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'onError',
        title: 'onError',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'formData',
        title: 'formData',
        propType: 'PropTypes.array',
        propTypeIsrequired: false
      },
      {
        description: 'ref={(form) => {yourForm = form;}}',
        title: 'ref',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'disabled',
        title: 'disabled',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      }
    ],
    description: 'react-jsonschema-form is meant to automatically generate a React form based on a JSON Schema. It is a major component in the kinto-admin project. If you want to generate a form for any data, sight unseen, simply given a JSON schema, react-jsonschema-form may be for you. If you have a priori knowledge of your data and want a toolkit for generating forms for it, you might look elsewhere.\n\nreact-jsonschema-form validates that the data conforms to the given schema, but doesn\'t prevent the user from inputing data that doesn\'t fit (for example, stripping non-numbers from a number field, or adding values to an array that is already "full").\n\n<Form\n  id="edit-form"\n  className="form form-wide"\n  name="awesomeForm"\n  method="post"\n  target="_blank"\n  action="/users/list"\n  autocomplete="off"\n  enctype="multipart/form-data"\n  acceptcharset="ISO-8859-1"\n  schema={} />',
    id: 'dlJls0V3K562K2K7H8tj',
    isDefault: true,
    provider: 'Jsonschema-form',
    techno: 'React',
    title: 'Form',
    subtitle: 'Jsonschema-form'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/Alert',
    componentProps: [
      {
        description: 'Type: elementType\ndefault: <SafeAnchor>\n\nYou can use a custom element type for this component.',
        title: 'as',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'default: \'alert-link\'\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: true
      }
    ],
    description: 'Alert.Link',
    id: 'duB8YXqFJ9YqX8o2kITU',
    isDefault: false,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Alert__Link',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/Dropdown',
    componentProps: [
      {
        description: 'type: elementType\ndefault: <Button>\t\n\nYou can use a custom element type for this component.',
        title: 'as',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'required\t\ntype: string|number\n\nAn html id attribute, necessary for assistive technologies, such as screen readers.',
        title: 'id',
        propType: 'PropTypes.string',
        propTypeIsrequired: true
      },
      {
        description: 'split',
        title: 'split',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'type: \'dropdown-toggle\'\t\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Dropdown.Toggle',
    id: 'eFd26kwbHtosMqKDPv9D',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    subtitle: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Dropdown__Toggle'
  },
  {
    children: [],
    closeTag: false,
    componentImport: 'react-bootstrap/lib/ModalBody',
    componentProps: [
      {
        description: 'You can use a custom element type for this component.\n\ndefault: \'div\'',
        title: 'componentClass',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'modal-body\'',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Modal.Body',
    id: 'eKv8EYkQXHoOFwCLRdaZ',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'Modal__Body'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/Alert',
    componentProps: [
      {
        description: 'Sets the text for alert close button.\nDefault: \'Close alert\'\t\n',
        title: 'closeLabel',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Renders a properly aligned dismiss button, as well as adding extra horizontal padding to the Alert.',
        title: 'dismissible',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'controls show\nCallback fired when alert is closed.\n\n',
        title: 'onClose',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'controlled by: onClose, initial prop: defaultShow\nControls the visual state of the Alert.\n\ndefault: true',
        title: 'show',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'type: elementType\ndefault: <Fade>\n\nA react-transition-group Transition component used to animate the Alert on dismissal.',
        title: 'transition',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'type: \'primary\' | \'secondary\' | \'success\' | \'danger\' | \'warning\' | \'info\' | \'dark\' | \'light\'\n\nThe Alert visual variant',
        title: 'variant',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'default: \'alert\'\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.\n\n[\n  \'primary\',\n  \'secondary\',\n  \'success\',\n  \'danger\',\n  \'warning\',\n  \'info\',\n  \'light\',\n  \'dark\',\n].map((variant, idx) => (\n  <Alert key={idx} variant={variant}>\n    This is a {variant} alert—check it out!\n  </Alert>\n));\n\nConveying meaning to assistive technologies\nUsing color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the .sr-only class.\n\nLinks#\nFor links, use the <Alert.Link> component to provide matching colored links within any alert.\n\n[\n  \'primary\',\n  \'secondary\',\n  \'success\',\n  \'danger\',\n  \'warning\',\n  \'info\',\n  \'light\',\n  \'dark\',\n].map((variant, idx) => (\n  <Alert key={idx} variant={variant}>\n    This is a {variant} alert with{\' \'}\n    <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you\n    like.\n  </Alert>\n));\n\nAdditional content#\nAlerts can content whatever content you like. Headers, paragraphs, dividers, go crazy.\n\n<Alert variant="success">\n  <Alert.Heading>Hey, nice to see you</Alert.Heading>\n  <p>\n    Aww yeah, you successfully read this important alert message. This example\n    text is going to run a bit longer so that you can see how spacing within an\n    alert works with this kind of content.\n  </p>\n  <hr />\n  <p className="mb-0">\n    Whenever you need to, be sure to use margin utilities to keep things nice\n    and tidy.\n  </p>\n</Alert>;\n\nDismissing#\nAdd the dismissable prop to add a functioning dismiss button to the Alert.\n\n<Alert dismissible variant="danger">\n  <Alert.Heading>Oh snap! You got an error!</Alert.Heading>\n  <p>\n    Change this and that and try again. Duis mollis, est non commodo luctus,\n    nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis\n    consectetur purus sit amet fermentum.\n  </p>\n</Alert>;\n\nYou can also control the visual state directly which is great if you want to build more complicated alerts.\n\nclass AlertDismissable extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { show: true };\n  }\n\n  render() {\n    const handleHide = () => this.setState({ show: false });\n    const handleShow = () => this.setState({ show: true });\n    return (\n      <>\n        <Alert show={this.state.show} variant="success">\n          <Alert.Heading>How\'s it going?!</Alert.Heading>\n          <p>\n            Duis mollis, est non commodo luctus, nisi erat porttitor ligula,\n            eget lacinia odio sem nec elit. Cras mattis consectetur purus sit\n            amet fermentum.\n          </p>\n          <hr />\n          <div className="d-flex justify-content-end">\n            <Button onClick={handleHide} variant="outline-success">\n              Close me ya\'ll!\n            </Button>\n          </div>\n        </Alert>\n\n        {!this.state.show && <Button onClick={handleShow}>Show Alert</Button>}\n      </>\n    );\n  }\n}\n\nrender(<AlertDismissable />);',
    id: 'eQIrw5vkpyVf2cjDLc5L',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    subtitle: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Alert'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/Navbar',
    componentProps: [
      {
        description: 'default: <button>\t\n\nYou can use a custom element type for this component.',
        title: 'as',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'The toggle content. When empty, the default toggle will be rendered.',
        title: 'children',
        propType: 'PropTypes.node',
        propTypeIsrequired: false
      },
      {
        description: 'default: \'Toggle navigation\'\t\n\nAn accessible ARIA label for the toggler button.',
        title: 'label',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'default: \'navbar-toggler\'\t\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Navbar.Toggle',
    id: 'f8dIXN88NBFvkue6Hx4S',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Navbar__Toggle',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    closeTag: false,
    componentImport: 'react-bootstrap/lib/SplitButton',
    componentProps: [
      {
        description: 'Component visual or contextual style variants.',
        title: 'bsStyle',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Component size variations.',
        title: 'bsSize',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'href',
        title: 'href',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'onClick',
        title: 'onClick',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'The content of the split button.',
        title: 'name',
        propType: 'PropTypes.node',
        propTypeIsrequired: false
      },
      {
        description: 'Accessible label for the toggle; the value of name if not specified.',
        title: 'toggleLabel',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'SplitButton',
    id: 'fB5hupS0hr3W70YLoXdb',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'SplitButton'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/Breadcrumb',
    componentProps: [
      {
        description: 'type: elementType\ndefault: <nav>\t\n\nYou can use a custom element type for this component.',
        title: 'as',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'default: \'breadcrumb\'\t\n\nARIA label for the nav element https://www.w3.org/TR/wai-aria-practices/#breadcrumb',
        title: 'label',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'default: {}\n\nAdditional props passed as-is to the underlying <ul> element',
        title: 'listProps',
        propType: 'PropTypes.object',
        propTypeIsrequired: false
      },
      {
        description: 'default: \'breadcrumb\'\t\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS. Add active prop to active Breadcrumb.Item. Do not set both active and href attributes. active overrides href and span element is rendered instead of a.\n\n<Breadcrumb>\n  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>\n  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">\n    Library\n  </Breadcrumb.Item>\n  <Breadcrumb.Item active>Data</Breadcrumb.Item>\n</Breadcrumb>;',
    id: 'fJZmKwvV9gnDENBqoFVb',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Breadcrumb',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    closeTag: false,
    componentImport: '-',
    componentProps: [
      {
        description: 'The navigation view that will be rendered to the side of the screen and can be pulled in.',
        title: 'renderNavigationView',
        propType: 'PropTypes.func',
        propTypeIsrequired: true
      },
      {
        description: 'Function called whenever the navigation view has been closed.',
        title: 'onDrawerClose',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Specifies the side of the screen from which the drawer will slide in.\n\nType: enum(DrawerConsts.DrawerPosition.Left, DrawerConsts.DrawerPosition.Right)',
        title: 'drawerPosition',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Specifies the width of the drawer, more precisely the width of the view that be pulled in from the edge of the window.',
        title: 'drawerWidth',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'Determines whether the keyboard gets dismissed in response to a drag.\n\n\'none\' (the default), drags do not dismiss the keyboard.\n\'on-drag\', the keyboard is dismissed when a drag begins.\n\nType: enum(\'none\', \'on-drag\')',
        title: 'keyboardDismissMode',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Specifies the lock mode of the drawer. The drawer can be locked in 3 states:\n\nunlocked (default), meaning that the drawer will respond (open/close) to touch gestures.\nlocked-closed, meaning that the drawer will stay closed and not respond to gestures.\nlocked-open, meaning that the drawer will stay opened and not respond to gestures. The drawer may still be opened and closed programmatically (openDrawer/closeDrawer).\n\nType: enum(\'unlocked\', \'locked-closed\', \'locked-open\')',
        title: 'drawerLockMode',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Function called whenever the navigation view has been opened.',
        title: 'onDrawerOpen',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Function called whenever there is an interaction with the navigation view.',
        title: 'onDrawerSlide',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Function called when the drawer state has changed. The drawer can be in 3 states:\n\nidle, meaning there is no interaction with the navigation view happening at the time\ndragging, meaning there is currently an interaction with the navigation view\nsettling, meaning that there was an interaction with the navigation view, and the navigation view is now finishing its closing or opening animation',
        title: 'onDrawerStateChanged',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Specifies the background color of the drawer. The default value is white. If you want to set the opacity of the drawer, use rgba. Example:\n\nreturn (\n  <DrawerLayoutAndroid drawerBackgroundColor="rgba(0,0,0,0.5)">\n  </DrawerLayoutAndroid>\n);',
        title: 'drawerBackgroundColor',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Make the drawer take the entire screen and draw the background of the status bar to allow it to open over the status bar. It will only have an effect on API 21+.',
        title: 'statusBarBackgroundColor',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'React component that wraps the platform DrawerLayout (Android only). The Drawer (typically used for navigation) is rendered with renderNavigationView and direct children are the main view (where your content goes). The navigation view is initially not visible on the screen, but can be pulled in from the side of the window specified by the drawerPosition prop and its width can be set by the drawerWidth prop.\n\nExample:\n\nrender: function() {\n  var navigationView = (\n    <View style={{flex: 1, backgroundColor: \'#fff\'}}>\n      <Text style={{margin: 10, fontSize: 15, textAlign: \'left\'}}>I\'m in the Drawer!</Text>\n    </View>\n  );\n  return (\n    <DrawerLayoutAndroid\n      drawerWidth={300}\n      drawerPosition={DrawerLayoutAndroid.positions.Left}\n      renderNavigationView={() => navigationView}>\n      <View style={{flex: 1, alignItems: \'center\'}}>\n        <Text style={{margin: 10, fontSize: 15, textAlign: \'right\'}}>Hello</Text>\n        <Text style={{margin: 10, fontSize: 15, textAlign: \'right\'}}>World!</Text>\n      </View>\n    </DrawerLayoutAndroid>\n  );\n},',
    id: 'fKVk2SDHkW1Vevh2NPHH',
    isDefault: true,
    provider: 'ReactNative',
    techno: 'React Native',
    title: 'DrawerLayoutAndroid',
    subtitle: 'ReactNative'
  },
  {
    children: [],
    closeTag: false,
    componentImport: '-',
    componentProps: [
      {
        description: 'style',
        title: 'style',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'imageStyle',
        title: 'imageStyle',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Allows to set a reference to the inner Image component',
        title: 'imageRef',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'A common feature request from developers familiar with the web is background-image. To handle this use case, you can use the <ImageBackground> component, which has the same props as <Image>, and add whatever children to it you would like to layer on top of it.\n\nYou might not want to use <ImageBackground> in some cases, since the implementation is very simple. Refer to <ImageBackground>\'s source code for more insight, and create your own custom component when needed.\n\nNote that you must specify some width and height style attributes.\n\nExample\nreturn (\n  <ImageBackground source={...} style={{width: \'100%\', height: \'100%\'}}>\n    <Text>Inside</Text>\n  </ImageBackground>\n);',
    id: 'fZvZYq1EHs3hz6rwOSqS',
    isDefault: true,
    provider: 'ReactNative',
    techno: 'React Native',
    title: 'ImageBackground',
    subtitle: 'ReactNative'
  },
  {
    children: [],
    closeTag: true,
    componentImport: 'react-bootstrap/lib/Label',
    componentProps: [
      {
        description: 'Component visual or contextual style variants.\n\ndefault: \'default\'',
        title: 'bsStyle',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'label\'',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Create a <Label>label</Label> to highlight information.\n\n<div>\n  <h1>\n    Label <Label>New</Label>\n  </h1>\n  <h2>\n    Label <Label>New</Label>\n  </h2>\n  <h3>\n    Label <Label>New</Label>\n  </h3>\n  <h4>\n    Label <Label>New</Label>\n  </h4>\n  <h5>\n    Label <Label>New</Label>\n  </h5>\n  <p>\n    Label <Label>New</Label>\n  </p>\n</div>;\n\nAvailable variations\nAdd any of the below mentioned modifier classes to change the appearance of a label.\n\n<div>\n  <Label bsStyle="default">Default</Label>{\' \'}\n  <Label bsStyle="primary">Primary</Label>{\' \'}\n  <Label bsStyle="success">Success</Label> <Label bsStyle="info">Info</Label>{\' \'}\n  <Label bsStyle="warning">Warning</Label>{\' \'}\n  <Label bsStyle="danger">Danger</Label>\n</div>;',
    id: 'ftfH8uWkSozZq6k5fmun',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'Label'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/Fade',
    componentProps: [
      {
        description: 'default: false\t\n\nRun the fade in animation when the component mounts, if it is initially shown',
        title: 'appear',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: false\t\n\nShow the component; triggers the fade in or fade out animation',
        title: 'in',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: false\t\n\nWait until the first "enter" transition to mount the component (add it to the DOM)',
        title: 'mountOnEnter',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired before the component fades in',
        title: 'onEnter',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired after the has component faded in',
        title: 'onEntered',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired after the component starts to fade in',
        title: 'onEntering',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired before the component fades out',
        title: 'onExit',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired after the component has faded out',
        title: 'onExited',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired after the component starts to fade out',
        title: 'onExiting',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'default: 300\t\n\nDuration of the fade animation in milliseconds, to ensure that finishing callbacks are fired even if the original browser transition end events are canceled',
        title: 'timeout',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'default: false\n\t\nUnmount the component (remove it from the DOM) when it is faded out',
        title: 'unmountOnExit',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      }
    ],
    description: 'Fade#\nAdd a fade animation to a child element or component.\n\nclass Example extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.state = {\n      open: false,\n    };\n  }\n\n  render() {\n    const { open } = this.state;\n    return (\n      <>\n        <Button\n          onClick={() => this.setState({ open: !open })}\n          aria-controls="example-fade-text"\n          aria-expanded={open}\n        >\n          Toggle text\n        </Button>\n        <Fade in={this.state.open}>\n          <div id="example-fade-text">\n            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus\n            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer\n            labore wes anderson cred nesciunt sapiente ea proident.\n          </div>\n        </Fade>\n      </>\n    );\n  }\n}\n\nrender(<Example />);',
    id: 'fyYFZP7LpMBH1mwj04gD',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Fade',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/TabContent',
    componentProps: [
      {
        description: 'default: <div>\t\n\nYou can use a custom element type for this component.',
        title: 'as',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'default: \'tab-content\'\t\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'TabContent',
    id: 'g6NBboBqNdcEBcoLvmvJ',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'TabContent',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    closeTag: false,
    componentImport: 'react-bootstrap/lib/Button',
    componentProps: [
      {
        description: 'Default: false',
        title: 'active',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Default: false',
        title: 'disabled',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Default: false',
        title: 'block',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'onClick',
        title: 'onClick',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'You can use a custom element type for this component.',
        title: 'componentClass',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'href',
        title: 'href',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Defines HTML button type attribute\n\ndefault: \'button\'',
        title: 'type',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Component visual or contextual style variants.\n\ndefault: \'default\'',
        title: 'bsStyle',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Component size variations.',
        title: 'bsSize',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'btn\'',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Options\nUse any of the available button style types to quickly create a styled button. Just modify the bsStyle prop.\n\n<ButtonToolbar>\n  {/* Standard button */}\n  <Button>Default</Button>\n\n  {/* Provides extra visual weight and identifies the primary action in a set of buttons */}\n  <Button bsStyle="primary">Primary</Button>\n\n  {/* Indicates a successful or positive action */}\n  <Button bsStyle="success">Success</Button>\n\n  {/* Contextual button for informational alert messages */}\n  <Button bsStyle="info">Info</Button>\n\n  {/* Indicates caution should be taken with this action */}\n  <Button bsStyle="warning">Warning</Button>\n\n  {/* Indicates a dangerous or potentially negative action */}\n  <Button bsStyle="danger">Danger</Button>\n\n  {/* Deemphasize a button by making it look like a link while maintaining button behavior */}\n  <Button bsStyle="link">Link</Button>\n</ButtonToolbar>;\n\nButton spacing\nBecause React doesn\'t output newlines between elements, buttons on the same line are displayed flush against each other. To preserve the spacing between multiple inline buttons, wrap your button group in <ButtonToolbar />.\n\n#Sizes\nFancy larger or smaller buttons? Add bsSize="large", bsSize="small", or bsSize="xsmall" for additional sizes.\n\n<div>\n  <ButtonToolbar>\n    <Button bsStyle="primary" bsSize="large">\n      Large button\n    </Button>\n    <Button bsSize="large">Large button</Button>\n  </ButtonToolbar>\n  <ButtonToolbar>\n    <Button bsStyle="primary">Default button</Button>\n    <Button>Default button</Button>\n  </ButtonToolbar>\n  <ButtonToolbar>\n    <Button bsStyle="primary" bsSize="small">\n      Small button\n    </Button>\n    <Button bsSize="small">Small button</Button>\n  </ButtonToolbar>\n  <ButtonToolbar>\n    <Button bsStyle="primary" bsSize="xsmall">\n      Extra small button\n    </Button>\n    <Button bsSize="xsmall">Extra small button</Button>\n  </ButtonToolbar>\n</div>;\n\nCreate block level buttons—those that span the full width of a parent— by adding the block prop.\n\nconst wellStyles = { maxWidth: 400, margin: \'0 auto 10px\' };\n\nconst buttonsInstance = (\n  <div className="well" style={wellStyles}>\n    <Button bsStyle="primary" bsSize="large" block>\n      Block level button\n    </Button>\n    <Button bsSize="large" block>\n      Block level button\n    </Button>\n  </div>\n);\n\nrender(buttonsInstance);\n\nActive state\nTo set a buttons active state simply set the components active prop.\n\n<ButtonToolbar>\n  <Button bsStyle="primary" bsSize="large" active>\n    Primary button\n  </Button>\n  <Button bsSize="large" active>\n    Button\n  </Button>\n</ButtonToolbar>;\n\nButton tags\nThe DOM element tag is choosen automatically for you based on the props you supply. Passing a href will result in the button using a <a /> element otherwise a <button /> element will be used.\n\n<ButtonToolbar>\n  <Button href="#">Link</Button>\n  <Button>Button</Button>\n</ButtonToolbar>;\n\nDisabled state\nMake buttons look unclickable by fading them back 50%. To do this add the disabled attribute to buttons.\n\n<ButtonToolbar>\n  <Button bsStyle="primary" bsSize="large" disabled>\n    Primary button\n  </Button>\n  <Button bsSize="large" disabled>\n    Button\n  </Button>\n</ButtonToolbar>;\n\nCross-Browser compatibility\nBecause <Button /> will render an <a> tag in certain situations. Since anchor tags can\'t be disabled, the behavior is emulated as best it can be. Specifically, pointer-events: none; style is added to the anchor to prevent focusing, which is only supported in newer browser versions.\n\n#Button loading state\nWhen activating an asynchronous action from a button it is a good UX pattern to give the user feedback as to the loading state, this can easily be done by updating your <Button />’s props from a state change like below.\n\nclass LoadingButton extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleClick = this.handleClick.bind(this);\n\n    this.state = {\n      isLoading: false\n    };\n  }\n\n  handleClick() {\n    this.setState({ isLoading: true });\n\n    // This probably where you would have an `ajax` call\n    setTimeout(() => {\n      // Completed of async action, set loading state back\n      this.setState({ isLoading: false });\n    }, 2000);\n  }\n\n  render() {\n    const { isLoading } = this.state;\n\n    return (\n      <Button\n        bsStyle="primary"\n        disabled={isLoading}\n        onClick={!isLoading ? this.handleClick : null}\n      >\n        {isLoading ? \'Loading...\' : \'Loading state\'}\n      </Button>\n    );\n  }\n}\n\nrender(<LoadingButton />);',
    id: 'g76jQnopot8qn6aSptU0',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'Button'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/Nav',
    componentProps: [
      {
        description: 'default: <div>\t\n\nYou can use a custom element type for this component.',
        title: 'as',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'The ARIA role of the component',
        title: 'role',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'default: \'nav-item\'\t\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Nav.Item',
    id: 'g99eI4hVAUAydmc0XNTr',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Nav__Item',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/ModalBody',
    componentProps: [
      {
        description: 'default: <div>\t\n\nYou can use a custom element type for this component.',
        title: 'as',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'Change the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'ModalBody',
    id: 'gObdbiO5P92LWehUMb46',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'ModalBody',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    closeTag: true,
    componentImport: 'react-bootstrap/lib/ButtonGroup',
    componentProps: [
      {
        description: 'default: false',
        title: 'vertical',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: false',
        title: 'justified',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Display block buttons; only useful when used with the "vertical" prop.\n\ndefault: false',
        title: 'block',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'btn-group\'',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: '#Button groups ButtonGroup, ButtonToolbar, ToggleButtonGroup, ToggleButton\nGroup a series of buttons together on a single line with the button group.\n\n#Basic example\nWrap a series of <Button />s in a <ButtonGroup />.\n\n<ButtonGroup>\n  <Button>Left</Button>\n  <Button>Middle</Button>\n  <Button>Right</Button>\n</ButtonGroup>;\n\n#Button toolbar\nCombine sets of <ButtonGroup />s into a <ButtonToolbar /> for more complex components.\n\n<ButtonToolbar>\n  <ButtonGroup>\n    <Button>1</Button>\n    <Button>2</Button>\n    <Button>3</Button>\n    <Button>4</Button>\n  </ButtonGroup>\n\n  <ButtonGroup>\n    <Button>5</Button>\n    <Button>6</Button>\n    <Button>7</Button>\n  </ButtonGroup>\n\n  <ButtonGroup>\n    <Button>8</Button>\n  </ButtonGroup>\n</ButtonToolbar>;\n\n#Sizing\nInstead of applying button sizing props to every button in a group, just add bsSize prop to the <ButtonGroup />.\n\n<div>\n  <ButtonToolbar>\n    <ButtonGroup bsSize="large">\n      <Button>Left</Button>\n      <Button>Middle</Button>\n      <Button>Right</Button>\n    </ButtonGroup>\n  </ButtonToolbar>\n\n  <ButtonToolbar>\n    <ButtonGroup>\n      <Button>Left</Button>\n      <Button>Middle</Button>\n      <Button>Right</Button>\n    </ButtonGroup>\n  </ButtonToolbar>\n\n  <ButtonToolbar>\n    <ButtonGroup bsSize="small">\n      <Button>Left</Button>\n      <Button>Middle</Button>\n      <Button>Right</Button>\n    </ButtonGroup>\n  </ButtonToolbar>\n\n  <ButtonToolbar>\n    <ButtonGroup bsSize="xsmall">\n      <Button>Left</Button>\n      <Button>Middle</Button>\n      <Button>Right</Button>\n    </ButtonGroup>\n  </ButtonToolbar>\n</div>;\n\n#Nesting\nYou can place other button types within the <ButtonGroup /> like <DropdownButton />s.\n\n<ButtonGroup>\n  <Button>1</Button>\n  <Button>2</Button>\n  <DropdownButton name="Dropdown" id="bg-nested-dropdown">\n    <MenuItem eventKey="1">Dropdown link</MenuItem>\n    <MenuItem eventKey="2">Dropdown link</MenuItem>\n  </DropdownButton>\n</ButtonGroup>;\n\n#Vertical variation\nMake a set of buttons appear vertically stacked rather than horizontally. Split button dropdowns are not supported here.\n\nJust add vertical to the <ButtonGroup />.\n\n<ButtonGroup vertical>\n  <Button>Button</Button>\n  <Button>Button</Button>\n  <DropdownButton name="Dropdown" id="bg-vertical-dropdown-1">\n    <MenuItem eventKey="1">Dropdown link</MenuItem>\n    <MenuItem eventKey="2">Dropdown link</MenuItem>\n  </DropdownButton>\n  <Button>Button</Button>\n  <Button>Button</Button>\n  <DropdownButton name="Dropdown" id="bg-vertical-dropdown-2">\n    <MenuItem eventKey="1">Dropdown link</MenuItem>\n    <MenuItem eventKey="2">Dropdown link</MenuItem>\n  </DropdownButton>\n  <DropdownButton name="Dropdown" id="bg-vertical-dropdown-3">\n    <MenuItem eventKey="1">Dropdown link</MenuItem>\n    <MenuItem eventKey="2">Dropdown link</MenuItem>\n  </DropdownButton>\n</ButtonGroup>;\n\nMoreover, you can have buttons be block level elements so they take the full width of their container, just add block to the <ButtonGroup />, in addition to the vertical you just added.\n\n<ButtonGroup vertical block>\n  <Button>Full width button</Button>\n  <Button>Full width button</Button>\n</ButtonGroup>;\n\nJustified button groups\nMake a group of buttons stretch at equal sizes to span the entire width of its parent. Also works with button dropdowns within the button group.\n\nStyle issues\nThere are some issues and workarounds required when using this property, please see bootstrap’s button group docs for more specifics.\n\nJust add justified to the <ButtonGroup />.\n\n<ButtonGroup justified>\n  <Button href="#">Left</Button>\n  <Button href="#">Middle</Button>\n  <DropdownButton name="Dropdown" id="bg-justified-dropdown">\n    <MenuItem eventKey="1">Dropdown link</MenuItem>\n    <MenuItem eventKey="2">Dropdown link</MenuItem>\n  </DropdownButton>\n</ButtonGroup>;\n\n#Checkbox / Radio\nFor checkboxes or radio buttons styled as Bootstrap buttons, use the<ToggleButtonGroup> and <ToggleButton>components. The group behaves as a form component, where the value is an array of the selected eventKeys for checkbox groups or the selected eventKey for radio groups.\n\nBootstrap JS issue\nThere is a known issue when including Bootstrap JS while using Toggle Button Groups. Therefore it is advised not use Bootstrap JS in conjunction with <ToggleButtonGroup> and <ToggleButton>.\n\nUncontrolled\n<div>\n  <ButtonToolbar>\n    <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]}>\n      <ToggleButton value={1}>Checkbox 1 (pre-checked)</ToggleButton>\n      <ToggleButton value={2}>Checkbox 2</ToggleButton>\n      <ToggleButton value={3}>Checkbox 3 (pre-checked)</ToggleButton>\n    </ToggleButtonGroup>\n  </ButtonToolbar>\n\n  <ButtonToolbar>\n    <ToggleButtonGroup type="radio" name="options" defaultValue={1}>\n      <ToggleButton value={1}>Radio 1 (pre-checked)</ToggleButton>\n      <ToggleButton value={2}>Radio 2</ToggleButton>\n      <ToggleButton value={3}>Radio 3</ToggleButton>\n    </ToggleButtonGroup>\n  </ButtonToolbar>\n</div>;\n\nControlled\nclass ToggleButtonGroupControlled extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleChange = this.handleChange.bind(this);\n\n    this.state = {\n      value: [1, 3]\n    };\n  }\n\n  handleChange(e) {\n    this.setState({ value: e });\n  }\n\n  render() {\n    return (\n      <ToggleButtonGroup\n        type="checkbox"\n        value={this.state.value}\n        onChange={this.handleChange}\n      >\n        <ToggleButton value={1}>Checkbox 1 (pre-checked)</ToggleButton>\n        <ToggleButton value={2}>Checkbox 2</ToggleButton>\n        <ToggleButton value={3}>Checkbox 3 (pre-checked)</ToggleButton>\n        <ToggleButton value={4} disabled>\n          Checkbox 4 (disabled)\n        </ToggleButton>\n      </ToggleButtonGroup>\n    );\n  }\n}\n\nrender(<ToggleButtonGroupControlled />);',
    id: 'gWepwMarJTpoK5kYY3VK',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'ButtonGroup'
  },
  {
    children: [],
    closeTag: false,
    componentImport: 'react-bootstrap/lib/Thumbnail',
    componentProps: [
      {
        description: 'src property that is passed down to the image inside this component',
        title: 'src',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'alt property that is passed down to the image inside this component',
        title: 'alt',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'href property that is passed down to the image inside this component',
        title: 'href',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'onError callback that is passed down to the image inside this component',
        title: 'onError',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'onLoad callback that is passed down to the image inside this component',
        title: 'onLoad',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'thumbnail\'',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Thumbnails are designed to showcase linked images with minimal required markup. You can extend the grid component with thumbnails.\n\n#Anchor Thumbnail\nCreates an anchor wrapping an image.\n\n<Grid>\n  <Row>\n    <Col xs={6} md={3}>\n      <Thumbnail href="#" alt="171x180" src="/thumbnail.png" />\n    </Col>\n    <Col xs={6} md={3}>\n      <Thumbnail href="#" alt="171x180" src="/thumbnail.png" />\n    </Col>\n    <Col xs={6} md={3}>\n      <Thumbnail href="#" alt="171x180" src="/thumbnail.png" />\n    </Col>\n  </Row>\n</Grid>;\n\nDivider Thumbnail\nCreates a divider wrapping an image and other children elements.\n\n<Grid>\n  <Row>\n    <Col xs={6} md={4}>\n      <Thumbnail src="/thumbnaildiv.png" alt="242x200">\n        <h3>Thumbnail label</h3>\n        <p>Description</p>\n        <p>\n          <Button bsStyle="primary">Button</Button>\n          &nbsp;\n          <Button bsStyle="default">Button</Button>\n        </p>\n      </Thumbnail>\n    </Col>\n    <Col xs={6} md={4}>\n      <Thumbnail src="/thumbnaildiv.png" alt="242x200">\n        <h3>Thumbnail label</h3>\n        <p>Description</p>\n        <p>\n          <Button bsStyle="primary">Button</Button>\n          &nbsp;\n          <Button bsStyle="default">Button</Button>\n        </p>\n      </Thumbnail>\n    </Col>\n    <Col xs={6} md={4}>\n      <Thumbnail src="/thumbnaildiv.png" alt="242x200">\n        <h3>Thumbnail label</h3>\n        <p>Description</p>\n        <p>\n          <Button bsStyle="primary">Button</Button>\n          &nbsp;\n          <Button bsStyle="default">Button</Button>\n        </p>\n      </Thumbnail>\n    </Col>\n  </Row>\n</Grid>;',
    id: 'gc94RK4XAoUsdRt30Dv2',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'Thumbnail'
  },
  {
    children: [],
    closeTag: false,
    componentImport: 'react-bootstrap/lib/PanelToggle',
    componentProps: [
      {
        description: 'You can use a custom element for this component\n\ndefault: SafeAnchor',
        title: 'componentClass',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      }
    ],
    description: 'Panel.Toggle',
    id: 'hS7Uja0jxaHZgQFo3JSU',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'Panel__Toggle'
  },
  {
    children: [],
    closeTag: false,
    componentImport: '-',
    componentProps: [
      {
        description: 'Used to style and layout the Slider. See StyleSheet.js and ViewStylePropTypes.js for more info.',
        title: 'style',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'If true the user won\'t be able to move the slider. Default value is false.',
        title: 'disabled',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Initial maximum value of the slider. Default value is 1.',
        title: 'maximumValue',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'The color used for the track to the left of the button. Overrides the default blue gradient image on iOS.',
        title: 'minimumTrackTintColor',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Initial minimum value of the slider. Default value is 0.',
        title: 'minimumValue',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'Callback that is called when the user releases the slider, regardless if the value has changed. The current value is passed as an argument to the callback handler.',
        title: 'onSlidingComplete',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback continuously called while the user is dragging the slider.',
        title: 'onValueChange',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Step value of the slider. The value should be between 0 and (maximumValue - minimumValue). Default value is 0.',
        title: 'step',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'The color used for the track to the right of the button. Overrides the default gray gradient image on iOS.',
        title: 'maximumTrackTintColor',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Used to locate this view in UI automation tests.',
        title: 'testID',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Initial value of the slider. The value should be between minimumValue and maximumValue, which default to 0 and 1 respectively. Default value is 0.\n\nThis is not a controlled component, you don\'t need to update the value during dragging.',
        title: 'value',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'Color of the foreground switch grip.',
        title: 'thumbTintColor',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Assigns a maximum track image. Only static images are supported. The leftmost pixel of the image will be stretched to fill the track.\n\nType: Image.propTypes.source',
        title: 'maximumTrackImage',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Assigns a minimum track image. Only static images are supported. The rightmost pixel of the image will be stretched to fill the track.\n\nType: Image.propTypes.source',
        title: 'minimumTrackImage',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Sets an image for the thumb. Only static images are supported.\n\nType: Image.propTypes.source',
        title: 'thumbImage',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Assigns a single image for the track. Only static images are supported. The center pixel of the image will be stretched to fill the track.\n\nType: Image.propTypes.source',
        title: 'trackImage',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'A component used to select a single value from a range of values.',
    id: 'hqn9ABubll32mSRsmQLV',
    isDefault: true,
    provider: 'ReactNative',
    techno: 'React Native',
    title: 'Slider',
    subtitle: 'ReactNative'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/Card',
    componentProps: [
      {
        description: 'type: elementType\ndefault: <div>\t\n\nYou can use a custom element type for this component.',
        title: 'as',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'required\t\ndefault: \'card-body\'\t\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Card.Body',
    id: 'i2hFmXVjoBYoJGav12An',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Card__Body',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/Button',
    componentProps: [
      {
        description: 'default: false\t\nManually set the visual state of the button to :active',
        title: 'active',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'type: elementType\n\nYou can use a custom element type for this component.',
        title: 'as',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Spans the full width of the Button parent',
        title: 'block',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: false\t\n\nDisables the Button, preventing mouse events, even if the underlying component is an <a> element',
        title: 'disabled',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Providing a href will render an <a> element, styled as a button.',
        title: 'href',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'type: \'sm\' | \'lg\'\n\nSpecifies a large or small button.',
        title: 'size',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'type: \'button\' | \'reset\' | \'submit\' | null\ndefault: \'button\'\t\n\nDefines HTML button type attribute.',
        title: 'type',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'default: \'primary\'\t\n\nOne or more button variant combinations\n\nbuttons may be one of a variety of visual variants such as:\n\n\'primary\', \'secondary\', \'success\', \'danger\', \'warning\', \'info\', \'dark\', \'light\', \'link\'\n\nas well as "outline" versions (prefixed by \'outline-*\')\n\n\'outline-primary\', \'outline-secondary\', \'outline-success\', \'outline-danger\', \'outline-warning\', \'outline-info\', \'outline-dark\', \'outline-light\'',
        title: 'variant',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'default: \'btn\'\t\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Buttons\nCustom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.\n\nExamples#\nUse any of the available button style types to quickly create a styled button. Just modify the variant prop.\n\n<ButtonToolbar>\n  <Button variant="primary">Primary</Button>\n  <Button variant="secondary">Secondary</Button>\n  <Button variant="success">Success</Button>\n  <Button variant="warning">Warning</Button>\n  <Button variant="danger">Danger</Button>\n  <Button variant="info">Info</Button>\n  <Button variant="light">Light</Button>\n  <Button variant="dark">Dark</Button>\n  <Button variant="link">Link</Button>\n</ButtonToolbar>;\n\nOutline buttons#\nFor a lighter touch, Buttons also come in outline-* variants with no background color.\n\n<ButtonToolbar>\n  <Button variant="outline-primary">Primary</Button>\n  <Button variant="outline-secondary">Secondary</Button>\n  <Button variant="outline-success">Success</Button>\n  <Button variant="outline-warning">Warning</Button>\n  <Button variant="outline-danger">Danger</Button>\n  <Button variant="outline-info">Info</Button>\n  <Button variant="outline-light">Light</Button>\n  <Button variant="outline-dark">Dark</Button>\n</ButtonToolbar>;\n\nButton tags#\nNormally <Button> components will render a HTML <button> element. However you can render whatever you\'d like, adding a href prop will automatically render an <a /> element. You can use the as prop to render whatever your heart desires. React Bootstrap will take care of the proper ARIA roles for you.\n\nSizes#\nFancy larger or smaller buttons? Add size="large", size="small" for additional sizes.\n\n<div>\n  <ButtonToolbar>\n    <Button variant="primary" size="lg">\n      Large button\n    </Button>\n    <Button variant="secondary" size="lg">\n      Large button\n    </Button>\n  </ButtonToolbar>\n\n  <ButtonToolbar>\n    <Button variant="primary" size="sm">\n      Small button\n    </Button>\n    <Button variant="secondary" size="sm">\n      Small button\n    </Button>\n  </ButtonToolbar>\n</div>;\n\nCreate block level buttons—those that span the full width of a parent—by adding block\n\n<div>\n  <Button variant="primary" size="lg" block>\n    Block level button\n  </Button>\n  <Button variant="secondary" size="lg" block>\n    Block level button\n  </Button>\n</div>;\n\nActive state#\nTo set a buttons active state simply set the components active prop.\n\n<ButtonToolbar>\n  <Button variant="primary" size="lg" active>\n    Primary button\n  </Button>\n  <Button variant="secondary" size="lg" active>\n    Button\n  </Button>\n</ButtonToolbar>;\n\nDisabled state#\nMake buttons look inactive by adding the disabled prop to.\n\n<ButtonToolbar>\n  <Button variant="primary" size="lg" disabled>\n    Primary button\n  </Button>{\' \'}\n  <Button variant="secondary" size="lg" disabled>\n    Button\n  </Button>{\' \'}\n  <Button href="#" variant="secondary" size="lg" disabled>\n    Link\n  </Button>\n</ButtonToolbar>;\n\nWatch out! <a> element\'s don\'t naturally support a disabled attribute. In browsers that support it this is handled with a point-events: none style but not all browsers support it yet.\n\nReact Bootstrap will prevent any onClick handlers from firing regardless of the rendered element.\n\nButton loading state#\nWhen activating an asynchronous action from a button it is a good UX pattern to give the user feedback as to the loading state, this can easily be done by updating your <Button />s props from a state change like below.\n\nfunction simulateNetworkRequest() {\n  return new Promise(resolve => setTimeout(resolve, 2000));\n}\n\nclass LoadingButton extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleClick = this.handleClick.bind(this);\n\n    this.state = {\n      isLoading: false,\n    };\n  }\n\n  handleClick() {\n    this.setState({ isLoading: true }, () => {\n      simulateNetworkRequest().then(() => {\n        this.setState({ isLoading: false });\n      });\n    });\n  }\n\n  render() {\n    const { isLoading } = this.state;\n\n    return (\n      <Button\n        variant="primary"\n        disabled={isLoading}\n        onClick={!isLoading ? this.handleClick : null}\n      >\n        {isLoading ? \'Loading…\' : \'Click to load\'}\n      </Button>\n    );\n  }\n}\n\nrender(<LoadingButton />);\n\nCheckbox / Radio#\nButton\'s can also be used to style checkbox and radio form elements. This is helpful when you want a toggle button that works neatly inside an HTML form.\n\n<div className="d-flex flex-column">\n  <ButtonGroup toggle>\n    <ToggleButton type="checkbox" defaultChecked value="1">\n      Checked\n    </ToggleButton>\n  </ButtonGroup>\n  <ButtonGroup toggle className="mt-3">\n    <ToggleButton type="radio" name="radio" defaultChecked value="1">\n      Active\n    </ToggleButton>\n    <ToggleButton type="radio" name="radio" value="2">\n      Radio\n    </ToggleButton>\n    <ToggleButton type="radio" name="radio" value="3">\n      Radio\n    </ToggleButton>\n  </ButtonGroup>\n</div>;\n\nThe above handles styling, But requires manually controlling the checked state for each radio or checkbox in the group.\n\nFor a nicer experience with checked state management use the <ToggleButtonGroup> instead of a <ButtonGroup toggle> component. The group behaves as a form component, where the value is an array of the selected values for a named checkbox group or the single toggled value in a similarly named radio group.\n\nUncontrolled#\n\n<>\n  <ButtonToolbar>\n    <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]}>\n      <ToggleButton value={1}>Checkbox 1 (pre-checked)</ToggleButton>\n      <ToggleButton value={2}>Checkbox 2</ToggleButton>\n      <ToggleButton value={3}>Checkbox 3 (pre-checked)</ToggleButton>\n    </ToggleButtonGroup>\n  </ButtonToolbar>\n\n  <ButtonToolbar>\n    <ToggleButtonGroup type="radio" name="options" defaultValue={1}>\n      <ToggleButton value={1}>Radio 1 (pre-checked)</ToggleButton>\n      <ToggleButton value={2}>Radio 2</ToggleButton>\n      <ToggleButton value={3}>Radio 3</ToggleButton>\n    </ToggleButtonGroup>\n  </ButtonToolbar>\n</>;\n\nControlled#\n\nclass ToggleButtonGroupControlled extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleChange = this.handleChange.bind(this);\n\n    this.state = {\n      value: [1, 3],\n    };\n  }\n\n  handleChange(value, event) {\n    this.setState({ value });\n  }\n\n  render() {\n    return (\n      <ToggleButtonGroup\n        type="checkbox"\n        value={this.state.value}\n        onChange={this.handleChange}\n      >\n        <ToggleButton value={1}>Option 1</ToggleButton>\n        <ToggleButton value={2}>Option 2</ToggleButton>\n        <ToggleButton value={3}>Option 3</ToggleButton>\n      </ToggleButtonGroup>\n    );\n  }\n}\n\nrender(<ToggleButtonGroupControlled />);',
    id: 'iHLaRIu2JjuvM0TXJGrm',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    subtitle: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Button'
  },
  {
    children: [],
    closeTag: false,
    componentImport: '-',
    componentProps: [
      {
        description: 'This is the distance between the top of the user screen and the react native view, may be non-zero in some use cases.',
        title: 'keyboardVerticalOffset',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'Note: Android and iOS both interact with this prop differently. Android may behave better when given no behavior prop at all, whereas iOS is the opposite.\n\nType: enum(\'height\', \'position\', \'padding\')',
        title: 'behavior',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'The style of the content container(View) when behavior is \'position\'.',
        title: 'contentContainerStyle',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Enabled or disabled KeyboardAvoidingView. The default is true.',
        title: 'enabled',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      }
    ],
    description: 'It is a component to solve the common problem of views that need to move out of the way of the virtual keyboard. It can automatically adjust either its position or bottom padding based on the position of the keyboard.\n\nExample usage:\n\nimport { KeyboardAvoidingView } from \'react-native\';\n\n<KeyboardAvoidingView style={styles.container} behavior="padding" enabled>\n  ... your UI ...\n</KeyboardAvoidingView>\n\n',
    id: 'iT09a7tjh1vOPtsdo0yE',
    isDefault: true,
    provider: 'ReactNative',
    techno: 'React Native',
    title: 'KeyboardAvoidingView',
    subtitle: 'ReactNative'
  },
  {
    children: [],
    closeTag: true,
    componentImport: 'react-bootstrap/lib/InputGroup',
    componentProps: [
      {
        description: 'Component size variations.\n\none of: "lg", "large", "sm", "small"',
        title: 'bsSize',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'input-group\'',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'InputGroup',
    id: 'imE0dSv0F0j2OTGKPtsr',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'InputGroup'
  },
  {
    children: [],
    closeTag: true,
    componentImport: 'react-bootstrap/lib/ToggleButtonGroup',
    componentProps: [
      {
        description: 'An HTML <input> name for each child button.\n\nRequired if type is set to \'radio\'',
        title: 'name',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'The value, or array of values, of the active (pressed) buttons',
        title: 'value',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired when a button is pressed, depending on whether the type is \'radio\' or \'checkbox\', onChange will be called with the value or array of active values',
        title: 'onChange',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'The input type of the rendered buttons, determines the toggle behavior of the buttons\n\ndefault: \'radio\'\n\none of: \'checkbox\', \'radio\'',
        title: 'type',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      }
    ],
    description: 'ToggleButtonGroup',
    id: 'jDWlFdsxilAmdvIPHpck',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'ToggleButtonGroup'
  },
  {
    children: [],
    closeTag: true,
    componentImport: 'react-bootstrap/lib/Breadcrumb',
    componentProps: [],
    description: 'Breadcrumbs are used to indicate the current page\'s location. Add active attribute to active Breadcrumb.Item.\n\nDo not set both active and href attributes. active overrides href and span element is rendered instead of a.\n\n<Breadcrumb>\n  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>\n  <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">\n    Library\n  </Breadcrumb.Item>\n  <Breadcrumb.Item active>Data</Breadcrumb.Item>\n</Breadcrumb>;',
    id: 'k3VdpecMsRbVvTASGKzn',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'Breadcrumb'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/DropdownButton',
    componentProps: [
      {
        description: 'Disables both Buttons',
        title: 'disabled',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'An href passed to the Toggle component',
        title: 'href',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'required\t\ntype: string|number\n\nAn html id attribute for the Toggle button, necessary for assistive technologies, such as screen readers.',
        title: 'id',
        propType: 'PropTypes.string',
        propTypeIsrequired: true
      },
      {
        description: 'An ARIA accessible role applied to the Menu component. When set to \'menu\', The dropdown',
        title: 'menuRole',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'An onClick handler passed to the Toggle component',
        title: 'onClick',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Which event when fired outside the component will cause it to be closed.\n\nsee DropdownMenu for more details',
        title: 'rootCloseEvent',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'required\t\ntype: node\n\nThe content of the non-toggle Button.',
        title: 'name',
        propType: 'PropTypes.node',
        propTypeIsrequired: true
      }
    ],
    description: 'A convenience component for simple or general use dropdowns. Renders a Button toggle and all children are passed directly to the default Dropdown.Menu.\n\nAll unknown props are passed through to the Dropdown component. Only the Button variant, size and bsPrefix props are passed to the toggle, along with menu related props are passed to the Dropdown.Menu',
    id: 'kIa5etTkaOCMELvTeAMX',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'DropdownButton',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    closeTag: false,
    componentImport: 'react-bootstrap/lib/CarouselCaption',
    componentProps: [
      {
        description: 'You can use a custom element type for this component.\n\ndefault: \'div\'',
        title: 'componentClass',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'carousel-caption\'',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Carousel.Caption',
    id: 'kc6wM6m8ALddmDvYSVv8',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'Carousel__Caption'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/ModalFooter',
    componentProps: [
      {
        description: 'default: <div>\t\n\nYou can use a custom element type for this component.',
        title: 'as',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'Change the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'ModalFooter',
    id: 'l9f8cp1WG5G3HQgJD5Nf',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'ModalFooter',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/ButtonToolbar',
    componentProps: [
      {
        description: 'default: \'toolbar\'\t\n\nThe ARIA role describing the button toolbar. Generally the default "toolbar" role is correct. An aria-label or aria-labelledby prop is also recommended.',
        title: 'role',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'default: \'btn-toolbar\'\t\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'ButtonToolbar',
    id: 'm5azHJZ7B5igLVpOovcX',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'ButtonToolbar',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/Col',
    componentProps: [
      {
        description: 'default: <div>\t\n\nYou can use a custom element type for this component.',
        title: 'as',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'type: true | "auto" | number | { span: true | "auto" | number, offset: number, order: number }\n\nThe number of columns to span on large devices (≥992px)',
        title: 'lg',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'type: true | "auto" | number | { span: true | "auto" | number, offset: number, order: number }\n\nThe number of columns to span on medium devices (≥768px)',
        title: 'md',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'type: true | "auto" | number | { span: true | "auto" | number, offset: number, order: number }\n\nThe number of columns to span on small devices (≥576px)',
        title: 'sm',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'type: true | "auto" | number | { span: true | "auto" | number, offset: number, order: number }\n\nThe number of columns to span on extra large devices (≥1200px)',
        title: 'xl',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'type: true | "auto" | number | { span: true | "auto" | number, offset: number, order: number }\n\nThe number of columns to span on sxtra small devices (<576px)',
        title: 'xs',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'default: \'col\'\t\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Col',
    id: 'mAlxTZxyHzWTCb0eSdD2',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Col',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    closeTag: false,
    componentImport: 'react-bootstrap/lib/Modalname',
    componentProps: [
      {
        description: 'You can use a custom element type for this component.',
        title: 'componentClass',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'modal-name\'',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Modal.name',
    id: 'mqrK9kqyPNhM6hHgUwEp',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'Modal__name'
  },
  {
    children: [],
    closeTag: false,
    componentImport: '-',
    componentProps: [
      {
        description: 'Specifies which form element a label is bound to',
        title: 'for',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Specifies one or more forms the label belongs to',
        title: 'form',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: '',
    id: 'n9vOAqzEBwSDjlhjVKZe',
    isDefault: false,
    provider: 'HTML',
    techno: 'React',
    title: 'label',
    subtitle: 'HTML'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/Carousel',
    componentProps: [
      {
        description: 'type: elementType\ndefault: <div>\t\n\nYou can use a custom element type for this component.',
        title: 'as',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'default: \'carousel-caption\'\t\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Carousel.Caption',
    id: 'nA7OmIHlHOjwxS8GYjbq',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    subtitle: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Carousel__Caption'
  },
  {
    children: [],
    closeTag: true,
    componentImport: 'react-bootstrap/lib/TabPane',
    componentProps: [
      {
        description: 'Uniquely identify the <TabPane> among its siblings.',
        title: 'eventKey',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Use animation when showing or hiding <TabPane>s. Use false to disable, true to enable the default <Fade> animation or a react-transition-group v2 <Transition/> component.',
        title: 'animation',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'tab-pane\'',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Transition onEnter callback when animation is not false',
        title: 'onEnter',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Transition onEntering callback when animation is not false',
        title: 'onEntering',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: '\t\nTransition onEntered callback when animation is not false',
        title: 'onEntered',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Transition onExit callback when animation is not false',
        title: 'onExit',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Transition onExiting callback when animation is not false',
        title: 'onExiting',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Transition onExited callback when animation is not false',
        title: 'onExited',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Wait until the first "enter" transition to mount the tab (add it to the DOM)',
        title: 'mountOnEnter',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Unmount the tab (remove it from the DOM) when it is no longer visible',
        title: 'unmountOnExit',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      }
    ],
    description: 'TabPane',
    id: 'nHyxQBWFZMGYVDW7P8Lm',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'TabPane'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/lib/TabContent',
    componentProps: [
      {
        description: 'You can use a custom element type for this component.\n\ndefault: \'div\'',
        title: 'componentClass',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'Sets a default animation strategy for all children <TabPane>s. Use false to disable, true to enable the default <Fade> animation or a react-transition-group v2 <Transition/> component.\n\ndefault: true',
        title: 'animation',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Wait until the first "enter" transition to mount tabs (add them to the DOM)\n\ndefault: false',
        title: 'mountOnEnter',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Unmount tabs (remove it from the DOM) when they are no longer visible\n\ndefault: false',
        title: 'unmountOnExit',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'tab\'',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'TabContent',
    id: 'nPKhBy3nSydNjma6lxX0',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'TabContent'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/OverlayTrigger',
    componentProps: [
      {
        description: 'children',
        title: 'children',
        propType: 'PropTypes.element',
        propTypeIsrequired: true
      },
      {
        description: 'The initial visibility state of the Overlay. For more nuanced visibility control, consider using the Overlay component directly.',
        title: 'defaultShow',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'type: number | shape\n\nA millisecond delay amount to show and hide the Overlay once triggered',
        title: 'delay',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'type: function | element\n\nAn element or text to overlay next to the target.',
        title: 'overlay',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'type: \'hover\' | \'click\' |\'focus\' | Array<\'hover\' | \'click\' |\'focus\'>\ndefault: [\'hover\', \'focus\']\t\n\nSpecify which action or actions trigger Overlay visibility',
        title: 'trigger',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      }
    ],
    description: 'OverlayTrigger',
    id: 'nWz4UwDUm8Cc8x4xxBvJ',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'OverlayTrigger',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    closeTag: false,
    componentImport: 'react-bootstrap/lib/CarouselItem',
    componentProps: [
      {
        description: 'direction',
        title: 'direction',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'onAnimateOutEnd',
        title: 'onAnimateOutEnd',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'default: false',
        title: 'active',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: false',
        title: 'animateIn',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: false',
        title: 'animateOut',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'index',
        title: 'index',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      }
    ],
    description: 'CarouselItem',
    id: 'nn6lgRHDkYGV8QZOGb1G',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'Carousel__Item'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/Card',
    componentProps: [
      {
        description: 'type: elementType\ndefault: <img>\t\n\nYou can use a custom element type for this component.',
        title: 'as',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'type: \'top\' | \'bottom\'\ndefault: null\t\n\nDefines image position inside the card.',
        title: 'variant',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'required\t\ndefault: \'card-img\'\t\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: true
      }
    ],
    description: 'Card.Img',
    id: 'o1KczNYNVRqbULmSoN0B',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Card__Img',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    closeTag: false,
    componentImport: 'react-bootstrap/lib/PageItem',
    componentProps: [
      {
        description: 'default: fasle',
        title: 'disabled',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: fasle',
        title: 'previous',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: fasle',
        title: 'next',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'onClick',
        title: 'onClick',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'onSelect',
        title: 'onSelect',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'A unique identifier for the Component, the eventKey makes it distinguishable from others in a set. Similar to React\'s key prop, in that it only needs to be unique amoungst the Components siblings, not globally.',
        title: 'eventKey',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Pager.Item',
    id: 'o3RntWvdORJ16swg2h15',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'Pager__Item'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/Overlay',
    componentProps: [
      {
        description: 'type: componentOrElement | function\n\nA component instance, DOM node, or function that returns either. The container element will have the Overlay appended to it via a React portal.',
        title: 'container',
        propType: 'PropTypes.node',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired before the Overlay transitions in',
        title: 'onEnter',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired after the Overlay finishes transitioning in',
        title: 'onEntered',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired as the Overlay begins to transition in',
        title: 'onEntering',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired right before the Overlay transitions out',
        title: 'onExit',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired after the Overlay finishes transitioning out',
        title: 'onExited',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Callback fired as the Overlay begins to transition out',
        title: 'onExiting',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'A callback invoked by the overlay when it wishes to be hidden. Required if rootClose is specified.',
        title: 'onHide',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'type: \'auto-start\' | \'auto\' | \'auto-end\' | \'top-start\' | \'top\' | \'top-end\' | \'right-start\' | \'right\' | \'right-end\' | \'bottom-end\' | \'bottom\' | \'bottom-start\' | \'left-end\' | \'left\' | \'left-start\'\ndefault: \'top\'\t\n\nThe placement of the OVerlay in relation to it\'s target.',
        title: 'placement',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'A set of popper options and props passed directly to react-popper\'s Popper component.',
        title: 'popperConfig',
        propType: 'PropTypes.object',
        propTypeIsrequired: false
      },
      {
        description: 'default: false\t\n\nSpecify whether the overlay should trigger onHide when the user clicks outside the overlay',
        title: 'rootClose',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: \'click\' | \'mousedown\'\n\nSpecify event for triggering a "root close" toggle.',
        title: 'rootCloseEvent',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'default: false\t\n\nSet the visibility of the Overlay',
        title: 'show',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'type: componentOrElement | function\n\nA component instance, DOM node, or function that returns either. The overlay will be positioned in relation to the target',
        title: 'target',
        propType: 'PropTypes.node',
        propTypeIsrequired: false
      },
      {
        description: 'type: boolean | elementType\ndefault: Fade\t\n\nAnimate the entering and exiting of the Ovelay. true will use the <Fade> transition, or a custom react-transition-group <Transition> component can be provided.',
        title: 'transition',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      }
    ],
    description: 'Overlays#\nA set of components for positioning beautiful overlays, tooltips, popovers, and anything else you need.\n\nOverview#\nThings to know about the react-boostrap Overlay components.\n\nOverlays rely on a 3rd party library react-popper, a tiny react wrapper around Popper.js. It\'s include automatically with react-bootstrap, but you should reference the API for more advanced use-cases.\nThe <Tooltip> and <Popover> components do not position themselves. Instead the <Overlay> (or <OverlayTrigger>) components, inject ref and style props.\nTooltip expects specific props injected by the <Overlay> component\nTooltips for disabled elements must be triggered on a wrapper element.\nOverlay#\nOverlay is the fundemental component for positioning and controlling tooltip visibility. It\'s a wrapper around react-popper, that adds support for transitions, and visibility toggling.\n\nCreating an Overlay#\nOverlays consist of at least two elements, the "overlay", the element to be positioned, as well as a "target", the element the overlay is positioned in relation to. You can also also have an "arrow" element, like the tooltips and popovers, but that is optional. Be sure to check out the react-popper documentation for more details about the injected props.\n\nclass Example extends React.Component {\n  constructor(...args) {\n    super(...args);\n\n    this.attachRef = target => this.setState({ target });\n    this.state = {\n      show: false,\n    };\n  }\n\n  render() {\n    const { show, target } = this.state;\n    return (\n      <>\n        <Button\n          variant="danger"\n          ref={this.attachRef}\n          onClick={() => this.setState({ show: !show })}\n        >\n          Click me to see\n        </Button>\n        <Overlay target={target} show={show} placement="right">\n          {({ placement, scheduleUpdate, arrowProps, ...props }) => (\n            <div\n              {...props}\n              style={{\n                backgroundColor: \'rgba(255, 100, 100, 0.85)\',\n                padding: \'2px 10px\',\n                color: \'white\',\n                borderRadius: 3,\n                ...props.style,\n              }}\n            >\n              Simple tooltip\n            </div>\n          )}\n        </Overlay>\n      </>\n    );\n  }\n}\n\nrender(<Example />);\n\nOverlayTrigger#\nSince the above pattern is pretty common, but verbose, we\'ve included <OverlayTrigger> component to help with common use-cases. It even has functionality to delayed show or hides, and a few different "trigger" events you can mix and match.\n\nNote that triggering components must be able to accept a ref since <OverlayTrigger> will attempt to add one. You can use forwardRef() for stateless function components.\n\nconst renderTooltip = props => (\n  <div\n    {...props}\n    style={{\n      backgroundColor: \'rgba(0, 0, 0, 0.85)\',\n      padding: \'2px 10px\',\n      color: \'white\',\n      borderRadius: 3,\n      ...props.style,\n    }}\n  >\n    Simple tooltip\n  </div>\n);\n\nconst Example = () => (\n  <OverlayTrigger\n    placement="right-start"\n    delay={{ show: 250, hide: 400 }}\n    overlay={renderTooltip}\n  >\n    <Button variant="success">Hover me to see</Button>\n  </OverlayTrigger>\n);\n\nrender(<Example />);\n\nTooltips#\nA tooltip component for a more stylish alternative to that anchor tag name attribute.\n\nExamples#\nHover over the links below to see tooltips.\n\nYou can pass the Overlay injected props directly to the Tooltip component.\n\nclass Example extends React.Component {\n  constructor(...args) {\n    super(...args);\n\n    this.attachRef = target => this.setState({ target });\n    this.state = { show: false };\n  }\n\n  render() {\n    const { show, target } = this.state;\n    return (\n      <>\n        <Button\n          ref={this.attachRef}\n          onClick={() => this.setState({ show: !show })}\n        >\n          Click me!\n        </Button>\n        <Overlay target={target} show={show} placement="right">\n          {props => (\n            <Tooltip id="overlay-example" {...props}>\n              My Tooltip\n            </Tooltip>\n          )}\n        </Overlay>\n      </>\n    );\n  }\n}\n\nrender(<Example />);\n\nOr pass a Tooltip element to OverlayTrigger instead.\n\n<ButtonToolbar>\n  {[\'top\', \'right\', \'bottom\', \'left\'].map(placement => (\n    <OverlayTrigger\n      key={placement}\n      placement={placement}\n      overlay={\n        <Tooltip id={`tooltip-${placement}`}>\n          Tooltip on <strong>{placement}</strong>.\n        </Tooltip>\n      }\n    >\n      <Button variant="secondary">Tooltip on {placement}</Button>\n    </OverlayTrigger>\n  ))}\n</ButtonToolbar>;\n\nPopovers#\nA popover component, like those found in iOS.\n\nconst popover = (\n  <Popover id="popover-basic" name="Popover right">\n    And here\'s some <strong>amazing</strong> content. It\'s very engaging. right?\n  </Popover>\n);\n\nconst Example = () => (\n  <OverlayTrigger trigger="click" placement="right" overlay={popover}>\n    <Button variant="success">Click me to see</Button>\n  </OverlayTrigger>\n);\n\nrender(<Example />);\n\nAs with <Tooltip>s, you can control the placement of the Popover.\n\n<ButtonToolbar>\n  {[\'top\', \'right\', \'bottom\', \'left\'].map(placement => (\n    <OverlayTrigger\n      trigger="click"\n      key={placement}\n      placement={placement}\n      overlay={\n        <Popover\n          id={`popover-positioned-${placement}`}\n          name={`Popover ${placement}`}\n        >\n          <strong>Holy guacamole!</strong> Check this info.\n        </Popover>\n      }\n    >\n      <Button variant="secondary">Popover on {placement}</Button>\n    </OverlayTrigger>\n  ))}\n</ButtonToolbar>;\n\nDisabled elements#\nElements with the disabled attribute aren’t interactive, meaning users cannot hover or click them to trigger a popover (or tooltip). As a workaround, you’ll want to trigger the overlay from a wrapper <div> or <span> and override the pointer-events on the disabled element.\n\n<OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}>\n  <span className="d-inline-block">\n    <Button disabled style={{ pointerEvents: \'none\' }}>\n      Disabled button\n    </Button>\n  </span>\n</OverlayTrigger>;\n\nChanging containers#\nYou can specify a container to control the DOM element the overlay is appended to. This is especially useful when styles conflict with your Overlay\'s.\n\nclass Example extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleClick = ({ target }) => {\n      this.setState(s => ({ target, show: !s.show }));\n    };\n\n    this.state = {\n      show: false,\n    };\n  }\n\n  render() {\n    return (\n      <ButtonToolbar>\n        <Button onClick={this.handleClick}>Holy guacamole!</Button>\n\n        <Overlay\n          show={this.state.show}\n          target={this.state.target}\n          placement="bottom"\n          container={this}\n          containerPadding={20}\n        >\n          <Popover id="popover-contained" name="Popover bottom">\n            <strong>Holy guacamole!</strong> Check this info.\n          </Popover>\n        </Overlay>\n      </ButtonToolbar>\n    );\n  }\n}\n\nrender(<Example />);\n\nUpdating position dynamically#\nSince we can\'t know every time your overlay changes size, to reposition it, you need to take manual action if you want to update the position of an Overlay in response to a change.\n\nFor this, the Overlay component also injects a scheduleUpdate() method that an overlay component can use to reposition itself.\n\nclass UpdatingPopover extends React.Component {\n  componentDidUpdate(prevProps) {\n    if (prevProps.children !== this.props.children) {\n      console.log(\'updating!\');\n      this.props.scheduleUpdate();\n    }\n  }\n\n  render() {\n    return <Popover {...this.props} />;\n  }\n}\n\nconst longContent = `\n  Very long\n  Multiline content\n  that is engaging and what-not\n`;\nconst shortContent = \'Short and sweet!\';\n\nclass Example extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n    this.state = { content: shortContent };\n  }\n\n  componentDidMount() {\n    this.timer = setInterval(() => {\n      this.setState(state => ({\n        content: state.content === shortContent ? longContent : shortContent,\n      }));\n    }, 3000);\n  }\n\n  render() {\n    const { content } = this.state;\n\n    return (\n      <OverlayTrigger\n        trigger="click"\n        overlay={\n          <UpdatingPopover id="popover-contained">{content}</UpdatingPopover>\n        }\n      >\n        <Button onClick={this.handleClick}>Holy guacamole!</Button>\n      </OverlayTrigger>\n    );\n  }\n}\n\nrender(<Example />);\n',
    id: 'ocXSb0zZfvYOb58mCaMj',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Overlay',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/Pagination',
    componentProps: [
      {
        description: 'type: \'sm\' | \'lg\'\n\nSet\'s the size of all PageItems.',
        title: 'size',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'required\t\ndefault: \'pagination\'\t\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Pagination#\nA set of presentational components for building pagination UI.\n\nlet active = 2;\nlet items = [];\nfor (let number = 1; number <= 5; number++) {\n  items.push(\n    <Pagination.Item key={number} active={number === active}>\n      {number}\n    </Pagination.Item>,\n  );\n}\n\nconst paginationBasic = (\n  <div>\n    <Pagination>{items}</Pagination>\n    <br />\n\n    <Pagination size="lg">{items}</Pagination>\n    <br />\n\n    <Pagination size="sm">{items}</Pagination>\n  </div>\n);\n\nrender(paginationBasic);\n\nMore options#\nFor building more complex pagination UI, there are few convenient sub-components for adding "First", "Previous", "Next", and "Last" buttons, as well as an Ellipsis item for indicating previous or continuing results.\n\n<Pagination>\n  <Pagination.First />\n  <Pagination.Prev />\n  <Pagination.Item>{1}</Pagination.Item>\n  <Pagination.Ellipsis />\n\n  <Pagination.Item>{10}</Pagination.Item>\n  <Pagination.Item>{11}</Pagination.Item>\n  <Pagination.Item active>{12}</Pagination.Item>\n  <Pagination.Item>{13}</Pagination.Item>\n  <Pagination.Item disabled>{14}</Pagination.Item>\n\n  <Pagination.Ellipsis />\n  <Pagination.Item>{20}</Pagination.Item>\n  <Pagination.Next />\n  <Pagination.Last />\n</Pagination>;\n\n',
    id: 'pNGhFzXZ3j7JxKKHrRdc',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Pagination',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/lib/PageHeader',
    componentProps: [
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'page-header\'',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: '#Page header PageHeader\nA simple shell for an h1 to appropriately space out and segment sections of content on a page. It can utilize the h1’s default small element, as well as most other components (with additional styles).\n\n<PageHeader>\n  Example page header <small>Subtext for header</small>\n</PageHeader>;\n\n',
    id: 'pQGTASCkdQI7EJCRsDz3',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'PageHeader'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/lib/FormGroup',
    componentProps: [
      {
        description: 'Sets id on <FormControl> and htmlFor on <FormGroup.Label>.',
        title: 'controlId',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'one of: \'success\', \'warning\', \'error\', null',
        title: 'validationState',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Component size variations.\n\none of: "lg", "large", "sm", "small"',
        title: 'bsSize',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'form-group\'',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: '#Forms FormGroup, FormControl, ControlLabel\nThe <FormControl> component renders a form control with Bootstrap styling. The <FormGroup> component wraps a form control with proper spacing, along with support for a label, help text, and validation state. To ensure accessibility, set controlId on <FormGroup>, and use <ControlLabel> for the label.\n\nclass FormExample extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleChange = this.handleChange.bind(this);\n\n    this.state = {\n      value: \'\'\n    };\n  }\n\n  getValidationState() {\n    const length = this.state.value.length;\n    if (length > 10) return \'success\';\n    else if (length > 5) return \'warning\';\n    else if (length > 0) return \'error\';\n    return null;\n  }\n\n  handleChange(e) {\n    this.setState({ value: e.target.value });\n  }\n\n  render() {\n    return (\n      <form>\n        <FormGroup\n          controlId="formBasicText"\n          validationState={this.getValidationState()}\n        >\n          <ControlLabel>Working example with validation</ControlLabel>\n          <FormControl\n            type="text"\n            value={this.state.value}\n            placeholder="Enter text"\n            onChange={this.handleChange}\n          />\n          <FormControl.Feedback />\n          <HelpBlock>Validation is based on string length.</HelpBlock>\n        </FormGroup>\n      </form>\n    );\n  }\n}\n\nrender(<FormExample />);\n\nThe <FormControl> component directly renders the <input> or other specified component. If you need to access the value of an uncontrolled <FormControl>, attach a ref to it as you would with an uncontrolled input, then call ReactDOM.findDOMNode(ref) to get the DOM node. You can then interact with that node as you would with any other uncontrolled input.\n\nIf your application contains a large number of form groups, we recommend building a higher-level component encapsulating a complete field group that renders the label, the control, and any other necessary components. We don\'t provide this out-of-the-box, because the composition of those field groups is too specific to an individual application to admit a good one-size-fits-all solution.\n\n',
    id: 'pl8eHzTdrIfDx2Fy8gfV',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'FormGroup'
  },
  {
    children: [],
    closeTag: true,
    componentImport: '-',
    componentProps: [
      {
        description: 'The target destination of a link.',
        title: 'href',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'The browsing context in which the target destination should open.',
        title: 'target',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Indicates that the target should be downloaded instead of navigated to.',
        title: 'download',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'The relationship between the link’s page and the link’s target destination.',
        title: 'rel',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'className',
        title: 'className',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Anchor. Primarily used as a hypertext link. The link can be to another page, a part of a page or any other location on the web.',
    id: 'qIhVQYGIOE7A8dAxD24J',
    isDefault: false,
    provider: 'HTML',
    techno: 'React',
    title: 'a',
    subtitle: 'HTML'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/ToggleButtonGroup',
    componentProps: [
      {
        description: 'An HTML <input> name for each child button.\n\nRequired if type is set to \'radio\'',
        title: 'name',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'controls values\nCallback fired when a button is pressed, depending on whether the type is \'radio\' or \'checkbox\', onChange will be called with the value or array of active values',
        title: 'onChange',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'type: \'checkbox\' | \'radio\'\ndefault: \'radio\'\t\n\nThe input type of the rendered buttons, determines the toggle behavior of the buttons',
        title: 'type',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'type: any\n\ncontrolled by: onChange, initial prop: defaultValue\nThe value, or array of values, of the active (pressed) buttons',
        title: 'value',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'ToggleButtonGroup',
    id: 'qZZRuaGGaZ4iMJXEsZ5W',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'ToggleButtonGroup',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/lib/Pager',
    componentProps: [
      {
        description: 'onSelect',
        title: 'onSelect',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: pager',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: '#Pager Pager, Pager.Item\nQuick previous and next links.\n\n#Centers by default\n\n<Pager>\n  <Pager.Item href="#">Previous</Pager.Item>{\' \'}\n  <Pager.Item href="#">Next</Pager.Item>\n</Pager>;\n\n#Aligned\nSet the previous or next prop to true, to align left or right.\n\n<Pager>\n  <Pager.Item previous href="#">\n    &larr; Previous Page\n  </Pager.Item>\n  <Pager.Item next href="#">\n    Next Page &rarr;\n  </Pager.Item>\n</Pager>;\n\n#Disabled\nSet the disabled prop to true to disable the link.\n\n<Pager>\n  <Pager.Item previous href="#">\n    &larr; Previous\n  </Pager.Item>\n  <Pager.Item disabled next href="#">\n    Next &rarr;\n  </Pager.Item>\n</Pager>;\n\n',
    id: 'qeziNddJ766T2Vks8YuR',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'Pager'
  },
  {
    children: [],
    closeTag: false,
    componentImport: '-',
    componentProps: [
      {
        description: 'Whether the view should be indicating an active refresh.',
        title: 'refreshing',
        propType: 'PropTypes.bool',
        propTypeIsrequired: true
      },
      {
        description: 'Called when the view starts refreshing.',
        title: 'onRefresh',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'The colors (at least one) that will be used to draw the refresh indicator.',
        title: 'colors',
        propType: 'PropTypes.array',
        propTypeIsrequired: false
      },
      {
        description: 'Whether the pull to refresh functionality is enabled.',
        title: 'enabled',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'The background color of the refresh indicator.',
        title: 'progressBackgroundColor',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Progress view top offset',
        title: 'progressViewOffset',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'Size of the refresh indicator, see RefreshControl.SIZE.\n\nType: enum(RefreshLayoutConsts.SIZE.DEFAULT, RefreshLayoutConsts.SIZE.LARGE)',
        title: 'size',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'The color of the refresh indicator.',
        title: 'tintColor',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'The name displayed under the refresh indicator.',
        title: 'name',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'name color.',
        title: 'nameColor',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'This component is used inside a ScrollView or ListView to add pull to refresh functionality. When the ScrollView is at scrollY: 0, swiping down triggers an onRefresh event.\n\nUsage example\nclass RefreshableList extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      refreshing: false,\n    };\n  }\n\n  _onRefresh = () => {\n    this.setState({refreshing: true});\n    fetchData().then(() => {\n      this.setState({refreshing: false});\n    });\n  }\n\n  render() {\n    return (\n      <ScrollView\n        refreshControl={\n          <RefreshControl\n            refreshing={this.state.refreshing}\n            onRefresh={this._onRefresh}\n          />\n        }\n        ...\n      />\n    );\n  }\n  ...\n}\nNote: refreshing is a controlled prop, this is why it needs to be set to true in the onRefresh function otherwise the refresh indicator will stop immediately.',
    id: 'qyPI4z1mNK2VUOTgQF5x',
    isDefault: true,
    provider: 'ReactNative',
    techno: 'React Native',
    title: 'RefreshControl',
    subtitle: 'ReactNative'
  },
  {
    children: [],
    closeTag: false,
    componentImport: 'react-bootstrap/lib/ModalHeader',
    componentProps: [
      {
        description: 'Provides an accessible label for the close button. It is used for Assistive Technology when the label text is not readable.\n\ndefault: \'Close\'',
        title: 'closeLabel',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Specify whether the Component should contain a close button\n\ndefault: false',
        title: 'closeButton',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'A Callback fired when the close button is clicked. If used directly inside a Modal component, the onHide will automatically be propagated up to the parent Modal onHide.',
        title: 'onHide',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \t\'modal-header\'',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Modal.Header',
    id: 'r1TLuQYfe7M3xTfZuOSi',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'Modal__Header'
  },
  {
    children: [],
    closeTag: true,
    componentImport: '-',
    componentProps: [
      {
        description: 'className',
        title: 'className',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'h3',
    id: 'rLNTUyLrmfjR0jQHLw1w',
    isDefault: false,
    provider: 'HTML',
    techno: 'React',
    title: 'h3',
    subtitle: 'HTML'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/Dropdown',
    componentProps: [
      {
        description: 'Align the menu to the right side of the Dropdown toggle',
        title: 'alignRight',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: <div>\t\n\nYou can use a custom element type for this component.',
        title: 'as',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'type: \'up\' | \'left\' | \'right\' | \'down\'\n\nDetermines the direction and location of the Menu in relation to it\'s Toggle.',
        title: 'drop',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Allow Dropdown to flip in case of an overlapping on the reference element. For more information refer to Popper.js\'s flip docs.',
        title: 'flip',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'A callback fired when a menu item is selected.\n\n(eventKey: any, event: Object) => any',
        title: 'onSelect',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'controls show\nA callback fired when the Dropdown wishes to change visibility. Called with the requested show value, the DOM event, and the source that fired it: \'click\',\'keydown\',\'rootClose\', or \'select\'.\n\nfunction(\n  isOpen: boolean,\n  event: SyntheticEvent,\n  metadata: {\n    source: \'select\' | \'click\' | \'rootClose\' | \'keydown\'\n  }\n): void',
        title: 'onToggle',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'controlled by: onToggle, initial prop: defaultShow\nWhether or not the Dropdown is visible.',
        title: 'show',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: \'dropdown\'\t\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Dropdowns\nToggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin\n\nOverview#\nDropdowns are toggleable, contextual overlays for displaying lists of links and more. Like overlays, Dropdowns are built using a third-party library Popper.js, which provides dynamic positioning and viewport detection.\n\nAccessibility#\nThe WAI ARIA standard defines a role="menu" widget, but it\'s very specific to a certain kind a menu. ARIA menus, must only contain role="menuitem", role="menuitemcheckbox", or role="menuitemradio".\n\nOn the other hand, Bootstrap\'s dropdowns are designed to more generic and application in a variety of situations. For this reason we don\'t automatically add the menu roles to the markup. We do implement some basic keyboard navigation, and if you do provide the "menu" role, react-bootstrap will do it\'s best to ensure the focus management is compliant with the ARIA authoring guidelines for menus.\n\nExamples#\nSingle button dropdowns#\nThe basic Dropdown is composed of a wrapping Dropdown and inner <DropdownMenu>, and <DropdownToggle>. By default the <DropdownToggle> will render a Button component and accepts all the \n\nDropdown>\n  <Dropdown.Toggle variant="success" id="dropdown-basic">\n    Dropdown Button\n  </Dropdown.Toggle>\n\n  <Dropdown.Menu>\n    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>\n    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>\n    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>\n  </Dropdown.Menu>\n</Dropdown>;\n\nSince the above is such a common configuration react-bootstrap provide the <DropdownButton> component to help reduce typing. Provide a name prop and some <DropdownItem>s and you\'re ready to go.\n\n<DropdownButton id="dropdown-basic-button" name="Dropdown button">\n  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>\n  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>\n  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>\n</DropdownButton>;\n\nDropdownButton will forward Button props to the underlying Toggle component\n\n<ButtonToolbar>\n  {[\'Primary\', \'Secondary\', \'Success\', \'Info\', \'Warning\', \'Danger\'].map(\n    variant => (\n      <DropdownButton\n        name={variant}\n        variant={variant.toLowerCase()}\n        id={`dropdown-variants-${variant}`}\n        key={variant}\n      >\n        <Dropdown.Item eventKey="1">Action</Dropdown.Item>\n        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>\n        <Dropdown.Item eventKey="3" active>\n          Active Item\n        </Dropdown.Item>\n        <Dropdown.Divider />\n        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>\n      </DropdownButton>\n    ),\n  )}\n</ButtonToolbar>;\n\nSplit button dropdowns#\nSimilarly, You create a split dropdown by combining the Dropdown components with another Button and a ButtonGroup.\n\n<Dropdown as={ButtonGroup}>\n  <Button variant="success">Split Button</Button>\n\n  <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />\n\n  <Dropdown.Menu>\n    <Dropdown.Item hred="#/action-1">Action</Dropdown.Item>\n    <Dropdown.Item hred="#/action-2">Another action</Dropdown.Item>\n    <Dropdown.Item hred="#/action-3">Something else</Dropdown.Item>\n  </Dropdown.Menu>\n</Dropdown>;\n\nAs with DropdownButton, SplitButton is provided as convenience component.\n\n<ButtonToolbar>\n  {[\'Primary\', \'Secondary\', \'Success\', \'Info\', \'Warning\', \'Danger\'].map(\n    variant => (\n      <SplitButton\n        name={variant}\n        variant={variant.toLowerCase()}\n        id={`dropdown-split-variants-${variant}`}\n        key={variant}\n      >\n        <Dropdown.Item eventKey="1">Action</Dropdown.Item>\n        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>\n        <Dropdown.Item eventKey="3" active>\n          Active Item\n        </Dropdown.Item>\n        <Dropdown.Divider />\n        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>\n      </SplitButton>\n    ),\n  )}\n</ButtonToolbar>;\n\nSizing#\nDropdowns work with buttons of all sizes.\n\n<>\n  <ButtonToolbar>\n    {[DropdownButton, SplitButton].map((DropdownType, idx) => (\n      <DropdownType\n        size="lg"\n        name="Drop small"\n        id={`dropdown-button-drop-${idx}`}\n        key={idx}\n      >\n        <Dropdown.Item eventKey="1">Action</Dropdown.Item>\n        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>\n        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>\n        <Dropdown.Divider />\n        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>\n      </DropdownType>\n    ))}\n  </ButtonToolbar>\n  <ButtonToolbar>\n    {[DropdownButton, SplitButton].map((DropdownType, idx) => (\n      <DropdownType\n        size="sm"\n        variant="secondary"\n        name="Drop small"\n        id={`dropdown-button-drop-${idx}`}\n        key={idx}\n      >\n        <Dropdown.Item eventKey="1">Action</Dropdown.Item>\n        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>\n        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>\n        <Dropdown.Divider />\n        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>\n      </DropdownType>\n    ))}\n  </ButtonToolbar>\n</>;\n\nDrop directions#\nTrigger dropdown menus above, below, left, or to the right of their toggle elements, with the drop prop.\n\n<>\n  <ButtonToolbar>\n    {[\'up\', \'down\', \'left\', \'right\'].map(direction => (\n      <DropdownButton\n        drop={direction}\n        variant="secondary"\n        name={` Drop ${direction} `}\n        id={`dropdown-button-drop-${direction}`}\n        key={direction}\n      >\n        <Dropdown.Item eventKey="1">Action</Dropdown.Item>\n        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>\n        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>\n        <Dropdown.Divider />\n        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>\n      </DropdownButton>\n    ))}\n  </ButtonToolbar>\n\n  <ButtonToolbar>\n    {[\'up\', \'down\', \'left\', \'right\'].map(direction => (\n      <SplitButton\n        drop={direction}\n        variant="secondary"\n        name={`Drop ${direction}`}\n        id={`dropdown-button-drop-${direction}`}\n        key={direction}\n      >\n        <Dropdown.Item eventKey="1">Action</Dropdown.Item>\n        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>\n        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>\n        <Dropdown.Divider />\n        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>\n      </SplitButton>\n    ))}\n  </ButtonToolbar>\n</>;\n\nDropdown items#\nHistorically dropdown menu contents had to be links, but that’s no longer the case with v4. Now you can optionally use <button> elements in your dropdowns instead of just <a>s.\n\n<DropdownButton id="dropdown-item-button" name="Dropdown button">\n  <Dropdown.Item as="button">Action</Dropdown.Item>\n  <Dropdown.Item as="button">Another action</Dropdown.Item>\n  <Dropdown.Item as="button">Something else</Dropdown.Item>\n</DropdownButton>;\n\nMenu alignment#\nBy default, a dropdown menu is aligned to the left, but you can switch it by passing the alignRight prop.\n\n<DropdownButton\n  alignRight\n  name="Dropdown right"\n  id="dropdown-menu-align-right"\n>\n  <Dropdown.Item eventKey="1">Action</Dropdown.Item>\n  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>\n  <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>\n  <Dropdown.Divider />\n  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>\n</DropdownButton>;\n\nMenu headers#\nAdd a header to label sections of actions.\n\n<Dropdown.Menu show>\n  <Dropdown.Header>Dropdown header</Dropdown.Header>\n  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>\n  <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>\n</Dropdown.Menu>;\n\nMenu dividers#\nSeparate groups of related menu items with a divider.\n\n<Dropdown.Menu show>\n  <Dropdown.Item eventKey="1">Action</Dropdown.Item>\n  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>\n  <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>\n  <Dropdown.Divider />\n  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>\n</Dropdown.Menu>;\n\nCustomization#\nIf the default handling of the dropdown menu and toggle components aren\'t to your liking, you can customize them, by using the more basic <Dropdown> Component to explicitly specify the Toggle and Menu components\n\n<ButtonToolbar>\n  <Dropdown>\n    <Dropdown.Toggle id="dropdown-custom-1">Pow! Zoom!</Dropdown.Toggle>\n    <Dropdown.Menu className="super-colors">\n      <Dropdown.Item eventKey="1">Action</Dropdown.Item>\n      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>\n      <Dropdown.Item eventKey="3" active>\n        Active Item\n      </Dropdown.Item>\n      <Dropdown.Divider />\n      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>\n    </Dropdown.Menu>\n  </Dropdown>\n\n  <Dropdown as={ButtonGroup}>\n    <Button variant="info">mix it up style-wise</Button>\n    <Dropdown.Toggle split variant="success" id="dropdown-custom-2" />\n    <Dropdown.Menu className="super-colors">\n      <Dropdown.Item eventKey="1">Action</Dropdown.Item>\n      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>\n      <Dropdown.Item eventKey="3" active>\n        Active Item\n      </Dropdown.Item>\n      <Dropdown.Divider />\n      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>\n    </Dropdown.Menu>\n  </Dropdown>\n</ButtonToolbar>;\n\nCustom Dropdown Components#\nFor those that want to customize everything, you can forgo the included Toggle and Menu components, and create your own. By providing custom components to the as prop, you can control how each component behaves. Custom toggle and menu components must be able to accept refs.\n\nclass CustomToggle extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleClick = this.handleClick.bind(this);\n  }\n\n  handleClick(e) {\n    e.preventDefault();\n\n    this.props.onClick(e);\n  }\n\n  render() {\n    return (\n      <a href="" onClick={this.handleClick}>\n        {this.props.children}\n      </a>\n    );\n  }\n}\n\nclass CustomMenu extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleChange = this.handleChange.bind(this);\n\n    this.state = { value: \'\' };\n  }\n\n  handleChange(e) {\n    this.setState({ value: e.target.value.toLowerCase().trim() });\n  }\n\n  render() {\n    const {\n      children,\n      style,\n      className,\n      \'aria-labelledby\': labeledBy,\n    } = this.props;\n\n    const { value } = this.state;\n\n    return (\n      <div style={style} className={className} aria-labelledby={labeledBy}>\n        <FormControl\n          autoFocus\n          className="mx-3 my-2 w-auto"\n          placeholder="Type to filter..."\n          onChange={this.handleChange}\n          value={value}\n        />\n        <ul className="list-unstyled">\n          {React.Children.toArray(children).filter(\n            child =>\n              !value || child.props.children.toLowerCase().startsWith(value),\n          )}\n        </ul>\n      </div>\n    );\n  }\n}\n\nrender(\n  <Dropdown>\n    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">\n      Custom toggle\n    </Dropdown.Toggle>\n\n    <Dropdown.Menu as={CustomMenu}>\n      <Dropdown.Item eventKey="1">Red</Dropdown.Item>\n      <Dropdown.Item eventKey="2">Blue</Dropdown.Item>\n      <Dropdown.Item eventKey="3" active>\n        Orange\n      </Dropdown.Item>\n      <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>\n    </Dropdown.Menu>\n  </Dropdown>,\n);\n\n',
    id: 'rv0AcK30JogsRLFLvUZ7',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Dropdown',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/Popover',
    componentProps: [
      {
        description: 'An Overlay injected set of props for positioning the popover arrow.\n\nThis is generally provided by the Overlay component positioning the popover',
        title: 'arrowProps',
        propType: 'PropTypes.shape({})',
        propTypeIsrequired: false
      },
      {
        description: 'required\t\ntype: string|number\n\nAn html id attribute, necessary for accessibility',
        title: 'id',
        propType: 'PropTypes.string',
        propTypeIsrequired: true
      },
      {
        description: 'type: \'auto-start\' | \'auto\' | \'auto-end\' | \'top-start\' | \'top\' | \'top-end\' | \'right-start\' | \'right\' | \'right-end\' | \'bottom-end\' | \'bottom\' | \'bottom-start\' | \'left-end\' | \'left\' | \'left-start\'\ndefault: \'right\'\t\n\nSets the direction the Popover is positioned towards.\n\nThis is generally provided by the Overlay component positioning the popover',
        title: 'placement',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'name content',
        title: 'name',
        propType: 'PropTypes.node',
        propTypeIsrequired: false
      },
      {
        description: 'default: \'popover\'\t\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Popovers#\nA popover component, like those found in iOS.\n\nExamples#\nconst popover = (\n  <Popover id="popover-basic" name="Popover right">\n    And here\'s some <strong>amazing</strong> content. It\'s very engaging. right?\n  </Popover>\n);\n\nconst Example = () => (\n  <OverlayTrigger trigger="click" placement="right" overlay={popover}>\n    <Button variant="success">Click me to see</Button>\n  </OverlayTrigger>\n);\n\nrender(<Example />);\n\nAs with <Tooltip>s, you can control the placement of the Popover.\n\n<ButtonToolbar>\n  {[\'top\', \'right\', \'bottom\', \'left\'].map(placement => (\n    <OverlayTrigger\n      trigger="click"\n      key={placement}\n      placement={placement}\n      overlay={\n        <Popover\n          id={`popover-positioned-${placement}`}\n          name={`Popover ${placement}`}\n        >\n          <strong>Holy guacamole!</strong> Check this info.\n        </Popover>\n      }\n    >\n      <Button variant="secondary">Popover on {placement}</Button>\n    </OverlayTrigger>\n  ))}\n</ButtonToolbar>;\n\nDisabled elements#\nElements with the disabled attribute aren’t interactive, meaning users cannot hover or click them to trigger a popover (or tooltip). As a workaround, you’ll want to trigger the overlay from a wrapper <div> or <span> and override the pointer-events on the disabled element.\n\n<OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}>\n  <span className="d-inline-block">\n    <Button disabled style={{ pointerEvents: \'none\' }}>\n      Disabled button\n    </Button>\n  </span>\n</OverlayTrigger>;\n\nChanging containers#\nYou can specify a container to control the DOM element the overlay is appended to. This is especially useful when styles conflict with your Overlay\'s.\n\nclass Example extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleClick = ({ target }) => {\n      this.setState(s => ({ target, show: !s.show }));\n    };\n\n    this.state = {\n      show: false,\n    };\n  }\n\n  render() {\n    return (\n      <ButtonToolbar>\n        <Button onClick={this.handleClick}>Holy guacamole!</Button>\n\n        <Overlay\n          show={this.state.show}\n          target={this.state.target}\n          placement="bottom"\n          container={this}\n          containerPadding={20}\n        >\n          <Popover id="popover-contained" name="Popover bottom">\n            <strong>Holy guacamole!</strong> Check this info.\n          </Popover>\n        </Overlay>\n      </ButtonToolbar>\n    );\n  }\n}\n\nrender(<Example />);\n\nUpdating position dynamically#\nSince we can\'t know every time your overlay changes size, to reposition it, you need to take manual action if you want to update the position of an Overlay in response to a change.\n\nFor this, the Overlay component also injects a scheduleUpdate() method that an overlay component can use to reposition itself.\n\nclass UpdatingPopover extends React.Component {\n  componentDidUpdate(prevProps) {\n    if (prevProps.children !== this.props.children) {\n      console.log(\'updating!\');\n      this.props.scheduleUpdate();\n    }\n  }\n\n  render() {\n    return <Popover {...this.props} />;\n  }\n}\n\nconst longContent = `\n  Very long\n  Multiline content\n  that is engaging and what-not\n`;\nconst shortContent = \'Short and sweet!\';\n\nclass Example extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n    this.state = { content: shortContent };\n  }\n\n  componentDidMount() {\n    this.timer = setInterval(() => {\n      this.setState(state => ({\n        content: state.content === shortContent ? longContent : shortContent,\n      }));\n    }, 3000);\n  }\n\n  render() {\n    const { content } = this.state;\n\n    return (\n      <OverlayTrigger\n        trigger="click"\n        overlay={\n          <UpdatingPopover id="popover-contained">{content}</UpdatingPopover>\n        }\n      >\n        <Button onClick={this.handleClick}>Holy guacamole!</Button>\n      </OverlayTrigger>\n    );\n  }\n}\n\nrender(<Example />);\n',
    id: 'sDey4hyXFseA8tua2wLA',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    subtitle: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Popover'
  },
  {
    children: [],
    closeTag: false,
    componentImport: '-',
    componentProps: [
      {
        description: 'If the transition between status bar property changes should be animated. Supported for backgroundColor, barStyle and hidden.',
        title: 'animated',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Sets the color of the status bar text.\n\nType: enum(\'default\', \'light-content\', \'dark-content\')',
        title: 'barStyle',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'If the status bar is hidden.',
        title: 'hidden',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'The background color of the status bar.',
        title: 'backgroundColor',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'If the status bar is translucent. When translucent is set to true, the app will draw under the status bar. This is useful when using a semi transparent status bar color.',
        title: 'translucent',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'If the network activity indicator should be visible.',
        title: 'networkActivityIndicatorVisible',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'The transition effect when showing and hiding the status bar using the hidden prop. Defaults to \'fade\'.\n\nenum(\'fade\', \'slide\')',
        title: 'showHideTransition',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      }
    ],
    description: 'Component to control the app status bar.\n\nUsage with Navigator\nIt is possible to have multiple StatusBar components mounted at the same time. The props will be merged in the order the StatusBar components were mounted.\n\n <View>\n   <StatusBar\n     backgroundColor="blue"\n     barStyle="light-content"\n   />\n   <View>\n     <StatusBar hidden={route.statusBarHidden} />\n     ...\n   </View>\n </View>\nImperative API\nFor cases where using a component is not ideal, there is also an imperative API exposed as static functions on the component. It is however not recommended to use the static API and the component for the same prop because any value set by the static API will get overriden by the one set by the component in the next render.\n\nConstants\ncurrentHeight (Android only) The height of the status bar.',
    id: 'sMUag98N1CJb0jqRnVPI',
    isDefault: true,
    provider: 'ReactNative',
    techno: 'React Native',
    title: 'StatusBar',
    subtitle: 'ReactNative'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/Nav',
    componentProps: [
      {
        description: 'Marks the NavItem with a matching eventKey (or href if present) as active.',
        title: 'activeKey',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'default: <div>\t\n\nYou can use a custom element type for this component.',
        title: 'as',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'default: false\t\n\nHave all NavItems to proportionatly fill all available width.',
        title: 'fill',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: false\n\t\nHave all NavItems to evenly fill all available width.',
        title: 'justify',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Apply styling an alignment for use in a Navbar. This prop will be set automatically when the Nav is used inside a Navbar.',
        title: 'navbar',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'A callback fired when a NavItem is selected.\n\nfunction (\n Any eventKey,\n SyntheticEvent event?\n)',
        title: 'onSelect',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'ARIA role for the Nav, in the context of a TabContainer, the default will be set to "tablist", but can be overridden by the Nav when set explicitly.\n\nWhen the role is "tablist", NavLink focus is managed according to the ARIA authoring practices for tabs: https://www.w3.org/TR/2013/WD-wai-aria-practices-20130307/#tabpanel',
        title: 'role',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'type: \'tabs\' | \'pills\'\n\nThe visual variant of the nav items.',
        title: 'variant',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'default: \'nav\'\t\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Base Nav\nNavigation bits in Bootstrap all share a general Nav component and styles. Swap variants to switch between each style. The base Nav component is built with flexbox and provide a strong foundation for building all types of navigation components.\n\n<Nav\n  activeKey="/home"\n  onSelect={selectedKey => alert(`selected ${selectedKey}`)}\n>\n  <Nav.Item>\n    <Nav.Link href="/home">Active</Nav.Link>\n  </Nav.Item>\n  <Nav.Item>\n    <Nav.Link eventKey="link-1">Link</Nav.Link>\n  </Nav.Item>\n  <Nav.Item>\n    <Nav.Link eventKey="link-2">Link</Nav.Link>\n  </Nav.Item>\n  <Nav.Item>\n    <Nav.Link eventKey="disabled" disabled>\n      Disabled\n    </Nav.Link>\n  </Nav.Item>\n</Nav>;\n\n<Nav> markup is very flexible and styling is controlled via classes so you can use whatever elements you like to build your navs. By default <Nav> and <Nav.Item> both render <div>s instead of <ul> and <li> elements respectively. This because it\'s possible (and common) to leave off the <Nav.Item>\'s and render a <Nav.Link> directly, which would create invalid markup by default (ul > a).\n\nWhen a <ul> is appropriate you can render one via the as prop; be sure to also set your items to <li> as well!\n\n<Nav defaultActiveKey="/home" as="ul">\n  <Nav.Item as="li">\n    <Nav.Link href="/home">Active</Nav.Link>\n  </Nav.Item>\n  <Nav.Item as="li">\n    <Nav.Link eventKey="link-1">Link</Nav.Link>\n  </Nav.Item>\n  <Nav.Item as="li">\n    <Nav.Link eventKey="link-2">Link</Nav.Link>\n  </Nav.Item>\n</Nav>;\n\nAlignment and orientation#\nYou can control the the direction and orientation of the Nav by making use of the flexbox layout utility classes. By default, navs are left-aligned, but that is easily changed to center or right-aligned.\n\n<>\n  <Nav className="justify-content-center" activeKey="/home">\n    <Nav.Item>\n      <Nav.Link href="/home">Active</Nav.Link>\n    </Nav.Item>\n    <Nav.Item>\n      <Nav.Link eventKey="link-1">Link</Nav.Link>\n    </Nav.Item>\n    <Nav.Item>\n      <Nav.Link eventKey="link-2">Link</Nav.Link>\n    </Nav.Item>\n    <Nav.Item>\n      <Nav.Link eventKey="disabled" disabled>\n        Disabled\n      </Nav.Link>\n    </Nav.Item>\n  </Nav>\n  <p className="text-center mt-4 mb-4">Or right-aligned</p>\n  <Nav className="justify-content-end" activeKey="/home">\n    <Nav.Item>\n      <Nav.Link href="/home">Active</Nav.Link>\n    </Nav.Item>\n    <Nav.Item>\n      <Nav.Link eventKey="link-1">Link</Nav.Link>\n    </Nav.Item>\n    <Nav.Item>\n      <Nav.Link eventKey="link-2">Link</Nav.Link>\n    </Nav.Item>\n    <Nav.Item>\n      <Nav.Link eventKey="disabled" disabled>\n        Disabled\n      </Nav.Link>\n    </Nav.Item>\n  </Nav>\n</>;\n\nVertical#\nCreate stacked navs by changing the flex item direction with the .flex-column class, or your own css. You can even use the responsive versions to stack in some viewports but not others (e.g. .flex-sm-column).\n\n<Nav defaultActiveKey="/home" className="flex-column">\n  <Nav.Link href="/home">Active</Nav.Link>\n  <Nav.Link eventKey="link-1">Link</Nav.Link>\n  <Nav.Link eventKey="link-2">Link</Nav.Link>\n  <Nav.Link eventKey="disabled" disabled>\n    Disabled\n  </Nav.Link>\n</Nav>;\n\nTabs#\nVisually represent nav items as "tabs". This style pairs nicely with tabbable regions created by our Tab components\n\n<Nav variant="tabs" defaultActiveKey="/home">\n  <Nav.Item>\n    <Nav.Link href="/home">Active</Nav.Link>\n  </Nav.Item>\n  <Nav.Item>\n    <Nav.Link eventKey="link-1">Option 2</Nav.Link>\n  </Nav.Item>\n  <Nav.Item>\n    <Nav.Link eventKey="disabled" disabled>\n      Disabled\n    </Nav.Link>\n  </Nav.Item>\n</Nav>;\n\nPills#\nAn alternative visual variant.\n\n<Nav variant="pills" defaultActiveKey="/home">\n  <Nav.Item>\n    <Nav.Link href="/home">Active</Nav.Link>\n  </Nav.Item>\n  <Nav.Item>\n    <Nav.Link eventKey="link-1">Option 2</Nav.Link>\n  </Nav.Item>\n  <Nav.Item>\n    <Nav.Link eventKey="disabled" disabled>\n      Disabled\n    </Nav.Link>\n  </Nav.Item>\n</Nav>;\n\nFill and justify#\nForce the contents of your nav to extend the full available width. To proportionately fill the space use fill. Notice that the nav is the entire width but each nav item is a different size.\n\n<Nav fill variant="tabs" defaultActiveKey="/home">\n  <Nav.Item>\n    <Nav.Link href="/home">Active</Nav.Link>\n  </Nav.Item>\n  <Nav.Item>\n    <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>\n  </Nav.Item>\n  <Nav.Item>\n    <Nav.Link eventKey="link-2">Link</Nav.Link>\n  </Nav.Item>\n  <Nav.Item>\n    <Nav.Link eventKey="disabled" disabled>\n      Disabled\n    </Nav.Link>\n  </Nav.Item>\n</Nav>;\n\nIf you want each NavItem to be the same size use justify.\n\n<Nav justify variant="tabs" defaultActiveKey="/home">\n  <Nav.Item>\n    <Nav.Link href="/home">Active</Nav.Link>\n  </Nav.Item>\n  <Nav.Item>\n    <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>\n  </Nav.Item>\n  <Nav.Item>\n    <Nav.Link eventKey="link-2">Link</Nav.Link>\n  </Nav.Item>\n  <Nav.Item>\n    <Nav.Link eventKey="disabled" disabled>\n      Disabled\n    </Nav.Link>\n  </Nav.Item>\n</Nav>;\n\nUsing dropdowns#\nYou can mix and match the Dropdown components with the NavLink and NavItem components to create a Dropdown that plays well in a Nav component\n\n<Dropdown as={NavItem}>\n  <Dropdown.Toggle as={NavLink}>Click to see more…</Dropdown.Toggle>\n  <Dropdown.Menu>\n    <Dropdown.Item>Hello there!</Dropdown.Item>\n  </Dropdown.Menu>\n</Dropdown>;\n\nThe above demostrates how flexible the component model can be. But if you didn\'t want to roll your own versions we\'ve included a straight-forward <NavDropdown> that works for most cases.\n\nclass NavDropdownExample extends React.Component {\n  handleSelect(eventKey) {\n    alert(`selected ${eventKey}`);\n  }\n\n  render() {\n    return (\n      <Nav variant="pills" activeKey="1" onSelect={k => this.handleSelect(k)}>\n        <Nav.Item>\n          <Nav.Link eventKey="1" href="#/home">\n            NavLink 1 content\n          </Nav.Link>\n        </Nav.Item>\n        <Nav.Item>\n          <Nav.Link eventKey="2" name="Item">\n            NavLink 2 content\n          </Nav.Link>\n        </Nav.Item>\n        <Nav.Item>\n          <Nav.Link eventKey="3" disabled>\n            NavLink 3 content\n          </Nav.Link>\n        </Nav.Item>\n        <NavDropdown name="Dropdown" id="nav-dropdown">\n          <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>\n          <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>\n          <NavDropdown.Item eventKey="4.3">\n            Something else here\n          </NavDropdown.Item>\n          <NavDropdown.Divider />\n          <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>\n        </NavDropdown>\n      </Nav>\n    );\n  }\n}\n\nrender(<NavDropdownExample />);\n\n',
    id: 'sO95FizkxTwJjnh3pkDI',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Nav',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    closeTag: true,
    componentImport: 'react-bootstrap/lib/Panel',
    componentProps: [
      {
        description: 'Controls the collapsed/expanded state ofthe Panel. Requires a Panel.Collapse or <Panel.Body collapsible> child component in order to actually animate out or in.',
        title: 'expanded',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'A callback fired when the collapse state changes.',
        title: 'onToggle',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'A unique identifier for the Component, the eventKey makes it distinguishable from others in a set. Similar to React\'s key prop, in that it only needs to be unique amoungst the Components siblings, not globally.',
        title: 'eventKey',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'An HTML id attribute uniquely identifying the Panel component.',
        title: 'id',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: '#Panels Panel, PanelGroup, Accordion\n#Basic example\nBy default, all the <Panel /> does is apply a basic border and padding to contain some content.\n\nYou can pass on any additional properties you need, e.g. a custom onClick handler, as it is shown in the example code. They all will apply to the wrapper div element.\n\nfunction handleClick() {\n  alert(\'You have clicked on me\');\n}\n\nconst panelInstance = (\n  <Panel onClick={handleClick}>\n    <Panel.Body>Basic panel example</Panel.Body>\n  </Panel>\n);\n\nrender(panelInstance);\n\n#Panel with heading\nEasily add a heading container to your panel with the <Panel.Heading> and <Panel.name> sub-components.\n\n<div>\n  <Panel>\n    <Panel.Heading>Panel heading without a name</Panel.Heading>\n    <Panel.Body>Panel content</Panel.Body>\n  </Panel>\n  <Panel>\n    <Panel.Heading>\n      <Panel.name componentClass="h3">Panel heading with a name</Panel.name>\n    </Panel.Heading>\n    <Panel.Body>Panel content</Panel.Body>\n  </Panel>\n</div>;\n\nPanel with footer\nPass buttons or secondary text in the <Panel.Footer> sub-component. Note that panel footers do not inherit colors and borders when using contextual variations as they are not meant to be in the foreground.\n\n<Panel>\n  <Panel.Body>Panel content</Panel.Body>\n  <Panel.Footer>Panel footer</Panel.Footer>\n</Panel>;\n\n#Contextual alternatives\nLike other components, easily make a panel more meaningful to a particular context by adding a bsStyle prop.\n\n<div>\n  <Panel bsStyle="primary">\n    <Panel.Heading>\n      <Panel.name componentClass="h3">Panel heading</Panel.name>\n    </Panel.Heading>\n    <Panel.Body>Panel content</Panel.Body>\n  </Panel>\n\n  <Panel bsStyle="success">\n    <Panel.Heading>\n      <Panel.name componentClass="h3">Panel heading</Panel.name>\n    </Panel.Heading>\n    <Panel.Body>Panel content</Panel.Body>\n  </Panel>\n\n  <Panel bsStyle="info">\n    <Panel.Heading>\n      <Panel.name componentClass="h3">Panel heading</Panel.name>\n    </Panel.Heading>\n    <Panel.Body>Panel content</Panel.Body>\n  </Panel>\n\n  <Panel bsStyle="warning">\n    <Panel.Heading>\n      <Panel.name componentClass="h3">Panel heading</Panel.name>\n    </Panel.Heading>\n    <Panel.Body>Panel content</Panel.Body>\n  </Panel>\n\n  <Panel bsStyle="danger">\n    <Panel.Heading>\n      <Panel.name componentClass="h3">Panel heading</Panel.name>\n    </Panel.Heading>\n    <Panel.Body>Panel content</Panel.Body>\n  </Panel>\n</div>;\n\n#With tables and list groups\nAdd any <Table />, <ListGroup /> to a panel for a seamless integration. Mix and match with Panel.Body as needed.\n\n<Panel>\n  <Panel.Heading>Panel heading</Panel.Heading>\n  <Panel.Body>Some default panel content here.</Panel.Body>\n  <ListGroup>\n    <ListGroupItem>Item 1</ListGroupItem>\n    <ListGroupItem>Item 2</ListGroupItem>\n    <ListGroupItem>&hellip;</ListGroupItem>\n  </ListGroup>\n  <Panel.Body>Some more panel content here.</Panel.Body>\n</Panel>;\n\n#Collapsible Panel\nclass Example extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.state = {\n      open: true\n    };\n  }\n\n  render() {\n    return (\n      <div>\n        <Button onClick={() => this.setState({ open: !this.state.open })}>\n          Click to toggle\n        </Button>\n        <br />\n        <Panel id="collapsible-panel-example-1" expanded={this.state.open}>\n          <Panel.Collapse>\n            <Panel.Body>\n              Anim pariatur cliche reprehenderit, enim eiusmod high life\n              accusamus terry richardson ad squid. Nihil anim keffiyeh\n              helvetica, craft beer labore wes anderson cred nesciunt sapiente\n              ea proident.\n            </Panel.Body>\n          </Panel.Collapse>\n        </Panel>\n\n        <p>You can also make the Panel heading toggle the collapse.</p>\n\n        <Panel id="collapsible-panel-example-2" defaultExpanded>\n          <Panel.Heading>\n            <Panel.name toggle>\n              name that functions as a collapse toggle\n            </Panel.name>\n          </Panel.Heading>\n          <Panel.Collapse>\n            <Panel.Body>\n              Anim pariatur cliche reprehenderit, enim eiusmod high life\n              accusamus terry richardson ad squid. Nihil anim keffiyeh\n              helvetica, craft beer labore wes anderson cred nesciunt sapiente\n              ea proident.\n            </Panel.Body>\n          </Panel.Collapse>\n        </Panel>\n\n        <p>Or use a Panel.Toggle component to customize</p>\n\n        <Panel id="collapsible-panel-example-3" defaultExpanded>\n          <Panel.Heading>\n            <Panel.name>name that functions as a collapse toggle</Panel.name>\n            <Panel.Toggle componentClass="a">My own toggle</Panel.Toggle>\n          </Panel.Heading>\n          <Panel.Collapse>\n            <Panel.Body>\n              Anim pariatur cliche reprehenderit, enim eiusmod high life\n              accusamus terry richardson ad squid. Nihil anim keffiyeh\n              helvetica, craft beer labore wes anderson cred nesciunt sapiente\n              ea proident.\n            </Panel.Body>\n          </Panel.Collapse>\n        </Panel>\n      </div>\n    );\n  }\n}\n\nrender(<Example />);\n\n#Controlled PanelGroups\nPanelGroups can be controlled by a parent component. The activeKey prop dictates which panel is open.\n\nclass ControlledPanelGroup extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleSelect = this.handleSelect.bind(this);\n\n    this.state = {\n      activeKey: \'1\'\n    };\n  }\n\n  handleSelect(activeKey) {\n    this.setState({ activeKey });\n  }\n\n  render() {\n    return (\n      <PanelGroup\n        accordion\n        id="accordion-controlled-example"\n        activeKey={this.state.activeKey}\n        onSelect={this.handleSelect}\n      >\n        <Panel eventKey="1">\n          <Panel.Heading>\n            <Panel.name toggle>Panel heading 1</Panel.name>\n          </Panel.Heading>\n          <Panel.Body collapsible>Panel content 1</Panel.Body>\n        </Panel>\n        <Panel eventKey="2">\n          <Panel.Heading>\n            <Panel.name toggle>Panel heading 2</Panel.name>\n          </Panel.Heading>\n          <Panel.Body collapsible>Panel content 2</Panel.Body>\n        </Panel>\n      </PanelGroup>\n    );\n  }\n}\n\nrender(<ControlledPanelGroup />);\n\n#Uncontrolled PanelGroups\nPanelGroups can also be uncontrolled where they manage their own state. The defaultActiveKey prop dictates which panel is open when initially.\n\n<PanelGroup accordion id="accordion-uncontrolled-example" defaultActiveKey="2">\n  <Panel eventKey="1">\n    <Panel.Heading>\n      <Panel.name toggle>Panel heading 1</Panel.name>\n    </Panel.Heading>\n    <Panel.Body collapsible>Panel content 1</Panel.Body>\n  </Panel>\n  <Panel eventKey="2">\n    <Panel.Heading>\n      <Panel.name toggle>Panel heading 2</Panel.name>\n    </Panel.Heading>\n    <Panel.Body collapsible>Panel content 2</Panel.Body>\n  </Panel>\n</PanelGroup>;\n\n#Accordions\nUse <PanelGroup accordion /> to create an accordion style collapsing Panel set\n\n<PanelGroup accordion id="accordion-example">\n  <Panel eventKey="1">\n    <Panel.Heading>\n      <Panel.name toggle>Collapsible Group Item #1</Panel.name>\n    </Panel.Heading>\n    <Panel.Body collapsible>\n      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry\n      richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard\n      dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf\n      moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla\n      assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore\n      wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur\n      butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim\n      aesthetic synth nesciunt you probably haven\'t heard of them accusamus\n      labore sustainable VHS.\n    </Panel.Body>\n  </Panel>\n  <Panel eventKey="2">\n    <Panel.Heading>\n      <Panel.name toggle>Collapsible Group Item #2</Panel.name>\n    </Panel.Heading>\n    <Panel.Body collapsible>\n      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry\n      richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard\n      dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf\n      moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla\n      assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore\n      wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur\n      butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim\n      aesthetic synth nesciunt you probably haven\'t heard of them accusamus\n      labore sustainable VHS.\n    </Panel.Body>\n  </Panel>\n  <Panel eventKey="3">\n    <Panel.Heading>\n      <Panel.name toggle>Collapsible Group Item #3</Panel.name>\n    </Panel.Heading>\n    <Panel.Body collapsible>\n      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry\n      richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard\n      dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf\n      moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla\n      assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore\n      wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur\n      butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim\n      aesthetic synth nesciunt you probably haven\'t heard of them accusamus\n      labore sustainable VHS.\n    </Panel.Body>\n  </Panel>\n</PanelGroup>;\n',
    id: 'sTpjWLBEA4AnGgEFzNV7',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'Panel'
  },
  {
    children: [],
    closeTag: false,
    componentImport: '-',
    componentProps: [
      {
        description: 'Callback for when an item is selected. This is called with the following parameters:\n\nitemValue: the value prop of the item that was selected\nitemPosition: the index of the selected item in this picker',
        title: 'onValueChange',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Value matching value of one of the items. Can be a string or an integer.',
        title: 'selectedValue',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'style',
        title: 'style',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Used to locate this view in end-to-end tests.',
        title: 'testID',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'If set to false, the picker will be disabled, i.e. the user will not be able to make a selection.',
        title: 'enabled',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'On Android, specifies how to display the selection items when the user taps on the picker:\n\n\'dialog\': Show a modal dialog. This is the default.\n\'dropdown\': Shows a dropdown anchored to the picker view\n\nType: enum(\'dialog\', \'dropdown\')',
        title: 'mode',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Prompt string for this picker, used on Android in dialog mode as the name of the dialog.',
        title: 'prompt',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Style to apply to each of the item labels.',
        title: 'itemStyle',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Renders the native picker component on iOS and Android. Example:\n\n<Picker\n  selectedValue={this.state.language}\n  style={{ height: 50, width: 100 }}\n  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>\n  <Picker.Item label="Java" value="java" />\n  <Picker.Item label="JavaScript" value="js" />\n</Picker>',
    id: 'sbS4hHTWOyNdcmPn95w7',
    isDefault: true,
    provider: 'ReactNative',
    techno: 'React Native',
    title: 'Picker',
    subtitle: 'ReactNative'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/SplitButton',
    componentProps: [
      {
        description: 'Disables both Buttons',
        title: 'disabled',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'An href passed to the non-toggle Button',
        title: 'href',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'required\t\ntype" string|number\n\nAn html id attribute for the Toggle button, necessary for assistive technologies, such as screen readers.',
        title: 'id',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'An ARIA accessible role applied to the Menu component. When set to \'menu\', The dropdown',
        title: 'menuRole',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'An onClick handler passed to the non-toggle Button',
        title: 'onClick',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Which event when fired outside the component will cause it to be closed.\n\nsee DropdownMenu for more details',
        title: 'rootCloseEvent',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'An anchor target passed to the non-toggle Button',
        title: 'target',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'required\t\ntype: node\n\nThe content of the non-toggle Button.',
        title: 'name',
        propType: 'PropTypes.node',
        propTypeIsrequired: true
      },
      {
        description: 'default: \'Toggle dropdown\'\t\n\nAccessible label for the toggle; the value of name if not specified.',
        title: 'toggleLabel',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'SplitButton',
    id: 'ssISkM7bkh4PpFmsp4j1',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'SplitButton',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    closeTag: false,
    componentImport: 'react-bootstrap/lib/NavbarBrand',
    componentProps: [],
    description: 'Navbar.Brand',
    id: 't2FggUXxb7HCS5s6Sy0d',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'Navbar__Brand'
  },
  {
    children: [],
    closeTag: true,
    componentImport: '-',
    componentProps: [
      {
        description: 'className',
        title: 'className',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'A generic container for a text or inline HTML. Lending no additional meaning, it is typically used as scaffolding to hang CSS on or for JavaScript to reach out to.',
    id: 't4AcKwRBQ6slXwKtd1Af',
    isDefault: false,
    provider: 'HTML',
    techno: 'React',
    title: 'span',
    subtitle: 'HTML'
  },
  {
    children: [],
    closeTag: true,
    componentImport: 'react-bootstrap/lib/Popover',
    componentProps: [
      {
        description: '\t\nAn html id attribute, necessary for accessibility',
        title: 'id',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Sets the direction the Popover is positioned towards.\n\ndefault: \'right\'\n\none of: \'top\', \'right\', \'bottom\', \'left\'',
        title: 'placement',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'The "top" position value for the Popover.',
        title: 'positionTop',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'The "left" position value for the Popover.',
        title: 'positionLeft',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'The "top" position value for the Popover arrow.',
        title: 'arrowOffsetTop',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'The "left" position value for the Popover arrow.',
        title: 'arrowOffsetLeft',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'name content',
        title: 'name',
        propType: 'PropTypes.node',
        propTypeIsrequired: false
      },
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'popover\'',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: '#Popovers Popover\nThe Popover, offers a more robust alternative to the Tooltip for displaying overlays of content.\n\n<div style={{ height: 120 }}>\n  <Popover\n    id="popover-basic"\n    placement="right"\n    positionLeft={200}\n    positionTop={50}\n    name="Popover right"\n  >\n    And here\'s some <strong>amazing</strong> content. It\'s very engaging. right?\n  </Popover>\n</div>;\n\n#With OverlayTrigger\nThe Popover component, like the Tooltip can be used with an OverlayTrigger Component, and positioned around it.\n\nconst popoverLeft = (\n  <Popover id="popover-positioned-left" name="Popover left">\n    <strong>Holy guacamole!</strong> Check this info.\n  </Popover>\n);\n\nconst popoverTop = (\n  <Popover id="popover-positioned-top" name="Popover top">\n    <strong>Holy guacamole!</strong> Check this info.\n  </Popover>\n);\n\nconst popoverBottom = (\n  <Popover id="popover-positioned-bottom" name="Popover bottom">\n    <strong>Holy guacamole!</strong> Check this info.\n  </Popover>\n);\n\nconst popoverRight = (\n  <Popover id="popover-positioned-right" name="Popover right">\n    <strong>Holy guacamole!</strong> Check this info.\n  </Popover>\n);\n\nrender(\n  <ButtonToolbar>\n    <OverlayTrigger trigger="click" placement="left" overlay={popoverLeft}>\n      <Button>Holy guacamole!</Button>\n    </OverlayTrigger>\n    <OverlayTrigger trigger="click" placement="top" overlay={popoverTop}>\n      <Button>Holy guacamole!</Button>\n    </OverlayTrigger>\n    <OverlayTrigger trigger="click" placement="bottom" overlay={popoverBottom}>\n      <Button>Holy guacamole!</Button>\n    </OverlayTrigger>\n    <OverlayTrigger trigger="click" placement="right" overlay={popoverRight}>\n      <Button>Holy guacamole!</Button>\n    </OverlayTrigger>\n  </ButtonToolbar>\n);\n\n#Trigger behaviors\nIt\'s inadvisable to use "hover" or "focus" triggers for popovers, because they have poor accessibility from keyboard and on mobile devices.\n\nconst popoverClick = (\n  <Popover id="popover-trigger-click" name="Popover bottom">\n    <strong>Holy guacamole!</strong> Check this info.\n  </Popover>\n);\n\nconst popoverHoverFocus = (\n  <Popover id="popover-trigger-hover-focus" name="Popover bottom">\n    <strong>Holy guacamole!</strong> Check this info.\n  </Popover>\n);\n\nconst popoverFocus = (\n  <Popover id="popover-trigger-focus" name="Popover bottom">\n    <strong>Holy guacamole!</strong> Check this info.\n  </Popover>\n);\n\nconst popoverClickRootClose = (\n  <Popover id="popover-trigger-click-root-close" name="Popover bottom">\n    <strong>Holy guacamole!</strong> Check this info.\n  </Popover>\n);\n\nrender(\n  <ButtonToolbar>\n    <OverlayTrigger trigger="click" placement="bottom" overlay={popoverClick}>\n      <Button>Click</Button>\n    </OverlayTrigger>\n    <OverlayTrigger\n      trigger={[\'hover\', \'focus\']}\n      placement="bottom"\n      overlay={popoverHoverFocus}\n    >\n      <Button>Hover + Focus</Button>\n    </OverlayTrigger>\n    <OverlayTrigger trigger="focus" placement="bottom" overlay={popoverFocus}>\n      <Button>Focus</Button>\n    </OverlayTrigger>\n    <OverlayTrigger\n      trigger="click"\n      rootClose\n      placement="bottom"\n      overlay={popoverClickRootClose}\n    >\n      <Button>Click w/rootClose</Button>\n    </OverlayTrigger>\n  </ButtonToolbar>\n);\n\n#Popover component in container\nSpecify container to control the DOM element to which to append the overlay. This element must be a positioned element to allow correctly positioning the overlay.\n\nclass Example extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleClick = e => {\n      this.setState({ target: e.target, show: !this.state.show });\n    };\n\n    this.state = {\n      show: false\n    };\n  }\n\n  render() {\n    return (\n      <ButtonToolbar>\n        <Button onClick={this.handleClick}>Holy guacamole!</Button>\n\n        <Overlay\n          show={this.state.show}\n          target={this.state.target}\n          placement="bottom"\n          container={this}\n          containerPadding={20}\n        >\n          <Popover id="popover-contained" name="Popover bottom">\n            <strong>Holy guacamole!</strong> Check this info.\n          </Popover>\n        </Overlay>\n      </ButtonToolbar>\n    );\n  }\n}\n\nrender(<Example />);\n\n#Positioned popover components in scrolling container\n\nconst popoverLeft = (\n  <Popover id="popover-positioned-scrolling-left" name="Popover left">\n    <strong>Holy guacamole!</strong> Check this info.\n  </Popover>\n);\n\nconst popoverTop = (\n  <Popover id="popover-positioned-scrolling-top" name="Popover top">\n    <strong>Holy guacamole!</strong> Check this info.\n  </Popover>\n);\n\nconst popoverBottom = (\n  <Popover id="popover-positioned-scrolling-bottom" name="Popover bottom">\n    <strong>Holy guacamole!</strong> Check this info.\n  </Popover>\n);\n\nconst popoverRight = (\n  <Popover id="popover-positioned-scrolling-right" name="Popover right">\n    <strong>Holy guacamole!</strong> Check this info.\n  </Popover>\n);\n\nclass Positioner extends React.Component {\n  render() {\n    return (\n      <ButtonToolbar style={{ padding: \'100px 0\' }}>\n        <OverlayTrigger\n          container={this}\n          trigger="click"\n          placement="left"\n          overlay={popoverLeft}\n        >\n          <Button>Holy guacamole!</Button>\n        </OverlayTrigger>\n        <OverlayTrigger\n          container={this}\n          trigger="click"\n          placement="top"\n          overlay={popoverTop}\n        >\n          <Button>Holy guacamole!</Button>\n        </OverlayTrigger>\n        <OverlayTrigger\n          container={this}\n          trigger="click"\n          placement="bottom"\n          overlay={popoverBottom}\n        >\n          <Button>Holy guacamole!</Button>\n        </OverlayTrigger>\n        <OverlayTrigger\n          container={this}\n          trigger="click"\n          placement="right"\n          overlay={popoverRight}\n        >\n          <Button>Holy guacamole!</Button>\n        </OverlayTrigger>\n      </ButtonToolbar>\n    );\n  }\n}\n\nrender(<Positioner />);',
    id: 'tFqEwwd9iDvgH55hVkdT',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'Popover'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/Modalname',
    componentProps: [
      {
        description: 'default: <divWithClassName(h4)>\t\n\nYou can use a custom element type for this component.',
        title: 'as',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'Change the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Modalname',
    id: 'tN5Su4cTRNz2UaBzuWtv',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Modalname',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    closeTag: false,
    componentImport: '-',
    componentProps: [
      {
        description: '(info: any) => ?React.Element<any>\nTakes an item from data and renders it into the list',
        title: 'renderItem',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'The default accessor functions assume this is an array of objects with shape {key: string} but you can override getItem, getItemCount, and keyExtractor to handle any type of index-based data.',
        title: 'data',
        propType: 'PropTypes.array',
        propTypeIsrequired: true
      },
      {
        description: '(data: any, index: number) => object;\nA generic accessor for extracting an item from any sort of data blob.',
        title: 'getItem',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: '(data: any) => number;\nDetermines how many items are in the data blob.',
        title: 'getItemCount',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'debug will turn on extra logging and visual overlays to aid with debugging both usage and implementation, but with a significant perf hit.',
        title: 'debug',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'A marker property for telling the list to re-render (since it implements PureComponent). If any of your renderItem, Header, Footer, etc. functions depend on anything outside of the data prop, stick it here and treat it immutably.',
        title: 'extraData',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: '(\n    data: any,\n    index: number,\n  ) => {length: number, offset: number, index: number}',
        title: 'getItemLayout',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Instead of starting at the top with the first item, start at initialScrollIndex. This disables the "scroll to top" optimization that keeps the first initialNumToRender items always rendered and immediately renders the items starting at this initial index. Requires getItemLayout to be implemented.',
        title: 'initialScrollIndex',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'Reverses the direction of scroll. Uses scale transforms of -1.',
        title: 'inverted',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Each cell is rendered using this element. Can be a React Component Class,or a render function. Defaults to using View.',
        title: 'CellRendererComponent',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Rendered when the list is empty. Can be a React Component Class, a render function, or a rendered element.',
        title: 'ListEmptyComponent',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Rendered at the bottom of all the items. Can be a React Component Class, a render function, or a rendered element.',
        title: 'ListFooterComponent',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Rendered at the top of all the items. Can be a React Component Class, a render function, or a rendered element.',
        title: 'ListHeaderComponent',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'onLayout',
        title: 'onLayout',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: '() => void\nIf provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly.',
        title: 'onRefresh',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: '(info: {\n    index: number,\n    highestMeasuredFrameIndex: number,\n    averageItemLength: number,\n  }) => void\nUsed to handle failures when scrolling to an index that has not been measured yet. Recommended action is to either compute your own offset and scrollTo it, or scroll as far as possible and then try again after more items have been rendered.\n\n',
        title: 'onScrollToIndexFailed',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: '(info: {\n    viewableItems: array,\n    changed: array,\n  }) => void\nCalled when the viewability of rows changes, as defined by the viewabilityConfig prop.',
        title: 'onViewableItemsChanged',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Set this true while waiting for new data from a refresh.',
        title: 'refreshing',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'This may improve scroll performance for large lists.\n\nNote: May have bugs (missing content) in some circumstances - use at your own risk.',
        title: 'removeClippedSubviews',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: '(props: object) => element;\nRender a custom scroll component, e.g. with a differently styled RefreshControl.',
        title: 'renderScrollComponent',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'See ViewabilityHelper.js for flow type and further documentation.\n\ntYPE: ViewabilityConfig',
        title: 'viewabilityConfig',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'List of ViewabilityConfig/onViewableItemsChanged pairs. A specific onViewableItemsChanged will be called when its corresponding ViewabilityConfig\'s conditions are met. See ViewabilityHelper.js for flow type and further documentation.\n\narray of ViewabilityConfigCallbackPair',
        title: 'viewabilityConfigCallbackPairs',
        propType: 'PropTypes.array',
        propTypeIsrequired: false
      },
      {
        description: 'horizontal',
        title: 'horizontal',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'How many items to render in the initial batch. This should be enough to fill the screen but not much more. Note these items will never be unmounted as part of the windowed rendering in order to improve perceived performance of scroll-to-top actions.',
        title: 'initialNumToRender',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: '(item: object, index: number) => string;\nUsed to extract a unique key for a given item at the specified index. Key is used for caching and as the react key to track item re-ordering. The default extractor checks item.key, then falls back to using the index, like React does.',
        title: 'keyExtractor',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'The maximum number of items to render in each incremental render batch. The more rendered at once, the better the fill rate, but responsiveness may suffer because rendering content may interfere with responding to button taps or other interactions.',
        title: 'maxToRenderPerBatch',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: '(info: {distanceFromEnd: number}) => void\nCalled once when the scroll position gets within onEndReachedThreshold of the rendered content.',
        title: 'onEndReached',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'How far from the end (in units of visible length of the list) the bottom edge of the list must be from the end of the content to trigger the onEndReached callback. Thus a value of 0.5 will trigger onEndReached when the end of the content is within half the visible length of the list.',
        title: 'onEndReachedThreshold',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'Amount of time between low-pri item render batches, e.g. for rendering items quite a ways off screen. Similar fill rate/responsiveness tradeoff as maxToRenderPerBatch.',
        title: 'updateCellsBatchingPeriod',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'Determines the maximum number of items rendered outside of the visible area, in units of visible lengths. So if your list fills the screen, then windowSize={21} (the default) will render the visible screen area plus up to 10 screens above and 10 below the viewport. Reducing this number will reduce memory consumption and may improve performance, but will increase the chance that fast scrolling may reveal momentary blank areas of unrendered content.\n\n',
        title: 'windowSize',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'Set this when offset is needed for the loading indicator to show correctly.',
        title: 'progressViewOffset',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      }
    ],
    description: 'Base implementation for the more convenient <FlatList> and <SectionList> components, which are also better documented. In general, this should only really be used if you need more flexibility than FlatList provides, e.g. for use with immutable data instead of plain arrays.\n\nVirtualization massively improves memory consumption and performance of large lists by maintaining a finite render window of active items and replacing all items outside of the render window with appropriately sized blank space. The window adapts to scrolling behavior, and items are rendered incrementally with low-pri (after any running interactions) if they are far from the visible area, or with hi-pri otherwise to minimize the potential of seeing blank space.\n\nSome caveats:\n\nInternal state is not preserved when content scrolls out of the render window. Make sure all your data is captured in the item data or external stores like Flux, Redux, or Relay.\nThis is a PureComponent which means that it will not re-render if props remain shallow- equal. Make sure that everything your renderItem function depends on is passed as a prop (e.g. extraData) that is not === after updates, otherwise your UI may not update on changes. This includes the data prop and parent component state.\nIn order to constrain memory and enable smooth scrolling, content is rendered asynchronously offscreen. This means it\'s possible to scroll faster than the fill rate and momentarily see blank content. This is a tradeoff that can be adjusted to suit the needs of each application, and we are working on improving it behind the scenes.\nBy default, the list looks for a key prop on each item and uses that for the React key. Alternatively, you can provide a custom keyExtractor prop.',
    id: 'tUt8yuIqGjWxpqeu2wl3',
    isDefault: true,
    provider: 'ReactNative',
    techno: 'React Native',
    title: 'VirtualizedList',
    subtitle: 'ReactNative'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/CardDeck',
    componentProps: [
      {
        description: 'type: elementType\ndefault: <div>\t\n\nYou can use a custom element type for this component.',
        title: 'as',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'required\t\ndefault: \'card-deck\'\t\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: true
      }
    ],
    description: 'CardDeck',
    id: 'v0jP3FsP5toWToX7zkri',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'CardDeck',
    subtitle: 'ReactBootstrap_1.0.0-beta.5'
  },
  {
    children: [],
    closeTag: false,
    componentImport: '-',
    componentProps: [
      {
        description: 'Lets the user select text, to use the native copy and paste functionality.',
        title: 'selectable',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label.',
        title: 'accessibilityHint',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Overrides the text that\'s read by the screen reader when the user interacts with the element. By default, the label is constructed by traversing all the children and accumulating all the Text nodes separated by space.',
        title: 'accessibilityLabel',
        propType: 'PropTypes.node',
        propTypeIsrequired: false
      },
      {
        description: 'When set to true, indicates that the view is an accessibility element. The default value for a Text element is true.\n\nSee the Accessibility guide for more information.',
        title: 'accessible',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'When numberOfLines is set, this prop defines how text will be truncated. numberOfLines must be set in conjunction with this prop.\n\nThis can be one of the following values:\n\nhead - The line is displayed so that the end fits in the container and the missing text at the beginning of the line is indicated by an ellipsis glyph. e.g., "...wxyz"\nmiddle - The line is displayed so that the beginning and end fit in the container and the missing text in the middle is indicated by an ellipsis glyph. "ab...yz"\ntail - The line is displayed so that the beginning fits in the container and the missing text at the end of the line is indicated by an ellipsis glyph. e.g., "abcd..."\nclip - Lines are not drawn past the edge of the text container.\nThe default is tail.\n\nenum(\'head\', \'middle\', \'tail\', \'clip\')',
        title: 'ellipsizeMode',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Used to locate this view from native code.',
        title: 'nativeID',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Used to truncate the text with an ellipsis after computing the text layout, including line wrapping, such that the total number of lines does not exceed this number.\n\nThis prop is commonly used with ellipsizeMode.',
        title: 'numberOfLines',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'Invoked on mount and layout changes with\n\n{nativeEvent: {layout: {x, y, width, height}}}',
        title: 'onLayout',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'This function is called on long press.\n\ne.g., onLongPress={this.increaseSize}>',
        title: 'onLongPress',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'This function is called on press.\n\ne.g., onPress={() => console.log(\'1st\')}',
        title: 'onPress',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'When the scroll view is disabled, this defines how far your touch may move off of the button, before deactivating the button. Once deactivated, try moving it back and you\'ll see that the button is once again reactivated! Move it back and forth several times while the scroll view is disabled. Ensure you pass in a constant to reduce memory allocations.\n\nobject: {top: number, left: number, bottom: number, right: number}',
        title: 'pressRetentionOffset',
        propType: 'PropTypes.object',
        propTypeIsrequired: false
      },
      {
        description: 'Specifies whether fonts should scale to respect Text Size accessibility settings. The default is true.',
        title: 'allowFontScaling',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'style',
        title: 'style',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Used to locate this view in end-to-end tests.',
        title: 'testID',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'A React component for displaying text.\n\nText supports nesting, styling, and touch handling.\n\nIn the following example, the nested name and body text will inherit the fontFamily from styles.baseText, but the name provides its own additional styles. The name and body will stack on top of each other on account of the literal newlines:\n\nimport React, { Component } from \'react\';\nimport { AppRegistry, Text, StyleSheet } from \'react-native\';\n\nexport default class TextInANest extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      nameText: "Bird\'s Nest",\n      bodyText: \'This is not really a bird nest.\'\n    };\n  }\n\n  render() {\n    return (\n      <Text style={styles.baseText}>\n        <Text style={styles.nameText} onPress={this.onPressname}>\n          {this.state.nameText}{\'\\n\'}{\'\\n\'}\n        </Text>\n        <Text numberOfLines={5}>\n          {this.state.bodyText}\n        </Text>\n      </Text>\n    );\n  }\n}\n\nconst styles = StyleSheet.create({\n  baseText: {\n    fontFamily: \'Cochin\',\n  },\n  nameText: {\n    fontSize: 20,\n    fontWeight: \'bold\',\n  },\n});\n\n// skip this line if using Create React Native App\nAppRegistry.registerComponent(\'TextInANest\', () => TextInANest);\n\nNested text\nBoth iOS and Android allow you to display formatted text by annotating ranges of a string with specific formatting like bold or colored text (NSAttributedString on iOS, SpannableString on Android). In practice, this is very tedious. For React Native, we decided to use web paradigm for this where you can nest text to achieve the same effect.\n\nimport React, { Component } from \'react\';\nimport { AppRegistry, Text } from \'react-native\';\n\nexport default class BoldAndBeautiful extends Component {\n  render() {\n    return (\n      <Text style={{fontWeight: \'bold\'}}>\n        I am bold\n        <Text style={{color: \'red\'}}>\n          and red\n        </Text>\n      </Text>\n    );\n  }\n}\n\n// skip this line if using Create React Native App\nAppRegistry.registerComponent(\'AwesomeProject\', () => BoldAndBeautiful);\n\n\nBehind the scenes, React Native converts this to a flat NSAttributedString or SpannableString that contains the following information:\n\n"I am bold and red"\n0-9: bold\n9-17: bold, red\nNested views (iOS only)\nOn iOS, you can nest views within your Text component. Here\'s an example:\n\nimport React, { Component } from \'react\';\nimport { AppRegistry, Text, View } from \'react-native\';\n\nexport default class BlueIsCool extends Component {\n  render() {\n    return (\n      <Text>\n        There is a blue square\n        <View style={{width: 50, height: 50, backgroundColor: \'steelblue\'}} />\n        in between my text.\n      </Text>\n    );\n  }\n}\n\n// skip this line if using Create React Native App\nAppRegistry.registerComponent(\'AwesomeProject\', () => BlueIsCool);\n\nIn order to use this feature, you must give the view a width and a height.\n\nContainers\nThe <Text> element is special relative to layout: everything inside is no longer using the flexbox layout but using text layout. This means that elements inside of a <Text> are no longer rectangles, but wrap when they see the end of the line.\n\n<Text>\n  <Text>First part and </Text>\n  <Text>second part</Text>\n</Text>\n// Text container: all the text flows as if it was one\n// |First part |\n// |and second |\n// |part       |\n\n<View>\n  <Text>First part and </Text>\n  <Text>second part</Text>\n</View>\n// View container: each text is its own block\n// |First part |\n// |and        |\n// |second part|\nLimited Style Inheritance\nOn the web, the usual way to set a font family and size for the entire document is to take advantage of inherited CSS properties like so:\n\nhtml {\n  font-family: \'lucida grande\', tahoma, verdana, arial, sans-serif;\n  font-size: 11px;\n  color: #141823;\n}\nAll elements in the document will inherit this font unless they or one of their parents specifies a new rule.\n\nIn React Native, we are more strict about it: you must wrap all the text nodes inside of a <Text> component. You cannot have a text node directly under a <View>.\n\n// BAD: will raise exception, can\'t have a text node as child of a <View>\n<View>\n  Some text\n</View>\n\n// GOOD\n<View>\n  <Text>\n    Some text\n  </Text>\n</View>\nYou also lose the ability to set up a default font for an entire subtree. The recommended way to use consistent fonts and sizes across your application is to create a component MyAppText that includes them and use this component across your app. You can also use this component to make more specific components like MyAppHeaderText for other kinds of text.\n\n<View>\n  <MyAppText>\n    Text styled with the default font for the entire application\n  </MyAppText>\n  <MyAppHeaderText>Text styled as a header</MyAppHeaderText>\n</View>\nAssuming that MyAppText is a component that simply renders out its children into a Text component with styling, then MyAppHeaderText can be defined as follows:\n\nclass MyAppHeaderText extends Component {\n  render() {\n    return (\n      <MyAppText>\n        <Text style={{fontSize: 20}}>{this.props.children}</Text>\n      </MyAppText>\n    );\n  }\n}\nComposing MyAppText in this way ensures that we get the styles from a top-level component, but leaves us the ability to add / override them in specific use cases.\n\nReact Native still has the concept of style inheritance, but limited to text subtrees. In this case, the second part will be both bold and red.\n\n<Text style={{fontWeight: \'bold\'}}>\n  I am bold\n  <Text style={{color: \'red\'}}>and red</Text>\n</Text>\nWe believe that this more constrained way to style text will yield better apps:\n\n(Developer) React components are designed with strong isolation in mind: You should be able to drop a component anywhere in your application, trusting that as long as the props are the same, it will look and behave the same way. Text properties that could inherit from outside of the props would break this isolation.\n\n(Implementor) The implementation of React Native is also simplified. We do not need to have a fontFamily field on every single element, and we do not need to potentially traverse the tree up to the root every time we display a text node. The style inheritance is only encoded inside of the native Text component and doesn\'t leak to other components or the system itself.',
    id: 'v9PsHv1IsgoFIT42Osh7',
    isDefault: true,
    provider: 'ReactNative',
    techno: 'React Native',
    title: 'Text',
    subtitle: 'ReactNative'
  },
  {
    children: [],
    closeTag: false,
    componentImport: '-',
    componentProps: [],
    description: 'The purpose of SafeAreaView is to render content within the safe area boundaries of a device. It is currently only applicable to iOS devices with iOS version 11 or later.\n\nSafeAreaView renders nested content and automatically applies paddings to reflect the portion of the view that is not covered by navigation bars, tab bars, toolbars, and other ancestor views. Moreover, and most importantly, Safe Area\'s paddings reflect the physical limitation of the screen, such as rounded corners or camera notches (i.e. the sensor housing area on iPhone X).\n\nUsage Example\nSimply wrap your top level view with a SafeAreaView with a flex: 1 style applied to it. You may also want to use a background color that matches your application\'s design.\n\n<SafeAreaView style={{flex: 1, backgroundColor: \'#fff\'}}>\n  <View style={{flex: 1}}>\n    <Text>Hello World!</Text>\n  </View>\n</SafeAreaView>',
    id: 'vOiATZP57vkVOFzWEWvI',
    isDefault: true,
    provider: 'ReactNative',
    techno: 'React Native',
    title: 'SafeAreaView',
    subtitle: 'ReactNative'
  },
  {
    children: [],
    closeTag: true,
    componentImport: '-',
    componentProps: [
      {
        description: 'className',
        title: 'className',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'h2',
    id: 'vvzFz9XULbtRCoDwaJZA',
    isDefault: false,
    provider: 'HTML',
    techno: 'React',
    title: 'h2',
    subtitle: 'HTML'
  },
  {
    children: [],
    closeTag: false,
    componentImport: '-',
    componentProps: [
      {
        description: 'Determines what the opacity of the wrapped view should be when touch is active. Defaults to 0.2.',
        title: 'activeOpacity',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: '(Apple TV only) Object with properties to control Apple TV parallax effects.\n\nenabled: If true, parallax effects are enabled. Defaults to true. shiftDistanceX: Defaults to 2.0. shiftDistanceY: Defaults to 2.0. tiltAngle: Defaults to 0.05. magnification: Defaults to 1.0. pressMagnification: Defaults to 1.0. pressDuration: Defaults to 0.3. pressDelay: Defaults to 0.0.',
        title: 'tvParallaxProperties',
        propType: 'PropTypes.object',
        propTypeIsrequired: false
      },
      {
        description: '(Apple TV only) TV preferred focus (see documentation for the View component).',
        title: 'hasTVPreferredFocus',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      }
    ],
    description: 'A wrapper for making views respond properly to touches. On press down, the opacity of the wrapped view is decreased, dimming it.\n\nOpacity is controlled by wrapping the children in an Animated.View, which is added to the view hierarchy. Be aware that this can affect layout.\n\nExample:\n\nrenderButton: function() {\n  return (\n    <TouchableOpacity onPress={this._onPressButton}>\n      <Image\n        style={styles.button}\n        source={require(\'./myButton.png\')}\n      />\n    </TouchableOpacity>\n  );\n},\n\nimport React, { Component } from \'react\'\nimport {\n  AppRegistry,\n  StyleSheet,\n  TouchableOpacity,\n  Text,\n  View,\n} from \'react-native\'\n\nclass App extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { count: 0 }\n  }\n\n  onPress = () => {\n    this.setState({\n      count: this.state.count+1\n    })\n  }\n\n render() {\n   return (\n     <View style={styles.container}>\n       <TouchableOpacity\n         style={styles.button}\n         onPress={this.onPress}\n       >\n         <Text> Touch Here </Text>\n       </TouchableOpacity>\n       <View style={[styles.countContainer]}>\n         <Text style={[styles.countText]}>\n            { this.state.count !== 0 ? this.state.count: null}\n          </Text>\n        </View>\n      </View>\n    )\n  }\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: \'center\',\n    paddingHorizontal: 10\n  },\n  button: {\n    alignItems: \'center\',\n    backgroundColor: \'#DDDDDD\',\n    padding: 10\n  },\n  countContainer: {\n    alignItems: \'center\',\n    padding: 10\n  },\n  countText: {\n    color: \'#FF00FF\'\n  }\n})\n\nAppRegistry.registerComponent(\'App\', () => App)',
    id: 'w0fMsYPO6sJYPeoheDkQ',
    isDefault: true,
    provider: 'ReactNative',
    techno: 'React Native',
    title: 'TouchableOpacity',
    subtitle: 'ReactNative'
  },
  {
    children: [],
    closeTag: false,
    componentImport: 'react-bootstrap/lib/Well',
    componentProps: [
      {
        description: 'Component size variations.',
        title: 'bsSize',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'well\'',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Use the well as a simple effect on an element to give it an inset effect.\n\n<Well>Look I\'m in a well!</Well>;\n\nOptional classes\nControl padding and rounded corners with two optional modifier classes.\n\n<div>\n  <Well bsSize="large">Look I\'m in a large well!</Well>\n  <Well bsSize="small">Look I\'m in a small well!</Well>\n</div>;\n\n',
    id: 'wBme7p3E5m2mLjFzmDAY',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'Well'
  },
  {
    children: [],
    closeTag: true,
    componentImport: 'react-bootstrap/lib/Dropdown',
    componentProps: [
      {
        description: 'The menu will open above the dropdown button, instead of below it.',
        title: 'dropup',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'An html id attribute, necessary for assistive technologies, such as screen readers.',
        title: 'id',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'You can use a custom element type for this component.\n\ndefault: ButtonGroup',
        title: 'componentClass',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: '\t\nThe children of a Dropdown may be a <Dropdown.Toggle> or a <Dropdown.Menu>.',
        title: 'children',
        propType: 'PropTypes.node',
        propTypeIsrequired: false
      },
      {
        description: 'Whether or not component is disabled.',
        title: 'disabled',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Align the menu to the right side of the Dropdown toggle',
        title: 'pullRight',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Whether or not the Dropdown is visible.',
        title: 'open',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'defaultOpen',
        title: 'defaultOpen',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'A callback fired when the Dropdown wishes to change visibility. Called with the requested open value, the DOM event, and the source that fired it: \'click\',\'keydown\',\'rootClose\', or \'select\'.\n\nfunction(Boolean isOpen, Object event, { String source }) {}',
        title: 'onToggle',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Which event when fired outside the component will cause it to be closed\n\nNote: For custom dropdown components, you will have to pass the rootCloseEvent to <RootCloseWrapper> in your custom dropdown menu component (similarly to how it is implemented in <Dropdown.Menu>).\n\none of: \'click\', \'mousedown\'',
        title: 'onSelect',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      }
    ],
    description: '#Dropdowns DropdownButton, SplitButton, Dropdown\n#Single button dropdowns\nCreate a dropdown button with the <DropdownButton /> component.\n\nconst BUTTONS = [\'Default\', \'Primary\', \'Success\', \'Info\', \'Warning\', \'Danger\'];\n\nfunction renderDropdownButton(name, i) {\n  return (\n    <DropdownButton\n      bsStyle={name.toLowerCase()}\n      name={name}\n      key={i}\n      id={`dropdown-basic-${i}`}\n    >\n      <MenuItem eventKey="1">Action</MenuItem>\n      <MenuItem eventKey="2">Another action</MenuItem>\n      <MenuItem eventKey="3" active>\n        Active Item\n      </MenuItem>\n      <MenuItem divider />\n      <MenuItem eventKey="4">Separated link</MenuItem>\n    </DropdownButton>\n  );\n}\n\nconst buttonsInstance = (\n  <ButtonToolbar>{BUTTONS.map(renderDropdownButton)}</ButtonToolbar>\n);\n\nrender(buttonsInstance);\n\n#Split button dropdowns\nSimilarly, create split button dropdowns with the <SplitButton /> component.\n\nconst BUTTONS = [\'Default\', \'Primary\', \'Success\', \'Info\', \'Warning\', \'Danger\'];\n\nfunction renderDropdownButton(name, i) {\n  return (\n    <SplitButton\n      bsStyle={name.toLowerCase()}\n      name={name}\n      key={i}\n      id={`split-button-basic-${i}`}\n    >\n      <MenuItem eventKey="1">Action</MenuItem>\n      <MenuItem eventKey="2">Another action</MenuItem>\n      <MenuItem eventKey="3">Something else here</MenuItem>\n      <MenuItem divider />\n      <MenuItem eventKey="4">Separated link</MenuItem>\n    </SplitButton>\n  );\n}\n\nconst buttonsInstance = (\n  <ButtonToolbar>{BUTTONS.map(renderDropdownButton)}</ButtonToolbar>\n);\n\nrender(buttonsInstance);\n\n#Sizing\nDropdowns work with buttons of all sizes.\n\n<div>\n  <ButtonToolbar>\n    <DropdownButton\n      bsSize="large"\n      name="Large button"\n      id="dropdown-size-large"\n    >\n      <MenuItem eventKey="1">Action</MenuItem>\n      <MenuItem eventKey="2">Another action</MenuItem>\n      <MenuItem eventKey="3">Something else here</MenuItem>\n      <MenuItem divider />\n      <MenuItem eventKey="4">Separated link</MenuItem>\n    </DropdownButton>\n  </ButtonToolbar>\n\n  <ButtonToolbar>\n    <DropdownButton name="Default button" id="dropdown-size-medium">\n      <MenuItem eventKey="1">Action</MenuItem>\n      <MenuItem eventKey="2">Another action</MenuItem>\n      <MenuItem eventKey="3">Something else here</MenuItem>\n      <MenuItem divider />\n      <MenuItem eventKey="4">Separated link</MenuItem>\n    </DropdownButton>\n  </ButtonToolbar>\n\n  <ButtonToolbar>\n    <DropdownButton\n      bsSize="small"\n      name="Small button"\n      id="dropdown-size-small"\n    >\n      <MenuItem eventKey="1">Action</MenuItem>\n      <MenuItem eventKey="2">Another action</MenuItem>\n      <MenuItem eventKey="3">Something else here</MenuItem>\n      <MenuItem divider />\n      <MenuItem eventKey="4">Separated link</MenuItem>\n    </DropdownButton>\n  </ButtonToolbar>\n\n  <ButtonToolbar>\n    <DropdownButton\n      bsSize="xsmall"\n      name="Extra small button"\n      id="dropdown-size-extra-small"\n    >\n      <MenuItem eventKey="1">Action</MenuItem>\n      <MenuItem eventKey="2">Another action</MenuItem>\n      <MenuItem eventKey="3">Something else here</MenuItem>\n      <MenuItem divider />\n      <MenuItem eventKey="4">Separated link</MenuItem>\n    </DropdownButton>\n  </ButtonToolbar>\n</div>;\n\n#No caret variation\nRemove the caret using the noCaret prop.\n\n<ButtonToolbar>\n  <DropdownButton\n    bsStyle="default"\n    name="No caret"\n    noCaret\n    id="dropdown-no-caret"\n  >\n    <MenuItem eventKey="1">Action</MenuItem>\n    <MenuItem eventKey="2">Another action</MenuItem>\n    <MenuItem eventKey="3">Something else here</MenuItem>\n    <MenuItem divider />\n    <MenuItem eventKey="4">Separated link</MenuItem>\n  </DropdownButton>\n</ButtonToolbar>;\n\n#Dropup variation\nTrigger dropdown menus that site above the button by adding the dropup prop.\n\n<div>\n  <ButtonToolbar>\n    <SplitButton name="Dropup" dropup id="split-button-dropup">\n      <MenuItem eventKey="1">Action</MenuItem>\n      <MenuItem eventKey="2">Another action</MenuItem>\n      <MenuItem eventKey="3">Something else here</MenuItem>\n      <MenuItem divider />\n      <MenuItem eventKey="4">Separated link</MenuItem>\n    </SplitButton>\n  </ButtonToolbar>\n\n  <ButtonToolbar>\n    <SplitButton\n      bsStyle="primary"\n      name="Right dropup"\n      dropup\n      pullRight\n      id="split-button-dropup-pull-right"\n    >\n      <MenuItem eventKey="1">Action</MenuItem>\n      <MenuItem eventKey="2">Another action</MenuItem>\n      <MenuItem eventKey="3">Something else here</MenuItem>\n      <MenuItem divider />\n      <MenuItem eventKey="4">Separated link</MenuItem>\n    </SplitButton>\n  </ButtonToolbar>\n</div>;\n\n#Dropdown right variation\nTrigger dropdown menus that align to the right of the button using the pullRight prop.\n\n<SplitButton name="Dropdown right" pullRight id="split-button-pull-right">\n  <MenuItem eventKey="1">Action</MenuItem>\n  <MenuItem eventKey="2">Another action</MenuItem>\n  <MenuItem eventKey="3">Something else here</MenuItem>\n  <MenuItem divider />\n  <MenuItem eventKey="4">Separated link</MenuItem>\n</SplitButton>;\n\n#Menu items MenuItem\nThis component represents a menu item in a dropdown.\n\nIt supports the basic anchor properties href, target, name.\n\nIt also supports different properties of the normal Bootstrap MenuItem.\n\nheader: To add a header label to sections\ndivider: Adds an horizontal divider between sections\ndisabled: shows the item as disabled, and prevents onSelect from firing\neventKey: passed to the callback\nonSelect: a callback that is called when the user clicks the item.\nThe callback is called with the following arguments: eventKey and event\n\nfunction onSelectAlert(eventKey) {\n  alert(`Alert from menu item.\\neventKey: ${eventKey}`);\n}\n\nconst MenuItems = (\n  <Clearfix>\n    <ul className="dropdown-menu open">\n      <MenuItem header>Header</MenuItem>\n      <MenuItem>link</MenuItem>\n      <MenuItem divider />\n      <MenuItem header>Header</MenuItem>\n      <MenuItem>link</MenuItem>\n      <MenuItem disabled>disabled</MenuItem>\n      <MenuItem name="See? I have a name.">link with name</MenuItem>\n      <MenuItem eventKey={1} href="#someHref" onSelect={onSelectAlert}>\n        link that alerts\n      </MenuItem>\n    </ul>\n  </Clearfix>\n);\n\nrender(MenuItems);\n\n#Dropdown Customization\nIf the default handling of the dropdown menu and toggle components aren\'t to your liking, you can customize them, by using the more basic Dropdown Component to explicitly specify the Toggle and Menu components\n\nAdditional Import Options\nAs a convenience Toggle and Menu components available as static properties on the Dropdown component. However, you can also import them directly, from the /lib directory like: require("react-bootstrap/lib/DropdownToggle").\n\n<ButtonToolbar>\n  <Dropdown id="dropdown-custom-1">\n    <Dropdown.Toggle>\n      <Glyphicon glyph="star" />\n      Pow! Zoom!\n    </Dropdown.Toggle>\n    <Dropdown.Menu className="super-colors">\n      <MenuItem eventKey="1">Action</MenuItem>\n      <MenuItem eventKey="2">Another action</MenuItem>\n      <MenuItem eventKey="3" active>\n        Active Item\n      </MenuItem>\n      <MenuItem divider />\n      <MenuItem eventKey="4">Separated link</MenuItem>\n    </Dropdown.Menu>\n  </Dropdown>\n\n  <Dropdown id="dropdown-custom-2">\n    <Button bsStyle="info">mix it up style-wise</Button>\n    <Dropdown.Toggle bsStyle="success" />\n    <Dropdown.Menu className="super-colors">\n      <MenuItem eventKey="1">Action</MenuItem>\n      <MenuItem eventKey="2">Another action</MenuItem>\n      <MenuItem eventKey="3" active>\n        Active Item\n      </MenuItem>\n      <MenuItem divider />\n      <MenuItem eventKey="4">Separated link</MenuItem>\n    </Dropdown.Menu>\n  </Dropdown>\n</ButtonToolbar>;\n\nCustom Dropdown Components\nFor those that want to customize everything, you can forgo the included Toggle and Menu components, and create your own. In order to tell the Dropdown component what role your custom components play, add a special prop bsRole to your menu or toggle components. The Dropdown expects at least one component with bsRole="toggle" and exactly one with bsRole="menu". Custom toggle and menu components must be able to accept refs.\n\nUsing rootCloseEvent with custom dropdown components\nIf you want to use the rootCloseEvent prop with your custom dropdown components, you will have to pass the rootCloseEvent to <RootCloseWrapper> in your custom dropdown menu component similarly to how it is implemented in <Dropdown.Menu>.\n\nYou will have to add react-overlays as a dependency and import <RootCloseWrapper> from react-overlays yourself like: import RootCloseWrapper from \'react-overlays/lib/RootCloseWrapper\'.\n\nclass CustomToggle extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleClick = this.handleClick.bind(this);\n  }\n\n  handleClick(e) {\n    e.preventDefault();\n\n    this.props.onClick(e);\n  }\n\n  render() {\n    return (\n      <a href="" onClick={this.handleClick}>\n        {this.props.children}\n      </a>\n    );\n  }\n}\n\nclass CustomMenu extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleChange = this.handleChange.bind(this);\n\n    this.state = {\n      value: \'\'\n    };\n  }\n\n  handleChange(e) {\n    this.setState({ value: e.target.value });\n  }\n\n  focusNext() {\n    const input = ReactDOM.findDOMNode(this.input);\n\n    if (input) {\n      input.focus();\n    }\n  }\n\n  render() {\n    const { children } = this.props;\n    const { value } = this.state;\n\n    return (\n      <div className="dropdown-menu" style={{ padding: \'\' }}>\n        <FormControl\n          ref={c => {\n            this.input = c;\n          }}\n          type="text"\n          placeholder="Type to filter..."\n          onChange={this.handleChange}\n          value={value}\n        />\n        <ul className="list-unstyled">\n          {React.Children.toArray(children).filter(\n            child => !value.trim() || child.props.children.indexOf(value) !== -1\n          )}\n        </ul>\n      </div>\n    );\n  }\n}\n\nrender(\n  <Dropdown id="dropdown-custom-menu">\n    <CustomToggle bsRole="toggle">Custom toggle</CustomToggle>\n\n    <CustomMenu bsRole="menu">\n      <MenuItem eventKey="1">Red</MenuItem>\n      <MenuItem eventKey="2">Blue</MenuItem>\n      <MenuItem eventKey="3" active>\n        Orange\n      </MenuItem>\n      <MenuItem eventKey="1">Red-Orange</MenuItem>\n    </CustomMenu>\n  </Dropdown>\n);',
    id: 'wGzOd67czzPSMgxR5Bga',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'Dropdown'
  },
  {
    children: [],
    componentImport: 'react-bootstrap/Navbar',
    componentProps: [
      {
        description: 'default: <nav>\t\n\nSet a custom element for this component.',
        title: 'as',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'A convenience prop for adding bg-* utility classes since they are so commonly used here. light and dark are common choices but any bg-* class is supported, including any custom ones you might define.\n\nPairs nicely with the variant prop.',
        title: 'bg',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'default: false\t\n\nToggles expanded to false after the onSelect event of a descendant of a child <Nav> fires. Does nothing if no <Nav> or <Nav> descendants exist.\n\nManually controlling expanded via the onSelect callback is recommended instead, for more complex operations that need to be executed after the select event of <Nav> descendants.',
        title: 'collapseOnSelect',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'type: true | \'sm\' | \'md\' | \'lg\' | \'xl\'\ndefault: true\t\n\nThe breakpoint, below which, the Navbar will collapse. When true the Navbar will always be expanded regardless of screen size.',
        title: 'expand',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'controlled by: onToggle, initial prop: defaultExpanded\nControls the visiblity of the navbar body',
        title: 'expanded',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'type: \'top\' | \'bottom\'\n\nCreate a fixed navbar along the top or bottom of the screen, that scrolls with the page. A convenience prop for the fixed-* positioning classes.',
        title: 'fixed',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'A callback fired when a descendant of a child <Nav> is selected. Should be used to execute complex closing or other miscellaneous actions desired after selecting a descendant of <Nav>. Does nothing if no <Nav> or <Nav> descendants exist. The callback is called with an eventKey, which is a prop from the selected <Nav> descendant, and an event.\n\nfunction (\n eventKey: mixed,\n event?: SyntheticEvent\n)\nFor basic closing behavior after all <Nav> descendant onSelect events in mobile viewports, try using collapseOnSelect.\n\nNote: If you are manually closing the navbar using this OnSelect prop, ensure that you are setting expanded to false and not toggling between true and false.',
        title: 'onSelect',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'controls expanded\nA callback fired when the <Navbar> body collapses or expands. Fired when a <Navbar.Toggle> is clicked and called with the new expanded boolean value.',
        title: 'onToggle',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'default: \'navigation\'\t\n\nThe ARIA role for the navbar, will default to \'navigation\' for Navbars whose as is something other than <nav>.',
        title: 'role',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'type: \'top\' | \'bottom\'\n\nPosition the navbar at the top or bottom of the viewport, but only after scrolling past it. . A convenience prop for the sticky-* positioning classes.\n\nNot supported in <= IE11 and other older browsers without a polyfill',
        title: 'sticky',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'type: \'light\' | \'dark\'\ndefault: \'light\'\t\n\nThe general visual variant a the Navbar. Use in combination with the bg prop, background-color utilities, or your own background styles.',
        title: 'variant',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'required\t\ndefault: \'navbar\'\t\n\nChange the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
        title: 'bsPrefix',
        propType: 'PropTypes.string',
        propTypeIsrequired: true
      }
    ],
    description: 'Navbars#\nA powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more\n\nOverview#\nHere’s what you need to know before getting started with the navbar:\n\nuse the expand prop to allow for nvabar collapsing at lower breakpoints.\nNavbars and their contents are fluid by default. Use optional containers to limit their horizontal width.\nUse spacing and flex utilities to size and position content\nA responsive navigation header, including support for branding, navigation, and more. Here’s an example of all the sub-components included in a responsive light-themed navbar that automatically collapses at the lg (large) breakpoint.\n\n<Navbar bg="light" expand="lg">\n  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>\n  <Navbar.Toggle aria-controls="basic-navbar-nav" />\n  <Navbar.Collapse id="basic-navbar-nav">\n    <Nav className="mr-auto">\n      <Nav.Link href="#home">Home</Nav.Link>\n      <Nav.Link href="#link">Link</Nav.Link>\n      <NavDropdown name="Dropdown" id="basic-nav-dropdown">\n        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>\n        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>\n        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>\n        <NavDropdown.Divider />\n        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>\n      </NavDropdown>\n    </Nav>\n    <Form inline>\n      <FormControl type="text" placeholder="Search" className="mr-sm-2" />\n      <Button variant="outline-success">Search</Button>\n    </Form>\n  </Navbar.Collapse>\n</Navbar>;\n\nBrand#\nA simple flexible branding component. Images are supported but will likely require custom styling to work well.\n\n<>\n  <Navbar bg="light">\n    <Navbar.Brand href="#home">Brand link</Navbar.Brand>\n  </Navbar>\n  <br />\n  <Navbar bg="light">\n    <Navbar.Brand>Brand text</Navbar.Brand>\n  </Navbar>\n  <br />\n  <Navbar bg="dark">\n    <Navbar.Brand href="#home">\n      <img\n        src="/logo.svg"\n        width="30"\n        height="30"\n        className="d-inline-block align-top"\n        alt="React Bootstrap logo"\n      />\n    </Navbar.Brand>\n  </Navbar>\n  <br />\n  <Navbar bg="dark" variant="dark">\n    <Navbar.Brand href="#home">\n      <img\n        alt=""\n        src="/logo.svg"\n        width="30"\n        height="30"\n        className="d-inline-block align-top"\n      />\n      {\' React Bootstrap\'}\n    </Navbar.Brand>\n  </Navbar>\n</>;\n\nForms#\nUse <Form inline> and your variaous form controls within the Navbar. Align the contents as needed with utility classes.\n\n<Navbar className="bg-light justify-content-between">\n  <Form inline>\n    <InputGroup>\n      <InputGroup.Prepend>\n        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>\n      </InputGroup.Prepend>\n      <FormControl\n        placeholder="Username"\n        aria-label="Username"\n        aria-describedby="basic-addon1"\n      />\n    </InputGroup>\n  </Form>\n  <Form inline>\n    <FormControl type="text" placeholder="Search" className=" mr-sm-2" />\n    <Button type="submit">Submit</Button>\n  </Form>\n</Navbar>;\n\nText and Non-nav links#\nLoose text and links can be wrapped Navbar.Text in order to correctly align it vertically.\n\n<Navbar>\n  <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>\n  <Navbar.Toggle />\n  <Navbar.Collapse className="justify-content-end">\n    <Navbar.Text>\n      Signed in as: <a href="#login">Mark Otto</a>\n    </Navbar.Text>\n  </Navbar.Collapse>\n</Navbar>;\n\nColor schemes#\nTheming the navbar has never been easier thanks to the combination of theming classes and background-color utilities. Choose from variant="light" for use with light background colors, or variant="dark" for dark background colors. Then, customize with the bg prop or any custom css!\n\n<>\n  <Navbar bg="dark" variant="dark">\n    <Navbar.Brand href="#home">Navbar</Navbar.Brand>\n    <Nav className="mr-auto">\n      <Nav.Link href="#home">Home</Nav.Link>\n      <Nav.Link href="#features">Features</Nav.Link>\n      <Nav.Link href="#pricing">Pricing</Nav.Link>\n    </Nav>\n    <Form inline>\n      <FormControl type="text" placeholder="Search" className="mr-sm-2" />\n      <Button variant="outline-info">Search</Button>\n    </Form>\n  </Navbar>\n  <br />\n  <Navbar bg="primary" variant="dark">\n    <Navbar.Brand href="#home">Navbar</Navbar.Brand>\n    <Nav className="mr-auto">\n      <Nav.Link href="#home">Home</Nav.Link>\n      <Nav.Link href="#features">Features</Nav.Link>\n      <Nav.Link href="#pricing">Pricing</Nav.Link>\n    </Nav>\n    <Form inline>\n      <FormControl type="text" placeholder="Search" className="mr-sm-2" />\n      <Button variant="outline-light">Search</Button>\n    </Form>\n  </Navbar>\n\n  <br />\n  <Navbar bg="light" variant="light">\n    <Navbar.Brand href="#home">Navbar</Navbar.Brand>\n    <Nav className="mr-auto">\n      <Nav.Link href="#home">Home</Nav.Link>\n      <Nav.Link href="#features">Features</Nav.Link>\n      <Nav.Link href="#pricing">Pricing</Nav.Link>\n    </Nav>\n    <Form inline>\n      <FormControl type="text" placeholder="Search" className="mr-sm-2" />\n      <Button variant="outline-primary">Search</Button>\n    </Form>\n  </Navbar>\n</>;\n\nContainers#\nWhile not required, you can wrap the Navbar in a <Container> component to center it on a page, or add one within to only center the contents of a fixed or static top navbar.\n\n<Container>\n  <Navbar expand="lg" variant="light" bg="light">\n    <Navbar.Brand href="#">Navbar</Navbar.Brand>\n  </Navbar>\n</Container>;\n\nWhen the container is within your navbar, its horizontal padding is removed at breakpoints lower than your specified expand={\'sm\' | \'md\' | \'lg\' | \'xl\'} prop. This ensures we’re not doubling up on padding unnecessarily on lower viewports when your navbar is collapsed.\n\n<Navbar expand="lg" variant="light" bg="light">\n  <Container>\n    <Navbar.Brand href="#">Navbar</Navbar.Brand>\n  </Container>\n</Navbar>;\n\nPlacement#\nYou can use Bootstrap\'s position utilities to place navbars in non-static positions. Choose from fixed to the top, fixed to the bottom, or stickied to the top (scrolls with the page until it reaches the top, then stays there). Fixed navbars use position: fixed, meaning they’re pulled from the normal flow of the DOM and may require custom CSS (e.g., padding-top on the <body>) to prevent overlap with other elements. Also note that .sticky-top uses position: sticky, which isn’t fully supported in every browser.\n\nSince these positioning needs are so common for Navbars, we\'ve added convenience props for them\n\nFixed top\n<Navbar fixed="top" />\n\nFixed bottom\n<Navbar fixed="bottom" />\n\nSticky top\n<Navbar sticky="top" />\nSticky bottom\n<Navbar sticky="bottom" />\nResponsive behaviors#\nUse the expand prop as well as the Navbar.Toggle and Navbar.Collapse components to control when content collapses behind a button.\n\nSet the defaultExpanded prop to make the Navbar start expanded. Set collapseOnSelect to make the Navbar collapse automatically when the user selects an item. You can also finely control the collapsing behavior by using the expanded and onToggle props.\n\n<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">\n  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>\n  <Navbar.Toggle aria-controls="responsive-navbar-nav" />\n  <Navbar.Collapse id="responsive-navbar-nav">\n    <Nav className="mr-auto">\n      <Nav.Link href="#features">Features</Nav.Link>\n      <Nav.Link href="#pricing">Pricing</Nav.Link>\n      <NavDropdown name="Dropdown" id="collasible-nav-dropdown">\n        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>\n        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>\n        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>\n        <NavDropdown.Divider />\n        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>\n      </NavDropdown>\n    </Nav>\n    <Nav>\n      <Nav.Link href="#deets">More deets</Nav.Link>\n      <Nav.Link eventKey={2} href="#memes">\n        Dank memes\n      </Nav.Link>\n    </Nav>\n  </Navbar.Collapse>\n</Navbar>;',
    id: 'zGTqZTpY0jrPiXGjU7JG',
    isDefault: true,
    provider: 'ReactBootstrap_1.0.0-beta.5',
    subtitle: 'ReactBootstrap_1.0.0-beta.5',
    techno: 'React',
    title: 'Navbar'
  },
  {
    children: [],
    closeTag: false,
    componentImport: '-',
    componentProps: [
      {
        description: 'If true the user won\'t be able to toggle the switch. Default value is false.',
        title: 'disabled',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Custom colors for the switch track.\n\niOS: When the switch value is false, the track shrinks into the border. If you want to change the color of the background exposed by the shrunken track, use ios_backgroundColor.\n\nobject: {false: color, true: color}',
        title: 'trackColor',
        propType: 'PropTypes.object',
        propTypeIsrequired: false
      },
      {
        description: 'On iOS, custom color for the background. This background color can be seen either when the switch value is false or when the switch is disabled (and the switch is translucent).',
        title: 'ios_backgroundColor',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Invoked with the new value when the value changes.',
        title: 'onValueChange',
        propType: 'PropTypes.func',
        propTypeIsrequired: false
      },
      {
        description: 'Used to locate this view in end-to-end tests.',
        title: 'testID',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Color of the foreground switch grip. If this is set on iOS, the switch grip will lose its drop shadow.',
        title: 'thumbColor',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'The value of the switch. If true the switch will be turned on. Default value is false.',
        title: 'value',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      }
    ],
    description: 'Renders a boolean input.\n\nThis is a controlled component that requires an onValueChange callback that updates the value prop in order for the component to reflect user actions. If the value prop is not updated, the component will continue to render the supplied value prop instead of the expected result of any user actions.',
    id: 'zKnBxj8y73fgcKPcwiSt',
    isDefault: true,
    provider: 'ReactNative',
    techno: 'React Native',
    title: 'Switch',
    subtitle: 'ReactNative'
  },
  {
    children: [],
    closeTag: false,
    componentImport: '-',
    componentProps: [
      {
        description: 'Whether to show the ProgressBar (true, the default) or hide it (false).',
        title: 'animating',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Color of the progress bar.',
        title: 'color',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'If the progress bar will show indeterminate progress. Note that this can only be false if styleAttr is Horizontal.',
        title: 'indeterminate',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'The progress value (between 0 and 1).',
        title: 'progress',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      },
      {
        description: 'Style of the ProgressBar. One of:\n\nHorizontal\nNormal (default)\nSmall\nLarge\nInverse\nSmallInverse\nLargeInverse\n\nType: enum(\'Horizontal\', \'Normal\', \'Small\', \'Large\', \'Inverse\', \'SmallInverse\', \'LargeInverse\')\n',
        title: 'styleAttr',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'Used to locate this view in end-to-end tests.',
        title: 'testID',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Android-only React component used to indicate that the app is loading or there is some activity in the app.\n\nExample:\n\nimport React, { Component } from "react";\nimport {\n  ProgressBarAndroid,\n  AppRegistry,\n  StyleSheet,\n  View\n} from "react-native";\n\nexport default class App extends Component {\n  render() {\n    return (\n      <View style={styles.container}>\n        <ProgressBarAndroid />\n        <ProgressBarAndroid styleAttr="Horizontal" />\n        <ProgressBarAndroid styleAttr="Horizontal" color="#2196F3" />\n        <ProgressBarAndroid\n          styleAttr="Horizontal"\n          indeterminate={false}\n          progress={0.5}\n        />\n      </View>\n    );\n  }\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: "space-evenly",\n    padding: 10\n  }\n});\n\nAppRegistry.registerComponent("App", () => App);',
    id: 'zdwfyP6JSl9rlH7H2tBJ',
    isDefault: true,
    provider: 'ReactNative',
    techno: 'React Native',
    title: 'ProgressBarAndroid',
    subtitle: 'ReactNative'
  },
  {
    children: [],
    closeTag: false,
    componentImport: '-',
    componentProps: [
      {
        description: 'The currently selected date.',
        title: 'date',
        propType: 'PropTypes.instanceOf()',
        propTypeIsrequired: true
      },
      {
        description: 'Date change handler.\n\nThis is called when the user changes the date or time in the UI. The first and only argument is a Date object representing the new date and time.\n\n',
        title: 'onDateChange',
        propType: 'PropTypes.func',
        propTypeIsrequired: true
      },
      {
        description: 'Maximum date.\n\nRestricts the range of possible date/time values.',
        title: 'maximumDate',
        propType: 'PropTypes.instanceOf()',
        propTypeIsrequired: false
      },
      {
        description: 'Minimum date.\n\nRestricts the range of possible date/time values.',
        title: 'minimumDate',
        propType: 'PropTypes.instanceOf()',
        propTypeIsrequired: false
      },
      {
        description: 'The interval at which minutes can be selected.',
        title: 'minuteInterval',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'The date picker mode.\n\nType: enum(\'date\', \'time\', \'datetime\')',
        title: 'mode',
        propType: 'PropTypes.oneOf([\'\', \'\'])',
        propTypeIsrequired: false
      },
      {
        description: 'The locale for the date picker. Value needs to be a Locale ID.',
        title: 'locale',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      },
      {
        description: 'Timezone offset in minutes.\n\nBy default, the date picker will use the device\'s timezone. With this parameter, it is possible to force a certain timezone offset. For instance, to show times in Pacific Standard Time, pass -7 * 60.',
        title: 'timeZoneOffsetInMinutes',
        propType: 'PropTypes.number',
        propTypeIsrequired: false
      }
    ],
    description: 'Use DatePickerIOS to render a date/time picker (selector) on iOS. This is a controlled component, so you must hook in to the onDateChange callback and update the date prop in order for the component to update, otherwise the user\'s change will be reverted immediately to reflect props.date as the source of truth.\n\nExample\nimport React, { Component } from \'react\'\nimport {\n  DatePickerIOS,\n  View,\n  StyleSheet,\n} from \'react-native\'\n\nexport default class App extends Component {\n  constructor(props) {\n    super(props);\n    this.state = { chosenDate: new Date() };\n\n    this.setDate = this.setDate.bind(this);\n  }\n\n  setDate(newDate) {\n    this.setState({chosenDate: newDate})\n  }\n\n  render() {\n    return (\n      <View style={styles.container}>\n        <DatePickerIOS\n          date={this.state.chosenDate}\n          onDateChange={this.setDate}\n        />\n      </View>\n    )\n  }\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: \'center\'\n  },\n})',
    id: 'zfpJHOMJWkqPZLQV9tpZ',
    isDefault: true,
    provider: 'ReactNative',
    techno: 'React Native',
    title: 'DatePickerIOS',
    subtitle: 'ReactNative'
  },
  {
    children: [],
    closeTag: false,
    componentImport: 'react-bootstrap/lib/Table',
    componentProps: [
      {
        description: 'striped\n\ndefault: false',
        title: 'striped',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'bordered\n\ndefault: false',
        title: 'bordered',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: false',
        title: 'condensed',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: false',
        title: 'hover',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'default: false',
        title: 'responsive',
        propType: 'PropTypes.bool',
        propTypeIsrequired: false
      },
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'table\'',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: '#Tables Table\nUse the striped, bordered, condensed and hover props to customise the table.\n\n<Table striped bordered condensed hover>\n  <thead>\n    <tr>\n      <th>#</th>\n      <th>First Name</th>\n      <th>Last Name</th>\n      <th>Username</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>1</td>\n      <td>Mark</td>\n      <td>Otto</td>\n      <td>@mdo</td>\n    </tr>\n    <tr>\n      <td>2</td>\n      <td>Jacob</td>\n      <td>Thornton</td>\n      <td>@fat</td>\n    </tr>\n    <tr>\n      <td>3</td>\n      <td colSpan="2">Larry the Bird</td>\n      <td>@twitter</td>\n    </tr>\n  </tbody>\n</Table>;\n\n#Responsive\nAdd responsive prop to make them scroll horizontally up to small devices (under 768px). When viewing on anything larger than 768px wide, you will not see any difference in these tables.\n\n<Table responsive>\n  <thead>\n    <tr>\n      <th>#</th>\n      <th>Table heading</th>\n      <th>Table heading</th>\n      <th>Table heading</th>\n      <th>Table heading</th>\n      <th>Table heading</th>\n      <th>Table heading</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>1</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n    </tr>\n    <tr>\n      <td>2</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n    </tr>\n    <tr>\n      <td>3</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n    </tr>\n  </tbody>\n</Table>;',
    id: 'zgLvCUqQXXJdieaioe72',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'Table'
  },
  {
    children: [],
    closeTag: true,
    componentImport: 'react-bootstrap/lib/ButtonToolbar',
    componentProps: [
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'btn-toolbar\'',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'ButtonToolbar',
    id: 'zo8Chk8vnL0PEIeVmqJN',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'ButtonToolbar'
  },
  {
    children: [],
    closeTag: false,
    componentImport: 'react-bootstrap/lib/ModalFooter',
    componentProps: [
      {
        description: 'You can use a custom element type for this component.\n\ndefault: \'div\'',
        title: 'componentClass',
        propType: 'PropTypes.element',
        propTypeIsrequired: false
      },
      {
        description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'modal-footer\'',
        title: 'bsClass',
        propType: 'PropTypes.string',
        propTypeIsrequired: false
      }
    ],
    description: 'Modal.Footer',
    id: 'zul9y7IXXu6HIt5xXx9L',
    isDefault: true,
    provider: 'Bootstrap_0_32_4',
    providerVersion: '0.32.4',
    subtitle: 'Bootstrap_0_32_4',
    techno: 'React',
    title: 'Modal__Footer'
  }
];