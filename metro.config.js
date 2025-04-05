const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const { wrapWithReanimatedMetroConfig } = require("react-native-reanimated/metro-config");

const config = getDefaultConfig(__dirname);


const nativeWindConfig = withNativeWind(config, { input: "./app/globals.css" });


module.exports = wrapWithReanimatedMetroConfig(nativeWindConfig);
