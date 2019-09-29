export const actions=(typo)=>{
    // alert('now selected topic is: ');
    alert('now selected topic is: '+ typo.topic);
    return{
        type: 'Topic_Selected',
        payload: typo.topic
    }
};
