export default function (state=null, action) {
    switch (action.type) {
        case 'question':
            return action.payload;
            break;
        default: return state;
    }
}
