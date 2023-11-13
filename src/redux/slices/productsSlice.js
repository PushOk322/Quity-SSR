import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
	name: "products",
	initialState: {
		products: []
	},
	reducers: {
		addProduct(state, action) {
			const { data, index } = action.payload;
			// console.log("🚀 ~ file: userSlice.js:10 ~ loginUser ~ action:", action);
			// console.log("🚀 ~ file: userSlice.js:10 ~ loginUser ~ state:", state);
			const productIdToAdd = data.id;

			// Check if a playlist with the same playlist_id already exists in state
			const existingProduct = state.products.find((product) => product.product_id === productIdToAdd);
			if (!existingProduct) {
				state.products.push({
					product_id: data.id,
					product_energy_consumption: data.attributes.product_energy_consumption,
					product_name: data.attributes.product_name,
					product_price: data.attributes.product_price,
					product_hashrate: data.attributes.product_hashrate,
					product_profitability: data.attributes.product_profitability,
					product_tag: data.attributes.product_tag,
                    product_status: data.attributes.product_status,
                    product_type: data.attributes.product_type,

					product_photo: data.attributes.product_photo.data[0].attributes.url
				});
			}
		},
		deleteProduct(state, action) {},
		updateProduct(state, action) {
			const updatedUser = action.payload; // Assuming action.payload contains the updated user data
			const userIndex = state.users.findIndex((user) => user.id === updatedUser.id);

			if (userIndex !== -1) {
				// If the user with the provided ID exists in the state, update it
				state.users[userIndex] = {
					...state.users[userIndex],
					...updatedUser
				};
			}
		},
		getProduct(state, action) {
			return state.users;
		}
	}
});

export const { addProduct, deleteProduct, updateProduct, getProduct } = productsSlice.actions;

export default productsSlice.reducer;
