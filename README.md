### Setup
* Fork, Clone, yarn install, yarn start
* Do Not use the instructions as your guide for what code to type, use the reference guide project (address book)

### App.js
* Import BrowserRouter and Route from react-router-dom
* Import components needed
* Create the appropriate routes `{/* PUT YOUR ROUTES HERE */}`

### Routes
* /               -> Dashboard
* /charts     -> Charts
* /tables     -> Tables
* /settings  -> Settings
* /wall        -> Wall
* /profiles   -> Profiles
* /marquee/:text-> Marquee
* /profile/:id -> Profile

### Create these components. The content of the components is not important, just put anything `<div> whatever </div>`
* Charts.js
* Tables.js
* Settings.js
* Wall.js

### Existing components
* Profiles.js
    * Import Link from react-router-dom
    * change the `<a>` to be a Link that links to `/profile/ + user.id`
* Profile.js 
    * Change the hard coded 0 with the value from the parameter id
* Dashboard.js
* Marquee
    * replace the comment with the text parameter from the route

### SideNav
* Import Link from react-router-dom
* Create links to all the routes
* Hard code some links to Marquee
    * /marquee/iloveroutes
    * /marquee/reactrouterrules
    * …etc
