import api from "../config/AxiosConfig";

interface LoginResponse {
    token: string;
    user: { id: number; name: string; email: string };
}

interface RegisterResponse {
    message: string;
    user: { id: number; name: string; email: string };
}

export const loginUser = async (email: string, password: string): Promise<LoginResponse> => {
    const response = await api.post<LoginResponse>("/auth/sign-in", {email, password});
    localStorage.setItem("authToken", response.data.token);
    return response.data;
};

export const registerUser = async (
    name: string,
    email: string,
    password: string
): Promise<RegisterResponse> => {
    const response = await api.post<RegisterResponse>("/auth/sign-up", {name, email, password});
    console.log(response)
    return response.data;
};
