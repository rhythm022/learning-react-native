class Dispatcher{

    constructor(){
        this.isExecuting = false;
        this.actionHandlers = [];
    }
    execute(action){
        if (this.isExecuting) {
            throw new Error('Cannot dispatch in the middle of a dispatch')
        }
        this.isExecuting = true;

        this.actionHandlers.forEach(handler => handler(action));

        this.isExecuting = false;
    }
    // 注册handler相当于注册store
    // dispatcher是store的client
    register(actionHandler) {
        this.actionHandlers.push(actionHandler)
    }
}
const instance = new Dispatcher();
export default instance