# 0x14. MySQL
## Introduction 
- This project aims to set up MySQL on multiple servers, establish replication between them, and automate database backup procedures. By following the tasks outlined below, you'll learn how to configure MySQL servers, create replication infrastructure, and ensure data redundancy and availability.

## Project Structure
The project is organized into tasks, each focusing on a specific aspect of MySQL setup, replication, and backup automation.

## Tasks Overview
1. **Install MySQL**: Install MySQL 5.7.x on designated servers (web-01 and web-02) and ensure SSH access is set up.
2. **Let us in!**: Create a MySQL user with specific permissions on both servers to allow access for verification purposes.
3. **If only you could see what I've seen with your eyes**: Create a database with a table and insert data into it on the primary MySQL server (web-01).
4. **Quite an experience to live in fear, isn't it?**: Create a new user for replication on the primary server and configure replication between the primary and replica servers.
5. **Setup a Primary-Replica infrastructure using MySQL**: Configure MySQL primary and replica servers, and set up replication for a specified database.
6. **MySQL backup**: Develop a Bash script to generate MySQL database dumps, compress them, and create backup archives.

## Repository Structure
- `0x14-mysql/`: Main project directory containing task-specific subdirectories.
    - `1-install_mysql/`: Task 1 directory with installation instructions.
    - `2-create_mysql_user/`: Task 2 directory with user creation instructions.
    - `3-create_database_table/`: Task 3 directory with database setup instructions.
    - `4-setup_replication/`: Task 4 directory with replication setup instructions.
    - `5-mysql_backup/`: Task 5 directory with backup script and instructions.


