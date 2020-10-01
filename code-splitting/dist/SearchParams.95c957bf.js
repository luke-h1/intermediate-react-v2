// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"useDropdown.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useDropdown = (label, defaultState, options) => {
  const [state, updateState] = (0, _react.useState)(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;

  const Dropdown = () => _react.default.createElement("label", {
    htmlFor: id
  }, label, _react.default.createElement("select", {
    id: id,
    value: state,
    onChange: e => updateState(e.target.value),
    onBlur: e => updateState(e.target.value),
    disabled: !options.length
  }, _react.default.createElement("option", null), options.map(item => _react.default.createElement("option", {
    key: item,
    value: item
  }, item))));

  return [state, Dropdown, updateState];
};

var _default = useDropdown;
exports.default = _default;
},{"react":"../node_modules/react/index.js"}],"Pet.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _router = require("@reach/router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Pet = props => {
  const {
    name,
    animal,
    breed,
    media,
    location,
    id
  } = props;
  let hero = "http://placecorgi.com/300/300";

  if (media.length) {
    hero = media[0].small;
  }

  return _react.default.createElement(_router.Link, {
    to: `/details/${id}`,
    className: "pet"
  }, _react.default.createElement("div", {
    className: "image-container"
  }, _react.default.createElement("img", {
    src: hero,
    alt: name
  })), _react.default.createElement("div", {
    className: "info"
  }, _react.default.createElement("h1", null, name), _react.default.createElement("h2", null, `${animal} — ${breed} — ${location}`)));
};

var _default = Pet;
exports.default = _default;
},{"react":"../node_modules/react/index.js","@reach/router":"../node_modules/@reach/router/es/index.js"}],"Results.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Pet = _interopRequireDefault(require("./Pet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Results = ({
  pets
}) => {
  return _react.default.createElement("div", {
    className: "search"
  }, !pets.length ? _react.default.createElement("h1", null, "No Pets Found") : pets.map(pet => {
    return _react.default.createElement(_Pet.default, {
      animal: pet.type,
      key: pet.id,
      name: pet.name,
      breed: pet.breeds.primary,
      media: pet.photos,
      location: `${pet.contact.address.city}, ${pet.contact.address.state}`,
      id: pet.id
    });
  }));
};

var _default = Results;
exports.default = _default;
},{"react":"../node_modules/react/index.js","./Pet":"Pet.js"}],"SearchParams.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _pet = _interopRequireWildcard(require("@frontendmasters/pet"));

var _useDropdown = _interopRequireDefault(require("./useDropdown"));

var _Results = _interopRequireDefault(require("./Results"));

var _ThemeContext = _interopRequireDefault(require("./ThemeContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const SearchParams = () => {
  const [theme, setTheme] = (0, _react.useContext)(_ThemeContext.default);
  const [location, updateLocation] = (0, _react.useState)("Seattle, WA");
  const [breeds, updateBreeds] = (0, _react.useState)([]);
  const [pets, setPets] = (0, _react.useState)([]);
  const [animal, AnimalDropdown] = (0, _useDropdown.default)("Animal", "dog", _pet.ANIMALS);
  const [breed, BreedDropdown, updateBreed] = (0, _useDropdown.default)("Breed", "", breeds);

  async function requestPets() {
    const {
      animals
    } = await _pet.default.animals({
      location,
      breed,
      type: animal
    });
    console.log("animals", animals);
    setPets(animals || []);
  }

  (0, _react.useEffect)(() => {
    updateBreeds([]);
    updateBreed("");

    _pet.default.breeds(animal).then(({
      breeds
    }) => {
      const breedStrings = breeds.map(({
        name
      }) => name);
      updateBreeds(breedStrings);
    }, console.error);
  }, [animal]);
  return _react.default.createElement("div", {
    className: "search-params"
  }, _react.default.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      requestPets();
    }
  }, _react.default.createElement("label", {
    htmlFor: "location"
  }, "Location", _react.default.createElement("input", {
    id: "location",
    value: location,
    placeholder: "Location",
    onChange: e => updateLocation(e.target.value)
  })), _react.default.createElement(AnimalDropdown, null), _react.default.createElement(BreedDropdown, null), _react.default.createElement("label", {
    htmlFor: "location"
  }, "Theme", _react.default.createElement("select", {
    value: theme,
    onChange: e => setTheme(e.target.value),
    onBlur: e => setTheme(e.target.value)
  }, _react.default.createElement("option", {
    value: "peru"
  }, "Peru"), _react.default.createElement("option", {
    value: "darkblue"
  }, "Dark Blue"), _react.default.createElement("option", {
    value: "chartreuse"
  }, "Chartreuse"), _react.default.createElement("option", {
    value: "mediumorchid"
  }, "Medium Orchid"))), _react.default.createElement("button", {
    style: {
      backgroundColor: theme
    }
  }, "Submit")), _react.default.createElement(_Results.default, {
    pets: pets
  }));
};

var _default = SearchParams;
exports.default = _default;
},{"react":"../node_modules/react/index.js","@frontendmasters/pet":"../node_modules/@frontendmasters/pet/index.js","./useDropdown":"useDropdown.js","./Results":"Results.js","./ThemeContext":"ThemeContext.js"}],"../node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54606" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/SearchParams.95c957bf.js.map