module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run example -- --disableLiveReload --minify",
      startServerReadyPattern: "Web Server is available",
      url: ["http://localhost:8008/congo/samples/placeholder-text/"],
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
