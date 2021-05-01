FROM  mcr.microsoft.com/mssql/server:2019-latest

ENV ACCEPT_EULA=Y
ENV SA_PASSWORD=<YourStrong@Passw0rd>
ENV MSSQL_PID Express


USER root


RUN mkdir -p /app/mssql2019

WORKDIR /app/mssql2019


COPY ./dockerSql/scripts/ /app/mssql2019
COPY ./dockerSql/savdb/ /app/mssql2019



RUN chmod +x /app/mssql2019/run-initialization.sh

EXPOSE 1433

CMD /bin/bash ./entrypoint.sh