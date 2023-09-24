import {
  ForwardedRef,
  RefObject,
  forwardRef,
  memo,
  useImperativeHandle,
  useState
} from 'react';
import { SliderRef } from '../../components/slider';
import { Pressable, Text, View } from 'react-native';

export type FlatMonthCalendarItemProps = {
  index: number;
  sliderRef: RefObject<SliderRef>;
  onPress: (index: number, ref: ForwardedRef<FlatCalendarItemRef>) => void;
  item: Date;
  enabled?: boolean;
};

export type FlatCalendarItemRef = {
  changeState: (enable: boolean) => void;
};

export const FlatMonthCalendarItem = memo(
  forwardRef<FlatCalendarItemRef, FlatMonthCalendarItemProps>((props, ref) => {
    const [enable, setEnable] = useState<boolean>(props.enabled ?? false);

    useImperativeHandle(
      ref,
      () => ({
        changeState(enable: boolean) {
          setEnable(enable);
        }
      }),
      []
    );

    return (
      <Pressable
        key={props.index}
        onPress={() => {
          props.onPress(props.index, ref);
          setEnable(true);
          props.sliderRef.current?.toItemIndex(props.index);
        }}
      >
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 10,
            backgroundColor: enable ? 'black' : '#EEEEE3',
            padding: 20,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text
            style={{
              fontFamily: 'lexend',
              color: enable ? '#EEEEE3' : 'black',
              fontWeight: '800'
            }}
          >
            {props.item
              .toLocaleDateString('en-US', { weekday: 'long' })
              .slice(0, 3)}
          </Text>
          <Text
            style={{
              fontFamily: 'lexend',
              color: enable ? '#EEEEE3' : 'black'
            }}
          >
            {props.item.getDate()}
          </Text>
        </View>
      </Pressable>
    );
  })
);
