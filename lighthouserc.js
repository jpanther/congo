module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run example",
      startServerReadyPattern: "Web Server is available",
      url: ["http://localhost:8008/congo/samples/markdown/"],
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
