import { type ReactNode, createContext, useContext, useReducer } from "react";
import { SessionItem } from "../components/Sessions/SessionItem";

// export type Class = {
// 	id: string;
// 	title: string;
// 	summary: string;
// 	description: string;
// 	date: string;
// 	image: string;
// 	duration: number;
// };

// type responsible for storing the Class Sessions data
type ClassState = {
	upcomingClassSessions: SessionItem[];
};

// type responsible for storing the Class Sessions data PLLUS the methods available
type ClassContextValue = ClassState & {
	bookSession: (theClass: SessionItem) => void;
	cancelSession: (classId: string) => void;
};

export const ClassesContext = createContext<ClassContextValue | null>(null);

//------------------------------------------------------------------------------------------

//--------------------------------------------------- HOOK
// Hook to use in the application to consume the context
export const useClassesSessionContext = () => {
	const context = useContext(ClassesContext);
	if (!context) {
		throw new Error("useSessionsContext must be used within a SessionsContextProvider");
	}
	return context;
};

//--------------------------------------------------- ACTIONS
//These actions will be used in the Reducer
type BookClassAction = {
	type: "BOOK_SESSION";
	classSession: SessionItem;
};
type CancelClassAction = {
	type: "CANCEL_SESSION";
	sessionId: string;
};
type PrintClassAction = {
	type: "PRINT_SESSION";
	sessionId: string;
};

type ClassAllAction = BookClassAction | CancelClassAction | PrintClassAction;

// ============================================================================== REDUCER
// Reducer is the method that is standard for this kind of process
// It has the State (VALUES STORED) and the ACTION (Which will depctic what is going to happen)
function sessionsReducer(state: ClassState, action: ClassAllAction) {
	if (action.type === "BOOK_SESSION") {
		if (state.upcomingClassSessions.some((session) => session.id === action.classSession.id)) {
			return state;
		}
		return {
			upcomingClassSessions: state.upcomingClassSessions.concat(action.classSession),
		};
	}

	if (action.type === "CANCEL_SESSION") {
		return {
			upcomingClassSessions: state.upcomingClassSessions.filter(
				(session) => session.id !== action.sessionId
			),
		};
	}
	if (action.type === "PRINT_SESSION") {
		console.log("ACTION: ", action.type);
	}

	return state;
}

// ============================================================================== PROVIDER
export const ClassesContextProvider = ({ children }: { children: ReactNode }) => {
	const [sessionsState, dispatch] = useReducer(sessionsReducer, {
		upcomingClassSessions: [],
	});

	function bookSession(classSession: SessionItem) {
		dispatch({ type: "BOOK_SESSION", classSession });
	}

	function cancelSession(sessionId: string) {
		dispatch({ type: "CANCEL_SESSION", sessionId });
	}
	function printSession(sessionId: string) {
		dispatch({ type: "PRINT_SESSION", sessionId });
	}

	const ctxValue = {
		upcomingClassSessions: sessionsState.upcomingClassSessions,
		bookSession,
		cancelSession,
		printSession,
	};

	return <ClassesContext.Provider value={ctxValue}>{children}</ClassesContext.Provider>;
};

export default ClassesContextProvider;
