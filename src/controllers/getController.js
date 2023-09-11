
const getController = async (req, res) => {
    try {
        return res.status(200).send("FUNCA BIEN")
        
    } catch (error) {
        return error;
        
    }


}
module.exports = getController;