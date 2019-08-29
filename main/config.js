module.exports = {
    HOSTNAME: process.env.SIDECAR_MAIN_HOSTNAME || '0.0.0.0',
    PORT: process.env.SIDECAR_MAIN_PORT || 8080,
    REMOTE: process.env.SIDECAR_MAIN_REMOTE || 'http://172.17.0.3:5200'
}