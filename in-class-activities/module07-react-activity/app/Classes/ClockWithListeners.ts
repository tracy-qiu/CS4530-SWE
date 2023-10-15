/** Clock with listeners (delegates) 
 * calls all its listeners every `interval` milliseconds
*/

type Listener = () => void

export class Clock {
    // public time = 0
    private _listeners: Listener[] = []
    private _notifyAll() {this._listeners.forEach(eachListener => {eachListener()})}

    public addListener(listener: Listener) {
        this._listeners.push(listener)
    }
    public removeListener(listener: Listener) {
        this._listeners = this._listeners.filter(eachListener => eachListener !== listener)
        if (this._listeners.length === 0) {this._stop()}
    }

    get nListeners () {return this._listeners.length}

    private _timer : NodeJS.Timeout   

    public constructor(interval: number) {    
            this._timer = setInterval(() => {
                this._tick();
            }, interval);
            
        }
    
    private _tick() {
        // this.time++;
        this._notifyAll();
        }

    public _stop() {
        clearInterval(this._timer);
        
    }
    
}

export default class SingletonClockFactory {

    private static theClock: Clock | undefined = undefined
    
    private constructor () {SingletonClockFactory.theClock = undefined}
    
    public static instance (interval:number) : Clock {
        if (SingletonClockFactory.theClock === undefined) {
            SingletonClockFactory.theClock  = new Clock(interval)
        }
        return SingletonClockFactory.theClock
    }

}