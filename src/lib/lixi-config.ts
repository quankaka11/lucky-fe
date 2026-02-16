import reward50k from "@/assets/reward-50k.png";
import reward100k from "@/assets/reward-100k.png";
import reward200k from "@/assets/reward-200k.png";
import reward500k from "@/assets/reward-500k.png";
import rewardSpecial from "@/assets/reward-special.png";

export type LixiType = "50k" | "100k" | "200k" | "500k" | "special";

export type ConfettiLevel = "small" | "medium" | "large" | "epic";

export type UIStatus = "idle" | "opening" | "revealed";

export interface LixiResult {
  imageType: LixiType;
  imageUrl: string;
  wishText: string;
  confetti: ConfettiLevel;
}

export const LIXI_CONFIG: Record<
  LixiType,
  { image: string; probability: number; confetti: ConfettiLevel; label: string }
> = {
  "50k": {
    image: reward50k,
    probability: 0.2,
    confetti: "small",
    label: "50.000đ",
  },
  "100k": {
    image: reward100k,
    probability: 0.3,
    confetti: "small",
    label: "100.000đ",
  },
  "200k": {
    image: reward200k,
    probability: 0.2,
    confetti: "medium",
    label: "200.000đ",
  },
  "500k": {
    image: reward500k,
    probability: 0.2,
    confetti: "large",
    label: "500.000đ",
  },
  special: {
    image: rewardSpecial,
    probability: 0.1,
    confetti: "epic",
    label: "🎆 ĐẶC BIỆT",
  },
};

export function randomLixi(): LixiType {
  const rand = Math.random();
  let acc = 0;
  for (const [key, value] of Object.entries(LIXI_CONFIG)) {
    acc += value.probability;
    if (rand <= acc) return key as LixiType;
  }
  return "50k";
}

const MOCK_WISH: Record<LixiType, string[]> = {
  "50k": [
    "Chúc năm mới nhẹ nhàng, tiền vào đều đều 🍀",
    "Năm mới bình an, túi luôn rủng rỉnh 💚",
    "Khởi đầu may mắn, tài lộc song hành 🌿",
  ],
  "100k": [
    "Chúc bạn an khang, tài lộc khởi sắc 💰",
    "Năm mới vạn sự như ý, tiền tài dồi dào 🎋",
    "Phúc lộc đầy nhà, công việc thuận buồm 🏮",
  ],
  "200k": [
    "Công việc hanh thông, lộc đến bất ngờ ✨",
    "Tài lộc phơi phới, vạn sự hanh thông 🌟",
    "Năm mới đại cát, tiền vào như nước 💫",
  ],
  "500k": [
    "Phát tài phát lộc, tiền rủng rỉnh cả năm 🧧",
    "Đại phát, đại lộc – năm nay là năm của bạn! 🎊",
    "Tài lộc dồi dào, phú quý song toàn 🏆",
  ],
  special: [
    "WOW! Siêu may mắn – năm nay chắc chắn bứt phá 🎆",
    "JACKPOT! Vận may đỉnh cao, cả năm rực rỡ 🌈✨",
    "Trời ơi! Bạn là người được chọn – đại cát đại lợi! 🐉🔥",
  ],
};

function randomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export async function getWish(imageType: LixiType, userName?: string): Promise<string> {
  const enableAI = import.meta.env.VITE_ENABLE_AI === "true";
  const apiUrl = import.meta.env.VITE_AI_API_URL || "http://localhost:8000/api";
  const timeout = Number(import.meta.env.VITE_AI_TIMEOUT) || 8000;

  if (!enableAI) {
    return randomItem(MOCK_WISH[imageType]);
  }

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeout);

    const res = await fetch(`${apiUrl}/wish`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lixi_type: imageType, user_name: userName ?? null }),
      signal: controller.signal,
    });
    clearTimeout(timer);

    if (!res.ok) throw new Error(`API error: ${res.status}`);

    const data = await res.json();
    return data.wish_text;
  } catch (err) {
    console.warn("[getWish] AI call failed, falling back to mock:", err);
    return randomItem(MOCK_WISH[imageType]);
  }
}
