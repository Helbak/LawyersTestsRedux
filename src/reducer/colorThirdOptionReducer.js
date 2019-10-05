export default function (state=null, action) {
    switch (action.type) {
        case 'thirdOption':
            return action.payload;
            break;
        default: return state;
    }
}
