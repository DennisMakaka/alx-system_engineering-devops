# Puppet Manifest: setup_nginx_server.pp
# Description: Sets up a new Ubuntu server with Nginx
#
# This Puppet manifest automates the configuration of an Ubuntu server with Nginx.
# It performs the following tasks:
# 1. Updates the system package repository
# 2. Installs Nginx package
# 3. Creates an index.html file with "Hello World!"
# 4. Sets up a redirect to a YouTube video on /redirect_me in the Nginx configuration
# 5. Ensures the Nginx service is running
#
# Note: Ensure proper permissions and configurations are in place for successful execution.

exec { 'update system':
    command => '/usr/bin/apt-get update',
}

package { 'nginx':
    ensure => 'installed',
    require => Exec['update system'],
}

file { '/var/www/html/index.html':
    content => 'Hello World!',
}

exec { 'redirect_me':
    command => 'sed -i "24i\	rewrite ^/redirect_me https://www.youtube.com/watch?v=QH2-TGUlwu4 permanent;" /etc/nginx/sites-available/default',
    provider => 'shell',
}

service { 'nginx':
    ensure => running,
    require => Package['nginx'],
}

