# iosAppTestAutomation-Perfecto

1. run npm install

2. Change thse parameters in wdio.config if necessary.

   hostname: '<perfecto hostname>'
   capabilities: [{
        'perfecto:deviceName': '<Device ID>',
        'perfecto:securityToken':'<perfecto security token>'
    
  }],

3. execute npm run wdio
