// Layouts
// import { HeaderOnly } from '~/components/Layout';

// Pages
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Following from '~/pages/Following';
// import Upload from '~/pages/Upload';
// import Search from '~/pages/Search';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following, layout: null },
    // { path: '/upload', component: Upload, layout: HeaderOnly },
    // { path: '/search', component: Search, layout: null },
];

const privateRoutes = [{ path: '/profile', component: Profile }];

export { publicRoutes, privateRoutes };
