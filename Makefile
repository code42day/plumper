NODE_BIN=./node_modules/.bin
PROJECT=vis-why

all: check compile

check: lint test

lint: | node_modules
	$(NODE_BIN)/jshint index.js test benchmark

test: | node_modules
	$(NODE_BIN)/mocha --require should test

benchmark: | node_modules
	$(NODE_BIN)/matcha --reporter plain benchmark

compile: build/build.js

build/build.js: index.js | node_modules
	mkdir -p build
	browserify --require ./index.js:$(PROJECT) --outfile $@

node_modules: package.json
	yarn && touch $@

clean:
	rm -rf build

distclean: clean
	rm -fr node_modules

.PHONY: clean distclean lint check all compile test benchmark
