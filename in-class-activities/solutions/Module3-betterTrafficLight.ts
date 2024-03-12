
export type Color = "red" | "green" | "yellow"

/**
 * Captures the color and the duration for which that color should appear 
 * on the traffic light
 */
export interface TrafficLightDuration {
    color: Color,
    duration: number
}

const defaultColorSequence: TrafficLightDuration[] = [
    {
        color: "red",
        duration: 20
    },
    {
        color: "green",
        duration: 20
    }, 
    {
        color: "yellow",
        duration: 20
    }
] 

export class TrafficLight {

    private _currentColorIdx: number

    private _timeLeftUntilNextColor: number

    private _colorSequence: TrafficLightDuration[]
    
    /**
     * Instantiates a new TrafficLight. 
     * @param currentColor current color of the traffic light. Defaults to "red"
     * @param timeLeftUntilNextColor time in 'ticks' left until the color is changed. Defaults to the duration of traffic light
     * @param colorSequence  an array containing sequence in which the colors should change. 
     *                        Defaults to [red, green, yellow] with each color lasting 20 ticks
     */
    constructor(currentColor: Color = "red", timeLeftUntilNextColor?: number, colorSequence: TrafficLightDuration[] = defaultColorSequence) {
        this._colorSequence = colorSequence;
        this._currentColorIdx = this._colorSequence.findIndex((e) => e.color === currentColor);
        this._timeLeftUntilNextColor = timeLeftUntilNextColor || this._colorSequence[this._currentColorIdx].duration;
    }

    /**
     * Simulates one tick of the clock. Decreases the time left until next color by 1 and 
     * changes to the next color if this color's duration is over.
     */
    public tick() {
        if (this._timeLeftUntilNextColor === 1) {
            this._currentColorIdx = (this._currentColorIdx + 1) % this._colorSequence.length;
            this._timeLeftUntilNextColor = this._colorSequence[this._currentColorIdx].duration;
        } else {
            this._timeLeftUntilNextColor -= 1;
        }
    }


    public set timeLeftUntilNextColor(timeLeftUntilNextColor:number) {
        this._timeLeftUntilNextColor = timeLeftUntilNextColor
    }

    public get timeLeftUntilNextColor() {
        return this._timeLeftUntilNextColor;
    }

    public get currentColor(): Color {
        return this._colorSequence[this._currentColorIdx].color
    }
}

