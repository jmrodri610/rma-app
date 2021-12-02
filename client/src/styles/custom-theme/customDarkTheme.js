import { createTheme } from '@material-ui/core/styles';

import * as kdColors from './kdColors';

const muiDarkTheme = createTheme({
    typography: {
        fontFamily: 'Lato',

        htmlFontSize: 16,
        fontSize: 14,

        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightBold: 700,

        h1: {
            fontFamily: 'Lato',
            fontWeight: 900,
            fontSize: '6.113rem',
            lineHeight: '7.375rem',
            letterSpacing: '-0.094em',
        },
        h2: {
            fontFamily: 'Lato',
            fontWeight: 900,
            fontSize: '3.819rem',
            lineHeight: '4.625rem',
            letterSpacing: '-0.031em',
        },
        h3: {
            fontFamily: 'Lato',
            fontWeight: 900,
            fontSize: '3.05rem',
            lineHeight: '3.75rem',
            letterSpacing: '0em',
        },
        h4: {
            fontFamily: 'Lato',
            fontWeight: 900,
            fontSize: '2.163rem',
            lineHeight: '2.688rem',
            letterSpacing: '0.016em',
        },
        h5: {
            fontFamily: 'Lato',
            fontWeight: 700,
            fontSize: '1.544rem',
            lineHeight: '1.875rem',
            letterSpacing: '0rem',
        },
        h6: {
            fontFamily: 'Lato',
            // fontWeight: 700,
            fontWeight: 500,
            fontSize: '1.288rem',
            lineHeight: '1.563rem',
            letterSpacing: '0.016em',
        },
        subtitle1: {
            fontFamily: 'Lato',
            fontWeight: 400,
            fontSize: '1.044rem',
            lineHeight: '1.5rem',
            letterSpacing: '0.009em',
        },
        subtitle2: {
            fontFamily: 'Lato',
            fontWeight: 400,
            fontSize: '0.913rem',
            lineHeight: '1.5rem',
            letterSpacing: '0.006em',
        },
        body1: {
            fontFamily: 'Lato',
            fontWeight: 400,
            fontSize: '1.044rem',
            lineHeight: '1.75rem',
            letterSpacing: '0.031em',
        },
        body2: {
            fontFamily: 'Lato',
            // fontWeight: 400,
            fontWeight: 300,
            fontSize: '0.913rem',
            lineHeight: '1.25rem',
            letterSpacing: '0.014em',
        },
        button: {
            fontFamily: 'Lato',
            fontWeight: 900,
            fontSize: '0.913rem',
            lineHeight: '1rem',
            letterSpacing: '0.078em',
            textTransform: 'uppercase',
        },
        caption: {
            fontFamily: 'Lato',
            fontWeight: 400,
            fontSize: '0.794rem',
            lineHeight: '1rem',
            letterSpacing: '0.025em',
        },
        overline: {
            fontFamily: 'Lato',
            fontWeight: 300,
            fontSize: '0.781rem',
            lineHeight: '1rem',
            letterSpacing: '0.125em',
            textTransform: 'uppercase',
        },
    },
    palette: {
        type: 'dark',
        common: {
            black: kdColors.BLACK,
            white: kdColors.WHITE,
        },
        primary: {
            // TODO: falta el light y el dark
            // light:
            main: kdColors.PRIMARY_KUBIK,
            // dark:
            50: kdColors.PRIMARY_050,
            100: kdColors.PRIMARY_100,
            200: kdColors.PRIMARY_200,
            300: kdColors.PRIMARY_300,
            400: kdColors.PRIMARY_400,
            500: kdColors.PRIMARY_500,
            600: kdColors.PRIMARY_600,
            700: kdColors.PRIMARY_700,
            800: kdColors.PRIMARY_800,
            contrastText: kdColors.PRIMARY_LIGHT,
        },
        secondary: {
            // TODO: falta el light y el dark
            // light:
            main: kdColors.SECONDARY_KUBIK,
            // dark: kdColors.SECONDARY_700,
            50: kdColors.SECONDARY_050,
            100: kdColors.SECONDARY_100,
            200: kdColors.SECONDARY_200,
            300: kdColors.SECONDARY_300,
            400: kdColors.SECONDARY_400,
            500: kdColors.SECONDARY_500,
            700: kdColors.SECONDARY_700,
            800: kdColors.SECONDARY_800,
            900: kdColors.SECONDARY_900,
            contrastText: kdColors.PRIMARY_KUBIK,
        },
        error: {
            main: kdColors.SEMANTIC_ERROR,
        },
        warning: {
            main: kdColors.SEMANTIC_ALERT,
        },
        info: {
            main: kdColors.SEMANTIC_INFO,
        },
        success: {
            main: kdColors.SEMANTIC_SUCCESS,
        },
        // Default values for greys
        // grey: {
        //   50: '#fafafa',
        //   100: '#f5f5f5',
        //   200: '#eeeeee',
        //   300: '#e0e0e0',
        //   400: '#bdbdbd',
        //   500: '"#9e9e9e',
        //   600: '#757575',
        //   700: '#616161',
        //   800: '#424242',
        //   900: '#212121',
        //   A100: '#d5d5d5',
        //   A200: '#aaaaaa',
        //   A400: '#303030',
        //   A700: '#616161'
        // },
        text: {
            primary: kdColors.PRIMARY_LIGHT,
            secondary: kdColors.SECONDARY_KUBIK,
            disabled: kdColors.PRIMARY_DISABLED,
            hint: kdColors.SEMANTIC_INFO,
            icon: kdColors.PRIMARY_LIGHT,
        },
        divider: kdColors.SECONDARY_KUBIK_12,

        background: {
            paper: kdColors.BACKGROUND,
            default: kdColors.BACKGROUND,
        },
        action: {
            active: '#eff3f4',
            hover: 'rgba(255, 255, 255, 0.08)',
            hoverOpacity: 0.08,
            selected: 'rgba(255, 255, 255, 0.16)',
            selectedOpacity: 0.16,
            disabled: '#9e9e9e',
            disabledBackground: 'rgba(255, 255, 255, 0.12)',
            disabledOpacity: 0.38,
            focus: 'rgba(255, 255, 255, 0.24)',
            focusOpacity: 0.24,
            activatedOpacity: 0.24,
        },
    },
    shape: {
        borderRadius: '1.375rem',
    },
    // Breakpoints: values by default, but can be changed
    // breakpoints: {
    //   values: {
    //     xs: 0,
    //     sm: 600,
    //     md: 960,
    //     lg: 1280,
    //     xl: 1920,
    //   },
    // },
    overrides: {
        // Standard textFields
        MuiFormLabel: {
            root: {
                color: kdColors.PRIMARY_DISABLED,
                '&$focused': {
                    color: kdColors.PRIMARY_DISABLED,
                },
            },
            colorSecondary: {
                color: kdColors.PRIMARY_DISABLED,
                '&$focused': {
                    color: kdColors.PRIMARY_DISABLED,
                },
            },
        },
        MuiInput: {
            underline: {
                '&:after': {
                    borderBottomColor: kdColors.SECONDARY_KUBIK,
                },
                '&:hover:not($disabled):not($focused):not($error):before': {
                    borderBottomColor: kdColors.SECONDARY_KUBIK,
                },
                '&$disabled:before': {
                    borderBottomStyle: 'none',
                },
            },
        },
        // Outlined textFields
        MuiOutlinedInput: {
            root: {
                borderRadius: '0.25rem',
                '& fieldset': {
                    borderColor: kdColors.PRIMARY_LIGHT,
                },
                '&:hover:not($disabled) fieldset': {
                    borderColor: kdColors.SECONDARY_KUBIK,
                    borderWidth: '2px',
                },
                '&$disabled $notchedOutline': {
                    borderColor: kdColors.BLACK_DISABLED_32,
                },
                '&$multiline': {
                    padding: 0,
                },
                '&$focused $notchedOutline': {
                    borderColor: `0.5px solid ${kdColors.PRIMARY_LIGHT}`,
                    borderWidth: '0.5px',
                },
            },
        },

        // Filled textFields
        MuiFilledInput: {
            root: {
                borderTopRightRadius: '0.25rem',
                borderTopLeftRadius: '0.25rem',
                backgroundColor: kdColors.PRIMARY_KUBIK_08,
                '&:hover': {
                    backgroundColor: kdColors.PRIMARY_KUBIK_08,
                },
                '&:hover:not($disabled)': {
                    backgroundColor: kdColors.GREYISH_BROWN_08,
                    '& fieldset': {
                        borderColor: kdColors.SECONDARY_KUBIK,
                    },
                },
                '&$focused:not($disabled)': {
                    backgroundColor: kdColors.PRIMARY_KUBIK_08,
                },
            },
            input: {
                '&$disabled': {
                    backgroundColor: kdColors.BACKGROUND_OVERLAY_PRIMARY_KUBIK_08,
                },
            },
            underline: {
                '&:after': {
                    borderBottomColor: kdColors.SECONDARY_KUBIK,
                },
                '&:hover:not($disabled):before': {
                    borderBottomColor: kdColors.SECONDARY_KUBIK,
                    borderWidth: '2px',
                },
                '&$disabled:before': {
                    borderBottomStyle: 'none',
                },
            },
        },

        // Buttons
        MuiButton: {
            // Container Button
            contained: {
                '&$disabled': {
                    backgroundColor: kdColors.WHITE_38,
                },
            },
            // Container Button color secondary
            containedSecondary: {
                '&:focus': {
                    backgroundColor: kdColors.PRIMARY_KUBIK_OVERLAY_24,
                },
                '&:hover': {
                    backgroundColor: kdColors.SECONDARY_700,
                    '&:disabled': {
                        backgroundColor: `${kdColors.PRIMARY_INACTIVE}`,
                        color: kdColors.PRIMARY_DISABLED,
                    },
                },
                '&:disabled': {
                    backgroundColor: `${kdColors.PRIMARY_INACTIVE}`,
                    color: kdColors.PRIMARY_DISABLED,
                },
            },
            // Outlines button
            outlined: {
                border: `1px solid ${kdColors.PRIMARY_LIGHT}`,
                '&$disabled': {
                    border: `1px solid ${kdColors.PRIMARY_INACTIVE}`,
                    color: kdColors.PRIMARY_INACTIVE,
                },
                '&:hover': {
                    backgroundColor: kdColors.PRIMARY_700_04,
                    color: kdColors.PRIMARY_DISABLED,
                },
                '&:focus': {
                    color: kdColors.PRIMARY_DISABLED,
                },
            },
            // Text Button color secondary
            textSecondary: {
                '&$disabled': {
                    backgroundColor: kdColors.PRIMARY_LIGHT_12,
                },
                '&:hover': {
                    backgroundColor: kdColors.SECONDARY_700_04,
                },
                // base color for the ripple of the text button secondary
                '& > span .MuiTouchRipple-ripple': {
                    color: kdColors.SECONDARY_700_12,
                },
            },
        },

        // FAB buttons
        MuiFab: {
            '&:hover': {
                cursor: 'pointer',
            },
            primary: {
                '&:hover': {
                    backgroundColor: kdColors.PRIMARY_KUBIK_OVERLAY_08,
                    '&:disabled': {
                        backgroundColor: `${kdColors.PRIMARY_INACTIVE}`,
                        color: kdColors.PRIMARY_DISABLED,
                    },
                },
                '&:focus': {
                    backgroundColor: kdColors.PRIMARY_KUBIK_OVERLAY_24,
                },
                '&:disabled': {
                    backgroundColor: `${kdColors.PRIMARY_INACTIVE}`,
                    color: kdColors.PRIMARY_DISABLED,
                },
            },
            secondary: {
                '&:hover': {
                    backgroundColor: kdColors.SECONDARY_700,
                    color: kdColors.PRIMARY_KUBIK,
                    '&:disabled': {
                        backgroundColor: `${kdColors.PRIMARY_INACTIVE}`,
                        color: kdColors.PRIMARY_DISABLED,
                    },
                },
                '&:focus': {
                    backgroundColor: kdColors.SECONDARY_KUBIK_OVERLAY_24,
                    '&:disabled': {
                        backgroundColor: `${kdColors.PRIMARY_INACTIVE}`,
                        color: kdColors.PRIMARY_DISABLED,
                    },
                },
                '&:disabled': {
                    backgroundColor: `${kdColors.PRIMARY_INACTIVE}`,
                    color: kdColors.PRIMARY_DISABLED,
                },
            },
        },

        // Toggle Buttons
        MuiToggleButton: {
            root: {
                color: kdColors.SECONDARY_NEUTRAL_2_54,
                border: 'none',
                // borderRadius: '1.5rem',
                borderRadius: 'none',

                '&$disabled': {
                    color: kdColors.PRIMARY_DISABLED,
                    backgroundColor: kdColors.BACKGROUND,
                },

                '&$selected': {
                    color: kdColors.SECONDARY_KUBIK,
                    backgroundColor: kdColors.PRIMARY_700_12,
                    '&:hover': {
                        backgroundColor: kdColors.BLACK_04,
                    },
                },

                '&:hover:not($selected)': {
                    // TODO: preguntar por este backgroundColor:
                    //       si se deja como en Zepplin con BLACK_04 no se ve
                    //       como propuesta es poner el mismo color que el
                    //       fondo del selected
                    // backgroundColor: kdColors.BLACK_04
                    backgroundColor: kdColors.PRIMARY_700_12,
                },

                // base color for the ripple of the text button secondary
                '& > span .MuiTouchRipple-ripple': {
                    color: kdColors.SECONDARY_700,
                },
            },
        },
        MuiToggleButtonGroup: {
            root: {
                backgroundColor: kdColors.BLACK_04,
            },
        },

        // Base color for ripples  (¡FOR ALL RIPPLES!!!)
        MuiTouchRipple: {
            ripple: {
                color: kdColors.WHITE,
            },
        },

        // Label color of the thumb of the slider
        MuiSlider: {
            colorSecondary: {
                color: kdColors.SECONDARY_700,
            },
            rail: {
                opacity: '0.14',
            },
            valueLabel: {
                left: 'auto',
                '& > span > span': {
                    color: kdColors.PRIMARY_KUBIK,
                },
            },
        },

        // Color for the Linear Progress (secondary)
        MuiLinearProgress: {
            colorSecondary: {
                backgroundColor: kdColors.SECONDARY_700_24,
            },
            barColorSecondary: {
                backgroundColor: kdColors.SECONDARY_700,
            },
        },

        // Color for the radio buttons
        MuiRadio: {
            root: {
                color: kdColors.SECONDARY_700,
            },
            colorSecondary: {
                '&.Mui-checked:not($disabled)': {
                    color: kdColors.SECONDARY_700,
                },
            },
        },

        // Eliminate right border for the drawer and add shadow
        MuiDrawer: {
            paperAnchorDockedLeft: {
                borderRight: 'none',
                borderRadius: '2px',
                boxShadow:
                    '0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14)',
                // boxShadow: `0 1px 3px 0 ${kdColors.BLACK_02}, 0 2px 1px -1px ${kdColors.BLACK_12}, 0 1px 1px 0 ${kdColors.BLACK_14}`
            },
        },
        MuiList: {
            root: {
                maxHeight: '11.625rem',
            },
        },

        // Eliminate background color for the selected item of a list
        MuiListItem: {
            root: {
                '&$selected': {
                    backgroundColor: kdColors.BACKGROUND,
                    '&:hover': {
                        backgroundColor: kdColors.BACKGROUND,
                    },
                },
                '&$disabled': {
                    opacity: 1,
                },
            },
            button: {
                '&:hover': {
                    backgroundColor: `${kdColors.BACKGROUND} !important`,
                },
            },
        },

        // Date Picker
        MuiPickersToolbar: {
            toolbar: {
                backgroundColor: kdColors.PRIMARY_KUBIK,
            },
        },
        MuiPickersCalendarHeader: {
            dayLabel: {
                color: kdColors.PRIMARY_DISABLED,
            },
        },
        MuiPickersDay: {
            day: {
                color: kdColors.PRIMARY_LIGHT,
            },
            daySelected: {
                backgroundColor: kdColors.SECONDARY_KUBIK,
                color: kdColors.PRIMARY_KUBIK,

                '&:hover:not($selected)': {
                    backgroundColor: kdColors.SECONDARY_KUBIK,
                    color: kdColors.PRIMARY_KUBIK,
                },
            },
            dayDisabled: {
                color: kdColors.PRIMARY_KUBIK,
            },
            current: {
                color: kdColors.SECONDARY_KUBIK,
            },
        },
        MuiPickersYear: {
            yearSelected: {
                color: kdColors.SECONDARY_KUBIK,
            },
        },
        MuiPickersModal: {
            dialogRoot: {
                '& > div.MuiDialogActions-root > button.MuiButton-textPrimary': {
                    color: kdColors.SECONDARY_KUBIK,
                },
            },
        },

        // Expansion panel
        MuiExpansionPanelDetails: {
            root: {
                marginLeft: '4.5rem',
                padding: '0',
                paddingBottom: '0.6rem',
            },
        },
        MuiExpansionPanel: {
            root: {
                '&$expanded': {
                    margin: 0,
                    '&:before': {
                        opacity: 1,
                    },
                },
            },
        },
        MuiExpansionPanelSummary: {
            root: {
                height: '3.5rem',
                '&$expanded': {
                    minHeight: 0,
                },
            },
        },

        MuiAutocomplete: {
            listbox: {
                backgroundColor: kdColors.GREYISH_BROWN,
            },
            option: {
                /* background: 'yellow', */
                '&:hover': {
                    backgroundColor: kdColors.BLACK_80,
                },
            },
            paper: {
                backgroundColor: 'yellow',
                borderRadius: '4px',
            },
        },

        MuiPopover: {
            paper: {
                backgroundColor: kdColors.GREYISH_BROWN,
                borderRadius: '4px',
                /* marginTop: '3.5rem', */
                '&::-webkit-scrollbar': {
                    width: '2px',
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: kdColors.GREYISH_BROWN,
                },
                scrollbarColor: `${kdColors.GREYISH_BROWN} ${kdColors.GREYISH_BROWN}`,
                scrollbarWidth: 'none',
            },
        },
        MuiTooltip: {
            tooltip: {
                backgroundColor: kdColors.PRIMARY_INACTIVE,
                width: '6.125rem',
                height: '1.5rem',
                textAlign: 'center',
                borderRadius: '0.5rem',
                fontFamily: 'Lato',
                fontSize: '0.782rem',
                fontWeight: 'normal',
                fontStretch: 'normal',
                fontStyle: 'normal',
                lineHeight: 1.28,
                letterSpacing: '0.4px',
                color: kdColors.PRIMARY_LIGHT,
            },
        },
        MuiTabScrollButton: {
            root: {
                '&$disabled': {
                    opacity: 1,
                    color: kdColors.SECONDARY_NEUTRAL_2_54,
                },
                display: 'none',
            },
        },
        MuiSelect: {
            root: {
                '&$disabled': {
                    borderColor: kdColors.PRIMARY_INACTIVE,
                    borderStyle: 'solid',
                    borderWidth: '1px',
                    borderRadius: '4px',
                },
            },
            /*  select: {
                '&:focus': {
                    backgroundColor: 'none',
                },
            }, */
        },
        MuiChip: {
            outlined: {
                color: kdColors.PRIMARY_LIGHT,
                borderColor: kdColors.PRIMARY_LIGHT,
                backgroundColor: 'transparent',
                '$clickable&:hover, $clickable&:focus': {
                    backgroundColor: 'transparent',
                    color: kdColors.PRIMARY_DISABLED,
                },
            },
        },
        MuiTableCell: {
            root: {
                borderBottom: `1px solid ${kdColors.PRIMARY_INACTIVE}`,
            },
        },
    },
});

export default muiDarkTheme;
