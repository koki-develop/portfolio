import ImageCard, { ImageCardProps } from "@/components/util/ImageCard";
import { ColProps, Grid } from "@mantine/core";
import React, { memo } from "react";

export type ImageCardListProps = {
  items: ImageCardProps[];
  col: ColProps;
};

const ImageCardList: React.FC<ImageCardListProps> = memo((props) => {
  const { items, col } = props;

  return (
    <Grid>
      {items.map((item) => (
        <Grid.Col key={item.name} {...col}>
          <ImageCard {...item} />
        </Grid.Col>
      ))}
    </Grid>
  );
});

ImageCardList.displayName = "ImageCardList";

export default ImageCardList;
