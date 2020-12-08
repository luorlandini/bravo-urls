export default function reducer(state, action) {
    switch (action.type) {
        case "ADD_ITEM":
            if (!action.payload) {
                return state;
            }

            if (state.items.includes(action.payload)) {
                return state;
            }
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case "REMOVE":
            return {
                ...state,
                items: state.items.filter(item => item !== action.payload)
            };
        default:
            return state;
    }
}
