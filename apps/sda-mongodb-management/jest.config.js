module.exports = {
  name: "sda-mongodb-management",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/sda-mongodb-management/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
