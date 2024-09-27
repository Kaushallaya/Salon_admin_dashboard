import axios from "axios";

export const getServices = async () => {
  try {
    let res = await axios.get(`http://localhost:5000/services`);
    // console.log(res.data);
    return res;
  } catch (error) {
    alert(error.response.data.msg);
    return error.response.data.msg;
  }
};
