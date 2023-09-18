import {
  MutableRefObject,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef
} from 'react';
import {
  FlatList,
  ListRenderItem,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
  ViewToken
} from 'react-native';

export type IOnViewableItemsChangeParams = {
  viewableItems: ViewToken[];
  changed: ViewToken[];
};

export type Slider = {
  toNextItem: () => void;
  toBeforeItem: () => void;
  toLastItem: () => void;
  toFirstItem: () => void;
  toItemIndex: (index: number) => void;
  refresh: () => void;
};
export type SliderProps = {
  data: MutableRefObject<any[]>;
  renderItem: ListRenderItem<any>;
  contentContainerStyle?: StyleProp<ViewStyle>;
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
  });

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

  const lastItemCallback = useCallback(() => {
    itemsListRef.current?.scrollToEnd({ animated: true });
  }, [props.data]);

  const firstItemCallback = useCallback(() => {
    itemsListRef.current?.scrollToIndex({ index: 0, animated: true });
  }, [props.data]);

  const itemIndexCallback = useCallback(
    (index: number) => {
      itemsListRef.current?.scrollToIndex({
        index: index,
        animated: true,
        viewPosition: 0.5,
        viewOffset:
          -index * StyleSheet.flatten(props.contentContainerStyle)?.gap! ?? 1
      });
    },
    [props.data]
  );

  const refresh = useCallback(() => {
    itemsListRef.current?.forceUpdate();
  }, [props.data]);
  useImperativeHandle(
    ref,
    () => ({
      toFirstItem: firstItemCallback,
      toBeforeItem: beforeItemCallback,
      toNextItem: nextItemCallback,
      toLastItem: lastItemCallback,
      toItemIndex: itemIndexCallback,
      refresh: refresh
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
      contentContainerStyle={[props.contentContainerStyle]}
      data={props.data.current}
      renderItem={({ index, separators, item }) => {
        return (
          <props.renderItem
            key={index}
            index={index}
            item={item}
            separators={separators}
          />
        );
      }}
      ListFooterComponent={() => {
        return <></>;
      }}
      keyExtractor={(item) => item.id}
    />
  );
});
