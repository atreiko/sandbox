'use client';
import { createContext, useContext, useState } from 'react';

const Context = createContext();

export const useMyContext = () => useContext(Context);

export default function Provider({ children }) {
  const [editPost, setEditPost] = useState();
  const value = { editPost, setEditPost };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
