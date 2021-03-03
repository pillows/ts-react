interface GlobalI {}

const initialState: GlobalI = {};

const globalReducer = (state: GlobalI = initialState, action: any): GlobalI => {
  return state;
};

export default globalReducer;
