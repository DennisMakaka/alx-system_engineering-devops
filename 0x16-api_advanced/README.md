# API Project

This project involves working with the Reddit API to perform various tasks such as querying the number of subscribers for a subreddit, printing the titles of hot posts, and retrieving all hot article titles using recursion.

## Project Tasks

1. **Number of Subscribers:**
   - Write a function that queries the Reddit API and returns the number of subscribers for a given subreddit.

2. **Top Ten Hot Posts:**
   - Write a function that queries the Reddit API and prints the titles of the first 10 hot posts for a given subreddit.

3. **Recursive Hot Articles:**
   - Write a recursive function that queries the Reddit API and returns a list of titles for all hot articles for a given subreddit.

## File Structure

- `0-subs.py`: Contains the function to retrieve the number of subscribers.
- `1-top_ten.py`: Contains the function to print the titles of the top 10 hot posts.
- `2-recurse.py`: Contains the recursive function to retrieve all hot article titles.
- `0-main.py`, `1-main.py`, `2-main.py`: Main scripts to run the respective functions with command line arguments.

## Requirements
- Python 3.4.3
- Libraries: Requests
- Editor: vi, vim, emacs
- PEP 8 style guide
- README.md file at the root of the project folder
- Executable files with shebang `#!/usr/bin/python3`
- Organized library imports
- Documentation for all modules
- API calls should handle redirects
- Recursive function for the third task

## Usage
- To get the number of subscribers for a subreddit: `python3 0-main.py <subreddit>`
- To print the top 10 hot posts: `python3 1-main.py <subreddit>`
- To retrieve all hot article titles: `python3 2-main.py <subreddit>`
