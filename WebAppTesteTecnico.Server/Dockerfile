FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base
USER $APP_UID
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:9.0 AS with-node
RUN apt-get update
RUN apt-get install curl
RUN curl -sL https://deb.nodesource.com/setup_20.x | bash
RUN apt-get -y install nodejs

FROM with-node AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["WebAppTesteTecnico.Server/WebAppTesteTecnico.Server.csproj", "WebAppTesteTecnico.Server/"]
COPY ["webapptestetecnico.client/webapptestetecnico.client.esproj", "webapptestetecnico.client/"]
RUN dotnet restore "./WebAppTesteTecnico.Server/WebAppTesteTecnico.Server.csproj"
COPY . .
WORKDIR "/src/WebAppTesteTecnico.Server"
RUN dotnet build "./WebAppTesteTecnico.Server.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./WebAppTesteTecnico.Server.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "WebAppTesteTecnico.Server.dll"]
