export const actions=(type)=>{
     // alert('now selected topic is: '+ type.topic+ ' number of topic: '+type.numTopic);
    return{
        type: 'topic',
        payload: type.topic
    }
};
