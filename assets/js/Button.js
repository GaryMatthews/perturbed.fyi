import { jsx as _jsx } from "./core/jsx-runtime";
const Button = ({
  children,
  onClick
}) => _jsx("button", {
  onClick: onClick,
  children: children
});
export default Button;