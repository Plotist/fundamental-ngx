(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"QB/v":function(e,n,t){"use strict";t.r(n);var o={};t.r(o),t.d(o,"default",(function(){return y}));var i={};t.r(i),t.d(i,"default",(function(){return g}));var c={};t.r(c),t.d(c,"default",(function(){return Z}));var a={};t.r(a),t.d(a,"default",(function(){return I}));var r={};t.r(r),t.d(r,"default",(function(){return M}));var m={};t.r(m),t.d(m,"default",(function(){return x}));var l={};t.r(l),t.d(l,"default",(function(){return k}));var u=t("1C3z"),p=t("5/c3"),d=t("eCHz"),b=t("CRIm"),s=t("uYCi"),f=t("P+xO"),v=t("Zn6N"),C=t("7o9V"),D=t("h8DJ"),h=["module","MenuModule"],T=function(){function e(){}return e.ngComponentDef=u.Ob({type:e,selectors:[["app-menu-header"]],factory:function(n){return new(n||e)},consts:13,vars:0,template:function(e,n){1&e&&(u.bc(0,"header"),u.Tc(1,"Menu"),u.Zb(),u.bc(2,"description"),u.Tc(3," Menu item anchors will be keyboard navigable via the tab key provided they have "),u.bc(4,"code"),u.Tc(5,"[routerLink]"),u.Zb(),u.Tc(6," or "),u.bc(7,"code"),u.Tc(8,"[attr.href]"),u.Zb(),u.Tc(9," attributes.\n"),u.Zb(),u.Vb(10,"import",h),u.Vb(11,"fd-header-tabs"),u.Vb(12,"router-outlet"))},directives:[f.a,v.a,C.a,D.a,p.g],styles:[""]}),e}(),y="<fd-menu>\n    <ul fd-menu-list>\n        <li fd-menu-item>\n            Option 1\n        </li>\n        <li fd-menu-item>\n            Option 2\n        </li>\n        <li fd-menu-item>\n            Option 3\n        </li>\n    </ul>\n</fd-menu>\n",g='<fd-menu fd-menu-addon>\n    <ul fd-menu-list>\n        <li>\n            <a href="" fd-menu-item>\n                <fd-icon fd-menu-item-addon [glyph]="\'cart-5\'"></fd-icon>\n                Option 1\n            </a>\n        </li>\n        <li>\n            <a href="" fd-menu-item>\n                <fd-icon fd-menu-item-addon [glyph]="\'accept\'"></fd-icon>\n                Option 2\n            </a>\n        </li>\n        <li>\n            <a href="" fd-menu-item>\n                <fd-icon fd-menu-item-addon [glyph]="\'menu\'"></fd-icon>\n                Option 3\n            </a>\n        </li>\n        <li>\n            <a href="" fd-menu-item>\n                <input type="checkbox" fd-menu-item-addon>\n                Option 4\n            </a>\n        </li>\n        <li>\n            <a href="" fd-menu-item>\n                <fd-icon fd-menu-item-addon [glyph]="\'cart\'"></fd-icon>\n                Option 5\n            </a>\n        </li>\n    </ul>\n</fd-menu>\n',Z="import { Component } from '@angular/core';\n\n@Component({\n    selector: 'fd-menu-addon-example',\n    templateUrl: './menu-addon-example.component.html'\n})\nexport class MenuAddonExampleComponent { }\n",I="<fd-menu>\n    <ul fd-menu-list>\n        <li>\n            <a fd-menu-item>Option 1</a>\n        </li>\n        <li>\n            <a fd-menu-item>Option 2</a>\n        </li>\n        <li>\n            <a fd-menu-item>Option 3</a>\n        </li>\n    </ul>\n    <fd-menu-group>\n        <h1 fd-menu-title>\n            Group header\n        </h1>\n        <ul fd-menu-list>\n            <li>\n                <a fd-menu-item>Option 4</a>\n            </li>\n            <li>\n                <a fd-menu-item>Option 5</a>\n            </li>\n            <li>\n                <a fd-menu-item>Option 6</a>\n            </li>\n        </ul>\n    </fd-menu-group>\n</fd-menu>\n",M='\n<button fd-button (click)="focusFirst()">Focus First Element</button>\n\n<fd-menu>\n    <ul fd-menu-list>\n        <li fd-menu-item (click)="onClick()" tabIndex="0" (keydown)="handleKeyDown($event, 0)">\n            Option 1\n        </li>\n        <li fd-menu-item (click)="onClick()" tabIndex="0" (keydown)="handleKeyDown($event, 1)">\n            Option 2\n        </li>\n        <li fd-menu-item (click)="onClick()" tabIndex="0" (keydown)="handleKeyDown($event, 2)">\n            Option 3\n        </li>\n    </ul>\n</fd-menu>\n',x="import { AfterViewInit, Component, QueryList, ViewChildren } from '@angular/core';\nimport { MenuItemDirective, MenuKeyboardService } from '@fundamental-ngx/core';\n\n@Component({\n    selector: 'fd-menu-keyboard-support-example',\n    templateUrl: 'menu-keyboard-support-example.component.html',\n    providers: [\n        MenuKeyboardService\n    ]\n})\nexport class MenuKeyboardSupportExampleComponent implements AfterViewInit {\n\n    @ViewChildren(MenuItemDirective)\n    menuItems: QueryList<MenuItemDirective>;\n\n    constructor (private menuKeyboardService: MenuKeyboardService) {}\n\n    public focusFirst() {\n        this.menuItems.first.focus();\n    }\n\n    public escapeAfterListFunction = () => {\n        alert('Escaped After list');\n    };\n\n    public onClick() {\n        alert('Element clicked');\n    }\n\n    public handleKeyDown(event: KeyboardEvent, index: number): void {\n        this.menuKeyboardService.keyDownHandler(event, index, this.menuItems.toArray());\n    }\n\n    ngAfterViewInit(): void {\n        this.menuKeyboardService.focusEscapeAfterList = this.escapeAfterListFunction;\n    }\n}\n",k='<fd-menu [separator]="true">\n    <ul fd-menu-list>\n        <li fd-menu-item>\n            Option 1\n        </li>\n        <li fd-menu-item>\n            Option 2\n        </li>\n        <li fd-menu-item>\n            Option 3\n        </li>\n    </ul>\n    <fd-menu-group>\n        <h1 fd-menu-title>\n            Group header\n        </h1>\n        <ul fd-menu-list>\n            <li>\n                <a fd-menu-item>Option 4</a>\n            </li>\n            <li>\n                <a fd-menu-item>Option 5</a>\n            </li>\n            <li>\n                <a fd-menu-item>Option 6</a>\n            </li>\n        </ul>\n    </fd-menu-group>\n</fd-menu>',w=t("9Cr2"),O=t("dB5E"),S=t("4C0c"),P=t("EDdT"),F=t("3ERe"),L=t("lEhO"),N=t("1wP/"),A=["fd-menu-list",""],B=["fd-menu-item",""],V=["fd-menu-title",""],E=[3,"separator"],K=function(){function e(){}return e.ngComponentDef=u.Ob({type:e,selectors:[["fd-menu-example"]],factory:function(n){return new(n||e)},consts:8,vars:0,template:function(e,n){1&e&&(u.bc(0,"fd-menu"),u.bc(1,"ul",A),u.bc(2,"li",B),u.Tc(3," Option 1 "),u.Zb(),u.bc(4,"li",B),u.Tc(5," Option 2 "),u.Zb(),u.bc(6,"li",B),u.Tc(7," Option 3 "),u.Zb(),u.Zb(),u.Zb())},directives:[S.a,P.a,F.a],encapsulation:2}),e}(),G=function(){function e(){}return e.ngComponentDef=u.Ob({type:e,selectors:[["fd-menu-group-example"]],factory:function(n){return new(n||e)},consts:24,vars:0,template:function(e,n){1&e&&(u.bc(0,"fd-menu"),u.bc(1,"ul",A),u.bc(2,"li"),u.bc(3,"a",B),u.Tc(4,"Option 1"),u.Zb(),u.Zb(),u.bc(5,"li"),u.bc(6,"a",B),u.Tc(7,"Option 2"),u.Zb(),u.Zb(),u.bc(8,"li"),u.bc(9,"a",B),u.Tc(10,"Option 3"),u.Zb(),u.Zb(),u.Zb(),u.bc(11,"fd-menu-group"),u.bc(12,"h1",V),u.Tc(13," Group header "),u.Zb(),u.bc(14,"ul",A),u.bc(15,"li"),u.bc(16,"a",B),u.Tc(17,"Option 4"),u.Zb(),u.Zb(),u.bc(18,"li"),u.bc(19,"a",B),u.Tc(20,"Option 5"),u.Zb(),u.Zb(),u.bc(21,"li"),u.bc(22,"a",B),u.Tc(23,"Option 6"),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.Zb())},directives:[S.a,P.a,F.a,L.a,N.a],encapsulation:2}),e}(),H=function(){function e(){}return e.ngComponentDef=u.Ob({type:e,selectors:[["fd-menu-separator-example"]],factory:function(n){return new(n||e)},consts:21,vars:1,template:function(e,n){1&e&&(u.bc(0,"fd-menu",E),u.bc(1,"ul",A),u.bc(2,"li",B),u.Tc(3," Option 1 "),u.Zb(),u.bc(4,"li",B),u.Tc(5," Option 2 "),u.Zb(),u.bc(6,"li",B),u.Tc(7," Option 3 "),u.Zb(),u.Zb(),u.bc(8,"fd-menu-group"),u.bc(9,"h1",V),u.Tc(10," Group header "),u.Zb(),u.bc(11,"ul",A),u.bc(12,"li"),u.bc(13,"a",B),u.Tc(14,"Option 4"),u.Zb(),u.Zb(),u.bc(15,"li"),u.bc(16,"a",B),u.Tc(17,"Option 5"),u.Zb(),u.Zb(),u.bc(18,"li"),u.bc(19,"a",B),u.Tc(20,"Option 6"),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.Zb()),2&e&&u.sc("separator",!0)},directives:[S.a,P.a,F.a,L.a,N.a],encapsulation:2}),e}(),z=t("gJWE"),R=t("ekBi"),j=t("fLMI"),J=t("GqZa"),Q=t("HJQ1"),U=["fd-menu-addon",""],q=["fd-menu-list",""],W=["href","","fd-menu-item",""],Y=["fd-menu-item-addon","",3,"glyph"],$=["type","checkbox","fd-menu-item-addon",""],X=function(){function e(){}return e.ngComponentDef=u.Ob({type:e,selectors:[["fd-menu-addon-example"]],factory:function(n){return new(n||e)},consts:22,vars:4,template:function(e,n){1&e&&(u.bc(0,"fd-menu",U),u.bc(1,"ul",q),u.bc(2,"li"),u.bc(3,"a",W),u.Vb(4,"fd-icon",Y),u.Tc(5," Option 1 "),u.Zb(),u.Zb(),u.bc(6,"li"),u.bc(7,"a",W),u.Vb(8,"fd-icon",Y),u.Tc(9," Option 2 "),u.Zb(),u.Zb(),u.bc(10,"li"),u.bc(11,"a",W),u.Vb(12,"fd-icon",Y),u.Tc(13," Option 3 "),u.Zb(),u.Zb(),u.bc(14,"li"),u.bc(15,"a",W),u.Vb(16,"input",$),u.Tc(17," Option 4 "),u.Zb(),u.Zb(),u.bc(18,"li"),u.bc(19,"a",W),u.Vb(20,"fd-icon",Y),u.Tc(21," Option 5 "),u.Zb(),u.Zb(),u.Zb(),u.Zb()),2&e&&(u.Ic(4),u.sc("glyph","cart-5"),u.Ic(8),u.sc("glyph","accept"),u.Ic(12),u.sc("glyph","menu"),u.Ic(20),u.sc("glyph","cart"))},directives:[S.a,j.a,P.a,F.a,J.a,Q.a],encapsulation:2}),e}(),_=t("LTOS"),ee=t("0b/r"),ne=["fd-button","",3,"click"],te=["fd-menu-list",""],oe=["fd-menu-item","","tabIndex","0",3,"click","keydown"],ie=function(){function e(e){this.menuKeyboardService=e,this.escapeAfterListFunction=function(){alert("Escaped After list")}}return e.prototype.focusFirst=function(){this.menuItems.first.focus()},e.prototype.onClick=function(){alert("Element clicked")},e.prototype.handleKeyDown=function(e,n){this.menuKeyboardService.keyDownHandler(e,n,this.menuItems.toArray())},e.prototype.ngAfterViewInit=function(){this.menuKeyboardService.focusEscapeAfterList=this.escapeAfterListFunction},e.ngComponentDef=u.Ob({type:e,selectors:[["fd-menu-keyboard-support-example"]],factory:function(n){return new(n||e)(u.Ub(_.q))},viewQuery:function(e,n){var t;1&e&&u.Zc(_.p,!0),2&e&&u.Bc(t=u.jc())&&(n.menuItems=t)},features:[u.Hb([_.q])],consts:10,vars:0,template:function(e,n){1&e&&(u.bc(0,"button",ne),u.hc("click",(function(e){return n.focusFirst()})),u.Tc(1,"Focus First Element"),u.Zb(),u.bc(2,"fd-menu"),u.bc(3,"ul",te),u.bc(4,"li",oe),u.hc("click",(function(e){return n.onClick()})),u.hc("keydown",(function(e){return n.handleKeyDown(e,0)})),u.Tc(5," Option 1 "),u.Zb(),u.bc(6,"li",oe),u.hc("click",(function(e){return n.onClick()})),u.hc("keydown",(function(e){return n.handleKeyDown(e,1)})),u.Tc(7," Option 2 "),u.Zb(),u.bc(8,"li",oe),u.hc("click",(function(e){return n.onClick()})),u.hc("keydown",(function(e){return n.handleKeyDown(e,2)})),u.Tc(9," Option 3 "),u.Zb(),u.Zb(),u.Zb())},directives:[ee.a,S.a,P.a,F.a],encapsulation:2}),e}(),ce=[3,"id","componentName"],ae=[3,"name"],re=[3,"exampleFiles"],me=function(){function e(){this.menuBasic=[{language:"html",code:o,fileName:"menu-example"}],this.menuAddon=[{language:"html",code:i,fileName:"menu-addon-example",typescriptFileCode:c,component:"MenuExampleComponent"}],this.menuGroup=[{language:"html",code:a,fileName:"menu-group-example"}],this.menuKeyboard=[{language:"html",code:r,fileName:"menu-keyboard-support-example"},{language:"typescript",code:m,fileName:"menu-keyboard-support-example",component:"MenuKeyboardSupportExampleComponent"}],this.menuSeparator=[{language:"html",code:l,fileName:"menu-separator-example"}]}return e.ngComponentDef=u.Ob({type:e,selectors:[["app-menu"]],factory:function(n){return new(n||e)},consts:52,vars:20,template:function(e,n){1&e&&(u.bc(0,"fd-docs-section-title",ce),u.Tc(1," Menu\n"),u.Zb(),u.bc(2,"component-example",ae),u.Vb(3,"fd-menu-example"),u.Zb(),u.Vb(4,"code-example",re),u.Vb(5,"separator"),u.bc(6,"fd-docs-section-title",ce),u.Tc(7," Menu with Addon\n"),u.Zb(),u.bc(8,"description"),u.Tc(9,"This is an additional container that can be used for an icon or checkbox before the menu item text. This can be achieved with the directives "),u.bc(10,"code"),u.Tc(11,"fd-menu-item-addon"),u.Zb(),u.Tc(12," and "),u.bc(13,"code"),u.Tc(14,"fd-menu-addon"),u.Zb(),u.Zb(),u.bc(15,"component-example",ae),u.Vb(16,"fd-menu-addon-example"),u.Zb(),u.Vb(17,"code-example",re),u.Vb(18,"separator"),u.bc(19,"fd-docs-section-title",ce),u.Tc(20," Menu with Group\n"),u.Zb(),u.bc(21,"component-example",ae),u.Vb(22,"fd-menu-group-example"),u.Zb(),u.Vb(23,"code-example",re),u.Vb(24,"separator"),u.bc(25,"fd-docs-section-title",ce),u.Tc(26," Menu with Optional Separator\n"),u.Zb(),u.bc(27,"description"),u.Tc(28,"Each menu item can have an optional separator shown as a line beneath the item."),u.Zb(),u.bc(29,"component-example",ae),u.Vb(30,"fd-menu-separator-example"),u.Zb(),u.Vb(31,"code-example",re),u.Vb(32,"separator"),u.bc(33,"fd-docs-section-title",ce),u.Tc(34," Keyboard Support\n"),u.Zb(),u.bc(35,"description"),u.Tc(36," Keyboard support can be added on every component which uses the "),u.bc(37,"code"),u.Tc(38,"MenuComponent"),u.Zb(),u.Tc(39,". It simulates click event on "),u.bc(40,"code"),u.Tc(41,"Enter"),u.Zb(),u.Tc(42," or "),u.bc(43,"code"),u.Tc(44,"Space"),u.Zb(),u.Tc(45," key down. It is also possible to override functions for a variety of situations. For example, when the focus should escape the element. Use the up and down arrows to test the component below. To enable focusing on non-focusable elements, change value of "),u.bc(46,"code"),u.Tc(47,"tabIndex"),u.Zb(),u.Tc(48," to 0.\n"),u.Zb(),u.bc(49,"component-example",ae),u.Vb(50,"fd-menu-keyboard-support-example"),u.Zb(),u.Vb(51,"code-example",re)),2&e&&(u.sc("id","def")("componentName","menu"),u.Ic(2),u.sc("name","ex1"),u.Ic(4),u.sc("exampleFiles",n.menuBasic),u.Ic(6),u.sc("id","addon")("componentName","menu"),u.Ic(15),u.sc("name","ex10"),u.Ic(17),u.sc("exampleFiles",n.menuAddon),u.Ic(19),u.sc("id","group")("componentName","menu"),u.Ic(21),u.sc("name","ex2"),u.Ic(23),u.sc("exampleFiles",n.menuGroup),u.Ic(25),u.sc("id","optionalSeparator")("componentName","menu"),u.Ic(29),u.sc("name","ex4"),u.Ic(31),u.sc("exampleFiles",n.menuSeparator),u.Ic(33),u.sc("id","keyboard")("componentName","menu"),u.Ic(49),u.sc("name","ex3"),u.Ic(51),u.sc("exampleFiles",n.menuKeyboard))},directives:[w.a,O.a,K,z.a,R.a,v.a,X,G,H,ie],encapsulation:2}),e}();t.d(n,"MenuDocsModule",(function(){return ue}));var le=[{path:"",component:T,children:[{path:"",component:me},{path:"api",component:d.a,data:{content:s.a.menu}}]}],ue=function(){function e(){}return e.ngModuleDef=u.Sb({type:e}),e.ngInjectorDef=u.Rb({factory:function(n){return new(n||e)},imports:[[p.f.forChild(le),b.a],p.f]}),e}();p.f.forChild(le)},uYCi:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var o={actionBar:["ActionBarComponent","ActionBarActionsDirective","ActionBarBackDirective","ActionBarDescriptionDirective","ActionBarHeaderDirective","ActionBarMobileDirective","ActionBarTitleDirective"],alert:["AlertComponent","AlertConfig","AlertService","AlertRef"],badgeLabel:["BadgeComponent","LabelComponent","StatusLabelComponent"],breadcrumb:["BreadcrumbComponent","BreadcrumbItemDirective","BreadcrumbLinkDirective"],busyIndicator:["BusyIndicatorComponent"],button:["ButtonComponent"],buttonGroup:["ButtonGroupComponent","ButtonGroupedDirective"],calendar:["CalendarComponent","CalendarDayViewComponent","CalendarMonthViewComponent","CalendarYearViewComponent","CalendarHeaderViewComponent","CalendarI18n","CalendarI18nDefault","CalendarI18nLabels","DateFormatParser","DateFormatParserDefault","FdDate"],combobox:["ComboboxComponent"],checkbox:["CheckboxComponent"],datePicker:["DatePickerComponent","DateFormatParser","DateFormatParserDefault","FdDate"],datetimePicker:["DatetimePickerComponent","FdDateTime","DateTimeFormatParser","DateTimeFormatParserDefault"],dropdown:["PopoverDropdownComponent"],fileInput:["FileInputComponent","FileSelectDirective","FileDragndropDirective"],form:["FormControlDirective","FormGroupComponent","FormItemComponent","FormLabelComponent","FormLegendDirective","FormMessageComponent","FormSetDirective","FormInputMessageGroupComponent"],icon:["IconComponent"],identifier:["IdentifierComponent"],image:["ImageComponent"],infiniteScroll:["InfiniteScrollDirective"],inlineHelp:["InlineHelpComponent"],inputGroup:["InputGroupComponent","InputGroupNumberComponent"],layoutGrid:["LayoutGridComponent","LayoutGridSpanDirective"],link:["LinkComponent"],list:["ListComponent","ListActionDirective","ListItemDirective"],loadingSpinner:["LoadingSpinnerComponent"],localizationEditor:["LocalizationEditorComponent","LocalizationEditorItemComponent","LocalizationEditorMainComponent","LocalizationEditorInputDirective","LocalizationEditorTextareaDirective","LocalizationEditorLabel"],megaMenu:["MegaMenuComponent","MegaMenuGroupComponent","MegaMenuItemComponent","MegaMenuLinkDirective","MegaMenuTitleDirective","MegaMenuSubitemDirective","MegaMenuSublinkDirective"],menu:["MenuAddonDirective","MenuComponent","MenuGroupComponent","MenuItemDirective","MenuItemAddonDirective","MenuListDirective","MenuTitleDirective","MenuKeyboardService"],modal:["ModalService","ModalTitleDirective","ModalCloseButtonDirective","ModalConfig","ModalPosition","ModalBodyComponent","ModalHeaderComponent","ModalFooterComponent","ModalRef"],multiInput:["MultiInputComponent"],notification:["NotificationComponent","NotificationHeaderComponent","NotificationBodyComponent","NotificationFooterComponent","NotificationServiceDirective","NotificationActionsDirective","NotificationAvatarDirective","NotificationContentDirective","NotificationDescriptionDirective","NotificationMetadataDirective","NotificationTextDirective","NotificationTitleDirective","DefaultNotificationComponent","NotificationContainer","NotificationConfig","NotificationDefault","NotificationRef"],pagination:["PaginationComponent","PaginationModel","PaginationService"],panel:["PanelComponent","PanelActionsComponent","PanelBodyComponent","PanelDescriptionComponent","PanelFiltersComponent","PanelFooterComponent","PanelHeaderComponent","PanelHeadComponent","PanelTitleDirective"],popover:["PopoverComponent","PopoverBodyComponent","PopoverControlComponent","PopoverDropdownComponent","PopoverBodyHeaderDirective","PopoverBodySubheaderDirective","PopoverBodyFooterDirective"],popoverDirective:["PopoverDirective"],productSwitch:["ProductSwitchComponent","ProductSwitchItem"],scrollSpy:["ScrollSpyDirective"],select:["SelectComponent","OptionComponent"],shellbar:["ProductMenuComponent","ShellbarComponent","ShellbarActionComponent","ShellbarActionsComponent","ShellbarLogoComponent","ShellbarSubtitleComponent","ShellbarTitleComponent"],sideNavigation:["SideNavigationComponent","SideNavigationModel","SideNavigationUtilityDirective","SideNavigationMainDirective","NestedListDirective","NestedListPopoverComponent","NestedListHeaderDirective","NestedListIconDirective","NestedListItem","NestedListModel","NestedListLink"],splitButton:["SplitButtonComponent","SplitButtonMenuDirective","SplitButtonActionTitle"],table:["TableBodyDirective","TableCellDirective","TableHeaderDirective","TableRowDirective","TableComponent","TableResponsiveWrapperDirective","TableWrapperComponent","ColumnSortableDirective"],tabs:["TabListComponent","TabPanelComponent","TabTitleDirective","TabLoadTitleDirective","TabNavComponent","TabLinkDirective","TabItemDirective","TabTagDirective","TabIconDirective","TabCountDirective","TabLabelDirective","TabProcessDirective","TabHeaderDirective","TabCounterHeaderDirective","TabProcessIconDirective","TabSeparator"],tile:["ProductTileComponent","ProductTileContentDirective","ProductTileMediaDirective","ProductTileTextDirective","ProductTileTitleDirective","TileComponent","TileActionsDirective","TileContentDirective","TileGridDirective","TileMediaDirective","TileTextDirective","TileTitleComponent"],time:["TimeComponent","TimeI18nLabels","TimeFormatParser","TimeFormatParserDefault","TimeObject"],timePicker:["TimePickerComponent","TimeFormatParser","TimeFormatParserDefault","TimeObject"],switch:["SwitchComponent"],token:["TokenComponent","TokenizerComponent"],tree:["TreeComponent","TreeChildComponent","TreeRowObjectModel"]}}}]);