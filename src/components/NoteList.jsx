import React from "react";

function NoteList(group, notes, addNote, setSelectedGroup) {
	const [text, setText] = useState("");

	const handleAddNote = () => {
		if (text) {
			addNote({
				id: Date.now(),
				groupId: group.id,
				text,
				date: new Date().toISOString(),
			});
			setText("");
		}
	};

	return (
		<>
			<div>
				<div>
					<button onClick={() => setSelectedGroup(null)}>Back</button>
					<h2>{group.name}</h2>
					<ul>
						{notes.map((note) => (
							<li>
								<p>{note.text}</p>
								<small>{new Date(note.date).toLocalString()}</small>
							</li>
						))}
					</ul>
					<input
						type="text"
						value={text}
						onChange={(e) => setText(e.target.value)}
						placeHolder="Enter your Text here..."
					/>
          <button onClick={handleAddNote} disabled={!text}>send</button>
				</div>
			</div>
		</>
	);
}
export default NoteList;
