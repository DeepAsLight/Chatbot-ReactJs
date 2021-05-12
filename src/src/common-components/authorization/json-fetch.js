const axios = require('axios');

const jsonFetch = async (uri, options) => {
    // make sure the JSON header is set
    if (options != null && options.body != null) {
        if (options.headers == null) {
            options.headers = {};
        }
        options.headers["Content-Type"] = "application/json";
    }

    // fetch the response and handle response status codes and payload
    await fetch(uri, options).then(response => {
        return response;
    }).catch(error => {
        console.log(error);
    });
};

export const jsonAxios = async (options) => {
    // make sure the JSON header is set
    if (options != null) {
        if (options.headers == null) {
            options.headers = {};
        }
        options.headers["Content-Type"] = "application/json";
    }

    // fetch the response and handle response status codes and payload
    const response = await axios(options).then(response => {
        return response;
    }).catch(error => {
        console.log("Error while importing product data");
    });
    return response;
};

const jsonAxiosMedia = async (options) => {
    options.url = encodeURI(options.url);
    // make sure the JSON header is set
    if (options != null) {
        if (options.headers == null) {
            options.headers = {};
        }
        options.headers["Content-Type"] = "multipart/form-data";
    }

    // fetch the response and handle response status codes and payload
    const response = await axios(options).then(response => {
        return response;
    }).catch(error => {
        console.log("Error while importing product data");
    });
    return response;
};

// module.exports = { jsonFetch, jsonAxios, jsonAxiosMedia };