import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import {
  Header,
  ProductItem,
  ScreenWrapper,
  SettingModal,
} from "~components";
import { useGetProductsQuery } from "~rtk/get-workouts-API";
import { AppColors } from "~utils";
import styles from "./styles";
import ScreenNames from "~routes/routes";
export default function Products({ navigation }) {
  const showSettingModalRef = useRef();
  const { data, error, fetching, isLoading } = useGetProductsQuery();
  const renderProducts = ({ item, _ }) => {
    return (
      <ProductItem
        item={item}
        onPressItem={() =>
          navigation.navigate(ScreenNames.PRODUCTDETAIL, { id: item.id })
        }
      />
    );
  };

  return (
    <ScreenWrapper statusBarColor={AppColors.primary} barStyle="light-content">
      <Header showIcons={false}>API Integration</Header>
      <View style={styles.mainViewContainer}>
        {isLoading ? (
          <ActivityIndicator size={"large"} />
        ) : (
          <FlatList
            data={data !== undefined ? data?.products : []}
            renderItem={renderProducts}
            keyExtractor={(_, index) => index?.toString()}
            showsVerticalScrollIndicator={false}
            refreshing={isLoading}
          />
        )}
      </View>

      <SettingModal ref={showSettingModalRef} />
    </ScreenWrapper>
  );
}
