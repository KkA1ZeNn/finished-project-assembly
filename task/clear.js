import { deleteAsync } from "del";

// Удаление директории
const clear = () => {
   return deleteAsync("public");
}

export { clear };