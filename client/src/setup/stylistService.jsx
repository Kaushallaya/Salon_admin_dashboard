import axios from "axios";

export const SaveStylist = async (values) => {
  console.log(values);
  try {
    const datas = {
      name: values.name,
      email: values.email,
      address: values.address,
      mobile: values.mobile,
      age: values.age,
      active: true,
      img: "https://res.cloudinary.com/dkbk51c9j/image/upload/v1666879731/209536-360-f-364211147-1qglvxv1tcq0ohz3fawufrtonzz8nq3e_kj2iet.jpg",
      service: values.service,
      service_img: values.service_img,
    };

    let res = await axios.post(`http://localhost:5000/stylist/save`, datas);
    console.log(res);
    return res.data.success;
  } catch (error) {
    alert(error.response.data.msg);
    return error.response.data.msg;
  }
};

export const getStylist = async () => {
  try {
    let res = await axios.get(`http://localhost:5000/stylist`);
    // console.log(res.data);
    return res;
  } catch (error) {
    alert(error.response.data.msg);
    return error.response.data.msg;
  }
};

export const updateStylist = async (id, data) => {
  try {
    let res = await axios.patch(
      `http://localhost:5000/updateStylist/${id}`,
      data
    );
    console.log(res.data.success);
    return "success";
  } catch (error) {
    alert(error.response.data.msg);
    return error.response.data.msg;
  }
};
