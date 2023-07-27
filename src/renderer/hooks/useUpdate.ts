import { useEffect, useState } from "react";


const useUpdate = () => {

 const  [, updateView] = useState<number>(new Date().getTime());
  return () => updateView(new Date().getTime());
}

export default useUpdate;
