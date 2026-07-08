import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, Address, Order } from '../types';

interface UserStore {
  user: User | null;
  isAuthenticated: boolean;
  recentlyViewed: string[];
  orders: Order[];
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
  addAddress: (address: Omit<Address, 'id'>) => void;
  updateAddress: (id: string, address: Partial<Address>) => void;
  deleteAddress: (id: string) => void;
  setDefaultAddress: (id: string) => void;
  addOrder: (order: Order) => void;
  addToRecentlyViewed: (productId: string) => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      recentlyViewed: [],
      orders: [],

      login: async (email: string, _password: string) => {
        // Simulate login - in production, this would call Supabase
        const mockUser: User = {
          id: '1',
          email,
          name: email.split('@')[0],
          addresses: [],
        };
        set({ user: mockUser, isAuthenticated: true });
        return true;
      },

      register: async (name: string, email: string, _password: string) => {
        // Simulate registration - in production, this would call Supabase
        const mockUser: User = {
          id: Date.now().toString(),
          email,
          name,
          addresses: [],
        };
        set({ user: mockUser, isAuthenticated: true });
        return true;
      },

      logout: () => {
        set({ user: null, isAuthenticated: false });
      },

      updateProfile: (data: Partial<User>) => {
        set(state => ({
          user: state.user ? { ...state.user, ...data } : null,
        }));
      },

      addAddress: (address: Omit<Address, 'id'>) => {
        set(state => ({
          user: state.user
            ? {
                ...state.user,
                addresses: [
                  ...state.user.addresses,
                  { ...address, id: Date.now().toString() },
                ],
              }
            : null,
        }));
      },

      updateAddress: (id: string, address: Partial<Address>) => {
        set(state => ({
          user: state.user
            ? {
                ...state.user,
                addresses: state.user.addresses.map(a =>
                  a.id === id ? { ...a, ...address } : a
                ),
              }
            : null,
        }));
      },

      deleteAddress: (id: string) => {
        set(state => ({
          user: state.user
            ? {
                ...state.user,
                addresses: state.user.addresses.filter(a => a.id !== id),
              }
            : null,
        }));
      },

      setDefaultAddress: (id: string) => {
        set(state => ({
          user: state.user
            ? {
                ...state.user,
                addresses: state.user.addresses.map(a => ({
                  ...a,
                  isDefault: a.id === id,
                })),
              }
            : null,
        }));
      },

      addOrder: (order: Order) => {
        set(state => ({
          orders: [order, ...state.orders],
        }));
      },

      addToRecentlyViewed: (productId: string) => {
        set(state => {
          const filtered = state.recentlyViewed.filter(id => id !== productId);
          return {
            recentlyViewed: [productId, ...filtered].slice(0, 10),
          };
        });
      },
    }),
    {
      name: 'bloom-basket-user',
    }
  )
);
