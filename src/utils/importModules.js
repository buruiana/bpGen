export const getImport = async type => {
  // switch (type) {
  //   case 'react-bootstrap/Navbar':
  //     return await import('react-bootstrap/Navbar');
  //   case 'react-bootstrap/Carousel':
  //     return await import('react-bootstrap/Carousel');
  //   case 'react-bootstrap/Container':
  //     return await import('react-bootstrap/Container');
  //   case 'react-bootstrap/ListGroup':
  //     return await import('react-bootstrap/ListGroup');
  //   case 'react-bootstrap/lib/ListGroupItem':
  //     return await import(
  //       'react-bootstrap/lib/ListGroupItem'
  //     );
  //   case 'react-bootstrap/Card':
  //     return await import('react-bootstrap/Card');
  //   case 'react-bootstrap/Image':
  //     return await import('react-bootstrap/Image');
  //   case 'react-bootstrap/FigureImage':
  //     return await import('react-bootstrap/FigureImage');
  //   case 'react-bootstrap/Alert':
  //     return await import('react-bootstrap/Alert');
  //   case 'react-bootstrap/lib/Navbar':
  //     return await import('react-bootstrap/lib/Navbar');
  //   case 'react-bootstrap/lib/Image':
  //     return await import('react-bootstrap/lib/Image');
  //   case 'react-bootstrap/Tabs':
  //     return await import('react-bootstrap/Tabs');
  //   case 'react-bootstrap/lib/MenuItem':
  //     return await import('react-bootstrap/lib/MenuItem');
  //   case 'react-bootstrap/Carousel':
  //     return await import('react-bootstrap/Carousel');
  //   case 'react-bootstrap/lib/ModalDialog':
  //     return await import(
  //       'react-bootstrap/lib/ModalDialog'
  //     );
  //   case 'react-bootstrap/lib/NavbarCollapse':
  //     return await import(
  //       'react-bootstrap/lib/NavbarCollapse'
  //     );
  //   case 'react-bootstrap/lib/Jumbotron':
  //     return await import('react-bootstrap/lib/Jumbotron');
  //   case 'react-bootstrap/lib/InputGroupAddon':
  //     return await import(
  //       'react-bootstrap/lib/InputGroupAddon'
  //     );
  //   case 'react-bootstrap/Collapse':
  //     return await import('react-bootstrap/Collapse');
  //   case 'react-bootstrap/FigureCaption':
  //     return await import('react-bootstrap/FigureCaption');
  //   case 'react-bootstrap/lib/NavbarToggle':
  //     return await import(
  //       'react-bootstrap/lib/NavbarToggle'
  //     );
  //   case 'react-bootstrap/lib/ListGroup':
  //     return await import('react-bootstrap/lib/ListGroup');
  //   case 'react-bootstrap/lib/Badge':
  //     return await import('react-bootstrap/lib/Badge');
  //   case 'react-bootstrap/lib/Tab':
  //     return await import('react-bootstrap/lib/Tab');
  //   case 'react-bootstrap/Dropdown':
  //     return await import('react-bootstrap/Dropdown');
  //   case 'react-bootstrap/ButtonGroup':
  //     return await import('react-bootstrap/ButtonGroup');
  //   case 'react-bootstrap/lib/PanelCollapse':
  //     return await import(
  //       'react-bootstrap/lib/PanelCollapse'
  //     );
  //   case 'react-bootstrap/lib/Carousel':
  //     return await import('react-bootstrap/lib/Carousel');
  //   case 'react-bootstrap/lib/BreadcrumbItem':
  //     return await import(
  //       'react-bootstrap/lib/BreadcrumbItem'
  //     );
  //   case 'react-bootstrap/ModalHeader':
  //     return await import('react-bootstrap/ModalHeader');
  //   case 'react-bootstrap/InputGroup':
  //     return await import('react-bootstrap/InputGroup');
  //   case 'react-bootstrap/ModalDialog':
  //     return await import('react-bootstrap/ModalDialog');
  //   case 'react-bootstrap/lib/NavbarHeader':
  //     return await import(
  //       'react-bootstrap/lib/NavbarHeader'
  //     );
  //   case 'react-bootstrap/Card':
  //     return await import('react-bootstrap/Card');
  //   case 'react-bootstrap/lib/OverlayTrigger':
  //     return await import(
  //       'react-bootstrap/lib/OverlayTrigger'
  //     );
  //   case 'react-bootstrap/Tooltip':
  //     return await import('react-bootstrap/Tooltip');
  //   case 'react-bootstrap/lib/Nav':
  //     return await import('react-bootstrap/lib/Nav');
  //   case 'react-bootstrap/lib/ControlLabel':
  //     return await import(
  //       'react-bootstrap/lib/ControlLabel'
  //     );
  //   case 'react-bootstrap/Badge':
  //     return await import('react-bootstrap/Badge');
  //   case 'react-bootstrap/Navbar':
  //     return await import('react-bootstrap/Navbar');
  //   case 'react-bootstrap/Nav':
  //     return await import('react-bootstrap/Nav');
  //   case 'react-bootstrap/lib/Tooltip':
  //     return await import('react-bootstrap/lib/Tooltip');
  //   case 'react-bootstrap/lib/InputGroupButton':
  //     return await import(
  //       'react-bootstrap/lib/InputGroupButton'
  //     );
  //   case 'react-bootstrap/TabContainer':
  //     return await import('react-bootstrap/TabContainer');
  //   case 'react-bootstrap/lib/Radio':
  //     return await import('react-bootstrap/lib/Radio');
  //   case 'react-bootstrap/lib/Form':
  //     return await import('react-bootstrap/lib/Form');
  //   case 'react-bootstrap/Figure':
  //     return await import('react-bootstrap/Figure');
  //   case 'react-bootstrap/ListGroup':
  //     return await import('react-bootstrap/ListGroup');
  //   case 'react-bootstrap/Breadcrumb':
  //     return await import('react-bootstrap/Breadcrumb');
  //   case 'react-bootstrap/lib/Checkbox':
  //     return await import('react-bootstrap/lib/Checkbox');
  //   case 'react-bootstrap/lib/Glyphicon':
  //     return await import('react-bootstrap/lib/Glyphicon');
  //   case 'react-bootstrap/Modal':
  //     return await import('react-bootstrap/Modal');
  //   case 'react-bootstrap/lib/TabContainer':
  //     return await import(
  //       'react-bootstrap/lib/TabContainer'
  //     );
  //   case 'react-bootstrap/Row':
  //     return await import('react-bootstrap/Row');
  //   case 'react-bootstrap/lib/Overlay':
  //     return await import('react-bootstrap/lib/Overlay');
  //   case 'react-bootstrap/Dropdow':
  //     return await import('react-bootstrap/Dropdow');
  //   case 'react-bootstrap/lib/FormControlFeedback':
  //     return await import(
  //       'react-bootstrap/lib/FormControlFeedback'
  //     );
  //   case 'react-bootstrap/Dropdown':
  //     return await import('react-bootstrap/Dropdown');
  //   case 'react-bootstrap/TabPane':
  //     return await import('react-bootstrap/TabPane');
  //   case 'react-bootstrap/lib/Tabs':
  //     return await import('react-bootstrap/lib/Tabs');
  //   case 'react-bootstrap/Media':
  //     return await import('react-bootstrap/Media');
  //   case 'react-bootstrap/Tab':
  //     return await import('react-bootstrap/Tab');
  //   case 'react-bootstrap/ProgressBar':
  //     return await import('react-bootstrap/ProgressBar');
  //   case 'react-bootstrap/Jumbotron':
  //     return await import('react-bootstrap/Jumbotron');
  //   case 'react-bootstrap/lib/ProgressBar':
  //     return await import(
  //       'react-bootstrap/lib/ProgressBar'
  //     );
  //   case 'react-bootstrap/Dropdown':
  //     return await import('react-bootstrap/Dropdown');
  //   case 'react-bootstrap/lib/Alert':
  //     return await import('react-bootstrap/lib/Alert');
  //   case 'react-bootstrap/CardGroup':
  //     return await import('react-bootstrap/CardGroup');
  //   case 'react-bootstrap/lib/FormControl':
  //     return await import(
  //       'react-bootstrap/lib/FormControl'
  //     );
  //   case 'react-bootstrap/lib/DropdownButton':
  //     return await import(
  //       'react-bootstrap/lib/DropdownButton'
  //     );
  //   case 'react-bootstrap/lib/ToggleButton':
  //     return await import(
  //       'react-bootstrap/lib/ToggleButton'
  //     );
  //   case 'react-bootstrap/lib/Modal':
  //     return await import('react-bootstrap/lib/Modal');
  //   case 'react-bootstrap/Table':
  //     return await import('react-bootstrap/Table');
  //   case 'react-bootstrap/ResponsiveEmbed':
  //     return await import(
  //       'react-bootstrap/ResponsiveEmbed'
  //     );
  //   case 'react-bootstrap/PageItem':
  //     return await import('react-bootstrap/PageItem');
  //   case 'react-bootstrap/lib/PanelHeading':
  //     return await import(
  //       'react-bootstrap/lib/PanelHeading'
  //     );
  //   case 'react-bootstrap/lib/NavItem':
  //     return await import('react-bootstrap/lib/NavItem');
  //   case 'react-bootstrap/ToggleButton':
  //     return await import('react-bootstrap/ToggleButton');
  //   case 'react-bootstrap/lib/HelpBlock':
  //     return await import('react-bootstrap/lib/HelpBlock');
  //   case 'react-bootstrap/lib/FormControlStatic':
  //     return await import(
  //       'react-bootstrap/lib/FormControlStatic'
  //     );
  //   case 'react-jsonschema-form':
  //     return await import('react-jsonschema-form');
  //   case 'react-bootstrap/Alert':
  //     return await import('react-bootstrap/Alert');
  //   case 'react-bootstrap/Dropdown':
  //     return await import('react-bootstrap/Dropdown');
  //   case 'react-bootstrap/lib/ModalBody':
  //     return await import('react-bootstrap/lib/ModalBody');
  //   case 'react-bootstrap/Alert':
  //     return await import('react-bootstrap/Alert');
  //   case 'react-bootstrap/Navbar':
  //     return await import('react-bootstrap/Navbar');
  //   case 'react-bootstrap/lib/SplitButton':
  //     return await import(
  //       'react-bootstrap/lib/SplitButton'
  //     );
  //   case 'react-bootstrap/Breadcrumb':
  //     return await import('react-bootstrap/Breadcrumb');
  //   case 'react-bootstrap/lib/Label':
  //     return await import('react-bootstrap/lib/Label');
  //   case 'react-bootstrap/Fade':
  //     return await import('react-bootstrap/Fade');
  //   case 'react-bootstrap/TabContent':
  //     return await import('react-bootstrap/TabContent');
  //   case 'react-bootstrap/lib/Button':
  //     return await import('react-bootstrap/lib/Button');
  //   case 'react-bootstrap/Nav':
  //     return await import('react-bootstrap/Nav');
  //   case 'react-bootstrap/ModalBody':
  //     return await import('react-bootstrap/ModalBody');
  //   case 'react-bootstrap/lib/ButtonGroup':
  //     return await import(
  //       'react-bootstrap/lib/ButtonGroup'
  //     );
  //   case 'react-bootstrap/lib/Thumbnail':
  //     return await import('react-bootstrap/lib/Thumbnail');
  //   case 'react-bootstrap/lib/PanelToggle':
  //     return await import(
  //       'react-bootstrap/lib/PanelToggle'
  //     );
  //   case 'react-bootstrap/Card':
  //     return await import('react-bootstrap/Card');
  //   case 'react-bootstrap/Button':
  //     return await import('react-bootstrap/Button');
  //   case 'react-bootstrap/lib/InputGroup':
  //     return await import('react-bootstrap/lib/InputGroup');
  //   case 'react-bootstrap/lib/ToggleButtonGroup':
  //     return await import(
  //       'react-bootstrap/lib/ToggleButtonGroup'
  //     );
  //   case 'react-bootstrap/lib/Breadcrumb':
  //     return await import('react-bootstrap/lib/Breadcrumb');
  //   case 'react-bootstrap/DropdownButton':
  //     return await import('react-bootstrap/DropdownButton');
  //   case 'react-bootstrap/lib/CarouselCaption':
  //     return await import(
  //       'react-bootstrap/lib/CarouselCaption'
  //     );
  //   case 'react-bootstrap/ModalFooter':
  //     return await import('react-bootstrap/ModalFooter');
  //   case 'react-bootstrap/ButtonToolbar':
  //     return await import('react-bootstrap/ButtonToolbar');
  //   case 'react-bootstrap/Col':
  //     return await import('react-bootstrap/Col');
  //   case 'react-bootstrap/lib/Modalname':
  //     return await import('react-bootstrap/lib/Modalname');
  //   case 'react-bootstrap/Carousel':
  //     return await import('react-bootstrap/Carousel');
  //   case 'react-bootstrap/lib/TabPane':
  //     return await import('react-bootstrap/lib/TabPane');
  //   case 'react-bootstrap/lib/TabContent':
  //     return await import('react-bootstrap/lib/TabContent');
  //   case 'react-bootstrap/OverlayTrigger':
  //     return await import('react-bootstrap/OverlayTrigger');
  //   case 'react-bootstrap/lib/CarouselItem':
  //     return await import(
  //       'react-bootstrap/lib/CarouselItem'
  //     );
  //   case 'react-bootstrap/Card':
  //     return await import('react-bootstrap/Card');
  //   case 'react-bootstrap/lib/PageItem':
  //     return await import('react-bootstrap/lib/PageItem');
  //   case 'react-bootstrap/Overlay':
  //     return await import('react-bootstrap/Overlay');
  //   case 'react-bootstrap/Pagination':
  //     return await import('react-bootstrap/Pagination');
  //   case 'react-bootstrap/lib/PageHeader':
  //     return await import('react-bootstrap/lib/PageHeader');
  //   case 'react-bootstrap/lib/FormGroup':
  //     return await import('react-bootstrap/lib/FormGroup');
  //   case 'react-bootstrap/ToggleButtonGroup':
  //     return await import(
  //       'react-bootstrap/ToggleButtonGroup'
  //     );
  //   case 'react-bootstrap/lib/Pager':
  //     return await import('react-bootstrap/lib/Pager');
  //   case 'react-bootstrap/lib/ModalHeader':
  //     return await import(
  //       'react-bootstrap/lib/ModalHeader'
  //     );
  //   case 'react-bootstrap/Dropdown':
  //     return await import('react-bootstrap/Dropdown');
  //   case 'react-bootstrap/Popover':
  //     return await import('react-bootstrap/Popover');
  //   case 'react-bootstrap/Nav':
  //     return await import('react-bootstrap/Nav');
  //   case 'react-bootstrap/lib/Panel':
  //     return await import('react-bootstrap/lib/Panel');
  //   case 'react-bootstrap/SplitButton':
  //     return await import('react-bootstrap/SplitButton');
  //   case 'react-bootstrap/lib/NavbarBrand':
  //     return await import(
  //       'react-bootstrap/lib/NavbarBrand'
  //     );
  //   case 'react-bootstrap/lib/Popover':
  //     return await import('react-bootstrap/lib/Popover');
  //   case 'react-bootstrap/Modalname':
  //     return await import('react-bootstrap/Modalname');
  //   case 'react-bootstrap/CardDeck':
  //     return await import('react-bootstrap/CardDeck');
  //   case 'react-bootstrap/lib/Well':
  //     return await import('react-bootstrap/lib/Well');
  //   case 'react-bootstrap/lib/Dropdown':
  //     return await import('react-bootstrap/lib/Dropdown');
  //   case 'react-bootstrap/Navbar':
  //     return await import('react-bootstrap/Navbar');
  //   case 'react-bootstrap/lib/Table':
  //     return await import('react-bootstrap/lib/Table');
  //   case 'react-bootstrap/lib/ButtonToolbar':
  //     return await import(
  //       'react-bootstrap/lib/ButtonToolbar'
  //     );
  //   case 'react-bootstrap/lib/ModalFooter':
  //     return await import(
  //       'react-bootstrap/lib/ModalFooter'
  //     );
  // }
};
