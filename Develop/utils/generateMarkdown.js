// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if  (license !== 'no license') {
    return console.log("No license");
  }
  else {
    return ' ';
  }
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return console.log("No license");}
    else {
      return ' ';
    }}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'no license') {
    return `## [License] (#table-of-contents)
    The application is covered under the following license:
    ${renderLicenseLink(license)}`;
  } else{
    return ' ';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  

  
  ## [Description](#table-of-contents)

  ${data.what}

  ${data.why}

  ${data.how}

  ## [Installation](#table-of-contents)

  ${data.installation}

  ## [Usage](#table-of-contents)

  ${data.instructions}
  
  For more information on how to add screenshots for examples, visit the following website:
  
  [Mark Down Tutorial](https://agea.github.io/tutorial.md/)
  
  ${renderLicenseSection(data.license)}

  ## [Contributing](#table-of-contents)

  ## [Tests](#table-of-contents)

  ${data.test}

  ## [Questions](#table-of-contents)

  Please contact me using the following links:

  [GitHub](https://github.com/${data.githubUsername})

  [Email: ${data.email}](mailto:${data.email})
`;;
}

module.exports = generateMarkdown;
