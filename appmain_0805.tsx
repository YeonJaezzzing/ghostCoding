import { ScrollArea } from "./components/ui/scroll-area";
import { Badge } from "./components/ui/badge";
import { Card, CardContent } from "./components/ui/card";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import {
  Search,
  Bell,
  Heart,
  MessageCircle,
  Home,
  Bookmark,
  Users,
  Compass,
} from "lucide-react";

// Status Bar Component
function StatusBar() {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white">
      <div className="text-[17px] font-semibold text-black">
        9:41
      </div>
      <div className="flex items-center gap-2">
        <div className="flex gap-1">
          <div className="w-1 h-1 bg-black rounded-full"></div>
          <div className="w-1 h-1 bg-black rounded-full"></div>
          <div className="w-1 h-1 bg-black rounded-full"></div>
          <div className="w-1 h-1 bg-black/50 rounded-full"></div>
        </div>
        <div className="w-6 h-3 border border-black rounded-sm relative">
          <div className="w-4 h-2 bg-black rounded-[1px] absolute top-0.5 left-0.5"></div>
          <div className="w-1 h-1 bg-black rounded-sm absolute -right-1 top-1"></div>
        </div>
      </div>
    </div>
  );
}

// Header Component
function Header() {
  return (
    <div className="flex items-center justify-between px-5 py-3 bg-white">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-[#202c6c] via-[#56e1e9] to-[#bb63ff] bg-clip-text text-transparent">
        Gemverse
      </h1>
      <div className="flex items-center gap-3">
        <Search className="w-6 h-6 text-[#202C6C]" />
        <Bell className="w-6 h-6 text-[#202C6C]" />
      </div>
    </div>
  );
}

// Category Icon Component
function CategoryIcon({
  name,
  emoji,
  isActive = false,
}: {
  name: string;
  emoji: string;
  isActive?: boolean;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center w-16 h-16 rounded-full p-2 flex-shrink-0 ${
        isActive ? "bg-[#9596f4]" : "bg-[#f7f7f8]"
      }`}
    >
      <div className="text-xl mb-1">{emoji}</div>
      <span
        className={`text-xs ${isActive ? "text-white" : "text-[#202c6c]"}`}
      >
        {name}
      </span>
    </div>
  );
}

// Categories Section
function CategoriesSection() {
  const categories = [
    { name: "뷰티", emoji: "💄", isActive: true },
    { name: "다이어트", emoji: "🏃‍♀️" },
    { name: "운동", emoji: "💪" },
    { name: "반려동물", emoji: "🐕" },
    { name: "음악", emoji: "🎵" },
    { name: "연애", emoji: "💕" },
    { name: "여행", emoji: "✈️" },
  ];

  return (
    <div className="px-4 py-4">
      <ScrollArea>
        <div className="flex gap-3 pb-2">
          {categories.map((category, index) => (
            <CategoryIcon
              key={index}
              name={category.name}
              emoji={category.emoji}
              isActive={category.isActive}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

// Content Card Component
function ContentCard({
  image,
  title,
  subtitle,
}: {
  image: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="relative w-48 h-44 rounded-lg overflow-hidden flex-shrink-0">
      <ImageWithFallback
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-4 right-4 text-white text-right">
        <p className="text-sm font-medium leading-tight">
          {title}
        </p>
        <p className="text-xs opacity-90">{subtitle}</p>
      </div>
    </div>
  );
}

// Content Section
function ContentSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold text-black px-5 mb-4">
        {title}
      </h2>
      {children}
    </div>
  );
}

// User Content Item
function UserContentItem({
  name,
  content,
  avatar,
}: {
  name: string;
  content: string;
  avatar: string;
}) {
  return (
    <div className="flex items-center gap-4 p-4 border-b border-gray-100 last:border-b-0">
      <ImageWithFallback
        src={avatar}
        alt={name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div className="flex-1">
        <p className="text-sm font-medium text-black">{name}</p>
        <p className="text-xs text-gray-600 mt-1 line-clamp-2">
          {content}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Heart className="w-4 h-4 text-gray-400" />
        <MessageCircle className="w-4 h-4 text-gray-400" />
      </div>
    </div>
  );
}

// Ranking Item Component
function RankingItem({
  rank,
  title,
  author,
  image,
  medal,
}: {
  rank: number;
  title: string;
  author: string;
  image: string;
  medal?: string;
}) {
  return (
    <div className="flex flex-col items-center w-20 flex-shrink-0">
      <div className="relative w-16 h-20 rounded-lg overflow-hidden mb-2">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        {medal && (
          <div className="absolute top-1 right-1 text-lg">
            {medal}
          </div>
        )}
      </div>
      <div className="text-center">
        <p className="text-xs font-bold text-black leading-tight mb-1">
          {title}
        </p>
        <p className="text-[10px] text-gray-500">by {author}</p>
      </div>
    </div>
  );
}

// Ad Banner Component
function AdBanner() {
  return (
    <Card className="mx-5 mb-6">
      <CardContent className="flex items-center gap-4 p-4">
        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-pink-200 to-purple-300 flex items-center justify-center">
          <span className="text-2xl">👑</span>
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-black mb-1">
            화해 Award 👑
          </h3>
          <p className="text-sm text-gray-600 leading-tight">
            지금 화해 어플에서
            <br />
            랭킹 Top 1 ~ 10 아이템 만나요!
          </p>
        </div>
        <Badge
          variant="secondary"
          className="bg-[rgba(86,225,233,0.5)] text-[#47484c] text-xs"
        >
          AD
        </Badge>
      </CardContent>
    </Card>
  );
}

// Bottom Tab Bar
function TabBar() {
  return (
    <div className="flex items-center justify-between px-6 py-3 bg-white border-t border-gray-200">
      <div className="flex flex-col items-center">
        <Home className="w-6 h-6 mb-1 text-black" />
        <span className="text-xs text-black">홈</span>
      </div>
      <div className="flex flex-col items-center">
        <Bookmark className="w-6 h-6 mb-1 text-[#989ba2]" />
        <span className="text-xs text-[#989ba2]">보석함</span>
      </div>
      <div className="flex flex-col items-center">
        <Users className="w-6 h-6 mb-1 text-[#989ba2]" />
        <span className="text-xs text-[#989ba2]">커뮤니티</span>
      </div>
      <div className="flex flex-col items-center">
        <Compass className="w-6 h-6 mb-1 text-[#989ba2]" />
        <span className="text-xs text-[#989ba2]">발견</span>
      </div>
    </div>
  );
}

export default function App() {
  const contentCards = [
    {
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop",
      title: "피부에 더 순하게",
      subtitle: "무기자차 성분 체크 방법",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=300&fit=crop",
      title: "피부톤에 알맞는",
      subtitle: "파운데이션 고르는 법",
    },
    {
      image:
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=300&fit=crop",
      title: "요즘 유행하는 립 컬러",
      subtitle: "#미지근톤 #뉴트럴톤",
    },
    {
      image:
        "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop",
      title: "한올 한올 내 눈썹같은",
      subtitle: "브로우 메이크업",
    },
    {
      image:
        "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=400&h=300&fit=crop",
      title: "올바른 클렌징으로",
      subtitle: "피부 건강 지키는 법",
    },
  ];

  const userContent = [
    {
      name: "장연재님",
      content: "윤곽수술 하지 않아도 얼굴 윤곽 줄이는 방법",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "홍길동님",
      content: "하얀 피부를 만들 수 있는 리포좀 글루타치온",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "김민영님",
      content: "민감한 피부도 안전한 천연 성분 화장품 추천",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "이수진님",
      content: "10분 만에 완성하는 데일리 메이크업 루틴",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    },
  ];

  const trendingContent = [
    {
      name: "곽두팔님",
      content: "겨울철 건조한 피부를 위한 보습 꿀팁",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "곽일팔님",
      content: "메이크업 브러시 관리법으로 더 오래 사용하기",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "박서영님",
      content: "아이라인 초보자를 위한 단계별 가이드",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "최지은님",
      content: "컨실러 하나로 완벽한 베이스 만들기",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
    },
  ];

  const rankingItems = [
    {
      rank: 1,
      title: "#윤곽 마사지 종합세트",
      author: "연재찡님",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=250&fit=crop",
      medal: "🥇",
    },
    {
      rank: 2,
      title: "#셀프 관리 뷰티디바이스",
      author: "연재찡님",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=200&h=250&fit=crop",
      medal: "🥈",
    },
    {
      rank: 3,
      title: "#봄웜톤 미지근 메이크업",
      author: "연재찡님",
      image:
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=200&h=250&fit=crop",
      medal: "🥉",
    },
    {
      rank: 4,
      title: "#쿨톤 추천 아이팔레트",
      author: "연재찡님",
      image:
        "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=200&h=250&fit=crop",
    },
    {
      rank: 5,
      title: "#글로우 베이스 메이크업",
      author: "뷰티구루님",
      image:
        "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=200&h=250&fit=crop",
    },
    {
      rank: 6,
      title: "#데일리 스킨케어 루틴",
      author: "스킨전문가님",
      image:
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=200&h=250&fit=crop",
    },
  ];

  const influencerChannels = [
    {
      name: "연재찡님",
      content: "매일 업데이트되는 뷰티 꿀팁과 제품 리뷰",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "뷰티구루님",
      content: "트렌드 메이크업과 스킨케어 전문 채널",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "코스메틱리뷰어님",
      content: "솔직한 화장품 리뷰와 성분 분석",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
  ];

  return (
    <div className="w-full max-w-[375px] mx-auto bg-white min-h-screen flex flex-col">
      <StatusBar />
      <Header />
      <CategoriesSection />

      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full">
          <div className="pb-28">
            <ContentSection title="장연재님 관심 #뷰티 콘텐츠">
              <ScrollArea>
                <div className="flex gap-4 px-5 pb-2">
                  {contentCards.map((card, index) => (
                    <ContentCard
                      key={index}
                      image={card.image}
                      title={card.title}
                      subtitle={card.subtitle}
                    />
                  ))}
                </div>
              </ScrollArea>
              <Card className="mx-5 mt-4">
                <CardContent className="p-0">
                  {userContent.map((item, index) => (
                    <UserContentItem
                      key={index}
                      name={item.name}
                      content={item.content}
                      avatar={item.avatar}
                    />
                  ))}
                </CardContent>
              </Card>
            </ContentSection>

            <ContentSection title="요즘 뜨는 #뷰티 콘텐츠">
              <Card className="mx-5">
                <CardContent className="p-0">
                  {trendingContent.map((item, index) => (
                    <UserContentItem
                      key={index}
                      name={item.name}
                      content={item.content}
                      avatar={item.avatar}
                    />
                  ))}
                </CardContent>
              </Card>
            </ContentSection>

            <ContentSection title="랭킹 TOP 10 #뷰티 보석함">
              <Card className="mx-5">
                <CardContent className="p-4">
                  <ScrollArea>
                    <div className="flex gap-4 pb-2">
                      {rankingItems.map((item, index) => (
                        <RankingItem
                          key={index}
                          rank={item.rank}
                          title={item.title}
                          author={item.author}
                          image={item.image}
                          medal={item.medal}
                        />
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </ContentSection>

            <AdBanner />

            <ContentSection title="#뷰티 인플루언서 채널">
              <Card className="mx-5">
                <CardContent className="p-0">
                  {influencerChannels.map((item, index) => (
                    <UserContentItem
                      key={index}
                      name={item.name}
                      content={item.content}
                      avatar={item.avatar}
                    />
                  ))}
                </CardContent>
              </Card>
            </ContentSection>
          </div>
        </ScrollArea>
      </div>

      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[375px] bg-white">
        <TabBar />
        <div className="h-5 bg-white flex items-center justify-center">
          <div className="w-36 h-1 bg-black rounded-full" />
        </div>
      </div>
    </div>
  );
}