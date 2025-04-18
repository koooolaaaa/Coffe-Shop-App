import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Product } from '@/types/types'
import { fetchProducts } from '@/services/productService';

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productsData = await fetchProducts();


        setProducts(productsData);

      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false)
      }
    }

    loadProducts();

  },[])

  if (loading) return <Text>Loading ...</Text>

  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})