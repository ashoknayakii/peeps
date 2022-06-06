
# Peeps

## License 

[![License](https://img.shields.io/badge/license-None-blue.svg)](https://opensource.org/licenses/None)

## Description
Peeps is a social network application allowing users to connect with one another, share thoughts and react to them.

### Programming Languages
* Javascript
* ES6 
* Node
* NoSQL

## Installation
Install the application by typing "npm i" in the command line and starting the server by typing "npm start"

## Usage

Use Insomnia to perform CRUD operations.  Route endpoints are as follows:

User 

* Get all users : GET api/users
* createUser : POST api/users
* Get user by ID : GET api/users/:id
* updateUser : PUT api/users/:id
* deleteUser : DELETE api/users/:id

Thoughts

* Get all thoughts : GET api/thoughts
* Get Thought by ID : GET api/thoughts/:id
* addThought : PUT api/thoughts
* updateThought : PUT api/thoughts/:id
* removeThought : DELETE api/thoughts/:id

Reactions

* addReaction : POST api/thoughts/:id/reactions
* removeReaction : DELETE api/thoughts/:id/reactions/:id

Friends 

* addFriend : POST api/users/:id/friends
* removeFriend : DELETE api/users/:id/friends/:id


### Link to Demo

<https://drive.google.com/file/d/1uSWKttwwzIBQLXTh3Ai4MWfytlEU2zJJ/view>

<https://drive.google.com/file/d/1GGTK30LF4gYP3-lKDsIy66VRvQSNk115/view>

### URL of the GitHub repository:
<https://github.com/ashoknayakii/peeps.git>
    