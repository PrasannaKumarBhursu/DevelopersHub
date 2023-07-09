<div align="center">
<h1>👩‍💻 DevelopersHub - Discover and Connect with Skilled Developers!</h1>
</div>

## About 🚀

- **`DevelopersHub`** is an open source project that aims to create a platform for developers to showcase their skills and connect with potential collaborators, all in a user-friendly and searchable format.
- With **`DevelopersHub`**, developers can create their profiles in JSON format, which are then displayed on the web for others to discover.

## Features 💪
- Users can search for developers based on specific skills, locations or name, making it easy to find developers with expertise in a particular technology or programming language.
- This makes **`DevelopersHub`** a valuable resource for project managers, recruiters, and anyone looking to connect with skilled developers for collaboration or employment opportunities.

## How to add your profile 🤔

> Thank you for your interest in contributing to our open-source project! <br>

## Prerequisites

- A GitHub account
- Git installed on your local development environment
- Node Package Manager (npm) installed on your local development environment


## How to Install Git

Git is a version control system that is used to manage the source code of your project.

To install Git, follow these steps:

1. Download and install Git from the [Official Website](https://git-scm.com/downloads)
2. Open the terminal or command prompt on your local development environment
3. Verify the installation of Git by running the following command:
   **`git --version`**

## How to Install npm

npm (Node Package Manager) is a package manager for JavaScript programming language and is used to manage the packages that are required by your project.

To install npm, follow these steps:

1. Download and install Node.js from the [Official Website](https://nodejs.org/en/download/)
2. Open the terminal or command prompt on your local development environment
3. Verify that npm has been installed by running the command: **`npm -v`**

## Steps to Add Your Profile Data

1. Fork the repository: To create a copy of the repository in your GitHub account, click on the "Fork" button in the top right corner of the project repository page.
2. Clone the forked repository: To clone the repository to your local development environment, open the terminal or command prompt and run the following command:
   **`git clone https://github.com/<your-github-username>/<repository-name>.git`**

3. Install dependencies: To install the necessary dependencies for the project, navigate to the project directory and run the following command:
   **`npm install`**
4. Navigate to the **`src/components/developersData.json** folder in your project directory.
6. Add the following JSON object, replacing the placeholder values with your own details:
   ```json
   {

   "name": "Your Name",
    "skills": ["Your Skill 1", "Your Skill 2", "..."],
    "experience": "your experinece like (2 years)",
    "location": "Your Location",
    "githubavatar": "https://github.com/<your-github-username>.png",
    "linkedin": "https://www.linkedin.com/in/<linkedin-username>",
    "github": "https://github.com/<github-username>",
    "twitter": "https://twitter.com/<twitter-username>",
   
   },
   ```
7. Create a new branch: To create a new branch for your profile, run the following command:
    **`git checkout -b add-profile`**
8. Add your changed files to the stage by running the following command:
    **`git add .`**
9. Commit your changes: To save your changes to the branch, run the following command:
    **`git commit -m "add: <your-name>"`**
10. Push to the branch: To push the changes to the remote repository, run the following command:
    **`git push origin add-profile`**
11. Create a pull request: To submit your changes to the main repository, create a pull request by clicking on the "Compare & pull request" button on your forked repository page.


## How to create Pull Request

After pushing your changes to the branch in your forked repository, go to the original repository [PrasannaKumarBhursu/DevelopersHub](https://github.com/PrasannaKumarBhursu/DevelopersHub/)
- Click on the "Pull requests" tab near the top of the repository.
- Click on the green "New pull request" button.
- On the compare page, make sure the base repository and branch are set to the **`PrasannaKumarBhursu/DevelopersHub`** and **`main`** you want to merge your changes into.
- Set the head repository and branch to your forked repository **`<your-github-username>/DevelopersHub`** and the branch like **`add-profile`** you made your changes in.

- Review the changes and ensure everything looks correct.
- Add a **`title`** and **`description`** for your pull request, summarizing the changes you made.
- Click on the **`Create pull request`** button to submit your pull request.

- Wait for review and merge: Wait for the project maintainers to review and merge your changes.

Once your changes are merged, your profile data will be added to the project and  displayed on the project's website.

## Contributing 👨‍💻

Contributions make the open source community such an amazing place to learn, inspire, and create. <br>
**Any contributions you make are truly appreciated!**

## Contributors 🤝

<a href="https://github.com/PrasannaKumarBhursu/DevelopersHub/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=PrasannaKumarBhursu/DevelopersHub" />
</a>

## Support 🙏

Thank you for contributing to  open-source project! We appreciate your support 🚀 <br>
Don't forget to leave a star ⭐


