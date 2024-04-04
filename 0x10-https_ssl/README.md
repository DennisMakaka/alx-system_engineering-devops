# 0x10. HTTPS SSL

## Overview 
- This project focuses on configuring HTTPS SSSL termination using HAProxy. SSL termination refers to the process of decrypting SSL/TLS encrypted traffic at the load balancer and then fowarding the unencrypted traffic to the backend servers. This ensures secure communication between clients and servers while offloading the encryption/decryption workload from backend servers.

### Task 0: World wide web
- Configuring DNS settings for the domain to point subdomains to specific IP addresses.
- Writing a Bash script to display information about subdomains.

### Task 1:  HAProxy SSL termination
- Creating SSL certificates using certbot.
- Configuring HAProxy to accept encrypted traffic for the subdomain www and terminate SSL.
- Ensuring that when querying the root of the domain, the page returned contains "Holberton School".

### Task 2: No loophole in your website traffic (Advanced)
- Configuring HAProxy to automatically redirect HTTP traffic to HTTPS.
- Ensuring the redirection is transparent to the user and returns a 301 status code.

## Installation Steps
1. Install and configure HAProxy on the designated server(s).
2. Set up DNS configurations for the domain and subdomains as specified in Task 0.
3. Generate SSL certificates for the domain/subdomain using certbot or any suitable tool.
4. Write HAProxy configuration files based on the provided requirements for Tasks 1 and 2.
5. Test the configurations to ensure SSL termination, redirection, and DNS settings are working correctly.
