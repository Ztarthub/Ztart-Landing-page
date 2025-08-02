import { ContactForm, ApiResponse } from '../types';
import { API_BASE_URL } from '../utils/constants';

class ApiService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = API_BASE_URL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const defaultOptions: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    };

    try {
      const response = await fetch(url, defaultOptions);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  async submitContactForm(formData: ContactForm): Promise<ApiResponse<{ id: string }>> {
    // Simulate API call for now
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: { id: 'contact-' + Date.now() },
          success: true,
          message: 'Mensaje enviado exitosamente'
        });
      }, 1000);
    });
  }

  async getServices(): Promise<ApiResponse<any[]>> {
    // Simulate API call for now
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: [],
          success: true,
          message: 'Services loaded successfully'
        });
      }, 500);
    });
  }

  async getUserProfile(): Promise<ApiResponse<any>> {
    // Simulate API call for now
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: null,
          success: false,
          message: 'User not authenticated'
        });
      }, 500);
    });
  }
}

export const apiService = new ApiService();