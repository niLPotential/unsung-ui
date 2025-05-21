import harmonyPalette from "@evilmartians/harmony/tailwind";
import { definePreset, type PresetUnoTheme } from "unocss";

export default definePreset({
  name: "unocss-preset-unsung",
  extendTheme(theme: PresetUnoTheme) {
    theme.colors = {
      ...harmonyPalette,
    };
  },
});
