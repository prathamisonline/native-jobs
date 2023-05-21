import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

import { COLORS, SIZES } from "../../../constants";

import styles from "./popularjobs.style";

import PopularJobCard from "../../common/cards/popular/PopularJobCard";

import UseFetch from "../../../hook/useFetch";

const Popularjobs = () => {
  const router = useRouter();

  const { data, isLoading, error } = UseFetch("search", {
    query: "React developer",
    num_pages: 1,
  });
  console.log(data);

  return (
    <View style={styles.container}>
      <View styles={styles.header}>
        <Text style={styles.headerTitle}>Popularjobs</Text>
        <TouchableOpacity style={styles.headerBtn}>
          <Text>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={[1, 2, 3, 4, 6]}
            renderItem={({ item }) => <PopularJobCard item={item} />}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
