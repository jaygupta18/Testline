
const axios=require("axios")
const getResult = async (req, res) => {
  try {
    const response = await axios.get('https://api.jsonserve.com/Uw5CrX');
 
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getResult;
