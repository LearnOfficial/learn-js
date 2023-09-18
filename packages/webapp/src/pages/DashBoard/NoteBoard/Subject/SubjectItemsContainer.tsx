import { StaticImage } from '@learn/ui';
import { useRef } from 'react';
import { Pressable, Text, View } from 'react-native';
import { SubjectItem } from './SubjectItem';
import { Slider } from '../../components/slider';

export type SubjectItemsContainerProps = {
  onAdd?: () => void;
  data: ArrayLike<any>;
};

export function SubjectItemsContainer({
  onAdd,
  data
}: SubjectItemsContainerProps) {
  const sliderRef = useRef<Slider>(null);

  return (
    <>
      <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
        <Pressable
          onPress={() => {
            sliderRef.current?.toBeforeItem();
          }}
        >
          <Text>Before</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            sliderRef.current?.toNextItem();
          }}
        >
          <Text>Next</Text>
        </Pressable>
      </View>
      <View style={{ flexDirection: 'row', gap: 10, flexWrap: 'wrap' }}>
        <Slider
          ref={sliderRef}
          data={data}
          renderItem={({ item }) => (
            <SubjectItem
              title={item.title}
              backgroundColor={item.backgroundColor}
            />
          )}
        />

        <Pressable
          style={{
            padding: 5,
            backgroundColor: 'black',
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onPress={() => {
            sliderRef.current?.toLastItem();

            if (onAdd) {
              onAdd();
            }
          }}
        >
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <StaticImage size={30} image="AddIcon" />
          </View>
        </Pressable>
      </View>
    </>
  );
}
