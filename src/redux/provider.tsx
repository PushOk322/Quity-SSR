"use client"
import store from "./index.js";
import { Provider } from "react-redux";
import React from "react";

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
	return <Provider store={store}> {children}</Provider>;
}
