// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: {
    user: 'http://localhost:3000/api/users',
    api: 'http://localhost:3000/api',
    location: 'http://localhost:3000/api/location',
    doctorSpecialty: 'http://localhost:3000/api/doctorSpecialty',
    doctors: 'http://localhost:3000/api/doctors',
    appointments: 'http://localhost:3000/api/rdv',
    voucher: 'http://localhost:3000/api/voucher',
    workinghours: 'http://localhost:3000/api/workinghours',
    question: 'http://localhost:3000/api/question',

  },
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
