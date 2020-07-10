.PHONY: protos
protos:
	mkdir -p quizapipb
	protoc --proto_path=protos --twirp_out=quizapipb --go_out=quizapipb ./protos/quizapi.proto
	mkdir -p web/client/src/protos
	./protos/node_modules/.bin/pbjs -t static-module -w commonjs -o web/client/src/protos/index.js ./protos/quizapi.proto
	./protos/node_modules/.bin/pbts -o web/client/src/protos/index.d.ts web/client/src/protos/index.js
