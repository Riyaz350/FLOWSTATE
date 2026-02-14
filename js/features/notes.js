export const Notes = (state) => {
  return `
    <div>
      <h2>Notes</h2>
      <button id="addNote">Add Note</button>
      <ul>
        ${state.notes.map(note => `<li>${note}</li>`).join("")}
      </ul>
    </div>
  `;
};
