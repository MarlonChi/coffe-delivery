import { ReactNode, createContext, useState } from "react";

export interface Address {
  cep: string;
  address: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  state: string;
}

interface UserContextType {
  addressData?: Address;
  handleSetAddressData: (data: Address) => void;
  paymentMethod: string;
  handleInputPaymentChange: (data: string) => void;
}

export const UserContext = createContext({} as UserContextType);

interface UserContextProviderProps {
  children: ReactNode;
}

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [addressData, setAddressData] = useState<Address>();
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleSetAddressData = (data: Address) => {
    setAddressData(data);
  };

  const handleInputPaymentChange = (value: string) => {
    setPaymentMethod(value);
  };

  return (
    <UserContext.Provider
      value={{
        addressData,
        handleSetAddressData,
        paymentMethod,
        handleInputPaymentChange,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
