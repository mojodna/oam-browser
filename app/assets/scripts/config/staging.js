'use strict';

module.exports = {
  feedbackSubmissionURL: 'https://getsimpleform.com/messages/ajax?form_api_token=506fc2ac58582416b6086a68a343e344',
  catalog: {
    url: 'https://oam-catalog-staging.herokuapp.com'
  },
  environment: 'staging',
  OAMUploaderApi: 'http://upload-api-staging.openaerialmap.org/',
  uploadBucket: 'oam-uploader-staging-temp',
  googleClient: '36015894456-3d5ka80qtpaqcjhco3lsl38s1fj0dr71.apps.googleusercontent.com',
  googleDeveloperKey: '',
  OAMBrowserUrl: 'http://hotosm-oam-staging.s3-website-us-east-1.amazonaws.com'
};

// copy over any production settings that weren't specifically set above
var production = require('./production');
for (var p in production) {
  if (typeof module.exports[p] === 'undefined') {
    module.exports[p] = production[p];
  }
}
