import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const MyItems = () => {
  const [products, setProducts] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  // useEffect(() => {
  //     const url = `https://electronic-bazar-server-site.vercel.app/inventoryManage`;
  //     fetch(url)
  //         .then(res => res.json())
  //         .then(data => setProducts(data))
  // }, [])

  useEffect(() => {
    const getProducts = async () => {
      const email = user?.email;
      console.log(email);
      const url = `https://electronic-bazar-server-site.vercel.app/myItems?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setProducts(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          navigate("/login");
          signOut(auth);
        }
      }
    };
    getProducts();
  }, [user]);
  const handleToDelete = (id) => {
    const proceed = window.confirm("Will you delete a products???...");
    if (proceed) {
      const url = `https://electronic-bazar-server-site.vercel.app/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = products.filter((product) => product._id !== id);
            setProducts(remaining);
          }
        });
    }
  };
  return (
    <div className=" container">
      <h2 className="text-primary text-center m-4 fw-bold m-5 animate__animated animate__heartBeat">
        My Items
      </h2>
      <div className=" mx-auto row row-cols-1  row-cols-lg-3 row-cols-md-2 g-4">
        {products.map((product) => (
          <div key={product._id} class="col">
            <div class="card h-100">
              <img
                style={{ width: "350px", height: "250px" }}
                src={product.img}
                class="card-img-top img-fluid img-thumbnail rounded mx-auto d-block"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-center">{product.name}</h5>
                <p class="card-text text-center">{product.supplier}</p>
                <p class="card-text text-center">{product.details}</p>
              </div>
              <div className="mx-auto mb-3">
                <button
                  onClick={() => handleToDelete(product._id)}
                  className="btn btn-danger "
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
