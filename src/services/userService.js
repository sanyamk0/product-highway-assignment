import { supabase } from "../config/database.js";

export const createUser = async (userData) => {
  const { data, error } = await supabase
    .from("users")
    .insert(userData)
    .select()
    .single();

  if (error) throw new Error(error.message);

  return data;
};

export const getUsers = async () => {
  const { data, error } = await supabase
    .from("users")
    .select("id, name, email");

  if (error) throw new Error(error.message);

  return data;
};

export const getUserById = async (id) => {
  const { data, error } = await supabase
    .from("users")
    .select("id, name, email")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);

  return data;
};

export const updateUser = async (id, userData) => {
  const { data, error } = await supabase
    .from("users")
    .update(userData)
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error(error.message);

  return data;
};

export const deleteUser = async (id) => {
  const { data, error, count } = await supabase
    .from("users")
    .delete({ returning: "representation", count: "exact" })
    .eq("id", id);

  if (error) throw new Error(error.message);

  if (count === 0) return false;

  return true;
};
