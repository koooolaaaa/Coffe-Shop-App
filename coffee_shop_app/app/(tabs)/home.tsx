import { Image, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ProductCategory, Product } from '@/types/types'
import { fetchProducts } from '@/services/productService';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaFrameContext, SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import SearchArea from '@/components/SearchArea';
import Banner from '@/components/Banner';
import { router } from 'expo-router';

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productCategories, setProductCategories] = useState<ProductCategory[]>([]);
  const [shownProducts, setShownProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const uniqueCategories = Array.from((productCategories)).map((category) => ({
      id: category.id,
      selected: selectedCategory === category.id,
    }));
    setProductCategories(uniqueCategories);

    if (selectedCategory === 'All') {
      setShownProducts(products);
    } else {
      const filteredProducts = products.filter((product) => product.category === selectedCategory);
      setShownProducts(filteredProducts);
    }

  }, [selectedCategory])


  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productsData = await fetchProducts();

        const categories = productsData.map((product) => product.category);
        categories.unshift('All');
        const uniqueCategories = Array.from(new Set(categories)).map((category) => ({
          id: category,
          selected: selectedCategory === category,
        }));

        setProducts(productsData);
        setProductCategories(uniqueCategories);
        setShownProducts(productsData);


      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();

  }, [])

  if (loading) return <Text>Loading...</Text>;

  return (
    <GestureHandlerRootView>
      <SafeAreaView
        className='w-full h-full'
      >
        <FlatList
          horizontal={false}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-between', marginRight:15, marginLeft:15}}
          keyExtractor={(item,index) => index.toString()}
          data={shownProducts}

          renderItem={({item}) => (
            <View
              className='w-[48%] mt-2 bg-white rounded-2xl p-2 flex justify-between'
            >
              <TouchableOpacity
                onPress={() => {
                  router.push({
                    pathname: '/details', params: {
                      name: item.name, 
                      type: item.category, 
                      price: item.price, 
                      rating: item.rating, 
                      description: item.description,
                    }
                  })
                }}
              >
                <Image 
                  source= {{ uri: item.image_url}}
                  className='w-full h-32 rounded-2xl'
                />

                <Text
                  className='text-[#242424] text-lg font-[Sora-Semibold] ml-1 mt-2'
                >
                  {item.name}
                </Text>

                <Text
                  className='text-[#A2A2A2] text-sm font-[Sora-Regular] ml-1 mt-2'
                >
                  {item.category}
                </Text>

              </TouchableOpacity>
              <View
                className='flex-row justify-between ml-1 mt-4 mb-2'
              >
                <Text
                  className='text-[#050505] text-xl font-[Sora-Semibold]'
                >
                  ${item.price}
                </Text>

                <TouchableOpacity>
                  <View
                    className='mr-2 p-2 -mt-1 bg-app-orange rounded-xl'
                  >
                    <AntDesign name="plus" size={20} color="white" />
                  </View>
                </TouchableOpacity>

              </View>
            </View>
          )}
        
          ListHeaderComponent={()=> (
            <View
              className='flex'
            >
              <SearchArea />
              <Banner />
              <View
                className='items-center'
              >
                <FlatList
                  className='mt-6 w-[90%] mb-2'
                  data={productCategories}
                  horizontal={true}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() => setSelectedCategory(item.id)}
                    >
                      <Text
                        className={`text-sm mr-4 font-[Sora-Regular] p-3 rounded-lg 
                        ${item.selected ? 'text-white' : 'text-[#313131]'}
                        ${item.selected ? 'bg-app-orange' : 'bg-[#EDEDED] '}
                        `}
                      >
                        {item.id}
                      </Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>
            
          )}
        
        />

      </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default Home

