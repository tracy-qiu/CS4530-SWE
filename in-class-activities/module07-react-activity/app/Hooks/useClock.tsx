import { useEffect } from 'react';
import SingletonClockFactory, { Clock } from '../Classes/ClockWithListeners';


export function useClock(listener1: () => void): Clock {
    const clock = SingletonClockFactory.instance(1000)
    useEffect(() => {
        clock.addListener(listener1)
        return () => {
            clock.removeListener(listener1)
        }
    }, []); 
    return clock
}   
