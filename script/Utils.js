export function isMobile() {
    let result = true;
    let displayWidth = window.screen.width;
    let displayHeight = window.screen.height;

    if (!(displayHeight < 900 && displayWidth < 600)) {
        result = false;
    }

    return result;
}