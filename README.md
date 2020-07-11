# Quiz Server

This is a simple application that allows for the creation of Quiz and subsequent completion of a quiz.

It requires MySQL to be running locally, with a DB existing already named `quiz`, with the username `root` and password `password`.

The backend can be started by calling `go run .` in the repo root, provided you have Golang installed.

Once the backend is running, you can then run the web app by first installing the yarn dependencies `yarn install` within `web/client`. Make sure you're using node >10.16.

Once the dependencies are installed, you can launch the server by doing `yarn start`, which should open your browser to the landing page.

The quiz admin page is located at `/admin`