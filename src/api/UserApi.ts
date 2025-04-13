import api from "../config/AxiosConfig.ts";

export const getAllUsers = async (): Promise<any> => {
    const response = await api.get<any>("/users/admin/get-all-users");
    return response.data;
};

export const deleteUser = async (userId: string): Promise<any> => {
    const response = await api.delete<any>(`/users/admin/delete-user/${userId}`);
    return response.data;
};
