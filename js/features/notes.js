import { h } from "../core/virtualDom.js";

export const Notes = (state) => {
  return h("div", {},

    h("h2", {}, "Notes"),

    h("button", { id: "addNote" }, "Add Note"),

    h("ul", {},
      ...state.notes.map(note =>
        h("li", {}, note)
      )
    )
  );
};
