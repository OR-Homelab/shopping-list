[![CodeQL Advanced](https://github.com/OR-Homelab/shopping-list/actions/workflows/codeql.yml/badge.svg)](https://github.com/OR-Homelab/shopping-list/actions/workflows/codeql.yml)

# Shopping-list

A collaborative web app for grocery and shopping lists. Add and check off items with live updates, and cross-device sync. Perfect for families, roommates, and teams!

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

The application can be deployed using Docker with the provided [docker-compose](./docker-compose.yml) file from the repository or run as a standalone application by downloading the repository.

### docker-compose

- Docker 25.x or higher
- Docker Compose 2.24.x or higher
- Windows, macOS, or Linux operating system

### Node.js self hosted

- Node.js 19.x or higher
- MongoDB 7.x or higher
- Windows, macOS, or Linux operating system

## Installation

The installation process varies depending on the usage of the provided [docker-compose](./docker-compose.yml) file, or downloading the entire repository.

### docker-compose installation

1. Create a folder where the files for the application will be stored.
2. Create a file named `docker-compose.yml`.
3. Paste the contents of the [docker-compose](./docker-compose.yml) file into the newly created `docker-compose.yml` file.
    - The environment variables of the [docker-compose](./docker-compose.yml) file should be changed before running the application.
    - When registering the first user the `REQUIRE_PASSWORD_FOR_REGISTER` variable should be set to `False`. (**REMEMBER TO CHANGE THE VALUE BACK TO TRUE!**)
4. Run `docker-compose up` to start the application.

### Node.js installation

1. Clone the repository:
    - `git clone https://github.com/OR-Homelab/shared-shopping-list.git`
    - `cd shared-shopping-list`
2. Install dependencies:
    - `npm install`
3. Setup the .env file
    - Remove the `.example` extension from the [.env.example](./.env.example) file. (*The file should be named '.env'*)
    - Change the values in the `.env` file.
4. Start the application:
    - `npm start`

The application should handle the database setup itself, as long as a proper MongoDB url is given in the `.env` file.

Look at the [Usage](#usage) part of the readme for a user-creation tutorial.

## Usage

Follow these steps, to use the shared-shopping-list application.

### Registering your first user

1. Stop the application if it is running.
2. Change the variable called `REQUIRE_PASSWORD_FOR_REGISTER` to `False` in the `.env` file.
3. Start the application again.
4. Access the register page from `(YOUR_URL)/register`, to register your first user.
5. Stop the application and change the `REQUIRE_PASSWORD_FOR_REGISTER` variable back to `True`.

After these steps are completed, the registered users, will be able to register new users on the register page.

### Using the application

1. Login to the application (*If a user is not already registered, read [Registering your first user](#registering-your-first-user)*)
2. Using the nav-bar on the left, items can be added and removed from the shopping list.

## Contributing

1. If you plan on contributing new features, functions or extensions to the project you must first open an issue.
2. If you encounter any bugs please file an issue with an adequate explanation.
3. For both features and bugs, you are more than welcome to present your own solution.
4. License Compatibility – All contributions must comply with the project's license and should not include third-party code that isn't compatible.
5. Code Style & Standards – Ensure that contributions follow the project's coding style and formatting guidelines and "DRY".
6. Pull Request naming - Branch naming conventions (e.g., feature/feature-name or bugfix/issue-number).
7. Pull Request msg format – Clear commit messages following a standard format (e.g., Conventional Commits).
8. Pull Request descriptions – Ensuring that the PR(s) include a description of the changes made.
9. Testing Requirements – The submitted PR will need to pass any/all given testing requirements.
10. Documentation Updates – Remember adding and notifying documentation updates when adding new features or making changes.
11. Review & Feedback Process – All contributions will be reviewed by a project administrator. The administrator has full discretion to accept, reject, or request modifications based on their own criteria, which may include but are not limited to project vision, code quality, maintainability, and long-term goals. Contributions that do not align with the administrator’s standards or direction may not be merged, regardless of technical merit.

## License

This project is licensed under the Apache-2.0 License - see the [LICENSE](LICENSE) file for details.

## Third-Party Licenses

- body-parser (MIT License)
- connect-ensure-login (MIT License)
- dotenv (BSD-2-Clause License)
- ejs (Apache-2.0 License)
- express (MIT License)
- passport-local-mongoose (MIT License)
- passport (MIT License)
- mongoose (MIT License)
- express-slow-down (MIT License)
- express-session (MIT License)
- express-rate-limit (MIT License)
- path (MIT License)

## Last Updated

This README was last updated on 2025-03-30.
