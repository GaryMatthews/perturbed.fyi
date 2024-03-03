/**
 * User Interface Component 
 **/

const S = Symbol;
const LIFECYCLE_CREATE = S();
const LIFECYCLE_RENDER = S();


// const m1 = esm`export function f() { return 'Hello!' }`;
// const m2 = esm`import {f} from '${m1}'; export default f()+f();`;
// import(m2)
//   .then(ns => assert.equal(ns.default, 'Hello!Hello!'));
function esm(templateStrings, ...substitutions) {
  let js = templateStrings.raw[0];
  for (let i = 0; i < substitutions.length; i++) {
    js += substitutions[i] + templateStrings.raw[i + 1];
  }
  return 'data:text/javascript;base64,' + btoa(js);
}





// const js = `export default 'Returned value'`;
// const dataUri = 'data:text/javascript;charset=utf-8,' + encodeURIComponent(js);
// import(dataUri).then((namespaceObject) => {
//     assert.equal(namespaceObject.default, 'Returned value');
// });


function registerElement(name, symbol) {
  let elTagName = 's3' - name.toLowerCase();

  if (customElements.get(elTagName)) return;


  customElements.define(elTagName, symbol || class extends HTMLElement {
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


function getObservables(context) {

}



// ux-element UXElement
class S3Component extends HTMLElement {

  #storage;
  #styleSheet;
  #options = {};
  #settings = {};
  #observable = [];
  #shadowRoot;


  #template;  // A template for rendering the custom element.
  #container; // The html container for s3 component

  constructor(options) {
    super();



    this.#observable = [];

    this.#options = options || {};
    this.#data = options.data || {};

    // Create an component shadow root.
    this.#shadowRoot = this.attachShadow({ mode: 'open' });

    if (options.container && options.container.startsWith("#")) {
      this.#container = document.getElementById(options.container)
    }
    else {
      this.#container = document.createElement('div');
    }






    // Specify a template #<id> otherwise use options.template text to create a new template.

    let template;

    // if (options.template) {

    //   if (options.template.startsWith("#")) {
    //     template = document.getElementById(options.template);
    //     if (!template) {
    //       template = document.createElement('template');
    //     }
    //     {
    //       this.#template = template;
    //     }
    //     else {
    //     }
    //   }
    //   else {
    //     this.#template = template;
    //     this.#shadowRoot.appendChild(this.#template.cloneNode(true));
    //   }
    // }
    // else {
    //   this.#template = document.createElement('template');
    //   this.#template.textContent = options.template;
    //   this.#shadowRoot.appendChild(this.#template);
    // }








    // // Specify a style #<id> otherwise use options.style text to create a new style.
    // if (options.style && options.style.startsWith("#")) {
    //   this.#style = document.getElementById(options.style)
    //   this.#shadowRoot.appendChild(this.#style);
    // }
    // else if (options.style) {
    //   this.#style = document.createElement('style');
    //   this.#style.textContent = options.style;
    //   this.#shadowRoot.appendChild(this.#style);
    // }
    // else {
    //   this.#style = document.createElement('style');
    //   this.#shadowRoot.appendChild(this.#style);
    // }


    // // Specify a style #<id> otherwise use options.style text to create a new style.
    // if (options.style && options.style.startsWith("#")) {
    //   this.#style = document.getElementById(options.style)
    //   this.#shadowRoot.appendChild(this.#style);
    // }
    // else if (options.style) {
    //   this.#style = document.createElement('style');
    //   this.#style.textContent = options.style;
    //   this.#shadowRoot.appendChild(this.#style);
    // }
    // else {
    //   this.#style = document.createElement('style');
    //   this.#shadowRoot.appendChild(this.#style);
    // }












    // this.#style = document.createElement('style');
    // this.#template = document.createElement('template');


    //       const shadowRoot = this.attachShadow({ mode: 'open' })
    //         .appendChild(template.cloneNode(true));
    //     }




















    // if (options.style) {
    //   this.#style.textContent = `
    //     div {
    //       width: ${elem.getAttribute('l')}px;
    //       height: ${elem.getAttribute('l')}px;
    //       background-color: ${elem.getAttribute('c')};
    //     }
    //   `;
    // }
    // if (options.style) { }





    //shadow.querySelector('style').textContent ='div {color: blue;}'
    //template.innerHTML = script;
    //document.body.appendChild(template);





    // Attach elements to shadow root.
    if (this.#style) this.#shadowRoot.appendChild(this.#style);
    if (this.#template) this.#shadowRoot.appendChild(this.#template);
    if (this.#container) this.#shadowRoot.appendChild(this.#container);
  }


  

  // Specify observed attributes so that attributeChangedCallback will work
  static get observedAttributes() {
    return ['template', 'style', 'data'];   // Components based on this class provide their own attributes as necessary.
  }


  connectedCallback() {
    console.log('Custom square element added to page.');
    updateStyle(this);
  }

  disconnectedCallback() {
    console.log('Custom square element removed from page.');
  }

  adoptedCallback() {
    console.log('Custom square element moved to new page.');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('Component attributes changed.');
    updateStyle(this);
  }

  render() {
    this.innerHTML = `<p>The filter is: ${this.getAttribute("filter")} </p>`;
  }


}

// Blank Canvas so to speak.
customElements.define('ux-component', S3Component);

export { S3Component };
export default S3Component;






const parser = new DOMParser();

const xmlString = "<warning>Beware of the tiger</warning>";
const doc1 = parser.parseFromString(xmlString, "application/xml");
// XMLDocument

const svgString = "<circle cx=\"50\" cy=\"50\" r=\"50\"/>";
const doc2 = parser.parseFromString(svgString, "image/svg+xml");
// XMLDocument

const htmlString = "<strong>Beware of the leopard</strong>";
const doc3 = parser.parseFromString(htmlString, "text/html");
// HTMLDocument

console.log(doc1.documentElement.textContent)
// "Beware of the tiger"

console.log(doc2.firstChild.tagName);
// "circle"

console.log(doc3.body.firstChild.textContent);
// "Beware of the leopard"


const doc = parser.parseFromString(xmlString, "application/xml");
const errorNode = doc.querySelector('parsererror');
if (errorNode) {
  // parsing failed
} else {
  // parsing succeeded
}
