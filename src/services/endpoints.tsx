export const baseUrl = 'http://localhost:8080';

export const userEndpoints = {
    CreateUser: `${baseUrl}/create-user`,
    GetUser: (userId: number): string => (`${baseUrl}/user/${userId}`),
    EditUser: (userId: number): string => (`${baseUrl}/user/${userId}`),
    DeleteUser: (userId: number): string => (`${baseUrl}/user/delete/${userId}`),
    Login: `${baseUrl}/user/login`,
};

export const weightEndpoints = {
    GetWeightList: (userId: number): string => (`${baseUrl}/user/${userId}/weight`),
    SetWeight: (userId: number): string => (`${baseUrl}/user/${userId}/weight`),
    UpdateWeight: (userId: number, weightId: number): string => (`${baseUrl}/user/${userId}/weight/${weightId}`),
    DeleteWeight: (userId: number, weightId: number): string => (`${baseUrl}/user/${userId}/weight/${weightId}`),
};
