import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // =============================================================
   GENERAL STYLES
   ============================================================
  'body': {
    'fontFamily': ''Open Sans', sans-serif',
    'lineHeight': [{ 'unit': 'px', 'value': 30 }]
  },
  'h2': {
    'paddingTop': [{ 'unit': 'px', 'value': 50 }],
    'textTransform': 'uppercase',
    'color': '#000'
  },
  'h3': {
    'paddingTop': [{ 'unit': 'px', 'value': 30 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 40 }],
    'textAlign': 'center',
    'fontWeight': '900',
    'textTransform': 'uppercase'
  },
  'h4': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'paddingTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'section': {
    'paddingTop': [{ 'unit': 'px', 'value': 30 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 40 }]
  },
  'just-pad': {
    'paddingBottom': [{ 'unit': 'px', 'value': 50 }],
    'paddingTop': [{ 'unit': 'px', 'value': 80 }]
  },
  'p': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }]
  },
  'button': {
    'backgroundColor': '#AEC225',
    'width': [{ 'unit': 'px', 'value': 180 }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'borderRadius': '20px',
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#AEC225' }],
    'color': 'white',
    'textTransform': 'uppercase',
    'fontWeight': '700',
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'button:hover': {
    'backgroundColor': '#90A116'
  },
  // =====================================
  NAVBAR STYLES
  ===================================
  'logo-custom': {
    'maxHeight': [{ 'unit': 'px', 'value': 30 }]
  },
  '#menu': {
    'backgroundColor': '#fff',
    'color': '#26A6D1',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'fontWeight': '900',
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#26A6D1' }]
  },
  'navbar-inverse': {
    'borderColor': 'transparent'
  },
  'navbar-inverse navbar-nav>li>a': {
    'color': '#26A6D1'
  },
  'navbar-inverse navbar-nav>li>a:hover': {
    'color': '#26A6D1'
  },
  'navbar-inverse navbar-nav>li>a:focus': {
    'color': '#AEC225'
  },
  'home-mail': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'fontWeight': 'normal',
    'paddingLeft': [{ 'unit': 'px', 'value': 5 }]
  },
  'navbar-inverse navbar-toggle': {
    'borderColor': '#26A6D1'
  },
  'navbar-inverse navbar-toggle:hover': {
    'borderColor': '#AEC225',
    'backgroundColor': '#AEC225'
  },
  'navbar-inverse navbar-toggle:focus': {
    'borderColor': '#AEC225',
    'backgroundColor': '#AEC225'
  },
  'navbar-inverse navbar-toggle:hover icon-bar': {
    'backgroundColor': '#FFF'
  },
  'navbar-inverse navbar-toggle:focus icon-bar': {
    'backgroundColor': '#FFF'
  },
  'navbar-inverse navbar-toggle icon-bar': {
    'backgroundColor': '#26A6D1'
  },
  // =====================================
  HEADERS STYLES
  ===================================
  'header-sec': {
    'paddingTop': [{ 'unit': 'px', 'value': 10 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 60 }],
    'background': 'url(../img/head.png) no-repeat center center',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'WebkitBackgroundSize': 'cover',
    'backgroundSize': 'cover',
    'color': '#fff',
    'backgroundAttachment': 'fixed'
  },
  'header-sec p': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'header-sec img': {
    'height': [{ 'unit': 'px', 'value': 70 }]
  },
  'header-sec overlay': {
    'background': '-webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(29,29,29,0.2)), color-stop(100%,rgba(29,29,29,1)))',
    'minHeight': [{ 'unit': 'px', 'value': 500 }]
  },
  'header-sec h2': {
    'color': '#fff',
    'paddingTop': [{ 'unit': 'px', 'value': 150 }]
  },
  // =====================================
  NOSOTROS
  ===================================
  'nosotros media-body': {
    'textAlign': 'center'
  },
  'nosotros media-body i': {
    'color': '#26A6D1'
  },
  'nosotros media-body p': {
    'textAlign': 'left'
  },
  // =====================================
  SERVICIOS
  ===================================
  'servicios': {
    'paddingTop': [{ 'unit': 'px', 'value': 10 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 60 }],
    'background': 'url(../img/servicios.png) no-repeat center center',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'WebkitBackgroundSize': 'cover',
    'backgroundSize': 'cover',
    'color': '#fff',
    'backgroundAttachment': 'fixed'
  },
  'servicios overlay': {
    'background': '-webkit-gradient(linear, left top, left bottom, color-stop(50%,rgba(30,30,30,0.5)), color-stop(50%,rgba(30,30,30,0.5)))',
    'minHeight': [{ 'unit': 'px', 'value': 300 }]
  },
  'servicios h3': {
    'color': '#fff',
    'paddingTop': [{ 'unit': 'px', 'value': 60 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 30 }]
  },
  'servicios h4': {
    'lineHeight': [{ 'unit': 'px', 'value': 35 }]
  },
  'servicios service': {
    'marginBottom': [{ 'unit': 'px', 'value': 50 }]
  },
  'servicios service i': {
    'color': '#B3D3DE'
  },
  'servicios button': {
    'marginBottom': [{ 'unit': 'px', 'value': 60 }]
  },
  // =====================================
  PRICING STYLES
  ===================================
  'price-sec': {
    'paddingTop': [{ 'unit': 'px', 'value': 40 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 60 }],
    'color': '#fff'
  },
  'price-sec span': {
    'fontSize': [{ 'unit': 'px', 'value': 90 }]
  },
  'single-price': {
    'backgroundColor': 'rgba(8, 134, 74, 1)',
    'padding': [{ 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 50 }]
  },
  'multi-price': {
    'backgroundColor': '#4bb777',
    'padding': [{ 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 50 }]
  },
  // =====================================
  CONTACT STYLES
  ===================================
  'contact': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'lineHeight': [{ 'unit': 'px', 'value': 35 }]
  },
  // =====================================
  FOOTER STYLES
  ===================================
  'myfooter': {
    'backgroundColor': '#4bb777',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 40 }],
    'color': '#fff',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'textAlign': 'right'
  }
});
