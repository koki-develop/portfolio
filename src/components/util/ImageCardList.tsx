import ImageCard, { ImageCardProps } from "@/components/util/ImageCard";
import { ColProps, Grid } from "@mantine/core";
import React, { memo } from "react";

export type ImageCardListProps = {
  items: Omit<ImageCardProps, "size">[];
  size?: "md" | "lg";
  col: ColProps;
};

const ImageCardList: React.FC<ImageCardListProps> = memo((props) => {
  const { items, col, size = "md" } = props;

  return (
    <Grid>
      {items.map((item) => (
        <Grid.Col key={item.name} {...col}>
          <ImageCard {...item} size={size} />
        </Grid.Col>
      ))}
    </Grid>
  );
});

ImageCardList.displayName = "ImageCardList";

export default ImageCardList;
