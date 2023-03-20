import { createListenerMiddleware, is } from '@reduxjs/toolkit'
import { addExpenseAction, incrementActionPerfomed, setIncomeAction } from 'store/expense/expense-slice'

export const loggerMiddleware = createListenerMiddleware()

loggerMiddleware.startListening({
    predicate: (action, currentState, previousState) => {
        return action.type !== "expenseSlice/incrementActionPerfomed"
        //return action.type === "expenseSlice/addExpenseAction" || action.type === "expenseSlice/setIncomeAction"
    },
    //  matcher: isAnyOf(setIncomeAction, addExpenseAction),
    effect: async (action, listenerApi) => {
        console.log("Action called ", action)
        listenerApi.dispatch(incrementActionPerfomed())
        console.log("New store value", listenerApi.getState())
    },
})