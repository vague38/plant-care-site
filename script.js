const people = [
  {
    id: "trainer",
    name: "조련사",
    subtitle: "허브, 잎채소, 꽃식물, 관엽이 섞인 다품종 구성",
    environment: "집 환경 메모 입력 예정. 현재는 물마름에 민감한 채소와 통풍이 중요한 허브를 우선 확인하세요.",
    focus: "바질, 로켓루꼴라, 버터헤드는 마름을 자주 보고, 로즈마리와 올리브 계열 식물은 빛과 통풍을 우선합니다.",
    plants: ["바질", "로켓루꼴라", "버터헤드", "로즈마리", "수국", "오렌지자스민", "가지", "숙근버베나", "녹보수", "마삭줄", "스노우화이트", "엔조이스킨"]
  },
  {
    id: "az",
    name: "아즈",
    subtitle: "꽃과 향, 햇빛을 좋아하는 나무 중심",
    environment: "집 환경 메모 입력 예정. 꽃봉오리와 잎 처짐을 보면 물마름, 빛, 온도 변화를 함께 확인하세요.",
    focus: "수국과 치자는 물마름에 약하고, 올리브나무는 강한 빛과 배수를 좋아합니다.",
    plants: ["바질", "카네이션", "수국", "오렌지자스민", "치자", "올리브나무"]
  },
  {
    id: "thomas",
    name: "Thomas",
    subtitle: "수확형 채소와 실내 관엽을 함께 키우는 구성",
    environment: "집 환경 메모 입력 예정. 잎채소는 마름을 줄이고, 관엽은 과습과 빛 부족을 나눠 확인하세요.",
    focus: "부추, 상추류는 규칙적인 수분이 중요하고, 로즈마리는 빛과 통풍을 우선해서 확인하세요.",
    plants: ["부추", "아삭이고추", "스킨답서스", "수국", "가지", "적상추", "청상추", "스노우사파이어", "로즈마리"]
  }
];

const plants = [
  {
    name: "오렌지자스민",
    type: "꽃과 향이 좋은 실내 관목",
    category: "flower",
    icon: "✽",
    light: "밝은 간접광을 좋아하고, 반나절 정도의 부드러운 직사광도 잘 받습니다.",
    water: "겉흙 2~3cm가 마르면 화분 아래로 물이 빠질 만큼 충분히 줍니다.",
    environment: "18~28도, 통풍 좋은 창가. 꽃눈을 위해 너무 어두운 곳은 피합니다.",
    warning: "잎이 우수수 떨어지면 빛 부족, 냉해, 과습을 함께 확인하세요.",
    tags: ["밝은 창가", "향기", "겉흙 확인"]
  },
  {
    name: "스킨답서스",
    type: "초보자에게 강한 덩굴성 관엽식물",
    category: "foliage",
    icon: "◇",
    light: "중간 밝기의 간접광에서 안정적이고, 무늬종은 조금 더 밝은 곳이 좋습니다.",
    water: "겉흙이 충분히 마른 뒤 줍니다. 물을 자주 주는 것보다 말렸다 주는 편이 안전합니다.",
    environment: "실내 보통 습도에서도 잘 자라지만 찬바람과 뿌리 과습은 피합니다.",
    warning: "잎 끝이 노랗고 줄기가 물러지면 물주기 간격을 늘리세요.",
    tags: ["반음지 가능", "강한 생명력", "과습 주의"]
  },
  {
    name: "로즈마리",
    type: "햇빛과 건조한 공기를 좋아하는 허브",
    category: "herb",
    icon: "☼",
    light: "하루 5~6시간 이상 강한 빛이 필요합니다. 가능한 가장 밝은 창가에 둡니다.",
    water: "속흙까지 어느 정도 마른 뒤 물을 줍니다. 축축한 흙이 오래가면 뿌리가 약해집니다.",
    environment: "통풍이 핵심입니다. 습하고 답답한 실내보다 건조하고 바람이 도는 곳을 좋아합니다.",
    warning: "가지 끝이 까맣게 마르거나 잎이 우수수 떨어지면 빛과 통풍을 먼저 점검하세요.",
    tags: ["강한 햇빛", "통풍 필수", "건조 선호"]
  },
  {
    name: "바질",
    type: "성장이 빠른 잎 허브",
    category: "herb",
    icon: "⌁",
    light: "밝은 빛을 좋아합니다. 웃자람이 생기면 빛이 부족하다는 신호입니다.",
    water: "겉흙이 마르면 바로 줍니다. 잎이 축 처지기 전에 규칙적으로 확인합니다.",
    environment: "20도 이상 따뜻한 환경, 부드러운 통풍, 배수 좋은 흙이 좋습니다.",
    warning: "꽃대가 올라오면 잎 맛이 약해질 수 있어 수확 목적이라면 순지르기를 해주세요.",
    tags: ["따뜻한 곳", "자주 확인", "순지르기"]
  },
  {
    name: "버터헤드",
    type: "부드러운 잎을 수확하는 상추류",
    category: "edible",
    icon: "☘",
    light: "밝은 빛이 필요하지만 한여름 강한 직사광은 잎을 지치게 할 수 있습니다.",
    water: "흙이 마르지 않게 유지하되 물고임은 피합니다. 잎채소는 건조 스트레스에 약합니다.",
    environment: "서늘한 15~22도에서 잎이 부드럽게 자랍니다. 더우면 웃자라거나 쓴맛이 납니다.",
    warning: "잎 끝이 타거나 축 처지면 고온, 건조, 비료 농도를 함께 확인하세요.",
    tags: ["서늘하게", "마름 주의", "수확형"]
  },
  {
    name: "녹보수",
    type: "실내에서 키우기 좋은 목본 관엽식물",
    category: "foliage",
    icon: "▵",
    light: "밝은 간접광을 좋아합니다. 직사광이 강하면 잎이 탈 수 있습니다.",
    water: "겉흙이 마른 뒤 충분히 줍니다. 큰 화분은 속흙이 늦게 마르므로 과습을 조심합니다.",
    environment: "18~27도, 안정적인 실내 온도와 은은한 통풍이 좋습니다.",
    warning: "새잎이 작고 줄기가 길어지면 빛 부족, 잎이 축 처지면 물 상태를 확인하세요.",
    tags: ["밝은 간접광", "큰 화분 주의", "안정적 온도"]
  },
  {
    name: "치자",
    type: "향기로운 흰 꽃을 피우는 실내 관목",
    category: "flower",
    icon: "✿",
    light: "밝은 간접광을 좋아하고, 오전의 부드러운 햇빛은 도움이 됩니다.",
    water: "겉흙이 살짝 마르면 물을 줍니다. 완전히 말라버리면 꽃봉오리가 떨어질 수 있습니다.",
    environment: "18~26도, 높은 공중습도와 안정적인 온도를 좋아합니다. 찬바람과 급격한 위치 변화는 피합니다.",
    warning: "꽃봉오리가 떨어지면 건조, 온도 변화, 빛 부족, 물마름을 함께 확인하세요.",
    tags: ["향기로운 꽃", "습도 선호", "환경 변화 주의"]
  },
  {
    name: "올리브나무",
    type: "햇빛을 많이 좋아하는 지중해성 나무",
    category: "foliage",
    icon: "○",
    light: "가능한 가장 밝은 창가가 좋습니다. 하루 여러 시간의 직사광이 있어야 튼튼하게 자랍니다.",
    water: "속흙이 충분히 마른 뒤 흠뻑 줍니다. 늘 축축한 흙보다 건조와 배수가 중요합니다.",
    environment: "통풍이 좋고 건조한 환경을 선호합니다. 겨울에는 밝고 서늘한 곳에서 과습을 피합니다.",
    warning: "잎이 말리거나 우수수 떨어지면 빛 부족, 물마름, 과습 중 어느 쪽인지 흙 상태부터 확인하세요.",
    tags: ["올리브", "강한 햇빛", "배수 중요", "건조 선호"]
  },
  {
    name: "수국",
    type: "물을 좋아하고 큰 꽃송이가 매력적인 꽃식물",
    category: "flower",
    icon: "✺",
    light: "밝은 간접광과 오전 햇빛을 좋아합니다. 한여름 강한 오후 직사광은 잎과 꽃을 지치게 할 수 있습니다.",
    water: "겉흙이 마르기 전에 확인해 물을 줍니다. 꽃이 피는 시기에는 물마름에 특히 약합니다.",
    environment: "서늘하고 통풍 좋은 베란다나 밝은 창가가 좋습니다. 너무 덥고 건조한 실내는 피합니다.",
    warning: "잎과 꽃이 축 처지면 대부분 물마름 신호입니다. 반복되면 꽃이 빨리 상할 수 있습니다.",
    tags: ["물 좋아함", "오전 햇빛", "더위 주의"]
  },
  {
    name: "숙근버베나",
    type: "햇빛을 좋아하고 오래 피는 숙근성 꽃식물",
    category: "flower",
    icon: "✤",
    light: "하루 여러 시간의 직사광을 좋아합니다. 빛이 부족하면 줄기가 길어지고 꽃이 줄어듭니다.",
    water: "겉흙이 마르면 충분히 줍니다. 과습보다는 배수 좋은 흙과 규칙적인 물주기가 중요합니다.",
    environment: "통풍 좋은 베란다나 창가, 따뜻한 계절의 야외 환경에 잘 맞습니다. 장마철에는 물고임을 피합니다.",
    warning: "꽃이 적고 줄기만 길어지면 빛 부족을, 잎이 누렇게 변하면 과습이나 배수 문제를 확인하세요.",
    tags: ["직사광 선호", "오래 피는 꽃", "배수 중요"]
  },
  {
    name: "가지",
    type: "햇빛과 따뜻한 온도를 좋아하는 열매채소",
    category: "edible",
    icon: "◐",
    light: "하루 6시간 이상 강한 햇빛이 필요합니다. 빛이 부족하면 꽃은 피어도 열매가 잘 달리지 않습니다.",
    water: "겉흙이 마르면 충분히 줍니다. 열매가 커지는 시기에는 물마름이 반복되지 않게 확인합니다.",
    environment: "따뜻하고 통풍 좋은 베란다나 야외에 잘 맞습니다. 큰 화분과 지지대가 있으면 안정적으로 자랍니다.",
    warning: "꽃이 떨어지거나 열매가 작게 멈추면 빛 부족, 물마름, 영양 부족을 함께 확인하세요.",
    tags: ["강한 햇빛", "큰 화분", "지지대"]
  },
  {
    name: "아삭이고추",
    type: "햇빛을 많이 받을수록 열매가 잘 맺히는 열매채소",
    category: "edible",
    icon: "◊",
    light: "강한 직사광을 좋아합니다. 실내라면 가장 밝은 창가에 두고, 가능하면 베란다 햇빛을 받게 합니다.",
    water: "겉흙이 마르면 흠뻑 줍니다. 너무 말리면 꽃과 어린 열매가 떨어질 수 있고, 과습은 뿌리를 약하게 합니다.",
    environment: "20도 이상 따뜻하고 통풍 좋은 곳이 좋습니다. 꽃이 피면 가볍게 흔들어 수분을 도와줄 수 있습니다.",
    warning: "잎이 축 처지거나 열매 끝이 상하면 물주기 불균형, 고온, 칼슘 부족 가능성을 살펴보세요.",
    tags: ["고추", "직사광 선호", "통풍", "수분 도움"]
  },
  {
    name: "부추",
    type: "여러 번 잘라 먹을 수 있는 잎채소",
    category: "edible",
    icon: "|||",
    light: "밝은 빛을 좋아하지만 반나절 햇빛에서도 비교적 잘 자랍니다. 빛이 부족하면 잎이 가늘어집니다.",
    water: "겉흙이 마르면 물을 줍니다. 완전히 바싹 마르는 것보다 살짝 촉촉한 리듬이 좋습니다.",
    environment: "통풍 좋은 창가나 베란다에서 키우기 쉽습니다. 수확할 때는 밑동을 조금 남기고 자르면 다시 올라옵니다.",
    warning: "잎이 누렇게 변하면 과습, 비료 부족, 오래된 잎을 확인하고 마른 잎은 정리하세요.",
    tags: ["반복 수확", "밝은 빛", "촉촉하게"]
  },
  {
    name: "로켓루꼴라",
    type: "매콤한 향이 있는 빠르게 자라는 잎채소",
    category: "edible",
    icon: "≋",
    light: "밝은 빛을 좋아합니다. 한여름 강한 직사광보다는 오전 햇빛과 밝은 간접광이 잎을 부드럽게 합니다.",
    water: "흙이 마르지 않게 자주 확인합니다. 잎채소라 건조하면 잎이 질겨지고 쓴맛이 강해질 수 있습니다.",
    environment: "서늘한 15~22도에서 맛이 좋습니다. 더운 환경에서는 꽃대가 빨리 올라올 수 있습니다.",
    warning: "꽃대가 올라오면 잎 맛이 강해지고 질겨질 수 있어 어린잎을 자주 수확하세요.",
    tags: ["빠른 수확", "서늘하게", "마름 주의"]
  },
  {
    name: "마삭줄",
    type: "향기로운 꽃을 피울 수 있는 덩굴성 식물",
    category: "flower",
    icon: "✧",
    light: "밝은 간접광부터 오전 햇빛까지 잘 맞습니다. 너무 어두우면 꽃과 새순이 약해질 수 있습니다.",
    water: "겉흙이 마르면 충분히 줍니다. 잎이 많은 덩굴이라 더운 계절에는 마름을 자주 확인합니다.",
    environment: "통풍 좋은 창가나 베란다가 좋습니다. 줄기가 길어지면 방향을 잡아주거나 가볍게 정리하세요.",
    warning: "잎 끝이 마르거나 새순이 약하면 빛 부족, 건조, 통풍 부족을 확인하세요.",
    tags: ["덩굴성", "밝은 창가", "통풍"]
  },
  {
    name: "스노우화이트",
    type: "밝은 무늬 잎이 돋보이는 실내 관엽식물",
    category: "foliage",
    icon: "□",
    light: "밝은 간접광이 좋습니다. 무늬 잎은 빛이 너무 약하면 색이 흐려지고, 직사광은 잎을 태울 수 있습니다.",
    water: "겉흙이 마른 뒤 물을 줍니다. 흙이 계속 젖어 있으면 뿌리와 줄기가 약해집니다.",
    environment: "따뜻하고 안정적인 실내, 은은한 통풍이 좋습니다. 겨울 찬바람은 피합니다.",
    warning: "잎이 노랗게 변하거나 줄기가 물러지면 과습 가능성을 먼저 확인하세요.",
    tags: ["무늬 잎", "밝은 간접광", "과습 주의"]
  },
  {
    name: "엔조이스킨",
    type: "무늬가 선명한 스킨답서스 계열 관엽식물",
    category: "foliage",
    icon: "◇",
    light: "밝은 간접광에서 무늬가 선명합니다. 약한 빛도 견디지만 새잎 무늬가 줄 수 있습니다.",
    water: "겉흙이 충분히 마른 뒤 줍니다. 일반 스킨답서스처럼 과습보다 살짝 말렸다 주는 편이 안전합니다.",
    environment: "보통 실내 습도에서도 잘 자라며, 찬바람과 물고임을 피하면 관리가 쉽습니다.",
    warning: "잎이 축 처지면 물마름을, 잎이 누렇게 무르면 과습을 의심하세요.",
    tags: ["스킨답서스", "무늬 잎", "반음지 가능"]
  },
  {
    name: "카네이션",
    type: "햇빛과 서늘한 공기를 좋아하는 꽃식물",
    category: "flower",
    icon: "✹",
    light: "밝은 빛과 오전 햇빛을 좋아합니다. 빛이 부족하면 꽃대가 약해지고 꽃이 오래가지 않습니다.",
    water: "겉흙이 마르면 물을 주되 꽃과 잎 사이가 오래 젖어 있지 않게 합니다.",
    environment: "서늘하고 통풍 좋은 창가나 베란다가 좋습니다. 고온다습한 환경에서는 꽃이 빨리 상할 수 있습니다.",
    warning: "꽃이 갈변하거나 줄기가 물러지면 과습, 통풍 부족, 높은 온도를 확인하세요.",
    tags: ["오전 햇빛", "서늘하게", "통풍"]
  },
  {
    name: "적상추",
    type: "색이 진한 잎을 수확하는 상추류",
    category: "edible",
    icon: "☘",
    light: "밝은 빛이 필요하지만 한여름 강한 오후 햇빛은 잎을 질기게 할 수 있습니다.",
    water: "흙이 마르지 않게 관리합니다. 물마름이 반복되면 잎이 억세지고 쓴맛이 강해질 수 있습니다.",
    environment: "서늘한 15~22도와 통풍 좋은 장소가 좋습니다. 더우면 꽃대가 빨리 올라올 수 있습니다.",
    warning: "잎 끝이 마르거나 쓴맛이 강해지면 고온과 물마름을 먼저 확인하세요.",
    tags: ["상추", "서늘하게", "마름 주의"]
  },
  {
    name: "청상추",
    type: "부드러운 잎을 계속 수확하는 상추류",
    category: "edible",
    icon: "☘",
    light: "밝은 빛에서 잘 자라며, 여름에는 강한 직사광보다 오전 햇빛이 안정적입니다.",
    water: "흙을 촉촉하게 유지하되 물고임은 피합니다. 잎채소라 건조 스트레스에 약합니다.",
    environment: "서늘하고 통풍 좋은 창가나 베란다가 좋습니다. 바깥잎부터 수확하면 오래 먹을 수 있습니다.",
    warning: "잎이 축 처지면 물마름, 줄기가 길어지면 빛 부족이나 고온을 확인하세요.",
    tags: ["상추", "반복 수확", "촉촉하게"]
  },
  {
    name: "스노우사파이어",
    type: "흰 무늬가 있는 실내 관엽식물",
    category: "foliage",
    icon: "▣",
    light: "밝은 간접광에서 무늬가 깨끗하게 유지됩니다. 직사광은 잎 끝을 태울 수 있습니다.",
    water: "겉흙이 마른 뒤 충분히 줍니다. 큰 화분이라면 속흙 마름까지 확인하는 편이 안전합니다.",
    environment: "따뜻한 실내와 안정적인 습도를 좋아합니다. 에어컨 바람이나 겨울 찬바람은 피합니다.",
    warning: "잎이 누렇게 변하면 과습, 갈색으로 마르면 건조나 직사광을 확인하세요.",
    tags: ["무늬 잎", "밝은 간접광", "찬바람 주의"]
  }
];

const plantByName = new Map(plants.map((plant) => [plant.name, plant]));
const peopleGrid = document.querySelector("#peopleGrid");
const grid = document.querySelector("#plantGrid");
const rows = document.querySelector("#comparisonRows");
const searchInput = document.querySelector("#searchInput");
const chips = document.querySelectorAll(".chip");
const plantSectionTitle = document.querySelector("#plantSectionTitle");
const activeProfileNote = document.querySelector("#activeProfileNote");

let activeFilter = "all";
let activePersonId = "trainer";

function getActivePerson() {
  return people.find((person) => person.id === activePersonId) || people[0];
}

function getVisiblePlants() {
  const activePerson = getActivePerson();
  return activePerson.plants.map((name) => plantByName.get(name)).filter(Boolean);
}

function makePersonCard(person) {
  const isActive = person.id === activePersonId;
  const plantCount = person.plants.length;
  const previewPlants = person.plants.slice(0, 6).join(", ");

  return `
    <button class="person-card ${isActive ? "is-active" : ""}" type="button" data-person="${person.id}">
      <span class="person-card__name">${person.name}</span>
      <span class="person-card__count">${plantCount}종</span>
      <span class="person-card__subtitle">${person.subtitle}</span>
      <span class="person-card__plants">${previewPlants}${person.plants.length > 5 ? "..." : ""}</span>
    </button>
  `;
}

function makeCard(plant) {
  return `
    <article class="plant-card" data-category="${plant.category}">
      <div class="plant-card__top">
        <div class="plant-icon" aria-hidden="true">${plant.icon}</div>
        <div>
          <h3>${plant.name}</h3>
          <p class="plant-card__type">${plant.type}</p>
        </div>
      </div>
      <div class="plant-card__body">
        <div class="care-row">
          <span>빛</span>
          <p>${plant.light}</p>
        </div>
        <div class="care-row">
          <span>물주기</span>
          <p>${plant.water}</p>
        </div>
        <div class="care-row">
          <span>좋아하는 환경</span>
          <p>${plant.environment}</p>
        </div>
        <div class="care-row">
          <span>주의 신호</span>
          <p>${plant.warning}</p>
        </div>
        <div class="tags">
          ${plant.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
      </div>
    </article>
  `;
}

function makeRow(plant) {
  return `
    <tr>
      <td><strong>${plant.name}</strong><br>${plant.type}</td>
      <td>${plant.light}</td>
      <td>${plant.water}</td>
      <td>${plant.warning}</td>
    </tr>
  `;
}

function matchesSearch(plant, query) {
  const activePerson = getActivePerson();
  const text = [
    plant.name,
    plant.type,
    plant.light,
    plant.water,
    plant.environment,
    plant.warning,
    activePerson.name,
    ...plant.tags
  ].join(" ");

  return text.toLowerCase().includes(query.toLowerCase().trim());
}

function renderPeople() {
  peopleGrid.innerHTML = people.map(makePersonCard).join("");

  peopleGrid.querySelectorAll(".person-card").forEach((card) => {
    card.addEventListener("click", () => {
      activePersonId = card.dataset.person;
      render();
      document.querySelector("#plants").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function render() {
  const activePerson = getActivePerson();
  const query = searchInput.value;
  const filtered = getVisiblePlants().filter((plant) => {
    const filterMatch = activeFilter === "all" || plant.category === activeFilter;
    return filterMatch && matchesSearch(plant, query);
  });

  plantSectionTitle.textContent = `${activePerson.name}의 식물 노트`;
  activeProfileNote.textContent = `${activePerson.environment} ${activePerson.focus}`;
  grid.innerHTML = filtered.map(makeCard).join("");
  rows.innerHTML = filtered.map(makeRow).join("");

  if (filtered.length === 0) {
    grid.innerHTML = '<p class="empty">검색 조건에 맞는 식물이 없습니다.</p>';
    rows.innerHTML = "";
  }

  renderPeople();
}

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach((item) => item.classList.remove("is-active"));
    chip.classList.add("is-active");
    activeFilter = chip.dataset.filter;
    render();
  });
});

searchInput.addEventListener("input", render);

render();
