class Request {
    constructor(baseURL, headers) {
        this.baseURL = baseURL;
        this.headers = headers;
        this.response = axios.create({
            baseURL,
            headers,
        });
    }
    get(mod = "", options = {}) {
        return this.response.get(mod, options);
    }
    put(mod = "", options = {}) {
        return this.response.put(mod, options);
    }
    post(mod = "", options = {}) {
        return this.response.post(mod, options);
    }
    delete(mod = "", options = {}) {
        return this.response.delete(mod, options);
    }
}
export default Request