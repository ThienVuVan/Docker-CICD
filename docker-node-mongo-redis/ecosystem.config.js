/*
 * @Author: Mai Trung Duc
 * @Last Modified by: Mai Trung Duc
 * @Last Modified time: 2019-12-22 16:54:06
 * @Copyright © 2019 Mai Trung Duc. All rights reserved
 */

module.exports = {
  apps: [{
    name: 'my_app',
    script: 'npm',
    args: 'start',
    time: true,
    exec_mode: 'fork', // need explicitly declare mode otherwise it will fallback to cluster mode and cause infinite reload
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
}
