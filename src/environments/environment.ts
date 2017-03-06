// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,

  region: 'us-east-1',
  identityPoolId: 'us-east-1:dff0fd90-01ea-46ec-a444-cfef1f1d8fea',
  userPoolId: 'us-east-1_lLUW7lqWq',
  clientId: '6nm0p9urktd0uec6e2f82oo6v7',

  rekognitionBucket: 'rekognition-pics',
  albumName: 'usercontent',
  bucketRegion: 'us-east-1',

  ddbTableName: 'LoginTrail'
  
};
