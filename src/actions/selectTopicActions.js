export const actions=(type)=>{
    // alert('now selected topic is: '+ type.topic+ ' number of topic: '+type.num);
    return{
        type: 'topic',
        payload: type.topic
    }
};
