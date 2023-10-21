// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // returns a string that is a link (physical link to site that hosts license)
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // create a conditional to check if license exists
  // call functions renderlicenseBadge, renderLicenseLink
  // use template literal to format license section and call functions
  // return template literal
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const selectedLicense = data.license;
  const selectedLicenseBadge = license.find(license => license.name === selectedLicense).badge;
  //plug in data to template literals
  //data is the layout of what the ultimate readme file will generate
  // hint- call renderLicense function inside this function

  return `# ${data.title}
//write entire readme file with subheadings
`;
}

module.exports = generateMarkdown;


//create a conditional statement to check if the license exists
  //if license exists, 