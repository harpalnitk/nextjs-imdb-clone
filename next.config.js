

const {PHASE_DEVELOPMENT_SERVER} = require('next/constants');



module.exports = (phase, { defaultConfig }) => {
/** @type {import('next').NextConfig} */
let nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  env:{
    NEXTAUTH_URL:'http://localhost:3000',
    NEXTAUTH_SECRET: '276dc05c68e2fbd7d879c1a2cad7382e',
    
  }
}
 
if(phase === PHASE_DEVELOPMENT_SERVER){
  nextConfig =  {
    experimental: {
      appDir: true,
    },
    reactStrictMode: true,
    env:{
      NEXTAUTH_URL:'http://localhost:3000',
      NEXTAUTH_SECRET: '276dc05c68e2fbd7d879c1a2cad7382e',
      
    }
  }
}




return  nextConfig;
}
