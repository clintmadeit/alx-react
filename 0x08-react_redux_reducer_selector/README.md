# 0x09 React Redux Reducers & Selectors
This module begins the process of creating Reducers and Selectors for Redux

Reducers take in the state or part of the state of the application, and apply an action to the store. An action describes something that happened in the application, such as clicking a button or marking a notification as read. The Reducers change the store based on what happened in the action, and return a new state. So when a user logs in, the state should update to reflect a user's information. The redux store takes all the reducers and keeps them on hand for when various actions are logged to the store.

Selectors take what's currently in the state and returns them very simply to any part of the program that is asking for them. They're just accessor methods that look at very specific values in the state and make them accessible to the rest of the program.