# 2. Apache (Apache2)

## Управление пакетом и службой

- **Установка Apache2:**

```bash
sudo apt update && sudo apt install apache2
```

- **Запуск службы:**

```bash
sudo systemctl start apache2
```

- **Остановка службы:**

```bash
sudo systemctl stop apache2
```

- **Перезапуск (полный рестарт):**

```bash
sudo systemctl restart apache2
```

- **Мягкий перезапуск (перезагрузка конфигурации на лету):**

```bash
sudo systemctl reload apache2
```

- **Проверка статуса:**

```bash
sudo systemctl status apache2
```

- **Добавление в автозагрузку:**

```bash
sudo systemctl enable apache2
```

- **Удаление из автозагрузки:**

```bash
sudo systemctl disable apache2
```

## Управление модулями и сайтами (специфика Debian/Ubuntu)

- **Включение виртуального хоста (сайта):**

```bash
sudo a2ensite site-name.conf
```

- **Отключение виртуального хоста:**

```bash
sudo a2dissite site-name.conf
```

- **Включение модуля Apache (например, rewrite или ssl):**

```bash
sudo a2enmod module-name
```

- **Отключение модуля Apache:**

```bash
sudo a2dismod module-name
```

- **Проверка списка активных модулей:**

```bash
apache2ctl -M
```

## Проверка конфигурации и отладка

- **Тест конфигурации на синтаксические ошибки:**

```bash
sudo apache2ctl configtest
```

(или `sudo apachectl configtest`)

## Пути к ключевым файлам

- Основной файл конфигурации: `/etc/apache2/apache2.conf`
- Директория доступных сайтов: `/etc/apache2/sites-available/`
- Директория активных сайтов: `/etc/apache2/sites-enabled/`
- Директория доступных модулей: `/etc/apache2/mods-available/`
- Директория активных модулей: `/etc/apache2/mods-enabled/`
- Корневая папка сайта по умолчанию: `/var/www/html`
- Логи ошибок: `/var/log/apache2/error.log`
- Логи доступа: `/var/log/apache2/access.log`
