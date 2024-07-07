import { useState } from "react";
import LandingPage from "./components/LandingPage";
import NoteList from "./components/NoteList";
import { useEffect } from "react";

function App() {
	const [groups, setGroups] = useState([]);
	const [notes, setNotes] = useState([]);
	const [selectedGroup, setSelectedGroup] = useState(null);

	useEffect(() => {
		//load groups and notes from storage
		const savedGroups = JSON.parse(localStorage.getItem("groups")) || [];
		const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
		setGroups(savedGroups);
		setNotes(savedNotes);
	}, []);

	useEffect(() => {
		//save groups and notes to storage
		localStorage.setItem("groups", JSON.stringify(groups));
		localStorage.setItem("notes", JSON.stringify(notes));
	}, [groups, notes]);

	const addGroup = (group) => {
		setGroups([...groups, group]);
	};

	const addNote = (note) => {
		setNotes([...notes, note]);
	};

	return (
		<>
			{selectedGroup ? (
				<NoteList
					group={selectedGroup}
					notes={notes.filter((note) => note.groupId === selectedGroup.id)}
					addNote={addNote}
					setSelectedGroup={setSelectedGroup}
				/>
			) : (
				<LandingPage
					groups={groups}
					addGroup={addGroup}
					setSelectedGroup={setSelectedGroup}
				/>
			)}
			{/* <LandingPage /> */}
			{/* <h1> Notes Taking App</h1> */}
		</>
	);
}

export default App;
