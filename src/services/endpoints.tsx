export const baseUrl = 'https://localhost:8080';

export const userEndpoints = {
    CreateUser: `${baseUrl}/user`,
    GetUser: (id: number): string => (`${baseUrl}/user/${id}`),
    EditUser: (id: number): string => (`${baseUrl}/user/edit/${id}`),
    DeleteUser: (id: number): string => (`${baseUrl}/user/delete/${id}`),
    Login: `${baseUrl}/login`,
};

export default userEndpoints;
