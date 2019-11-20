// #if process.env.WITH_CARS === '1'
import Cars from './lib/cars';
// #endif

// #if process.env.WITH_CARS !== '1'
import Cars from './lib/dummy';
// #endif

// #if process.env.WITH_ADMINS === '1'
import Admins from './lib/admins';
// #endif

// #if process.env.WITH_ADMINS !== '1'
import Admins from './lib/dummy';
// #endif

console.log(bundleConfig);
console.log(Cars);
console.log(Admins);
