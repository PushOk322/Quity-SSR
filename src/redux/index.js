import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import userSignReducer from "./userSIgnSlice.js";

export default configureStore({
    reducer: {
        users: userReducer,
        userSign: userSignReducer,
        videos: videoReducer,
        playlists: playlistReducer,
        currentPlaylists: currentPlaylistReducer,
        stores: storeReducer,
        userViewLaters: userViewLaterReducer,
        userLatests: userLatestReducer,
        currentSubscriptions: currentSubscriptionReducer,
        currentVideos: currentVideoReducer,
        comments: commentReducer,
    },
});
