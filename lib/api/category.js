// lib/api/category.js

import { request } from "./client";

const BASE_URL = "/api/admin/category";

export const createCategory = (data) =>
    request(BASE_URL, {
        method: "POST",
        body: JSON.stringify(data),
    });

export const getAllCategories = () =>
    request(BASE_URL);

export const deleteCategory = (id) =>
    request(`${BASE_URL}/`, {
        method: "DELETE",
        body: JSON.stringify({ categoryId: id })

    }
    );