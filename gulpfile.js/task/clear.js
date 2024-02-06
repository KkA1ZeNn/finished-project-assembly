import { deleteAsync } from "del";

// Удаление директории
const clear = () => {
   return deleteAsync($.path.root);
}

export { clear };