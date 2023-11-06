import { Platform } from "react-native";

export const palettes = {
 default: {
  primary: "#010409",
  secondary: "#e6edf3",
  container: "#010409",
  secondaryDisabled: "#0d1117",
  secondaryContainer: "#161b22",
  textInactive: "#808C92",
  textActive: "#e6edf3",
  textSecondary: "#0d1117",
  containerInactive: "#0d1117",
  containerPrimary: "#F1F8FF",
  elevationLow: Platform.Version >= 30 ? 6 : 2,
  elevationMedium: Platform.Version >= 30 ? 10 : 3,
 },
};
