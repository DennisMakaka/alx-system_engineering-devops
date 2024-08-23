# 0x1A. Application Server

## Project Overview

This project focuses on integrating an application server into an existing web infrastructure to serve dynamic content using the Airbnb clone project. While the existing setup uses Nginx to serve static content, this project will introduce Gunicorn as an application server to handle dynamic requests.

## Concepts Covered

- **Web Server**: Understanding the role of web servers like Nginx in serving static content.
- **Application Server**: Learning how application servers like Gunicorn work to handle dynamic content.
- **Web Stack Debugging**: Debugging and managing a complete web stack involving both web and application servers.

## Resources

- **Articles and Documentation**:
  - [Application server vs web server](https://www.nginx.com/resources/glossary/application-server-vs-web-server/)
  - [How to Serve a Flask Application with Gunicorn and Nginx](https://www.digitalocean.com/community/tutorials/how-to-deploy-python-wsgi-applications-using-uwsgi-web-server-interface-and-nginx)
  - [Running Gunicorn](https://docs.gunicorn.org/en/stable/run.html)
  - [Upstart documentation](http://upstart.ubuntu.com/cookbook/)

## Requirements

### General

- A `README.md` file at the root of the project directory is mandatory.
- All Python-related tasks must use Python 3.
- Configuration files must include comments for clarity.

### Bash Scripts

- Executable on Ubuntu 16.04 LTS.
- End with a new line.
- Pass Shellcheck (version 0.3.7-5~ubuntu16.04.1) without errors.
- Begin with `#!/usr/bin/env bash`.
- The second line should describe the script's functionality.

## Tasks

### 0. Set Up Development with Python

- **Objective**: Serve the content of the `AirBnB_clone_v2` project using Flask.
- **Steps**:
  1. Install `net-tools` package: `sudo apt install -y net-tools`
  2. Clone the repository: `git clone <repository-url>`
  3. Configure Flask to serve from the `/airbnb-onepage/` route on port 5000.
  4. Ensure the Flask application object is named `app`.

### 1. Set Up Production with Gunicorn

- **Objective**: Set up a production environment using Gunicorn.
- **Steps**:
  1. Install Gunicorn and required libraries.
  2. Serve the Flask application using Gunicorn on port 5000.
  3. Ensure compatibility with development conditions.

### 2. Serve a Page with Nginx

- **Objective**: Configure Nginx to serve content from the route `/airbnb-onepage/`.
- **Steps**:
  1. Configure Nginx to serve both locally and on its public IP.
  2. Proxy requests from Nginx to the application server on port 5000.

### 3. Add a Route with Query Parameters

- **Objective**: Configure Nginx to handle routes with query parameters.
- **Steps**:
  1. Update Nginx to proxy requests to the route `/airbnb-dynamic/number_odd_or_even/<int:n>`.
  2. Run Gunicorn on port 5001 for this route.

### 4. Serve Your API

- **Objective**: Serve the AirBnB clone v3 RESTful API.
- **Steps**:
  1. Clone the `AirBnB_clone_v3` repository.
  2. Setup Nginx to route `/api/` requests to Gunicorn on port 5002.
  3. Use Gunicorn to serve the API application.

### 5. Serve Your AirBnB Clone

- **Objective**: Serve dynamic content from the AirBnB clone project.
- **Steps**:
  1. Clone the `AirBnB_clone_v4` repository.
  2. Use Gunicorn to serve content from `web_dynamic/2-hbnb.py` on port 5003.
  3. Ensure Nginx serves static assets correctly from `web_dynamic/static/`.

## Testing and Debugging

- Use `curl` to test endpoints and verify responses.
- Use browser developer tools to inspect and debug any static content loading issues.
- Check Nginx and Gunicorn logs for error messages.

## License

This project is licensed under the terms of the MIT license.

