(function (require) {
require = (function (cache, modules, cx) {
return function (r) {
if (!modules[r]) throw new Error(r + ' is not a module');
return cache[r] ? cache[r].exports : ((cache[r] = {
exports: {}
}, cache[r].exports = modules[r].call(cx, require, cache[r], cache[r].exports)));
};
})({}, {
3: function (require, module, exports) {
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */

'use strict';

/**
 * Module variables.
 * @private
 */

var matchHtmlRegExp = /["'&<>]/;

/**
 * Module exports.
 * @public
 */

module.exports = escapeHtml;

/**
 * Escape special characters in the given string of html.
 *
 * @param  {string} string The string to escape for inserting into HTML
 * @return {string}
 * @public
 */

function escapeHtml(string) {
  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape;
  var html = '';
  var index = 0;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34: // "
        escape = '&quot;';
        break;
      case 38: // &
        escape = '&amp;';
        break;
      case 39: // '
        escape = '&#39;';
        break;
      case 60: // <
        escape = '&lt;';
        break;
      case 62: // >
        escape = '&gt;';
        break;
      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index
    ? html + str.substring(lastIndex, index)
    : html;
}
;
return module.exports;
},
1: function (require, module, exports) {
var arrayMutatorMethods, boundInstances, currentID, defaultOptions, dummyPropertyDescriptor, placeholder, settings;

currentID = 0;

arrayMutatorMethods = ['push', 'pop', 'shift', 'unshift', 'splice', 'reverse', 'sort'];

dummyPropertyDescriptor = {};

boundInstances = {};

placeholder = ['{{', '}}'];

settings = Object.create({
  silent: false
}, {
  placeholder: {
    get: function() {
      return placeholder;
    },
    set: function(newPlaceholder) {
      if (checkIf.isArray(newPlaceholder) && newPlaceholder.length === 2) {
        placeholder = newPlaceholder;
        setPholderRegEx();
      }
    }
  }
});

defaultOptions = {
  delay: false,
  throttle: false,
  simpleSelector: false,
  promiseTransforms: false,
  dispatchEvents: false,
  sendArrayCopies: false,
  updateEvenIfSame: false,
  updateOnBind: true
};

var defineProperty, genID, genObj, genProxiedInterface, genSelfUpdater, getDescriptor, setValueNoop;

defineProperty = Object.defineProperty;

getDescriptor = Object.getOwnPropertyDescriptor;

var cachedEvent, changeEvent;

cachedEvent = null;

changeEvent = function() {
  var event;
  if (!cachedEvent) {
    event = cachedEvent = document.createEvent('Event');
    event.initEvent('change', true, false);
    event._sb = true;
  }
  return cachedEvent;
};

;

var requiresDomDescriptorFix;

requiresDomDescriptorFix = (!('className' in Element.prototype)) || !getDescriptor(Element.prototype, 'className').get;

;

var windowPropsToIgnore;

windowPropsToIgnore = ['innerWidth', 'innerHeight', 'outerWidth', 'outerHeight', 'scrollX', 'scrollY', 'pageXOffset', 'pageYOffset', 'screenX', 'screenY', 'screenLeft', 'screenTop'];

;

setValueNoop = function(v, publisher) {
  return this.updateAllSubs(publisher || this);
};

genID = function() {
  return '' + (++currentID);
};

genObj = function() {
  return Object.create(null);
};

genProxiedInterface = function(isSub, completeCallback) {
  return function(subject, customOptions, saveOptions) {
    return SimplyBind(subject, customOptions, saveOptions, isSub, completeCallback);
  };
};

genSelfUpdater = function(binding, fetchValue) {
  return binding.selfUpdater || (binding.selfUpdater = new Binding(function() {
    if (fetchValue) {
      return binding.setValue(binding.fetchDirectValue(), binding, true);
    } else {
      return binding.updateAllSubs(binding);
    }
  }, 'Func', {}));
};

var checkIf, targetIncludes;

targetIncludes = function(target, item) {
  return target && target.indexOf(item) !== -1;
};

checkIf = {
  isDefined: function(subject) {
    return subject !== void 0;
  },
  isArray: function(subject) {
    return subject instanceof Array;
  },
  isObject: function(subject) {
    return typeof subject === 'object' && subject;
  },
  isString: function(subject) {
    return typeof subject === 'string';
  },
  isNumber: function(subject) {
    return typeof subject === 'number';
  },
  isFunction: function(subject) {
    return typeof subject === 'function';
  },
  isBindingInterface: function(subject) {
    return subject instanceof BindingInterface;
  },
  isBinding: function(subject) {
    return subject instanceof Binding;
  },
  isIterable: function(subject) {
    return checkIf.isObject(subject) && checkIf.isNumber(subject.length);
  },
  isDom: function(subject) {
    return subject.nodeName && subject.nodeType === 1;
  },
  isDomInput: function(subject) {
    var nodeName;
    nodeName = subject.nodeName;
    return nodeName === 'INPUT' || nodeName === 'TEXTAREA' || nodeName === 'SELECT';
  },
  isDomRadio: function(subject) {
    return subject.type === 'radio';
  },
  isDomCheckbox: function(subject) {
    return subject.type === 'checkbox';
  },
  isElCollection: function(subject) {
    return (subject instanceof NodeList) || (subject instanceof HTMLCollection) || (window.jQuery && subject instanceof jQuery);
  },
  domElsAreSame: function(iterable) {
    var itemsWithSameType, type;
    type = iterable[0].type;
    itemsWithSameType = [].filter.call(iterable, function(item) {
      return item.type === type;
    });
    return itemsWithSameType.length === iterable.length;
  },
  isDomNode: function(subject) {
    return checkIf.isDom(subject) || subject === window || subject === document;
  }
};

;

var convertToLive, convertToReg, fetchDescriptor;

fetchDescriptor = function(object, property, isProto) {
  var descriptor, objectProto;
  descriptor = getDescriptor(object, property);
  if (descriptor) {
    if (isProto) {
      descriptor.configurable = true;
    }
    return descriptor;
  } else if (objectProto = Object.getPrototypeOf(object)) {
    return fetchDescriptor(objectProto, property, true);
  }
};

convertToLive = function(bindingInstance, object, onlyArrayMethods) {
  var _, context, getterValue, origFn, propertyDescriptor, proxyFn, shouldIndicateUpdateIsFromSelf, shouldWriteLiveProp, slice, typeIsArray;
  _ = bindingInstance;
  if (!_.origDescriptor) {
    _.origDescriptor = fetchDescriptor(object, _.property);
  }
  if (onlyArrayMethods) {
    arrayMutatorMethods.forEach(function(method) {
      return defineProperty(object, method, {
        configurable: true,
        value: function() {
          var result;
          result = Array.prototype[method].apply(object, arguments);
          _.updateAllSubs(_);
          return result;
        }
      });
    });
  } else {
    if (_.type === 'Proxy') {
      origFn = _.origFn = _.value;
      context = object;
      _.value = {
        result: null,
        args: null
      };
      if (checkIf.isFunction(origFn)) {
        slice = [].slice;
        getterValue = proxyFn = function() {
          var args, result;
          args = slice.call(arguments);
          _.value.args = args = _.selfTransform ? _.selfTransform(args) : args;
          _.value.result = result = origFn.apply(context, args);
          _.updateAllSubs(_);
          return result;
        };
        defineProperty(object, _.property, {
          configurable: _.isLiveProp = true,
          get: function() {
            return getterValue;
          },
          set: function(newValue) {
            if (!checkIf.isFunction(newValue)) {
              getterValue = newValue;
            } else if (newValue !== origFn) {
              if (newValue !== proxyFn) {
                origFn = _.origFn = newValue;
              }
              if (getterValue !== proxyFn) {
                getterValue = proxyFn;
              }
            }
          }
        });
      }
    } else if (!targetIncludes(_.type, 'DOM') && !(_.object === window && targetIncludes(windowPropsToIgnore, _.property))) {
      propertyDescriptor = _.origDescriptor || dummyPropertyDescriptor;
      if (propertyDescriptor.get) {
        _.origGetter = propertyDescriptor.get.bind(object);
      }
      if (propertyDescriptor.set) {
        _.origSetter = propertyDescriptor.set.bind(object);
      }
      shouldWriteLiveProp = propertyDescriptor.configurable;
      shouldWriteLiveProp = shouldWriteLiveProp && object.constructor !== CSSStyleDeclaration;
      
      /**
       * There is a bug in webkit/blink engines in which native attributes/properties 
       * of DOM elements are not exposed on the element's prototype and instead is
       * exposed directly on the element instance; when looking up the property descriptor
       * of the element a data descriptor is returned instead of an accessor descriptor
       * (i.e. descriptor with getter/setter) which means we are not able to define our
       * own proxy getter/setters. This was fixed only in April 2015 in Chrome v43 and
       * Safari v10. Although we won't be able to get notified when the objects get
       * their values set, we would at least provide working functionality lacking update
       * listeners. Since v1.14.0 HTMLInputElement::value bindings invoke the original
       * getter and setter methods in Binding::setValue(), and since we want to avoid
       * increasing the amount of logic present in Binding::setValue() for performance
       * reasons, we patch those setters here. We clone the target element and check for
       * the existence of the target property - if it exists then it indicates the target
       * property is a native property (since only native properties are copied over in
       * Element::cloneNode). This patching is only for native properties.
       *
       * https://bugs.webkit.org/show_bug.cgi?id=49739
       * https://bugs.webkit.org/show_bug.cgi?id=75297
       * https://bugs.chromium.org/p/chromium/issues/detail?id=43394
       * https://bugs.chromium.org/p/chromium/issues/detail?id=431492
       * https://bugs.chromium.org/p/chromium/issues/detail?id=13175
       * https://developers.google.com/web/updates/2015/04/DOM-attributes-now-on-the-prototype-chain
       */
      var shouldWriteLiveProp;
      
      if (requiresDomDescriptorFix && _.isDom && _.property in object.cloneNode(false)) {
        _.origDescriptor = shouldWriteLiveProp = false;
        _.isLiveProp = true;
        _.origGetter = function() {
          return _.object[_.property];
        };
        _.origSetter = function(newValue) {
          return _.object[_.property] = newValue;
        };
      }
      
      ;
      if (shouldWriteLiveProp) {
        typeIsArray = _.type === 'Array';
        shouldIndicateUpdateIsFromSelf = !_.origSetter && !typeIsArray;
        defineProperty(object, _.property, {
          configurable: _.isLiveProp = true,
          enumerable: propertyDescriptor.enumerable,
          get: _.origGetter || function() {
            return _.value;
          },
          set: function(newValue) {
            _.setValue(newValue, _, shouldIndicateUpdateIsFromSelf);
          }
        });
        if (typeIsArray) {
          convertToLive(_, object[_.property], true);
        }
      }
    }
  }
};

convertToReg = function(bindingInstance, object, onlyArrayMethods) {
  var _, i, len, method, newDescriptor, results;
  if (onlyArrayMethods) {
    results = [];
    for (i = 0, len = arrayMutatorMethods.length; i < len; i++) {
      method = arrayMutatorMethods[i];
      results.push(delete object[method]);
    }
    return results;
  } else {
    _ = bindingInstance;
    newDescriptor = _.origDescriptor;
    if (!(newDescriptor.set || newDescriptor.get)) {
      newDescriptor.value = _.origFn || _.value;
    }
    return defineProperty(object, _.property, newDescriptor);
  }
};

;

var cloneObject, extendState;

cloneObject = function(object) {
  var clone, key;
  clone = genObj();
  for (key in object) {
    clone[key] = object[key];
  }
  return clone;
};

extendState = function(base, stateToInherit) {
  var i, key, len, stateMapping;
  stateMapping = Object.keys(stateToInherit);
  for (i = 0, len = stateMapping.length; i < len; i++) {
    key = stateMapping[i];
    base[key] = stateToInherit[key];
  }
};

;

var cache;

cache = {
  get: function(object, isFunction, selector, isMultiChoice) {
    var sampleItem;
    if (isFunction) {
      return boundInstances[object._sb_ID];
    } else {
      if (isMultiChoice && object[0]._sb_map) {
        sampleItem = boundInstances[object[0]._sb_map[selector]];
        if (sampleItem.groupBinding) {
          return sampleItem.groupBinding;
        }
      }
      if (object._sb_map && object._sb_map[selector]) {
        return boundInstances[object._sb_map[selector]];
      }
    }
  },
  set: function(B, isFunction) {
    var propsMap, selector;
    if (isFunction) {
      defineProperty(B.object, '_sb_ID', {
        'configurable': true,
        'value': B.ID
      });
    } else {
      selector = B.selector;
      if (B.object._sb_map) {
        B.object._sb_map[selector] = B.ID;
      } else {
        propsMap = {};
        propsMap[selector] = B.ID;
        defineProperty(B.object, '_sb_map', {
          'configurable': true,
          'value': propsMap
        });
      }
    }
  }
};

;

var addToNodeStore, applyPlaceholders, escapeRegEx, pholderRegEx, pholderRegExSplit, scanTextNodesPlaceholders, setPholderRegEx, textContent;

escapeRegEx = /[.*+?^${}()|[\]\\]/g;

pholderRegEx = pholderRegExSplit = null;

setPholderRegEx = function() {
  var end, middle, start;
  start = settings.placeholder[0].replace(escapeRegEx, '\\$&');
  end = settings.placeholder[1].replace(escapeRegEx, '\\$&');
  middle = "[^" + end + "]+";
  pholderRegEx = new RegExp(start + "(" + middle + ")" + end, 'g');
  pholderRegExSplit = new RegExp("" + start + middle + end, 'g');
};

setPholderRegEx();

applyPlaceholders = function(contexts, values, indexMap) {
  var contextPart, i, index, len, output;
  output = '';
  for (index = i = 0, len = contexts.length; i < len; index = ++i) {
    contextPart = contexts[index];
    output += contextPart;
    if (indexMap[index]) {
      output += values[indexMap[index]];
    }
  }
  return output;
};

textContent = 'textContent';

addToNodeStore = function(nodeStore, node, targetPlaceholder) {
  if (nodeStore[targetPlaceholder] == null) {
    nodeStore[targetPlaceholder] = [];
  }
  nodeStore[targetPlaceholder].push(node);
};

scanTextNodesPlaceholders = function(element, nodeStore) {
  var childNodes, i, index, j, len, len1, newFragment, newNode, node, textPiece, textPieces;
  childNodes = Array.prototype.slice.call(element.childNodes);
  for (i = 0, len = childNodes.length; i < len; i++) {
    node = childNodes[i];
    if (node.nodeType !== 3) {
      scanTextNodesPlaceholders(node, nodeStore);
    } else if (node[textContent].match(pholderRegExSplit)) {
      textPieces = node[textContent].split(pholderRegEx);
      if (textPieces.length === 3 && textPieces[0] + textPieces[2] === '') {
        addToNodeStore(nodeStore, node, textPieces[1]);
      } else {
        newFragment = document.createDocumentFragment();
        for (index = j = 0, len1 = textPieces.length; j < len1; index = ++j) {
          textPiece = textPieces[index];
          newNode = newFragment.appendChild(document.createTextNode(textPiece));
          if (index % 2) {
            addToNodeStore(nodeStore, newNode, textPiece);
          }
        }
        node.parentNode.replaceChild(newFragment, node);
      }
    }
  }
};

;

var getErrSource, throwError, throwErrorBadArg, throwWarning;

throwError = function(errorName) {
  throw new Error('SimplyBind: ' + (errors[errorName] || errorName));
};

throwWarning = function(warningName, depth) {
  var errSource, warn;
  if (!settings.silent) {
    errSource = getErrSource(depth);
    warn = errors[warningName];
    warn += "\n\n" + errSource;
    console.warn('SimplyBind: ' + warn);
  }
};

throwErrorBadArg = function(arg) {
  throwError("Invalid argument/s (" + arg + ")", true);
};

getErrSource = function(depth) {
  return ((new Error).stack || '').split('\n').slice(depth + 3).join('\n');
};

;

;

var errors;

errors = {
  invalidParamName: "SimplyBind() and .to() only accept a function, an array, a bound object, a string, or a number.",
  fnOnly: "Only functions are allowed for .transform/.condition/All()",
  badEventArg: "Invalid argument number in .ofEvent()",
  emptyList: "Empty collection provided",
  onlyOneDOMElement: "You can only pass a single DOM element to a binding",
  mixedElList: "'checked' of Mixed list of element cannot be bound"
};

;

;

var SimplyBind;

SimplyBind = function(subject, options, saveOptions, isSub, completeCallback) {
  var interfaceToReturn, newInterface;
  if ((!subject && subject !== 0) || (!checkIf.isString(subject) && !checkIf.isNumber(subject) && !checkIf.isFunction(subject) && !(subject instanceof Array))) {
    if (!checkIf.isBindingInterface(subject)) {
      throwError('invalidParamName');
    }
  }
  if (checkIf.isObject(subject) && !(subject instanceof Array)) {
    interfaceToReturn = completeCallback ? completeCallback(subject) : subject.selfClone();
  } else {
    newInterface = new BindingInterface(options);
    newInterface.saveOptions = saveOptions;
    newInterface.isSub = isSub;
    newInterface.completeCallback = completeCallback;
    if (checkIf.isFunction(subject)) {
      interfaceToReturn = newInterface.setObject(subject, true);
    } else {
      interfaceToReturn = newInterface.setProperty(subject);
    }
  }
  return interfaceToReturn;
};

SimplyBind.version = "1.15.8";

SimplyBind.settings = settings;

SimplyBind.defaultOptions = defaultOptions;

SimplyBind.unBindAll = function(object, bothWays) {
  var boundID, prop, propMap;
  if (object && (checkIf.isObject(object) || checkIf.isFunction(object))) {
    
    /**
     * Conditional Checks:
     *
     * 1) Make sure the subject object is iterable (and thus a possible candidate for being an element collection)
     * 2) Make sure the subject object isn't an array binding (since element collection objects don't get directly bound)
     * 3) Make sure the first element in the collection is a valid object (i.e. isn't undefined and isn't null)
     * 4) Make sure the first element is a DOM object
     */
    var object;
    
    if (checkIf.isIterable(object) && !object._sb_ID && object[0] && (checkIf.isDom(object[0]))) {
      object = object[0];
    }
    
    ;
    propMap = object._sb_map;
    if (object._sb_ID) {
      boundInstances[object._sb_ID].removeAllSubs(bothWays);
    }
    if (propMap) {
      for (prop in propMap) {
        boundID = propMap[prop];
        boundInstances[boundID].removeAllSubs(bothWays);
      }
    }
  }
};

;

;

var Binding;

Binding = function(object, type, state) {
  var parentBinding, parentProperty, subjectValue;
  extendState(this, state);
  this.optionsDefault = this.saveOptions ? this.options : defaultOptions;
  this.type = type;
  this.object = object;
  this.ID = genID();
  this.subs = [];
  this.subsMeta = genObj();
  this.pubsMap = genObj();
  this.attachedEvents = [];
  if (this.type === 'Proxy') {
    this.setValue = setValueNoop;
  }

  /* ========================================================================== */
  if (this.isMultiChoice) {
    this.choices = genObj();
    this.object.forEach((function(_this) {
      return function(choiceEl) {
        var choiceBinding;
        choiceBinding = _this.choices[choiceEl.value] = SimplyBind('checked').of(choiceEl)._;
        choiceBinding.addSub(_this);
        choiceBinding.subsMeta[_this.ID].transformFn = function() {
          return choiceBinding;
        };
        choiceBinding.groupBinding = _this;
      };
    })(this));
  }
  if (!(this.type === 'Event' || (this.type === 'Func' && this.isSub))) {
    if (this.type === 'Pholder') {
      parentProperty = this.descriptor && !targetIncludes(this.descriptor, 'multi') ? this.descriptor + ":" + this.property : this.property;
      parentBinding = this.parentBinding = SimplyBind(parentProperty).of(object)._;
      parentBinding.scanForPholders();
      this.value = parentBinding.pholderValues[this.pholder];
      if (parentBinding.textNodes) {
        this.textNodes = parentBinding.textNodes[this.pholder];
      }
    } else {
      this.value = subjectValue = this.fetchDirectValue();
      if (this.type === 'ObjectProp' && !checkIf.isDefined(subjectValue) && !getDescriptor(this.object, this.property)) {
        this.object[this.property] = subjectValue;
      }
      convertToLive(this, this.object);
    }
  }
  this.attachEvents();
  return boundInstances[this.ID] = this;
};

var eventUpdateHandler;

Binding.prototype = {
  addSub: function(sub, options, updateOnce, updateEvenIfSame) {
    var alreadyHadSub, j, len, metaData, ref, subItem;
    if (sub.isMulti) {
      ref = sub.bindings;
      for (j = 0, len = ref.length; j < len; j++) {
        subItem = ref[j];
        this.addSub(subItem, options, updateOnce, updateEvenIfSame);
      }
    } else {
      if (metaData = this.subsMeta[sub.ID]) {
        alreadyHadSub = true;
      } else {
        sub.pubsMap[this.ID] = this;
        this.subs.unshift(sub);
        metaData = this.subsMeta[sub.ID] = genObj();
        metaData.updateOnce = updateOnce;
        metaData.opts = cloneObject(options);
        if (updateEvenIfSame || this.type === 'Event' || this.type === 'Proxy' || this.type === 'Array') {
          metaData.opts.updateEvenIfSame = true;
        }
        metaData.valueRef = sub.type === 'Func' ? 'valuePassed' : 'value';
      }
    }
    return alreadyHadSub;
  },
  removeSub: function(sub, bothWays) {
    var j, len, ref, subItem;
    if (sub.isMulti) {
      ref = sub.bindings;
      for (j = 0, len = ref.length; j < len; j++) {
        subItem = ref[j];
        this.removeSub(subItem, bothWays);
      }
    } else {
      if (this.subsMeta[sub.ID]) {
        this.subs.splice(this.subs.indexOf(sub), 1);
        delete this.subsMeta[sub.ID];
        delete sub.pubsMap[this.ID];
      }
      if (bothWays) {
        sub.removeSub(this);
        delete this.pubsMap[sub.ID];
      }
    }
    if (this.subs.length === 0 && Object.keys(this.pubsMap).length === 0) {
      this.destroy();
    }
  },
  removeAllSubs: function(bothWays) {
    var j, len, ref, sub;
    ref = this.subs.slice();
    for (j = 0, len = ref.length; j < len; j++) {
      sub = ref[j];
      this.removeSub(sub, bothWays);
    }
  },
  destroy: function() {
    var event, j, len, ref;
    delete boundInstances[this.ID];
    this.removePollInterval();
    if (this.type === 'Event') {
      ref = this.attachedEvents;
      for (j = 0, len = ref.length; j < len; j++) {
        event = ref[j];
        this.unRegisterEvent(event);
      }
    } else if (this.type === 'Func') {
      delete this.object._sb_ID;
    }

    /* istanbul ignore next */
    if (this.isLiveProp && this.origDescriptor) {
      convertToReg(this, this.object);
    }
    if (this.type === 'Array') {
      convertToReg(this, this.value, true);
    }
    if (this.object._sb_map) {
      delete this.object._sb_map[this.selector];
      if (Object.keys(this.object._sb_map).length === 0) {
        delete this.object._sb_map;
      }
    }
  },
  fetchDirectValue: function() {
    var choiceEl, choiceName, ref, results, type;
    type = this.type;
    switch (false) {
      case type !== 'Func':
        return this.object();
      case type !== 'DOMAttr':
        return this.object.getAttribute(this.property) || '';
      case !this.isMultiChoice:
        results = [];
        ref = this.choices;
        for (choiceName in ref) {
          choiceEl = ref[choiceName];
          if (choiceEl.object.checked) {
            if (type === 'DOMRadio') {
              return choiceName;
            } else {
              results.push(choiceName);
            }
          }
        }
        return results;
      default:
        return this.object[this.property];
    }
  },
  setValue: function(newValue, publisher, fromSelf, fromChangeEvent) {
    var choiceBinding, choiceName, entireValue, index, j, k, len, len1, n, newChoiceValue, newChoices, newValueArray, overwritePrevious, parent, prevCursror, prevValue, ref, ref1, ref2, targetChoiceBinding, textNode, value;
    publisher || (publisher = this);
    if (this.selfTransform) {
      newValue = this.selfTransform(newValue);
    }
    if (!fromSelf) {
      switch (this.type) {
        case 'ObjectProp':
          if (!this.isLiveProp) {
            if (newValue !== this.value) {
              this.object[this.property] = newValue;
            }
          } else if (this.isDomInput) {
            if (!fromChangeEvent) {
              this.origSetter(newValue);
              if (settings.dispatchEvents) {
                this.object.dispatchEvent(changeEvent());
              }
            } else if (newValue !== this.origGetter()) {
              prevCursror = this.object.selectionStart;
              this.origSetter(newValue);
              if (prevCursror) {
                this.object.setSelectionRange(prevCursror, prevCursror);
              }
            }
          } else if (this.origSetter) {
            this.origSetter(newValue);
          }
          break;
        case 'Pholder':
          parent = this.parentBinding;
          parent.pholderValues[this.pholder] = newValue;
          entireValue = applyPlaceholders(parent.pholderContexts, parent.pholderValues, parent.pholderIndexMap);
          if (this.textNodes && newValue !== this.value) {
            ref = this.textNodes;
            for (j = 0, len = ref.length; j < len; j++) {
              textNode = ref[j];
              textNode[textContent] = newValue;
            }
          }
          if (this.property !== textContent) {
            parent.setValue(entireValue, publisher);
          }
          break;
        case 'Array':
          if (newValue !== this.value) {
            if (!checkIf.isArray(newValue)) {
              newValue = Array.prototype.concat(newValue);
            }
            convertToReg(this, this.value, true);
            convertToLive(this, newValue = newValue.slice(), true);
            if (this.origSetter) {
              this.origSetter(newValue);
            }
          }
          break;
        case 'Func':
          prevValue = this.valuePassed;
          this.valuePassed = newValue;
          newValue = this.object(newValue, prevValue);
          break;
        case 'Event':
          this.isEmitter = true;
          this.emitEvent(newValue);
          this.isEmitter = false;
          break;
        case 'DOMRadio':
          if (this.isMultiChoice) {
            targetChoiceBinding = checkIf.isBinding(newValue) ? newValue : this.choices[newValue];
            if (targetChoiceBinding) {
              newValue = targetChoiceBinding.object.value;
              ref1 = this.choices;
              for (n in ref1) {
                choiceBinding = ref1[n];
                choiceBinding.setValue(choiceBinding.ID === targetChoiceBinding.ID, publisher);
              }
            } else {
              newValue = this.value;
            }
          } else {
            newValue = !!newValue;
            if (newValue === this.value) {
              return;
            }
            if (this.object.checked !== newValue) {
              this.object.checked = newValue;
            }
            if (newValue && settings.dispatchEvents) {
              this.object.dispatchEvent(changeEvent());
            }
          }
          break;
        case 'DOMCheckbox':
          if (this.isMultiChoice) {
            overwritePrevious = !checkIf.isBinding(newValue);
            newChoices = [].concat(newValue);
            for (index = k = 0, len1 = newChoices.length; k < len1; index = ++k) {
              value = newChoices[index];
              newChoices[index] = checkIf.isBinding(value) ? value : this.choices[value];
            }
            newValueArray = [];
            ref2 = this.choices;
            for (choiceName in ref2) {
              choiceBinding = ref2[choiceName];
              if (overwritePrevious) {
                newChoiceValue = targetIncludes(newChoices, choiceBinding);
              } else {
                newChoiceValue = choiceBinding.value;
              }
              choiceBinding.setValue(newChoiceValue, publisher);
              if (newChoiceValue) {
                newValueArray.push(choiceName);
              }
            }
            newValue = newValueArray;
          } else {
            newValue = !!newValue;
            if (newValue === this.value) {
              return;
            }
            if (this.object.checked !== newValue) {
              this.object.checked = newValue;
              if (settings.dispatchEvents) {
                this.object.dispatchEvent(changeEvent());
              }
            }
          }
          break;
        case 'DOMAttr':
          this.object.setAttribute(this.property, newValue);
      }
    }
    this.value = newValue;
    this.updateAllSubs(publisher);
  },
  updateAllSubs: function(publisher) {
    var arr, i;
    if (i = (arr = this.subs).length) {
      while (i--) {
        this.updateSub(arr[i], publisher);
      }
    }
  },
  updateSub: function(sub, publisher, isDelayedUpdate) {
    var currentTime, meta, newValue, subValue, timePassed, transform;
    if ((publisher === sub) || (publisher !== this && publisher.subsMeta[sub.ID])) {
      return;
    }
    meta = this.subsMeta[sub.ID];
    if (meta.disallowList && meta.disallowList[publisher.ID]) {
      return;
    }
    if (meta.opts.throttle) {
      currentTime = +(new Date);
      timePassed = currentTime - meta.lastUpdate;
      if (timePassed < meta.opts.throttle) {
        clearTimeout(meta.updateTimer);
        return meta.updateTimer = setTimeout((function(_this) {
          return function() {
            if (_this.subsMeta[sub.ID]) {
              return _this.updateSub(sub, publisher);
            }
          };
        })(this), meta.opts.throttle - timePassed);
      } else {
        meta.lastUpdate = currentTime;
      }
    } else if (meta.opts.delay && !isDelayedUpdate) {
      return setTimeout((function(_this) {
        return function() {
          if (_this.subsMeta[sub.ID]) {
            return _this.updateSub(sub, publisher, true);
          }
        };
      })(this), meta.opts.delay);
    }
    newValue = this.type === 'Array' && meta.opts.sendArrayCopies ? this.value.slice() : this.value;
    subValue = sub[meta.valueRef];
    newValue = (transform = meta.transformFn) ? transform(newValue, subValue, sub.object) : newValue;
    if (newValue === subValue && !meta.opts.updateEvenIfSame || meta.conditionFn && !meta.conditionFn(newValue, subValue, sub.object)) {
      return;
    }
    if (meta.opts.promiseTransforms && newValue && checkIf.isFunction(newValue.then)) {
      newValue.then(function(newValue) {
        sub.setValue(newValue, publisher);
      });
    } else {
      sub.setValue(newValue, publisher);
    }
    if (meta.updateOnce) {
      this.removeSub(sub);
    }
  },
  addModifierFn: function(target, subInterfaces, subjectFn, updateOnBind) {
    var base, j, len, subInterface, subMetaData, subscriber;
    if (!checkIf.isFunction(subjectFn)) {
      return throwWarning('fnOnly', 2);
    } else {
      for (j = 0, len = subInterfaces.length; j < len; j++) {
        subInterface = subInterfaces[j];
        subscriber = subInterface._ || subInterface;
        if (subscriber.isMulti) {
          this.addModifierFn(target, subscriber.bindings, subjectFn, updateOnBind);
        } else {
          subMetaData = this.subsMeta[subscriber.ID];
          subMetaData[target] = subjectFn;
          updateOnBind = updateOnBind && !subMetaData.updateOnce;
          if (this.pubsMap[subscriber.ID]) {
            (base = subscriber.subsMeta[this.ID])[target] || (base[target] = subjectFn);
          }
          if ((updateOnBind || this.type === 'Func') && target === 'transformFn') {
            this.updateSub(subscriber, this);
          }
        }
      }
      return true;
    }
  },
  setSelfTransform: function(transformFn, updateOnBind) {
    this.selfTransform = transformFn;
    if (updateOnBind) {
      this.setValue(this.value);
    }
  },
  addDisallowRule: function(targetSub, targetDisallow) {
    var base, disallowList;
    disallowList = (base = this.subsMeta[targetSub.ID]).disallowList != null ? base.disallowList : base.disallowList = genObj();
    disallowList[targetDisallow.ID] = 1;
  },
  scanForPholders: function() {
    var index;
    if (!this.pholderValues) {
      this.pholderValues = genObj();
      this.pholderIndexMap = genObj();
      this.pholderContexts = [];
      if (checkIf.isString(this.value)) {
        this.pholderContexts = this.value.split(pholderRegExSplit);
        index = 0;
        this.value = this.value.replace(pholderRegEx, (function(_this) {
          return function(e, pholder) {
            _this.pholderIndexMap[index++] = pholder;
            return _this.pholderValues[pholder] = pholder;
          };
        })(this));
      }
      if (this.isDom && this.property === textContent) {
        scanTextNodesPlaceholders(this.object, this.textNodes = genObj());
      }
    }
  },
  addPollInterval: function(time) {
    if (this.type !== 'Event') {
      this.removePollInterval();
      return this.pollInterval = setInterval((function(_this) {
        return function() {
          var polledValue;
          polledValue = _this.fetchDirectValue();
          return _this.setValue(polledValue, _this, true);
        };
      })(this), time);
    }
  },
  removePollInterval: function() {
    clearInterval(this.pollInterval);
    return this.pollInterval = null;
  },
  addUpdateListener: function(eventName, targetProperty) {
    this.object.addEventListener(eventName, (function(_this) {
      return function(event) {
        var shouldRedefineValue;
        if (!event._sb) {
          shouldRedefineValue = _this.selfTransform && _this.isDomInput;
          _this.setValue(_this.object[targetProperty], null, !shouldRedefineValue, true);
        }
      };
    })(this), false);
  },
  attachEvents: function() {
    if (this.eventName) {
      this.registerEvent(this.eventName);
    } else if (this.isDomInput) {
      this.addUpdateListener('input', 'value');
      this.addUpdateListener('change', 'value');
    } else if (!this.isMultiChoice && (this.type === 'DOMRadio' || this.type === 'DOMCheckbox')) {
      this.addUpdateListener('change', 'checked');
    }
  },
  registerEvent: function(eventName) {
    this.attachedEvents.push(eventName);
    if (!this.eventHandler) {
      this.eventHandler = eventUpdateHandler.bind(this);
    }
    this.object[this.eventMethods.listen](eventName, this.eventHandler);
  },
  unRegisterEvent: function(eventName) {
    this.attachedEvents.splice(this.attachedEvents.indexOf(eventName), 1);
    this.object[this.eventMethods.remove](eventName, this.eventHandler);
  },
  emitEvent: function(extraData) {
    var eventObject;
    eventObject = this.eventName;
    if (this.eventMethods.emit === 'dispatchEvent') {
      if (!this.eventObject) {
        this.eventObject = document.createEvent('Event');
        this.eventObject.initEvent(this.eventName, true, true);
      }
      this.eventObject.bindingData = extraData;
      eventObject = this.eventObject;
    }
    this.object[this.eventMethods.emit](eventObject, extraData);
  }
};

eventUpdateHandler = function() {
  if (!this.isEmitter) {
    this.setValue(arguments[this.property], null, true);
  }
};

;

;


/**
 * Stage definitions:
 * 
 * 0: Selection:			Got selector, awaiting object.
 * 1: Indication:			Got object, awaiting proxied property / function / Binding-object.
 * 2: Binding Complete:		Complete, awaiting additional (optional) bindings/mutations.
 */
var BindingInterface;

BindingInterface = function(options, inheritedState) {
  var key;
  if (inheritedState) {
    extendState(this, inheritedState);
    this.stage = 1;
  } else {
    this.stage = 0;
    this.subs = [];
    this.optionsPassed = options || (options = {});
    this.options = {};
    for (key in defaultOptions) {
      this.options[key] = options[key] != null ? options[key] : defaultOptions[key];
    }
  }
  return this;
};

var BindingInterfacePrivate;

BindingInterfacePrivate = {
  selfClone: function() {
    return new BindingInterface(null, this);
  },
  defineMainProps: function(binding) {
    this._ = binding;
    return Object.defineProperties(this, {
      'value': {
        get: function() {
          return binding.value;
        }
      },
      'original': {
        get: function() {
          return binding.objects || binding.object;
        }
      },
      'subscribers': {
        get: function() {
          return binding.subs.slice().map(function(sub) {
            return sub.object;
          });
        }
      }
    });
  },
  createBinding: function(subject, newObjectType, bindingInterface, isFunction) {
    var cachedBinding, newBinding;
    this.object = subject;
    cachedBinding = cache.get(subject, isFunction, this.selector, this.isMultiChoice);
    if (cachedBinding) {
      return this.patchCachedBinding(cachedBinding);
    } else {
      newBinding = new Binding(subject, newObjectType, bindingInterface);
      cache.set(newBinding, isFunction);
      return newBinding;
    }
  },
  patchCachedBinding: function(cachedBinding) {
    var key, option, ref, ref1, value;
    if (cachedBinding.type === 'ObjectProp' && !(this.property in this.object)) {
      convertToLive(cachedBinding, this.object);
    }
    if (this.saveOptions) {
      ref = this.optionsPassed;
      for (option in ref) {
        value = ref[option];
        cachedBinding.optionsDefault[option] = value;
      }
    }
    ref1 = cachedBinding.optionsDefault;
    for (key in ref1) {
      value = ref1[key];
      this.options[key] = checkIf.isDefined(this.optionsPassed[key]) ? this.optionsPassed[key] : value;
    }
    return cachedBinding;
  },
  setProperty: function(subject) {
    var split;
    if (checkIf.isNumber(subject)) {
      subject = subject.toString();
    }
    this.selector = this.property = subject;
    if (!this.options.simpleSelector) {
      if (targetIncludes(subject, ':')) {
        split = subject.split(':');
        this.descriptor = split.slice(0, -1).join(':');
        this.property = split[split.length - 1];
      }
      if (targetIncludes(subject, '.')) {
        split = this.property.split('.');
        this.property = split[0];
        this.pholder = split.slice(1).join('.');
      }
      if (targetIncludes(this.descriptor, 'event')) {
        if (targetIncludes(subject, '#')) {
          split = this.property.split('#');
          this.eventName = split[0];
          this.property = split[1];
        } else {
          this.eventName = this.property;
          this.property = 0;
        }
        if (isNaN(parseInt(this.property))) {
          throwWarning('badEventArg', 1);
        }
      }
    }
    return this;
  },
  setObject: function(subject, isFunction) {
    var newObjectType;
    this.stage = 1;
    var isDomCheckbox, isDomRadio, isIterable, sampleItem, subject;
    
    isIterable = subject !== window && checkIf.isIterable(subject) && !subject.nodeType;
    
    sampleItem = isIterable ? subject[0] : subject;
    
    if (!sampleItem) {
      if (isIterable && checkIf.isElCollection(subject)) {
        throwError('emptyList');
      }
    } else if (this.isDom = checkIf.isDom(sampleItem)) {
      if (this.property === 'checked') {
        isDomRadio = sampleItem && checkIf.isDomRadio(sampleItem);
        isDomCheckbox = !isDomRadio && sampleItem && checkIf.isDomCheckbox(sampleItem);
      } else if (this.property === 'value') {
        this.isDomInput = checkIf.isDomInput(sampleItem);
      }
      if (isIterable && !targetIncludes(this.descriptor, 'multi')) {
        if (subject.length === 1) {
          subject = subject[0];
        } else {
          if ((isDomRadio || isDomCheckbox) && !checkIf.domElsAreSame(subject)) {
            return throwWarning('mixedElList', 3);
          } else {
            if (isDomRadio || isDomCheckbox) {
              this.isMultiChoice = true;
              subject = [].slice.call(subject);
            } else {
              subject = subject[0];
              throwWarning('onlyOneDOMElement', 3);
            }
          }
        }
      }
    }
    
    ;
    switch (false) {
      case !isFunction:
        newObjectType = 'Func';
        break;
      case !this.pholder:
        newObjectType = 'Pholder';
        break;
      case !(targetIncludes(this.descriptor, 'array') && checkIf.isArray(subject[this.property])):
        newObjectType = 'Array';
        break;
      case !targetIncludes(this.descriptor, 'event'):
        newObjectType = 'Event';
        this.eventMethods = {
          listen: this.optionsPassed.listenMethod,
          remove: this.optionsPassed.removeMethod,
          emit: this.optionsPassed.emitMethod
        };
        
        if (!subject[this.eventMethods.listen]) {
          this.eventMethods.listen = checkIf.isDomNode(subject) ? 'addEventListener' : 'on';
        }
        
        if (!subject[this.eventMethods.remove]) {
          this.eventMethods.remove = checkIf.isDomNode(subject) ? 'removeEventListener' : 'removeListener';
        }
        
        if (!subject[this.eventMethods.emit]) {
          this.eventMethods.emit = checkIf.isDomNode(subject) ? 'dispatchEvent' : 'emit';
        }
        
        ;
        break;
      case !targetIncludes(this.descriptor, 'func'):
        newObjectType = 'Proxy';
        break;
      case !isDomRadio:
        newObjectType = 'DOMRadio';
        break;
      case !isDomCheckbox:
        newObjectType = 'DOMCheckbox';
        break;
      case !targetIncludes(this.descriptor, 'attr'):
        newObjectType = 'DOMAttr';
        break;
      default:
        newObjectType = 'ObjectProp';
    }
    if (targetIncludes(this.descriptor, 'multi')) {
      if (!subject.length) {
        throwError('emptyList');
      }
      this.defineMainProps(new GroupBinding(this, subject, newObjectType));
    } else {
      this.defineMainProps(this.createBinding(subject, newObjectType, this, isFunction));
    }
    if (targetIncludes(this._.type, 'Event') || targetIncludes(this._.type, 'Proxy')) {
      this.options.updateOnBind = false;
    } else if (targetIncludes(this._.type, 'Func')) {
      this.options.updateOnBind = true;
    }
    if (this.completeCallback) {
      return this.completeCallback(this);
    } else {
      return this;
    }
  },
  addToPublisher: function(publisherInterface) {
    var alreadyHadSub, binding, i, len, ref;
    publisherInterface.stage = 2;
    publisherInterface.subs.push(this);
    alreadyHadSub = publisherInterface._.addSub(this._, publisherInterface.options, publisherInterface.updateOnce);
    if (publisherInterface.updateOnce) {
      delete publisherInterface.updateOnce;
    } else if (publisherInterface.options.updateOnBind && !alreadyHadSub) {
      if (this._.isMulti) {
        ref = this._.bindings;
        for (i = 0, len = ref.length; i < len; i++) {
          binding = ref[i];
          publisherInterface._.updateSub(binding, publisherInterface._);
        }
      } else {
        publisherInterface._.updateSub(this._, publisherInterface._);
      }
    }
  }
};

;

var METHOD_bothWays, METHOD_chainTo, METHOD_condition, METHOD_conditionAll, METHOD_of, METHOD_pollEvery, METHOD_set, METHOD_setOption, METHOD_stopPolling, METHOD_transform, METHOD_transformAll, METHOD_transformSelf, METHOD_unBind;

BindingInterface.prototype = Object.create(BindingInterfacePrivate, {
  of: {
    get: function() {
      if (!this.stage) {
        return METHOD_of;
      }
    }
  },
  set: {
    get: function() {
      if (this.stage) {
        return METHOD_set;
      }
    }
  },
  chainTo: {
    get: function() {
      if (this.stage === 2) {
        return METHOD_chainTo;
      }
    }
  },
  transformSelf: {
    get: function() {
      if (this.stage === 1) {
        return METHOD_transformSelf;
      }
    }
  },
  transform: {
    get: function() {
      if (this.stage === 2) {
        return METHOD_transform;
      }
    }
  },
  transformAll: {
    get: function() {
      if (this.stage === 2) {
        return METHOD_transformAll;
      }
    }
  },
  condition: {
    get: function() {
      if (this.stage === 2) {
        return METHOD_condition;
      }
    }
  },
  conditionAll: {
    get: function() {
      if (this.stage === 2) {
        return METHOD_conditionAll;
      }
    }
  },
  bothWays: {
    get: function() {
      if (this.stage === 2) {
        return METHOD_bothWays;
      }
    }
  },
  unBind: {
    get: function() {
      if (this.stage === 2) {
        return METHOD_unBind;
      }
    }
  },
  pollEvery: {
    get: function() {
      if (this.stage) {
        return METHOD_pollEvery;
      }
    }
  },
  stopPolling: {
    get: function() {
      if (this.stage) {
        return METHOD_stopPolling;
      }
    }
  },
  setOption: {
    get: function() {
      if (this.stage === 2) {
        return METHOD_setOption;
      }
    }
  },
  disallowFrom: {
    get: function() {
      var thisInterface;
      if (this.stage === 2 && (thisInterface = this)) {
        return genProxiedInterface(false, function(disallowInterface) {
          var subInterface;
          subInterface = thisInterface.subs[thisInterface.subs.length - 1];
          thisInterface._.addDisallowRule(subInterface._, disallowInterface._);
          return thisInterface;
        });
      }
    }
  },
  updateOn: {
    get: function() {
      var thisInterface;
      if (this.stage && (thisInterface = this)) {
        return genProxiedInterface(false, function(subInterface) {
          if (subInterface._ !== thisInterface._) {
            thisInterface._.pubsMap[subInterface._.ID] = subInterface._;
            subInterface._.addSub(genSelfUpdater(thisInterface._, true), subInterface.options, false, true);
          }
          return thisInterface;
        });
      }
    }
  },
  removeUpdater: {
    get: function() {
      var selfUpdater, thisInterface;
      if (this.stage && (thisInterface = this) && (selfUpdater = this._.selfUpdater)) {
        return genProxiedInterface(false, function(subInterface) {
          if (subInterface._.subsMeta[selfUpdater.ID]) {
            delete thisInterface._.pubsMap[subInterface._.ID];
            subInterface._.removeSub(selfUpdater);
          }
        });
      }
    }
  },
  to: {
    get: function() {
      var thisInterface;
      if (this.stage === 1 && (thisInterface = this)) {
        return genProxiedInterface(true, function(subInterface) {
          if (subInterface._ !== thisInterface._) {
            subInterface.addToPublisher(thisInterface);
          }
          return thisInterface;
        });
      }
    }
  },
  and: {
    get: function() {
      var cloneBinding, cloneInterface;
      cloneInterface = this.selfClone();
      if (this.stage === 2) {
        return cloneInterface;
      } else if (this.stage === 1) {
        if (!cloneInterface._.isMulti) {
          cloneBinding = cloneInterface._;
          cloneInterface._ = cloneInterface._ = new GroupBinding(cloneInterface);
          cloneInterface._.addBinding(cloneBinding);
        }
        return genProxiedInterface(false, function(siblingInterface) {
          cloneInterface._.addBinding(siblingInterface._);
          return cloneInterface;
        });
      }
    }
  },
  once: {
    get: function() {
      var interfaceToReturn;
      if (this.stage === 1) {
        interfaceToReturn = this.selfClone();
        interfaceToReturn.updateOnce = true;
        return interfaceToReturn;
      }
    }
  },
  update: {
    get: function() {
      return this.set;
    }
  },
  twoWay: {
    get: function() {
      return this.bothWays;
    }
  },
  pipe: {
    get: function() {
      return this.chainTo;
    }
  }
});

METHOD_of = function(object) {
  if (!(checkIf.isObject(object) || checkIf.isFunction(object))) {
    throwErrorBadArg(object);
  }
  if (checkIf.isBindingInterface(object)) {
    object = object.object;
  }
  this.stage = 1;
  return this.setObject(object);
};

METHOD_chainTo = function(subject, specificOptions, saveOptions) {
  return SimplyBind(this.subs[this.subs.length - 1]).to(subject, specificOptions, saveOptions);
};

METHOD_set = function(newValue) {
  this._.setValue(newValue);
  return this;
};

METHOD_transformSelf = function(transformFn) {
  if (!checkIf.isFunction(transformFn)) {
    throwWarning('fnOnly', 1);
  } else {
    this._.setSelfTransform(transformFn, this.options.updateOnBind);
  }
  return this;
};

METHOD_transform = function(transformFn) {
  this._.addModifierFn('transformFn', this.subs.slice(-1), transformFn, this.options.updateOnBind);
  return this;
};

METHOD_transformAll = function(transformFn) {
  this._.addModifierFn('transformFn', this.subs, transformFn, this.options.updateOnBind);
  return this;
};

METHOD_condition = function(conditionFn) {
  this._.addModifierFn('conditionFn', this.subs.slice(-1), conditionFn);
  return this;
};

METHOD_conditionAll = function(conditionFn) {
  this._.addModifierFn('conditionFn', this.subs, conditionFn);
  return this;
};

METHOD_bothWays = function(altTransform) {
  var binding, bindings, i, len, originCondition, originTransform, sub, subBinding, transformToUse;
  sub = this.subs[this.subs.length - 1];
  subBinding = sub._;
  bindings = this._.isMulti ? this._.bindings : [this._];
  subBinding.addSub(this._, sub.options);
  for (i = 0, len = bindings.length; i < len; i++) {
    binding = bindings[i];
    originTransform = binding.subsMeta[subBinding.ID].transformFn;
    originCondition = binding.subsMeta[subBinding.ID].conditionFn;
    if (originTransform || altTransform) {
      transformToUse = checkIf.isFunction(altTransform) ? altTransform : originTransform;
      if (transformToUse && altTransform !== false) {
        subBinding.subsMeta[this._.ID].transformFn = transformToUse;
      }
    }
    if (originCondition) {
      subBinding.subsMeta[this._.ID].conditionFn = originCondition;
    }
  }
  return this;
};

METHOD_unBind = function(bothWays) {
  var i, len, ref, sub;
  ref = this.subs;
  for (i = 0, len = ref.length; i < len; i++) {
    sub = ref[i];
    this._.removeSub(sub._, bothWays);
  }
  return this;
};

METHOD_pollEvery = function(time) {
  this._.addPollInterval(time);
  return this;
};

METHOD_stopPolling = function() {
  this._.removePollInterval();
  return this;
};

METHOD_setOption = function(optionName, newValue) {
  this._.subsMeta[this.subs[this.subs.length - 1]._.ID].opts[optionName] = newValue;
  return this;
};

;

;

var GroupBinding, proto;

GroupBinding = function(bindingInterface, objects, objectType) {
  var bindings, i, len, object;
  bindingInterface.selector = bindingInterface.selector.slice(6);
  extendState(this, this["interface"] = bindingInterface);
  this.isMulti = true;
  this.bindings = bindings = [];
  if (objects) {
    for (i = 0, len = objects.length; i < len; i++) {
      object = objects[i];
      this.addBinding(object, objectType);
    }
  }
  return Object.defineProperties(this, {
    'type': {
      get: function() {
        return bindings.map(function(binding) {
          return binding.type;
        });
      }
    },
    'value': {
      get: function() {
        return bindings.map(function(binding) {
          return binding.value;
        });
      }
    }
  });
};

proto = GroupBinding.prototype = Object.create(BindingInterfacePrivate);

Object.keys(Binding.prototype).forEach(function(methodName) {
  return proto[methodName] = function(a, b, c, d) {
    var binding, i, len, ref;
    ref = this.bindings;
    for (i = 0, len = ref.length; i < len; i++) {
      binding = ref[i];
      if (methodName === 'updateSub') {
        b = binding;
      }
      binding[methodName](a, b, c, d);
    }
  };
});

proto.addBinding = function(object, objectType) {
  this.bindings.push(!objectType ? object : this.createBinding(object, objectType, this["interface"]));
};

;

module.exports = SimplyBind;

;
return module.exports;
},
0: function (require, module, exports) {
var DataTable, SimplyBind, currentID, escHTML, extend;

SimplyBind = require(1);

extend = require(2);

escHTML = require(3);

var markup;

markup = {
  tableOuterwrap: function(arg) {
    var ID, baseClass, cellsHavePadding, hasMobile, minWidth;
    ID = arg.ID, baseClass = arg.baseClass, minWidth = arg.minWidth, hasMobile = arg.hasMobile, cellsHavePadding = arg.cellsHavePadding;
    return "<div id='" + baseClass + "-" + ID + "' class='" + baseClass + "-outerwrap {{loading}} {{noResults}} {{hasError}} " + (minWidth ? '_hasMinWidth' : '') + " " + (hasMobile ? '{{mobileVersion}}' : '') + " " + (cellsHavePadding ? '_cellsHavePadding' : '') + " '></div>";
  },
  table: function(arg) {
    var alignment, baseClass;
    baseClass = arg.baseClass, alignment = arg.alignment;
    return "<div class='" + baseClass + " alignment---" + alignment + " sortDirection---{{sortDirection}}'> <div class='" + baseClass + "-heading'> <div class='" + baseClass + "-heading-row'></div> </div> <div class='" + baseClass + "-body'></div> </div>";
  },
  loading: function(arg) {
    var baseClass;
    baseClass = arg.baseClass;
    return "<div class='" + baseClass + "-loading {{isVisible}}'> <div class='" + baseClass + "-loading-innerwrap'> <div class='" + baseClass + "-loading-icon'></div> <div class='" + baseClass + "-loading-text'>Loading</div> </div> </div>";
  },
  noResults: function(arg) {
    var baseClass, itemPluralLabel, itemSingleLabel, ref, ref1;
    baseClass = arg.baseClass, itemSingleLabel = (ref = arg.itemSingleLabel) != null ? ref : 'Item', itemPluralLabel = (ref1 = arg.itemPluralLabel) != null ? ref1 : itemSingleLabel + 's';
    return "<div class='" + baseClass + "-noResults {{isVisible}}'> <div class='" + baseClass + "-noResults-innerwrap'> <div class='" + baseClass + "-noResults-icon'></div> <div class='" + baseClass + "-noResults-text'> <div class='" + baseClass + "-noResults-text-title'>No " + itemSingleLabel + "s to Display</div> <div class='" + baseClass + "-noResults-text-subtitle'>There are no matching " + itemPluralLabel + " for the search query you've typed.</div> </div> </div> </div>";
  },
  error: function(arg) {
    var baseClass;
    baseClass = arg.baseClass;
    return "<div class='" + baseClass + "-error {{isVisible}}'> <div class='" + baseClass + "-error-innerwrap'> <div class='" + baseClass + "-error-icon'></div> <div class='" + baseClass + "-error-text'> <div class='" + baseClass + "-error-text-title'>A Fatal Error has Occured</div> <div class='" + baseClass + "-error-text-subtitle'>Report the following to the admin:<br />\"{{errorMessage}}\"</div> </div> </div> </div>";
  },
  pageStatus: function(arg) {
    var baseClass, showPageStatus;
    baseClass = arg.baseClass, showPageStatus = arg.showPageStatus;
    return "<div class='" + baseClass + "-pageStatus " + (showPageStatus ? 'is_visible' : '') + "'> Showing {{rowRange}} of {{totalRows}} </div>";
  },
  pagination: function(arg) {
    var baseClass;
    baseClass = arg.baseClass;
    return "<div class='" + baseClass + "-pagination {{hasExtra}} {{isVisible}}'> <div class='" + baseClass + "-pagination-item _paginationItem _back'> <div class='" + baseClass + "-pagination-item-text'></div> </div> <div class='" + baseClass + "-pagination-itemswrap _paginationItems'></div> <div class='" + baseClass + "-pagination-item _paginationItem _extraIndicator'> <div class='" + baseClass + "-pagination-item-text'></div> <select class='" + baseClass + "-pagination-item-select'></select> </div> <div class='" + baseClass + "-pagination-item _paginationItem _next'> <div class='" + baseClass + "-pagination-item-text'></div> </div> </div>";
  },
  paginationItem: function(arg) {
    var baseClass, value;
    baseClass = arg.baseClass, value = arg.value;
    return "<div class='" + baseClass + "-pagination-item _paginationItem'> <div class='" + baseClass + "-pagination-item-text'>" + value + "</div> </div>";
  },
  headingCell: function(arg) {
    var baseClass, extraClasses, icon, label, ref, ref1, ref2, slug, style;
    baseClass = arg.baseClass, extraClasses = (ref = arg.extraClasses) != null ? ref : '', slug = arg.slug, icon = (ref1 = arg.icon) != null ? ref1 : '', label = arg.label, style = (ref2 = arg.style) != null ? ref2 : '';
    return "<div class='" + baseClass + "-heading-row-cell " + extraClasses + " __" + slug + "' data-slug='" + slug + "' data-icon='" + icon + "' " + style + "> <div class='" + baseClass + "-heading-row-cell-text'>" + label + "</div> </div>";
  },
  row: function(arg) {
    var baseClass, cells, drilldown, ref, rowID;
    baseClass = arg.baseClass, rowID = arg.rowID, cells = arg.cells, drilldown = (ref = arg.drilldown) != null ? ref : '';
    return "<div class='" + baseClass + "-body-row _tableRow {{drilldownState}}' data-row-id='" + rowID + "'> <div class='" + baseClass + "-body-row-expandDrilldown _expandDrilldown'> <div class='" + baseClass + "-body-row-expandDrilldown-icon'></div> </div> " + cells + " <div class='" + baseClass + "-body-row-drilldown _tableRowDrilldown'> " + drilldown + " </div> </div>";
  },
  rowCell: function(arg) {
    var baseClass, column, extraClasses, label, ref, ref1, slug, style, value;
    baseClass = arg.baseClass, extraClasses = (ref = arg.extraClasses) != null ? ref : '', label = arg.label, column = arg.column, slug = arg.slug, value = arg.value, style = (ref1 = arg.style) != null ? ref1 : '';
    return "<div class='" + baseClass + "-body-row-cell __" + slug + " " + extraClasses + "' data-slug='" + slug + "' data-column='" + column + "' " + style + "> <div class='" + baseClass + "-body-row-cell-innerwrap' title='" + label + "'>" + value + "</div> </div>";
  },
  searchField: function(arg) {
    var baseClass, search;
    baseClass = arg.baseClass, search = arg.search;
    return "<div class='" + baseClass + "-search " + ((search != null ? search.length : void 0) ? 'is_visible' : '') + "'> <select class='" + baseClass + "-search-select'></select> <input class='" + baseClass + "-search-input' /> <div class='" + baseClass + "-search-selectTrigger'></div> </div>";
  },
  ipDetails: function(arg) {
    var baseClass, extra, ipAddress, ref;
    baseClass = arg.baseClass, ipAddress = arg.ipAddress, extra = (ref = arg.extra) != null ? ref : '';
    return "<div class='" + baseClass + "-ipDetails _ipDetails' data-ip='" + ipAddress + "'> <div class='" + baseClass + "-ipDetails-trigger _ipDetails-trigger'></div> <div class='" + baseClass + "-ipDetails-content'>Loading IP Details</div> </div> " + extra;
  },
  ipDetailsItem: function(arg) {
    var baseClass, label, value;
    baseClass = arg.baseClass, label = arg.label, value = arg.value;
    return "<div class='" + baseClass + "-ipDetails-content-item'> <div class='" + baseClass + "-ipDetails-content-item-label'>" + label + ": </div> <div class='" + baseClass + "-ipDetails-content-item-value'>" + value + "</div> </div>";
  },
  fields: function(arg) {
    var baseClass, fields;
    baseClass = arg.baseClass, fields = arg.fields;
    return "<div class='" + baseClass + "-fieldGroup'>" + fields + "</div>";
  },
  fieldsItem: function(arg) {
    var baseClass, label, value;
    baseClass = arg.baseClass, label = arg.label, value = arg.value;
    return "<div class='" + baseClass + "-fieldGroup-item'> <div class='" + baseClass + "-fieldGroup-item-label'>" + label + ": </div> <div class='" + baseClass + "-fieldGroup-item-value'>" + (escHTML(value)) + "</div> </div>";
  },
  button: function(arg) {
    var action, baseClass, icon, isMulti, ref;
    baseClass = arg.baseClass, action = arg.action, icon = (ref = arg.icon) != null ? ref : '', isMulti = arg.isMulti;
    return "<div class='" + baseClass + "-button _actionButton " + (isMulti ? '_isMulti' : '') + "' data-action='" + action + "'> <div class='" + baseClass + "-button-icon'>" + icon + "</div> </div>";
  },
  actions: function(arg) {
    var actions, baseClass;
    baseClass = arg.baseClass, actions = arg.actions;
    return "<div class='" + baseClass + "-actions'> <div class='" + baseClass + "-actions-popup'>" + actions + "</div> </div>";
  },
  actionsOverlay: function() {
    return "<div class='" + DataTable.defaults.baseClass + "-actions-overlay'></div>";
  },
  actionsItem: function(arg) {
    var action, baseClass, customIconStyle, icon, label, ref;
    baseClass = arg.baseClass, action = arg.action, icon = arg.icon, label = arg.label, customIconStyle = (ref = arg.customIconStyle) != null ? ref : '';
    return "<div class='" + baseClass + "-actions-popup-item _actionButton _subActionButton' data-action='" + action + "' style='" + customIconStyle + "'> <div class='" + baseClass + "-actions-popup-item-icon'>" + icon + "</div> <div class='" + baseClass + "-actions-popup-item-text'>" + label + "</div> </div>";
  }
};

;

var defaults;

defaults = {
  'perPage': 20,
  'pageCountMax': 10,
  'minWidth': 0,
  'mobileWidth': 736,
  'cellsHavePadding': false,
  'hasMobile': true,
  'loadOnInit': true,
  'columns': [],
  'search': [],
  'percentage': {},
  'baseClass': 'DataTable',
  'showPageStatus': true,
  'sortBy': '',
  'alignment': 'left',
  'actions': false,
  'ipDataFetcher': function(ipAddress) {
    return new Promise(function(resolve) {
      return $.get("http://ipinfo.io/" + ipAddress, resolve, 'JSON');
    });
  }
};

;

var helpers;

helpers = {};

helpers.compareValues = function(valueA, valueB) {
  switch (false) {
    case typeof valueA !== typeof valueB:
      return valueA === valueB;
    case typeof valueA !== 'string':
      return valueA === '' + valueB;
    case typeof valueA !== 'number':
      return valueA === parseFloat(valueB);
  }
};

helpers.toggleActionsPopup = function(actionsPopup$) {
  var isOpen, overlay$;
  isOpen = actionsPopup$.data('isOpen');
  if (isOpen) {
    actionsPopup$.data('overlay').remove();
    actionsPopup$.removeClass('is_visible');
  } else {
    actionsPopup$.data('overlay', overlay$ = $(markup.actionsOverlay()));
    actionsPopup$.addClass('is_visible');
    overlay$.appendTo(document.body).one('click', function() {
      return helpers.toggleActionsPopup(actionsPopup$);
    });
  }
  return actionsPopup$.data('isOpen', !isOpen);
};

helpers.getBreakdownTotal = function(breakdown, breakdownKeys) {
  switch (false) {
    case breakdownKeys.length !== 0:
      return 0;
    default:
      return breakdownKeys.map(function(breakdownItem) {
        return breakdown[breakdownItem];
      }).reduce(function(a, b) {
        return a + b;
      });
  }
};

helpers.normalizeColumns = function(columns) {
  var column, i, j, label, len, len1, output, ref;
  if (!Array.isArray(columns)) {
    output = columns;
  } else {
    output = {};
    if (typeof columns[0] === 'string') {
      for (i = 0, len = columns.length; i < len; i++) {
        label = columns[i];
        output[label] = {
          label: label
        };
      }
    } else if ((ref = columns[0]) != null ? ref.label : void 0) {
      for (j = 0, len1 = columns.length; j < len1; j++) {
        column = columns[j];
        output[column.label] = column;
      }
    }
  }
  for (label in output) {
    column = output[label];
    if (column.label == null) {
      column.label = label;
    }
    if (column.slug == null) {
      column.slug = column.label.toLowerCase().replace(/\W/g, '_');
    }
    if (column.type == null) {
      column.type = 'text';
    }
  }
  return output;
};

helpers.getBreakdownBarWidth = function(row, largest) {
  return (row.breakdownBarTotal / largest) * (100 - 18);
};

helpers.genHeaderCellStyle = function(column) {
  var styleString;
  styleString = '';
  if (column.width) {
    styleString += "max-width: " + column.width + ";";
  }
  if (column.grow >= 0) {
    styleString += "flex-grow: " + column.grow + ";";
  }
  if (styleString) {
    return "style='" + styleString + "'";
  } else {
    return '';
  }
};

helpers.genCellStyle = function(column) {
  var color, styleString;
  styleString = '';
  if (column.width) {
    styleString += "max-width: " + column.width + ";";
  }
  if (column.color) {
    color = this.colorMapping(column.color, column.colorType);
    styleString += "color: " + color + ";";
  }
  if (column.customStyle) {
    styleString += column.customStyle;
  }
  if (column.grow >= 0) {
    styleString += "flex-grow: " + column.grow + ";";
  }
  if (styleString) {
    return "style='" + styleString + "'";
  } else {
    return '';
  }
};

helpers.genCellClassname = function(column) {
  var classString;
  classString = '';
  if (column.sortable) {
    classString += ' _isSortable {{currentSort}}';
  }
  if (column.noLabel) {
    classString += ' _noLabel';
  }
  if (column.isLink) {
    classString += ' _isLink';
  }
  if (column.noEllipsis) {
    classString += ' _noEllipsis';
  }
  if (column.showOverflow) {
    classString += ' _showOverflow';
  }
  if (column.color) {
    classString += ' _hasColor';
  }
  if (column.type === 'button' || column.type === 'actions') {
    classString += ' _isButton';
    column.alwaysCenter = true;
  }
  if (column.type === 'breakdownBar') {
    classString += ' _isBreakdownBar';
  }
  if (column.type === 'ipDetails') {
    classString += ' _isIpDetails';
  }
  if (column.type === 'fields') {
    classString += ' _isFields';
  }
  if (column.alwaysCenter) {
    classString += ' _alwaysCenter';
  }
  return classString;
};

helpers.colorMapping = function(value, colorType) {
  if (colorType == null) {
    colorType = 'name';
  }
  switch (colorType) {
    case 'browser':
      switch (false) {
        case !value.includes('Firefox'):
          return this.colorMapping('orange');
        case !value.includes('Chrome'):
          return this.colorMapping('green');
        case !value.includes('Safari'):
          return this.colorMapping('blue');
        case !value.includes('Mobile Safari'):
          return this.colorMapping('blue');
        case !value.includes('IE'):
          return this.colorMapping('lightblue');
        case !value.includes('Edge'):
          return this.colorMapping('lightblue');
        case !value.includes('Opera'):
          return this.colorMapping('red');
        case !value.includes('Android'):
          return this.colorMapping('lightgreen');
        default:
          return 'unknown';
      }
      break;
    case 'platform':
      switch (value) {
        case 'Mac OS X':
          return this.colorMapping('black');
        case 'Windows':
          return this.colorMapping('lightblue');
        case 'Windows Phone':
          return this.colorMapping('purple');
        case 'Linux':
          return this.colorMapping('darkyellow');
        case 'iOS':
          return this.colorMapping('black');
        case 'Android':
          return this.colorMapping("lightgreen");
        default:
          return 'unknown';
      }
      break;
    case 'satisfaction':
      switch (value) {
        case 'Excellent':
          return this.colorMapping('green');
        case 'Normal':
          return this.colorMapping('yellow');
        case 'Poor':
          return this.colorMapping('red');
        default:
          return 'unknown';
      }
      break;
    case 'name':
      switch (value) {
        case 'orange':
          return '#ee6f0e';
        case 'green':
          return '#00ad09';
        case 'blue':
          return '#4788f3';
        case 'yellow':
          return '#eab71e';
        case 'red':
          return '#cc4820';
        case 'black':
          return '#181818';
        case 'purple':
          return '#a020ba';
        case 'lightblue':
          return '#0cb3ee';
        case 'lightgreen':
          return '#78c257';
        case 'darkyellow':
          return '#e8ac01';
      }
      break;
    default:
      return value;
  }
};

helpers.iconMapping = function(value, iconType) {
  switch (iconType) {
    case 'browser':
      switch (false) {
        case !value.includes('Firefox'):
          return '#';
        case !value.includes('Chrome'):
          return '%';
        case !value.includes('Safari'):
          return '$';
        case !value.includes('Mobile Safari'):
          return '$';
        case !value.includes('IE'):
          return '&';
        case !value.includes('Edge'):
          return '&';
        case !value.includes('Opera'):
          return '"';
        case !value.includes('Android'):
          return '&#039;';
        default:
          return '4';
      }
      break;
    case 'device':
      switch (value) {
        case 'Desktop':
          return '!';
        case 'Tablet':
          return '7';
        case 'Mobile':
          return '6';
        default:
          return '4';
      }
      break;
    case 'platform':
      switch (value) {
        case 'Mac OS X':
          return '*';
        case 'Windows':
          return ')';
        case 'Windows Phone':
          return ')';
        case 'Linux':
          return '+';
        case 'iOS':
          return '*';
        case 'Android':
          return "&#039;";
        default:
          return '4';
      }
      break;
    case 'satisfaction':
      switch (value) {
        case 'Excellent':
          return '[';
        case 'Normal':
          return '@';
        case 'Poor':
          return '?';
        default:
          return '4';
      }
      break;
    default:
      return '4';
  }
};

;

DataTable = function(container, options) {
  this.container = container;
  if (options == null) {
    options = {};
  }
  this.options = extend({}, DataTable.defaults, options);
  this.state = {
    'loading': false,
    'noResults': false,
    'error': false
  };
  this.ID = ++currentID;
  this.tableID = "\#" + this.options.baseClass + "-" + this.ID;
  this.visibleRows = [];
  this.availableRows = [];
  this.allRows = [];
  this.largestBreakdownTotal = 0;
  this.searchCriteria = '';
  this.searchParam = '';
  this.sortBy = this.options.sortBy ? this.options.sortBy : '';
  this.sortDirection = -1;
  this.currentPage = 1;
  this.els = {};
  this.els.tableOuterwrap = $(markup.tableOuterwrap($.extend({
    ID: this.ID
  }, this.options)));
  this.els.table = $(markup.table(this.options)).appendTo(this.els.tableOuterwrap);
  this.els.tableHeading = this.els.table.children().first().children();
  this.els.tableBody = this.els.table.children().last();
  this.els.noResultsMessage = $(markup.noResults(this.options)).appendTo(this.els.tableOuterwrap);
  this.els.loadingMessage = $(markup.loading(this.options)).appendTo(this.els.tableOuterwrap);
  this.els.errorMessage = $(markup.error(this.options)).appendTo(this.els.tableOuterwrap);
  this.els.pageStatus = $(markup.pageStatus(this.options)).appendTo(this.els.tableOuterwrap);
  this.els.pagination = $(markup.pagination(this.options)).appendTo(this.els.tableOuterwrap);
  this.els.paginationItems = this.els.pagination.children('._paginationItems');
  this.els.paginationExtra = this.els.pagination.children('._extraIndicator');
  this.els.paginationExtraSelect = this.els.paginationExtra.children('select');
  this.els.paginationExtraText = this.els.paginationExtraSelect.prev();
  this.els.searchField = $(markup.searchField(this.options)).insertBefore(this.els.table);
  this.els.searchParam = this.els.searchField.children('select');
  this.els.searchCriteria = this.els.searchField.children('input');
  this.els.globalStyles = $('<style />').prependTo(this.els.tableOuterwrap);
  this.els.tableHeading.append(this.generateHeadingColumns());
  this.els.tableOuterwrap.appendTo(this.container);
  this.els.table.data('DataTable', this);
  if (this.options.minWidth) {
    this.els.table[0].style.minWidth = this.options.minWidth + "px";
  }
  Promise.bind(this).then(this.attachEvents).then(this.attachBindings).then(function() {
    if (this.options.loadOnInit) {
      return this.loadData();
    }
  });
  return this;
};

DataTable.prototype.fetchData = function() {
  this.state.loading = true;
  return this.options.data().then((function(_this) {
    return function(data) {
      _this.state.loading = false;
      return Promise.resolve(data);
    };
  })(this))["catch"]((function(_this) {
    return function(err) {
      return _this.state.error = err;
    };
  })(this));
};

DataTable.prototype.setData = function(data) {
  if (Array.isArray(data)) {
    return this.allRows = data;
  }
};

DataTable.prototype.loadData = function() {
  var i, len, ref, row;
  if (this.allRows.length) {
    ref = this.allRows;
    for (i = 0, len = ref.length; i < len; i++) {
      row = ref[i];
      this.unprocessRow(row);
    }
  }
  return this.fetchData().then((function(_this) {
    return function(data) {
      return _this.setData(data);
    };
  })(this));
};

DataTable.prototype.markupArgs = function(argsObject) {
  if (argsObject == null) {
    argsObject = {};
  }
  argsObject.baseClass = this.options.baseClass;
  return argsObject;
};

DataTable.prototype.calcPageCount = function(rows) {
  this.pageCountReal = Math.ceil(rows.length / this.options.perPage);
  return this.pageCount = this.pageCountReal > this.options.pageCountMax ? this.options.pageCountMax : this.pageCountReal;
};

DataTable.prototype.calcPercentageString = function(columnValue, columnName, row) {
  var columnA, columnB, formula, mathOperator, percent, percentageValue;
  formula = this.options.percentage[columnName];
  columnA = formula[0];
  columnB = formula[2];
  mathOperator = formula[1];
  percentageValue = (function() {
    switch (mathOperator) {
      case '*':
        return row[columnA] * row[columnB];
      case '/':
        return row[columnA] / row[columnB];
      case '+':
        return row[columnA] + row[columnB];
      case '-':
        return row[columnA] - row[columnB];
    }
  })();
  if (percentageValue === 2e308) {
    percentageValue = 0;
  }
  percent = convertToPercent(percentageValue);
  return columnValue + " (" + percent + ")";
};

DataTable.prototype.sortRows = function(rows, targetColumn) {
  var customSort, rawValue;
  if (targetColumn == null) {
    targetColumn = this.options.sortBy;
  }
  switch (false) {
    case targetColumn !== '+':
      return rows;
    case targetColumn !== '-':
      return rows != null ? rows.slice().reverse() : void 0;
    case !this.options.columns[targetColumn]:
      customSort = this.options.columns[targetColumn].sortFn;
      rawValue = this.options.columns[targetColumn].rawValueFormatter;
      return rows.slice().sort(customSort || (function(_this) {
        return function(a, b) {
          var aValue, bValue;
          aValue = rawValue ? rawValue(a[targetColumn]) : a[targetColumn];
          bValue = rawValue ? rawValue(b[targetColumn]) : b[targetColumn];
          switch (false) {
            case !(aValue > bValue):
              return _this.sortDirection;
            case !(aValue < bValue):
              return _this.sortDirection * -1;
            default:
              return 0;
          }
        };
      })(this));
    default:
      return rows;
  }
};

DataTable.prototype.setVisiblePage = function(targetPage) {
  var i, len, row, rowsToHide, rowsToReveal, slice;
  targetPage--;
  slice = {
    'start': targetPage * this.options.perPage,
    'end': (targetPage * this.options.perPage) + this.options.perPage
  };
  rowsToReveal = this.availableRows.slice(slice.start, slice.end);
  rowsToHide = this.visibleRows.slice();
  for (i = 0, len = rowsToHide.length; i < len; i++) {
    row = rowsToHide[i];
    row.visible = false;
  }
  this.visibleRows.length = 0;
  return this.visibleRows.push.apply(this.visibleRows, rowsToReveal);
};

DataTable.prototype.setPageIndicator = function(targetPage) {
  var matchedPageEl$, pageItems$;
  if (targetPage === '...') {
    targetPage = 1;
  }
  targetPage = targetPage > this.options.pageCountMax ? this.options.pageCountMax : targetPage - 1;
  pageItems$ = this.els.pagination.find('._paginationItem').slice(1, -1);
  matchedPageEl$ = pageItems$.eq(targetPage);
  matchedPageEl$.addClass('current');
  return pageItems$.not(matchedPageEl$).removeClass('current');
};

;

DataTable.prototype.generateHeadingColumns = function() {
  var column, label;
  this.options.columns = helpers.normalizeColumns(this.options.columns);
  if ((function() {
    var ref, results;
    ref = this.options.columns;
    results = [];
    for (label in ref) {
      column = ref[label];
      results.push(column.type === 'breakdownBar');
    }
    return results;
  }).call(this)) {
    this.hasBreakdownBar = true;
  }
  return Object.keys(this.options.columns).map((function(_this) {
    return function(label) {
      column = _this.options.columns[label];
      _this.els.globalStyles[0].innerHTML += "{{" + column.slug + "}}\n";
      return markup.headingCell(_this.markupArgs({
        'slug': column.slug,
        'icon': column.icon,
        'label': column.label,
        'style': helpers.genHeaderCellStyle(column),
        'extraClasses': helpers.genCellClassname(column)
      }));
    };
  })(this)).join('');
};

DataTable.prototype.updateColumns = function(updatedColumns) {
  updatedColumns = helpers.normalizeColumns(updatedColumns);
  extend(true, this.options.columns, updatedColumns);
  return this.currentPage = this.currentPage;
};

;

DataTable.prototype.processRow = function(row) {
  var ref;
  if (row.processed) {
    return row;
  } else {
    this.generateRow(row);
    SimplyBind('visible', {
      updateEvenIfSame: true
    }).of(row).to((function(_this) {
      return function(isVisible, prevValue) {
        if (!isVisible) {
          return row.el.detach();
        } else {
          row.el.appendTo(_this.els.tableBody);
          if (_this.hasBreakdownBar && !row.updatedBreakdownWidth && isVisible !== prevValue) {
            return row.breakdownBarWidth = helpers.getBreakdownBarWidth(row, _this.largestBreakdownTotal);
          }
        }
      };
    })(this));
    if (this.hasBreakdownBar && ((ref = row.breakdownBarEl) != null ? ref.length : void 0)) {
      SimplyBind('largestBreakdownTotal').of(this).to('updatedBreakdownWidth').of(row).transform(function() {
        if (row.visible) {
          return true;
        } else {
          return false;
        }
      }).and.to('breakdownBarWidth').of(row).transform((function(_this) {
        return function() {
          return helpers.getBreakdownBarWidth(row, _this.largestBreakdownTotal);
        };
      })(this)).chainTo('width').of(row.breakdownBarEl[0].style).transform(function(width) {
        return width + '%';
      }).and.to((function(_this) {
        return function() {
          var drilldownEl, i, index, len, ref1, ref2, width;
          ref1 = row.drilldownEls;
          for (index = i = 0, len = ref1.length; i < len; index = ++i) {
            drilldownEl = ref1[index];
            width = helpers.getBreakdownBarWidth(row.drilldown[index], row.drilldown.largestBreakdownTotal);
            if ((ref2 = $(drilldownEl).children('.is_breakdown_bar').children().children()[0]) != null) {
              ref2.style.width = width + '%';
            }
          }
        };
      })(this)).condition(function() {
        return row.drilldown;
      }).conditionAll(function() {
        return row.visible;
      });
    }
    row.processed = true;
    return row;
  }
};

DataTable.prototype.unprocessRow = function(row) {
  if (row.processed) {
    SimplyBind.unBindAll(row, true);
    if (this.hasBreakdownBar && row.breakdownBarEl[0]) {
      SimplyBind.unBindAll(row.breakdownBarEl[0].style);
    }
    row.el.remove();
    delete row.el;
    delete row.drilldownEls;
    delete row.visible;
    delete row.breakdownBarEl;
    return delete row.processed;
  }
};

DataTable.prototype.reRenderRow = function(row) {
  return this.generateRow(row);
};

DataTable.prototype.generateRow = function(row) {
  var newRowEl, prevRowEl;
  prevRowEl = row.el;
  newRowEl = row.el = $(this.generateRowMarkup(row)).data('row', row);
  if (prevRowEl) {
    prevRowEl.replaceWith(newRowEl);
  }
  if (row.drilldown) {
    row.expandButton = row.el.children().first();
  }
  if (row.drilldown) {
    row.drilldownEls = row.el.children('._tableRowDrilldown').children();
  }
  if (this.hasBreakdownBar) {
    row.breakdownBarEl = row.el.children('.isBreakdownBar').children().children();
  }
  if (!prevRowEl) {
    row.visible = false;
  }
  if (row.drilldown) {
    if (this.hasBreakdownBar) {
      row.drilldown.largestBreakdownTotal = Math.max.apply(Math, row.drilldown.map(function(subRow) {
        return subRow.breakdownBarTotal;
      }));
    }
    SimplyBind('drilldownOpen').of(row).to('className.drilldownState').of(row.el).transform(function(drilldownOpen) {
      if (drilldownOpen) {
        return 'hasDrilldown drilldownIsOpen';
      } else {
        return 'hasDrilldown';
      }
    });
    SimplyBind('visible').of(row).once.to(function() {
      return SimplyBind(function() {
        if (!row.drilldownOpen) {
          return setTimeout(function() {
            var buttonHeight, rowHeight;
            rowHeight = row.el.height();
            buttonHeight = row.expandButton.height();
            return row.expandButton[0].style.top = (rowHeight / 2 - buttonHeight / 2) + "px";
          });
        }
      }).updateOn('event:resize', {
        throttle: 300
      }).of(window);
    }).condition(function(visible) {
      return visible;
    });
  }
  return row;
};

DataTable.prototype.generateRowMarkup = function(row, parentRow) {
  var isSub;
  isSub = !!parentRow;
  return markup.row(this.markupArgs({
    'rowID': isSub ? parentRow[this.options.uniqueID] : row[this.options.uniqueID],
    'drilldown': isSub ? '' : row.drilldown ? (function(_this) {
      return function() {
        var drilldownMarkups, drilldownRow, i, len, ref;
        drilldownMarkups = '';
        ref = row.drilldown;
        for (i = 0, len = ref.length; i < len; i++) {
          drilldownRow = ref[i];
          drilldownMarkups += _this.generateRowMarkup(drilldownRow, row);
        }
        return drilldownMarkups;
      };
    })(this)() : void 0,
    'cells': (function(_this) {
      return function() {
        var cellValue, column, columnName, ref, rowCells;
        rowCells = '';
        ref = _this.options.columns;
        for (columnName in ref) {
          column = ref[columnName];
          cellValue = row[columnName];
          if (_this.options.percentage[columnName]) {
            cellValue = _this.calcPercentageString(cellValue, columnName, row);
          }
          rowCells += markup.rowCell(_this.markupArgs({
            'label': typeof cellValue === 'string' ? cellValue : '',
            'column': columnName,
            'slug': column.slug,
            'extraClasses': helpers.genCellClassname(column),
            'style': helpers.genCellStyle(column),
            'value': (function() {
              switch (false) {
                case column.type !== 'fields':
                  return _this.generateInlineFields(cellValue, row, column);
                case column.type !== 'ipDetails':
                  return _this.generateIpDetails(cellValue, row, column);
                case column.type !== 'breakdownBar':
                  return _this.generateBreakdownBar(cellValue, row, column);
                case column.type !== 'button':
                  return _this.generateButton(column.action || cellValue, column.buttonIcon || column.icon);
                case column.type !== 'actions':
                  return _this.generateActions(column, row, column);
                case !column.isLink:
                  return "<a href='" + cellValue + "' target='_blank'>" + cellValue + "</a>";
                default:
                  if (column.formatter) {
                    return column.formatter(cellValue, row, column);
                  } else {
                    return cellValue;
                  }
              }
            })()
          }));
        }
        return rowCells;
      };
    })(this)()
  }));
};

;

DataTable.prototype.generateBreakdownBar = function(breakdown, rowObj, columnEntity) {
  var breakdownKeys, total;
  breakdownKeys = this.legend || Object.keys(breakdown);
  rowObj.breakdownBarTotal = total = this.getBreakdownTotal(breakdown, breakdownKeys);
  if (!total) {
    return 'N/A';
  }
  return markup.breakdownBar(this.markupArgs({
    'total': total,
    'totalFormatted': columnEntity.valueFormat ? columnEntity.valueFormat(total) : total,
    'bars': (function() {
      var bars, i, key, len, value;
      bars = '';
      for (i = 0, len = breakdownKeys.length; i < len; i++) {
        key = breakdownKeys[i];
        value = breakdown[key];
        bars += markup.block_table_body_row_cell_breakdown_bar.replace('{{width}}', (value / total) * 100);
      }
      return bars;
    })(),
    'hoverBox': (function() {
      return markup.block_table_body_row_cell_breakdown_hoverbox.replace('{{rows}}', function() {
        var rows;
        rows = '';
        breakdownKeys.forEach(function(key, index) {
          return rows += markup.block_table_body_row_cell_breakdown_hoverbox_row.replace('{{color}}', customColors(index)).replace('{{key}}', key).replace('{{value}}', columnEntity.valueFormat ? columnEntity.valueFormat(breakdown[key]) : breakdown[key]);
        });
        return rows;
      });
    })()
  }));
};

DataTable.prototype.generateInlineFields = function(dataFields) {
  return markup.fields(this.markupArgs({
    'fields': (function(_this) {
      return function() {
        var label, output, value;
        if (typeof dataFields !== 'object') {
          return '';
        }
        output = (function() {
          var results;
          results = [];
          for (label in dataFields) {
            value = dataFields[label];
            results.push(markup.fieldsItem(this.markupArgs({
              label: label,
              value: value
            })));
          }
          return results;
        }).call(_this);
        return output.join('');
      };
    })(this)()
  }));
};

DataTable.prototype.generateButton = function(action, icon, isMulti) {
  return markup.button(this.markupArgs({
    action: action,
    icon: icon,
    isMulti: isMulti
  }));
};

DataTable.prototype.generateActions = function(column) {
  var actionsMarkup, buttonMarkup;
  if (column.actions == null) {
    column.actions = 'multiActions';
  }
  buttonMarkup = this.generateButton(column.actions, column.buttonIcon || column.icon, true);
  actionsMarkup = markup.actions(this.markupArgs({
    'actions': (function(_this) {
      return function() {
        var action, output;
        if (!_this.options.actions) {
          return '';
        }
        output = (function() {
          var i, len, ref, results;
          ref = this.options.actions;
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            action = ref[i];
            results.push(markup.actionsItem(this.markupArgs(action)));
          }
          return results;
        }).call(_this);
        return output.join('');
      };
    })(this)()
  }));
  return buttonMarkup + actionsMarkup;
};

DataTable.prototype.generateIpDetails = function(ipAddress, row, column) {
  return markup.ipDetails(this.markupArgs({
    ipAddress: ipAddress,
    extra: typeof column.extraMarkup === "function" ? column.extraMarkup(ipAddress, row) : void 0
  }));
};

;

;

DataTable.prototype.attachEvents = function() {
  this.els.pagination.on('click', '._paginationItem', (function(_this) {
    return function(event) {
      var $this, isBack, isExtra, isNext, pageNumber;
      $this = $(event.currentTarget);
      isBack = $this.hasClass('_back');
      isNext = $this.hasClass('_next');
      isExtra = $this.hasClass('_extraIndicator');
      if (isBack) {
        if (_this.currentPage !== 1) {
          return _this.currentPage--;
        }
      } else if (isNext) {
        if (_this.currentPage !== _this.pageCountReal) {
          return _this.currentPage++;
        }
      } else if (!isExtra) {
        pageNumber = parseFloat($this.children().html());
        return _this.currentPage = pageNumber;
      }
    };
  })(this));
  this.els.tableHeading.on('click', '._isSortable', (function(_this) {
    return function(event) {
      return _this.sortBy = event.currentTarget.children[0].textContent;
    };
  })(this));
  this.els.tableBody.on('click', '._actionButton', (function(_this) {
    return function(event) {
      var action, button$, dataItem, itemID, itemIndex, itemRow$;
      button$ = $(event.currentTarget);
      if (button$.hasClass('_isMulti')) {
        return helpers.toggleActionsPopup(button$.next().children());
      } else {
        itemRow$ = button$.closest('._tableRow');
        action = button$.data('action');
        itemID = itemRow$.data('row-id');
        itemIndex = itemRow$.data('index');
        dataItem = itemID ? _this.allRows.find(function(row) {
          return helpers.compareValues(row[_this.options.uniqueID], itemID);
        }) : void 0;
        if (dataItem == null) {
          dataItem = itemID;
        }
        if (button$.hasClass('_subActionButton')) {
          helpers.toggleActionsPopup(button$.parent());
        }
        return _this.els.table.trigger("action." + action, dataItem);
      }
    };
  })(this));
  this.els.tableBody.on('click', '._expandDrilldown', (function(_this) {
    return function(event) {
      var button$, itemRow;
      button$ = $(event.currentTarget);
      itemRow = button$.parent().data('row');
      return itemRow.drilldownOpen = !itemRow.drilldownOpen;
    };
  })(this));
  this.els.tableBody.on('mouseover', '._ipDetails-trigger', (function(_this) {
    return function(event) {
      var content$, country$, ipAddress, isLoaded, trigger$, wrapper$;
      trigger$ = $(event.currentTarget);
      wrapper$ = trigger$.parent();
      content$ = trigger$.next();
      country$ = content$.next();
      ipAddress = wrapper$.data('ip');
      isLoaded = trigger$.hasClass('_isReady');
      if (!isLoaded) {
        return _this.options.ipDataFetcher(ipAddress).then(function(ipDetails) {
          var label, output, value;
          if (!ipDetails) {
            return;
          }
          output = (function() {
            var results;
            results = [];
            for (label in ipDetails) {
              value = ipDetails[label];
              results.push(markup.ipDetailsItem(this.markupArgs({
                label: label,
                value: value
              })));
            }
            return results;
          }).call(_this);
          content$.html(output.join(''));
          return wrapper$.addClass('_isReady');
        });
      }
    };
  })(this));
  return Promise.resolve();
};

;

DataTable.prototype.attachBindings = function() {
  var column, fn, l, ref;
  SimplyBind.settings.trackArrayChildren = false;
  SimplyBind('noResults').of(this.state).to('className.isVisible').of(this.els.noResultsMessage).transform((function(_this) {
    return function(noResults) {
      if (noResults && !_this.state.loading) {
        return 'is_visible';
      } else {
        return '';
      }
    };
  })(this)).and.to('className.noResults').of(this.els.tableOuterwrap).transform((function(_this) {
    return function(noResults) {
      if (noResults && !_this.state.loading) {
        return '_noResults';
      } else {
        return '';
      }
    };
  })(this));
  SimplyBind('loading').of(this.state).to('className.isVisible').of(this.els.loadingMessage).transform(function(loading) {
    if (loading) {
      return 'is_visible';
    } else {
      return '';
    }
  }).and.to('className.loading').of(this.els.tableOuterwrap).transform((function(_this) {
    return function(loading) {
      if (loading) {
        return '_loading';
      } else {
        return '';
      }
    };
  })(this)).and.to((function(_this) {
    return function(loading) {
      if (loading) {
        return _this.state.noResults = false;
      } else {
        return _this.state.noResults = !_this.visibleRows.length;
      }
    };
  })(this));
  SimplyBind('error').of(this.state).to('textContent.errorMessage').of(this.els.errorMessage).and.to('className.isVisible').of(this.els.errorMessage).transform(function(hasError) {
    if (hasError) {
      return 'is_visible';
    } else {
      return '';
    }
  }).and.to('className.hasError').of(this.els.tableOuterwrap).transform(function(hasError) {
    if (hasError) {
      return '_error';
    } else {
      return '';
    }
  }).and.to(function(err) {
    if (err) {
      return console.error(err);
    }
  });
  if (this.options.hasMobile) {
    this.windowWidth = window.innerWidth;
    SimplyBind('event:resize').of(window).to((function(_this) {
      return function() {
        return _this.windowWidth = window.innerWidth;
      };
    })(this));
    SimplyBind('windowWidth').of(this).to('className.mobileVersion').of(this.els.tableOuterwrap).transform((function(_this) {
      return function(windowWidth) {
        if (windowWidth <= _this.options.mobileWidth) {
          return '_mobileVersion';
        } else {
          return '';
        }
      };
    })(this));
  }
  ref = this.options.columns;
  fn = (function(_this) {
    return function(column) {
      return SimplyBind('hidden').of(column).to("innerHTML." + column.slug).of(_this.els.globalStyles).transform(function(isHidden) {
        if (isHidden) {
          return _this.tableID + " .__" + column.slug + " {display:none}";
        } else {
          return '';
        }
      });
    };
  })(this);
  for (l in ref) {
    column = ref[l];
    fn(column);
  }
  SimplyBind('array:visibleRows').of(this).to((function(_this) {
    return function(rows, prevRows) {
      var err, i, j, len, len1, row;
      if (prevRows != null ? prevRows.length : void 0) {
        for (i = 0, len = prevRows.length; i < len; i++) {
          row = prevRows[i];
          row.visible = false;
        }
      }
      try {
        for (j = 0, len1 = rows.length; j < len1; j++) {
          row = rows[j];
          _this.processRow(row);
          row.visible = true;
        }
      } catch (error) {
        err = error;
        _this.state.error = err;
      }
      return _this.state.noResults = !rows.length;
    };
  })(this)).and.to((function(_this) {
    return function(rows) {
      var i, largestBreakdownTotal, len, row;
      if (!_this.hasBreakdownBar) {
        return;
      }
      for (i = 0, len = rows.length; i < len; i++) {
        row = rows[i];
        if (row.breakdownBarTotal > largestBreakdownTotal || (typeof largestBreakdownTotal === "undefined" || largestBreakdownTotal === null)) {
          largestBreakdownTotal = row.breakdownBarTotal;
        }
      }
      return _this.largestBreakdownTotal = largestBreakdownTotal || 0;
    };
  })(this)).and.to('textContent.rowRange').of(this.els.pageStatus).transform((function(_this) {
    return function(rows) {
      return (_this.availableRows.indexOf(rows[0]) + 1) + "-" + (_this.availableRows.indexOf(rows.slice(-1)[0]) + 1);
    };
  })(this));
  SimplyBind('array:allRows').of(this).to((function(_this) {
    return function(rows) {
      _this.searchCriteria = '';
      _this.currentPage = 1;
      _this.state.noResults = !rows.length;
      if (_this.sortBy === _this.options.sortBy) {
        _this.sortBy = '';
        return _this.sortBy = _this.options.sortBy;
      } else {
        return _this.sortBy = '';
      }
    };
  })(this));
  SimplyBind('availableRows', {
    updateOnBind: false,
    updateEvenIfSame: true
  }).of(this).to((function(_this) {
    return function(rows) {
      return _this.calcPageCount(rows);
    };
  })(this)).and.to('textContent.totalRows').of(this.els.pageStatus).transform(function(rows) {
    return rows.length;
  });
  SimplyBind('pageCount').of(this).to('innerHTML').of(this.els.paginationItems).transform((function(_this) {
    return function(count) {
      var i, paginationItems, ref1, value;
      paginationItems = '';
      for (value = i = 1, ref1 = count; 1 <= ref1 ? i <= ref1 : i >= ref1; value = 1 <= ref1 ? ++i : --i) {
        if (value !== 0) {
          paginationItems += markup.paginationItem(_this.markupArgs({
            value: value
          }));
        }
      }
      return paginationItems;
    };
  })(this)).and.to('className.isVisible').of(this.els.pagination).transform(function(count) {
    if (count > 1) {
      return 'is_visible';
    } else {
      return '';
    }
  });
  SimplyBind('pageCountReal').of(this).to('innerHTML').of(this.els.paginationExtraSelect).transform((function(_this) {
    return function(realCount) {
      var i, index, options, ref1, ref2;
      if (realCount <= _this.options.pageCountMax) {
        return '';
      } else {
        options = '<option>...</option>';
        for (index = i = ref1 = _this.options.pageCountMax + 1, ref2 = realCount; ref1 <= ref2 ? i <= ref2 : i >= ref2; index = ref1 <= ref2 ? ++i : --i) {
          options += "<option>" + index + "</option>";
        }
        return options;
      }
    };
  })(this)).and.to('className.hasExtra').of(this.els.pagination).transform((function(_this) {
    return function(realCount) {
      if (realCount > _this.options.pageCountMax) {
        return 'has_extra';
      } else {
        return '';
      }
    };
  })(this));
  SimplyBind('value', {
    updateOnBind: false
  }).of(this.els.paginationExtraSelect).to('innerHTML').of(this.els.paginationExtraText).and.to('currentPage').of(this);
  SimplyBind('currentPage', {
    updateEvenIfSame: true
  }).of(this).transformSelf((function(_this) {
    return function(currentPage) {
      currentPage = currentPage === '...' ? 1 : parseFloat(currentPage);
      if (currentPage > _this.pageCountReal) {
        return _this.pageCountReal;
      } else {
        return currentPage;
      }
    };
  })(this)).to('value').of(this.els.paginationExtraSelect).transform((function(_this) {
    return function(currentPage) {
      if (currentPage > _this.options.pageCountMax) {
        return currentPage;
      } else {
        return '...';
      }
    };
  })(this)).and.to((function(_this) {
    return function(currentPage) {
      _this.setVisiblePage(currentPage);
      return _this.setPageIndicator(currentPage);
    };
  })(this));
  if (this.options.search.length) {
    this.searchParam = this.options.search[0];
    SimplyBind('search').of(this.options).to('innerHTML').of(this.els.searchParam).transform(function(options) {
      return options.map(function(option) {
        return "<option>" + option + "</option>";
      }).join('');
    });
    SimplyBind('value').of(this.els.searchParam).to('searchParam').of(this).pipe('attr:placeholder').of(this.els.searchCriteria).transform(function(option) {
      return "Search by " + option;
    });
  }
  SimplyBind('value').of(this.els.searchCriteria).to('searchCriteria', {
    updateEvenIfSame: true
  }).of(this).bothWays().chainTo((function(_this) {
    return function(searchCriteria) {
      var ref1, rowsToMakeAvailable, targetColumn;
      rowsToMakeAvailable = _this.allRows;
      targetColumn = _this.options.columns[_this.searchParam];
      if (searchCriteria && (targetColumn || (((ref1 = _this.allRows[0]) != null ? ref1[_this.searchParam] : void 0) != null))) {
        rowsToMakeAvailable = rowsToMakeAvailable.filter(function(row) {
          var rowValue;
          rowValue = (targetColumn != null ? targetColumn.rawValueFormatter : void 0) ? targetColumn.rawValueFormatter(row[_this.searchParam]) : row[_this.searchParam];
          return rowValue != null ? rowValue.toString().toLowerCase().includes(searchCriteria.toLowerCase()) : void 0;
        });
      }
      if (_this.options.rowFilter) {
        rowsToMakeAvailable = rowsToMakeAvailable.filter(function(row) {
          var name, ref2, rowClone;
          rowClone = $.extend({}, row);
          ref2 = _this.options.columns;
          for (name in ref2) {
            column = ref2[name];
            if (column.rawValueFormatter) {
              rowClone[name] = column.rawValueFormatter(rowClone[name]);
            }
          }
          return _this.options.rowFilter(rowClone);
        });
      }
      _this.availableRows = rowsToMakeAvailable;
      return _this.currentPage = 1;
    };
  })(this));
  SimplyBind('sortBy', {
    updateEvenIfSame: true,
    updateOnBind: false
  }, true).of(this).to((function(_this) {
    return function(currentSort, prevSort) {
      var targetColumn;
      if (currentSort || prevSort) {
        if (currentSort === prevSort && prevSort) {
          _this.sortDirection *= -1;
        } else {
          _this.sortDirection = -1;
        }
        targetColumn = currentSort ? currentSort : null;
        _this.availableRows = _this.sortRows(_this.availableRows, targetColumn);
        return _this.currentPage = 1;
      }
    };
  })(this));
  if (this.els.tableHeading.children('._isSortable').length) {
    SimplyBind('sortBy', {
      updateOnBind: true
    }).of(this).to('multi:className.currentSort').of(this.els.tableHeading.children('._isSortable')).transform(function(current, prev, el) {
      if (current === el.children[0].textContent) {
        return '_currentSort';
      } else {
        return '';
      }
    });
  }
  SimplyBind('sortDirection').of(this).to('className.sortDirection').of(this.els.table).transform(function(sortDirection) {
    if (sortDirection === -1) {
      return 'desc';
    } else {
      return 'asc';
    }
  });
  return Promise.resolve();
};

;

DataTable.prototype.sortBy = function(column) {};

;

currentID = 0;

DataTable.version = "2.9.0";

DataTable.helpers = helpers;

DataTable.markup = markup;

DataTable.defaults = defaults;

module.exports = DataTable;

;
return module.exports;
},
2: function (require, module, exports) {
'use strict';

var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) {/**/}

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

module.exports = function extend() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0],
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	} else if ((typeof target !== 'object' && typeof target !== 'function') || target == null) {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = target[name];
				copy = options[name];

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[name] = extend(deep, clone, copy);

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						target[name] = copy;
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};

;
return module.exports;
}
}, this);
if (typeof define === 'function' && define.umd) {
define(function () {
return require(0);
});
} else if (typeof module === 'object' && module.exports) {
module.exports = require(0);
} else {
return this['DataTable'] = require(0);
}
}).call(this, null);
