FROM ubuntu:latest

RUN apt-get update && apt-get install -y \
    nodejs \
    npm \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/app

COPY server.js /usr/app/server.js
COPY start.sh /start.sh
COPY package.json /usr/app/package.json
RUN npm install

EXPOSE 3000
COPY --from=tiesv/tired-proxy /tired-proxy /tired-proxy

CMD ["/bin/bash", "/start.sh"]
