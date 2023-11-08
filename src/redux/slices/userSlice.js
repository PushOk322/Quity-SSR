import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "users",
	initialState: {
		users: []
	},
	reducers: {
		loginUser(state, action) {
			console.log("🚀 ~ file: userSlice.js:10 ~ loginUser ~ action:", action);
			// console.log("🚀 ~ file: userSlice.js:10 ~ loginUser ~ state:", state);
			if (state.users.length > 0) {
				// Remove the last user from the array
				state.users.pop();
				// console.log("🚀 ~ file: userSlice.js:30 ~ logoutUser ~ state.users:", state.users);
			}

			state.users.push({
				blocked: action.payload.user.blocked,
				confirmed: action.payload.user.confirmed,
				createdAt: action.payload.user.createdAt,
				email: action.payload.user.email,
				id: action.payload.user.id,
				provider: action.payload.user.provider,
				updatedAt: action.payload.user.updatedAt,
				username: action.payload.user.username,

				jwt: action.payload.jwt
			});
		},
		logoutUser(state, action) {},
		updateUser(state, action) {
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
		getUser(state, action) {
			return state.users;
		}
	}
});

export const { loginUser, logoutUser, updateUser, getUser } = userSlice.actions;

export default userSlice.reducer;
