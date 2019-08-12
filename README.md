# Gatsby Theme Organization

Create a landing page for your Github Organization

![screenshot](https://i.imgur.com/AbGyhZr.png)

## What you get from this theme

- Style & Theming integration through [theme-ui](https://theme-ui.com/), [react-boostrap](https://react-bootstrap.github.io/), and [emotionjs](https://emotion.sh)
- A landing page with all your organization projects, configurable through a YML file. 
- Configurable logo, favicon, organization name and title

## Installation

To use this theme in your Gatsby sites, follow these instructions:

1.  Install the theme

    ```sh
    npm install --save @geocine/gatsby-theme-organization
    ```
    > NOTE: If you are starting a new gatsby project, you should also install `react`, `react-dom` and `gatsby`. You may also use the [gasby-starter-organization](https://github.com/geocine/gatsby-starter-organization) if you don't want to set this up.

2.  Add the theme to your `gatsby-config.js`. For more options, [see below](#theme-options):

    ```js
    module.exports = {
      plugins: ['@geocine/gatsby-theme-organization'],
    };
    ```
    > NOTE: If you are starting a new gatsby project, you should create the `gatsby-config.js` file first and the contents shown above
    
3. Create a `data/projects.yml` file. See [details here](#how-to-customize-the-projects).

4.  Start your site
    ```sh
    gatsby develop
    ```

## Usage

### Theme options

| option       | default                          | description                                                                                 |
|--------------|----------------------------------|---------------------------------------------------------------------------------------------|
| contentPath  | data                             | The directory where your `projects.yml` will be stored                                      |
| url          | /                                | The website of your oganization                                                             |
| organization | Organization                     | Your organization name                                                                      |
| title        | The best organization out there! | A short description of your organization                                                    |
| iconName     | icon.svg                         | The icon that shows on the `NavBar`. This the name of the file that needs to be shadowed    |
| logoName     | logo.svg                         | The logo that shows on the `Jumbotron`. This the name of the file that needs to be shadowed |

```js
module.exports = {
  plugins: [
   { 
     resolve: '@geocine/gatsby-theme-organization' 
     options: {
       contentPath: 'data',
       organization: 'Organization',
       url: 'http://organization-site/',
       title: 'An awesome organization',
       iconName: 'icon.png'
       logoName: 'logo.svg'
     }
   }
  ],
};
```

TODO: Currently working on exposing theme properties through [theme-ui](https://theme-ui.com/) to extend via [component shadowing](https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/) 

### How to customize the logo

You need to do [component shadowing](https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/), create a folder at the following path in your site:

```
src/@geocine/gatsby-theme-organization/assets
```
Your file tree would look like this

```
.
├── src
│   └── @geocine
│       └── gatsby-theme-organization
│           ├── logo.svg // this will be your logo
│           ├── icon.svg // this will be the icon for the navbar
│           └── favicon.ico // this willbe your favicon
├── .gitignore
├── gatsby-config.js
├── package.json
└── yarn.lock
```

### How to customize the projects

You need to create a `data` folder on your root directory. Inside the `data` folder , create a `projects.yml` file. Your file tree would now look like this.

```
.
├── data
│   └── projects.yml // You need to create this file
├── src
│   └── @geocine
│       └── gatsby-theme-organixation
│           └── ...
├── .gitignore
├── gatsby-config.js
├── package.json
└── yarn.lock
```

This is an example content of your `projects.yml` file

```
- name: project1
  url: https://github.com/organization/project1
  description: The Project 1

- name: project2
  url: https://github.com/organization/project2
  description: The Project 2
```
