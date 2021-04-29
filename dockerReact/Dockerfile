FROM ubuntu:20.04

ENV TZ=Europe/Paris

RUN apt-get update \
&& apt-get -y upgrade \
&& ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone \
&&  apt install npm -y

RUN mkdir /app

WORKDIR /app

RUN npm -g install create-react-app  -y\
&& create-react-app appreact


WORKDIR /app/appreact


COPY ./dockerReact/visualocr/package.json ./
COPY ./dockerReact/visualocr/package-lock.json ./
RUN mkdir /public
COPY ./dockerReact/visualocr/public/ ./public/
RUN mkdir /src
COPY ./dockerReact/visualocr/src/ ./src/
RUN npm install


EXPOSE 3000



CMD ["npm", "start"] 


