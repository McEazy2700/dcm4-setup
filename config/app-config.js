/** @type {AppTypes.Config} */
window.config = {
  routerBasename: "/ohif-viewer/",
  showStudyList: true,
  extensions: [],
  modes: [],
  showWarningMessageForCrossOrigin: true,
  showCPUFallbackMessage: true,
  showLoadingIndicator: true,
  strictZSpacingForVolumeViewport: true,
  defaultDataSourceName: "dicomweb",
  investigationalUseDialog: { option: "never" },

  dataSources: [
    {
      namespace: "@ohif/extension-default.dataSourcesModule.dicomweb",
      sourceName: "dicomweb",
      configuration: {
        friendlyName: "Dcm4chee Server",
        name: "Dcm4chee",
        wadoUriRoot:
          "https://slate-dcm4chee.chickenkiller.com/dcm4chee-arc/aets/DCM4CHEE/wado",
        qidoRoot:
          "https://slate-dcm4chee.chickenkiller.com/dcm4chee-arc/aets/DCM4CHEE/rs",
        wadoRoot:
          "https://slate-dcm4chee.chickenkiller.com/dcm4chee-arc/aets/DCM4CHEE/rs",
        qidoSupportsIncludeField: false,
        imageRendering: "wadors",
        thumbnailRendering: "wadors",
        dicomUploadEnabled: true,
        omitQuotationForMultipartRequest: true,
      },
    },
  ],
};
