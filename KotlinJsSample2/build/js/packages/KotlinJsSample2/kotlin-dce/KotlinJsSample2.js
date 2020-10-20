(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-wrappers-kotlin-react-dom-jsLegacy', 'kotlin-wrappers-kotlin-styled-jsLegacy', 'kotlinx-html-js', 'kotlin-wrappers-kotlin-react-jsLegacy', 'kotlin-css'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-wrappers-kotlin-react-dom-jsLegacy'), require('kotlin-wrappers-kotlin-styled-jsLegacy'), require('kotlinx-html-js'), require('kotlin-wrappers-kotlin-react-jsLegacy'), require('kotlin-css'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'KotlinJsSample2'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'KotlinJsSample2'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-dom-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'KotlinJsSample2'. Its dependency 'kotlin-wrappers-kotlin-react-dom-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-dom-jsLegacy' is loaded prior to 'KotlinJsSample2'.");
    }if (typeof this['kotlin-wrappers-kotlin-styled-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'KotlinJsSample2'. Its dependency 'kotlin-wrappers-kotlin-styled-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-styled-jsLegacy' is loaded prior to 'KotlinJsSample2'.");
    }if (typeof this['kotlinx-html-js'] === 'undefined') {
      throw new Error("Error loading module 'KotlinJsSample2'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'KotlinJsSample2'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'KotlinJsSample2'. Its dependency 'kotlin-wrappers-kotlin-react-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-jsLegacy' is loaded prior to 'KotlinJsSample2'.");
    }if (typeof this['kotlin-css'] === 'undefined') {
      throw new Error("Error loading module 'KotlinJsSample2'. Its dependency 'kotlin-css' was not found. Please, check whether 'kotlin-css' is loaded prior to 'KotlinJsSample2'.");
    }root.KotlinJsSample2 = factory(typeof KotlinJsSample2 === 'undefined' ? {} : KotlinJsSample2, kotlin, this['kotlin-wrappers-kotlin-react-dom-jsLegacy'], this['kotlin-wrappers-kotlin-styled-jsLegacy'], this['kotlinx-html-js'], this['kotlin-wrappers-kotlin-react-jsLegacy'], this['kotlin-css']);
  }
}(this, function (_, Kotlin, $module$kotlin_wrappers_kotlin_react_dom_jsLegacy, $module$kotlin_wrappers_kotlin_styled_jsLegacy, $module$kotlinx_html_js, $module$kotlin_wrappers_kotlin_react_jsLegacy, $module$kotlin_css) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var getKClass = Kotlin.getKClass;
  var Unit = Kotlin.kotlin.Unit;
  var render = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.render_2955dm$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var InputType = $module$kotlinx_html_js.kotlinx.html.InputType;
  var throwCCE = Kotlin.throwCCE;
  var set_onChangeFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onChangeFunction_pszlq2$;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var RComponent_init = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RComponent_init_8bz2yq$;
  var RComponent = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RComponent;
  var reversed = Kotlin.kotlin.text.reversed_gw00vp$;
  var attributesMapOf = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var BR_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BR;
  var RDOMBuilder_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.RDOMBuilder;
  var attributesMapOf_0 = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var IMG_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.IMG;
  var html = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
  var DIV_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var StyledDOMBuilder_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.styled.StyledDOMBuilder;
  var enumEncode = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
  var attributesMapOf_1 = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var INPUT_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.INPUT;
  var DIV_init_0 = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var StyleSheet = $module$kotlin_wrappers_kotlin_styled_jsLegacy.styled.StyleSheet;
  var get_px = $module$kotlin_css.kotlinx.css.get_px_rcaex3$;
  var padding = $module$kotlin_css.kotlinx.css.padding_9vmwvs$;
  var rgb = $module$kotlin_css.kotlinx.css.rgb_qt1dr2$;
  var set_backgroundColor = $module$kotlin_css.kotlinx.css.set_backgroundColor_ommczd$;
  var set_color = $module$kotlin_css.kotlinx.css.set_color_ommczd$;
  var margin = $module$kotlin_css.kotlinx.css.margin_cx3uck$;
  var set_fontSize = $module$kotlin_css.kotlinx.css.set_fontSize_n8chyh$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  Welcome.prototype = Object.create(RComponent.prototype);
  Welcome.prototype.constructor = Welcome;
  WelcomeStyles.prototype = Object.create(StyleSheet.prototype);
  WelcomeStyles.prototype.constructor = WelcomeStyles;
  function main$lambda$lambda$lambda$lambda($receiver) {
    $receiver.name = 'Welcome to JavaScript';
    return Unit;
  }
  function main$lambda$lambda$lambda($receiver) {
    $receiver.attrs_slhiwc$(main$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function main$lambda$lambda($receiver) {
    $receiver.child_ssazr1$(getKClass(Welcome), main$lambda$lambda$lambda);
    return Unit;
  }
  function main$lambda(it) {
    render(document.getElementById('root'), void 0, main$lambda$lambda);
    return Unit;
  }
  function main() {
    window.onload = main$lambda;
  }
  function br$lambda(closure$classes) {
    return function (it) {
      return new BR_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function img$lambda(closure$alt, closure$src, closure$classes) {
    return function (it) {
      return new IMG_init(attributesMapOf_0(['alt', closure$alt, 'src', closure$src, 'class', closure$classes]), it);
    };
  }
  function styledDiv$lambda(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function styledInput$lambda(closure$type, closure$formEncType, closure$formMethod, closure$name) {
    return function (it) {
      return new INPUT_init(attributesMapOf_1(['type', closure$type != null ? enumEncode(closure$type) : null, 'formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'name', closure$name]), it);
    };
  }
  function div$lambda(closure$classes) {
    return function (it) {
      return new DIV_init_0(attributesMapOf('class', closure$classes), it);
    };
  }
  function WelcomeState(name, password) {
    this.name = name;
    this.password = password;
  }
  WelcomeState.$metadata$ = {kind: Kind_CLASS, simpleName: 'WelcomeState', interfaces: []};
  WelcomeState.prototype.component1 = function () {
    return this.name;
  };
  WelcomeState.prototype.component2 = function () {
    return this.password;
  };
  WelcomeState.prototype.copy_puj7f4$ = function (name, password) {
    return new WelcomeState(name === void 0 ? this.name : name, password === void 0 ? this.password : password);
  };
  WelcomeState.prototype.toString = function () {
    return 'WelcomeState(name=' + Kotlin.toString(this.name) + (', password=' + Kotlin.toString(this.password)) + ')';
  };
  WelcomeState.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.password) | 0;
    return result;
  };
  WelcomeState.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.password, other.password)))));
  };
  function Welcome(props) {
    RComponent_init(props, this);
    this.state = new WelcomeState(props.name, props.password);
  }
  function Welcome$render$lambda$lambda$lambda(this$Welcome) {
    return function (event) {
      var tmp$, tmp$_0;
      tmp$_0 = new WelcomeState((Kotlin.isType(tmp$ = event.target, HTMLInputElement) ? tmp$ : throwCCE()).value, '');
      this$Welcome.setState(tmp$_0);
      return Unit;
    };
  }
  function Welcome$render$lambda$lambda$lambda_0(this$Welcome) {
    return function (event) {
      var tmp$, tmp$_0;
      tmp$_0 = new WelcomeState('', (Kotlin.isType(tmp$ = event.target, HTMLInputElement) ? tmp$ : throwCCE()).value);
      this$Welcome.setState(tmp$_0);
      return Unit;
    };
  }
  function Welcome$render$lambda$lambda$lambda_1(event) {
    window.alert('Welcome');
    return Unit;
  }
  Welcome.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new StyledDOMBuilder_init(styledDiv$lambda);
    $receiver_0.css.unaryPlus_ocqyl0$(WelcomeStyles_getInstance().textContainer);
    var $receiver_1 = this.state.name;
    var tmp$;
    $receiver_0.unaryPlus_pdl1vz$('Hello, ' + reversed(Kotlin.isCharSequence(tmp$ = $receiver_1) ? tmp$ : throwCCE()).toString());
    $receiver_0.unaryPlus_pdl1vz$('\n' + ' Password value ' + this.state.password);
    $receiver.child_52psg1$($receiver_0.create());
    var $receiver_0_0 = new StyledDOMBuilder_init(styledInput$lambda(null, null, null, null));
    $receiver_0_0.css.unaryPlus_ocqyl0$(WelcomeStyles_getInstance().textInput);
    var $receiver_2 = $receiver_0_0.attrs;
    $receiver_2.type = InputType.text;
    $receiver_2.value = this.state.name;
    set_onChangeFunction($receiver_2, Welcome$render$lambda$lambda$lambda(this));
    $receiver.child_52psg1$($receiver_0_0.create());
    var $receiver_0_1 = new RDOMBuilder_init(div$lambda(null));
    var $receiver_0_2 = new RDOMBuilder_init(br$lambda(null));
    $receiver_0_1.child_52psg1$($receiver_0_2.create());
    $receiver.child_52psg1$($receiver_0_1.create());
    var $receiver_0_3 = new StyledDOMBuilder_init(styledInput$lambda(null, null, null, null));
    $receiver_0_3.css.unaryPlus_ocqyl0$(WelcomeStyles_getInstance().textInput);
    var $receiver_3 = $receiver_0_3.attrs;
    $receiver_3.type = InputType.text;
    $receiver_3.value = this.state.password;
    set_onChangeFunction($receiver_3, Welcome$render$lambda$lambda$lambda_0(this));
    $receiver.child_52psg1$($receiver_0_3.create());
    var $receiver_0_4 = new StyledDOMBuilder_init(styledInput$lambda(null, null, null, null));
    $receiver_0_4.css.unaryPlus_ocqyl0$(WelcomeStyles_getInstance().textInput);
    var $receiver_4 = $receiver_0_4.attrs;
    $receiver_4.type = InputType.button;
    $receiver_4.value = 'Submit';
    set_onClickFunction($receiver_4, Welcome$render$lambda$lambda$lambda_1);
    $receiver.child_52psg1$($receiver_0_4.create());
    var $receiver_0_5 = new RDOMBuilder_init(div$lambda(null));
    var $receiver_0_6 = new RDOMBuilder_init(br$lambda(null));
    $receiver_0_5.child_52psg1$($receiver_0_6.create());
    $receiver.child_52psg1$($receiver_0_5.create());
    var $receiver_0_7 = new RDOMBuilder_init(div$lambda(null));
    var $receiver_0_8 = new RDOMBuilder_init(img$lambda(null, 'http://placekitten.com/g/200/300', null));
    $receiver_0_7.child_52psg1$($receiver_0_8.create());
    $receiver.child_52psg1$($receiver_0_7.create());
  };
  Welcome.$metadata$ = {kind: Kind_CLASS, simpleName: 'Welcome', interfaces: [RComponent]};
  function WelcomeStyles() {
    WelcomeStyles_instance = this;
    StyleSheet.call(this, 'WelcomeStyles', true);
    this.textContainer_felub4$_0 = this.css_wopuc9$([], WelcomeStyles$textContainer$lambda);
    this.textInput_7s4gnt$_0 = this.css_wopuc9$([], WelcomeStyles$textInput$lambda);
  }
  var WelcomeStyles$textContainer_metadata = new PropertyMetadata('textContainer');
  Object.defineProperty(WelcomeStyles.prototype, 'textContainer', {configurable: true, get: function () {
    return this.textContainer_felub4$_0.getValue_n5byny$(this, WelcomeStyles$textContainer_metadata);
  }});
  var WelcomeStyles$textInput_metadata = new PropertyMetadata('textInput');
  Object.defineProperty(WelcomeStyles.prototype, 'textInput', {configurable: true, get: function () {
    return this.textInput_7s4gnt$_0.getValue_n5byny$(this, WelcomeStyles$textInput_metadata);
  }});
  function WelcomeStyles$textContainer$lambda($receiver) {
    padding($receiver, get_px(5));
    set_backgroundColor($receiver, rgb(8, 97, 22));
    set_color($receiver, rgb(56, 246, 137));
    return Unit;
  }
  function WelcomeStyles$textInput$lambda($receiver) {
    margin($receiver, get_px(5));
    set_fontSize($receiver, get_px(14));
    return Unit;
  }
  WelcomeStyles.$metadata$ = {kind: Kind_OBJECT, simpleName: 'WelcomeStyles', interfaces: [StyleSheet]};
  var WelcomeStyles_instance = null;
  function WelcomeStyles_getInstance() {
    if (WelcomeStyles_instance === null) {
      new WelcomeStyles();
    }return WelcomeStyles_instance;
  }
  _.main = main;
  _.WelcomeState = WelcomeState;
  $$importsForInline$$['kotlin-wrappers-kotlin-styled-jsLegacy'] = $module$kotlin_wrappers_kotlin_styled_jsLegacy;
  $$importsForInline$$['kotlin-wrappers-kotlin-react-dom-jsLegacy'] = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy;
  _.Welcome = Welcome;
  Object.defineProperty(_, 'WelcomeStyles', {get: WelcomeStyles_getInstance});
  main();
  return _;
}));

//# sourceMappingURL=KotlinJsSample2.js.map
