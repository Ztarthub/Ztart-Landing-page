import { useState } from 'react';
import { ContactForm } from '../types';
import { apiService } from '../services/api';

export function useContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submitForm = async (formData: ContactForm) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await apiService.submitContactForm(formData);
      
      if (response.success) {
        setSuccess(true);
        // Reset form after successful submission
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      } else {
        setError(response.message || 'Error al enviar el mensaje');
      }
    } catch (err) {
      setError('Error de conexión. Intenta nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setError(null);
    setSuccess(false);
    setIsLoading(false);
  };

  return {
    submitForm,
    resetForm,
    isLoading,
    error,
    success
  };
}