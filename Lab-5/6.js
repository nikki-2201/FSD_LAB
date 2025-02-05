const eventEmitter=require('events');
class EventManagement extends eventEmitter{
    constructor(){
        super();
    }
    start(){
        this.emit('start');
    }
    inprogress(){
        this.emit('inprogress');
    }
    completed(){
        this.emit('completed');
    }
}
module.exports=EventManagement;