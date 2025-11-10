window.config = {
  routerBasename: "/",
  showStudyList: true,
  extensions: [],
  modes: [],

  userAuthentication: {
    type: "oidc",
    oidc: {
      authority: "https://192.168.1.176:8843/realms/dcm4chee",
      client_id: "ohif",
      redirect_uri: "http://192.168.1.176:3000/callback",
      response_type: "code",
      scope: "openid profile email dcm4chee-arc.user",
      extraQueryParams: {
        kc_idp_hint: "dcm4che",
      },
    },
  },

  dataSources: [
    {
      namespace: "@ohif/extension-default.dataSourcesModule.dicomweb",
      sourceName: "dcm4chee",
      configuration: {
        friendlyName: "Secure DCM4CHEE",
        name: "DCM4CHEE",

        wadoUriRoot:
          "https://192.168.1.176:8443/dcm4chee-arc/aets/DCM4CHEE/wado",
        qidoRoot: "https://192.168.1.176:8443/dcm4chee-arc/aets/DCM4CHEE/rs",
        wadoRoot: "https://192.168.1.176:8443/dcm4chee-arc/aets/DCM4CHEE/rs",

        qidoSupportsIncludeField: false,
        supportsReject: true,
        imageRendering: "wadors",
        thumbnailRendering: "wadors",
        enableStudyLazyLoad: true,
        supportsFuzzyMatching: true,
        supportsWildcard: true,
        staticWado: true,
        singlepart: "bulkdata,video",
        requestOptions: {
          auth: "oauth",
        },
      },
    },
  ],
  defaultDataSourceName: "dcm4chee",
};
