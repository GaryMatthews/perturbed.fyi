import S3Component from "./Component.js";
import S3Application from "./Application.js";



// Pipe Returns a function that passes an object through the list of provided functions "...fns".
// The provided list of functions should accept an object perform some task on it and return it for the next function.
function pipe(...fns) {
	return param => fns.reduce((result, fn) => fn(result), param)
}


function validate({ id, firstName, lastName, email = requiredParam(), username = requiredParam(), pass = requiredParam(), address, ...rest }) {
	// do some validation
	return { id, firstName, lastName, email, username, pass, address, ...rest }
}

function normalize({ email, username, ...rest }) {
	// do some normalizing  
	return { email, username, ...rest }
}

async function persist({ upsert = true, ...info }) {
	// save userInfo to the DB and return a result object
	return { operation, status, saved: info }
}


// Save user Info
function saveUser(userInfo) {
	// Use pipe to process userInfo. userInfo = validate(userInfo); userInfo = normalize(userInfo); userInfo = persist(userInfo).
	return pipe(validate, normalize, persist)(userInfo)
}


















// function addTemplate(script) {
//   const template = document.createElement('template');
//   template.innerHTML = script;
//   document.body.appendChild(template);
// }





// customElements.define('element-details',
//   class extends HTMLElement {
//     constructor() {
//       super();
//       const template = document.getElementById('element-details-template').content;
//       const shadowRoot = this.attachShadow({ mode: 'open' })
//         .appendChild(template.cloneNode(true));
//     }
//   });













// function argv(argv) {
//   var args = [];
//   for (let i = 0, c = argv.length; i < c; i++) args.push(argv[i]);
//   return args;
// }

// function hasOwnProp(target, source) { return Object.prototype.hasOwnProperty.call(target, source); }

// function map(list, callback) {
//   let result = [], index = 0;
//   for (index = 0; index < list.length; index++) result.push(callback(list[index], index));
//   return result;
// }

// function extend(target, source) {
//   for (var item in source) if (hasOwnProp(source, item)) target[item] = source[item];
//   if (hasOwnProp(source, 'toString')) target.toString = source.toString;
//   if (hasOwnProp(source, 'valueOf')) target.valueOf = source.valueOf;
//   return target;
// }

// // Single element wrapper.
// function ElementSelected(element) {
//   this.element = element;
//   extend(this, ElementSelector.fn);
// }

// // Multiple element wrapper. TODO: fix this.
// function ElementsSelected(elements) {
//   for (const key in elements) {
//     let element = elements[key];
//     for (const item in element) this[item] = element[item];
//   }
//   function wrapper(fn) {
//     if (elements.length > 1) return function () { for (const key in elements) fn.apply(elements[key], arguments); return this; };
//     return function () { return fn.apply(elements[0], arguments); };
//   }
//   for (const key in ElementSelector.fn) this[key] = wrapper(ElementSelector.fn[key])
// }



// function ElementSelector(options) {
//   if (ElementSelector.instance instanceof ElementSelector) return ElementSelector.instance;
//   if (!(this instanceof ElementSelector)) return new ElementSelector(options);
//   ElementSelector.instance = this;
//   if (options) {
//     for (const key in options) {
//       if (options.hasOwnProperty(key)) {
//         const option = options[key];
//         switch (key) {
//           case 'plugins':
//             ElementSelector.plugins = option;
//             break;
//           case 'settings':
//             ElementSelector.settings = option;
//             break;
//           default:
//             ElementSelector.global[key] = option;
//         }
//       }
//     }
//   }
// }

// ElementSelector.instance = null;	// Only one instance at a time.
// ElementSelector.settings = {};		// Plugin Configuration settings. { 'plugin1': { 'key1': 'val1' }, 'plugin2': {}}	
// ElementSelector.plugins = {};			// Loaded Plugins 
// ElementSelector.global = {};			// Global variables shared between all plugins.
// ElementSelector.fn = {};					// Methods to provide on selected elements.

// ElementSelector.install = function (plugin) {
//   if (plugin) {
//     if (plugin.name) {
//       ElementSelector.plugins[plugin.name] = plugin;
//       if (plugin.settings) ElementSelector.settings[plugin.name] = plugin.settings;
//     }
//     for (let method in plugin.methods) ElementSelector.fn[method] = plugin.methods[method];
//     if (plugin.init) plugin.init.call(this, QuerySelect);
//   }
// };

// ElementSelector.get = function (key) { return localStorage.getItem(key); };
// ElementSelector.set = function (key, value) {
//   localStorage.setItem(key, value);
//   return localStorage.getItem(key, value);
// };

// ElementSelector.prototype.select = function (query) {
//   let sel = document.querySelectorAll(query);
//   return new ElementsSelected(map(sel, function (el, index) { return new ElementSelected(el); }));
// };

// function QuerySelect() {
//   let result = [], element, elements, index = 0, args = argv(arguments);
//   if (args.length > 0) {
//     for (index = 0; index < args.length; index++) {
//       switch (typeof args[index]) {
//         case 'string':	// Query Selector
//           elements = document.querySelectorAll(args[index])
//           for (element = 0; element < elements.length; element++) result.push(elements[element]);
//           break;
//         case 'function':	// Initializer
//           initList.push(args[index]);
//           break;
//         case 'object':   // Plugin
//           ElementSelector.install(args[index]);
//           break;
//         default:
//           throw new Error("Invalid Argument!");
//           break;
//       }
//     }
//     return new ElementsSelected(map(result, function (el, index) { return new ElementSelected(el); }));
//   }
// }

// QuerySelect.select = new ElementSelector({});
// for (const key in ElementSelector) QuerySelect[key] = ElementSelector[key];
// if (typeof window.$$ === 'undefined') window.$$ = QuerySelect;





export { S3Component, S3Application }

export default { S3Application, S3Component };