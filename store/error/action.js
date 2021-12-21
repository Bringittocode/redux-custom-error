export const ERROR = "ERROR";

export function error(message,level, show, id) {
    return {
        type: ERROR,
        message: message,
        level: level,
        show: show,
        id: id,
    };
}