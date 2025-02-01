import axios from "axios";
const API_URL = "https://testline-server-1.onrender.com/api";
export const fetchQuizData = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: `${API_URL}/result`,
      headers: {
       
        "Content-Type": "application/json",
       
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching quiz data:", error);
    return [];
  }  
};    
    