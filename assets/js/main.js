
import S3 from './s3/s3.js';

class uiHeader extends S3.S3Component {
	constructor(options) {
		super(options);
	}



}

function registerElement(name, cls) {
	customElements.define('s3' - name.toLowerCase() , cls || class extends HTMLElement {
		constructor() {
			super();

			const template = document.getElementById(name);
			if (template) {
				const templateContent = template.content;

				this.attachShadow({ mode: 'open' }).appendChild(
					templateContent.cloneNode(true)
				);
			}

		}
	});
}







let moo = "moo";
moo.toLowerCase


registerElement('ux-header');
registerElement('ux-footer');
registerElement('ux-aside');
registerElement('ux-view');

registerElement('ux-application');
// registerElement('my-paragraph');





// customElements.define('my-paragraph',
//   class extends HTMLElement {
//     constructor() {
//       super();

//       const template = document.getElementById('my-paragraph');
//       const templateContent = template.content;

//       this.attachShadow({ mode: 'open' }).appendChild(
//         templateContent.cloneNode(true)
//       );
//     }
//   }
// );

// const slottedSpan = document.querySelector('my-paragraph span');

// console.log(slottedSpan.assignedSlot);
// console.log(slottedSpan.slot);






function updateStyle(elem) {
	const shadow = elem.shadowRoot;
	shadow.querySelector('style').textContent = `
    div {
      width: ${elem.getAttribute('l')}px;
      height: ${elem.getAttribute('l')}px;
      background-color: ${elem.getAttribute('c')};
    }
  `;
}

const add = document.querySelector('.add');
const update = document.querySelector('.update');
const remove = document.querySelector('.remove');
let square;

update.disabled = true;
remove.disabled = true;

function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

add.onclick = function () {
	// Create a custom square element
	square = document.createElement('custom-square');
	square.setAttribute('l', '100');
	square.setAttribute('c', 'red');
	document.body.appendChild(square);

	update.disabled = false;
	remove.disabled = false;
	add.disabled = true;
};

update.onclick = function () {
	// Randomly update square's attributes
	square.setAttribute('l', random(50, 200));
	square.setAttribute('c', `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`);
};

remove.onclick = function () {
	// Remove the square
	document.body.removeChild(square);

	update.disabled = true;
	remove.disabled = true;
	add.disabled = false;
};





let isLoaded = false, initList = [];

var initOnce = function () {
	if (isLoaded) return;
	isLoaded = true;
	for (let index = 0; index < initList.length; index++) initList[index].call(ElementSelector.instance);
};

if (document.addEventListener) {
	document.addEventListener('DOMContentLoaded', initOnce, false);
	window.addEventListener('load', initOnce, false);		// Fallback
} else if (document.attachEvent) {
	document.attachEvent('onreadystatechange', function () {
		if (document.readyState === 'complete') {
			document.detachEvent('onreadystatechange', arguments.callee);
			initOnce();
		}
	})
	window.attachEvent('onload', initOnce);		// Fallback
}




