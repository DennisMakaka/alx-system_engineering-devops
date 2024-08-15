eddit Subscribers Query
"""

import requests

def get_subscribers(subreddit):
    """
    Get the total number of subscribers for a given subreddit.
    
    Args:
        subreddit (str): The subreddit to query.
    
    Returns:
        int: The total number of subscribers for the subreddit, or 0 if invalid.
    """
    url = "https://www.reddit.com/r/{}/about.json".format(subreddit)
    headers = {"User-Agent": "Mozilla/5.0"}
    
    response = requests.get(url, headers=headers, allow_redirects=False)
    
    if response.status_code == 200:
        data = response.json()
        subscribers = data.get("data", {}).get("subscribers", 0)
        return subscribers
    else:
        return 0

if __name__ == "__main__":
    import sys

    if len(sys.argv) < 2:
        print("Please provide a subreddit as an argument.")
    else:
        subreddit = sys.argv[1]
        print(get_subscribers(subreddit))
