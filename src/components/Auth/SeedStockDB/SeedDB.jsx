/* import React, { useState, useEffect } from 'react';
import jsonData from './stock_data_filtered.json';
import { db } from '../../../lib/firebase'; // Assuming you have initialized Firestore from Firebase
import { collection, doc, setDoc } from 'firebase/firestore';

const SeedDB = () => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const seedStockCollection = async () => {
      setLoading(true);

      try {
        // Create a reference to the "stock" collection
        const stockCollectionRef = collection(db, 'stock');

        // Iterate through your JSON data and add each object as a document in the "stock" collection
        for (const item of jsonData) {
          try {
            // Create a reference to the document in the "stock" collection
            const stockDocRef = doc(stockCollectionRef, item.id); // Assuming each item has a unique identifier

            // Set the document data with the JSON item
            await setDoc(stockDocRef, item);

            console.log('Document added to "stock" collection:', item);
          } catch (error) {
            console.error('Error adding document to "stock" collection:', error);
          }
        }

        console.log('Database seeding completed.');
      } catch (error) {
        console.error('Error seeding "stock" collection:', error);
      }

      setLoading(false);
    };

    seedStockCollection();
  }, []);

  return (
    <div>
      <h1>Seed Firestore Collection with JSON Data</h1>
      {isLoading ? <p>Setting up your stock inventory...</p> : <p>Database seeding completed.</p>}
    </div>
  );
};

export default SeedDB;
 */