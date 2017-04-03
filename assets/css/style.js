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
    'paddingBottom': [{ 'unit': 'px', 'value': 20 }],
    'color': '#000'
  },
  'h3': {
    'paddingTop': [{ 'unit': 'px', 'value': 30 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 40 }],
    'textAlign': 'center',
    'fontWeight': '900',
    'textTransform': 'uppercase'
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
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }]
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
  'header-sec overlay': {
    'background': '-webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(29,29,29,0.2)), color-stop(100%,rgba(29,29,29,1)))',
    'minHeight': [{ 'unit': 'px', 'value': 500 }]
  },
  'header-sec h2': {
    'color': '#fff',
    'paddingTop': [{ 'unit': 'px', 'value': 150 }]
  },
  // =====================================
  TESTIMONIALS STYLES
  ===================================
  'testi-sec': {
    'paddingTop': [{ 'unit': 'px', 'value': 10 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 60 }],
    'background': 'url(../img/head.png) no-repeat center center',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'WebkitBackgroundSize': 'cover',
    'backgroundSize': 'cover',
    'color': '#fff',
    'backgroundAttachment': 'fixed'
  },
  'testi-sec overlay': {
    'background': '-webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(29,29,29,0.2)), color-stop(100%,rgba(29,29,29,1)))',
    'minHeight': [{ 'unit': 'px', 'value': 300 }]
  },
  'testi-sec h3': {
    'color': '#fff',
    'paddingTop': [{ 'unit': 'px', 'value': 60 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 30 }]
  },
  'testi-sec h4': {
    'lineHeight': [{ 'unit': 'px', 'value': 35 }]
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
