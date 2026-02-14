import createStore from "./core/stateManager.js";
import render from "./core/renderer.js";
import { Notes } from "./features/notes.js";
import { initDB, getAllNotesFromDB, addNoteToDB } from "./database/indexedDB.js";

const root = document.getElementById("app");

const store = createStore({
  notes: []
});


const App = () => {
  const state = store.getState();

  return `
    <h1>FlowState</h1>
    ${Notes(state)}
  `;
};

const bootstrap = async () => {
  await initDB();

  const savedNotes = await getAllNotesFromDB();

  store.dispatch((state) => ({
    ...state,
    notes: savedNotes.map(n => n.text)
  }));

  renderApp();
};

bootstrap();

const renderApp = () => render(root, App);

store.subscribe(renderApp);

// renderApp();

document.addEventListener("click", async (e) => {
  if (e.target.id === "addNote") {

    const newNote = "New note " + Date.now();

    await addNoteToDB(newNote);

    store.dispatch((state) => ({
      ...state,
      notes: [...state.notes, newNote]
    }));
  }
});
