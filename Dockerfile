# Etapa 1: build da aplicação
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Copia o arquivo de projeto e restaura dependências
COPY *.csproj ./
RUN dotnet restore

# Copia o restante dos arquivos e publica
COPY . ./
RUN dotnet publish -c Release -o out

# Etapa 2: runtime da aplicação
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /app/out ./

ENV ASPNETCORE_URLS=http://+:80
EXPOSE 80

ENTRYPOINT ["dotnet", "AnnaPortifolio.dll"]