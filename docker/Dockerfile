FROM ubuntu:20.04

RUN apt-get update \
&& apt-get -y upgrade \
&& apt-get install python3-pip -y \
&& apt-get install curl -y \
&& curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add - \
&& curl https://packages.microsoft.com/config/ubuntu/20.04/prod.list > /etc/apt/sources.list.d/mssql-release.list \
&& apt-get update \
&& ACCEPT_EULA=Y apt-get install -y msodbcsql17 \
&& echo 'export PATH="$PATH:/opt/mssql-tools/bin"' >> ~/.bashrc 

RUN mkdir /app
WORKDIR /app

EXPOSE 8000

COPY ./mysite /app
COPY ./requirements.txt /app/requirements.txt
RUN apt-get install unixodbc-dev -y \
&& pip3 install -r requirements.txt  

CMD ["python3","manage.py","runserver"]
