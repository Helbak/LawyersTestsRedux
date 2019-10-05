export default function (state=null, action) {
    switch (action.type) {
        case 'secondOption':
            return action.payload;
            break;
        default: return state;
    }
}
