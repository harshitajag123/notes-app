import React from "react";
import { useState } from "react";

function CreateGroupPopup(addGroup, setShowPopup) {
	const [name, setName] = useState("");
	const [color, setColor] = useState("");

	const handleSubmit = () => {
		if (name && color) {
			addGroup({ id: Date.now(), name, color });
			setShowPopup(false);
		}
	};
	return (
		<>
			<div onClick={() => setShowPopup(false)} className=" p-[180px] ml-14">
				<div
					onClick={(e) => e.stopPropagation()}
					className="w-[50%] h-[30%] p-5 m-5 bg-zinc-100 rounded-md absolute ">
					<label className=" text-zinc-800 font-medium pr-2 mr-2 ml-12">
						Group Name
					</label>
					<input
						style={{ width: "70%" }}
						className="p-2 mb-3 rounded-xl bg-transparent border-[#979797] border-2"
						type="text"
						placeholder="Group Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<div className="flex flex-row justify-around ">
						<label className="text-zinc-800 pt-2 font-medium">
							Choose colour
						</label>
						<div className="flex flex-wrap justify- ">
							{[
								<div
									key="lavender "
									style={{ backgroundColor: "lavender" }}
									className="rounded-full border-none p-4 m-4"></div>,
								<div
									key="lightPink"
									style={{ backgroundColor: "lightPink" }}
									className="rounded-full border-none p-4 m-4"></div>,
								<div
									key="skyBlue"
									style={{ backgroundColor: "skyBlue" }}
									className="rounded-full border-none p-4 m-4"></div>,
								<div
									key="deepBlue"
									style={{ backgroundColor: "#0047FF" }}
									className="rounded-full border-none p-4 m-4"></div>,
								<div
									key="peach"
									style={{ backgroundColor: "#F19576" }}
									className="rounded-full border-none p-4 m-4"></div>,
								<div
									key="softBlue"
									style={{ backgroundColor: "#6691FF" }}
									className="rounded-full border-none p-4 m-4"></div>,
							].map((c) => (
								<span
									key={c}
									onClick={() => setColor(c)}
									style={{ backgroundColor: c }}
									className="cursor-pointer">
									{c}
								</span>
							))}
						</div>
					</div>
					<button
						onClick={handleSubmit}
						className="rounded-md p-2 bg-zinc-900 w-3/12 text-white float-end">
						Create
					</button>
				</div>
			</div>
		</>
	);
}
export default CreateGroupPopup;
