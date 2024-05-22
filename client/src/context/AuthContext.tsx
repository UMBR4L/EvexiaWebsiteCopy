import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import axios, { AxiosResponse } from "axios";

// Define the shape of your context state
interface AuthState {
  user: any; // Replace 'any' with the type of your user
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
}

// Create the context with the initial state
export const AuthContext = createContext<AuthState | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<string>(""); // Replace 'any' with the type of your user
  const [loading, setLoading] = useState(true);

  axios.defaults.baseURL = "https://evexia-server-t2od.onrender.com/api/v1";

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response: AxiosResponse<any> = await axios.get("/api/user", {
          withCredentials: true,
        }); // Replace 'any' with the type of your response data
        setUser(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post("/auth/login", { email, password });
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const contextValue = { user, loading, login };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = (): AuthState => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
