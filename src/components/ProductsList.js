import React from "react";
import { FlatList, Text, SafeAreaView } from "react-native";
import { products } from "../../products";
import ProductCard from "./ProductCard";

export default function ProductList() {
    return (
        <SafeAreaView>
            <FlatList 
                data={products}
                keyExtractor={(product) => product.id}
                renderItem={({item}) => <ProductCard {...item} />}
                contentContainerStyle={{ paddingHorizontal: 15 }}
            />
        </SafeAreaView>
    );
}