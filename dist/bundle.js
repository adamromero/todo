/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_modules_eventController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js-modules/eventController */ \"./src/js-modules/eventController.js\");\n/*\r\ntitle, description, dueDate, priority, notes, checklist\r\n*/\n\n\n_js_modules_eventController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js-modules/eventController.js":
/*!*******************************************!*\
  !*** ./src/js-modules/eventController.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/js-modules/project.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ \"./src/js-modules/list.js\");\n/* harmony import */ var _viewController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewController */ \"./src/js-modules/viewController.js\");\n\n\n\n\nvar eventController = function () {\n  var projectCollection = [];\n  var addProject = document.getElementById('addProject');\n  var addList = document.getElementById('addList');\n  var modal = document.getElementById('modal');\n\n  var init = function init() {\n    if (typeof retrieveProjectsFromStorage() !== \"undefined\" && retrieveProjectsFromStorage() !== null) {\n      projectCollection = JSON.parse(retrieveProjectsFromStorage());\n      _viewController__WEBPACK_IMPORTED_MODULE_2__[\"default\"].renderSavedProjects(projectCollection);\n    }\n\n    addProject.addEventListener('click', function () {\n      createProject();\n    });\n    document.addEventListener('click', function (e) {\n      if (e.target.getAttribute('data-action') == 'expand') {\n        openProject();\n      }\n    });\n    document.addEventListener('click', function (e) {\n      if (e.target.id == 'modalClose') {\n        closeProject();\n      }\n    });\n    addList.addEventListener('click', function () {\n      createList();\n    });\n  };\n\n  var setProjectsToStorage = function setProjectsToStorage() {\n    sessionStorage.setItem('projectCollection', JSON.stringify(projectCollection));\n  };\n\n  var retrieveProjectsFromStorage = function retrieveProjectsFromStorage() {\n    return sessionStorage.getItem('projectCollection');\n  };\n\n  var createProject = function createProject() {\n    var projectName = document.getElementById('projectName').value;\n    projectName = projectName !== '' ? projectName : 'Untitled Project';\n    var project = _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create(projectName);\n    projectCollection.push(project);\n    _viewController__WEBPACK_IMPORTED_MODULE_2__[\"default\"].renderProject(project);\n    setProjectsToStorage();\n  };\n\n  var openProject = function openProject() {\n    modal.classList.add('display');\n  };\n\n  var closeProject = function closeProject() {\n    modal.classList.remove('display');\n  };\n\n  var createList = function createList() {};\n\n  return {\n    init: init\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (eventController);\n\n//# sourceURL=webpack:///./src/js-modules/eventController.js?");

/***/ }),

/***/ "./src/js-modules/list.js":
/*!********************************!*\
  !*** ./src/js-modules/list.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar List = function () {\n  var create = function create(title, importance) {\n    //const id = Storage.getId('project') || Helper.random(1, 100000)\n    var id = 1;\n    var isImportant = importance;\n    var isCompleted = false;\n    return {\n      id: id,\n      title: title,\n      isImportant: isImportant,\n      isCompleted: isCompleted\n    };\n  };\n\n  return {\n    create: create\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (List);\n\n//# sourceURL=webpack:///./src/js-modules/list.js?");

/***/ }),

/***/ "./src/js-modules/project.js":
/*!***********************************!*\
  !*** ./src/js-modules/project.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ \"./src/js-modules/list.js\");\n\n\nvar incr = function () {\n  var i = 1;\n  return function () {\n    return i++;\n  };\n}();\n\nvar Project = function () {\n  var listCollection = [];\n\n  var create = function create(name) {\n    var id = incr();\n    var todos = {};\n    return {\n      id: id,\n      name: name,\n      todos: todos\n    };\n  };\n\n  var createList = function createList(title, importance) {\n    listCollection.push(_list__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create(title, importance));\n  };\n\n  var getListCollection = function getListCollection() {\n    return listCollection;\n  };\n\n  return {\n    create: create,\n    createList: createList\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\n//# sourceURL=webpack:///./src/js-modules/project.js?");

/***/ }),

/***/ "./src/js-modules/viewController.js":
/*!******************************************!*\
  !*** ./src/js-modules/viewController.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar viewController = function () {\n  var projectList = document.querySelector('.project-list');\n  var modal = document.getElementById('modal');\n  var modalContent = document.getElementById('modalContent');\n\n  var renderProject = function renderProject(project) {\n    projectList.innerHTML += \"<div class='row project-list__item' data-id=\\\"\".concat(project.id, \"\\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class='project-list__heading'>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"button button--secondary open-project\\\" data-action=\\\"expand\\\">+</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<label class=\\\"label\\\">\").concat(project.name, \"</label>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class='project-list__content'>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"button button--primary\\\" data-action=\\\"add\\\">+</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<label class=\\\"label\\\">Add new List</label>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\");\n  };\n\n  var renderList = function renderList(project) {\n    modalContent.innerHTML = \"<div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\".concat(project.getListCollection(), \"\\n\\t\\t\\t\\t\\t\\t\\t</div>\");\n    modal.classList.add('display');\n  };\n\n  var renderSavedProjects = function renderSavedProjects(projects) {\n    projects.forEach(function (project) {\n      projectList.innerHTML += \"<div class='row project-list__item' data-id=\\\"\".concat(project.id, \"\\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class='project-list__heading'>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"button button--secondary open-project\\\" data-action=\\\"expand\\\">+</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<label class=\\\"label\\\">\").concat(project.name, \"</label>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class='project-list__content'>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"button button--primary\\\" data-action=\\\"add\\\">+</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<label class=\\\"label\\\">Add new List</label>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\");\n    });\n  };\n\n  return {\n    renderProject: renderProject,\n    renderList: renderList,\n    renderSavedProjects: renderSavedProjects\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (viewController);\n\n//# sourceURL=webpack:///./src/js-modules/viewController.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/main.scss?");

/***/ })

/******/ });