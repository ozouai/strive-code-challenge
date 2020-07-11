FROM golang:alpine as builder
RUN apk update
RUN apk add nodejs npm git
RUN npm install -g yarn
RUN go get github.com/go-bindata/go-bindata/...
RUN go get github.com/elazarl/go-bindata-assetfs/...
WORKDIR /go/src/github.com/ozouai/strive-code-challenge/
COPY . .
WORKDIR /go/src/github.com/ozouai/strive-code-challenge/web/client
RUN yarn install --frozen-lockfile
RUN yarn build
WORKDIR /go/src/github.com/ozouai/strive-code-challenge/
RUN go generate ./...
RUN go build -o server .
RUN cp server /server
FROM alpine
COPY --from=builder /server /server
CMD ["/server"]
