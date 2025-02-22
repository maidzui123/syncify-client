import { mediaDef } from "@/constants/types/post.ts";
type swiperProps = {
    mediaList: mediaDef[];
    isEditable?: boolean;
    onRemove?: (index: number) => void;
};
declare const Swiper: (props: swiperProps) => import("react/jsx-runtime").JSX.Element;
export default Swiper;
