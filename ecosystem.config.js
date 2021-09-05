const { cpus } = require('os');
const cpuCount = cpus().length;
const apiCpu = cpuCount * 0.25;
const workerCpu = cpuCount - apiCpu - 1; //

module.exports = {
  apps: [
    {
      name: 'api-app',
      script: './bin/www',
      instances: apiCpu,
      exec_mode: 'cluster',
    },
    // {
    //   name: 'worker-app',
    //   script: './dist/worker.js',
    //   instances: workerCpu,
    //   exec_mode: 'cluster',
    // },
  ],
};
