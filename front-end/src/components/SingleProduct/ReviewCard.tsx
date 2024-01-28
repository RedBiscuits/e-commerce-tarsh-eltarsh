import { createStars } from "@/lib/createStarts";
import { Card, CardContent, CardHeader } from "../ui/card";
import { inter, poppins, noto, serif } from "@/lib/fonts";

type IReviewCardProps = {
  title: string;
  text: string;
  rating: number;
  name: string;
};

export const ReviewCard = ({ title, text, rating, name }: IReviewCardProps) => {
  return (
    <Card className={poppins.className}>
      <CardHeader>
        <p className="font-bold text-xl">{title}</p>
        <p>
          by <span className="text-primary">{name}</span>
        </p>
        <div className="flex">{createStars(rating)}</div>
      </CardHeader>
      <CardContent>{text}</CardContent>
    </Card>
  );
};
