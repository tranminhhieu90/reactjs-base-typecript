import { Http } from '~/app/http';

export const login = async (email: string, password: string) => {
    const url = '/users/login';
    return Http.post(url, {
        email,
        password,
    });
};
