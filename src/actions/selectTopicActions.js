export const actions=(type)=>{
    alert('now selected topic is: '+ type.topic+ ' number of topic: '+type.num);
    return{
        type: 'page',
        payload: type.topic
    }
};
