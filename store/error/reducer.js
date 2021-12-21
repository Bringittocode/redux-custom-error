import { ERROR } from "./action";

const message = {
    message: "something went wrong",
    level: "fatal",
    show: false,
    id: 'default'
};

export default function errorMessage(state = message, action) {
    switch (action.type) {
        case ERROR:
            return {
                message: action.message,
                level: action.level,
                show: action.show,
                id: action.id,
            };
        
        default:
            return state;
            
    }
}
