//Fullscreen actions types
export const APPLY_FULLSCREEN = 'SET_FULLSCREEN';

//Fullscreen actions
export const applyFullscreen = (bool) => {
    return {
        type: APPLY_FULLSCREEN,
        payload: bool
    }
}
