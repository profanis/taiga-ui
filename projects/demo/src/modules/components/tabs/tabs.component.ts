import * as example1Html from '!!raw-loader!./examples/1/index.html';
import * as example1Ts from '!!raw-loader!./examples/1/index.ts';
import * as example2Html from '!!raw-loader!./examples/2/index.html';
import * as example2Ts from '!!raw-loader!./examples/2/index.ts';
import * as example3Html from '!!raw-loader!./examples/3/index.html';
import * as example3Ts from '!!raw-loader!./examples/3/index.ts';
import * as example4Html from '!!raw-loader!./examples/4/index.html';
import * as example4Ts from '!!raw-loader!./examples/4/index.ts';
import * as example5Html from '!!raw-loader!./examples/5/index.html';
import * as example5Less from '!!raw-loader!./examples/5/index.less';
import * as example5Ts from '!!raw-loader!./examples/5/index.ts';
import * as example6Html from '!!raw-loader!./examples/6/index.html';
import * as example6Less from '!!raw-loader!./examples/6/index.less';
import * as example6Ts from '!!raw-loader!./examples/6/index.ts';
import * as exampleImportModule from '!!raw-loader!./examples/import/import-module.txt';
import * as exampleInsertTemplate from '!!raw-loader!./examples/import/insert-template.txt';

import {Component} from '@angular/core';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tui-tabs',
    templateUrl: './tabs.template.html',
    changeDetection,
})
export class ExampleTuiTabsComponent {
    buttons = ['button 1', 'button 2', 'button 3', 'button 4'];
    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
    };

    readonly example3: FrontEndExample = {
        TypeScript: example3Ts,
        HTML: example3Html,
    };

    readonly example4: FrontEndExample = {
        TypeScript: example4Ts,
        HTML: example4Html,
    };

    readonly example5: FrontEndExample = {
        TypeScript: example5Ts,
        HTML: example5Html,
        LESS: example5Less,
    };

    readonly example6: FrontEndExample = {
        TypeScript: example6Ts,
        HTML: example6Html,
        LESS: example6Less,
    };

    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly moreContentVariants = ['', 'А также'];

    moreContent = this.moreContentVariants[0];

    underline = true;

    activeItemIndex = 0;

    itemsLimit = 999;
}