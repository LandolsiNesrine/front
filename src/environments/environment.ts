// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

function getHost() {
  const useLocalHost = true;
  return useLocalHost ? "http://localhost:8199/projet/api" : "http://192.168.1.62:8199/projet/api";
}

export const environment = {
  production: false,
  defaultauth: 'fackbackend',
  server: {
    host: getHost()
  }

};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
