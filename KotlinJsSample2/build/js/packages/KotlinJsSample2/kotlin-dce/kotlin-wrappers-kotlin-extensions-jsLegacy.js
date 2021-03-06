(function (_, Kotlin) {
  'use strict';
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  function clone(obj) {
    return Object.assign({}, obj);
  }
  function getOwnPropertyNames($receiver) {
    return Object.getOwnPropertyNames($receiver);
  }
  function invoke_3($receiver, strings, values) {
    var tmp$;
    return (tmp$ = $receiver).call.apply(tmp$, [null, strings].concat(values));
  }
  function invoke_4($receiver, string, values) {
    return invoke_3($receiver, [string], values.slice());
  }
  function invoke_5($receiver, values) {
    return invoke_3($receiver, [], values.slice());
  }
  var package$kotlinext = _.kotlinext || (_.kotlinext = {});
  var package$js = package$kotlinext.js || (package$kotlinext.js = {});
  package$js.clone_issdgt$ = clone;
  package$js.getOwnPropertyNames_s8jyvk$ = getOwnPropertyNames;
  package$js.invoke_z5wujd$ = invoke_3;
  package$js.invoke_dgimx$ = invoke_4;
  package$js.invoke_9p99ed$ = invoke_5;
  return _;
}(module.exports, require('kotlin')));

//# sourceMappingURL=kotlin-wrappers-kotlin-extensions-jsLegacy.js.map
