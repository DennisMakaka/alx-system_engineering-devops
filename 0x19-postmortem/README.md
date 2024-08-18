# **Postmortem: Incident of User Privilege Mismanagement**

---

## **Issue Summary**
- **Outage Duration:**  
  **Start:** August 17, 2024, 5:00 PM EAT  
  **End:** August 17, 2024, 6:15 PM EAT

- **Impact:**  
  A Bash script intended to run commands under a specified user inadvertently deleted essential system files, disrupting key services. Approximately 75% of users faced authentication failures and restricted access to resources.

- **Root Cause:**  
![SUDU vulnerabilities](https://media.licdn.com/dms/image/C5612AQEg1U6lo1e7vw/article-cover_image-shrink_600_2000/0/1612483551876?e=2147483647&v=beta&t=nihG-vXFyaaD7K9ZgIW8ubWkfVLLFGAkCSjdXYaWpB4)
  
The root cause was the improper handling of administrative privileges within the Bash script. The script allowed unrestricted use of the `sudo` command without validation, leading to the execution of potentially harmful commands under root privileges. This lack of safeguards resulted in the unintentional deletion of critical system files.

---

## **Timeline**
- **5:05 PM:** Monitoring alerts indicated a significant drop in system performance.
- **5:10 PM:** Surge in authentication errors observed by the system administrator.
- **5:15 PM:** Engineering team began investigating the Bash script suspected of causing the issue.
- **5:30 PM:** Initial focus was on potential permission misconfigurations.
- **5:45 PM:** Misleading paths around user permissions prolonged the resolution.
- **6:00 PM:** DevOps team escalated for a deeper review of the script and logs.
- **6:10 PM:** Identified misuse of `sudo` within the script as the root cause.
- **6:15 PM:** Issue resolved by updating the script and restoring the system.

---

## **Root Cause and Resolution**
- **Root Cause:**  
  The incident was caused by a Bash script's misuse of the `sudo` command, which allowed broad execution of commands under root privileges without proper validation. This resulted in the unintentional deletion of critical system files. The script’s design lacked adequate safeguards, such as input validation and command whitelisting, leading to the incident.

- **Resolution:**  
  The resolution involved revising the script to incorporate strict validation mechanisms, ensuring only safe, predefined commands could be executed using `sudo`. Additionally, the script was updated to reject or flag any commands that might compromise system integrity. After implementing these changes, the system was restored from a stable backup, and affected services were reconfigured to resume normal operation.

---

## **Corrective and Preventative Measures**
- **Improvements:**  
  Strengthen script execution processes with enhanced safety checks, and increase awareness of the risks associated with elevated privilege operations.

- **Tasks:**
  1. Enforce strict validation checks in the Bash script.
  2. Mandate non-root user accounts for script execution, unless absolutely necessary.
  3. Implement logging and alerting for potentially dangerous commands.
  4. Provide training on secure scripting practices, emphasizing proper use of `sudo`.
  5. Regularly audit and update automation scripts for security compliance.
