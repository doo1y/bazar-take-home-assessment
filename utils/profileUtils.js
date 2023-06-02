export const PROFIILE_PARAMS = [
	{
		columnTitle: "Full Name",
		key: "name",
		getValue: (profile) => `${profile.name.first} ${profile.name.last}`,
	},
	{
		columnTitle: "Age",
		key: "age",
		getValue: (profile) => profile.dob.age,
	},
	{
		columnTitle: "Email",
		key: "email",
		getValue: (profile) => profile.email,
	},
	{
		columnTitle: "Location",
		key: "address",
		getValue: (profile) =>
			`${Object.values(profile.location.street).join(" ")} & ${
				profile.location.city
			}, ${profile.location.state} ${profile.location.postcode}`,
	},
	{
		columnTitle: "Phone Number",
		key: "number",
		getValue: (profile) => profile.phone,
	},
	{
		columnTitle: "Main Image",
		key: "profileImg",
		getValue: (profile) => profile.picture.large,
	},
	{
		columnTitle: "Thumbnail",
		key: "thumbnail",
		getValue: (profile) => profile.picture.thumbnail,
	},
];

export const generateProfile = (profileResult) => {
	const profile = {};
	PROFIILE_PARAMS.forEach(({ key, getValue }) => {
		profile[key] = getValue(profileResult);
	});
	return profile;
};
