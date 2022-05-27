# 20 React: React Portfolio

# McLean Portfolio

This application is a *first draft* of a revised professional portfolio that uses React as its basis. The application is deployed to GitHub Pages via my github.com/mcleanGit profile and the code repo is at mcleanGit as well (see below). 

## User Story
The User Story that forms the basis for the development of the app is reviewed here:
```md
AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
 SO THAT I can assess whether they're a good candidate for an open position
```

## Acceptance Criteria
```md
GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
 THEN I am presented with a page containing a header, a section for content (Portfolio), and a footer
WHEN I view the header
 THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
WHEN I view the navigation titles
 THEN I am presented with the titles About, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
WHEN I click on a navigation title
 THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
WHEN I load the portfolio the first time
 THEN the About Me title and section are selected by default
WHEN I am presented with the About Me section
 THEN I see a recent photo or avatar of the developer and a short bio about them
WHEN I am presented with the Portfolio section
 THEN I see titled images of *six* of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
WHEN I am presented with the Contact section
 THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
 THEN I receive a notification that this field is required (done)
WHEN I enter text into the email address field
 THEN I receive a notification if I have entered an invalid email address (done)
WHEN I am presented with the Resume section
 THEN I see a link to a downloadable resume and a list of the developer’s basic coding proficiencies, as well as the broader academic and administrative experience
WHEN I view the footer
 THEN I am presented with text (or icon) links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Academia.edu)
```

## Getting Started
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The app runs from the CLI in development mode with `npm start` and can be viewed on the `localhost:3000` browser. The app is bundled in production mode and optimized using `npm run build` which creates a build folder in the local repo. The app is deployed with `npm run deploy` to the homepage in GitHub pages (see below).

The application uses `create-react-app` to build the portfolio, which includes the following:
* A single `Header` component that appears on multiple pages
* A single `Navigation` component within the header that will be used to conditionally render the different sections of your portfolio
* A single `Project` component that will be used multiple times in the Portfolio section
* A single `Footer` component that appears on multiple pages

### Projects
The six selected projects featured in the portfolio include the following information:
* An image of the deployed application (screenshots)
* The title of the project
* A link to the deployed application
* A link to the corresponding GitHub repository

### Design
*Note:* a proper design for this application would incorporate and expand styling from previous portfolio efforts. This design work had to be deferred to a later stage. The eventual idea for my porfolio would be to integrate my legacy-and-ongoing administrative and research work with my infrastructure projects management and digital innovation activities. The recent coding experience will have practical applications in music research and will also be of considerable value in ongoing projects management.

## Review

The following items are submitted for review:

* The URL of the functional, deployed application.
https://mcleangit.github.io/myapp/

Screenshots:
![](../../../McLeanPortfolio-About.png)
![](../../../McLeanPortfolio-Projects1-2.png)
![](../../../McLeanPortfolio-Projects3-4.png)
![](../../../McLeanPortfolio-Projects5-6.png)
![](../../../McLeanPortfolio-Resume.png)

* The URL of the GitHub repository, "with a unique name and a README that describes the project".
https://github.com/mcleanGit/myapp
*Note:* the far-too-generic 'myapp' repo name was retained after several techical overwrites obliterated my original repo with the deployed build! (Got technical assistance to fix the problem.) Unfortunately, a significant commit history was lost as a result!


- - -
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
