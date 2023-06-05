import React, { useState } from "react";

import { PROFIILE_PARAMS } from "../utils/profileUtils";

const ProfileList = (props) => {
    const [searchParam, setSearchParam] = useState("");

    const inputHandler = (e) => {
        e.preventDefault();

        e.currentTarget.value;
    };

    return (
        <section className="w-64 px-5 h-screen flex flex-col bg-slate-200">
            {/* Data List Header */}
            <h3 className="font-bold text-2xl w-auto h-min text-center border-b-black border-b-2 pt-3 pb-1">
                {PROFIILE_PARAMS[0].columnTitle}
            </h3>

            {/* Data SearcBox */}
            <input
                type="search"
                placeholder="Search a name..."
                value={searchParam}
                onChange={inputHandler}
                className="focus:outline-none w-auto my-2 border-solid border-gray-300 border-2 rounded-md px-2"
            />

            {/* Data Items List */}
            <ul className="flex flex-col gap-y-[2.9px] overflow-auto">
                {props.profiles.map((profile, i) => (
                    <li
                        key={i}
                        className="border-solid border-purple-100 rounded-sm border-[1.5px]"
                    >
                        <div
                            onClick={() => props.displayProfile(i)}
                            className="flex flex-row gap-2"
                        >
                            <span>
                                <img
                                    className="rounded-full"
                                    src={profile.thumbnail}
                                    alt={`${profile.name}'s thumbnail`}
                                />
                            </span>
                            <span> {profile.name}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
    // return (
    //     <div>
    //         <div
    //             style={{
    //                 flexDirection: "row",
    //                 justifyContent: "center",
    //             }}
    //         >
    //             {PROFIILE_PARAMS.map(({ columnTitle }, i) => (
    //                 <h3 key={i} style={{ width: 200, textAlign: "center" }}>
    //                     {columnTitle}
    //                 </h3>
    //             ))}
    //         </div>
    //         {profiles.map((prof) => (
    //             <ProfilePreview profile={prof} />
    //         ))}
    //     </div>
    // );
};

export default ProfileList;
