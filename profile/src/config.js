const dev = {
    baseURL: 'http://localhost:4500',
    endPoint: {
        profile: '/src/assets/json-stub/profile.json'
    }
}

const prod = {
    baseURL: '',
    endPoint: {
        profile: '/json-stub/profile.json'
    }
}

// const config = process.env.REACT_ENVIRONMENT === 'prod' ? prod : prod;
const config = dev;

export default {
    ...config
}