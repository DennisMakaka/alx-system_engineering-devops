# Puppet Manifest: setup_nginx_custom_header.pp
# Description: Setup New Ubuntu server with nginx and add a custom HTTP header
# Author: Dennis Makaka
# Date: April 1, 2024

# Update the system using apt-get
exec { 'update system':
    command => '/usr/bin/apt-get update',
}

# Install the nginx package
package { 'nginx':
    ensure => 'installed',
    require => Exec['update system']
}

# Create a simple index.html file in /var/www/html
file { '/var/www/html/index.html':
    content => 'Hello World!'
}

# Add a redirection rule to the nginx configuration file
exec { 'redirect_me':
    command => 'sed -i "24i\	rewrite ^/redirect_me https://th3-gr00t.tk/ permanent;" /etc/nginx/sites-available/default',
    provider => 'shell'
}

# Add a custom HTTP header to the nginx configuration file
exec { 'HTTP header':
    command => 'sed -i "25i\	add_header X-Served-By \$hostname;" /etc/nginx/sites-available/default',
    provider => 'shell'
}

# Ensure the nginx service is running
service { 'nginx':
    ensure => running,
    require => Package['nginx']
}

