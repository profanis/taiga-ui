import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {
    TuiColorPickerModule,
    TuiColorSelectorModule,
    TuiInputColorModule,
} from '@taiga-ui/addon-editor';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDropdownControllerModule,
    TuiHostedDropdownModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {ExampleTuiColorPickerComponent} from './color-picker.component';
import {TuiColorPickerExample1} from './examples/1';
import {TuiColorPickerExample2} from './examples/2';

@NgModule({
    imports: [
        CommonModule,
        TuiButtonModule,
        TuiHostedDropdownModule,
        TuiColorPickerModule,
        TuiColorSelectorModule,
        TuiActiveZoneModule,
        TuiDropdownControllerModule,
        TuiInputColorModule,
        TuiTextfieldControllerModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ExampleTuiColorPickerComponent)),
        FormsModule,
    ],
    declarations: [
        ExampleTuiColorPickerComponent,
        TuiColorPickerExample1,
        TuiColorPickerExample2,
    ],
    exports: [ExampleTuiColorPickerComponent],
})
export class ExampleTuiColorPickerModule {}
