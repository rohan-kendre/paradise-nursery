import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, selectCartItems } from "./CartSlice.jsx";

const products = [
  { id: "pothos", name: "Golden Pothos", category: "Easy Care", price: 299, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=80", description: "A trailing favourite for bright shelves." },
  { id: "snake", name: "Snake Plant", category: "Easy Care", price: 399, image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b3a?auto=format&fit=crop&w=700&q=80", description: "Architectural leaves and low-maintenance care." },
  { id: "zz", name: "ZZ Plant", category: "Easy Care", price: 449, image: "https://images.unsplash.com/photo-1632207691143-643e2a6a936b?auto=format&fit=crop&w=700&q=80", description: "Glossy leaves that thrive with little fuss." },
  { id: "spider", name: "Spider Plant", category: "Easy Care", price: 249, image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=700&q=80", description: "A cheerful plant with arching striped leaves." },
  { id: "peace", name: "Peace Lily", category: "Easy Care", price: 499, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=80", description: "Elegant foliage with graceful white blooms." },
  { id: "rubber", name: "Rubber Plant", category: "Easy Care", price: 549, image: "https://images.unsplash.com/photo-1616877562205-9a6a3f1a5b13?auto=format&fit=crop&w=700&q=80", description: "Bold, deep-green leaves make a statement." },

  { id: "monstera", name: "Monstera Deliciosa", category: "Statement Plants", price: 799, image: "https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=700&q=80", description: "Iconic split leaves for a tropical feel." },
  { id: "fiddle", name: "Fiddle Leaf Fig", category: "Statement Plants", price: 999, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80", description: "A sculptural favourite for empty corners." },
  { id: "bird", name: "Bird of Paradise", category: "Statement Plants", price: 1299, image: "https://images.unsplash.com/photo-1597055181300-a8b4be9c2d9c?auto=format&fit=crop&w=700&q=80", description: "Large tropical leaves with plenty of drama." },
  { id: "alocasia", name: "Alocasia Polly", category: "Statement Plants", price: 699, image: "https://images.unsplash.com/photo-1597055181449-1c6f7e4c6c50?auto=format&fit=crop&w=700&q=80", description: "Arrow-shaped leaves with striking veins." },
  { id: "calathea", name: "Calathea Orbifolia", category: "Statement Plants", price: 749, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=80", description: "Soft, rounded leaves with silvery stripes." },
  { id: "palm", name: "Areca Palm", category: "Statement Plants", price: 899, image: "https://images.unsplash.com/photo-1597055181300-a8b4be9c2d9c?auto=format&fit=crop&w=700&q=80", description: "Feathery fronds bring a relaxed tropical mood." },

  { id: "succulent", name: "Echeveria", category: "Small Spaces", price: 199, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80", description: "A compact rosette succulent for sunny spots." },
  { id: "jade", name: "Jade Plant", category: "Small Spaces", price: 229, image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=700&q=80", description: "A charming, long-lived desk companion." },
  { id: "haworthia", name: "Haworthia", category: "Small Spaces", price: 189, image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=700&q=80", description: "A petite, textured succulent." },
  { id: "peperomia", name: "Peperomia", category: "Small Spaces", price: 279, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80", description: "Compact foliage with lots of personality." },
  { id: "fittonia", name: "Fittonia", category: "Small Spaces", price: 219, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=80", description: "Colourful veined leaves for a small planter." },
  { id: "pilea", name: "Chinese Money Plant", category: "Small Spaces", price: 329, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80", description: "Round coin-shaped leaves on upright stems." }
];

const categories = ["Easy Care", "Statement Plants", "Small Spaces"];

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addedIds = new Set(cartItems.map((item) => item.id));

  return (
    <main className="page-shell" id="plants">
      <section className="section-heading">
        <p className="eyebrow">FIND YOUR GREEN</p>
        <h1>Plants for every corner</h1>
        <p>Thoughtfully chosen houseplants to make your space feel like home.</p>
      </section>
      {categories.map((category) => (
        <section className="plant-category" key={category}>
          <div className="category-heading">
            <h2>{category}</h2>
            <span>{products.filter((p) => p.category === category).length} plants</span>
          </div>
          <div className="product-grid">
            {products.filter((product) => product.category === category).map((product) => (
              <article className="product-card" key={product.id}>
                <img src={product.image} alt={product.name} loading="lazy" />
                <div className="product-card-body">
                  <span className="product-category">{product.category}</span>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="product-card-footer">
                    <strong>₹{product.price.toLocaleString("en-IN")}</strong>
                    <button
                      className="button button-small"
                      disabled={addedIds.has(product.id)}
                      onClick={() => dispatch(addItem(product))}
                    >
                      {addedIds.has(product.id) ? "Added ✓" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}