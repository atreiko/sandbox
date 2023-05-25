`Adding Search, Filter & Pagination`

backend/utils/apifeatures.js    --> class ApiFeatures
    POSTMAN -> Params
    Создаем query -> KEY: VALUE 
                ...?keyword=samosa

backend/controllers/productController.js
    get all products -->
    const apiFeature = new ApiFeatures(Product.find(), req.query)

    class ApiFeatures
    Создаем метод search(){}
    Добавляем в apiFeature (productController --> get all products)
    const apiFeature = new ApiFeatures(Product.find(), req.query).search()
    Меняем  const products = await Product.find()   на -->
    const products = await apiFeature.query
    POSTMAN  --> Get All Products ?keyword=samosa Send (законсолим keyword в search())

backend/utils/apifeatures.js 
    Создаем метод filter(){}
    Копируем строку запроса
    Пишем массив с категориями(свойствами объекта) 
    Удаляем из копии по ключу 
    Добавим в apiFeatures (productController --> get all products)
    const apiFeature = new ApiFeatures(Product.find(), req.query).search().filter()
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`)
    this.query = this.query.find(JSON.parse(queryStr))
    return this

backend/controllers/productController.js
    get all products -->
    Создаем пагинацию
    const resultPerPage = 5;
    apiFeatures... .pagination(resultPerPage)

backend/utils/apifeatures.js 

    pagination(resultPerPage) {
        const currentPage = Number(this.queryStr.page) || 1; 
        const skip = resultPerPage * (currentPage - 1)
        this.query = this.query.limit(resultPerPage).skip(skip)
        return this
    }

    POSTMAN --> Создадим 8 продуктов
    Отправим запрос get all products -->
    получаем первую пачку продуктов
    Сделаем запрос всех продуктов на странице 2
    http://localhost:4000/api/v1/products?page=2    -->
    получим остальную пачку продуктов
    
    backend/controllers/productController.js
    get all products -->
    const productCount = await Product.countDocuments()

    get product details -->
        res.status(200).json({
        success: true,
        product: product,
        productCount: productCount
    })
