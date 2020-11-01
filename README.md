# SPACE X 
first for pipeline creation for react website (I was never used this before so spent some time on it :) )
 - heroku buildpacks -a '<appname>'
 - buildpacks:set mars/create-react-app -a '<appname>'
 
 setup for ie11
  - Install react-app-polyfill using simple npm install
  - Import react-app-polyfill/ie11 and react-app-polyfill/stable at top of your index.js. 
  add ie in development
  "browserslist": {
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version",
      "ie 11"
    ]
  }
 delete .cache folder from your node_modules
 
 Heroku: https://xtspacexapp.herokuapp.com/
 
created this React app through Create-React-App Boilerplate. 
As Per given documents, the comoponents is created
for Filter - By Year I have taken the data from the response itself so the data will be populated as per given launch_year, could not worked on Routing as much and done for some basic.

Handled the filter on back and page referesh so data can be persists and the selected state will be active/highlighted for selected filter. 
Test cases have done for the component, it is not yet completed 100% but try to cover 50%+. 

For Best Pratics:
 - Used stateless for filter and Cards block component and App is the pure component so the render will only happen if any records will change.
 - Only use the const and let block level datatypes and it not unused
 - Documented the code so it easy to understand
 - tried to maintain the code as optimized as possible. 
 - DRY code approched so the code will not repeated or less. 
 - Accessbility enabled used HTML5 tags for template, less used of div and uses of section aside header footer h1 tags.
 - Handled Responsive for Mobile and Desktop as per given template. 
desktop_1440.png, mobile_view_700px.png, Tablet_1024.png have been added in for ref.







