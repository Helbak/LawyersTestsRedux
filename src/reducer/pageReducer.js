export default function (state=null, action) {
    switch (action.type) {
        case 'page':
            return action.payload;
            break;
        default: return state;
    }
}
