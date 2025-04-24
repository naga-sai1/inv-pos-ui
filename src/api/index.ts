import axios from 'axios'

const baseURL = 'http://192.168.0.110:3123/'

// const baseURL = 'https://apiswatchpos.invtechnologies.in/'

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const addProduct = (data: any) => api.post('/add_products', data)

export const getProductByBarcode = (barcode: string) =>
  api
    .get(`/get_product_barcode_details/${barcode}`)
    .then((response) => response.data)

export const searchProducts = (search: string) =>
  api.get(`/search_products?search=${search}`).then((response) => response.data)

export const updateProduct = (barcode: string, data: any) =>
  api.put(`/update_product/${barcode}`, data).then((response) => response.data)

export const checkOut = (data: any) =>
  api.post('/checkout', data).then((response) => response.data)

export const getAllOrders = () =>
  api.get('/get_all_orders').then((response) => response.data)

export const getAllProducts = () =>
  api.get('/get_all_products').then((response) => response.data)

export const deleteProduct = (barcode: string) =>
  api.delete(`/delete_product/${barcode}`).then((response) => response.data)

export const bulkUploadProducts = (data: any) =>
  api.post('/bulk_upload_products', data).then((response) => response.data)

export interface LoginRequest {
  username: string
  password: string
}

export interface User {
  userId: number
  username: string
  email: string
  role: string
  store_id: number
}

export interface LoginResponse {
  token: string
  user: User
}

export const userLogin = (data: LoginRequest): Promise<LoginResponse> =>
  api.post('/login', data).then((response) => response.data)

// category
export const createCategory = (data: any) =>
  api.post('/create_category', data).then((response) => response.data)

export const getAllCategories = () =>
  api.get('/get_all_categories').then((response) => response.data)

export const updateCategory = (id: any, data: any) =>
  api.put(`/update_category/${id}`, data).then((response) => response.data)

export const deleteCategory = (id: any) =>
  api.delete(`/delete_category/${id}`).then((response) => response.data)
// sub category
export const createSubCategory = (data: any) =>
  api.post('/create_sub_category', data).then((response) => response.data)

export const getAllSubCategories = () =>
  api.get('/get_all_sub_categories').then((response) => response.data)

export const updateSubCategory = (id: any, data: any) =>
  api.put(`/update_sub_category/${id}`, data).then((response) => response.data)

export const deleteSubCategory = (id: any) =>
  api.delete(`/delete_sub_category/${id}`).then((response) => response.data)
// brand
export const createBrand = (data: FormData) =>
  axios.post(`${baseURL}create_brand`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

export const getAllBrands = (store_id: number) =>
  api.get(`/get_all_brands/${store_id}`).then((response) => response.data)

export const updateBrand = (id: any, data: FormData) =>
  axios.put(`${baseURL}update_brand/${id}`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

export const deleteBrand = (id: any) =>
  api.delete(`/delete_brand/${id}`).then((response) => response.data)

export const getAllBrandNames = () =>
  api.get('/brand_names').then((response) => response.data)

// units
export const createUnit = (data: any) =>
  api.post('/create_unit', data).then((response) => response.data)

export const getAllUnits = () =>
  api.get('/get_all_units').then((response) => response.data)

export const updateUnit = (id: any, data: any) =>
  api.put(`/update_unit/${id}`, data).then((response) => response.data)

export const deleteUnit = (id: any) =>
  api.delete(`/delete_unit/${id}`).then((response) => response.data)

export const getAllActiveUnitsDropdown = () =>
  api.get('/get_all_active_units_dropdown').then((response) => response.data)

export const getAllActiveCategoriesDropdown = () =>
  api
    .get('/get_all_active_categories_dropdown')
    .then((response) => response.data)
