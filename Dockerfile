FROM golang:alpine
RUN apk update
RUN apk add nodejs npm
RUN npm install -g yarn
RUN go get github.com/go-bindata/go-bindata/...
RUN go get github.com/elazarl/go-bindata-assetfs/...
WORKDIR /go/src/github.com/ozouai/strive-code-challenge/
COPY . .
WORKDIR /go/src/github.com/ozouai/strive-code-challenge/web/client
RUN yarn install --frozen-lockfile
RUN yarn build

