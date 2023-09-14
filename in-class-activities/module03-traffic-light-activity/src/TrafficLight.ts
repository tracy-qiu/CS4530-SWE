export type Color = "red" | "green" | "yellow"

export function colorAtNextSecond(color: Color, time: number): Color {
    switch (color) {
        case "red":
            return (time === 1) ? "green" : "red";
        case "yellow":
            return (time === 1) ? "red" : "yellow";
        case "green":
            return (time === 1) ? "yellow" : "green";
        default:
            throw new Error("This error shouldn't occur.")
    }
}

export class TrafficLight {

    color: Color = "red"
    timeLeft: number = 20  

    /* simulate one second passing */
    public tick() {
        this.color = colorAtNextSecond(this.color, this.timeLeft)
        if (this.timeLeft === 1) { this.timeLeft = 20 }
        else {
            this.timeLeft = (this.timeLeft - 1)
        }
    }

    public setTime (t:number) {this.timeLeft = t}

    public getColor () {return this.color}
}

