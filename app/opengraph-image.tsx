import { renderShareCard, SHARE_CARD_SIZE } from "@/lib/share-card";

export const size = SHARE_CARD_SIZE;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return renderShareCard(
    "Wind resource modelling, climate data validation and research software in Python.",
  );
}
