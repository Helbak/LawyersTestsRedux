export default function (state=null, action) {
    switch (action.type) {
        case 'fourthOption':
            return action.payload;
            break;
        default: return state;
    }
}
