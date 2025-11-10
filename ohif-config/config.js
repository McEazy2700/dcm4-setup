window.config = {
  routerBasename: "/",
  extensions: [],
  modes: [],
  showStudyList: true,
  dataSources: [
    {
      namespace: "@ohif/extension-default.dataSourcesModule.dicomweb",
      sourceName: "dcm4chee",
      configuration: {
        friendlyName: "DCM4CHEE",
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
    },
  ],

  defaultDataSourceName: "dcm4chee",
};
