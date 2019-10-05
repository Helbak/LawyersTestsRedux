export const nextQuestion = (type) => {
    if (type.hasOwnProperty('turn')) {
        console.log('type.turn' + type.turn);
        if (type.numQuestion === null) {
            return {
                type: 'question',
                payload: 0
            }
        }
        ;
        if (type.turn === 'back') {
            return {
                type: 'question',
                payload: type.numQuestion - 1
            }
        }
        if (type.numQuestion !== null) {
            return {
                type: 'question',
                payload: type.numQuestion + 1
            }
        }
    }
    if (type.hasOwnProperty('color')) {
        console.log('type.position___' + type.color);
        switch (type.color) {
            case false:
                return {
                    type: type.position,
                    payload: {
                        position: type.position,
                        color: "red",
                        border: "3px solid red"
                    }
                }
                break;
            case true:
                return {
                    type: type.position,
                    payload: {
                        position: type.position,
                        color: "blue",
                        border: "3px solid blue"
                    }
                }
                break;
            case 'grey':
                return {
                    type: type.position,
                    payload: {
                        position: type.position,
                        color: "black",
                        border: "3px solid #777777",
                        hover: {
                            background: '#777777',
                            color: 'yellow',
                            border: '2px solid yellow'
                        }
                    }
                }
                break;
        }
    }
};
