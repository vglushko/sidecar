FROM mcr.microsoft.com/dotnet/core/sdk:2.2-alpine AS builder

WORKDIR /usr/build/app
COPY ./sidecar.csproj .
RUN dotnet restore
COPY *.html *.cs *.json Features/ ./
RUN dotnet publish -c Release -o publish

FROM mcr.microsoft.com/dotnet/core/aspnet:2.2.6-alpine
WORKDIR /usr/app
ENV ASPNETCORE_URLS=http://+:5200
COPY --from=builder /usr/build/app/publish ./
ENTRYPOINT ["dotnet", "sidecar.dll"]