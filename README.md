# Webstsck Monitoring

## Requirements
### General
- Allowed editors: vi, vim, emacs
- All your files will be interpreted on Ubuntu 16.04 LTS
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- All your Bash script files must be executable
- Your Bash script must pass Shellcheck (version 0.3.7) without any error
- The first line of all your Bash scripts should be exactly #!/usr/bin/env bash
- The second line of all your Bash scripts should be a comment explaining what the script is doing.

## Tasks
1. **Sign up for Datadog and install datadog-agent**
   - For this task head to [Datadog](https://www.datadoghq.com/) and sign up for a free Datadog account. Follow the instructions to install the Datadog agent.
   - Sign up for Datadog using the US website (https://app.datadoghq.com) in the US1 region.
   - Install datadog-agent on web-01.
   - Create an application key.
   - Copy-paste your DataDog API key and application key in your Intranet user profile.
   - Ensure your server web-01 is visible in Datadog under the hostname XX-web-01.
   
2. **Monitor some metrics**
   - Set up a monitor that checks the number of read requests issued to the device per second.
   - Set up a monitor that checks the number of write requests issued to the device per second.

3. **Create a dashboard**
   - Create a new dashboard.
   - Add at least 4 widgets to your dashboard.
   - Create the answer file 2-setup_datadog which has the dashboard_id on the first line. 
