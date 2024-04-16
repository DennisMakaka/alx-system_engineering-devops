# Firewall Configuration Project

This project involves configuring a firewall using UFW (Uncomplicated Firewall) on a server. It includes tasks to block incoming traffic except for specific TCP ports and to set up port forwarding.

## Project Overview

The project tasks are as follows:

1. **Block all incoming traffic except specific TCP ports**:
   - Use UFW to block all incoming traffic except for ports 22 (SSH), 443 (HTTPS), and 80 (HTTP).

2. **Port forwarding**:
   - Configure the firewall on `web-01` to forward incoming traffic from port 8080/TCP to port 80/TCP.

## Requirements

- Ubuntu server with UFW installed.
- Access to the server's terminal.

## Task 0: Block All Incoming Traffic

To block all incoming traffic except for specific TCP ports, follow these steps:

1. Install UFW if it's not already installed.
2. Set the default incoming policy to "deny" to block all incoming traffic by default.
3. Allow incoming traffic on ports 22, 443, and 80 using the `ufw allow` command.
4. Enable UFW to apply the new rules.

Share the UFW commands you used in your answer file.

## Task 1: Port Forwarding

To configure port forwarding, follow these steps:

1. Edit the UFW configuration file to forward incoming traffic from port 8080/TCP to port 80/TCP.
2. Save the changes to the UFW configuration file.
3. Restart the UFW service to apply the changes.

