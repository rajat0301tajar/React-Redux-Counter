import { INCREASE_COUNTER, DECREASE_COUNTER } from "./action";

export const initialState = {
  count: 0
};

export function reducer(state = initialState, action) {
  const type = action.type;
  switch (type) {
    case INCREASE_COUNTER:
      return { count: state.count + 1 };
    case DECREASE_COUNTER:
      return { count: state.count - 1 };
    default:
      return state;
  }
}
