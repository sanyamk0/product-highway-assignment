import { supabase } from "../config/database.js";

export const createTask = async (taskData) => {
  const { data, error } = await supabase
    .from("tasks")
    .insert(taskData)
    .select()
    .single();

  if (error) throw new Error(error.message);

  return data;
};

export const getTasks = async (status, userId) => {
  let query = supabase.from("tasks").select("*");

  if (status) query = query.eq("status", status);
  if (userId) query = query.eq("user_id", userId);

  const { data, error } = await query;

  if (error) throw new Error(error.message);

  return data;
};

export const getTaskById = async (id) => {
  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);

  return data;
};

export const updateTask = async (id, taskData) => {
  const { data, error } = await supabase
    .from("tasks")
    .update(taskData)
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error(error.message);

  return data;
};

export const deleteTask = async (id) => {
  const { data, error, count } = await supabase
    .from("tasks")
    .delete({ returning: "representation", count: "exact" })
    .eq("id", id);

  if (error) throw new Error(error.message);

  if (count === 0) return false;

  return true;
};
