import { Http } from '~/app/http';

export const login = async (username: string, password: string) => {
    const url = '/auth/signin';
    return Http.post(url, {
        username,
        password,
    });
};

export const getAllTasks = async () => {
    const url = '/tasks';
    return Http.get(url);
};
