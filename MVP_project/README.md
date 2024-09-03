# The Coding Odyssey of Dennis Anyende Makaka

## Tagline
Navigating the world of code

## Team
**Dennis Makaka**  
*Role: Developer, Designer, Project Manager*  
As the sole member of the team, I handle all aspects of the project including development, design, and project management. This approach allows for streamlined decision-making and full ownership of the project's success, maintaining consistency in vision and execution.

## Technologies

### Languages
- **HTML/CSS**: Essential for building the structure and styling of web pages.
- **JavaScript**: Adds interactivity and dynamic features to the website.

### Frameworks
- **React.js**: Chosen for its robust ecosystem, performance optimizations, and strong community support. It includes tools like Redux for state management and Next.js for server-side rendering.
- **Vue.js (Alternative)**: Offers simplicity and ease of integration but was not selected due to React.js's extensive ecosystem.

### Tools
- **Visual Studio Code**: Selected for its rich feature set and extensive plugin ecosystem.
- **Sublime Text (Alternative)**: Known for its speed and simplicity but not used due to VS Code's comprehensive capabilities.

### Version Control
- **Git**: Chosen for its industry dominance, extensive documentation, and robust support for collaborative development.
- **Mercurial (Alternative)**: Not selected due to Git's larger community and ecosystem.

### Hosting Platform
- **Netlify**: Chosen for its ease of use, generous free tier, and integrations with version control platforms like GitHub.
- **Vercel (Alternative)**: Specializes in Next.js applications but was not selected for this project.

## Challenge Statement

### Problem Statement
The project addresses the need for a polished and professional online portfolio to effectively showcase skills, projects, and experiences in a competitive job market.

### Limitations
The portfolio will not directly solve issues related to securing job opportunities or career advancement. It serves as a tool for self-promotion and networking.

### Target Audience
Primarily individuals in tech-related fields such as software development, design, data science, and digital marketing.

### Locale Dependency
The project is accessible worldwide over the internet and is not dependent on a specific locale.

## Risks

### Technical Risks
1. **Server Downtime**: Could impact availability and lead to missed opportunities.
   - **Safeguards**: Regular backups, redundancy measures, automatic scaling, and monitoring.

2. **Security Concerns**: Could lead to data breaches or reputation damage.
   - **Safeguards**: Secure coding practices, HTTPS, regular updates, and security audits.

### Non-Technical Risks
1. **Content Accuracy and Integrity**: Inaccurate content could harm credibility.
   - **Safeguards**: Implementing a CMS, regular content reviews, and ensuring accurate information.

## Infrastructure

### Branching and Merging
Using GitHub flow for managing feature development, changes, and ensuring a stable main branch.

### Deployment Strategy
Hosting on Netlify with automatic deployments connected to the GitHub repository. This setup ensures up-to-date deployments and efficient development workflows.

### Data Population
Manual addition of data with content files (e.g., Markdown) organized within the project structure. Data will be dynamically rendered using React.

### Testing Tools and Automation
Unit tests for crucial features using Jest. Automated testing will help detect regressions and ensure code stability.

## Existing Solutions
- **LinkedIn Profile**: Provides a comprehensive platform for professional networking but lacks the customization and creative freedom of a standalone portfolio website.

## Architecture
Detailed architecture overview available [here](https://drive.google.com/file/d/1eb3tmWVMO_nUYH4u5b89JgUUkmuqtwAD/view?usp=sharing).

### Architecture Explanation
1. **User Request**: User sends a request to the Load Balancer.
2. **Load Balancing**: Routes requests to available servers.
3. **Server Processing**: Handles business logic and interacts with the Database.
4. **Database Interaction**: Stores and retrieves data.
5. **Data Response**: Server processes data and prepares a response.
6. **Response Routing**: Sent back to the user's browser.
7. **Response Display**: Displayed to the user.

## APIs

### Web Client Communication
- **/api/user**
- **/api/portfolio**
- **/api/project**
- **/api/task**
- **/api/skills**
- **/api/contact**
- **/api/blog**

### External Clients
No additional endpoints at this stage.

### 3rd Party APIs
- **GitHub Jobs API**
- **MongoDB Atlas API**
- **GitHub API**

## Data Modeling
Detailed data model diagram available [Data Modeling Diagram](https://drive.google.com/file/d/1eb3tmWVMO_nUYH4u5b89JgUUkmuqtwAD/view?usp=sharing)

## User Stories

1. **Create a Portfolio**: Add and manage portfolios and projects.
2. **Edit Personal Information**: Update contact details and professional summary.
3. **Track Task Progress**: Add, edit, and manage tasks within projects.
4. **View Portfolio**: Publicly accessible portfolio without account creation.
5. **Receive Feedback**: Enable feedback forms for recruiter comments.

## Mockups
Detailed mockups for visualizing and refining project concepts available [Mockup](https://balsamiq.cloud/smchdzq/pynf17x).

---

Feel free to adjust any sections or add additional information as needed. Let me know if you need any further modifications or additional content!

