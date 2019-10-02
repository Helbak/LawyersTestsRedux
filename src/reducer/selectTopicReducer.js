export default function (state=null, action) {
    switch (action.type) {
        case 'topic':
            return action.payload;
            break;
        default: return state;
    }
}
