import { APP_ROUTER_PROVIDERS } from './app.routes';
import { SysLogger } from './utils/SysLogger';

export const APP_PROVIDERS = [
    APP_ROUTER_PROVIDERS,
    SysLogger
];
