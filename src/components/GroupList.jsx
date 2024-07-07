import React from "react";

function GroupList({groups, setSelectedGroup, setShowPopup}) {
	return (
		<>
			<div>
				<button
					className="text-sm bg-zinc-900 text-white p-2 mt-4 rounded-2xl w-40"
					onClick={() => setShowPopup(true)}>
					+ Create Notes Group
				</button>
			</div>
			<div>
				<ul>
					{groups. map((group) => (
						<li key ={group.id} onClick={() => setSelectedGroup(group)}>
							<span style={{ backgroundColor: group.color }}>{group.name}</span>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

export default GroupList;
