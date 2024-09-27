import axios from "axios";

export const RegisterUser = async (values) => {
  try {
    const datas = {
      email: values.email,
      password: values.password,
      // name: values.name,
      // address: values.address,
      // mobile: values.mobile,
      // age: values.age,
      // img: "values.img",
    };
    let res = await axios.post(`http://localhost:5000/register`, values);
    console.log(res);
    return res.data.success;
  } catch (error) {
    console.log(error);
    // alert(error.response.data.msg);
    // return error.response.data.msg;
  }
};

export const LoginUser = async (values) => {
  try {
    const datas = {
      email: values.email,
      password: values.password,
    };
    let res = await axios.post(`http://localhost:5000/login`, datas);
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
    alert(error.response.data.msg);
    return error.response.data.msg;
  }
};
