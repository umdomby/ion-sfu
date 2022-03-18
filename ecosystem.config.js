module.exports = {
  apps : [{
    name   : "ion-sfu",
    script  : "./main",
    //watch: true,
    //watch_delay: 1000,
    //ignore_watch : ["node_modules"],
    max_memory_restart: '700M',
    // instances : "max",
    // exec_mode : "cluster"
    // stop_exit_codes: [0],
    // exp_backoff_restart_delay: 100
  }]
}
