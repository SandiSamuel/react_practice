# React/Redux + Flask Practice Project

This is a practice project for anyone who wants to come up to speed with the basics of React/Redux. It includes a Python server component to provide a simple backend.

## Project Outline:

This project skeleton should provide all of the infrastructure necessary to get up and running with React/Redux. It has a working build system (webpack + babel), it includes a simple setup script to install the requirements (note: only works for conda right now), and it has the basic wiring of the infrastructure necessary to get your feet wet building a user interface with React.

### Install Instructions:

1. First, [install anaconda](https://www.continuum.io/downloads)
2. After the installation, you'll need to make sure you've got conda on your path. `which conda` should return something like "~/anaconda2/bin/conda"; if you just installed conda, try starting a new bash session (new terminal window / `bash` will do the trick) to get the .bash_profile/.bashrc changes from the installer to apply.
3. Fork this repository on GitHub
4. Clone the repo to your machine: `git clone git@github.com:YOUR_USERNAME/react_practice`
5. `cd` into the project's directory
6. `bash setup.sh` should install the dependencies for the project

### Running instructions:

First, you'll need to activate the conda environment:

```
source activate react_practice
```

Then, to run the development server (which will automatically watch your source code and rebuild immediately):

```
npm run dev
```

and open a browser to [localhost:5000](http://localhost:5000/). You should be greeted with a very simple page.

### Tasks:

1. Build a container and the necessary widgets to display the To Do list and replace the existing HTML in the RootContainer with it. You should pass in the array of to-dos from the RootContainer.
2. Provide a way for users to add a new To-Do
3. Provide a way for users to complete a To-Do
4. Provide a way for users to edit the task of a To-Do
5. Provide a way for users to remove a To-Do (Note: this will require editing the server and adding a new endpoint, as well as interacting with the Redux parts of the application directly)

#### Documentation Links:

[React Bootstrap](https://react-bootstrap.github.io/); You should use this library's utilities for the user interface.
[React](https://facebook.github.io/react/docs/hello-world.html); this is handy for reference. Understanding the lifecycle of a react component is very, very useful.
[Redux](http://redux.js.org/); you hopefully shouldn't need this one, but it's a good read and helps communicate some of the ideas behind the library.
[Flask](http://flask.pocoo.org/docs/0.12/) This is the library used for hosting the web application. You can learn a bit more about the specifics if you like, or you can just copy the example code I've provided and edit it to suit your needs.