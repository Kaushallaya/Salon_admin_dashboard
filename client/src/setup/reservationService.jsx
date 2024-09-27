import axios from "axios";
import { format } from "date-fns";

export const SaveReservation = async (values) => {
  try {
    // values.bookingDate = new Date(values.bookingDate).toLocaleDateString();
    //values.bookingTime = new Date(values.bookingTime).toLocaleTimeString();
    const datas = {
      service: values[2].service,
      price: values[2].price,
      service_pic: values[2].service_img,
      date: new Date(values[0].bookingDate).toLocaleDateString(),
      time: new Date(values[0].bookingTime).toLocaleTimeString(),
      status: "Pending",
      client_name: values[3].name,
      client_email: values[3].email,
      client_mobile: values[3].mobile,
      client_img: values[3].client_img,
      stylist: values[1],
    };

    let res = await axios.post(`http://localhost:5000/reservation/save`, datas);
    //console.log(res);
    return res.data.success;
  } catch (error) {
    alert(error.response.data.msg);
    return error.response.data.msg;
  }
};

export const getReservations = async () => {
  try {
    let res = await axios.get(`http://localhost:5000/reservation`);
    // console.log(res.data);
    return res;
  } catch (error) {
    alert(error.response.data.msg);
    return error.response.data.msg;
  }
};

export const deleteReservations = async (id) => {
  try {
    console.log(id);
    let res = await axios.get(`http://localhost:5000/reservation/delete/${id}`);
    console.log(res);
    return res.data.success;
  } catch (error) {
    alert(error.response.data.msg);
    return error.response.data.msg;
  }
};

export const updateReservation = async (id, data) => {
  try {
    let res = await axios.patch(
      `http://localhost:5000/updateReservation/${id}`,
      data
    );
    console.log(res.data.success);
    return "success";
  } catch (error) {
    alert(error.response.data.msg);
    return error.response.data.msg;
  }
};

export const getTomorrowReservations = async () => {
  try {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    let res = await axios.get(
      `http://localhost:5000/searchreservation/${date}`
    );
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    alert(error.response.data.msg);
    return error.response.data.msg;
  }
};

export const sendReservationReminderMail = async (data) => {
  console.log(data);
  try {
    let res = await axios.post(`http://localhost:5000/sendreminderemail`, data);
    if (res.status === 200) {
      console.log(res.data);
    }
  } catch (error) {
    alert(error.response.data.msg);
  }
};
