/**
 * Массив маршрутов, доступных для всех
 * Эти маршруты не требуют аутентификации
 * @type {string[]}
 */
export const publicRoutes = [
  "/",
  "/auth/new-verification",
  "/api/uploadthing", 
  "/api/webhook"
];

/**
 * Массив маршрутов, используемых для аутентификации
 * Эти маршруты перенаправляют авторизованных пользователей на /settings
 * @type {string[]}
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password"
];

/**
 * Префикс для маршрутов API аутентификации
 * Маршруты, начинающиеся с этого префикса, используются для целей аутентификации через API
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * Путь перенаправления по умолчанию после входа в систему
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";