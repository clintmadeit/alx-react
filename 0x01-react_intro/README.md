# WHAT IS REACT?

React is a JavaScript library - one of the most popular ones, with over [100,000 stars on GitHub](https://github.com/facebook/react).
React is not a framework (unlike Angular, which is more opinionated).
React is an open-source project created by Facebook.
React is used to build user interfaces (UI) on the front end.
React is the view layer of an MVC application (Model View Controller)
One of the most important aspects of React is the fact that you can create components, which are like custom, reusable HTML elements, to quickly and efficiently build user interfaces. React also streamlines how data is stored and handled, using state and props.

## Setup and Installation

There are a few ways to set up React, and I'll show you two so you get a good idea of how it works.

### Static HTML File

This first method is not a popular way to set up React and is not how we'll be doing the rest of our tutorial, but it will be familiar and easy to understand if you've ever used a library like jQuery, and it's the least scary way to get started if you're not familiar with Webpack, Babel, and Node.js.

Let's start by making a basic index.html file. We're going to load in three CDNs in the head - React, React DOM, and Babel. We're also going to make a div with an id called root, and finally we'll create a script tag where your custom code will live.

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />

    <title>Hello React!</title>

    <script src="https://unpkg.com/react@^16/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@16.13.0/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
  </head>

  <body>
    <div id="root"></div>

    <script type="text/babel">
      // React code will go here
    </script>
  </body>
</html>

I'm loading in the latest stable versions of the libraries as of the time of this writing.

React - the React top level API
React DOM - adds DOM-specific methods
Babel - a JavaScript compiler that lets us use ES6+ in old browsers
The entry point for our app will be the root div element, which is named by convention. You'll also notice the text/babel script type, which is mandatory for using Babel.

Now, let's write our first code block of React. We're going to use ES6 classes to create a React component called App.

class App extends React.Component {
  //...
}

Now we'll add the render() method, the only required method in a class component, which is used to render DOM nodes.

class App extends React.Component {
  render() {
      return (
          //...
      );
  }
}

Finally, we're going to use the React DOM render() method to render the App class we created into the root div in our HTML.

ReactDOM.render(<App />, document.getElementById('root'))

Here is the full code for our index.html.

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />

    <title>Hello React!</title>

    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
  </head>

  <body>
    <div id="root"></div>

    <script type="text/babel">
      class App extends React.Component {
        render() {
          return <h1>Hello world!</h1>
        }
      }

      ReactDOM.render(<App />, document.getElementById('root'))
    </script>
  </body>
</html>

Now if you view your index.html in the browser, you'll see the h1 tag we created rendered to the DOM.

Cool! Now that you've done this, you can see that React isn't so insanely scary to get started with. It's just some JavaScript helper libraries that we can load into our HTML.

We've done this for demonstration purposes, but from here out we're going to use another method: Create React App.

### Create React App

The method I just used of loading JavaScript libraries into a static HTML page and rendering the React and Babel on the fly is not very efficient, and is hard to maintain.

Fortunately, Facebook has created Create React App, an environment that comes pre-configured with everything you need to build a React app. It will create a live development server, use Webpack to automatically compile React, JSX, and ES6, auto-prefix CSS files, and use ESLint to test and warn about mistakes in the code.

To set up create-react-app, run the following code in your terminal, one directory up from where you want the project to live.

### React Developer Tools

There is an extension called React Developer Tools that will make your life much easier when working with React. Download React DevTools for Chrome, or whatever browser you prefer to work on.

After you install it, when you open DevTools, you'll see a tab for React. Click on it, and you'll be able to inspect components as they're written. You can still go to the Elements tab to see the actual DOM output. It may not seem like that much of a deal now, but as the app gets more complicated, it will become increasingly necessary to use.

### JSX: JavaScript + XML

As you've seen, we've been using what looks like HTML in our React code, but it's not quite HTML. This is JSX, which stands for JavaScript XML.

With JSX, we can write what looks like HTML, and also we can create and use our own XML-like tags. Here's what JSX looks like assigned to a variable.

const heading = <h1 className="site-heading">Hello, React</h1>

Using JSX is not mandatory for writing React. Under the hood, it's running createElement, which takes the tag, object containing the properties, and children of the component and renders the same information. The below code will have the same output as the JSX above.

const heading = React.createElement('h1', { className: 'site-heading' }, 'Hello, React!')

JSX is actually closer to JavaScript, not HTML, so there are a few key differences to note when writing it.

className is used instead of class for adding CSS classes, as class is a reserved keyword in JavaScript.
Properties and methods in JSX are camelCase - onclick will become onClick.
Self-closing tags must end in a slash - e.g. <img />
JavaScript expressions can also be embedded inside JSX using curly braces, including variables, functions, and properties.

const name = 'Tania'
const heading = <h1>Hello, {name}</h1>

JSX is easier to write and understand than creating and appending many elements in vanilla JavaScript, and is one of the reasons people love React so much.

### Components

So far, we've created one component - the App component. Almost everything in React consists of components, which can be class components or simple components.

Most React apps have many small components, and everything loads into the main App component. Components also often get their own file, so let's change up our project to do so.

Remove the App class from index.js, so it looks like this.

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

ReactDOM.render(<App />, document.getElementById('root'))

We'll create a new file called App.js and put the component in there.

import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
      </div>
    )
  }
}

export default App

We export the component as App and load it in index.js. It's not mandatory to separate components into files, but an application will start to get unwieldy and out-of-hand if you don't.

### Class Components

Let's create another component. We're going to create a table. Make Table.js, and fill it with the following data.

import React, { Component } from 'react'

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Charlie</td>
            <td>Janitor</td>
          </tr>
          <tr>
            <td>Mac</td>
            <td>Bouncer</td>
          </tr>
          <tr>
            <td>Dee</td>
            <td>Aspiring actress</td>
          </tr>
          <tr>
            <td>Dennis</td>
            <td>Bartender</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Table

This component we created is a custom class component. We capitalize custom components to differentiate them from regular HTML elements. Back in App.js, we can load in the Table, first by importing it in:

import Table from './Table'

Then by loading it into the render() of App, where before we had "Hello, React!". I also changed the class of the outer container.

import React, { Component } from 'react'
import Table from './Table'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Table />
      </div>
    )
  }
}

export default App

Now we've seen what a custom class component is. We could reuse this component over and over. However, since the data is hard-coded into it, it wouldn't be too useful at the moment.

### Simple Components

The other type of component in React is the simple component, which is a function. This component doesn't use the class keyword. Let's take our Table and make two simple components for it - a table header, and a table body.

We're going to use ES6 arrow functions to create these simple components. First, the table header.

Everything should appear as it did before. As you can see, components can be nested in other components, and simple and class components can be mixed.

A class component must include render(), and the return can only return one parent element.

As a wrap up, let's compare a simple component with a class component.

Simple Component
const SimpleComponent = () => {
  return <div>Example</div>
}
Class Component
class ClassComponent extends Component {
  render() {
    return <div>Example</div>
  }
}
Note that if the return is contained to one line, it does not need parentheses.

## Props

Right now, we have a cool Table component, but the data is being hard-coded. One of the big deals about React is how it handles data, and it does so with properties, referred to as props, and with state. Now, we'll focus on handling data with props.

First, let's remove all the data from our TableBody component.

const TableBody = () => {
  return <tbody />
}

Then let's move all that data to an array of objects, as if we were bringing in a JSON-based API. We'll have to create this array inside our render().

class App extends Component {
  render() {
    const characters = [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]

    return (
      <div className="container">
        <Table />
      </div>
    )
  }
}

Now, we're going to pass the data through to the child component (Table) with properties, kind of how you might pass data through using data- attributes. We can call the property whatever we want, as long as it's not a reserved keyword, so I'll go with characterData. The data I'm passing through is the characters variable, and I'll put curly braces around it as it's a JavaScript expression.

return (
  <div className="container">
    <Table characterData={characters} />
  </div>
)

Now that data is being passed through to Table, we have to work on accessing it from the other side.

src/Table.js
class Table extends Component {
  render() {
    const { characterData } = this.props

    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} />
      </table>
    )
  }
}

If you open up React DevTools and inspect the Table component, you'll see the array of data in the property. The data that's stored here is known as the virtual DOM, which is a fast and efficient way of syncing data with the actual DOM.

This data is not in the actual DOM yet, though. In Table, we can access all props through this.props. We're only passing one props through, characterData, so we'll use this.props.characterData to retrieve that data.

I'm going to use the ES6 property shorthand to create a variable that contains this.props.characterData.

Since our Table component actually consists of two smaller simple components, I'm going to pass it through to the TableBody, once again through props.

src/Table.js
class Table extends Component {
  render() {
    const { characterData } = this.props

    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} />
      </table>
    )
  }
}

Right now, TableBody takes no parameters and returns a single tag.

src/Table.js
const TableBody = () => {
  return <tbody />
}
We're going to pass the props through as a parameter, and map through the array to return a table row for each object in the array. This map will be contained in the rows variable, which we'll return as an expression.

src/Table.js
const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}
If you view the front end of the app, all the data is loading in now.

You'll notice I've added a key index to each table row. You should always use keys when making lists in React, as they help identify each list item. We'll also see how this is necessary in a moment when we want to manipulate list items.

Props are an effective way to pass existing data to a React component, however the component cannot change the props - they're read-only. In the next section, we'll learn how to use state to have further control over handling data in React.

## State

Right now, we're storing our character data in an array in a variable, and passing it through as props. This is good to start, but imagine if we want to be able to delete an item from the array. With props, we have a one way data flow, but with state we can update private data from a component.

You can think of state as any data that should be saved and modified without necessarily being added to a database - for example, adding and removing items from a shopping cart before confirming your purchase.

To start, we're going to create a state object.

src/App.js
class App extends Component {
  state = {}
}