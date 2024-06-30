const { getDefaultConfig } = require("expo/metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig(__dirname);
  return {
    resolver: {
      assetExts,
      sourceExts: [...sourceExts, "cjs"],
    },
  };
})();
