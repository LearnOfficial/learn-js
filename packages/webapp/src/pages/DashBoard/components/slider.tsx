import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef
} from 'react';
import { FlatList, ListRenderItem, ViewToken } from 'react-native';

export type IOnViewableItemsChangeParams = {
  viewableItems: ViewToken[];
  changed: ViewToken[];
};

export type Slider = {
  toNextItem: () => void;
  toBeforeItem: () => void;
  toLastItem: () => void;
  toFirstItem: () => void;
};
export type SliderProps = {
  data: ArrayLike<any>;
  renderItem: ListRenderItem<any>;
};

export const Slider = forwardRef<Slider, SliderProps>((props, ref) => {
  const itemsListRef = useRef<FlatList<any>>(null);

  const viewableItemsRef = useRef<ViewToken[]>([]);
  const viewableItemsOffset = useRef<
    { length: number; lastItemIndex: number; firstItemIndex: number }[]
  >([]);
  const onViewableItemsChanged = useRef<
    (info: IOnViewableItemsChangeParams) => void
  >(({ viewableItems }: IOnViewableItemsChangeParams) => {
    viewableItemsRef.current = viewableItems;
    console.log(viewableItems);
  });

  useEffect(() => {
    itemsListRef.current?.scrollToIndex({ index: 0, animated: true });
  }, [props.data]);

  const beforeItemCallback = useCallback(() => {
    if (viewableItemsOffset.current.length == 0) {
      return;
    }
    const offsetIndexes =
      viewableItemsOffset.current[viewableItemsOffset.current?.length - 1]
        ?.firstItemIndex;
    itemsListRef.current?.scrollToIndex({
      index: offsetIndexes,
      animated: true
    });
    viewableItemsOffset.current.pop();
  }, [props.data]);

  const nextItemCallback = useCallback(() => {
    const lastItem =
      viewableItemsRef.current[viewableItemsRef.current.length - 1];
    const lastItemOffset =
      viewableItemsOffset.current[viewableItemsOffset.current.length - 1];
    const firstItem = viewableItemsRef.current[0];

    if (lastItemOffset?.lastItemIndex != lastItem.index) {
      viewableItemsOffset.current.push({
        length: viewableItemsRef.current.length,
        lastItemIndex: lastItem.index!,
        firstItemIndex: firstItem.index!
      });
    }

    itemsListRef.current?.scrollToIndex({
      index: lastItem.index!,
      animated: true
    });
  }, [props.data]);

  const lastItemCallback = () => {
    itemsListRef.current?.scrollToEnd({ animated: true });
  };

  const firstItemCallback = () => {
    itemsListRef.current?.scrollToIndex({ index: 0, animated: true });
  };

  useImperativeHandle(
    ref,
    () => ({
      toFirstItem: firstItemCallback,
      toBeforeItem: beforeItemCallback,
      toNextItem: nextItemCallback,
      toLastItem: lastItemCallback
    }),
    [props.data]
  );

  return (
    <FlatList
      ref={itemsListRef}
      bounces
      showsHorizontalScrollIndicator={false}
      onViewableItemsChanged={onViewableItemsChanged.current}
      onContentSizeChange={() => {
        itemsListRef.current?.forceUpdate();
      }}
      horizontal
      contentContainerStyle={{ gap: 20 }}
      data={props.data}
      renderItem={props.renderItem}
      keyExtractor={(item) => item.id}
    />
  );
});
