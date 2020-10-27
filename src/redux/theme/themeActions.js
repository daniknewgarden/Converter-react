//Action types
export const APPLY_THEME = 'APPLY_THEME';

//Action creators
export const applyTheme = (theme) => {
    return {
        type: APPLY_THEME,
        payload: theme
    }
}
