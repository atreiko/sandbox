class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode

        Error.captureStackTrace(this, this.constructor)
    }
}

module.exports = ErrorHandler

//*    Error.captureStackTrace(targetObject, constructorOpt) - создает свойство
//*    .stack у targetObject, при обращении к ней получим:
//*    const myObject = {};
//*    Error.captureStackTrace(myObject);
//*    myObject.stack;  // Similar to `new Error().stack`

//*    Таким образом, в строке, которая лежит в свойстве stack - можно идентифицировать место, в котором произошла ошибка

//* targetObject - объект
//* constructorOpt - функция (необязательный арг)