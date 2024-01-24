import { useState } from 'react'
import axios from 'axios'
import env from '../schemas/envSchema'

const useAxios = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const axiosInstance = axios.create({
    baseURL: env.VITE_DATABASE_URL
  })

  axiosInstance.interceptors.request.use(
    (config) => {
      setLoading(true)
      const token = localStorage.getItem('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    (error) => {
      setLoading(false)
      return Promise.reject(error)
    }
  )

  axiosInstance.interceptors.response.use(
    (response) => {
      setLoading(false)
      return response
    },
    (error) => {
      setLoading(false)
      setError(error)
      return Promise.reject(error)
    }
  )

  const api = {
    post: async (url, data) => {
      try {
        const response = await axiosInstance.post(url, data)
        return response.data
      } catch (error) {
        throw error
      }
    },

    get: async (url) => {
      try {
          const response = await axiosInstance.get(url)
          setData(response.data)
          return data
      } catch (error) {
          throw error
      }
  },

    update: async (url, data) => {
      try {
        const response = await axiosInstance.put(url, data)
        return response.data
      } catch (error) {
        throw error
      }
    },

    patch: async (url, data) => {
      try {
        const response = await axiosInstance.patch(url, data)
        return response.data
      } catch (error) {
        throw error
      }
    },

    delete: async (url) => {
      try {
        const response = await axiosInstance.delete(url)
        return response.data
      } catch (error) {
        throw error
      }
    },
  }

  return { api, loading, error }
}

export default useAxios