module.exports = {
  apps: [{
    name: 'emkaan-cms-frontend',
    script: 'npx serve -s build --no-clipboard --single --listen 3000',
    instances: 1,
    exec_mode: 'fork',
    max_memory_restart: '200M', // Reduced from 400M to 200M
    env_production: {
      NODE_ENV: 'production'
    },
    node_args: '--max-old-space-size=2256' // Limiting Node.js memory
  }]
}
