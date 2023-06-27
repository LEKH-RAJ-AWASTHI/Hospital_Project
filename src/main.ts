import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './HomeApp/Homeapp.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
