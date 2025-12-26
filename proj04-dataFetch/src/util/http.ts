export const get = async (inURL: string) => {
	const myResponse = await fetch(inURL, {
		method: "GET",
	});

	if (!myResponse.ok) {
		throw new Error("Failed to Fetch Data MA OE");
	}

	const data = myResponse.json() as unknown;
	return data;
};
