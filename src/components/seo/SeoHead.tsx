import type { RouteKey } from "@/config/seo";
import { useSeo } from "@/hooks/useSeo";

interface SeoHeadProps {
  routeKey: RouteKey;
  titleOverride?: Record<string, string>;
  descriptionOverride?: Record<string, string>;
  imageOverride?: string;
  urlOverride?: string;
  typeOverride?: "website" | "article";
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  routeKey,
  titleOverride,
  descriptionOverride,
  imageOverride,
  urlOverride,
  typeOverride,
}) => {
  useSeo(routeKey, {
    title: titleOverride,
    description: descriptionOverride,
    image: imageOverride,
    url: urlOverride,
    type: typeOverride,
  });

  return null;
};

export default SeoHead;
