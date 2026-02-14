const routes = {};

export const registerRoute = (path, component) => {
  routes[path] = component;
};

export const navigate = (path) => {
  window.location.hash = path;
};

export const initRouter = (renderApp) => {
  window.addEventListener("hashchange", () => {
    const path = window.location.hash.slice(1);
    renderApp(routes[path] || routes["/"]);
  });
};
