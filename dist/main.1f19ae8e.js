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
})({"main.js":[function(require,module,exports) {
var string = "\n  .skin * {box-sizing: border-box; margin: 0; padding: 0;}\n  .skin *::after, .skin *::before {box-sizing: border-box;}\n  .skin {\n    background: #ffe600;\n    min-height: 50vh;\n    position: relative;\n  }\n  .eye {\n    border: 3px solid black;\n    background: #2e2e2e;\n    width: 64px;\n    height: 64px;\n    position: absolute;\n    left: 50%;\n    margin-left: -32px;\n    top: 70px;\n    border-radius: 50%;\n  }\n  .eye::before{\n    content: '';\n    display: block;\n    border: 2px solid black;\n    background: white;\n    width: 32px;\n    height: 32px;\n    border-radius: 50%;\n    margin-left: 5px;\n  }\n  .eye.left {\n    transform: translateX(-100px);\n    z-index: 1;\n  }\n  .eye.left:hover {\n    display: none;\n  }\n  .leftWink::after {\n    content: '>';\n    width: 80px;\n    height: 80px;\n    font-size: 80px;\n    position: absolute;\n    top: 50px;\n    left: 50%;\n    transform: translateX(-130px);\n  }\n  .eye.right {\n    transform: translateX(100px);\n    z-index: 1;\n\n  }\n  .eye.right:hover {\n    display: none;\n  }\n  .rightWink::after {\n    content: '<';\n    width: 80px;\n    height: 80px;\n    font-size: 80px;\n    position: absolute;\n    top: 50px;\n    left: 50%;\n    transform: translateX(70px);\n  }\n  .nose {\n    position: absolute;\n    left: 50%;\n    margin-left: -18px;\n    top: 120px;\n    border: 18px solid black;\n    border-color: black transparent transparent;\n    width: 0px;\n    height: 0px;\n    border-radius: 40% 40% 0 0;\n    z-index: 5;\n  }\n  @keyframes noseMove {\n    0% { transform: rotate(0deg); }\n    33% { transform: rotate(15deg); }\n    66% { transform: rotate(-15deg); }\n    100% { transform: rotate(0deg); }\n  }\n  .nose:hover {\n    animation: noseMove 1s infinite linear;\n  }\n  .face {\n    border: 2px solid black;\n    background: #ff0000;\n    position: absolute;\n    top: 185px;\n    left: 50%;\n    margin-left: -45px;\n    width: 90px;\n    height: 90px;\n    border-radius: 50%;\n  }\n  .face.left {\n    transform: translateX(-180px);\n  }\n  .face.right {\n    transform: translateX(180px);\n  }\n  .mouth {\n    position: absolute;\n    top: 160px;\n    left: 50%;\n    margin-left: -100px;\n    width: 200px;\n    height: 200px;\n    overflow: hidden;\n  }\n  .mouth .up .left {\n    position: absolute;\n    border: 3px solid black;\n    background: #ffe600;\n    top: -6px;\n    width: 100px;\n    height: 25px;\n    /* border-radius: 0 0 0 50%; */\n    border-bottom-left-radius: 50px 25px;\n    border-color: transparent transparent black black;\n    transform: rotate(-20deg);\n    z-index: 1;\n  }\n  .mouth .up .right {\n    position: absolute;\n    border: 3px solid black;\n    background: #ffe600;\n    top: -6px;\n    left: 100px;\n    width: 100px;\n    height: 25px;\n    border-bottom-right-radius: 50px 25px;\n    border-color: transparent black black transparent;\n    transform: rotate(20deg);\n    z-index: 1;\n  }\n  .mouth .down {\n    border: 2px solid black;\n    background: #9b000a;\n    width: 140px;\n    height: 550px;\n    position: absolute;\n    top: -370px;\n    left: 28px;\n    border-radius: 50%;\n    overflow: hidden;\n  }\n  .mouth .down .tongue {\n    background: #ff485f;\n    width: 150px;\n    height: 150px;\n    position: absolute;\n    top: 400px;\n    left: 50%;\n    margin-left: -75px;\n    border-radius: 50%;\n  }\n";
var n = 1;
var speed = 100;
demo.innerText = string.substring(0, n);
demo2.innerHTML = string.substring(0, n);

var pause = function pause() {
  window.clearInterval(id);
};

var run = function run() {
  n += 1;

  if (n > string.length) {
    pause();
    return;
  }

  demo.innerText = string.substring(0, n);
  demo2.innerHTML = string.substring(0, n);
  demo.scrollTop = demo.scrollHeight;
};

var play = function play() {
  return setInterval(run, speed);
};

var id = play();

btnPause.onclick = function () {
  pause();
};

btnPlay.onclick = function () {
  id = play();
};

btnSlow.onclick = function () {
  pause();
  speed = 200;
  id = play();
};

btnNormal.onclick = function () {
  pause();
  speed = 100;
  id = play();
};

btnFast.onclick = function () {
  pause();
  speed = 0;
  id = play();
};
},{}],"../../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52804" + '/');

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
      } else {
        window.location.reload();
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
},{}]},{},["../../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map