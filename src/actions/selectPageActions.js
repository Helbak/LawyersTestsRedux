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
    if (type !== 'null') {
        alert('Перейти до тестів по темі: ' + type);
        return {
            type: 'page',
            payload: 'asker'
        }
    }
};
