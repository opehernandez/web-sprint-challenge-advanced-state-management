# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
A: Context API helps solve the problem of connecting the different components in our application, without having to use
prop driling in basic react, and also avoids all the boilerplate of redux state management.


2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
A: Actions: Is where all the actions that our program uses are stored and returned, it helps avoid common mispelling errors throughout our app and maintains a single place where all the actions are created.
Reducers: these are the heart of state management, they receive an action from the actions file and change the state based on those actions, they are the only ones responsible
for store state changing.
Store: Is the single inmutable state object in Redux, is where the state is maintained and passed to the UI, also the only source of truth.
Single source of Truth: Having a single source of truth means the the data we are managing in the app is coming from only and only one place, that way we avoid duplicate data
and make sure we are only consuming data from the place we want to consume.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
Redux Thunk is a library that allows redux to work async. 

4. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux is my favorite, even tho is a bit cumbersome when it comes to connect component because all of its boilerplate, it achieves efficient and secure state management when properly
implemented, once you have Redux setup, its easy to scale the application without having to change a lot.