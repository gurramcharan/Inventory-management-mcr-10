export const filterReducer = (state, action) => {
    switch (action.type) {
        case "department_filter":
            return {
                ...state,
                departments: action.payload
            };
        case "low_stock_filter":
            return {
                ...state,
                lowstock: state.lowstock
                    ? false
                    : true
            }
        case "sort_by_filter":
            return {
                ...state,
                sortby: action.payload
            }
        default:
            return state;
    }
};