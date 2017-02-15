import flask
import os
import json
from todo import ToDo

app = flask.Flask(__name__, static_url_path="/static")

# List to keep track of all to-dos
todos = []


@app.route("/")
def index():
    """
    Just returns the index.html file, which should just load the bundle.js and let that do all of the UI work.
    """
    path = os.path.abspath(os.path.join(os.path.dirname(os.path.realpath(__file__))))
    return flask.send_from_directory(path, 'index.html')


@app.route("/todos", methods=["GET"])
def get_todos():
    """
    Returns the current list of To-Dos
    """
    dicts = [t.toDict() for t in todos]
    return flask.jsonify(dicts)


@app.route("/todos", methods=["POST"])
def add_todo():
    """
    Adds a new To-Do to the list
    """
    task = flask.request.form["task"]
    todos.append(ToDo(task))
    return "success"


@app.route("/todos/<int:todo_index>", methods=["POST"])
def update_todo(todo_index):
    """
    Allows you to edit a to-do
    """
    if todo_index >= len(todos):
        resp = flask.make_response(flask.jsonify(error="Invalid ToDo"))
        resp.status_code = 400
        return resp
    todo = todos[todo_index]
    if "task" in flask.request.form:
        todo.task = flask.request.form["task"]
    if "done" in flask.request.form:
        todo.done = flask.request.form["done"].lower() == "true"
    return flask.jsonify(todo.toDict())


if __name__ == "__main__":
    app.run(debug=True)
