export const selectQuestion=(type)=>{
if(type===null){
    return {
        type: 'question',
        payload: 0
        }
};
    if(type!==null) {
        return {
            type: 'question',
            payload: type + 1
            }
        }
};
