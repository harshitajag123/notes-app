import React, { useState } from "react";
import GroupList from "./GroupList";
import CreateGroupPopup from "./CreateGroupPopup";
function LandingPage({ groups, addGroup, setSelectedGroup }) {
	const [showPopup, setShowPopup] = useState(false);

	return (
		<div>
			<div className="w-full h-screen text-lg  flex bg-customPink">
				<div className=" w-1/3 h-full bg-white p-5 ">
					<h1 className="text-2xl font-bold">Pocket Notes</h1>
					<div>
						<GroupList
							groups={groups}
							setSelectedGroup={setSelectedGroup}
							setShowPopup={setShowPopup}
						/>
						{showPopup && (
							<CreateGroupPopup
								addGroup={addGroup}
								setShowPopup={setShowPopup}
							/>
						)}
					</div>
				</div>
				<div className="w-2/3 h-full  flex flex-col justify-center items-center p-6 ">
					<img height="500" width="500" src="/notesTakingDisplay.png" alt="" />
					<h1 className="text-2xl font-extrabold m-5 ">Pocket Notes</h1>
					<div className="w-96">
						<p className="text-sm from-neutral-50 m-5 w-80">
							Send and receive messages without keeping your phone online. Use
							Pocket Notes on up to 4 linked devices and 1 mobile phone
						</p>
					</div>
					<p className="m-[100px] mb-5 text-xs">end-to-end encrypted</p>
				</div>
			</div>
		</div>
	);
}

export default LandingPage;
