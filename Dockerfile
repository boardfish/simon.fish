# base image
FROM node:9.6.1

# set working directory
RUN mkdir /opt/gateway
WORKDIR /opt/gateway

# add `/opt/gateway/node_modules/.bin` to $PATH
ENV PATH /opt/gateway/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /opt/gateway/package.json
RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent
COPY . /opt/gateway

# start app
CMD ["npm", "start"]
