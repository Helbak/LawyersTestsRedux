export const actions=(type)=>{
    return{
        type: 'topic',
        payload: {
            topic: type.topic,
            numTopic: type.numTopic
        }
    }
};
