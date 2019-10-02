export default function (state=null, action) {
    switch (action.type) {
        case 'red':
            return 'red';
            break;
        case 'blue':
            return 'blue';
            break;
        default: return state;
    }
}
