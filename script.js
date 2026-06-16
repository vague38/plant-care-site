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
  }
];

const grid = document.querySelector("#plantGrid");
const rows = document.querySelector("#comparisonRows");
const searchInput = document.querySelector("#searchInput");
const chips = document.querySelectorAll(".chip");

let activeFilter = "all";

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
  const text = [
    plant.name,
    plant.type,
    plant.light,
    plant.water,
    plant.environment,
    plant.warning,
    ...plant.tags
  ].join(" ");

  return text.toLowerCase().includes(query.toLowerCase().trim());
}

function render() {
  const query = searchInput.value;
  const filtered = plants.filter((plant) => {
    const filterMatch = activeFilter === "all" || plant.category === activeFilter;
    return filterMatch && matchesSearch(plant, query);
  });

  grid.innerHTML = filtered.map(makeCard).join("");
  rows.innerHTML = filtered.map(makeRow).join("");

  if (filtered.length === 0) {
    grid.innerHTML = '<p class="empty">검색 조건에 맞는 식물이 없습니다.</p>';
  }
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
