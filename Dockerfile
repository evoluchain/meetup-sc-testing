FROM node:6.10

COPY . /workspace
WORKDIR /workspace

RUN apt-get update -yq && \
  npm install express && \
  npm install truffle && \
  npm install ethereumjs-testrpc

EXPOSE 8445