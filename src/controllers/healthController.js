export const healthCheck = async (req, res) => {
	try {
		res.status(200).send("OK");
	} catch (error) {
		throw new Error(error);
	}
};	