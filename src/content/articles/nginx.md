# 1. Nginx

## Управление пакетом и службой

- **Установка Nginx:**

```bash
sudo apt update && sudo apt install nginx
```

- **Запуск службы:**

```bash
sudo systemctl start nginx
```

- **Остановка службы:**

```bash
sudo systemctl stop nginx
```

- **Перезапуск (полный рестарт):**

```bash
sudo systemctl restart nginx
```

- **Мягкий перезапуск (применение конфигурации без обрыва текущих соединений):**

```bash
sudo systemctl reload nginx
```

- **Проверка статуса:**

```bash
sudo systemctl status nginx
```

- **Добавление в автозагрузку (при старте системы):**

```bash
sudo systemctl enable nginx
```

- **Удаление из автозагрузки:**

```bash
sudo systemctl disable nginx
```

## Проверка конфигурации и отладка

- **Тест конфигурационных файлов на наличие ошибок:**

```bash
sudo nginx -t
```

- **Тест с выводом путей к загруженным конфигам:**

```bash
sudo nginx -T
```

- **Принудительное завершение всех процессов Nginx (если завис):**

```bash
sudo pkill -9 nginx
```

## Пути к ключевым файлам

- Основной файл конфигурации: `/etc/nginx/nginx.conf`
- Директория сайтов (доступные конфигурации): `/etc/nginx/sites-available/`
- Директория сайтов (активные конфигурации, обычно через симлинки): `/etc/nginx/sites-enabled/`
- Корневая папка сайта по умолчанию (DocumentRoot): `/var/www/html`
- Логи ошибок: `/var/log/nginx/error.log`
- Логи доступа: `/var/log/nginx/access.log`
