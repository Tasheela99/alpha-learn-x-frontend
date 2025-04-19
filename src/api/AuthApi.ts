import api from "../config/AxiosConfig";

interface User {
    id: number;
    name: string;
    email: string;
    role: "ADMIN" | "STUDENT" | "TEACHER";
}

interface LoginResponse {
    user: User;
    token: string;
}

interface RegisterResponse {
    message: string;
    user: { id: number; name: string; email: string };
}

export const loginUser = async (email: string, password: string): Promise<LoginResponse> => {
    const response = await api.post<LoginResponse>("/auth/sign-in", {email, password});
    return response.data;
};

export const registerUser = async (
    name: string,
    email: string,
    password: string,
    phone?: string,
    role?: string,
): Promise<RegisterResponse> => {
    const response = await api.post<RegisterResponse>("/auth/sign-up", {name, email, password,phone, role});
    return response.data;
};

export const logoutUser = async (): Promise<void> => {
    try {
        await api.post("/auth/logout");
    } catch (error) {
        console.error("Logout error:", error);
    }
};