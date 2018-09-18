# Idea Board (v1)
This is an Idea Board which allows users to create notes to express their ideas. 

## Setup
React, Redux, Material UI

Others worth noting: Babel, Webpack, Moment, React Router Dom, Masonry, Chartjs, Redux-Persist

## To Use
- clone repo
- npm install
- npm run

## Current Features
- CRUD notes
- On load, cursor auto focus on create note title input
- Order based 3 Filters
- CRUD labels for notes
- Filter based on labels
- Info on date created and last edited
- View Profile
- View Idea board progression (Chartjs)
- Responsive

(hover over edited date to get created)

## Next plans
- separate css style used for Material UI components
- remove duplicate labels
- Add Firebase integration to store notes and user auth
- Ability to filter by custom labels
- Share notes
- Archive Note
- Colour notes

## Redux and Thunk
I added thunk and wrote my action files the way I did to simulate async calls. This is in preparation for network latency and async calls when I move the project to firebase. You can increase latency by modifying the settimeout functions in `src/redux/actions` 

## Nice to have
AB testing

## Not a bug, a feature
### Card moves when save
You'll notice that a card goes to the top of the list when you edit it. This is due to how the `noteData` object is being updated. I thought about 'fixing' this (leaving cards in the same place as before), but concluded that it was nice having your last edited card closer to the top. Why scroll through a long list of cards to find the last one you worked on?

However, adding a tag triggers the same behaviour (without saving), which could be considered an undesired feature. Again, this is because I have to update the to store to store each label, which in turns triggers the behaviour.

### Card text flashes when I save
This is because there is a delay between sending the request to save and the save happening. Normally, you have something like a loading icon to represent a change. This could be added with a `isCardLoading` state.

### I filter by Title, but card changes when I edit
This is similar to the above mentions. All cards are stored in one big object, object by default are agnostic in its order. The rebuilding of this object does not take order into account order filtering when updating.

## To Improve
### Types

### Components
Components can be further modularize into presentation and containers. This is an ongoing process, but could be done within a few hours given the app current state.

### Testing.
I'm not good at testing. I fully understand the benefits; I understand why it's important. Unfortunately I haven't had much experience (yet!) writing test cases so my proficiency in this is very limited and would take longer than the permitted time. Obviously, this will not always be the case. 

### Security. 
With these sorts of applications it's important to always check against vulnerability such as XSS. React automatically automatically escape string, but there are still some aspect on vulnerability. This is something to further consider.

### Notes and AddNote
These files are very similar and can therefore be converted into one component.

## "Hey, you! I can make this better!"
Sure. Make a pull request ;).