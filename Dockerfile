# Start from the GoLang Alpine container to build the server
FROM golang:alpine as builder
# Install dependencies
RUN apk update
RUN apk add nodejs npm git
RUN npm install -g yarn
RUN go get github.com/go-bindata/go-bindata/...
RUN go get github.com/elazarl/go-bindata-assetfs/...
# For now just wholesale copy the repo, TODO to copy files in stages to maximize caching
WORKDIR /go/src/github.com/ozouai/strive-code-challenge/
COPY . .
# Build the web application
WORKDIR /go/src/github.com/ozouai/strive-code-challenge/web/client
RUN yarn install --frozen-lockfile
RUN yarn build
# Bundle the web application into the go program
WORKDIR /go/src/github.com/ozouai/strive-code-challenge/
RUN go generate ./...
# Build the go program and copy it into the root of the image
RUN go build -o server .
RUN cp server /server
# From the alpine base, copy over the server binary from the builder container to the root.
# This is so that the runtime container isn't bloated with all the build tools.
# Kaniko will automatically handle optimizing the multi stage cache.
FROM alpine
COPY --from=builder /server /server
CMD ["/server"]
