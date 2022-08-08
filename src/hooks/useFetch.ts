import { useEffect } from 'react';
import { useReducer } from './useReducer';

function fetchReducer(state: any, action: any) {
    switch (action.type) {
        case 'fetchAPI/request':
            return { ...state, isLoading: action.isLoading };
        case 'fetchAPI/success':
        case 'fetchAPI/error':
            return {
                ...state,
                isLoading: action.isLoading,
                error: action.error,
                data: action.data,
            };
        default:
            return state;
    }
}

export const useFetch = (callback: any) => {
    const [state, dispatch] = useReducer(fetchReducer, {
        data: [],
        isLoading: false,
        error: null,
    });

    useEffect(() => {
        (async () => {
            dispatch({
                type: 'fetchAPI/request',
                isLoading: true,
            });
            try {
                const res = await callback();
                const { data } = await res;
                dispatch({
                    type: 'fetchAPI/success',
                    isLoading: false,
                    error: null,
                    data,
                });
            } catch (err) {
                dispatch({
                    type: 'fetchAPI/error',
                    isLoading: false,
                    error: err,
                    data: [],
                });
            }
        })();
    }, [callback]);

    // return { data: state.data, isLoading: state.isLoading, error: state.error};
    return { ...state };
};
