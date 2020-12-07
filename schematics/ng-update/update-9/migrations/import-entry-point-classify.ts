import ts from 'typescript';
import { ContentChange, RemoveContentChange, ReplaceContentChange, UpdateContentChange } from '../../../types';

import { MigrationBase } from './base';

const NAME_PACKAGE_RELATION = {
    ThyActionMenuItemType: 'action-menu',
    ThyActionMenuItemDirective: 'action-menu',
    ThyActionMenuItemIconDirective: 'action-menu',
    ThyActionMenuItemNameDirective: 'action-menu',
    ThyActionMenuItemMetaDirective: 'action-menu',
    ThyActionMenuItemInfoDirective: 'action-menu',
    ThyActionMenuItemExtendIconDirective: 'action-menu',
    ThyActionMenuItemActiveDirective: 'action-menu',
    ThyActionMenuSubItemDirective: 'action-menu',
    ActionEnum: 'action-menu',
    ThyActionMenuToggleDirective: 'action-menu',
    ThyActionMenuTheme: 'action-menu',
    ThyActionMenuDividerType: 'action-menu',
    ThyActionMenuComponent: 'action-menu',
    ThyActionMenuGroupComponent: 'action-menu',
    ThyActionMenuDividerComponent: 'action-menu',
    ThyActionMenuDividerTitleDirective: 'action-menu',
    ThyActionMenuModule: 'action-menu',
    ThyAffixComponent: 'affix',
    ThyAffixModule: 'affix',
    AffixRespondEvents: 'affix',
    ThyAlertComponent: 'alert',
    ThyAlertActionItemDirective: 'alert',
    ThyAlertModule: 'alert',
    ThyAnchorLinkComponent: 'anchor',
    ThyAnchorComponent: 'anchor',
    ThyAnchorModule: 'anchor',
    ThyArrowSwitcherEvent: 'arrow-switcher',
    ThyArrowSwitcherComponent: 'arrow-switcher',
    ThyArrowSwitcherModule: 'arrow-switcher',
    ThyAutocompleteActivatedEvent: 'autocomplete',
    ThyAutocompleteComponent: 'autocomplete',
    ThyAutocompleteTriggerDirective: 'autocomplete',
    ThyAutocompleteModule: 'autocomplete',
    thyAutocompleteAnimations: 'autocomplete',
    ThyAutocompleteContainerComponent: 'autocomplete',
    ThyAutocompleteRef: 'autocomplete',
    ThyInternalAutocompleteRef: 'autocomplete',
    ThyAutocompleteConfig: 'autocomplete',
    THY_AUTOCOMPLETE_DEFAULT_CONFIG: 'autocomplete',
    THY_AUTOCOMPLETE_DEFAULT_CONFIG_PROVIDER: 'autocomplete',
    autocompleteUpperOverlayOptions: 'autocomplete',
    ThyAutocompleteService: 'autocomplete',
    thyAvatarSizeMap: 'avatar',
    ThyAvatarComponent: 'avatar',
    ThyAvatarModule: 'avatar',
    AvatarShortNamePipe: 'avatar',
    AvatarBgColorPipe: 'avatar',
    AvatarSrcPipe: 'avatar',
    AvatarPipes: 'avatar',
    ThyAvatarService: 'avatar',
    ThyDefaultAvatarService: 'avatar',
    ThyBackTopComponent: 'back-top',
    ThyBackTopModule: 'back-top',
    ThyBadgeComponent: 'badge',
    ThyBadgeModule: 'badge',
    ThyBreadcrumbItemComponent: 'breadcrumb',
    ThyBreadcrumbComponent: 'breadcrumb',
    ThyBreadcrumbModule: 'breadcrumb',
    buttonGroupSize: 'button',
    buttonGroupType: 'button',
    ThyButtonGroupComponent: 'button',
    IconShape: 'button',
    ThyButtonIconComponent: 'button',
    ThyButtonType: 'button',
    ThyButtonComponent: 'button',
    ThyButtonModule: 'button',
    ThyDateCellDirective: 'calendar',
    ThyMonthCellDirective: 'calendar',
    ThyDateFullCellDirective: 'calendar',
    ThyMonthFullCellDirective: 'calendar',
    ThyCalendarHeaderOperationDirective: 'calendar',
    ThyCalendarHeaderComponent: 'calendar',
    CalendarMode: 'calendar',
    ThyCalendarComponent: 'calendar',
    ThyCalendarModule: 'calendar',
    ThyCardComponent: 'card',
    ThyCardModule: 'card',
    ThyCardContentComponent: 'card',
    ThyCardHeaderComponent: 'card',
    ThyCascaderOptionComponent: 'cascader',
    ThyCascaderTriggerType: 'cascader',
    ThyCascaderExpandTrigger: 'cascader',
    CascaderOption: 'cascader',
    ThyCascaderComponent: 'cascader',
    ThyCascaderModule: 'cascader',
    ThyCheckboxComponent: 'checkbox',
    ThyCheckboxModule: 'checkbox',
    ThyCopyEvent: 'copy',
    ThyCopyDirective: 'copy',
    ThyCopyModule: 'copy',
    AnimationDuration: 'core',
    AnimationCurves: 'core',
    fadeMotion: 'core',
    Constructor: 'core',
    AnonymousClass: 'core',
    MixinBase: 'core',
    InputBoolean: 'core',
    InputCssPixel: 'core',
    InputNumber: 'core',
    ThyCanDisable: 'core',
    ThyCanDisableCtor: 'core',
    mixinDisabled: 'core',
    ThyLoadingDone: 'core',
    mixinLoadingDone: 'core',
    ThyUnsubscribe: 'core',
    mixinUnsubscribe: 'core',
    ThyClickPosition: 'core',
    ThyClickPositioner: 'core',
    ThyClickDispatcher: 'core',
    ThyEventDispatcher: 'core',
    ThyKeyboardDispatcher: 'core',
    ThyPlacement: 'core',
    ConnectedPositionOffset: 'core',
    POSITION_MAP: 'core',
    EXPANDED_DROPDOWN_POSITIONS: 'core',
    ThyOverlayTrigger: 'core',
    ThyOverlayDirectiveBase: 'core',
    FlexibleConnectedPositionStrategyOrigin: 'core',
    FlexibleConnectedPositionStrategy: 'core',
    ConnectedPosition: 'core',
    isElementScrolledOutsideView: 'core',
    isElementClippedByScrolling: 'core',
    throwPopoverContentAlreadyAttachedError: 'core',
    ThyUpperOverlayContainer: 'core',
    ThyUpperOverlayRef: 'core',
    ThyInternalUpperOverlayRef: 'core',
    ThyUpperOverlayPosition: 'core',
    ThyUpperOverlayConfig: 'core',
    ThyUpperOverlayOptions: 'core',
    ComponentTypeOrTemplateRef: 'core',
    ThyUpperOverlayService: 'core',
    buildConnectedPositionOffset: 'core',
    buildConnectedPositionPair: 'core',
    getFallbackPlacements: 'core',
    getFlexiblePositions: 'core',
    getPlacementByPosition: 'core',
    cancelRequestAnimationFrame: 'core',
    reqAnimFrame: 'core',
    ScrollToService: 'core',
    EasyingFn: 'core',
    ThyScrollService: 'core',
    ThyTranslate: 'core',
    UpdateHostClassService: 'core',
    AbstractPickerComponent: 'date-picker',
    PickerDirective: 'date-picker',
    BasePickerComponent: 'date-picker',
    DATE_HELPER_SERVICE_FACTORY: 'date-picker',
    DateHelperService: 'date-picker',
    DateHelperByDatePipe: 'date-picker',
    ThyDatePickerComponent: 'date-picker',
    ThyDatePickerDirective: 'date-picker',
    ThyDatePickerModule: 'date-picker',
    HeaderPickerComponent: 'date-picker',
    SupportHeaderPanel: 'date-picker',
    CalendarFooterComponent: 'date-picker',
    CalendarHeaderComponent: 'date-picker',
    YearMonthDaySelector: 'date-picker',
    DateTableCellComponent: 'date-picker',
    DateTableComponent: 'date-picker',
    WeekDayLabel: 'date-picker',
    DateCell: 'date-picker',
    WeekRow: 'date-picker',
    DecadePanelComponent: 'date-picker',
    PanelDecadeData: 'date-picker',
    LibPackerModule: 'date-picker',
    MonthPanelComponent: 'date-picker',
    MonthTableComponent: 'date-picker',
    PanelMonthData: 'date-picker',
    DatePopupComponent: 'date-picker',
    RangePartType: 'date-picker',
    InnerPopupComponent: 'date-picker',
    YearPanelComponent: 'date-picker',
    PanelYearData: 'date-picker',
    ThyMonthPickerComponent: 'date-picker',
    ThyPickerComponent: 'date-picker',
    ThyDatePickerFormatPipe: 'date-picker',
    ThyDatePickerFormatStringPipe: 'date-picker',
    transformDateValue: 'date-picker',
    convertDate: 'date-picker',
    hasValue: 'date-picker',
    makeValue: 'date-picker',
    DatePickerRequiredValidator: 'date-picker',
    RangePickerRequiredValidator: 'date-picker',
    ThyRangePickerComponent: 'date-picker',
    ThyRangePickerDirective: 'date-picker',
    DisabledDateFn: 'date-picker',
    DisabledTimePartial: 'date-picker',
    PanelMode: 'date-picker',
    CompatibleValue: 'date-picker',
    CompatibleDate: 'date-picker',
    DisabledTimeFn: 'date-picker',
    DateEntry: 'date-picker',
    RangeEntry: 'date-picker',
    DateType: 'date-picker',
    instanceOfDateEntry: 'date-picker',
    instanceOfRangeEntry: 'date-picker',
    DisabledTimeConfig: 'date-picker',
    SupportTimeOptions: 'date-picker',
    ThyWeekPickerComponent: 'date-picker',
    ThyYearPickerComponent: 'date-picker',
    AttachTypes: 'date-range',
    DateRangeItemInfo: 'date-range',
    ThyDateRangeComponent: 'date-range',
    ThyDateRangeModule: 'date-range',
    OptionalDateRangesComponent: 'date-range',
    DialogBodyComponent: 'dialog',
    ThyConfirmComponent: 'dialog',
    ThyConfirmConfig: 'dialog',
    THY_CONFIRM_DEFAULT_OPTIONS: 'dialog',
    THY_CONFIRM_DEFAULT_OPTIONS_PROVIDER: 'dialog',
    thyDialogAnimations: 'dialog',
    ThyDialogContainerComponent: 'dialog',
    ThyDialogRef: 'dialog',
    ThyInternalDialogRef: 'dialog',
    ThyDialogRole: 'dialog',
    ThyDialogSizes: 'dialog',
    ThyDialogConfig: 'dialog',
    THY_DIALOG_DEFAULT_OPTIONS: 'dialog',
    THY_DIALOG_DEFAULT_OPTIONS_PROVIDER: 'dialog',
    ThyDialogFooterAlign: 'dialog',
    ThyDialogLayoutConfig: 'dialog',
    THY_DIALOG_LAYOUT_CONFIG: 'dialog',
    THY_DIALOG_LAYOUT_CONFIG_PROVIDER: 'dialog',
    ThyDialogModule: 'dialog',
    dialogUpperOverlayOptions: 'dialog',
    ThyDialog: 'dialog',
    DialogFooterComponent: 'dialog',
    DialogHeaderComponent: 'dialog',
    ThyDragContentDirective: 'drag-drop',
    ThyDropPosition: 'drag-drop',
    ThyDragStartEvent: 'drag-drop',
    ThyDragEndEvent: 'drag-drop',
    ThyDragOverEvent: 'drag-drop',
    ThyDragDropEvent: 'drag-drop',
    ThyDragDropService: 'drag-drop',
    ThyDragHandleDirective: 'drag-drop',
    DragRef: 'drag-drop',
    ThyDragDirective: 'drag-drop',
    IThyDropContainerDirective: 'drag-drop',
    THY_DROP_CONTAINER_DIRECTIVE: 'drag-drop',
    ThyDropContainerDirective: 'drag-drop',
    ThyDragDropModule: 'drag-drop',
    ThyDropdownDirective: 'dropdown',
    ThyDropdownModule: 'dropdown',
    ThyEmptyComponent: 'empty',
    ThyEmptyConfig: 'empty',
    ThyEmptyModule: 'empty',
    ThyFlexibleTextComponent: 'flexible-text',
    ThyFlexibleTextModule: 'flexible-text',
    ThyFormGroupErrorComponent: 'form',
    ThyFormGroupLabelDirective: 'form',
    ThyFormGroupComponent: 'form',
    ThyFormSubmitDirective: 'form',
    ERROR_VALUE_REPLACE_REGEX: 'form',
    ThyFormValidatorLoader: 'form',
    ThyFormValidatorService: 'form',
    ThyFormLayout: 'form',
    ThyFormGroupFooterAlign: 'form',
    ThyFormValidationMessages: 'form',
    ThyFormValidatorConfig: 'form',
    ThyFormValidatorGlobalConfig: 'form',
    ThyFormConfig: 'form',
    THY_VALIDATOR_CONFIG: 'form',
    THY_FORM_CONFIG: 'form',
    THY_FORM_CONFIG_PROVIDER: 'form',
    ThyEnterKeyMode: 'form',
    ThyFormDirective: 'form',
    ThyFormGroupFooterComponent: 'form',
    ThyFormModule: 'form',
    confirmValidator: 'form',
    ThyConfirmValidatorDirective: 'form',
    ThyMaxDirective: 'form',
    ThyMinDirective: 'form',
    ThyUniqueCheckValidator: 'form',
    FullscreenMode: 'fullscreen',
    DEFAULT_MODE: 'fullscreen',
    ESC_KEY: 'fullscreen',
    ThyFullscreenComponent: 'fullscreen',
    ThyFullscreenModule: 'fullscreen',
    StyxFullscreenService: 'fullscreen',
    IThyGridColumnParentComponent: 'grid',
    THY_GRID_COLUMN_PARENT_COMPONENT: 'grid',
    ThyGridColumnComponent: 'grid',
    ThyGridTheme: 'grid',
    ThyGridMode: 'grid',
    ThyGridSize: 'grid',
    ThyGridComponent: 'grid',
    ThyGridColumn: 'grid',
    ThyPage: 'grid',
    ThyGridEmptyOptions: 'grid',
    PageChangedEvent: 'grid',
    ThyGridEvent: 'grid',
    ThyMultiSelectEvent: 'grid',
    ThyRadioSelectEvent: 'grid',
    ThySwitchEvent: 'grid',
    ThyGridDraggableEvent: 'grid',
    ThyGridRowEvent: 'grid',
    ThyGridModule: 'grid',
    GridIsValidModelValuePipe: 'grid',
    setPrintErrorWhenIconNotFound: 'icon',
    getWhetherPrintErrorWhenIconNotFound: 'icon',
    IconMode: 'icon',
    ThyIconRegistry: 'icon',
    ThyIconComponent: 'icon',
    ThyIconModule: 'icon',
    InputGroupSize: 'input',
    ThyInputGroupComponent: 'input',
    InputSearchTheme: 'input',
    CUSTOM_INPUT_SEARCH_CONTROL_VALUE_ACCESSOR: 'input',
    ThyInputSearchComponent: 'input',
    CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: 'input',
    ThyInputComponent: 'input',
    InputSize: false,
    ThyInputDirective: 'input',
    ThyInputModule: 'input',
    ThyLabelType: 'label',
    ThyLabelComponent: 'label',
    ThyLabelModule: 'label',
    ThyContentMainComponent: 'layout',
    ThyContentSectionComponent: 'layout',
    ThyContentComponent: 'layout',
    ThyHeaderComponent: 'layout',
    ThyLayoutComponent: 'layout',
    ThyLayoutModule: 'layout',
    ThySidebarComponent: 'layout',
    ThyListItemMetaComponent: 'list',
    ThyListItemComponent: 'list',
    ThyListComponent: 'list',
    ThyListModule: 'list',
    ThyListSize: 'list',
    ThySelectionListComponent: 'list',
    ThySelectionListChange: 'list',
    ThyLoadingComponent: 'loading',
    ThyLoadingModule: 'loading',
    ThyMarkdownModule: 'markdown',
    ThyMarkdownParserDirective: 'markdown',
    EmojisRenderInfo: 'markdown',
    ThyMarkdownParserService: 'markdown',
    ThyMarkdownPlanTextParserDirective: 'markdown',
    SeekQueryResult: 'mention',
    MatchedMention: 'mention',
    MentionAdapter: 'mention',
    EditableMentionAdapter: 'mention',
    createMentionAdapter: 'mention',
    TextareaMentionAdapter: 'mention',
    CaretCoordinates: 'mention',
    CaretOptions: 'mention',
    InputOrTextAreaElement: 'mention',
    AllElement: 'mention',
    CaretPositioner: 'mention',
    MentionDefaultDataItem: 'mention',
    Mention: 'mention',
    MentionSuggestionSelectEvent: 'mention',
    ThyMentionDirective: 'mention',
    ThyMentionModule: 'mention',
    ThyMentionSuggestionsComponent: 'mention',
    ThyMenuDividerComponent: 'menu',
    ThyMenuGroupComponent: 'menu',
    ThyMenuItemActionComponent: 'menu',
    ThyMenuItemIconComponent: 'menu',
    ThyMenuItemComponent: 'menu',
    ThyMenuItemNameComponent: 'menu',
    ThyMenuComponent: 'menu',
    ThyMenuModule: 'menu',
    ThyIconNavLinkComponent: 'nav',
    ThyIconNavComponent: 'nav',
    ThyNavLink: 'nav',
    ThyNavLinkDirective: 'nav',
    ThyNavType: 'nav',
    ThyNavSize: 'nav',
    ThyNavHorizontal: 'nav',
    ThyNavComponent: 'nav',
    ThyNavModule: 'nav',
    CONTAINER_PLACEMENT: 'notify',
    NotifyPlacement: 'notify',
    ThyNotifyOption: 'notify',
    THY_NOTIFY_DEFAULT_OPTIONS: 'notify',
    THY_NOTIFY_DEFAULT_OPTIONS_PROVIDER: 'notify',
    NotifyQueueState: 'notify',
    notifyQueueInitialState: 'notify',
    NotifyQueueStore: 'notify',
    ThyNotifyComponent: 'notify',
    ThyNotifyContainerComponent: 'notify',
    ThyNotifyModule: 'notify',
    ThyNotifyService: 'notify',
    ThyPaginationConfigModel: 'pagination',
    ThyPaginationChangedEvent: 'pagination',
    ThyPaginationComponent: 'pagination',
    DEFAULT_RANGE_COUNT: 'pagination',
    PaginationDefaultConfig: 'pagination',
    ThyPaginationConfig: 'pagination',
    THY_PAGINATION_CONFIG: 'pagination',
    ThyPaginationModule: 'pagination',
    PaginationTotalCountFormat: 'pagination',
    ThyPopoverModule: 'popover',
    thyPopoverAnimations: 'popover',
    ThyPopoverContainerComponent: 'popover',
    ThyPopoverRef: 'popover',
    ThyInternalPopoverRef: 'popover',
    ThyPopoverConfig: 'popover',
    THY_POPOVER_DEFAULT_CONFIG: 'popover',
    THY_POPOVER_DEFAULT_CONFIG_PROVIDER: 'popover',
    ThyPopoverDirective: 'popover',
    popoverUpperOverlayOptions: 'popover',
    ThyPopover: 'popover',
    NewClientRect: 'positioning',
    PlacementTypes: 'positioning',
    PositioningOptions: 'positioning',
    defaultPositioningOptions: 'positioning',
    ThyPositioningService: 'positioning',
    ThyParentProgress: 'progress',
    THY_PROGRESS_COMPONENT: 'progress',
    ThyProgressBarComponent: 'progress',
    ThyProgressTypes: 'progress',
    ThyStackedValue: 'progress',
    ThyProgressComponent: 'progress',
    ThyProgressModule: 'progress',
    ThyPropertyOperationGroupComponent: 'property-operation',
    ThyPropertyOperationModule: 'property-operation',
    ThyPropertyOperationComponent: 'property-operation',
    ThyRadioButtonComponent: 'radio',
    ThyRadioGroupComponent: 'radio',
    ThyRadioModule: 'radio',
    ThyRadioComponent: 'radio',
    ThyRasterModule: 'raster',
    ThyColEmbeddedProperty: 'raster',
    ThyColDirective: 'raster',
    ThyRowJustify: 'raster',
    ThyRowAlign: 'raster',
    ThyRowDirective: 'raster',
    ThyResultComponent: 'result',
    ThyResultModule: 'result',
    SelectMode: 'select',
    ThyCustomSelectTriggerType: 'select',
    SELECT_PANEL_MAX_HEIGHT: 'select',
    SELECT_OPTION_MAX_HEIGHT: 'select',
    SELECT_OPTION_GROUP_MAX_HEIGHT: 'select',
    SELECT_PANEL_PADDING_TOP: 'select',
    OptionValue: 'select',
    ThySelectCustomComponent: 'select',
    ThySelectModule: 'select',
    ThySelectComponent: 'select',
    ThyFormCheckBaseComponent: 'shared',
    ThyAutofocusDirective: 'shared',
    ThyContextMenuDirective: 'shared',
    ThyCtrlEnterDirective: 'shared',
    ThyDragDropDirective: 'shared',
    ThyEnterDirective: 'shared',
    ThyScrollDirective: 'shared',
    ThyShowDirective: 'shared',
    ThyStopPropagationDirective: 'shared',
    ThyTranscludeDirective: 'shared',
    ThySelectOptionGroupComponent: 'shared',
    ThyListLayout: 'shared',
    ThyListOptionComponent: 'shared',
    ThyOptionModule: 'shared',
    ThyOptionGroupComponent: 'shared',
    ThyOptionSelectionChangeEvent: 'shared',
    ThyOptionVisibleChangeEvent: 'shared',
    ThyOptionComponent: 'shared',
    IThyOptionParentComponent: 'shared',
    IThyOptionGroupComponent: 'shared',
    IThyListOptionParentComponent: 'shared',
    THY_OPTION_PARENT_COMPONENT: 'shared',
    THY_OPTION_GROUP_COMPONENT: 'shared',
    THY_LIST_OPTION_PARENT_COMPONENT: 'shared',
    SelectOptionBase: 'shared',
    ThySelectCommonModule: 'shared',
    SelectControlSize: 'shared',
    ThySelectControlComponent: 'shared',
    ThySharedModule: 'shared',
    ThySkeletonModule: 'skeleton',
    ThySkeletonComponent: 'skeleton',
    ThySkeletonAvatarComponent: 'skeleton',
    ThySkeletonBulletListComponent: 'skeleton',
    ThySkeletonListComponent: 'skeleton',
    ThySkeletonParagraphComponent: 'skeleton',
    ThySkeletonTitleComponent: 'skeleton',
    ThyDrawerContainerDirective: 'slide',
    thySlideAnimations: 'slide',
    ThySlideBodySectionComponent: 'slide',
    ThySlideBodyComponent: 'slide',
    ThySlideContainerComponent: 'slide',
    ThySlideFooterComponent: 'slide',
    ThySlideHeaderComponent: 'slide',
    ThySlideLayoutComponent: 'slide',
    ThySlideRef: 'slide',
    ThyInternalSlideRef: 'slide',
    ThySlideFromTypes: 'slide',
    ThySlideMode: 'slide',
    ThySlideConfig: 'slide',
    ThySlideOption: 'slide',
    THY_SLIDE_DEFAULT_CONFIG: 'slide',
    slideUpperOverlayOptions: 'slide',
    slideDefaultConfigValue: 'slide',
    THY_SLIDE_DEFAULT_CONFIG_PROVIDER: 'slide',
    ThySlideModule: 'slide',
    ThySlideService: 'slide',
    ThySliderType: 'slider',
    ThySliderComponent: 'slider',
    ThySliderModule: 'slider',
    ThyStatisticColorType: 'statistic',
    ThyStatisticShape: 'statistic',
    ThyStatisticSizes: 'statistic',
    ThyStatisticTitlePosition: 'statistic',
    ThyStatisticComponent: 'statistic',
    ThyStatisticModule: 'statistic',
    ThyStepHeaderComponent: 'stepper',
    IThyStepperComponent: 'stepper',
    THY_STEPPER_COMPONENT: 'stepper',
    ThyStepComponent: 'stepper',
    ThyStepperNextDirective: 'stepper',
    ThyStepperPreviousDirective: 'stepper',
    ThyStepperComponent: 'stepper',
    ThyStepperModule: 'stepper',
    ActionState: 'store',
    DecoratorActionOptions: 'store',
    Action: 'store',
    EntityStoreOptions: 'store',
    EntityAddOptions: false,
    EntityState: 'store',
    EntityStore: 'store',
    RootStoreModule: 'store',
    FeatureStoreModule: 'store',
    ThyStoreModule: 'store',
    StorePlugin: 'store',
    ReduxDevtoolsInstance: 'store',
    tinyStateVersion: 'store',
    ReduxDevtoolsPlugin: 'store',
    ReferencesIdDictionary: 'store',
    OnCombineRefsFn: 'store',
    OnCombineRefs: 'store',
    StoreInstanceMap: 'store',
    RootStore: 'store',
    Store: 'store',
    META_KEY: 'store',
    ROOT_STATE_TOKEN: 'store',
    FEATURE_STATE_TOKEN: 'store',
    StoreMetaInfo: 'store',
    findAndCreateStoreMetadata: 'store',
    ThyStrengthComponent: 'strength',
    ThyStrengthModule: 'strength',
    ThySwitchComponent: 'switch',
    ThySwitchModule: 'switch',
    dispatchEvent: 'testing',
    dispatchFakeEvent: 'testing',
    dispatchKeyboardEvent: 'testing',
    dispatchMouseEvent: 'testing',
    dispatchTouchEvent: 'testing',
    patchElementFocus: 'testing',
    createMouseEvent: 'testing',
    createTouchEvent: 'testing',
    createKeyboardEvent: 'testing',
    createFakeEvent: 'testing',
    bypassSanitizeProvider: 'testing',
    defaultInlineIconSet: 'testing',
    defaultSvgHtml: 'testing',
    injectDefaultSvgIconSet: 'testing',
    typeInElement: 'testing',
    canChangeValue: 'time-picker',
    canChangeHours: 'time-picker',
    canChangeMinutes: 'time-picker',
    canChangeSeconds: 'time-picker',
    getControlsValue: 'time-picker',
    timePickerControls: 'time-picker',
    TIMEPICKER_CONTROL_VALUE_ACCESSOR: 'time-picker',
    ThyTimePickerComponent: 'time-picker',
    TimePickerConfig: 'time-picker',
    Time: 'time-picker',
    TimePickerControls: 'time-picker',
    TimePickerComponentState: 'time-picker',
    TimeChangeSource: 'time-picker',
    TimeChangeEvent: 'time-picker',
    ThyTimePickerModule: 'time-picker',
    TimePickerState: 'time-picker',
    initialState: 'time-picker',
    ThyTimePickerStore: 'time-picker',
    isValidDate: 'time-picker',
    isValidLimit: 'time-picker',
    parseHours: 'time-picker',
    parseMinutes: 'time-picker',
    parseSeconds: 'time-picker',
    parseTime: 'time-picker',
    changeTime: 'time-picker',
    setTime: 'time-picker',
    createDate: 'time-picker',
    padNumber: 'time-picker',
    isHourInputValid: 'time-picker',
    isMinuteInputValid: 'time-picker',
    isSecondInputValid: 'time-picker',
    isInputLimitValid: 'time-picker',
    isInputValid: 'time-picker',
    thyColor: 'timeline',
    ThyTimelineItemComponent: 'timeline',
    thyTimeMode: 'timeline',
    thyTimeModes: 'timeline',
    ThyTimelineComponent: 'timeline',
    ThyTimelineModule: 'timeline',
    ThyTimelineService: 'timeline',
    ThyTooltipPosition: 'tooltip',
    ThyTooltipVisibility: 'tooltip',
    ThyTooltipOptions: 'tooltip',
    DEFAULT_TOOLTIP_OPTIONS: 'tooltip',
    thyTooltipAnimations: 'tooltip',
    ThyTooltipComponent: 'tooltip',
    ThyTooltipConfig: 'tooltip',
    THY_TOOLTIP_DEFAULT_CONFIG_TOKEN: 'tooltip',
    thyTooltipDefaultConfig: 'tooltip',
    THY_TOOLTIP_DEFAULT_CONFIG_PROVIDER: 'tooltip',
    ThyTooltipDirective: 'tooltip',
    ThyTooltipModule: 'tooltip',
    TooltipService: 'tooltip',
    ThyTransferListComponent: 'transfer',
    ThyTransferComponent: 'transfer',
    Direction: 'transfer',
    TransferDirection: 'transfer',
    ThyTransferData: 'transfer',
    ThyTransferModel: 'transfer',
    ThyTransferItem: 'transfer',
    ThyTransferSelectEvent: 'transfer',
    ThyTransferChangeEvent: 'transfer',
    ThyTransferDragEvent: 'transfer',
    InnerTransferDragEvent: 'transfer',
    InnerTransferList: 'transfer',
    ThyTransferModule: 'transfer',
    ThyTreeNode: 'tree',
    ThyTreeNodeComponent: 'tree',
    ThyTreeReplaceRegionComponent: 'tree',
    ThyTreeNodeCheckState: 'tree',
    ThyTreeNodeData: 'tree',
    ThyTreeEmitEvent: 'tree',
    ThyTreeDragDropEvent: 'tree',
    ThyTreeIcons: 'tree',
    ThyTreeComponent: 'tree',
    ThyTreeModule: 'tree',
    ThyTreeService: 'tree',
    ThyTreeFormatEmitEvent: 'tree',
    ThyTreeSelectModule: 'tree-select',
    ThyTreeSelectNodesComponent: 'tree-select',
    ThyTreeSelectNode: 'tree-select',
    ThyTreeSelectType: 'tree-select',
    ThyTreeSelectComponent: 'tree-select',
    System: 'types',
    ENV: 'types',
    PR: 'types',
    mermaid: 'types',
    liteMarked: 'types',
    $: 'types',
    katex: 'types',
    jasmine: 'types',
    Id: 'types',
    SafeAny: 'types',
    Dictionary: 'types',
    NumericDictionary: 'types',
    IndexableObject: false,
    PaginationInfo: 'types',
    MIME_Map: 'uploader',
    ThyFileDropComponent: 'uploader',
    ThyFileSelectComponent: 'uploader',
    ThyUploaderModule: 'uploader',
    ThyUploadStatus: 'uploader',
    ThyUploadResponse: 'uploader',
    ThyUploadFile: 'uploader',
    ThyUploadFilesOptions: 'uploader',
    ThyUploaderService: 'uploader',
    mimeTypeConvert: 'uploader',
    match: 'util',
    isDocument: 'util',
    isElement: 'util',
    getWindow: 'util',
    getElementOffset: 'util',
    getOffset: 'util',
    getElementOuterHeight: 'util',
    ElementSelector: 'util',
    getHTMLElementBySelector: 'util',
    isInputOrTextarea: 'util',
    isWindow: 'util',
    SimpleRect: 'util',
    getContainerRect: 'util',
    getStyleAsText: 'util',
    inputValueToBoolean: 'util',
    isUndefined: 'util',
    isNull: 'util',
    isUndefinedOrNull: 'util',
    isArray: 'util',
    isEmpty: 'util',
    isString: 'util',
    isNumber: 'util',
    isObject: 'util',
    isFunction: 'util',
    isDate: 'util',
    coerceArray: 'util',
    get: 'util',
    set: 'util',
    isBoolean: 'util',
    fromArray: 'util',
    htmlElementIsEmpty: 'util',
    hexToRgb: 'util',
    formatDate: 'util',
    clamp: 'util',
    keyBy: 'util',
    indexKeyBy: 'util',
    camelCase: 'util',
    generateRandomStr: 'util',
    isTemplateRef: 'util',
    isHTMLElement: 'util',
    isElementRef: 'util',
    coerceBooleanProperty: 'util',
    FunctionProp: 'util',
    coerceNumberValue: 'util',
    coerceCssPixelValue: 'util',
    valueFunctionProp: 'util',
    shallowEqual: 'util',
    EntityMoveOptions: 'util',
    ProducerOptions: 'util',
    Producer: 'util',
    produce: 'util',
    PREFIX: 'util',
    warn: 'util',
    createWarnDeprecation: 'util',
    warnDeprecation: 'util',
    log: 'util',
    ArrayInferExtract: 'util',
    ArrayAlwaysExtract: 'util',
    ReferenceObjectExtract: 'util',
    ReferenceExtractNames: 'util',
    ReferenceArrayExtractNames: 'util',
    ReferenceExtractAllowNames: 'util',
    ReferenceArrayExtractAllowNames: 'util',
    ReferenceExtractAllowKeys: 'util',
    ReferenceArrayExtractAllowKeys: 'util',
    mergeReferences: 'util',
    buildReferencesKeyBy: 'util',
    ThemeInterface: 'util',
    ThemeKeysConstant: 'util',
    ThemesConstant: 'util',
    TinyDateCompareGrain: 'util',
    WeekDayIndex: 'util',
    TinyDateType: 'util',
    sortRangeValue: 'util',
    TinyDate: 'util',
    ThyVoteSizes: 'vote',
    ThyVoteType: 'vote',
    ThyVoteLayout: 'vote',
    ThyVoteComponent: 'vote',
    ThyVoteModule: 'vote'
};

export class ImportEntryPointClassifyMigration extends MigrationBase {
    readonly specifyGroup = {
        EntityAddOptions: 'store',
        IndexableObject: 'types',
        InputSize: 'input',
        NgxTethysModule: '',
        VERSION: '',
        helpers: 'util',
        dom: 'util',
        keycodes: 'util',
        references: 'util'
    };
    readonly relation = Object.assign({}, NAME_PACKAGE_RELATION, this.specifyGroup);

    run() {
        const importDeclarationList: ts.ImportDeclaration[] = this.getImportDeclarationList().filter(
            item => this.getImportDeclarationPackageName(item) === 'ngx-tethys'
        );
        if (!importDeclarationList.length) {
            return;
        }
        const contentChangeList: ContentChange[] = [];
        for (const importDeclaration of importDeclarationList) {
            const newImportDeclarationSourceGroup: { [name: string]: string[] } = {};
            const warningList: string[] = [];
            this.getImportDeclarationImportSpecifierList(importDeclaration).forEach(item => {
                if (this.relation[item.name.text] !== undefined) {
                    const list = newImportDeclarationSourceGroup[this.relation[item.name.text]] || [];
                    list.push(item.name.text);
                    newImportDeclarationSourceGroup[this.relation[item.name.text]] = list;
                } else {
                    warningList.push(item.name.text);
                }
            });
            if (Object.entries(newImportDeclarationSourceGroup).length) {
                contentChangeList.push(
                    new ReplaceContentChange(
                        importDeclaration.getStart(),
                        importDeclaration.getWidth(),
                        Object.entries(newImportDeclarationSourceGroup)
                            .map(([key, value], index) =>
                                this.printNodeContent(
                                    this.createImportDeclaration(value, ['ngx-tethys', key].filter(a => !!a).join('/'), {
                                        content:
                                            warningList.length && !index
                                                ? ` WARN: ${warningList.join(',')}没有找到对应的二级入口点`
                                                : undefined
                                    })
                                )
                            )
                            .join('\n')
                    )
                );
            } else if (warningList.length) {
                contentChangeList.push(
                    new ReplaceContentChange(
                        importDeclaration.getStart(),
                        importDeclaration.getWidth(),
                        `// WARN: ${warningList.join(',')}没有找到对应的二级入口点`
                    )
                );
            }
        }
        if (!contentChangeList.length) {
            return;
        }
        this.updateFileService.change(this.sourceFile.fileName, contentChangeList);
    }
}
