import { createElement, diff } from "./virtualDom.js";

let oldVNode = null;

const render = (root, newVNode) => {
  if (!oldVNode) {
    root.appendChild(createElement(newVNode));
  } else {
    diff(root, newVNode, oldVNode);
  }

  oldVNode = newVNode;
};

export default render;
