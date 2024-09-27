import axios from "axios";

export const SaveUser = async (values) => {
  console.log(values);
  try {
    const datas = {
      name: values.name,
      email: values.email,
      address: values.address,
      mobile: values.mobile,
      age: values.age,
      img: "values.img",
    };

    let res = await axios.post(`http://localhost:5000/client/save`, datas);
    //console.log(res.data.success);
    return res.data.success;
  } catch (error) {
    alert(error.response.data.msg);
    return error.response.data.msg;
  }
};

export const getClient = async () => {
  try {
    let res = await axios.get(`http://localhost:5000/client`);
    // console.log(res.data);
    return res;
  } catch (error) {
    alert(error.response.data.msg);
    return error.response.data.msg;
  }
};

export const deleteClient = async (id) => {
  try {
    let res = await axios.get(`http://localhost:5000/client/delete/${id}`);
    console.log(res);
    return res.data.success;
  } catch (error) {
    alert(error.response.data.msg);
    return error.response.data.msg;
  }
};

export const updateClient = async (id, data) => {
  try {
    let res = await axios.patch(
      `http://localhost:5000/updateClient/${id}`,
      data
    );
    console.log(res.data.success);
    return "success";
  } catch (error) {
    alert(error.response.data.msg);
    return error.response.data.msg;
  }
};
