import { act, createContext, FC, ReactNode, useContext, useReducer } from "react";

export type Timer = {
    name: string;
    duration: number;
};

type TimersState = {
    isRunning: boolean;
    timers: Array<Timer>;
};

const myInitialState: TimersState = {
    isRunning: false,
    timers: []
};

type TimersFunctions = {
    addTimer: (timerData: Timer) => void;
    startTimers: () => void;
    stopTimer: () => void;
};

type TimersContextValue = TimersState & TimersFunctions;

const TimersContext = createContext<TimersContextValue | null>(null);

export const useTimersContext = () => {
    const obTimersContext = useContext(TimersContext);
    if (!obTimersContext) {
        throw new Error('useTimersContext must be used within a TimersContextProvider');
    }
    return obTimersContext;
};


type TimersContextProviderProps = {
    children: ReactNode;
};


//----------------------------------------------------------
type StartTimersAction = {
    type: 'START_TIMERS';
};
type StopTimersAction = {
    type: 'STOP_TIMERS';
};
type AddTimerAction = {
    type: 'ADD_TIMER';
    payload: Timer;
};

type ActionType = StartTimersAction | StopTimersAction | AddTimerAction;


const fnTimersReducer = (inState: TimersState, inAction: ActionType): TimersState => {
    switch (inAction.type) {

        case "START_TIMERS":
            return { ...inState, isRunning: true };

        case "STOP_TIMERS":
            return { ...inState, isRunning: false };

        case "ADD_TIMER":
            return {
                ...inState,
                timers: [
                    ...inState.timers,
                    {
                        name: inAction.payload.name,
                        duration: inAction.payload.duration
                    }
                ]
            };
        default:
            return inState;
    }


};

export const TimersContextProvider: FC<TimersContextProviderProps> = ({ children }) => {

    const [timerState, dispatch] = useReducer(fnTimersReducer, myInitialState);

    const myContext: TimersContextValue = {
        isRunning: timerState.isRunning,
        timers: timerState.timers,
        addTimer: (timerData: Timer) => {
            dispatch({ type: 'ADD_TIMER', payload: timerData });
        },
        startTimers: () => {
            dispatch({ type: 'START_TIMERS' });
        },
        stopTimer: () => {
            dispatch({ type: 'STOP_TIMERS' });
        }
    };

    return (
        <TimersContext.Provider value={myContext}>
            {children}
        </TimersContext.Provider>
    );
};