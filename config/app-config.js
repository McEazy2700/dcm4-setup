/** @type {AppTypes.Config} */
window.config = {
  routerBasename: "/ohif-viewer/", // Keeping your preferred path
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

  oidc: [
    {
      authority:
        "https://slate-dcm4chee.chickenkiller.com/keycloak/realms/ohif",
      client_id: "ohif_viewer",
      redirect_uri:
        "https://slate-dcm4chee.chickenkiller.com/ohif-viewer/callback",
      post_logout_redirect_uri:
        "https://slate-dcm4chee.chickenkiller.com/ohif-viewer/",
      response_type: "code",
      scope: "openid profile email",
      revoke_uri:
        "https://slate-dcm4chee.chickenkiller.com/keycloak/realms/ohif/protocol/openid-connect/revoke",
      automaticSilentRenew: true,
      revokeAccessTokenOnSignout: true,
    },
  ],
};
