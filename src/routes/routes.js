import config from '~/config';
import { HeaderOnly } from '~/layouts';
import DetailUser from '~/pages/DetailUser';
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Live from '~/pages/Live';
import Upload from '~/pages/Upload';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.Live, component: Live },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.detaiUser, component: DetailUser, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
