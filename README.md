# UI candidates test v2.0

This exercise will be made outside Zemoga and delivered between the next 3 days that follows this test.

PNG Comp:
- https://s3-us-west-2.amazonaws.com/zemoga-files/ui/candidates-test/test-ui-v2.png

PSD Comp:
- https://s3-us-west-2.amazonaws.com/zemoga-files/ui/candidates-test/test-ui-v2.psd.zip

## Layout HTML-CSS

- Rely on HTML5 semantics and CSS3 features as possible. Assume cool browsers such as Chrome, Firefox Safari and Edge, latest versions.

Requirements:
- [x] Use media queries to adapt the layout in small screens. (comp not provided, so use your creativity).
- [x] Non safe web font used: Lato (Available on Google fonts)
- [x] You can rely on preprocessors / transpilers such as LESS/SASS or any sort of CSS framework if you want. (Pure CSS is also an option but you must argue the benefits)
- [x] Clicking on one of the links of the main menu redirects the user to the other pages (we only provide a comp for the main page so just use white pages with the title section on them).


## Interaction - JS

Just add interaction in the middle voting boxes: Kanye West, Mark Zuckerberg, Cristina Fernández de Kirchner and Malala Yousafzai.

Requirements:
- [x] Create a data feed in JSON format with the structure that best suits the content for the voting boxes and populate the initial content from it.
- [x] The user can select either thumb up or thumb down button on each of the boxes (when the button is selected, a white border is displayed as featured in the comp)
- [x] Once the user clicks on the "Vote now” button, a message is displayed saying “Thank you for voting!” as well as a vote again button to vote again.
- [x] There is no limit in the amount of votes
- [x] Percentage bars change depending on the up/or downs votes.
- [x] Think on a way to persist the current votes so if the page is refreshed the data is not lost. (could be local in the browser or server side if you have those skills)
- [x] We want to see your vanilla/DOM JS skills so please do not use jQuery.
- [x] You can solve this part with either full Vanilla JS and some patterns, OR any sort of framework such as Angular, React, Vuejs, Ember, etc. Use the one you feel more confortable with.
- [ ] Bonus points: Some sort of Test (E2E, BDD, etc)


## NodeJS

**Only** if you are also applying for NodeJS or any other server side technology, or if you want to also show skills in this part:

Requirements:
- [x] Activate the Login/Signup link in the main menu by showing a basic login dialog.
- [x] If the user is already logged in, this link should be switched to a logout link.
- [x] The login box presents a basic user/pwd form and a button to switch to a signup (registration form with user, pwd, age and marriage status).
- [x] Persist the user data in the server side.
- [x] Only logged in users can vote. (maximum 3 votes x box x user), and votes are persisted per user.
- [x] Create the authentication system and an API with CRUD operations that allows to modify the user information.
- [x] Create an API endpoint that shows votes x user.
- [x] For this part you don't need to apply fancy styles. Just raw boxes and forms.




## Delivery

Show us a glimpse of what you love to do (and know the best of). :facepunch::facepunch::facepunch:

Rely on the readme.md file to reference any key aspect you want to mention about what you applied in the excercise and/or any other relevant information about the steps to get the project up and running.

Send a link to maria.oliveros@zemoga.com pointing to your repository (Github, Bitbucket) including 2 branches. One with the layout part and another one with the interactive (and NodeJS if applies) part.
The master branch should contain the entire exercise.
