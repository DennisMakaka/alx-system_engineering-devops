# This Puppet manifest adjusts Nginx configuration settings to enhance performance under high load conditions

#Increase the ULIMIT value for Nginx to accomodate higher traffic
exec { 'fix--for nginx':
 # Update the ULIMIT value to allow more open files or processes
	command => '/bin/sed -i "s/15/4096/" /etc/default/nginx',
 # Define the search path for the sed command
	path	=> '/usr/local/bin/:/bin/'
}

# Restart the Nginx service to apply the configuration changes
exec { 'nginx-restart':
 # Restart Nginx service
	command => '/etc/init.d/nginx restart',
 # Specify the path for the init.d script
	path 	=> '/etc/init.d/',
}
