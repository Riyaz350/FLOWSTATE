export const h = (type, props = {}, ...children) => {
  return { type, props, children };
};


export const createElement = (vnode) => {
  if (typeof vnode === "string") {
    return document.createTextNode(vnode);
  }

  const el = document.createElement(vnode.type);

  Object.entries(vnode.props || {}).forEach(([key, value]) => {
    el.setAttribute(key, value);
  });

  vnode.children.forEach(child => {
    el.appendChild(createElement(child));
  });

  return el;
};

export const diff = (parent, newNode, oldNode, index = 0) => {

  if (!oldNode) {
    parent.appendChild(createElement(newNode));
    return;
  }

  if (!newNode) {
    parent.removeChild(parent.childNodes[index]);
    return;
  }

  if (changed(newNode, oldNode)) {
    parent.replaceChild(createElement(newNode), parent.childNodes[index]);
    return;
  }

  if (newNode.type) {
    const max = Math.max(
      newNode.children.length,
      oldNode.children.length
    );

    for (let i = 0; i < max; i++) {
      diff(
        parent.childNodes[index],
        newNode.children[i],
        oldNode.children[i],
        i
      );
    }
  }
};

const changed = (node1, node2) => {
  return (
    typeof node1 !== typeof node2 ||
    typeof node1 === "string" && node1 !== node2 ||
    node1.type !== node2.type
  );
};
