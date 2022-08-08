import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { login } from '~/services/auth';
import { useNavigate } from 'react-router-dom';
type FormData = {
    username: string;
    password: string;
};
const schema = yup
    .object({
        username: yup.string().required(),
        password: yup.string().required(),
    })
    .required();
function Login() {
    let navigate = useNavigate();
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({ resolver: yupResolver(schema) });
    const onSubmit = async (data: FormData) => {
        console.log('data', data);
        const { username, password } = data;
        try {
            const result = await login(username, password);
            if (result) {
                localStorage.setItem('accessToken', result.data.accessToken);
                navigate('/', { replace: true });
            }
        } catch (error) {}
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>username</label>
            <input {...register('username')} />
            <p>{errors.username?.message}</p>
            <label>password</label>
            <input {...register('password')} />
            <p>{errors.password?.message}</p>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Login;
