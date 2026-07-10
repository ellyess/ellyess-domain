import { renderShareCard, SHARE_CARD_SIZE } from "@/lib/share-card";

export const size = SHARE_CARD_SIZE;
export const contentType = "image/png";

export default function TwitterImage() {
  return renderShareCard(
    "Wind power modelling, reanalysis bias correction, and scientific Python.",
  );
}
