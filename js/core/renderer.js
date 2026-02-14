const render = (root, component) => {
  root.innerHTML = component();
};

export default render;
