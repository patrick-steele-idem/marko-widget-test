//export default {
module.exports = {
    "environment": process.env.NODE_ENV || 'local',
    "settings": {
        "debug": false
    },
    "server": {
        "port": process.env.PORT || 3131
    }
};
