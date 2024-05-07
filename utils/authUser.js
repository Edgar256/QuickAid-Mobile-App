import axiosClient from './axiosClient';

const authUser = async () => {
  try {
    axiosClient
      .get('/users/getUser')
      .then(res => {
        if (res.status === 200) {
          console.log({status: res.status});
          return true;
        } else {
          return false;
        }
      })
      .catch(err => {
        return false;
      });
  } catch (error) {
    return false;
  }
};

export default authUser;
