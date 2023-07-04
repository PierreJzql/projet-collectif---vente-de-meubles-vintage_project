import { useState, useEffect } from "react";
import Vignette from "../Vignette/Vignette";
const port=import.meta.env.VITE_PORT

function Main() {

  const [data, setData] = useState(null);
  // const [photoData, setphotoData] = useState(null)


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:${port}/meubles`);

      const jsonData = await response.json();


      console.log(jsonData);
      setData(jsonData);
    } catch (error) {
      console.log("Error:", error);
    }
  };
 

  

  return (
  <div id="main" className="flex flex-wrap min-h-screen">
      {data ? (
        data.map((item) => (
          <Vignette key={item.id} nom={item.titre} prix={item.prix} photo={item.photo} id={item.id}
          // <button onClick ={() => {navigate(`/produit/${item.id}`)}}/>
          />
         
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Main;
