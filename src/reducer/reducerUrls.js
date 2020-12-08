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
        case "COUNT_VISIT":
            const newItems = state.items.map((item, index) => {
                var tempItems = (item.key === action.payload.key) ? Object.assign({}, action.payload) : Object.assign({}, item);

                return tempItems;
            });
            return {
                ...state,
                items: newItems
            };

        default:
            return state;
    }
}
