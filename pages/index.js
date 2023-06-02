/**
 * Bazar Profile Finder Coding Interview
 * Mostly stolen from https://medium.com/@justin.sherman/react-coding-interview-challenge-18-257bbcb7429a but I changed it cuz I didnt like his code also I wanted it to work with NextJS
 */

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { generateProfile } from "../utils/profileUtils";
import ProfileList from "../components/ProfileList";
import ProfileCard from "../components/ProfileCard";

/* App Entry */
const Home = () => {
	const [profiles, setProfiles] = useState();
	const [displayed, setDisplayed] = useState();

	const displayProfile = (idx) => {
		setDisplayed(profiles[idx]);
	};

	useEffect(() => {
		// fetching our data from random_user generator
		axios
			.get("https://randomuser.me/api?results=40&nat=us")
			.then((res) => {
				/*
            generateProfile returns a profile object containing name, age, and
            email key/value. we set the array of profile objects to
            state:profile
        */
				setProfiles(res.data.results.map(generateProfile));
			})
			.catch((err) => {
				console.error(err);
				alert("Profile request failed");
			});
	}, []);

	// renders this while data is being fetched
	if (!profiles) return <h1>Loading profiles...</h1>;

	// renders on data retrival
	return (
		<div className='flex flex-row w-screen h-screen'>
			<ProfileList profiles={profiles} displayProfile={displayProfile} />
			<ProfileCard displayed={displayed} />
		</div>
	);
};

export default Home;
