import { Platform } from "react-native";

const noGlow = `
textarea, select, input, button {
	-webkit-appearance: none;
	outline: none!important;
}
textarea:focus, select:focus, input:focus, button:focus {
	-webkit-appearance: none;
	outline: none!important;
}
`;

export const injectWebCss = (f?: any) => {
  // Only on web
  if (!Platform || Platform.OS !== "web") return;
  if (Platform && Platform.OS === "web") {
    const style = document.createElement("style");
    style.textContent = `textarea, select, input, button { outline: none!important; }`;
    return document.head.append(style);
  }
};

injectWebCss();
