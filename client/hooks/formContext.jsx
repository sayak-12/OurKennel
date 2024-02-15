import { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [formVisible, setFormVisible] = useState(false);
  const [updateform, setUpdateForm] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handlePopup = () => {
    setFormVisible(false);
  };

  const handleSuccess = (message) => {
    setSuccessMessage(message);
    setTimeout(() => {
      setSuccessMessage('');
      setFormVisible(false);
    }, 2000);
  };

  return (
    <FormContext.Provider value={{ formVisible, setFormVisible,updateform, setUpdateForm, successMessage, handlePopup, handleSuccess }}>
      {children}
    </FormContext.Provider>
  );
};
