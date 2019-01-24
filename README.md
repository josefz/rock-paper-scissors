# Rock Paper Scissors

Rock-paper-scissors is a well known hand game played usually between two players. Each player chooses secretly a hand shape between rock, paper or scissors, and then both reveal their choices at the same time. One wins, one loses... Unless, of course, both choose the same item.

This is a simple project that recreates that game. The interesting part about it is that it's built completely from scratch, using no libraries at all, and following a MVC (Model-View-Controller) approach.

Before we get into the matter, [you can start by giving the game a try](https://rock-paper-scissors-mvc.herokuapp.com/)!


## Installation

To make it work locally you just need to download the repository and have installed the npm package manager.

Then run:

```bash
npm install
npm run start
```
And go to [http://localhost:8080](http://localhost:8080)

## A Component/MVC approach

As mentioned before, the interesting part of this project is that it has been made totally framework independent. I had to implement all modules from scratch. This gave me the opportunity to understand better and get a deeper knowledge of how actual frameworks work, and to come up with solutions to problems that usually get solved out-of-the-box by most of those frameworks... It has ended up being a big challenge!

In this homemade framework, the biggest entity is the **Component**. A component encapsulates all the functionality of a certain part of the app, using a **MVC design pattern**. A Component is created sending a Model (to hold the data), a View( with the HTML to render ) and a Controller (that handles communication between what happens in the View and what it's stored in the Model).

The flow is as follows: each interaction in our view that has an event attached, triggers a method within the controller that will update our model, generate the new view (with the new events attached) and render in the actual DOM replacing the old/now obsolete component.

And that's it! We have a homemade framework. You can find out more about how these these classes are implemented taking a look at the code in the [*lib*](https://github.com/josefz/rock-paper-scissors/tree/master/src/lib) folder.



## The actual game
There are only two classes to handle the game flow: Game and Round. Each Game contains the current state of the app, stores user and computer points, draws, the round we are in, and a historic of games, which is not used at the moment but might be of help in a newer version... (who knows!)

And then there are Rounds, which is just a class that generates a new simulation of the game, assigning a random choice to the computer and calculating who is the winner of that round. This is done by a very simple hashmap that we store in the game config, so we could easily change it if we suddenly decide that from now on rocks beats everyone! (Or...if we want to implement new items like lizard, spock, etc)

```
winsAgainstMap: {
    rock: [ 'scissors' ],
    paper: [ 'rock' ],
    scissors: [ 'paper' ]
}
```



## Running the tests
The code is unit tested using Jest and the Babel compiler (to handle ES6 compatibility on the Node.js side). Run the tests using:


```bash
npm run test
```

## References

To make this project possible I had to do a few reads on some useful and interesting posts ands videos of people that tried to do this approach before. (I'm not reinventing the wheel at all). So here is a couple of them that were specially inspiring during the development of this project:

* [Frontend Face-Off - Vanilla JS MVC with CJ Reynolds](https://www.youtube.com/watch?v=ZBilSF7Oi1k) Only 28' video and actually pretty fun to watch. The guy nails it.
* [The MVC Design Pattern in Vanilla JavaScript](https://www.sitepoint.com/mvc-design-pattern-javascript/) Another great example. It helped me a lot on how to structure my components using the MVC.

##License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/josefz/rock-paper-scissors/blob/master/LICENSE) file for details.
