export enum ERRORS {
    WRONG_USER_DATA = 'Неправильный логин или пароль',
    INVALID_DATA = 'Некорректные данные',
    AUTH_ERROR = 'Ошибка авторизации. Пожалуйста, попробуйте позже.',
    TOKEN_ERROR = 'Получен неверный или пустой токен',
    DEFAULT_ERROR = 'Произошла ошибка'

}

export enum HOOK_ERROR{
    USE_CHART_ERROR = 'useChart must be used within a <ChartContainer />'
}