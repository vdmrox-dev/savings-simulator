import PropTypes from 'prop-types';
import { createContext, useContext, useReducer } from 'react';

// CONTEXT CREATORS
const SimulationState = createContext();
SimulationState.displayName = 'SimulationState';

const SimulationDispatch = createContext();
SimulationState.displayName = 'SimulationDispatch';

// ACTION CREATORS
const ACTIONS = {
  setTotalAmount: 'set total amount',
  setMonthlyAmount: 'set monthly amount',
  setDeposits: 'set deposits',
  setReachDate: 'set reach date',
};

const setTotalAmount = (totalAmount) => ({
  type: ACTIONS.setTotalAmount,
  payload: totalAmount,
});
const setMonthlyAmount = (monthlyAmount) => ({
  type: ACTIONS.setMonthlyAmount,
  payload: monthlyAmount,
});
const setDeposits = (deposits) => ({
  type: ACTIONS.setDeposits,
  payload: deposits,
});
const setReachDate = (reachDate) => ({
  type: ACTIONS.setReachDate,
  payload: reachDate,
});

// REDUCERS
function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.setTotalAmount:
      return { ...state, totalAmount: payload };
    case ACTIONS.setMonthlyAmount:
      return { ...state, monthlyAmount: payload };
    case ACTIONS.setDeposits:
      return { ...state, deposits: payload };
    case ACTIONS.setReachDate:
      return { ...state, reachDate: payload };
    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
}

// CONTEXT HOOK
function useSimulationContext() {
  const state = useContext(SimulationState);
  const dispatch = useContext(SimulationDispatch);

  if (state === undefined || dispatch === undefined)
    throw new Error(
      'useSimulationContext must be used within a SimlationProvider'
    );

  return [state, dispatch];
}

// PROVIDERS
function SimulationProvider({ children }) {
  const initialState = {
    totalAmount: 0,
    monthlyAmount: 0,
    deposits: 0,
    reachDate: null,
  };

  const [simulationState, setSimulationState] = useReducer(
    reducer,
    initialState
  );

  return (
    <SimulationState.Provider value={simulationState}>
      <SimulationDispatch.Provider value={setSimulationState}>
        {children}
      </SimulationDispatch.Provider>
    </SimulationState.Provider>
  );
}

SimulationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export {
  SimulationProvider,
  setDeposits,
  setMonthlyAmount,
  setReachDate,
  setTotalAmount,
  useSimulationContext,
};
