export default class StartReducer{
    constructor(){
        this.page = 'topics'
    }
    getPage = function () {
        return this.page
    }
    setPage = function (page) {
        this.page = page;
    }
}
