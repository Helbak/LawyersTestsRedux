export default function (state=null, action) {
    switch (action.type) {
        case 'firstOption':
            return action.payload;
            break;
        default: return state;
    }
}
