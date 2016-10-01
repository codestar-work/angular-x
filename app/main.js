import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MyModule } from './module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(MyModule);
