module.exports = {
  apps: [{
    name: 'emkaan-cms-frontend',
    script: 'npx serve -s build --no-clipboard --single --listen 3000',
    instances: 1,
    exec_mode: 'fork',
    max_memory_restart: '400M', // Restart if memory exceeds 400MB
    env_production: {
      NODE_ENV: 'production'
    }
  }]
}
