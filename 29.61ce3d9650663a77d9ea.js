(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{q7AD:function(e,o,t){"use strict";t.r(o);var n={};t.r(n),t.d(n,"default",(function(){return T}));var i={};t.r(i),t.d(i,"default",(function(){return x}));var a={};t.r(a),t.d(a,"default",(function(){return F}));var l={};t.r(l),t.d(l,"default",(function(){return y}));var r={};t.r(r),t.d(r,"default",(function(){return N}));var c={};t.r(c),t.d(c,"default",(function(){return L}));var d={};t.r(d),t.d(d,"default",(function(){return I}));var p={};t.r(p),t.d(p,"default",(function(){return E}));var m=t("1C3z"),f=t("5/c3"),s=t("eCHz"),u=t("CRIm"),b=t("uYCi"),C=t("P+xO"),v=t("Zn6N"),g=t("7o9V"),h=t("h8DJ"),z=["module","LocalizationEditorModule"],D=function(){function e(){}return e.ngComponentDef=m.Ob({type:e,selectors:[["app-localization-editor-header"]],factory:function(o){return new(o||e)},consts:7,vars:0,template:function(e,o){1&e&&(m.bc(0,"header"),m.Tc(1,"Localization Editor"),m.Zb(),m.bc(2,"description"),m.Tc(3," The localization editor is used to translate text into a number of languages. It promotes spatial efficiency through the use of the popover component under the hood.\n"),m.Zb(),m.Vb(4,"import",z),m.Vb(5,"fd-header-tabs"),m.Vb(6,"router-outlet"))},directives:[C.a,v.a,g.a,h.a,f.g],encapsulation:2}),e}(),T='<fd-localization-editor>\n    <fd-localization-editor-main [label]="\'EN\'">\n        <input fd-form-control fd-localization-editor-input type="text" placeholder="EN">\n    </fd-localization-editor-main>\n    <li fd-localization-editor-element *ngFor="let field of fields">\n        <fd-localization-editor-item [label]="field.label">\n            <input fd-form-control fd-localization-editor-input type="text" placeholder="{{field.placeholder}}">\n        </fd-localization-editor-item>\n    </li>\n</fd-localization-editor>\n',x="import { Component } from '@angular/core';\n\n@Component({\n    selector: 'fd-localization-editor-example',\n    templateUrl: './localization-editor-example.component.html'\n})\nexport class LocalizationEditorExampleComponent {\n\n    fields: {placeholder: string, label: string}[] = [\n        {placeholder: 'DE', label: 'DE'},\n        {placeholder: 'NL', label: 'NL'},\n        {placeholder: 'PL', label: 'PL'},\n        {placeholder: 'ER', label: 'ER'},\n    ];\n\n}\n",F='<fd-localization-editor>\n    <fd-localization-editor-main>\n        <ng-template fd-localization-editor-label>\n            <fd-icon [glyph]="\'menu\'"></fd-icon>\n        </ng-template>\n        <input fd-form-control fd-localization-editor-input type="text" placeholder="Menu">\n    </fd-localization-editor-main>\n    <li fd-localization-editor-element *ngFor="let field of fields">\n        <fd-localization-editor-item>\n            <ng-template fd-localization-editor-label>\n                <fd-icon [glyph]="field.glyph"></fd-icon>\n            </ng-template>\n            <input fd-form-control fd-localization-editor-input type="text" placeholder="{{field.placeholder}}">\n        </fd-localization-editor-item>\n    </li>\n</fd-localization-editor>\n',y="import { Component } from '@angular/core';\n\n@Component({\n    selector: 'fd-localization-editor-template-example',\n    templateUrl: './localization-editor-template-example.component.html'\n})\nexport class LocalizationEditorTemplateExampleComponent {\n\n    fields: {placeholder: string, glyph: string}[] = [\n        {placeholder: 'Left', glyph: 'navigation-left-arrow'},\n        {placeholder: 'Up', glyph: 'navigation-up-arrow'},\n        {placeholder: 'Right', glyph: 'navigation-right-arrow'},\n        {placeholder: 'Down', glyph: 'navigation-down-arrow'},\n    ];\n}\n",N='<fd-localization-editor>\n    <fd-localization-editor-main [label]="\'EN\'">\n        <textarea fd-form-control fd-localization-editor-textarea placeholder="EN"></textarea>\n    </fd-localization-editor-main>\n    <li fd-localization-editor-element *ngFor="let field of fields">\n        <fd-localization-editor-item [label]="field.label">\n            <textarea fd-form-control fd-localization-editor-textarea placeholder="{{field.placeholder}}"></textarea>\n        </fd-localization-editor-item>\n    </li>\n</fd-localization-editor>\n',L="import { Component } from '@angular/core';\n\n@Component({\n    selector: 'fd-localization-editor-textarea-example',\n    templateUrl: './localization-editor-textarea-example.component.html'\n})\nexport class LocalizationEditorTextareaExampleComponent {\n\n    fields: {placeholder: string, label: string}[] = [\n        {placeholder: 'DE', label: 'DE'},\n        {placeholder: 'NL', label: 'NL'},\n        {placeholder: 'PL', label: 'PL'},\n        {placeholder: 'ER', label: 'ER'},\n    ];\n}\n",I='<form [formGroup]="customForm">\n    <div class="fd-form-item">\n        <fd-localization-editor>\n            <fd-localization-editor-main [label]="\'EN\'" [compact]="true">\n                <input [state]="\'information\'"\n                       [compact]="true"\n                       fd-form-control\n                       fd-localization-editor-input\n                       formControlName="en"\n                       type="text"\n                       placeholder="EN">\n            </fd-localization-editor-main>\n            <li fd-localization-editor-element *ngFor="let key of customFormKeys">\n                <fd-localization-editor-item [label]="key | uppercase" [compact]="true">\n                    <input fd-form-control\n                           fd-localization-editor-input\n                           formControlName="{{key}}"\n                           type="text"\n                           [compact]="true"\n                           placeholder="{{key | uppercase}}">\n                </fd-localization-editor-item>\n            </li>\n        </fd-localization-editor>\n        <br/>\n    </div>\n</form>\n<ng-container *ngFor="let key of customFormKeys">\n    <br/>{{key | uppercase}}: {{customForm.get(key).value}}\n</ng-container>\n',E="import { Component } from '@angular/core';\nimport { FormControl, FormGroup } from '@angular/forms';\n\n@Component({\n    selector: 'fd-localization-editor-forms-example',\n    templateUrl: './localization-editor-forms-example.component.html'\n})\nexport class LocalizationEditorFormsExampleComponent {\n\n    customForm = new FormGroup({\n        en: new FormControl(''),\n        de: new FormControl(''),\n        pl: new FormControl(''),\n        ca: new FormControl(''),\n        nl: new FormControl('')\n    });\n\n    customFormKeys: string[] = ['en', 'de', 'pl', 'ca', 'nl'];\n}\n",P=t("9Cr2"),w=t("dB5E"),M=t("Lb5o"),S=t("AhQF"),Z=t("KUKl"),B=t("ZOgU"),V=t("8AiQ"),k=t("naht"),A=[3,"label"],R=["fd-form-control","","fd-localization-editor-input","","type","text","placeholder","EN"],O=["fd-localization-editor-element","",4,"ngFor","ngForOf"],G=["fd-localization-editor-element",""],H=["fd-form-control","","fd-localization-editor-input","","type","text",3,"placeholder"];function K(e,o){if(1&e&&(m.bc(0,"li",G),m.bc(1,"fd-localization-editor-item",A),m.Vb(2,"input",H),m.Zb(),m.Zb()),2&e){var t=o.$implicit;m.Ic(1),m.sc("label",t.label),m.Ic(2),m.tc("placeholder",t.placeholder)}}var U=function(){function e(){this.fields=[{placeholder:"DE",label:"DE"},{placeholder:"NL",label:"NL"},{placeholder:"PL",label:"PL"},{placeholder:"ER",label:"ER"}]}return e.ngComponentDef=m.Ob({type:e,selectors:[["fd-localization-editor-example"]],factory:function(o){return new(o||e)},consts:4,vars:2,template:function(e,o){1&e&&(m.bc(0,"fd-localization-editor"),m.bc(1,"fd-localization-editor-main",A),m.Vb(2,"input",R),m.Zb(),m.Rc(3,K,3,2,"li",O),m.Zb()),2&e&&(m.Ic(1),m.sc("label","EN"),m.Ic(3),m.sc("ngForOf",o.fields))},directives:[M.a,S.a,Z.a,B.b,V.t,B.a,k.a],encapsulation:2}),e}(),$=t("gJWE"),j=t("ekBi"),J=t("ZSGP"),W=[3,"formGroup"],Y=[1,"fd-form-item"],q=[3,"label","compact"],Q=["fd-form-control","","fd-localization-editor-input","","formControlName","en","type","text","placeholder","EN",3,"state","compact"],X=["fd-localization-editor-element","",4,"ngFor","ngForOf"],_=[4,"ngFor","ngForOf"],ee=["fd-localization-editor-element",""],oe=["fd-form-control","","fd-localization-editor-input","","type","text",3,"formControlName","compact","placeholder"];function te(e,o){if(1&e&&(m.bc(0,"li",ee),m.bc(1,"fd-localization-editor-item",q),m.mc(2,"uppercase"),m.Vb(3,"input",oe),m.mc(4,"uppercase"),m.Zb(),m.Zb()),2&e){var t=o.$implicit;m.Ic(1),m.sc("label",m.nc(2,5,t))("compact",!0),m.Ic(3),m.tc("formControlName",t),m.tc("placeholder",m.nc(4,7,t)),m.sc("compact",!0)}}function ne(e,o){if(1&e&&(m.Yb(0),m.Vb(1,"br"),m.Tc(2),m.mc(3,"uppercase"),m.Xb()),2&e){var t=o.$implicit,n=m.lc();m.Ic(2),m.Wc("",m.nc(3,2,t),": ",n.customForm.get(t).value,"\n")}}var ie=function(){function e(){this.customForm=new J.j({en:new J.g(""),de:new J.g(""),pl:new J.g(""),ca:new J.g(""),nl:new J.g("")}),this.customFormKeys=["en","de","pl","ca","nl"]}return e.ngComponentDef=m.Ob({type:e,selectors:[["fd-localization-editor-forms-example"]],factory:function(o){return new(o||e)},consts:8,vars:7,template:function(e,o){1&e&&(m.bc(0,"form",W),m.bc(1,"div",Y),m.bc(2,"fd-localization-editor"),m.bc(3,"fd-localization-editor-main",q),m.Vb(4,"input",Q),m.Zb(),m.Rc(5,te,5,9,"li",X),m.Zb(),m.Vb(6,"br"),m.Zb(),m.Zb(),m.Rc(7,ne,4,4,"ng-container",_)),2&e&&(m.sc("formGroup",o.customForm),m.Ic(3),m.sc("label","EN")("compact",!0),m.Ic(4),m.sc("state","information")("compact",!0),m.Ic(5),m.sc("ngForOf",o.customFormKeys),m.Ic(7),m.sc("ngForOf",o.customFormKeys))},directives:[J.I,J.s,J.k,M.a,S.a,J.c,Z.a,B.b,J.r,J.i,V.t,B.a,k.a],pipes:[V.I],encapsulation:2}),e}(),ae=t("GqZa"),le=["fd-localization-editor-label",""],re=["fd-form-control","","fd-localization-editor-input","","type","text","placeholder","Menu"],ce=["fd-localization-editor-element","",4,"ngFor","ngForOf"],de=[3,"glyph"];function pe(e,o){1&e&&m.Vb(0,"fd-icon",de),2&e&&m.sc("glyph","menu")}var me=["fd-localization-editor-element",""],fe=["fd-form-control","","fd-localization-editor-input","","type","text",3,"placeholder"];function se(e,o){if(1&e&&m.Vb(0,"fd-icon",de),2&e){var t=m.lc().$implicit;m.sc("glyph",t.glyph)}}function ue(e,o){if(1&e&&(m.bc(0,"li",me),m.bc(1,"fd-localization-editor-item"),m.Rc(2,se,1,1,"ng-template",le),m.Vb(3,"input",fe),m.Zb(),m.Zb()),2&e){var t=o.$implicit;m.Ic(3),m.tc("placeholder",t.placeholder)}}var be=function(){function e(){this.fields=[{placeholder:"Left",glyph:"navigation-left-arrow"},{placeholder:"Up",glyph:"navigation-up-arrow"},{placeholder:"Right",glyph:"navigation-right-arrow"},{placeholder:"Down",glyph:"navigation-down-arrow"}]}return e.ngComponentDef=m.Ob({type:e,selectors:[["fd-localization-editor-template-example"]],factory:function(o){return new(o||e)},consts:5,vars:1,template:function(e,o){1&e&&(m.bc(0,"fd-localization-editor"),m.bc(1,"fd-localization-editor-main"),m.Rc(2,pe,1,1,"ng-template",le),m.Vb(3,"input",re),m.Zb(),m.Rc(4,ue,4,1,"li",ce),m.Zb()),2&e&&(m.Ic(4),m.sc("ngForOf",o.fields))},directives:[M.a,S.a,B.c,Z.a,B.b,V.t,ae.a,B.a,k.a],encapsulation:2}),e}(),Ce=[3,"label"],ve=["fd-form-control","","fd-localization-editor-textarea","","placeholder","EN"],ge=["fd-localization-editor-element","",4,"ngFor","ngForOf"],he=["fd-localization-editor-element",""],ze=["fd-form-control","","fd-localization-editor-textarea","",3,"placeholder"];function De(e,o){if(1&e&&(m.bc(0,"li",he),m.bc(1,"fd-localization-editor-item",Ce),m.Vb(2,"textarea",ze),m.Zb(),m.Zb()),2&e){var t=o.$implicit;m.Ic(1),m.sc("label",t.label),m.Ic(2),m.tc("placeholder",t.placeholder)}}var Te=function(){function e(){this.fields=[{placeholder:"DE",label:"DE"},{placeholder:"NL",label:"NL"},{placeholder:"PL",label:"PL"},{placeholder:"ER",label:"ER"}]}return e.ngComponentDef=m.Ob({type:e,selectors:[["fd-localization-editor-textarea-example"]],factory:function(o){return new(o||e)},consts:4,vars:2,template:function(e,o){1&e&&(m.bc(0,"fd-localization-editor"),m.bc(1,"fd-localization-editor-main",Ce),m.Vb(2,"textarea",ve),m.Zb(),m.Rc(3,De,3,2,"li",ge),m.Zb()),2&e&&(m.Ic(1),m.sc("label","EN"),m.Ic(3),m.sc("ngForOf",o.fields))},directives:[M.a,S.a,Z.a,B.e,V.t,B.a,k.a],encapsulation:2}),e}(),xe=[3,"id","componentName"],Fe=[3,"name"],ye=[3,"exampleFiles"],Ne=function(){function e(){this.localizationBasic=[{language:"html",code:n,fileName:"localization-editor-example"},{language:"typescript",component:"LocalizationEditorExampleComponent",code:i,fileName:"localization-editor-example"}],this.localizationTemplate=[{language:"html",code:a,fileName:"localization-editor-template-example"},{language:"typescript",component:"LocalizationEditorTemplateExampleComponent",code:l,fileName:"localization-editor-template-example"}],this.localizationTextarea=[{language:"html",code:r,fileName:"localization-editor-textarea-example"},{language:"typescript",component:"LocalizationEditorTextareaExampleComponent",code:c,fileName:"localization-editor-textarea-example"}],this.localizationForms=[{language:"html",code:d,fileName:"localization-editor-forms-example"},{language:"typescript",component:"LocalizationEditorFormsExampleComponent",code:p,fileName:"localization-editor-forms-example"}]}return e.ngComponentDef=m.Ob({type:e,selectors:[["app-localization-editor"]],factory:function(o){return new(o||e)},consts:49,vars:16,template:function(e,o){1&e&&(m.bc(0,"fd-docs-section-title",xe),m.Tc(1," Basic Localization Editor\n"),m.Zb(),m.bc(2,"description"),m.Tc(3," Basic usage of the localization editor. The add-on content on the right-side can be customized through the "),m.bc(4,"code"),m.Tc(5,"[label]"),m.Zb(),m.Tc(6," input.\n"),m.Zb(),m.bc(7,"component-example",Fe),m.Vb(8,"fd-localization-editor-example"),m.Zb(),m.Vb(9,"code-example",ye),m.Vb(10,"separator"),m.bc(11,"fd-docs-section-title",xe),m.Tc(12," Forms in Localization Editor\n"),m.Zb(),m.bc(13,"description"),m.Tc(14," The localization editor component is compatible with Angular forms.\n"),m.Zb(),m.bc(15,"component-example",Fe),m.Vb(16,"fd-localization-editor-forms-example"),m.Zb(),m.Vb(17,"code-example",ye),m.Vb(18,"separator"),m.bc(19,"fd-docs-section-title",xe),m.Tc(20," Complex Add-On content\n"),m.Zb(),m.bc(21,"description"),m.Tc(22," As a more flexible alternative to the "),m.bc(23,"code"),m.Tc(24,"[label]"),m.Zb(),m.Tc(25," input, attaching the "),m.bc(26,"code"),m.Tc(27,"fd-localization-editor-label"),m.Zb(),m.Tc(28," directive to an "),m.bc(29,"code"),m.Tc(30,"ng-template"),m.Zb(),m.Tc(31," allows for complex content to be displayed in the add-on space.\n"),m.Zb(),m.bc(32,"component-example",Fe),m.Vb(33,"fd-localization-editor-template-example"),m.Zb(),m.Vb(34,"code-example",ye),m.Vb(35,"separator"),m.bc(36,"fd-docs-section-title",xe),m.Tc(37," Textarea\n"),m.Zb(),m.bc(38,"description"),m.Tc(39," The localization component can be used with "),m.bc(40,"code"),m.Tc(41,"textarea"),m.Zb(),m.Tc(42,". Textarea element should be used with "),m.bc(43,"code"),m.Tc(44,"fd-localization-editor-textarea"),m.Zb(),m.Tc(45," directive.\n"),m.Zb(),m.bc(46,"component-example",Fe),m.Vb(47,"fd-localization-editor-textarea-example"),m.Zb(),m.Vb(48,"code-example",ye)),2&e&&(m.sc("id","loaderElement")("componentName","localizationEditor"),m.Ic(7),m.sc("name","ex1"),m.Ic(9),m.sc("exampleFiles",o.localizationBasic),m.Ic(11),m.sc("id","forms")("componentName","localizationEditor"),m.Ic(15),m.sc("name","ex2"),m.Ic(17),m.sc("exampleFiles",o.localizationForms),m.Ic(19),m.sc("id"," complex-addOn")("componentName","localizationEditor"),m.Ic(32),m.sc("name","ex3"),m.Ic(34),m.sc("exampleFiles",o.localizationTemplate),m.Ic(36),m.sc("id"," textArea")("componentName","localizationEditor"),m.Ic(46),m.sc("name","ex4"),m.Ic(48),m.sc("exampleFiles",o.localizationTextarea))},directives:[P.a,v.a,w.a,U,$.a,j.a,ie,be,Te],encapsulation:2}),e}();t.d(o,"LocalizationEditorDocsModule",(function(){return Ie}));var Le=[{path:"",component:D,children:[{path:"",component:Ne},{path:"api",component:s.a,data:{content:b.a.localizationEditor}}]}],Ie=function(){function e(){}return e.ngModuleDef=m.Sb({type:e}),e.ngInjectorDef=m.Rb({factory:function(o){return new(o||e)},imports:[[f.f.forChild(Le),u.a],f.f]}),e}();f.f.forChild(Le)},uYCi:function(e,o,t){"use strict";t.d(o,"a",(function(){return n}));var n={actionBar:["ActionBarComponent","ActionBarActionsDirective","ActionBarBackDirective","ActionBarDescriptionDirective","ActionBarHeaderDirective","ActionBarMobileDirective","ActionBarTitleDirective"],alert:["AlertComponent","AlertConfig","AlertService","AlertRef"],badgeLabel:["BadgeComponent","LabelComponent","StatusLabelComponent"],breadcrumb:["BreadcrumbComponent","BreadcrumbItemDirective","BreadcrumbLinkDirective"],busyIndicator:["BusyIndicatorComponent"],button:["ButtonComponent"],buttonGroup:["ButtonGroupComponent","ButtonGroupedDirective"],calendar:["CalendarComponent","CalendarDayViewComponent","CalendarMonthViewComponent","CalendarYearViewComponent","CalendarHeaderViewComponent","CalendarI18n","CalendarI18nDefault","CalendarI18nLabels","DateFormatParser","DateFormatParserDefault","FdDate"],combobox:["ComboboxComponent"],checkbox:["CheckboxComponent"],datePicker:["DatePickerComponent","DateFormatParser","DateFormatParserDefault","FdDate"],datetimePicker:["DatetimePickerComponent","FdDateTime","DateTimeFormatParser","DateTimeFormatParserDefault"],dropdown:["PopoverDropdownComponent"],fileInput:["FileInputComponent","FileSelectDirective","FileDragndropDirective"],form:["FormControlDirective","FormGroupComponent","FormItemComponent","FormLabelComponent","FormLegendDirective","FormMessageComponent","FormSetDirective","FormInputMessageGroupComponent"],icon:["IconComponent"],identifier:["IdentifierComponent"],image:["ImageComponent"],infiniteScroll:["InfiniteScrollDirective"],inlineHelp:["InlineHelpComponent"],inputGroup:["InputGroupComponent","InputGroupNumberComponent"],layoutGrid:["LayoutGridComponent","LayoutGridSpanDirective"],link:["LinkComponent"],list:["ListComponent","ListActionDirective","ListItemDirective"],loadingSpinner:["LoadingSpinnerComponent"],localizationEditor:["LocalizationEditorComponent","LocalizationEditorItemComponent","LocalizationEditorMainComponent","LocalizationEditorInputDirective","LocalizationEditorTextareaDirective","LocalizationEditorLabel"],megaMenu:["MegaMenuComponent","MegaMenuGroupComponent","MegaMenuItemComponent","MegaMenuLinkDirective","MegaMenuTitleDirective","MegaMenuSubitemDirective","MegaMenuSublinkDirective"],menu:["MenuAddonDirective","MenuComponent","MenuGroupComponent","MenuItemDirective","MenuItemAddonDirective","MenuListDirective","MenuTitleDirective","MenuKeyboardService"],modal:["ModalService","ModalTitleDirective","ModalCloseButtonDirective","ModalConfig","ModalPosition","ModalBodyComponent","ModalHeaderComponent","ModalFooterComponent","ModalRef"],multiInput:["MultiInputComponent"],notification:["NotificationComponent","NotificationHeaderComponent","NotificationBodyComponent","NotificationFooterComponent","NotificationServiceDirective","NotificationActionsDirective","NotificationAvatarDirective","NotificationContentDirective","NotificationDescriptionDirective","NotificationMetadataDirective","NotificationTextDirective","NotificationTitleDirective","DefaultNotificationComponent","NotificationContainer","NotificationConfig","NotificationDefault","NotificationRef"],pagination:["PaginationComponent","PaginationModel","PaginationService"],panel:["PanelComponent","PanelActionsComponent","PanelBodyComponent","PanelDescriptionComponent","PanelFiltersComponent","PanelFooterComponent","PanelHeaderComponent","PanelHeadComponent","PanelTitleDirective"],popover:["PopoverComponent","PopoverBodyComponent","PopoverControlComponent","PopoverDropdownComponent","PopoverBodyHeaderDirective","PopoverBodySubheaderDirective","PopoverBodyFooterDirective"],popoverDirective:["PopoverDirective"],productSwitch:["ProductSwitchComponent","ProductSwitchItem"],scrollSpy:["ScrollSpyDirective"],select:["SelectComponent","OptionComponent"],shellbar:["ProductMenuComponent","ShellbarComponent","ShellbarActionComponent","ShellbarActionsComponent","ShellbarLogoComponent","ShellbarSubtitleComponent","ShellbarTitleComponent"],sideNavigation:["SideNavigationComponent","SideNavigationModel","SideNavigationUtilityDirective","SideNavigationMainDirective","NestedListDirective","NestedListPopoverComponent","NestedListHeaderDirective","NestedListIconDirective","NestedListItem","NestedListModel","NestedListLink"],splitButton:["SplitButtonComponent","SplitButtonMenuDirective","SplitButtonActionTitle"],table:["TableBodyDirective","TableCellDirective","TableHeaderDirective","TableRowDirective","TableComponent","TableResponsiveWrapperDirective","TableWrapperComponent","ColumnSortableDirective"],tabs:["TabListComponent","TabPanelComponent","TabTitleDirective","TabLoadTitleDirective","TabNavComponent","TabLinkDirective","TabItemDirective","TabTagDirective","TabIconDirective","TabCountDirective","TabLabelDirective","TabProcessDirective","TabHeaderDirective","TabCounterHeaderDirective","TabProcessIconDirective","TabSeparator"],tile:["ProductTileComponent","ProductTileContentDirective","ProductTileMediaDirective","ProductTileTextDirective","ProductTileTitleDirective","TileComponent","TileActionsDirective","TileContentDirective","TileGridDirective","TileMediaDirective","TileTextDirective","TileTitleComponent"],time:["TimeComponent","TimeI18nLabels","TimeFormatParser","TimeFormatParserDefault","TimeObject"],timePicker:["TimePickerComponent","TimeFormatParser","TimeFormatParserDefault","TimeObject"],switch:["SwitchComponent"],token:["TokenComponent","TokenizerComponent"],tree:["TreeComponent","TreeChildComponent","TreeRowObjectModel"]}}}]);