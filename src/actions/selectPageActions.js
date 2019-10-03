export const selectPage=(type)=> {
    if (type === null) {
        alert('оберіть тему тестів ');
        return {
            type: 'page',
            payload: 'start'
        }
    }
    if(type==='start'){
        return {
            type: 'page',
            payload: 'start'
        }
    }
    if (type === 'restart') {
        return {
            type: 'question',
            payload: 0
        }
    }
    if (type !== 'null') {
        return {
            type: 'page',
            payload: 'asker'
        }
    }
};
