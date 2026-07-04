import api from "./api";


export const getAllUsers = async () => {
  return await api.get(`/api/user/getAllUser`);
};

export const getUsersById = async (id) => {
  return await api.get(`/api/user/${id}`);
};

export const updateUserRoles = async (id, role) => {
  return await api.patch(`/api/user/${id}/roles`, { role });
};

export const updateUser = async (id, data) => {
  return await api.put(`/api/user/updateUser/${id}`, data);
};

export const updateUserProfileImage = async (data) => {
  return await api.put(`/api/user/profile-update`, data);
};
