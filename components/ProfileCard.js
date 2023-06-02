import React, { useEffect, useState } from "react";

export default function ProfileCard(props) {
	const [profile, setProfile] = useState();

	useEffect(() => {
		if (!props.displayed) return;

		setProfile(props.displayed);
	}, [props.displayed]);

	if (!profile) return <></>;

	const address = profile.address.split("&");

	return (
		<div className='bg-zinc-200 w-full h-full flex justify-center items-center'>
			<span className='flex flex-row  gap-7 bg-white text-center rounded-lg py-10 px-7 w-[610px]'>
				<img
					src={profile.profileImg}
					alt={`large sized profile image of ${profile.name}`}
					className='rounded-md w-60 h-60'
				/>
				<section className='flex flex-col justify-center'>
					<span className='text-3xl font-semibold'>
						{profile.name}, &nbsp;
						{profile.age}
					</span>
					<a href={`mailto: ${profile.email}`}>{profile.email}</a>
					<span className='text-center'>{address[0]}</span>
					<span>{address[1]}</span>
				</section>
			</span>
		</div>
	);
}
