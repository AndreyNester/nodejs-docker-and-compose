# Докеризация приложения

Перед тем как приступить к выполнению проектной работы разместите в репозитории исходный код фронтенд и бэкенд частей сервиса КупиПодариДай, реализованного вами ранее.

## Общая информация

```
IP адрес x.x.x.x
Frontend https://...
Backend https://...
```

## Поднятие бэка и фронта локально

```
docker compose up --build
```

### если что-то не так идет то

```
docker compose down && docker compose up --build
```

## Для прода почти тоже самое

```
docker compose -f docker-compose.pub.yaml up --build
```

### если что-то не так идет то

```
docker compose down && docker compose -f docker-compose.pub.yaml up --build
```
