# TIMA

## Установка и запуск

1. **Клонируйте репозиторий:**
   ```sh
   git clone https://github.com/ElPsy77/TIMA.git
   cd TIMA
   ```

2. **Установите зависимости:**
   ```sh
   npm install
   ```

3. **Создайте файл окружения `.env.local` в корне проекта.**  
   В этот файл нужно добавить следующие переменные:

   ```
   AUTH_SECRET=ваш_секрет_для_аутентификации
   GOOGLE_CLIENT_ID=ваш_google_client_id
   GOOGLE_CLIENT_SECRET=ваш_google_client_secret
   DATABASE_URL=ваш_url_для_mongodb
   UPLOADTHING_SECRET=ваш_uploadthing_secret
   ```

   **Примечания:**
   - `AUTH_SECRET` — произвольная строка для безопасности сессий.
   - `GOOGLE_CLIENT_ID` и `GOOGLE_CLIENT_SECRET` — получите в Google Cloud Console при создании OAuth 2.0 Client ID.
   - `DATABASE_URL` — строка подключения к вашей базе данных MongoDB.
   - `UPLOADTHING_SECRET` — секретный ключ для сервиса UploadThing.

4. **Запустите проект:**
   ```sh
   npm run dev
   ```

5. **Откройте** [http://localhost:3000](http://localhost:3000) **в браузере.**

