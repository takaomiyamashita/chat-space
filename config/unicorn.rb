app_path = File.expand_path('../../', __FILE__)

worker_processes 1

working_directory app_path
pid "#{app_path}/tmp/pids/unicorn.pid"
listen "#{app_path}/tmp/sockets/unicorn.sock"
stderr_path "#{app_path}/log/unicorn.stderr.log"
stdout_path "#{app_path}/log/unicorn.stdout.log"