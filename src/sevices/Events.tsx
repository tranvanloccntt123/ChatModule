interface EVENTS{
    interval: number,
    removeListener: Function,
    handle: Function
}

export const EMMIT = {
    addListener: function(callback?: Function):EVENTS{
        let e:EVENTS = {
            interval: 0,
            removeListener: function(){
                clearInterval(this.interval)
            },
            handle: callback? callback() : () => {}
        };
        setInterval(e.handle(), 2500);
        return e;
    }
}