import { ReactNode } from 'react';
export {};

declare global {
    /**
     * Now declare things that go in the global namespace,
     * or augment existing declarations in the global namespace.
     */
    type Route = {
        path: string;
        component: JSX;
        layout?: JSX;
    };
}
