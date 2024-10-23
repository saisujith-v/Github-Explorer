# GitHub Explorer

GitHub Explorer is a web application that allows users to explore GitHub repositories, view repository details, and search for repositories based on different criteria. This project is built using **React** with **Redux** for state management and leverages the GitHub API for fetching repository data.

## Features

- **Search Repositories**: Search for any repository on GitHub using keywords.
- **View Repository Details**: See detailed information about each repository, including stars, forks, open issues, etc.
- **State Management with Redux**: Efficient state management and predictable state updates using Redux.
- **Responsive Design**: Optimized for mobile and desktop viewing.
- **API Integration**: Powered by GitHub's REST API to fetch real-time data.

## Tech Stack

- **React**: Frontend framework for building the UI.
- **Redux**: For managing global state across the app.
- **GitHub REST API**: Used to retrieve repository data.
- **CSS/Styled Components**: For styling the user interface.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/saisujith-v/Github-Explorer.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Github-Explorer
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

The application will now be running on `http://localhost:3000`.

## Usage

1. Enter a repository name or keyword in the search bar.
2. View the list of repositories that match your query.
3. Click on a repository to view more detailed information, such as the number of stars, forks, issues, etc.

## Project Structure

- **src/**
  - **components/**: Reusable React components.
  - **redux/**: Redux store setup, reducers, and actions for state management.
  - **services/**: API integration for fetching repository data from GitHub.
  - **pages/**: Main views and pages for the app.
  - **styles/**: Styling files for the application.

## Redux Integration

This project uses **Redux** to manage the global state of the application. The Redux store handles the state of the repositories and the user interactions with the app. The main state actions include:

- **FETCH_REPOSITORIES**: Fetches the list of repositories based on the search query.
- **SET_SELECTED_REPOSITORY**: Stores the details of the selected repository for display.
- **CLEAR_REPOSITORIES**: Resets the repository list when a new search is made.

Redux ensures a predictable flow of data and helps in maintaining state consistency throughout the app.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please feel free to fork the repository and create a pull request.

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature-branch
   ```

3. Commit your changes:

   ```bash
   git commit -m "Add some feature"
   ```

4. Push to the branch:

   ```bash
   git push origin feature-branch
   ```

5. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
