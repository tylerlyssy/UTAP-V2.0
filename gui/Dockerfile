FROM node

# install simple http server for serving static content
RUN echo "fs.inotify.max_user_watches=524288" >> /etc/sysctl.conf

# make the 'app' folder the current working directory
WORKDIR /gui

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

ENTRYPOINT npm run serve

## build app for production with minification
#RUN npm run build
