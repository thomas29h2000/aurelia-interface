import {Router} from 'aurelia-router';
import {Toolbar} from './system/toolbar'
import {Aside} from './system/aside'

export class AppDemo {
    static inject() { return [Router, Toolbar, Aside]; }
    constructor(router, toolbar, aside) {

        this.navigation = navigation;

        this.aside   = aside.init({ open:false
                                  , side:'left'
                                  , size:'md' });

        this.toolbar = toolbar.init({ size     : 'sm'
                                    , bgColor  : 'bg-white'
                                    , textColor: 'text-purple' });


        this.interface = {
          direction: 'row',
        }

        this.router = router;
        this.router.title = "Aurelia-Interface"
        this.router.configure(config => {
              config.title = 'Aurelia Interface';
              config.map([
                { route   : ['', 'welcome']
                , moduleId : 'welcome'
                , title    : 'ai'
                , toolbar  : this.toolbar
                }
              ]);
            });
    }
}
