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
}

export const UserContext = createContext({} as UserContextType);

interface UserContextProviderProps {
  children: ReactNode;
}

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [addressData, setAddressData] = useState<Address>();

  const handleSetAddressData = (data: Address) => {
    setAddressData(data);
  };

  console.log(addressData);

  return (
    <UserContext.Provider value={{ addressData, handleSetAddressData }}>
      {children}
    </UserContext.Provider>
  );
}
