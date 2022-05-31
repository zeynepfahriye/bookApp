import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList
} from 'react-native';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';

const LineDivider = () => {
  return (
    <View style={{width: 1, paddingVertical: 18}}>
      <View
        style={{
          flex: 1,
          borderLeftColor: COLORS.ligthGray,
          borderLeftWidth: 1,
        }}></View>
    </View>
  );
};

const Home = ({navigation}) => {
  const profileData = {
    name: 'UserName',
    point: 100,
  };

  const bookOne = {
    id: 1,
    bookName: 'Cehenneme Övgü',
    writerName: 'Gündüz Vassaf',
    rating: 4.6,
    images: images.cehenneme_ovgu,
    readed: '11k',
    pageNo: '279',
    language: 'Türkçe',
    gendre: ['Felsefe-Düşünce',"Roman"],
    backgroundColor: 'rgba(255,255,255,0.5)',
    navTintColor: '#000',
    description:
      'Bazı eleştirmenlerin *şeytanın avukatı* sıfatını yakıştırdıkları Gündüz Vassaf’ın *gözden geçirilmiş ve genişletilmiş yeni baskısı*yla sunduğumuz Cehenneme Övgü’sü, içimizde büyütüp yaşattığımız küçük ‘totaliter dünyalar’ımızı afişe ediyor, daha doğrusu ‘yüzümüze vuruyor’. Totalitarizmin -anne karnındaki bebeğin beslenmesi gibi- bireyle toplumu bağlayan göbek bağıyla semirdiğini, hayata ilişkin algılarımızı ve kimi dayatılan kimisini de gönüllü olarak kabul ettiğimiz kavramları irdeleyerek gösteriyor. Cehenneme Övgü, yazarın kendiyle hesaplaştığı, herkesi de hesaplaşmaya çağıran, hatta kışkırtan bir kitap.',
  };
  const bookTwo = {
    id: 2,
    bookName: 'Dönüşüm',
    writerName: 'Frans Kafka',
    rating: 4.8,
    images: images.donusum,
    readed: '15k',
    pageNo: 135,
    language: 'Türkçe',
    backgroundColor: 'rgba(128,128,128,0.9)',
    navTintColor: '#000',
    gendre: ['Fantastik', 'Uzun Hikaye', 'Absürd Kurgu'],
    description:
      'Dönüşüm adlı anlatı, yazarın anlatım sanatının gerçek anlamda doruklarına ulaştığı bir yapıttır. Küçük burjuva çevrelerindeki tiksindirici aile ilşkilerini en ince ayrıntılarına kadar irdeleyen anlatı, aynı zamanda genelde toplumun kalıplaşmış, işlevini çoktan yitirmiş olan akışına bilinç düzeyinde başkaldıran bireyin tragedyasını çarpıcı biçimde dile getirir. Gregor Samsa’nın başkalaşması, bir böceğe dönüşmesi, salt bir çarkın kaskatı dişlisi, eleştirmeyen, ama yalnızca boyun eğen bir toplum teki olmaktan çıkma anlamı taşır; böylece böcekleşen’in yazgısı, elbet toplumca dışlanmaktır.',
  };

  const bookThree = {
    id: 3,
    bookName: "Genç Werther'in Acıları",
    writerName: 'Goethe',
    rating: 5.0,
    images: images.genc_weather,
    readed: '30k',
    pageNo: 128,
    language: 'Türkçe',
    backgroundColor: 'rgba(0,0,255,0.3)',
    navTintColor: '#FFFF',
    gendre: ['Roman', 'Otobiyografik Kurgu'],
    description:
      'Evrensel boyutlara ulaşmış ünüyle bugün dünya edebiyatının en büyük yazarlarından biri sayılan Goethe, henüz yirmi beş yaşındayken yazdığı Genç Werther’in Acıları’nda, kısa bir süre önce Charlotte adlı genç bir kadınla yaşadığı mutsuz ilişkiden yola çıkmıştı. Edebiyat dünyasına karşılıksız aşk acısıyla intihara sürüklenen “romantik kahraman”ı armağan eden bu büyüleyici mektup-roman, şiirselliği ve yaşama tutkulu bakışıyla okurları mıknatıs gibi kendine çekmişti. Almanya’da dönemin gençliğini etkisi altına alan romanın birçok kişinin intiharına neden olduğu, Werther’in giydiği mavi frak, sarı yelek ve çizmelerin o yıllarda moda haline geldiği, Napoléon’un bile kitabı sürekli yanında taşıdığı söylenir.Son derece duyarlı ve tutkulu bir genç ressam olan Werther’in düşsel dostu Wilhelm’e yazdığı mektuplardan oluşan Genç Werther’in Acıları, edebiyatta akılcılığın yerini alan duygusallığın bir başyapıtıdır',
  };

  const bookFour = {
    id: '4',
    bookName: "Godot'yu Beklerken",
    writerName: 'Samuel Beckett',
    rating: 3.0,
    images: images.godotyu_beklerken,
    readed: '5k',
    pageNo: 135,
    language: 'Türkçe',
    backgroundColor: 'rgba(255,255,64,0.3)',
    navTintColor: '#000',
    gendre: ['Trajikomedi', 'Absürd Kurgu'],
    description:
      'Oyunda, varoluş sancıları çeken Vladimir ve Estragon adlı karakterler yer alr. Bu karakterlerin yolları kesişir, birbirleriyle iletişim kurmaya çalışırlar. Eylemsizliklerine yenik düşünce, Godot adında ne olduğu bilinmeyen bir kimse ya da şeyi beklemeye başlarlar.',
  };

  const myBooksData= [
      {
          ...bookOne,
          completion:"75%",
          lastRead:"3d 5h",
      },
      {
          ...bookTwo,
          completion:"23%",
          lastRead:"10d 5h",
      },
      {
          ...bookThree,
          completion:"10%",
          lastRead:"1d 3h",
      },
      {
          ...bookFour,
          completion:"35%",
          lastRead:"15d 1h",
      }
  ]

  const categoriesData = [
      {
          id:1,
          categoryName:"Best Seller",
          books:[bookOne,bookTwo,bookThree]
      },
      {
          id:2,
          categoryName:"The Latest",
          books:[bookFour]
      },
      {
          id:3,
          categoryName:"Coming Soon",
          books :[bookThree]
      }
  ]
  const [profile, setProfile] = React.useState(profileData);
  const [myBooks,setMyBooks]=React.useState(myBooksData);
  const [categories,setCategories]=React.useState(categoriesData)
  const [selectedCategory,setSelectedCategory]=React.useState(1)
  function renderHeader(profile) {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          paddingHorizontal: SIZES.padding,
          alignItems: 'center',
        }}>
        {/*greetings */}
        <View style={{flex: 1}}>
          <View>
            <Text style={{...FONTS.h3, color: COLORS.white}}>Good Morning</Text>
            <Text style={{...FONTS.h2, color: COLORS.white}}>
              {profile.name}
            </Text>
          </View>
        </View>
        {/*Points */}
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            height: 40,
            paddingLeft: 3,
            paddingRight: SIZES.radius,
            borderRadius: 20,
          }}
          onPress={() => {
            console.log('Point');
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 30,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 25,
                backgroundColor: 'rgba(0,0,0,0.5)',
              }}>
              <Image
                source={icons.plus}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: COLORS.white,
                }}
              />
            </View>
            <Text
              style={{
                marginLeft: SIZES.base,
                ...FONTS.h4,
                color: COLORS.white,
              }}>
              {profile.point} point
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  function renderButtonSection() {
    return (
      <View style={{flex: 1, justifyContent: 'center', padding: SIZES.padding}}>
        <View
          style={{
            flexDirection: 'row',
            height: 70,
            backgroundColor: COLORS.secondary,
            borderRadius: SIZES.radius,
          }}>
          {/*Claim */}
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => console.log('Claim')}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={icons.claim}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: COLORS.primary,
                }}
              />
              <Text
                style={{
                  marginLeft: SIZES.base,
                  color: COLORS.white,
                  ...FONTS.body3,
                }}>
                Claim
              </Text>
            </View>
          </TouchableOpacity>

          {/*Divider */}
          <LineDivider />

          {/*GetPoint */}
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => console.log('get point')}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={icons.getPoint}
                resizeMode="contain"
                style={{width: 30, height: 30, tintColor: COLORS.primary}}
              />
              <Text
                style={{
                  marginLeft: SIZES.base,
                  ...FONTS.body3,
                  color: COLORS.white,
                }}>
                Get Point
              </Text>
            </View>
          </TouchableOpacity>

          {/*Divider */}
          <LineDivider />

          {/*Card */}
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => console.log('card')}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={icons.card}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: COLORS.primary,
                }}
              />
              <Text
                style={{
                  color: COLORS.white,
                  ...FONTS.body3,
                  marginLeft: SIZES.base,
                }}>
                Cards
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  function renderMyBookSection(myBooks){

    const renderItem = ({item,index})=>{
        return(
        <TouchableOpacity
        style={{flex:1,
        marginLeft:index == 0?SIZES.padding:0,
        marginRight:SIZES.radius
        }}
        onPress={()=>navigation.navigate("BookDetail",{
          book:item
        })}
        >
            {/*Book Cover */}
            <Image
            source={item.images}
            resizeMode="cover"
            style={{
                width:180,
                height:250,
                borderRadius:20
            }}
             />
             {/*Book Info */}
             <View style={{marginTop:SIZES.radius,flexDirection:'row',alignItems:'center'}}>
             <Image 
                 source={icons.clock}
                 style={{
                     width:20,
                     height:20,
                     tintColor:COLORS.ligthGray
                 }}
             />
             <Text style={{marginLeft:5,color:COLORS.ligthGray,...FONTS.body3}}>{item.lastRead}</Text>
             <Image
             source={icons.pages}
             style={{marginLeft:SIZES.radius,
             width:20,
             height:20,
             tintColor:COLORS.ligthGray
             }}
              />
              <Text style={{color:COLORS.ligthGray,...FONTS.body3,marginLeft:5}}>{item.completion}</Text>
             </View>
        </TouchableOpacity>
        )
    }
      return(
          <View style={{flex:1}}>
          {/*header */}
          <View style={{paddingHorizontal:SIZES.padding,flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{color:COLORS.white,...FONTS.h2}}>My Books</Text>
          <TouchableOpacity
          onPress={()=>console.log("See More")}
          >
          <Text style={{color:COLORS.ligthGray,...FONTS.body3,alignSelf:'flex-start',textDecorationLine:'underline'}}>see more</Text>
          </TouchableOpacity>
          </View>
          {/*Books */}
          <View
          style={{flex:1,marginTop:SIZES.padding}}
          >
              <FlatList
                  data={myBooks}
                  renderItem={renderItem}
                  keyExtractor={item=>`${item.id}`}
                  horizontal
                  showsHorizontalScrollIndicator={false}
              />
          </View>
          </View>
      )
  }
  function renderCategoryHeader () {

    const renderItem =({item})=>{
        return(
            <TouchableOpacity 
            style={{flex:1,marginRight:SIZES.padding}}
            onPress={()=>setSelectedCategory(item.id)}
            >
            {selectedCategory==item.id && <Text style={{color:COLORS.white,...FONTS.h2}}>{item.categoryName}</Text>}
            {selectedCategory!=item.id && <Text style={{color:COLORS.ligthGray,...FONTS.h2}}>{item.categoryName}</Text>}

            </TouchableOpacity>
        )
    }
return(
    <View style={{flex:1,paddingLeft:SIZES.padding}}>
        <FlatList 
            data={categories}
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={item=> `${item.id}`}
            horizontal
        />
    </View>
)
  }
  function renderCategoryData (){

    var books = []
    let selectedCategoryBooks =categories.filter(a=>a.id ==selectedCategory)
    if(selectedCategoryBooks.length>0){
        books=selectedCategoryBooks[0].books
    }

    const renderItem = ({item})=>{
        return(
            <View style={{marginVertical:SIZES.base}}>
                <TouchableOpacity 
                style={{flex:1,flexDirection:'row'}}
                onPress={()=>navigation.navigate("BookDetail", {
                  book:item
                })}
                >
                <Image
                source={item.images}
                resizeMode='cover'
                style={{width:100,
                height:150,
                borderRadius:10
                }}
                />
                <View style={{flex:1,marginLeft:SIZES.radius}}>
                <View>
                    <Text style={{paddingRight:SIZES.padding,...FONTS.h3,color:COLORS.white}}>{item.bookName}</Text>
                    <Text style={{...FONTS.body3,color:COLORS.ligthGray}}>{item.writerName}</Text>
                </View>
{//TODO:KİTAP INFO GİRİLECEK 
//TODO : KİTAP DETAY SAYFASI YAPILACAK
}
                <View style={{flexDirection:'row',marginTop:SIZES.radius}}>
                  <Image 
                    source={icons.pages}
                    resizeMode='contain'
                    style={{width:20,
                    height:20,
                    tintColor:COLORS.ligthGray
                    }}
                  />
                  <Text style={{...FONTS.body4,color:COLORS.ligthGray,paddingHorizontal:SIZES.radius}}>{item.pageNo}</Text>
                  <Image
                  source={icons.read}
                  resizeMode='contain'
                  style={{
                    width:20,
                    height:20,
                    tintColor:COLORS.ligthGray
                  }}
                   />
                   <Text style={{...FONTS.body4,color:COLORS.ligthGray,paddingHorizontal:SIZES.radius}}>{item.readed}</Text>
                </View>

                {/*genre*/}
                <View style={{flexDirection:'row',marginTop:SIZES.base}}>
                {
                  item.gendre.includes("Roman")&&
                  <View style={{justifyContent:'center',alignItems:'center',padding:SIZES.base,marginRight:SIZES.base,backgroundColor:COLORS.darkGreen,height:40,borderRadius:SIZES.radius}}>
                  <Text style={{...FONTS.body3,color:COLORS.lightGreen}}>Roman</Text>
                  </View>
                }
                {
                  item.gendre.includes("Uzun Hikaye")&&
                  <View style={{justifyContent:'center',alignItems:'center',padding:SIZES.base,marginRight:SIZES.base,backgroundColor:COLORS.darkGreen,height:40,borderRadius:SIZES.radius}}>
                  <Text style={{...FONTS.body3,color:COLORS.lightGreen}}>Uzun Hikaye</Text>
                  </View>
                }
                {
                  item.gendre.includes("Otobiyografik Kurgu")&&
                  <View style={{justifyContent:'center',alignItems:'center',padding:SIZES.base,marginRight:SIZES.base,backgroundColor:COLORS.darkRed,height:40,borderRadius:SIZES.radius}}>
                  <Text style={{...FONTS.body3,color:COLORS.lightRed}}> Otobiyografik Kurgu</Text>
                  </View>
                }
                {
                  item.gendre.includes("Felsefe-Düşünce")&&
                  <View style={{justifyContent:'center',alignItems:'center',padding:SIZES.base,marginRight:SIZES.base,backgroundColor:COLORS.darkRed,height:40,borderRadius:SIZES.radius}}>
                  <Text style={{...FONTS.body3,color:COLORS.lightRed}}>Felsefe-Düşünce</Text>
                  </View>
                }
                {
                  item.gendre.includes("Fantastik")&&
                  <View style={{justifyContent:'center',alignItems:'center',padding:SIZES.base,marginRight:SIZES.base,backgroundColor:COLORS.darkBlue,height:40,borderRadius:SIZES.radius}}>
                  <Text style={{...FONTS.body3,color:COLORS.lightBlue}}>Fantastik</Text>
                  </View>
                }
                </View>
                </View>
                </TouchableOpacity>
                {/* Book Save Button */}
                <TouchableOpacity
                style={{
                  position:'absolute',top:5,right:15
                }}
                onPress={()=>console.log("BookSave")}
                >
                <Image 
                source={icons.flag}
                resizeMode='contain'
                  style={{
                    width:25,
                    height:25,
                    tintColor:COLORS.ligthGray
                  }}
                />

                </TouchableOpacity>
            </View>
        )
    }
      return(
          <View style={{flex:1, marginTop:SIZES.radius,paddingLeft:SIZES.padding}}>
          <FlatList
          data={books}
          renderItem={renderItem}
          keyExtractor={item=>`${item.id}`}
          showsVerticalScrollIndicator={false}
           />
          </View>
      )
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.black}}>
      {/* header */}
      <View style={{height: 200}}>
        {renderHeader(profile)}
        {renderButtonSection()}
      </View>

      {/*Body */}
      <ScrollView style={{marginTop: SIZES.radius}}>
        {/*Book */}
        <View>{renderMyBookSection(myBooks)}</View>
        {/*Categories */}
        <View style={{marginTop:SIZES.padding}}>
            <View>
                {renderCategoryHeader()}
            </View>
            <View>
                {renderCategoryData()}
            </View>
        </View>
      
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
