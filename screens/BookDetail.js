import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated,
} from 'react-native';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';

const LineDivider = () => {
  return (
    <View style={{width: 1, paddingVertical: 5}}>
      <View
        style={{
          flex: 1,
          borderLeftColor: COLORS.ligthGray2,
          borderLeftWidth: 1,
        }}></View>
    </View>
  );
};

const BookDetail = ({route, navigation}) => {
  const [scrollViewWholeHeight, setScroolViewWholeHeight] = React.useState(1);
  const [scrollViewVisibleHeight, setScrollViewVisibleHeight] =
    React.useState(0);

  const indicator = new Animated.Value(0);

  const [book, setBook] = React.useState(null);

  React.useEffect(() => {
    let {book} = route.params;
    setBook(book);
  }, [book]);

  function renderInfoSection() {
    return (
      <View style={{flex: 1}}>
        <ImageBackground
          source={book.images}
          resizeMode="cover"
          style={{position: 'absolute', top: 0, right: 0, left: 0, bottom: 0}}
        />
        {/*Cover */}
        <View
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: book.backgroundColor,
          }}>
          {/*Navigation header */}
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: SIZES.radius,
              height: 80,
              alignItems: 'flex-end',
            }}>
            <TouchableOpacity
              style={{marginLeft: SIZES.base}}
              onPress={() => navigation.goBack()}>
              <Image
                source={icons.back_arrow}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: book.navTintColor,
                }}
              />
            </TouchableOpacity>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{...FONTS.h3, color: book.navTintColor}}>
                Book Detail
              </Text>
            </View>
            <TouchableOpacity
              style={{marginRight: SIZES.base}}
              onPress={() => console.log('Click More')}>
              <Image
                source={icons.menu}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: book.navTintColor,
                  alignSelf: 'flex-end',
                }}
              />
            </TouchableOpacity>
          </View>
          {/* book cover */}
          <View
            style={{flex: 5, paddingTop: SIZES.padding2, alignItems: 'center'}}>
            <Image
              source={book.images}
              resizeMode="contain"
              style={{flex: 1, width: 150, height: 'auto'}}
            />
          </View>
          {/**Book name and writer */}
          <View
            style={{
              flex: 1.5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                ...FONTS.h2,
                color: book.navTintColor,
              }}>
              {book.bookName}
            </Text>
            <Text style={{...FONTS.body2, color: book.navTintColor}}>
              {book.writerName}
            </Text>
          </View>
          {/*book ınfo */}
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 20,
              margin: SIZES.padding,
              borderRadius: SIZES.radius,
              backgroundColor: 'rgba(0,0,0,0.3)',
            }}>
            {/*Rating */}
            <View style={{flex: 1, alignItems: 'center'}}>
              <Text style={{color: COLORS.white, ...FONTS.h3}}>
                {book.rating}
              </Text>
              <Text style={{...FONTS.body4, color: COLORS.white, opacity: 0.8}}>
                Değerlendirme
              </Text>
            </View>

            <LineDivider />
            {/*Pages */}
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                paddingHorizontal: SIZES.radius,
              }}>
              <Text style={{color: COLORS.white, ...FONTS.h3}}>
                {book.pageNo}
              </Text>
              <Text style={{...FONTS.body4, color: COLORS.white, opacity: 0.8}}>
                Sayfa
              </Text>
            </View>
            {/*langague */}
            <LineDivider />

            <View style={{flex: 1, alignItems: 'center'}}>
              <Text style={{color: COLORS.white, ...FONTS.h3}}>
                {book.language}
              </Text>
              <Text style={{...FONTS.body4, color: COLORS.white, opacity: 0.8}}>
                Dil
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  function renderBookDescription() {
    const indicatorSize =
      scrollViewWholeHeight > scrollViewVisibleHeight
        ? (scrollViewVisibleHeight * scrollViewVisibleHeight) /
          scrollViewWholeHeight
        : scrollViewVisibleHeight;

    const difference =
      scrollViewVisibleHeight > indicatorSize
        ? scrollViewVisibleHeight - indicatorSize
        : 1;

    return (
      <View style={{flex: 1, flexDirection: 'row', padding: SIZES.padding}}>
        {/*Custom scrool */}
        <View style={{width: 4, height: '100%', backgroundColor: COLORS.gray1}}>
          <Animated.View
            style={{
              width: 4,
              height: indicatorSize,
              backgroundColor: COLORS.ligthGray4,
              transform: [
                {
                  translateY: Animated.multiply(
                    indicator,
                    scrollViewVisibleHeight / scrollViewWholeHeight,
                  ).interpolate({
                    inputRange: [0, difference],
                    outputRange: [0, difference],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}
          />
        </View>
        <ScrollView
          contentContainerStyle={{paddingLeft: SIZES.padding2}}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onContentSizeChange={(width, height) => {
            setScroolViewWholeHeight(height);
          }}
          onLayout={({
            nativeEvent: {
              layout: {x, y, width, height},
            },
          }) => {
            setScrollViewVisibleHeight(height);
          }}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: indicator}}}],
            {useNativeDriver: false},
          )}>
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.white,
              marginBottom: SIZES.padding,
            }}>
            {book.bookName}
          </Text>
          <Text style={{...FONTS.body2, color: COLORS.ligthGray}}>
            {book.description}
          </Text>
        </ScrollView>
      </View>
    );
  }

  function renderBottomButton() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            width: 60,
            backgroundColor: COLORS.secondary,
            marginLeft: SIZES.padding,
            marginVertical: SIZES.base,
            borderRadius: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => console.log('Book')}>
          <Image
            source={icons.flag}
            resizeMode="contain"
            style={{
              width: 35,
              height: 35,
              tintColor: COLORS.ligthGray2,
            }}
          />
        </TouchableOpacity>
        {/*reading */}
        <TouchableOpacity
        style={{
            flex:1,
            marginBottom:10,
            marginRight:23,
            backgroundColor:COLORS.primary,
            marginHorizontal:SIZES.base,
            marginVertical:SIZES.base,
            borderRadius:SIZES.radius,
            alignItems:'center',
            justifyContent:'center'
        }}
        onPress={()=>console.log("reading")}
        >
            <Text style={{...FONTS.h3,color:COLORS.white}}>Okumaya Başla</Text>
        </TouchableOpacity>
      </View>
    );
  }
  if (book) {
    return (
      <View style={{flex: 1, backgroundColor: COLORS.black}}>
        {/*Book Image */}
        <View style={{flex: 4}}>{renderInfoSection()}</View>
        {/*Description */}
        <View style={{flex: 2}}>{renderBookDescription()}</View>
        {/*Buttons */}
        <View style={{height: 70,marginBottom:30}}>{renderBottomButton()}</View>
      </View>
    );
  } else {
    return <></>;
  }
};
export default BookDetail;
