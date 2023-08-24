import React, { useRef, useState } from "react";
import { ActivityIndicator, Animated, FlatList, View } from "react-native";
import { Header, ScreenWrapper, SmallText } from "~components";
import { useGetProductDetailQuery } from "~rtk/get-workouts-API";
import { AppColors } from "~utils";
import styles from "./styles";
import FastImage from "react-native-fast-image";
export default function ProductDetail({ route }) {
  const id = route?.params?.id;
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollx = useRef(new Animated.Value(0)).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0]?.index);
  }).current;
  const renderImageList = ({ item, _ }) => {
    return (
      <FastImage
        resizeMode="cover"
        style={styles.image}
        source={{ uri: item }}
      />
    );
  };
  const { data, error, fetching, isLoading } = useGetProductDetailQuery(id);

  return (
    <ScreenWrapper statusBarColor={AppColors.primary} barStyle="light-content">
      <Header showIcons={false}>Product Details</Header>
      {isLoading ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <View style={styles.container}>
          <FlatList
            data={data?.images}
            renderItem={renderImageList}
            snapToAlignment="center"
            pagingEnabled
            keyExtractor={(item, index) => String(index)}
            horizontal
            onViewableItemsChanged={viewableItemsChanged}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={30}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollx } } }],
              { useNativeDriver: false }
            )}
            viewabilityConfig={viewConfig}
            style={{ alignSelf: "center" }}
          />
          {data?.images?.length > 1 && (
            <View style={styles.dotsView}>
              {data?.images?.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.dot,
                    {
                      backgroundColor:
                        currentIndex === index ? AppColors.primary : "gray",
                    },
                  ]}
                />
              ))}
            </View>
          )}
          <View style={styles.infoSection}>
            <View style={styles.row}>
              <SmallText textStyles={styles.text}>
                Price: {data.price}
              </SmallText>
              <SmallText textStyles={styles.text}>
                Category: {data.category}
              </SmallText>
              <SmallText textStyles={styles.text}>
                Brand: {data.brand}
              </SmallText>
            </View>
            <View style={styles.row}>
              <SmallText textStyles={styles.text}>
                Title: {data.title}
              </SmallText>
              <SmallText textStyles={styles.text}>
                Stock: {data.stock}
              </SmallText>
              <SmallText textStyles={styles.text}>
                Rating: {data.rating}
              </SmallText>
            </View>
          </View>
        </View>
      )}
    </ScreenWrapper>
  );
}
