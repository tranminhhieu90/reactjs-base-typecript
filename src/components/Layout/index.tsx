import { ReactNode } from 'react';
import Header from './Header';

type Props = {
    children: JSX.Element;
};

function DefaultLayout({ children }: Props) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
