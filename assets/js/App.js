import Button from './Button';
import { jsx as _jsx } from "./core/jsx-runtime";
import { jsxs as _jsxs } from "./core/jsx-runtime";
const App = () => _jsxs("div", {
  class: "app",
  children: [_jsx(Button, {
    onClick: () => alert(1),
    children: "Click 11"
  }), _jsx(Button, {
    onClick: () => alert(2),
    children: "Click 12"
  }), _jsx(Button, {
    onClick: () => alert(3),
    children: "Click 13"
  })]
});
const rootElement = document.getElementById('root');
rootElement.appendChild(_jsx(App, {}));
export default App;