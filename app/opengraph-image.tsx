import { renderShareCard, SHARE_CARD_SIZE } from "@/lib/share-card";

export const size = SHARE_CARD_SIZE;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return renderShareCard(
    "Scientific Python, reanalysis modelling, and research software engineering.",
  );
}
