//Device actions types
export const APPLY_MOBILE = 'APPLY_MOBILE';
export const APPLY_TABLET = 'APPLY_TABLET';
export const APPLY_DESKTOP = 'APPLY_DESKTOP';

//Device actions
export const applyMobile = (bool) => {
    return {
        type: APPLY_MOBILE,
        payload: bool
    }
}

export const applyTablet = (bool) => {
    return {
        type: APPLY_TABLET,
        payload: bool
    }
}

export const applyDesktop = (bool) => {
    return {
        type: APPLY_DESKTOP,
        payload: bool
    }
}

