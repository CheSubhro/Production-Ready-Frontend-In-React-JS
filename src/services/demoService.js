import api from './api';

// ডাটা গেট করার জন্য
export const fetchAllItems = async (params) => {
    const response = await api.get('/your-endpoint', { params });
    return response.data;
};

// ডাটা পোস্ট করার জন্য
export const createItem = async (data) => {
    const response = await api.post('/your-endpoint', data);
    return response.data;
};

// ডাটা আপডেট করার জন্য
export const updateItem = async (id, data) => {
    const response = await api.patch(`/your-endpoint/${id}`, data);
    return response.data;
};

const demoService = {
    fetchAllItems,
    createItem,
    updateItem
};

export default demoService;
