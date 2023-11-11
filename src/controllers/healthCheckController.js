export const healthCheck = async (req, res) => {
    try {

        res.sendStatus(200);
    } catch (error) {
        throw new Error(error);
    }
};