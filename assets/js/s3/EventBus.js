


//TODO Add Application objects to event bus. Events are distributed to all applications.




class EventBus {
  #objects = {};
  #callback;
  constructor() {
    this._bus = document.createElement('div');
    this.#callback = (callback) => {


      
    }

  }

  addEventObject(obj) {
    this.#objects[obj.id] = obj;
  }

  removeEventObject(obj) {
    delete this.#objects[obj.id];
  }


  addEventListener(event, callback) {
    this._bus.addEventListener(event, callback);
  }

  removeEventListener(event, callback) {
    this._bus.removeEventListener(event, callback);
  }

  dispatchEvent(event, detail = {}) {

    this._bus.dispatchEvent(new CustomEvent(event, { detail }));
  }
}
var bus = new EventBus();
export default bus;