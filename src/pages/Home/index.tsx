import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '~/app/redux/hooks';
import { getUserInfoSelector } from '~/app/redux/selector/userSelector';
import { useFetch } from '~/hooks/useFetch';
import { getAllTasks } from '~/services/auth';
const lngs: any = {
    en: { nativeName: 'English' },
    fr: { nativeName: 'Deutsch' },
};

function Home() {
    const { t, i18n } = useTranslation();
    const user = useAppSelector(getUserInfoSelector);
    const { data: tasks, isLoading, error } = useFetch(getAllTasks);
    console.log('tasks', tasks);
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
                        }}
                    >
                        {lngs[lng].nativeName}
                    </button>
                ))}
            </div>
            <h2>{t('Welcome to React')}</h2>
            {isLoading ? <p>Loading...</p> : tasks.map((task: any) => <p key={task.id}>{task.title}</p>)}
        </>
    );
}

export default Home;
