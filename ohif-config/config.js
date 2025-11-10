window.config = {
  routerBasename: "/",
  showStudyList: true,
  extensions: [
    "@ohif/extension-default",
    "@ohif/extension-cornerstone",
    "@ohif/mode-longitudinal",
  ],
  modes: ["@ohif/mode-longitudinal"],

  servers: {
    dicomWeb: [
      {
        name: "DCM4CHEE",
        wadoUriRoot:
          "http://192.168.1.176:8080/dcm4chee-arc/aets/DCM4CHEE/wado",
        qidoRoot: "http://192.168.1.176:8080/dcm4chee-arc/aets/DCM4CHEE/rs",
        wadoRoot: "http://192.168.1.176:8080/dcm4chee-arc/aets/DCM4CHEE/rs",
        qidoSupportsIncludeField: false,
        supportsReject: true,
        imageRendering: "wadors",
        thumbnailRendering: "wadors",
        enableStudyLazyLoad: true,
        supportsFuzzyMatching: true,
        supportsWildcard: true,
        staticWado: true,
        singlepart: "bulkdata,video",
      },
    ],
  },

  // The "name" field above must match this
  defaultDataSourceName: "DCM4CHEE",
};
