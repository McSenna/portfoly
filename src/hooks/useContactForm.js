import { useState } from 'react';

const INITIAL_STATE = { name: '', email: '', message: '' };

const useContactForm = () => {
  const [fields, setFields] = useState(INITIAL_STATE);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!fields.name.trim()) return 'Name is required.';
    if (!fields.email.trim() || !/\S+@\S+\.\S+/.test(fields.email)) return 'A valid email is required.';
    if (!fields.message.trim()) return 'Message is required.';
    return '';
  };

  const handleSubmit = async () => {
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError('');
    setLoading(true);
    await new Promise((res) => setTimeout(res, 800));
    setLoading(false);
    setSent(true);
  };

  const reset = () => {
    setFields(INITIAL_STATE);
    setSent(false);
    setError('');
  };

  return { fields, sent, loading, error, handleChange, handleSubmit, reset };
};

export default useContactForm;
