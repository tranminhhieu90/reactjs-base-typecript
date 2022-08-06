import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '~/app/redux/hooks';
import { getUserInfoSelector } from '~/app/redux/selector/userSelector';
const lngs: any = {
    en: { nativeName: 'English' },
    fr: { nativeName: 'Deutsch' },
};

function Home() {
    const { t, i18n } = useTranslation();
    const [count, setCounter] = useState(0);
    const user = useAppSelector(getUserInfoSelector);
    console.log('user', user);
    return (
        <>
            <div>
                {Object.keys(lngs).map((lng: string) => (
                    <button
                        key={lng}
                        style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
                        type="submit"
                        onClick={() => {
                            i18n.changeLanguage(lng);
                            setCounter(count + 1);
                        }}
                    >
                        {lngs[lng].nativeName}
                    </button>
                ))}
            </div>
            <h2>{t('Welcome to React')}</h2>
            <p>
                <i>{t('counter', { count })}</i>
            </p>
        </>
    );
}

export default Home;
